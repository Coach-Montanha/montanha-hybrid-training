# Knowledge Graph Report — Sistema Híbrido de Treinamento

Relatório arquitetural estruturado gerado via **Graphify (Modo Eco)**. Este documento fornece um mapa durável do repositório para agentes de IA e engenheiros humanos, eliminando a necessidade de buscas excessivas (*grep token waste*) em arquivos brutos.

---

## 📊 Estatísticas Gerais do Repositório

| Métrica | Valor |
| :--- | :--- |
| **Total de Nós no Grafo** | **382** componentes/módulos/tabelas |
| **Total de Conexões (Arestas)** | **698** relações (imports, queries, chamadas) |
| **Densidade do Grafo** | **0.0048** |
| **Total de Linhas Analisadas** | **54.719** linhas de código/docs |
| **Modo de Operação** | `@eco` (Token-Efficient AST Extraction) |
| **Data de Geração** | 14/09/2026, 08:02:15 |

---

## 👑 "God Nodes" (Módulos de Maior Centralidade)

Estes são os componentes mais acoplados e fundamentais do sistema. Qualquer refatoração neles gera impacto em cascata.

| Módulo / Entidade | Conexões | Categoria | Papel Arquitetural |
| :--- | :---: | :--- | :--- |
| **1. `utils.ts`** | **53** | `App State & Lib` | Módulo de apoio de alta conectividade |
| **2. `button.tsx`** | **50** | `UI Core` | Componente primitivo de botão de alta frequência |
| **3. `client.ts`** | **36** | `Supabase & DB` | Cliente oficial Supabase & Sessão Auth |
| **4. `input.tsx`** | **31** | `UI Core` | Módulo de apoio de alta conectividade |
| **5. `badge.tsx`** | **27** | `UI Core` | Módulo de apoio de alta conectividade |
| **6. `PrescreverIaDialog.tsx`** | **26** | `Routes & Pages` | Módulo de apoio de alta conectividade |
| **7. `methodology.ts`** | **26** | `App State & Lib` | Módulo de apoio de alta conectividade |
| **8. `routeTree.gen.ts`** | **26** | `App State & Lib` | Módulo de apoio de alta conectividade |
| **9. `card.tsx`** | **23** | `UI Core` | Módulo de apoio de alta conectividade |
| **10. `label.tsx`** | **23** | `UI Core` | Módulo de apoio de alta conectividade |
| **11. `SessionBuilder.tsx`** | **22** | `Session Builder` | Construtor interativo de treinos e blocos |
| **12. `dialog.tsx`** | **22** | `UI Core` | Módulo de apoio de alta conectividade |

---

## 🧩 Clusters & Comunidades Arquiteturais

### 🟢 AI & Engine (10 nós)
- **Descrição**: Motores de IA generativa (Musculação, Híbrido, KB Fitness, KB Sport, LPO, Funcional, Corrida), memória semântica do atleta e gateway de LLM.
- **Principais Nós**:
  - `src/lib/prescricao-ia.functions.ts` (1 dependentes, 14 importações)
  - `src/lib/hibrido-ia.server.ts` (7 dependentes, 1 importações)
  - `src/lib/continuation.server.ts` (0 dependentes, 5 importações)
  - `src/lib/funcional-ia.server.ts` (4 dependentes, 0 importações)
  - `src/lib/kb-sport-ia.server.ts` (4 dependentes, 0 importações)

### 🟢 Routes & Pages (57 nós)
- **Descrição**: Páginas do treinador (Alunos, Treinos, Programas, Gerador, Dashboard) e Portal do Aluno com TanStack Router.
- **Principais Nós**:
  - `src/components/programa-ia/PrescreverIaDialog.tsx` (0 dependentes, 26 importações)
  - `src/routes/_authenticated/app.programas.tsx` (2 dependentes, 20 importações)
  - `src/routes/_authenticated/app.configuracoes.tsx` (1 dependentes, 20 importações)
  - `src/routes/_authenticated/app.alunos.tsx` (1 dependentes, 18 importações)
  - `src/routes/_authenticated/app.gerar.tsx` (1 dependentes, 18 importações)

### 🟢 Session Builder (8 nós)
- **Descrição**: Editor de sessões drag-and-drop, ordenação de blocos, catálogo de exercícios e registro de formatos técnicos.
- **Principais Nós**:
  - `src/components/session-builder/SessionBuilder.tsx` (2 dependentes, 20 importações)
  - `src/components/session-builder/BlockFormats.tsx` (1 dependentes, 11 importações)
  - `src/components/session-builder/BlockCard.tsx` (1 dependentes, 10 importações)
  - `src/components/session-builder/SetsEditor.tsx` (1 dependentes, 8 importações)
  - `src/lib/format-registry.ts` (7 dependentes, 2 importações)

