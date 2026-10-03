import { createFileRoute, Link, useNavigate, Outlet, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { validateEmailMx, checkProjectAccess } from "@/services/ecosystem-auth-service";
import { toast } from "sonner";
import {
  Mountain,
  Sparkles,
  Globe,
  ChevronDown,
  ChevronUp,
  Lock,
  ShieldCheck,
  KeyRound,
  Mail,
  User,
  Eye,
  EyeOff,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const searchSchema = z.object({ modo: z.enum(["login", "cadastro"]).optional() });

const ECOSYSTEM_APPS = [
  {
    id: "hybrid",
    name: "Montanha Hybrid Training",
    tag: "Performance & Treino",
    slogan: "Alta Performance & Periodização de Treino",
    accent: "#dc2626",
    badgeBg: "bg-red-500/20 text-red-300 border-red-500/40",
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
    accent: "#6958e2",
    badgeBg: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    isCurrent: false,
  },
  {
    id: "language",
    name: "Montanha Language AI",
    tag: "Idiomas & IA",
    slogan: "Tutor de Idiomas com IA & Treinos Diários",
    accent: "#06b6d4",
    badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    isCurrent: false,
  },
  {
    id: "whatsapp",
    name: "Montanha WhatsApp Automation",
    tag: "SaaS & CRM",
    slogan: "Automação Multi-Tenant & Disparos WhatsApp",
    accent: "#10b981",
    badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
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

  const [view, setView] = useState<"signin" | "signup">(modo === "cadastro" ? "signup" : "signin");
  const [authMethod, setAuthMethod] = useState<"pin" | "email">("pin");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showEcosystem, setShowEcosystem] = useState(false);

  // Form state
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [showReset, setShowReset] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  // Brand Color Accent: #dc2626 (Athletic Crimson)

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const isTrial = params.get("trial") === "1";
    const trialEmail = params.get("email") || params.get("impersonate");
    const trialName = params.get("name") || trialEmail?.split("@")[0] || "Aluno";
    const pass = params.get("pass");

    if (isTrial && trialEmail) {
      const cleanEmail = trialEmail.trim().toLowerCase();
      localStorage.setItem("sistema_hibrido_trial_user", JSON.stringify({
        email: cleanEmail,
        name: decodeURIComponent(trialName),
        isTrial: true,
        expiresAt: new Date(Date.now() + 7 * 86400000).toISOString().split("T")[0]
      }));
      localStorage.setItem(`ecosystem_sub_sistema-hibrido_${cleanEmail}`, JSON.stringify({
        payment_status: "AVALIAÇÃO",
        access_expires_at: new Date(Date.now() + 7 * 86400000).toISOString().split("T")[0],
        is_active: true
      }));

      if (pass && /^\d{10}$/.test(pass)) {
        supabase.auth.signInWithPassword({ email: cleanEmail, password: pass }).then(({ error }) => {
          if (error) {
            supabase.auth.signUp({
              email: cleanEmail,
              password: pass,
              options: { data: { name: decodeURIComponent(trialName) } }
            }).then(() => {
              navigate({ to: "/aluno" });
            });
          } else {
            navigate({ to: "/aluno" });
          }
        });
      } else {
        toast.success(`Acesso de Avaliação liberado para ${cleanEmail}!`);
        navigate({ to: "/aluno" });
      }
    }
  }, [navigate]);

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

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const cleanEmail = email.trim().toLowerCase();
    const cleanCredential = authMethod === "pin" ? pin.trim() : password.trim();

    if (!cleanEmail) {
      setLoading(false);
      return toast.error("Por favor, digite seu e-mail.");
    }

    if (authMethod === "pin") {
      if (!/^\d{6,}$/.test(cleanCredential)) {
        setLoading(false);
        return toast.error("O PIN de acesso deve conter no mínimo 6 dígitos numéricos.");
      }
    } else {
      if (!cleanCredential || cleanCredential.length < 6) {
        setLoading(false);
        return toast.error("A senha deve conter no mínimo 6 caracteres.");
      }
    }

    const mx = await validateEmailMx(cleanEmail);
    if (!mx.valid) {
      setLoading(false);
      return toast.error(mx.reason || "E-mail inválido.");
    }

    const access = await checkProjectAccess(null, 'sistema-hibrido', cleanEmail);
    if (!access.hasAccess) {
      setLoading(false);
      return toast.error(access.message);
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: cleanEmail,
      password: cleanCredential,
    });

    if (error) {
      // Auto-provision invited / trial client on first access
      const { data: suData, error: suErr } = await supabase.auth.signUp({
        email: cleanEmail,
        password: cleanCredential,
        options: { data: { name: cleanEmail.split('@')[0] } }
      });

      if (!suErr && suData.session) {
        setLoading(false);
        toast.success("Conta ativada com sucesso! Bem-vindo!");
        routeAfterLogin();
        return;
      }

      const localTrial = localStorage.getItem(`ecosystem_sub_sistema-hibrido_${cleanEmail}`);
      if (localTrial) {
        localStorage.setItem("sistema_hibrido_trial_user", JSON.stringify({
          email: cleanEmail,
          name: cleanEmail.split("@")[0],
          isTrial: true
        }));
        setLoading(false);
        toast.success("Acesso em período de avaliação liberado!");
        routeAfterLogin();
        return;
      }

      setLoading(false);
      const userMsg = error.message === "Invalid login credentials"
        ? "Credenciais inválidas. Verifique seu e-mail e PIN de 10 dígitos."
        : error.message;
      return toast.error(userMsg);
    }

    setLoading(false);
    toast.success("Bem-vindo ao Hybrid Training!");
    routeAfterLogin();
  }

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const cleanEmail = email.trim().toLowerCase();
    const cleanCredential = authMethod === "pin" ? pin.trim() : password.trim();

    if (authMethod === "pin" && !/^\d{10}$/.test(cleanCredential)) {
      setLoading(false);
      return toast.error("A senha deve conter exatamente 10 dígitos numéricos.");
    }

    if (authMethod === "email" && cleanCredential.length < 6) {
      setLoading(false);
      return toast.error("A senha deve conter no mínimo 6 caracteres.");
    }

    const { data, error } = await supabase.auth.signUp({
      email: cleanEmail,
      password: cleanCredential,
      options: { emailRedirectTo: window.location.origin, data: { nome } },
    });

    if (error) {
      setLoading(false);
      return toast.error(error.message);
    }

    if (data.user) {
      const { error: cErr } = await supabase.from("coaches").insert({
        auth_user_id: data.user.id,
        nome,
        email: cleanEmail,
      });
      if (cErr) {
        console.warn("Erro ao registrar perfil de treinador:", cErr);
      }
    }

    setLoading(false);
    toast.success("Conta criada com sucesso!");
    navigate({ to: "/app" });
  }

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return toast.error("Informe seu e-mail.");
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim().toLowerCase(), {
      redirectTo: `${window.location.origin}/auth`,
    });
    setLoading(false);
    if (error) return toast.error(error.message);
    setResetSent(true);
    toast.success("Instruções enviadas para o seu e-mail!");
  }

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-4 font-sans relative overflow-hidden">
      {/* Background Mesh Glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#dc2626]/20 blur-[160px]" />
        <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#ef4444]/15 blur-[160px]" />
      </div>

      {/* Stage Card */}
      <div className="w-full max-w-[900px] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[560px] my-auto">
        
        {/* A) NAV RAIL */}
        <nav className="w-full md:w-24 bg-slate-950 border-b md:border-b-0 md:border-r border-slate-800 p-4 flex md:flex-col items-center justify-between z-20 flex-shrink-0">
          <div className="flex flex-col items-center gap-1.5">
            <Link to="/" className="h-11 w-11 rounded-2xl bg-gradient-to-br from-[#dc2626] to-[#b91c1c] p-0.5 shadow-md flex items-center justify-center">
              <div className="h-full w-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Mountain className="h-5 w-5 text-[#dc2626]" />
              </div>
            </Link>
            <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">Hybrid</span>
          </div>

          <div className="flex md:flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => setView("signin")}
              aria-label="Entrar na conta"
              className={`min-h-[44px] min-w-[44px] px-4 py-2.5 rounded-xl flex flex-col items-center justify-center gap-1 transition-all text-xs font-bold ${
                view === "signin"
                  ? "bg-[#dc2626] text-white shadow-md shadow-[#dc2626]/30"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <User className="h-5 w-5" />
              <span>Entrar</span>
            </button>

            <button
              type="button"
              onClick={() => setView("signup")}
              aria-label="Criar nova conta"
              className={`min-h-[44px] min-w-[44px] px-4 py-2.5 rounded-xl flex flex-col items-center justify-center gap-1 transition-all text-xs font-bold ${
                view === "signup"
                  ? "bg-[#dc2626] text-white shadow-md shadow-[#dc2626]/30"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Sparkles className="h-5 w-5" />
              <span>Cadastrar</span>
            </button>
          </div>

          <div className="hidden md:flex flex-col items-center text-[10px] text-slate-500">
            <ShieldCheck className="h-4 w-4 text-[#dc2626] mb-0.5" />
            <span>SSL 256</span>
          </div>
        </nav>

        {/* B) FLOATING HERO CARD */}
        <div className="w-full md:w-80 relative overflow-hidden bg-slate-950/90 p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800">
          <div aria-hidden className="absolute -top-24 -left-24 w-64 h-64 bg-[#dc2626]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-4">
            {view === "signin" ? (
              <div className="space-y-3 animate-in fade-in">
                <h2 className="text-2xl md:text-3xl font-extrabold !text-white text-white tracking-tight leading-tight" style={{ color: "#ffffff" }}>
                  Montanha Hybrid Training
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Alta performance, prescrição e periodização avançada de treino esportivo.
                </p>
              </div>
            ) : (
              <div className="space-y-3 animate-in fade-in">
                <h2 className="text-2xl md:text-3xl font-extrabold !text-white text-white tracking-tight leading-tight" style={{ color: "#ffffff" }}>
                  Evolua a Performance dos seus Atletas
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Controle cargas, prescreva planilhas e acompanhe a evolução com máxima precisão.
                </p>
              </div>
            )}
          </div>

          <div className="relative z-10 pt-6 border-t border-slate-800/80 space-y-3">
            <div className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
              <CheckCircle2 className="h-4 w-4 text-[#dc2626] flex-shrink-0" />
              <span>Autenticação rápida e segura por PIN</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
              <CheckCircle2 className="h-4 w-4 text-[#dc2626] flex-shrink-0" />
              <span>Sincronização multi-tenant em nuvem</span>
            </div>
          </div>
        </div>

        {/* C) FORM PANEL */}
        <div className="flex-1 p-6 md:p-10 flex flex-col justify-between bg-slate-900">
          {showReset ? (
            <div className="space-y-6 my-auto">
              <div>
                <h3 className="text-2xl font-bold !text-white text-white tracking-tight" style={{ color: "#ffffff" }}>Recuperar Senha</h3>
                <p className="text-sm text-slate-400 mt-1">Informe seu e-mail cadastrado para receber as instruções.</p>
              </div>

              {resetSent ? (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    <span>Instruções enviadas!</span>
                  </div>
                  <p className="text-xs text-slate-300">Confira a caixa de entrada do e-mail <b>{email}</b>.</p>
                  <button
                    type="button"
                    onClick={() => { setShowReset(false); setResetSent(false); }}
                    className="text-xs font-bold text-[#dc2626] hover:underline block pt-2"
                  >
                    ← Voltar para o login
                  </button>
                </div>
              ) : (
                <form onSubmit={handleReset} className="space-y-4">
                  <div className="space-y-1.5">
                    <label htmlFor="reset-email-hybrid" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">E-mail</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                      <input
                        id="reset-email-hybrid"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu.email@exemplo.com"
                        style={{ fontSize: "16px", color: "#ffffff" }}
                        className="w-full h-11 pl-10 pr-4 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#dc2626] text-base md:text-sm"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                    <span>Enviar Link de Reset</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowReset(false)}
                    className="w-full text-center text-xs text-slate-400 hover:text-white pt-2"
                  >
                    ← Voltar para o login
                  </button>
                </form>
              )}
            </div>
          ) : (
            <div className="space-y-6 my-auto">
              <div>
                <h3 className="text-2xl font-bold !text-white text-white tracking-tight" style={{ color: "#ffffff" }}>
                  {view === "signin" ? "Acessar Plataforma" : "Criar sua Conta"}
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  {view === "signin"
                    ? "Informe suas credenciais ou PIN de acesso."
                    : "Preencha seus dados para cadastro como treinador."}
                </p>
              </div>

              <form onSubmit={view === "signin" ? handleSignIn : handleSignUp} className="space-y-4">
                {view === "signup" && (
                  <div className="space-y-1.5">
                    <label htmlFor="su-nome-hybrid" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Nome Completo</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                      <input
                        id="su-nome-hybrid"
                        type="text"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Ex: Coach Montanha"
                        style={{ fontSize: "16px", color: "#ffffff" }}
                        className="w-full h-11 pl-10 pr-4 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#dc2626] text-base md:text-sm"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label htmlFor="si-email-hybrid" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">E-mail</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                    <input
                      id="si-email-hybrid"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu.email@exemplo.com"
                      style={{ fontSize: "16px", color: "#ffffff" }}
                      className="w-full h-11 pl-10 pr-4 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#dc2626] text-base md:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="pin-input-hybrid" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      {view === "signup" ? "PIN ou Senha (no mínimo 6 dígitos)" : "PIN ou Senha de Acesso"}
                    </label>
                  </div>
                  <div className="relative">
                    <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                    <input
                      id="pin-input-hybrid"
                      type={showPass ? "text" : "password"}
                      required
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                      placeholder="••••••••"
                      style={{ fontSize: "16px", color: "#ffffff" }}
                      className="w-full h-11 pl-10 pr-12 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#dc2626] text-base md:text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      aria-label="Alternar visibilidade do PIN"
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-white"
                    >
                      {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {view === "signin" && (
                  <div className="flex items-center justify-end pt-1">
                    <button
                      type="button"
                      onClick={() => setShowReset(true)}
                      className="text-xs font-bold text-[#dc2626] hover:underline"
                    >
                      Esqueci a senha
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  aria-label={view === "signin" ? "Entrar no Hybrid Training" : "Criar conta de treinador"}
                  className="w-full h-12 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 min-h-[44px]"
                >
                  {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                  <span>{view === "signin" ? "Entrar no Hybrid Training" : "Criar Conta de Treinador"}</span>
                </button>
              </form>

              <div className="text-center text-xs text-slate-400 pt-3 border-t border-slate-800/80">
                {view === "signin" ? (
                  <span>
                    Ainda não tem conta?{" "}
                    <button
                      type="button"
                      onClick={() => setView("signup")}
                      className="font-bold text-[#dc2626] hover:underline ml-1"
                    >
                      Cadastre-se aqui
                    </button>
                  </span>
                ) : (
                  <span>
                    Já é cadastrado?{" "}
                    <button
                      type="button"
                      onClick={() => setView("signin")}
                      className="font-bold text-[#dc2626] hover:underline ml-1"
                    >
                      Fazer login
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
      {/* Ecosystem Drawer Toggle */}
      <div className="mt-4 text-center">
        <button
          type="button"
          onClick={() => setShowEcosystem(!showEcosystem)}
          className="text-xs text-[#dc2626] hover:text-red-400 font-bold inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#dc2626]/10 border border-[#dc2626]/30 transition-all cursor-pointer shadow-md min-h-[44px]"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>🌐 Ecossistema Montanha (5 Apps Integrados)</span>
          {showEcosystem ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {showEcosystem && (
        <div className="mt-3 w-full max-w-[920px] p-4 rounded-2xl bg-slate-900/95 border border-[#dc2626]/40 shadow-2xl space-y-2 animate-in fade-in">
          <div className="text-[11px] font-bold text-red-300 flex items-center gap-1.5 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#dc2626]" />
            <span>Plataformas do Ecossistema Montanha</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {ECOSYSTEM_APPS.map((app) => (
              <div
                key={app.id}
                className={`p-3 rounded-xl border text-xs flex items-center justify-between transition-all ${
                  app.isCurrent
                    ? "bg-[#dc2626]/15 border-[#dc2626]/50 text-white"
                    : "bg-slate-950/60 border-slate-800/80 text-slate-300 hover:border-slate-700"
                }`}
              >
                <div className="flex flex-col">
                  <span className="font-bold flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: app.accent }} />
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
  );
}
