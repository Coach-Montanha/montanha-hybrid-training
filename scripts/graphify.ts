import * as fs from "fs";
import * as path from "path";

// Tipos do Knowledge Graph (Graphify Specification)
export interface GraphNode {
  id: string;
  label: string;
  path: string;
  category: string;
  type: string;
  lines: number;
  size: number;
  inDegree: number;
  outDegree: number;
  exportedSymbols?: string[];
  tablesAccessed?: string[];
}

export interface GraphEdge {
  source: string;
  target: string;
  type: "imports" | "calls_server_fn" | "queries_table" | "routes_to" | "depends_on";
  confidence: "EXTRACTED" | "INFERRED";
}

export interface GraphCommunity {
  id: string;
  name: string;
  color: string;
  nodeCount: number;
  description: string;
}

export interface GraphOutput {
  meta: {
    project: string;
    version: string;
    generatedAt: string;
    mode: string;
    totalNodes: number;
    totalEdges: number;
    graphDensity: number;
    godNodes: { id: string; label: string; connections: number; category: string }[];
  };
  communities: GraphCommunity[];
  nodes: GraphNode[];
  edges: GraphEdge[];
}

const ROOT_DIR = process.cwd();
const OUT_DIR = path.join(ROOT_DIR, "graphify-out");

const EXCLUDE_DIRS = new Set([
  "node_modules",
  ".git",
  ".output",
  "dist",
  ".tanstack",
  ".wrangler",
  ".lovable",
  "graphify-out",
  ".gemini",
  "brain",
]);

const CATEGORY_COLORS: Record<string, string> = {
  "AI & Engine": "#10b981", // Emerald / Green
  "Routes & Pages": "#3b82f6", // Blue
  "Session Builder": "#f59e0b", // Amber
  "Athletic Tools": "#ec4899", // Pink
  "Supabase & DB": "#8b5cf6", // Purple
  "UI Core": "#64748b", // Slate
  "App State & Lib": "#06b6d4", // Cyan
  "Documentation & Config": "#94a3b8", // Light Slate
};

function categorizeFile(relPath: string): { category: string; type: string } {
  const norm = relPath.replace(/\\/g, "/");

  if (norm.includes("prescricao-ia") || norm.includes("hibrido-ia") || norm.includes("continuation") || 
      norm.includes("athlete-memory") || norm.includes("-ia.server") || norm.includes("ai-gateway")) {
    return { category: "AI & Engine", type: "ai-engine" };
  }
  if (norm.startsWith("src/routes/")) {
    return { category: "Routes & Pages", type: norm.includes("api/") ? "api-route" : "page-route" };
  }
  if (norm.includes("session-builder") || norm.includes("session-builder-store") || norm.includes("format-registry") || norm.includes("set-type-registry")) {
    return { category: "Session Builder", type: "workout-engine" };
  }
  if (norm.includes("timers/") || norm.includes("calculators/") || norm.includes("audio-beeps") || norm.includes("pdf-treino") || norm.includes("whatsapp-share")) {
    return { category: "Athletic Tools", type: "athletic-tool" };
  }
  if (norm.includes("integrations/supabase") || norm.includes("supabase/") || norm.includes("database.types")) {
    return { category: "Supabase & DB", type: "data-access" };
  }
  if (norm.startsWith("src/components/ui/")) {
    return { category: "UI Core", type: "ui-primitive" };
  }
  if (norm.startsWith("src/components/")) {
    return { category: "Routes & Pages", type: "feature-component" };
  }
  if (norm.startsWith("src/lib/") || norm.startsWith("src/hooks/")) {
    return { category: "App State & Lib", type: "utility-hook" };
  }
  if (norm.endsWith(".md") || norm.endsWith(".json") || norm.includes("config") || norm.startsWith("public/")) {
    return { category: "Documentation & Config", type: "config-doc" };
  }

  return { category: "App State & Lib", type: "source-code" };
}

