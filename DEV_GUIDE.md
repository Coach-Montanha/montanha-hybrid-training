# MANUAL TÉCNICO DO DESENVOLVEDOR — MONTANHA HYBRID TRAINING
> **Classificação:** Documento Interno e Confidencial de Engenharia de Software  
> **Localização:** Raiz do repositório (`/DEV_GUIDE.md`). **NUNCA** mova este arquivo para a pasta `public/` ou `dist/` para evitar exposição pública via HTTP.  
> **Data de Atualização:** 22/09/2026  
> **Versão do Documento:** 1.0.0

---

## 1. Visão Geral & Escopo do Projeto

### 1.1. O que é o Montanha Hybrid Training?
O **Montanha Hybrid Training** é a plataforma de alta performance do **Ecossistema Montanha** voltada para treinamento híbrido (força, hipertrofia e endurance), prescrição de planos periódicos com inteligência artificial, cronometragem avançada e acompanhamento de sessões em tempo real pelos atletas e alunos.

### 1.2. Links e Referências de Produção
- **URL Canônica em Produção:** `https://montanha-hybrid-training.vercel.app`
- **Repositório GitHub:** `https://github.com/Coach-Montanha/montanha-hybrid-training`
- **Time Vercel:** `Ecossistema Montanha` (Plano Hobby)
- **Tecnologia Base:** TanStack Start (SSR via Nitro / Vercel Serverless Function) + React 19 + Tailwind CSS v4 + Supabase

### 1.3. Personas & Perfis de Acesso
1. **Treinador / Coach:** Prescreve programas, cria moldes de treino, configura blocos de endurance/força e utiliza o assistente de IA (`PrescreverIaDialog`).
2. **Atleta / Aluno:** Acessa a sessão prescrita (`/aluno/sessao/:id`), executa o cronômetro interativo e registra cargas e percepção de esforço (RPE).
3. **Suporte Técnico / SuperAdmin (Modo Impersonação):** Permite simular o acesso como treinador ou aluno para depuração de erros em tempo de execução.

---

## 2. Arquitetura do Sistema & Stack Tecnológica

### 2.1. Frontend & SSR (TanStack Start)
- **Framework:** `@tanstack/react-start` (v1.168.26) com roteamento `@tanstack/react-router` (v1.170.16).
- **Compilador/Bundler:** Vite 8 com `@tailwindcss/vite` (Tailwind CSS v4).
- **Mecanismo SSR / Serverless:** O Nitro gera o bundle para Vercel Serverless Function (`.vercel/output/functions/__server.func`).
- **Gerenciamento de Estado Server & Cache:** `@tanstack/react-query` (v5.101.1) com validação de esquemas via `@tanstack/zod-adapter` e Zod.
- **Componentes Visuais:** Radix UI (`@radix-ui/react-*`), Lucide Icons (`lucide-react`), cmdk para busca rápida e Embla Carousel.
- **Renderização Gráfica & Exportação:** `jspdf`, `jspdf-autotable`, `html2canvas`, `fflate`.

### 2.2. Backend & Persistência (Supabase)
- **Client Supabase:** `@supabase/supabase-js` (v2.110.7) em `src/integrations/supabase/client.ts`.
- **Rotas de API & Servidor:** Handlers serverless em `src/routes/api/` e funções de prescrição com IA (`hibrido-ia.server.ts`).

---

## 3. Estrutura de Pastas e Componentes Críticos

```
Montanha Hybrid Training/
├── .vercel/                 # Saída compilada para a infraestrutura Vercel
├── public/                  # Arquivos estáticos servidos diretamente
│   ├── icons/               # Ícones de aplicação e PWA
│   ├── manifest.webmanifest # Manifesto PWA
│   ├── sw.js                # Service Worker para cache e offline
│   ├── robots.txt           # Rastreamento do Googlebot com sitemap link
│   └── sitemap.xml          # Rotas públicas do aplicativo
├── src/
│   ├── components/          # Componentes de interface
│   │   ├── WorkoutTimerDialog.tsx   # Cronômetro avançado de treino com proteção de saída
│   │   ├── PrescreverIaDialog.tsx   # Modal de prescrição inteligente com IA
│   │   ├── ConstrutorMoldeDialog.tsx # Construtor de moldes e blocos de exercícios
│   │   ├── ImpersonationBanner.tsx  # Banner de suporte técnico
│   │   └── ui/              # Componentes base (Button, Dialog, Slider, etc.)
│   ├── integrations/
│   │   └── supabase/        # Conexão e tipos do banco Supabase
│   ├── lib/                 # Utilitários (PWA, temas, tratamento de erros)
│   ├── routes/              # Rotas do aplicativo
│   │   ├── __root.tsx       # Configuração global de Head, SEO, JSON-LD
│   │   ├── auth.tsx         # Tela de autenticação e login
│   │   ├── auth.primeiro-acesso.tsx # Fluxo de onboarding do primeiro acesso
│   │   ├── boost.tsx        # Acelerador Booster do Ecossistema
│   │   ├── create.tsx       # Módulo Creator com IA
│   │   ├── eco.tsx          # Painel do Ecossistema Montanha
│   │   ├── master-admin.tsx # Link para o Master Admin
│   │   ├── index.tsx        # Redirecionamento da raiz
│   │   └── _authenticated/  # Rotas de acesso restrito (autenticadas)
│   │       ├── app.tsx      # Layout compartilhado da área logada
│   │       ├── app.index.tsx # Visão geral de treinos e métricas
│   │       ├── app.alunos.tsx # Gestão de alunos vinculados
│   │       ├── app.programas.tsx # Gestão de programas de treino
│   │       ├── app.exercicios.tsx # Biblioteca de exercícios e categorias
│   │       ├── app.gerar.tsx # Gerador dinâmico de sessões
│   │       ├── app.configuracoes.tsx # Parâmetros do app e personalização
│   │       ├── aluno.tsx    # Layout do perfil de aluno
│   │       └── aluno.sessao.$id.tsx # Execução da sessão de treino em tempo real
│   ├── styles.css           # Estilos e variáveis globais Tailwind
├── DEV_GUIDE.md             # ESTE MANUAL TÉCNICO INTERNO
├── package.json             # Dependências e scripts
├── tsconfig.json            # Configuração do TypeScript
└── vite.config.ts           # Configurações do Vite e Nitro
```

