import { createFileRoute, Link, useNavigate, Outlet, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { checkAndLockGuestDemo, validateEmailMx, checkProjectAccess } from "@/services/ecosystem-auth-service";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Mountain, Sparkles, Zap, Globe, ChevronDown, ChevronUp, Lock, ShieldCheck } from "lucide-react";

const searchSchema = z.object({ modo: z.enum(["login", "cadastro"]).optional() });

const ECOSYSTEM_APPS = [
  {
    id: "hybrid",
    name: "Montanha Hybrid Training",
    tag: "Performance & Treino",
    slogan: "Alta Performance & Periodização de Treino",
    accent: "#06b6d4",
    badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    isCurrent: true,
  },
  {
    id: "pdf",
    name: "Montanha PDF Studio",
    tag: "Diagramação & IA",
    slogan: "Diagramação Editorial & Publicações com IA",
    accent: "#f59e0b",
    badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    isCurrent: false,
  },
  {
    id: "personal",
    name: "Montanha Personal Studio",
    tag: "Finanças & Operação",
    slogan: "Gestão Financeira & Inteligência para Studios",
    accent: "#10b981",
    badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    isCurrent: false,
  },
  {
    id: "language",
    name: "Montanha Language AI",
    tag: "Idiomas & IA",
    slogan: "Tutor de Idiomas com IA & Treinos Diários",
    accent: "#6366f1",
    badgeBg: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
    isCurrent: false,
  },
  {
    id: "whatsapp",
    name: "Montanha WhatsApp Automation",
    tag: "SaaS & CRM",
    slogan: "Automação Multi-Tenant & Disparos WhatsApp",
    accent: "#a855f7",
    badgeBg: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    isCurrent: false,
  },
];

export const Route = createFileRoute("/auth")({
  validateSearch: searchSchema,
  component: AuthPage,
});