function scanFiles(dir: string, fileList: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (EXCLUDE_DIRS.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      scanFiles(fullPath, fileList);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if ([".ts", ".tsx", ".js", ".jsx", ".json", ".sql", ".md"].includes(ext)) {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

function resolveImportPath(currentFile: string, importStr: string): string | null {
  if (!importStr || importStr.startsWith("node:") || (!importStr.startsWith(".") && !importStr.startsWith("@/"))) {
    return null; // external module
  }

  let resolvedBase = "";
  if (importStr.startsWith("@/")) {
    resolvedBase = path.join(ROOT_DIR, "src", importStr.slice(2));
  } else {
    resolvedBase = path.resolve(path.dirname(currentFile), importStr);
  }

  const candidateExtensions = ["", ".ts", ".tsx", ".js", ".jsx", "/index.ts", "/index.tsx", "/index.js"];
  for (const ext of candidateExtensions) {
    const candidate = resolvedBase + ext;
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return path.relative(ROOT_DIR, candidate).replace(/\\/g, "/");
    }
  }

  return null;
}

export function runGraphify() {
  console.log("⚡ [Graphify Eco] Escaneando o repositório do Sistema Híbrido de Treinamento...");
  const allFiles = scanFiles(ROOT_DIR);
  console.log(`📁 [Graphify Eco] Encontrados ${allFiles.length} arquivos fonte para análise estrutural.`);

  const nodesMap = new Map<string, GraphNode>();
  const rawEdges: { source: string; target: string; type: GraphEdge["type"]; confidence: GraphEdge["confidence"] }[] = [];
  const dbTables = new Set<string>();

  // 1. Criar nós para cada arquivo
  for (const file of allFiles) {
    const relPath = path.relative(ROOT_DIR, file).replace(/\\/g, "/");
    const stats = fs.statSync(file);
    const content = fs.readFileSync(file, "utf-8");
    const lineCount = content.split("\n").length;
    const { category, type } = categorizeFile(relPath);

    // Extrair tabelas acessadas do Supabase
    const tableMatches = [...content.matchAll(/\.from\(["']([a-zA-Z0-9_-]+)["']\)/g)].map((m) => m[1]);
    const uniqueTables = Array.from(new Set(tableMatches));
    uniqueTables.forEach((t) => dbTables.add(t));

    // Extrair símbolos exportados
    const exportMatches = [...content.matchAll(/export\s+(?:const|function|class|type|interface)\s+([a-zA-Z0-9_$]+)/g)].map((m) => m[1]);

    nodesMap.set(relPath, {
      id: relPath,
      label: path.basename(relPath),
      path: relPath,
      category,
      type,
      lines: lineCount,
      size: stats.size,
      inDegree: 0,
      outDegree: 0,
      exportedSymbols: exportMatches.slice(0, 10),
      tablesAccessed: uniqueTables,
    });
  }

  // 2. Criar nós conceituais para Tabelas do Banco de Dados
  for (const table of dbTables) {
    const tableId = `db:table/${table}`;
    nodesMap.set(tableId, {
      id: tableId,
      label: `table:${table}`,
      path: `supabase/schema/${table}`,
      category: "Supabase & DB",
      type: "database-table",
      lines: 1,
      size: 0,
      inDegree: 0,
      outDegree: 0,
    });
  }

  // 3. Extrair conexões (Edges)
  for (const file of allFiles) {
    const relPath = path.relative(ROOT_DIR, file).replace(/\\/g, "/");
    const content = fs.readFileSync(file, "utf-8");

    // Conexões de Import
    const importRegex = /(?:import|export)\s+(?:[\s\S]*?from\s+)?["']([^"']+)["']/g;
    let match: RegExpExecArray | null;

    while ((match = importRegex.exec(content)) !== null) {
      const importStr = match[1];
      const resolvedTarget = resolveImportPath(file, importStr);
      if (resolvedTarget && nodesMap.has(resolvedTarget) && resolvedTarget !== relPath) {
        rawEdges.push({
          source: relPath,
          target: resolvedTarget,
          type: "imports",
          confidence: "EXTRACTED",
        });
      }
    }

    // Conexões de Tabela Supabase
    const node = nodesMap.get(relPath);
    if (node?.tablesAccessed) {
      for (const t of node.tablesAccessed) {
        const tableId = `db:table/${t}`;
        if (nodesMap.has(tableId)) {
          rawEdges.push({
            source: relPath,
            target: tableId,
            type: "queries_table",
            confidence: "EXTRACTED",
          });
        }
      }
    }
  }

  // Desduplicar edges e calcular graus
  const edgeKeySet = new Set<string>();
  const finalEdges: GraphEdge[] = [];

  for (const e of rawEdges) {
    const key = `${e.source}-->${e.target}`;
    if (!edgeKeySet.has(key)) {
      edgeKeySet.add(key);
      finalEdges.push(e);

      const srcNode = nodesMap.get(e.source);
      const tgtNode = nodesMap.get(e.target);
      if (srcNode) srcNode.outDegree++;
      if (tgtNode) tgtNode.inDegree++;
    }
  }

  const nodes = Array.from(nodesMap.values());

  // Identificar God Nodes (maior conectividade no grafo)
  const godNodes = [...nodes]
    .map((n) => ({
      id: n.id,
      label: n.label,
      connections: n.inDegree + n.outDegree,
      category: n.category,
    }))
    .sort((a, b) => b.connections - a.connections)
    .slice(0, 12);

  // Comunidades/Clusters
  const communities: GraphCommunity[] = [
    {
      id: "ai-engine",
      name: "AI & Engine",
      color: CATEGORY_COLORS["AI & Engine"],
      nodeCount: nodes.filter((n) => n.category === "AI & Engine").length,
      description: "Motores de IA generativa (Musculação, Híbrido, KB Fitness, KB Sport, LPO, Funcional, Corrida), memória semântica do atleta e gateway de LLM.",
    },
    {
      id: "routes",
      name: "Routes & Pages",
      color: CATEGORY_COLORS["Routes & Pages"],
      nodeCount: nodes.filter((n) => n.category === "Routes & Pages").length,
      description: "Páginas do treinador (Alunos, Treinos, Programas, Gerador, Dashboard) e Portal do Aluno com TanStack Router.",
    },
    {
      id: "session-builder",
      name: "Session Builder",
      color: CATEGORY_COLORS["Session Builder"],
      nodeCount: nodes.filter((n) => n.category === "Session Builder").length,
      description: "Editor de sessões drag-and-drop, ordenação de blocos, catálogo de exercícios e registro de formatos técnicos.",
    },
    {
      id: "athletic-tools",
      name: "Athletic Tools",
      color: CATEGORY_COLORS["Athletic Tools"],
      nodeCount: nodes.filter((n) => n.category === "Athletic Tools").length,
      description: "Timers de treino (EMOM, AMRAP, Tabata), sintetizador de áudio Web Audio, Calculadora 1RM e exportador A4 em PDF.",
    },
    {
      id: "supabase-db",
      name: "Supabase & DB",
      color: CATEGORY_COLORS["Supabase & DB"],
      nodeCount: nodes.filter((n) => n.category === "Supabase & DB").length,
      description: "Cliente Supabase, autenticação JWT, tipos PostgREST e mapeamento de tabelas (programs, sessions, students, etc.).",
    },
    {
      id: "ui-core",
      name: "UI Core",
      color: CATEGORY_COLORS["UI Core"],
      nodeCount: nodes.filter((n) => n.category === "UI Core").length,
      description: "Design system shadcn/Radix otimizado para o padrão escuro Coach Montanha (#0F1115).",
    },
    {
      id: "app-lib",
      name: "App State & Lib",
      color: CATEGORY_COLORS["App State & Lib"],
      nodeCount: nodes.filter((n) => n.category === "App State & Lib").length,
      description: "Stores Zustand, utilitários, formatação de dados e validações Zod.",
    },
    {
      id: "docs-config",
      name: "Documentation & Config",
      color: CATEGORY_COLORS["Documentation & Config"],
      nodeCount: nodes.filter((n) => n.category === "Documentation & Config").length,
      description: "Regras de agentes (AGENTS.md, GEMINI.md), Service Worker PWA e configs de build.",
    },
  ];

  const totalPossibleEdges = nodes.length > 1 ? (nodes.length * (nodes.length - 1)) : 1;
  const graphDensity = Number((finalEdges.length / totalPossibleEdges).toFixed(5));

  const graphOutput: GraphOutput = {
    meta: {
      project: "Sistema Híbrido de Treinamento — Coach Montanha",
      version: "3.2.0-eco",
      generatedAt: new Date().toISOString(),
      mode: "eco",
      totalNodes: nodes.length,
      totalEdges: finalEdges.length,
      graphDensity,
      godNodes,
    },
    communities,
    nodes,
    edges: finalEdges,
  };

  // Assegurar diretório de saída
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  // 1. Gravar graph.json
  const jsonPath = path.join(OUT_DIR, "graph.json");
  fs.writeFileSync(jsonPath, JSON.stringify(graphOutput, null, 2), "utf-8");
  console.log(`✅ [Graphify Eco] Gerado: ${jsonPath} (${nodes.length} nós, ${finalEdges.length} arestas)`);

  // 2. Gravar GRAPH_REPORT.md
  const reportPath = path.join(OUT_DIR, "GRAPH_REPORT.md");
  fs.writeFileSync(reportPath, generateMarkdownReport(graphOutput), "utf-8");
  console.log(`✅ [Graphify Eco] Gerado: ${reportPath}`);

  // 3. Gravar graph.html
  const htmlPath = path.join(OUT_DIR, "graph.html");
  fs.writeFileSync(htmlPath, generateInteractiveHtml(graphOutput), "utf-8");
  console.log(`✅ [Graphify Eco] Gerado: ${htmlPath}`);

  console.log("🚀 [Graphify Eco] Execução concluída com sucesso!");
}

function generateMarkdownReport(data: GraphOutput): string {
  const topGods = data.meta.godNodes;
  const totalLines = data.nodes.reduce((acc, n) => acc + n.lines, 0);

  return `# Knowledge Graph Report — Sistema Híbrido de Treinamento

Relatório arquitetural estruturado gerado via **Graphify (Modo Eco)**. Este documento fornece um mapa durável do repositório para agentes de IA e engenheiros humanos, eliminando a necessidade de buscas excessivas (*grep token waste*) em arquivos brutos.

---

## 📊 Estatísticas Gerais do Repositório

| Métrica | Valor |
| :--- | :--- |
| **Total de Nós no Grafo** | **${data.meta.totalNodes}** componentes/módulos/tabelas |
| **Total de Conexões (Arestas)** | **${data.meta.totalEdges}** relações (imports, queries, chamadas) |
| **Densidade do Grafo** | **${data.meta.graphDensity}** |
| **Total de Linhas Analisadas** | **${totalLines.toLocaleString("pt-BR")}** linhas de código/docs |
| **Modo de Operação** | \`@eco\` (Token-Efficient AST Extraction) |
| **Data de Geração** | ${new Date(data.meta.generatedAt).toLocaleString("pt-BR")} |

---

## 👑 "God Nodes" (Módulos de Maior Centralidade)

Estes são os componentes mais acoplados e fundamentais do sistema. Qualquer refatoração neles gera impacto em cascata.

| Módulo / Entidade | Conexões | Categoria | Papel Arquitetural |
| :--- | :---: | :--- | :--- |
${topGods
  .map(
    (g, idx) =>
      `| **${idx + 1}. \`${g.label}\`** | **${g.connections}** | \`${g.category}\` | ${getNodeDescription(g.id)} |`
  )
  .join("\n")}

---

## 🧩 Clusters & Comunidades Arquiteturais

${data.communities
  .map(
    (c) => `### 🟢 ${c.name} (${c.nodeCount} nós)
- **Descrição**: ${c.description}
- **Principais Nós**:
${data.nodes
  .filter((n) => n.category === c.name)
  .sort((a, b) => b.inDegree + b.outDegree - (a.inDegree + a.outDegree))
  .slice(0, 5)
  .map((n) => `  - \`${n.path}\` (${n.inDegree} dependentes, ${n.outDegree} importações)`)
  .join("\n")}
`
  )
  .join("\n")}

---

## 🧭 Trilhas Rápidas de Navegação para IA (@eco Query Paths)

Quando uma IA precisar resolver uma tarefa específica, consulte diretamente estes caminhos sem varrer o repositório:

1. **Alterar Motores de Prescrição e IA**:
   - \`src/lib/prescricao-ia.functions.ts\` ➔ \`src/lib/hibrido-ia.server.ts\` ➔ \`src/lib/athlete-memory.ts\` ➔ \`src/lib/ai-gateway.server.ts\`
2. **Alterar o Editor de Treinos & Blocos**:
   - \`src/components/session-builder/SessionBuilder.tsx\` ➔ \`src/components/session-builder/BlockCard.tsx\` ➔ \`src/lib/session-builder-store.ts\` ➔ \`src/lib/format-registry.ts\`
3. **Fluxo do Portal do Aluno & Treino Ativo**:
   - \`src/routes/_authenticated/aluno.sessao.$id.tsx\` ➔ \`src/components/timers/WorkoutTimerDialog.tsx\` ➔ \`src/lib/audio-beeps.ts\` ➔ \`src/lib/pdf-treino.ts\`
4. **Perfil e Memória do Aluno**:
   - \`src/routes/_authenticated/app.alunos.tsx\` ➔ \`src/components/alunos/AthleteMemoryPanel.tsx\` ➔ \`src/lib/athlete-memory.ts\` ➔ \`src/lib/students.functions.ts\`

---

## ⚡ Como Visualizar o Grafo Interativo
Abra o arquivo \`graphify-out/graph.html\` no navegador para explorar o mapa visual completo com busca, filtros por cluster, inspeção de conexões e física de nós.
`;
}

function getNodeDescription(nodeId: string): string {
  if (nodeId.includes("client.ts") || nodeId.includes("supabase")) return "Cliente oficial Supabase & Sessão Auth";
  if (nodeId.includes("prescricao-ia")) return "Pipeline central de IA generativa para treinos";
  if (nodeId.includes("SessionBuilder")) return "Construtor interativo de treinos e blocos";
  if (nodeId.includes("athlete-memory")) return "Motor de memória persistente e restrições dos atletas";
  if (nodeId.includes("format-registry")) return "Registro de formatos técnicos de blocos";
  if (nodeId.includes("hibrido-ia")) return "Motor da metodologia híbrida e kettlebell fitness";
  if (nodeId.includes("table/")) return "Tabela de banco de dados relacional PostgREST";
  if (nodeId.includes("app.alunos")) return "Gestão de atletas, kanban e perfil com memória IA";
  if (nodeId.includes("button")) return "Componente primitivo de botão de alta frequência";
  return "Módulo de apoio de alta conectividade";
}

function generateInteractiveHtml(data: GraphOutput): string {
  const jsonPayload = JSON.stringify(data).replace(/</g, "\\u003c");

  return `<!DOCTYPE html>
<html lang="pt-BR" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Graphify — Sistema Híbrido de Treinamento</title>
  <style>
    :root {
      --bg: #0b0d11;
      --card-bg: rgba(18, 22, 31, 0.85);
      --border: rgba(255, 255, 255, 0.1);
      --text: #f1f5f9;
      --text-muted: #94a3b8;
      --primary: #10b981;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    body, html { width: 100%; height: 100%; overflow: hidden; background: var(--bg); color: var(--text); }
    
    #canvas { width: 100%; height: 100%; display: block; cursor: grab; }
    #canvas:active { cursor: grabbing; }

    /* Header flutuante */
    .top-bar {
      position: absolute; top: 16px; left: 16px; z-index: 10;
      background: var(--card-bg); backdrop-filter: blur(12px);
      border: 1px solid var(--border); border-radius: 12px;
      padding: 12px 18px; display: flex; align-items: center; gap: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.5);
    }
    .brand { font-weight: 700; font-size: 14px; display: flex; align-items: center; gap: 8px; }
    .brand-badge { background: rgba(16, 185, 129, 0.15); color: #10b981; font-size: 10px; padding: 2px 6px; border-radius: 4px; font-mono: monospace; border: 1px solid rgba(16, 185, 129, 0.3); }
    .search-input {
      background: rgba(0,0,0,0.4); border: 1px solid var(--border);
      border-radius: 8px; color: #fff; padding: 6px 12px; font-size: 12px; width: 220px; outline: none;
    }
    .search-input:focus { border-color: var(--primary); }

    /* Painel lateral de detalhes */
    .sidebar {
      position: absolute; top: 16px; right: 16px; bottom: 16px; width: 340px; z-index: 10;
      background: var(--card-bg); backdrop-filter: blur(16px);
      border: 1px solid var(--border); border-radius: 14px;
      padding: 18px; display: flex; flex-direction: column; gap: 14px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.6); overflow-y: auto;
    }
    .sidebar-title { font-size: 14px; font-weight: 700; color: #fff; border-bottom: 1px solid var(--border); padding-bottom: 8px; }
    .stat-badge { font-size: 11px; padding: 4px 8px; border-radius: 6px; background: rgba(255,255,255,0.06); display: inline-flex; align-items: center; gap: 4px; }
    .conn-list { list-style: none; font-size: 11px; max-height: 180px; overflow-y: auto; display: flex; flex-direction: column; gap: 4px; }
    .conn-item { padding: 4px 8px; background: rgba(0,0,0,0.3); border-radius: 4px; cursor: pointer; border: 1px solid transparent; }
    .conn-item:hover { border-color: var(--primary); color: #fff; }

    /* Controles de Zoom */
    .controls {
      position: absolute; bottom: 20px; left: 20px; z-index: 10;
      display: flex; gap: 8px;
    }
    .btn {
      background: var(--card-bg); border: 1px solid var(--border); color: #fff;
      padding: 6px 12px; border-radius: 8px; font-size: 12px; cursor: pointer;
    }
    .btn:hover { background: rgba(255,255,255,0.1); }
  </style>
</head>
<body>
  <div class="top-bar">
    <div class="brand">
      <span>⚡ Graphify</span>
      <span class="brand-badge">ECO MODE</span>
    </div>
    <input type="text" id="search" class="search-input" placeholder="Buscar nó ou tabela..." />
    <span style="font-size: 11px; color: var(--text-muted);"><strong id="nodeCount">0</strong> nós | <strong id="edgeCount">0</strong> conexões</span>
  </div>

  <div class="sidebar" id="sidebar">
    <div class="sidebar-title">🔍 Inspecionar Componente</div>
    <p style="font-size: 12px; color: var(--text-muted);" id="emptyHelp">Clique em qualquer nó do mapa para ver suas conexões de importação, chamadas de banco e métricas.</p>
    <div id="nodeDetails" style="display: none; flex-direction: column; gap: 10px;">
      <div style="font-weight: 700; font-size: 15px; color: #fff;" id="detailName"></div>
      <div style="font-size: 11px; color: var(--text-muted); word-break: break-all;" id="detailPath"></div>
      <div style="display: flex; gap: 6px; flex-wrap: wrap;" id="detailBadges"></div>
      
      <div style="font-weight: 600; font-size: 12px; margin-top: 6px;">Módulos Dependentes (In-Degree):</div>
      <ul class="conn-list" id="inList"></ul>

      <div style="font-weight: 600; font-size: 12px; margin-top: 6px;">Importações & Dependências (Out-Degree):</div>
      <ul class="conn-list" id="outList"></ul>
    </div>
  </div>

  <div class="controls">
    <button class="btn" id="btnZoomIn">+ Zoom</button>
    <button class="btn" id="btnZoomOut">- Zoom</button>
    <button class="btn" id="btnReset">Centralizar</button>
  </div>

  <canvas id="canvas"></canvas>

  <script>
    const DATA = ${jsonPayload};
    document.getElementById("nodeCount").innerText = DATA.nodes.length;
    document.getElementById("edgeCount").innerText = DATA.edges.length;

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const COLOR_MAP = {
      "AI & Engine": "#10b981",
      "Routes & Pages": "#3b82f6",
      "Session Builder": "#f59e0b",
      "Athletic Tools": "#ec4899",
      "Supabase & DB": "#8b5cf6",
      "UI Core": "#64748b",
      "App State & Lib": "#06b6d4",
      "Documentation & Config": "#94a3b8"
    };

    // Inicialização das posições físicas dos nós
    const nodes = DATA.nodes.map((n, i) => {
      const angle = (i / DATA.nodes.length) * Math.PI * 2;
      const radius = 220 + Math.random() * 450;
      return {
        ...n,
        x: width / 2 + Math.cos(angle) * radius,
        y: height / 2 + Math.sin(angle) * radius,
        vx: 0,
        vy: 0,
        radius: Math.max(5, Math.min(18, 5 + (n.inDegree + n.outDegree) * 0.45)),
        color: COLOR_MAP[n.category] || "#64748b"
      };
    });

    const nodeById = new Map(nodes.map(n => [n.id, n]));
    const edges = DATA.edges.map(e => ({
      source: nodeById.get(e.source),
      target: nodeById.get(e.target),
      type: e.type
    })).filter(e => e.source && e.target);

    let zoom = 1;
    let panX = 0;
    let panY = 0;
    let isDragging = false;
    let dragStartX = 0, dragStartY = 0;
    let selectedNode = null;
    let hoveredNode = null;
    let searchTerm = "";

    // Simulação de forças simples para layout orgânico
    function stepSimulation() {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          if (dist < 180) {
            const force = (180 - dist) / 180 * 0.12;
            nodes[i].vx -= (dx / dist) * force;
            nodes[i].vy -= (dy / dist) * force;
            nodes[j].vx += (dx / dist) * force;
            nodes[j].vy += (dy / dist) * force;
          }
        }
      }

      for (const e of edges) {
        const dx = e.target.x - e.source.x;
        const dy = e.target.y - e.source.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = (dist - 90) * 0.0035;
        e.source.vx += (dx / dist) * force;
        e.source.vy += (dy / dist) * force;
        e.target.vx -= (dx / dist) * force;
        e.target.vy -= (dy / dist) * force;
      }

      for (const n of nodes) {
        n.vx *= 0.85;
        n.vy *= 0.85;
        n.x += n.vx;
        n.y += n.vy;
      }
    }

    function render() {
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(panX, panY);
      ctx.scale(zoom, zoom);

      // Desenhar conexões (edges)
      for (const e of edges) {
        const isHighlight = selectedNode && (e.source === selectedNode || e.target === selectedNode);
        ctx.beginPath();
        ctx.moveTo(e.source.x, e.source.y);
        ctx.lineTo(e.target.x, e.target.y);
        ctx.strokeStyle = isHighlight ? "#10b981" : "rgba(255, 255, 255, 0.08)";
        ctx.lineWidth = isHighlight ? 2 : 0.75;
        ctx.stroke();
      }

      // Desenhar nós
      for (const n of nodes) {
        const matchesSearch = searchTerm && n.label.toLowerCase().includes(searchTerm.toLowerCase());
        const isSelected = n === selectedNode;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = matchesSearch ? "#38bdf8" : n.color;
        ctx.shadowColor = isSelected ? "#10b981" : "transparent";
        ctx.shadowBlur = isSelected ? 16 : 0;
        ctx.fill();

        if (isSelected) {
          ctx.strokeStyle = "#ffffff";
          ctx.lineWidth = 2.5;
          ctx.stroke();
        }

        // Rótulos de texto
        if (zoom > 0.8 || isSelected || matchesSearch || n.radius > 11) {
          ctx.font = isSelected ? "bold 12px sans-serif" : "10px sans-serif";
          ctx.fillStyle = isSelected ? "#ffffff" : "rgba(255,255,255,0.75)";
          ctx.fillText(n.label, n.x + n.radius + 4, n.y + 3);
        }
      }

      ctx.restore();
    }

    let animCount = 0;
    function animate() {
      if (animCount < 250) {
        stepSimulation();
        animCount++;
      }
      render();
      requestAnimationFrame(animate);
    }
    animate();

    // Eventos de Mouse
    canvas.addEventListener("mousedown", (e) => {
      isDragging = true;
      dragStartX = e.clientX - panX;
      dragStartY = e.clientY - panY;
    });

    window.addEventListener("mousemove", (e) => {
      if (isDragging) {
        panX = e.clientX - dragStartX;
        panY = e.clientY - dragStartY;
      }
    });

    window.addEventListener("mouseup", () => isDragging = false);

    canvas.addEventListener("wheel", (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
      zoom = Math.max(0.2, Math.min(3.5, zoom * zoomFactor));
    });

    canvas.addEventListener("click", (e) => {
      const mouseX = (e.clientX - panX) / zoom;
      const mouseY = (e.clientY - panY) / zoom;

      let clicked = null;
      for (const n of nodes) {
        const dx = mouseX - n.x;
        const dy = mouseY - n.y;
        if (Math.sqrt(dx * dx + dy * dy) <= n.radius + 4) {
          clicked = n;
          break;
        }
      }

      selectedNode = clicked;
      updateSidebar(clicked);
    });

    function updateSidebar(node) {
      const help = document.getElementById("emptyHelp");
      const details = document.getElementById("nodeDetails");

      if (!node) {
        help.style.display = "block";
        details.style.display = "none";
        return;
      }

      help.style.display = "none";
      details.style.display = "flex";

      document.getElementById("detailName").innerText = node.label;
      document.getElementById("detailPath").innerText = node.path;

      const badges = document.getElementById("detailBadges");
      badges.innerHTML = \`
        <span class="stat-badge" style="color: \${node.color}; border: 1px solid \${node.color}55;">\${node.category}</span>
        <span class="stat-badge">📄 \${node.lines} linhas</span>
        <span class="stat-badge">🔗 \${node.inDegree + node.outDegree} conexões</span>
      \`;

      const inEdges = edges.filter(e => e.target === node).map(e => e.source);
      const outEdges = edges.filter(e => e.source === node).map(e => e.target);

      const inList = document.getElementById("inList");
      inList.innerHTML = inEdges.length ? inEdges.map(n => \`<li class="conn-item" onclick="selectNodeById('\${n.id}')">← \${n.label}</li>\`).join("") : "<li style='color:var(--text-muted)'>Nenhum módulo depende deste diretamente</li>";

      const outList = document.getElementById("outList");
      outList.innerHTML = outEdges.length ? outEdges.map(n => \`<li class="conn-item" onclick="selectNodeById('\${n.id}')">→ \${n.label}</li>\`).join("") : "<li style='color:var(--text-muted)'>Nenhuma dependência externa encontrada</li>";
    }

    window.selectNodeById = function(id) {
      const target = nodeById.get(id);
      if (target) {
        selectedNode = target;
        updateSidebar(target);
        panX = width / 2 - target.x * zoom;
        panY = height / 2 - target.y * zoom;
      }
    };

    document.getElementById("search").addEventListener("input", (e) => {
      searchTerm = e.target.value.trim();
    });

    document.getElementById("btnZoomIn").addEventListener("click", () => zoom = Math.min(3.5, zoom * 1.25));
    document.getElementById("btnZoomOut").addEventListener("click", () => zoom = Math.max(0.2, zoom * 0.8));
    document.getElementById("btnReset").addEventListener("click", () => {
      zoom = 1;
      panX = 0;
      panY = 0;
    });

    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });
  </script>
</body>
</html>
`;
}

// Executar se for chamado diretamente
if (import.meta.main || process.argv[1]?.endsWith("graphify.ts")) {
  runGraphify();
}