---

## 4. Regras Críticas de Build e Deploy

### ⚠️ REGRA 1: Bloqueio de Autor Git na Vercel (Cadeado 🔒 / Deploy Blocked)
- **O Problema:** A conta Vercel do projeto pertence à equipe `Ecossistema Montanha` no **plano Hobby**. A Vercel **bloqueia o deploy** caso o autor do commit não esteja registrado como o dono do repositório no GitHub. Commits com e-mails secundários (ex: `contato@coachmontanha.com`) causam bloqueio permanente.
- **A Solução Obrigatória:** O Git deve estar configurado com:
  ```bash
  git config --global user.name "Coach-Montanha"
  git config --global user.email "Coach-Montanha@users.noreply.github.com"
  ```
  Ao realizar commits via terminal:
  ```bash
  git commit --author="Coach-Montanha <Coach-Montanha@users.noreply.github.com>" -m "feat/fix: mensagem"
  ```

### ⚠️ REGRA 2: Erro 500 no SSR da Vercel (`Cannot find package 'tslib'`)
- **O Problema:** O Nitro pode emitir chamadas para o módulo `tslib` durante a compilação de pacotes como `@radix-ui/react-alert-dialog` ou `@radix-ui/react-slider`. Sem o `tslib` em produção, a função serverless aborta com `HTTP 500`.
- **A Salvaguarda:**
  1. O `package.json` deve conter `"tslib": "^2.8.1"` em `"dependencies"`.
  2. O `vite.config.ts` deve conter `nitro.externals.inline: ["tslib"]`.

### ⚠️ REGRA 3: Proteção de Encerramento do Cronômetro de Treino (`WorkoutTimerDialog.tsx`)
- O cronômetro de treino possui salvaguarda contra toques acidentais para evitar que o atleta perca o registro da série durante o esforço.
- Qualquer alteração na lógica de fechar (`onClose`) deve respeitar a confirmação dupla de segurança, garantindo que um clique acidental no "X" ou fora do modal não encerre a contagem.

---

## 5. Fluxos de Negócio & Lógica Interna

### 5.1. Prescrição Inteligente de Treino com IA
- O componente `PrescreverIaDialog.tsx` envia o perfil do aluno, volume semanal e foco (hipertrofia, potência, resistência aeróbica) para a Edge Function / handler serverless.
- A resposta gera blocos estruturados de aquecimento, bloco principal (força/potência) e bloco de capacidade aeróbica (endurance).

### 5.2. Execução da Sessão de Treino pelo Aluno (`aluno.sessao.$id.tsx`)
- A tela de sessão é otimizada para uso em smartphones com interface PWA (modo *standalone* sem barras do navegador).
- O atleta pode marcar séries concluídas, acionar o cronômetro de descanso entre séries e registrar cargas levantadas, que sincronizam via Supabase.

---

## 6. Guia Passo a Passo de Execução Local e Testes

```bash
# 1. Instalação de dependências
bun install

# 2. Iniciar o servidor de desenvolvimento
bun run dev

# 3. Validar a compilação completa para produção
bun run build

# 4. Executar testes E2E com Playwright
bun run test:e2e
```

---

## 7. Troubleshooting e Resolução Rápida de Falhas

| Sintoma | Causa Mais Provável | Como Resolver |
| :--- | :--- | :--- |
| **Deploy na Vercel "Blocked"** | Commit enviado com autor desconhecido. | Use `--author="Coach-Montanha <Coach-Montanha@users.noreply.github.com>"` no commit e force o push. |
| **Erro 500 no carregamento do app** | Módulo do runtime não empacotado no Nitro. | Verifique os logs via `npx vercel logs montanha-hybrid-training.vercel.app` e garanta que `tslib` está em `dependencies`. |
| **Cronômetro não toca alerta sonoro** | Política de autoplay do navegador do smartphone. | O áudio precisa ser iniciado a partir de uma interação do usuário (clique no botão Iniciar). |