function AuthPage() {
  const { modo } = Route.useSearch();
  const navigate = useNavigate();
  const routerState = useRouterState();
  const isExactAuth = routerState.location.pathname === "/auth";
  const [tab, setTab] = useState<"login" | "cadastro">(modo === "cadastro" ? "cadastro" : "login");
  const [showEcosystem, setShowEcosystem] = useState(false);

  if (!isExactAuth) {
    return <Outlet />;
  }

  async function routeAfterLogin() {
    const { data: u } = await supabase.auth.getUser();
    if (!u.user) return navigate({ to: "/auth" });
    const { data: coach } = await supabase
      .from("coaches")
      .select("id")
      .eq("auth_user_id", u.user.id)
      .maybeSingle();
    if (coach) navigate({ to: "/app" });
    else navigate({ to: "/aluno" });
  }

  return (
    <div className="relative flex min-h-screen flex-col justify-center items-center bg-slate-950 text-slate-100 p-4 font-sans overflow-hidden">
      {/* Glow aura background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[130px]" />
        <div className="absolute -bottom-40 -right-32 h-[560px] w-[560px] rounded-full bg-cyan-600/15 blur-[150px]" />
      </div>

      <div className="w-full max-w-md space-y-4">
        {/* Header Branding */}
        <div className="flex items-center justify-center text-center pb-2">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 shadow-md">
              <Mountain className="h-5 w-5" />
            </div>
            <div className="text-left">
              <span className="text-base font-black tracking-tight text-white block">Montanha Hybrid Training</span>
              <span className="text-[10px] text-slate-400">Alta Performance &amp; Periodização de Treino</span>
            </div>
          </Link>
        </div>

        <Card className="p-6 border border-cyan-500/30 bg-slate-950/90 shadow-[0_0_50px_rgba(6,182,212,0.15)] backdrop-blur-2xl rounded-2xl">
          <Tabs value={tab} onValueChange={(v) => setTab(v === "cadastro" ? "cadastro" : "login")}>
            <TabsList className="grid w-full grid-cols-2 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
              <TabsTrigger value="login" id="auth-tab-login" data-testid="tab-login" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950 font-bold transition-all text-xs py-2 rounded-lg">
                Entrar
              </TabsTrigger>
              <TabsTrigger value="cadastro" id="auth-tab-cadastro" data-testid="tab-cadastro" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950 font-bold transition-all text-xs py-2 rounded-lg">
                Criar conta
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login" id="auth-content-login">
              <LoginForm onDone={routeAfterLogin} />
            </TabsContent>
            <TabsContent value="cadastro" id="auth-content-cadastro">
              <SignupForm onDone={() => navigate({ to: "/app" })} />
            </TabsContent>
          </Tabs>
        </Card>

        {/* Footer Ecosystem Button */}
        <div className="text-center pt-1">
          <button
            type="button"
            onClick={() => setShowEcosystem(!showEcosystem)}
            className="text-xs text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 transition-all cursor-pointer shadow-md"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>🌐 Ecossistema (5 Apps Integrados)</span>
            {showEcosystem ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Ecosystem Drawer */}
        {showEcosystem && (
          <div className="p-3.5 rounded-2xl bg-slate-900/95 border border-cyan-500/40 shadow-2xl space-y-2 animate-in fade-in">
            <div className="text-[11px] font-bold text-cyan-300 flex items-center gap-1.5 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Plataformas do Ecossistema Montanha</span>
            </div>
            <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1">
              {ECOSYSTEM_APPS.map((app) => (
                <div
                  key={app.id}
                  className={`p-2 rounded-xl border text-xs flex items-center justify-between transition-all ${
                    app.isCurrent
                      ? "bg-cyan-500/10 border-cyan-500/50 text-white"
                      : "bg-slate-950/60 border-slate-800/80 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: app.accent }} />
                      {app.name}
                    </span>
                    <span className="text-[10px] text-slate-400">{app.slogan}</span>
                  </div>
                  <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full border ${app.badgeBg}`}>
                    {app.isCurrent ? "ATUAL" : app.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function LoginForm({ onDone }: { onDone: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  async function handle(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const mx = await validateEmailMx(email);
    if (!mx.valid) {
      setLoading(false);
      return toast.error(mx.reason || "E-mail inválido.");
    }

    const access = await checkProjectAccess(null, 'sistema-hibrido', email);
    if (!access.hasAccess) {
      setLoading(false);
      return toast.error(access.message);
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) return toast.error(error.message);
    toast.success("Bem-vindo!");
    onDone();
  }

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return toast.error("Informe seu e-mail.");
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth`,
    });
    setLoading(false);
    if (error) return toast.error(error.message);
    setResetSent(true);
    toast.success("Instruções de recuperação enviadas ao e-mail informado!");
  }

  if (showReset) {
    return (
      <div className="mt-4 space-y-4">
        <h3 className="text-sm font-bold text-white">Recuperação de Senha</h3>
        {resetSent ? (
          <div className="space-y-3 text-center">
            <p className="text-xs text-slate-300 leading-relaxed">
              Enviamos as instruções para <b>{email}</b>. Verifique sua caixa de entrada e spam.
            </p>
            <button
              type="button"
              onClick={() => { setShowReset(false); setResetSent(false); }}
              className="text-xs text-cyan-400 hover:underline font-bold"
            >
              ← Voltar ao Login
            </button>
          </div>
        ) : (
          <form onSubmit={handleReset} className="space-y-3">
            <div>
              <Label htmlFor="reset-email" className="text-xs font-bold uppercase tracking-wider text-slate-300">Seu E-mail</Label>
              <Input
                id="reset-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu.email@exemplo.com"
                className="mt-1 bg-slate-900/90 border-slate-800 text-white rounded-xl focus:border-cyan-500"
              />
            </div>
            <Button
              type="submit"
              className="w-full font-black text-xs uppercase tracking-wider bg-cyan-500 hover:bg-cyan-600 text-slate-950 rounded-xl transition-all h-10"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar instruções de reset"}
            </Button>
            <button
              type="button"
              onClick={() => setShowReset(false)}
              className="w-full text-center text-xs text-slate-400 hover:text-white transition"
            >
              ← Voltar para o login
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handle} className="mt-4 space-y-4">
      <div>
        <Label htmlFor="li-email" className="text-xs font-bold uppercase tracking-wider text-slate-300">E-mail</Label>
        <Input
          id="li-email"
          type="email"
          data-testid="input-login-email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu.email@exemplo.com"
          className="mt-1 bg-slate-900/90 border-slate-800 text-white rounded-xl focus:border-cyan-500"
        />
      </div>
      <div>
        <Label htmlFor="li-pw" className="text-xs font-bold uppercase tracking-wider text-slate-300">Senha</Label>
        <Input
          id="li-pw"
          type="password"
          data-testid="input-login-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="mt-1 bg-slate-900/90 border-slate-800 text-white rounded-xl focus:border-cyan-500"
        />
      </div>
      <div className="flex items-center justify-between text-xs">
        <label className="flex items-center gap-2 text-slate-400">
          <Checkbox defaultChecked disabled /> Lembrar de mim
        </label>
        <button
          type="button"
          onClick={() => setShowReset(true)}
          className="text-cyan-400 hover:underline font-medium cursor-pointer"
        >
          Esqueci a senha
        </button>
      </div>
      <Button
        type="submit"
        data-testid="btn-submit-login"
        className="w-full font-black text-xs uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-600 hover:to-sky-700 text-slate-950 rounded-xl shadow-lg transition-all h-10 cursor-pointer"
        disabled={loading}
      >
        {loading ? "Entrando..." : "Entrar no Hybrid Training"}
      </Button>
    </form>
  );
}

function SignupForm({ onDone }: { onDone: () => void }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handle(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: window.location.origin, data: { nome } },
    });
    if (error) {
      setLoading(false);
      return toast.error(error.message);
    }
    // cria registro do coach
    if (data.user) {
      const { error: cErr } = await supabase.from("coaches").insert({
        auth_user_id: data.user.id,
        nome,
        email,
      });
      if (cErr) {
        setLoading(false);
        return toast.error(
          "Cadastro criado, mas falhou ao criar perfil de treinador: " + cErr.message,
        );
      }
    }
    setLoading(false);
    toast.success("Conta criada!");
    onDone();
  }

  return (
    <form onSubmit={handle} className="mt-4 space-y-4">
      <div>
        <Label htmlFor="su-nome" className="text-xs font-bold uppercase tracking-wider text-slate-300">Seu nome</Label>
        <Input
          id="su-nome"
          data-testid="input-signup-nome"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Ex: Coach Montanha"
          className="mt-1 bg-slate-900/90 border-slate-800 text-white rounded-xl focus:border-cyan-500"
        />
      </div>
      <div>
        <Label htmlFor="su-email" className="text-xs font-bold uppercase tracking-wider text-slate-300">E-mail</Label>
        <Input
          id="su-email"
          type="email"
          data-testid="input-signup-email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu.email@exemplo.com"
          className="mt-1 bg-slate-900/90 border-slate-800 text-white rounded-xl focus:border-cyan-500"
        />
      </div>
      <div>
        <Label htmlFor="su-pw" className="text-xs font-bold uppercase tracking-wider text-slate-300">Senha</Label>
        <Input
          id="su-pw"
          type="password"
          data-testid="input-signup-password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="mt-1 bg-slate-900/90 border-slate-800 text-white rounded-xl focus:border-cyan-500"
        />
        <p className="mt-1 text-xs text-slate-400">Mínimo 8 caracteres.</p>
      </div>
      <Button
        type="submit"
        data-testid="btn-submit-signup"
        className="w-full font-black text-xs uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-600 hover:to-sky-700 text-slate-950 rounded-xl shadow-lg transition-all h-10"
        disabled={loading}
      >
        {loading ? "Criando..." : "Criar conta de treinador"}
      </Button>
    </form>
  );
}