### 🟢 Athletic Tools (5 nós)
- **Descrição**: Timers de treino (EMOM, AMRAP, Tabata), sintetizador de áudio Web Audio, Calculadora 1RM e exportador A4 em PDF.
- **Principais Nós**:
  - `src/components/timers/WorkoutTimerDialog.tsx` (2 dependentes, 8 importações)
  - `src/lib/pdf-treino.ts` (4 dependentes, 6 importações)
  - `src/components/calculators/OneRepMaxDialog.tsx` (2 dependentes, 5 importações)
  - `src/lib/audio-beeps.ts` (2 dependentes, 0 importações)
  - `src/lib/whatsapp-share.ts` (1 dependentes, 0 importações)

### 🟢 Supabase & DB (84 nós)
- **Descrição**: Cliente Supabase, autenticação JWT, tipos PostgREST e mapeamento de tabelas (programs, sessions, students, etc.).
- **Principais Nós**:
  - `src/integrations/supabase/client.ts` (34 dependentes, 2 importações)
  - `supabase/schema/exercises` (17 dependentes, 0 importações)
  - `src/integrations/supabase/auth-middleware.ts` (14 dependentes, 1 importações)
  - `supabase/schema/sessions` (14 dependentes, 0 importações)
  - `supabase/schema/coaches` (13 dependentes, 0 importações)

### 🟢 UI Core (34 nós)
- **Descrição**: Design system shadcn/Radix otimizado para o padrão escuro Coach Montanha (#0F1115).
- **Principais Nós**:
  - `src/components/ui/button.tsx` (49 dependentes, 1 importações)
  - `src/components/ui/input.tsx` (30 dependentes, 1 importações)
  - `src/components/ui/badge.tsx` (26 dependentes, 1 importações)
  - `src/components/ui/card.tsx` (22 dependentes, 1 importações)
  - `src/components/ui/label.tsx` (22 dependentes, 1 importações)

### 🟢 App State & Lib (48 nós)
- **Descrição**: Stores Zustand, utilitários, formatação de dados e validações Zod.
- **Principais Nós**:
  - `src/lib/utils.ts` (53 dependentes, 0 importações)
  - `src/lib/methodology.ts` (26 dependentes, 0 importações)
  - `src/routeTree.gen.ts` (1 dependentes, 25 importações)
  - `src/hooks/use-coach.ts` (9 dependentes, 2 importações)
  - `src/lib/generator-prefs.functions.ts` (6 dependentes, 5 importações)

### 🟢 Documentation & Config (136 nós)
- **Descrição**: Regras de agentes (AGENTS.md, GEMINI.md), Service Worker PWA e configs de build.
- **Principais Nós**:
  - `.agents/skills/shadcn/rules/forms.md` (0 dependentes, 1 importações)
  - `.agents/skills/shadcn/rules/styling.md` (0 dependentes, 1 importações)
  - `.agents/skills/tailwind-design-system/resources/implementation-playbook.md` (0 dependentes, 1 importações)
  - `.agents/skills/accessibility-compliance-accessibility-audit/resources/implementation-playbook.md` (0 dependentes, 0 importações)
  - `.agents/skills/accessibility-compliance-accessibility-audit/SKILL.md` (0 dependentes, 0 importações)


---

## 🧭 Trilhas Rápidas de Navegação para IA (@eco Query Paths)

Quando uma IA precisar resolver uma tarefa específica, consulte diretamente estes caminhos sem varrer o repositório:

1. **Alterar Motores de Prescrição e IA**:
   - `src/lib/prescricao-ia.functions.ts` ➔ `src/lib/hibrido-ia.server.ts` ➔ `src/lib/athlete-memory.ts` ➔ `src/lib/ai-gateway.server.ts`
2. **Alterar o Editor de Treinos & Blocos**:
   - `src/components/session-builder/SessionBuilder.tsx` ➔ `src/components/session-builder/BlockCard.tsx` ➔ `src/lib/session-builder-store.ts` ➔ `src/lib/format-registry.ts`
3. **Fluxo do Portal do Aluno & Treino Ativo**:
   - `src/routes/_authenticated/aluno.sessao.$id.tsx` ➔ `src/components/timers/WorkoutTimerDialog.tsx` ➔ `src/lib/audio-beeps.ts` ➔ `src/lib/pdf-treino.ts`
4. **Perfil e Memória do Aluno**:
   - `src/routes/_authenticated/app.alunos.tsx` ➔ `src/components/alunos/AthleteMemoryPanel.tsx` ➔ `src/lib/athlete-memory.ts` ➔ `src/lib/students.functions.ts`

---

## ⚡ Como Visualizar o Grafo Interativo
Abra o arquivo `graphify-out/graph.html` no navegador para explorar o mapa visual completo com busca, filtros por cluster, inspeção de conexões e física de nós.
