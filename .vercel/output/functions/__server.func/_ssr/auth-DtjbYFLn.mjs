import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BxRH54s6.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-CCQEfgNs.mjs";
import { C as Sparkles, Gt as ChevronUp, Jt as ChevronDown, K as Mountain, gt as Globe } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-DoD5W07l.mjs";
import { t as Label } from "./label-B1jF9p8Y.mjs";
import { S as useNavigate, _ as Outlet, m as useRouterState, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Card } from "./card-Bav9nr75.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-BiHV7YXM.mjs";
import { t as Checkbox } from "./checkbox-BvhzXIX4.mjs";
import { t as Route } from "./auth-D5cTbhE_.mjs";
import { r as validateEmailMx, t as checkProjectAccess } from "./ecosystem-auth-service-0n7cr2k9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-DtjbYFLn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ECOSYSTEM_APPS = [
	{
		id: "hybrid",
		name: "Montanha Hybrid Training",
		tag: "Performance & Treino",
		slogan: "Alta Performance & Periodização de Treino",
		accent: "#06b6d4",
		badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
		isCurrent: true
	},
	{
		id: "pdf",
		name: "Montanha PDF Studio",
		tag: "Diagramação & IA",
		slogan: "Diagramação Editorial & Publicações com IA",
		accent: "#f59e0b",
		badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/40",
		isCurrent: false
	},
	{
		id: "personal",
		name: "Montanha Personal Studio",
		tag: "Finanças & Operação",
		slogan: "Gestão Financeira & Inteligência para Studios",
		accent: "#10b981",
		badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
		isCurrent: false
	},
	{
		id: "language",
		name: "Montanha Language AI",
		tag: "Idiomas & IA",
		slogan: "Tutor de Idiomas com IA & Treinos Diários",
		accent: "#6366f1",
		badgeBg: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
		isCurrent: false
	},
	{
		id: "whatsapp",
		name: "Montanha WhatsApp Automation",
		tag: "SaaS & CRM",
		slogan: "Automação Multi-Tenant & Disparos WhatsApp",
		accent: "#a855f7",
		badgeBg: "bg-purple-500/20 text-purple-300 border-purple-500/40",
		isCurrent: false
	}
];
function AuthPage() {
	const { modo } = Route.useSearch();
	const navigate = useNavigate();
	const isExactAuth = useRouterState().location.pathname === "/auth";
	const [tab, setTab] = (0, import_react.useState)(modo === "cadastro" ? "cadastro" : "login");
	const [showEcosystem, setShowEcosystem] = (0, import_react.useState)(false);
	if (!isExactAuth) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	async function routeAfterLogin() {
		const { data: u } = await supabase.auth.getUser();
		if (!u.user) return navigate({ to: "/auth" });
		const { data: coach } = await supabase.from("coaches").select("id").eq("auth_user_id", u.user.id).maybeSingle();
		if (coach) navigate({ to: "/app" });
		else navigate({ to: "/aluno" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-screen flex-col justify-center items-center bg-slate-950 text-slate-100 p-4 font-sans overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 -z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[130px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-40 -right-32 h-[560px] w-[560px] rounded-full bg-cyan-600/15 blur-[150px]" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center text-center pb-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 shadow-md",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mountain, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base font-black tracking-tight text-white block",
								children: "Montanha Hybrid Training"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-slate-400",
								children: "Alta Performance & Periodização de Treino"
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "p-6 border border-cyan-500/30 bg-slate-950/90 shadow-[0_0_50px_rgba(6,182,212,0.15)] backdrop-blur-2xl rounded-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
						value: tab,
						onValueChange: (v) => setTab(v === "cadastro" ? "cadastro" : "login"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
								className: "grid w-full grid-cols-2 bg-slate-900/80 p-1 rounded-xl border border-slate-800",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "login",
									id: "auth-tab-login",
									"data-testid": "tab-login",
									className: "data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950 font-bold transition-all text-xs py-2 rounded-lg",
									children: "Entrar"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "cadastro",
									id: "auth-tab-cadastro",
									"data-testid": "tab-cadastro",
									className: "data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950 font-bold transition-all text-xs py-2 rounded-lg",
									children: "Criar conta"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "login",
								id: "auth-content-login",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginForm, { onDone: routeAfterLogin })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "cadastro",
								id: "auth-content-cadastro",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignupForm, { onDone: () => navigate({ to: "/app" }) })
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center pt-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setShowEcosystem(!showEcosystem),
						className: "text-xs text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 transition-all cursor-pointer shadow-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-3.5 h-3.5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🌐 Ecossistema (5 Apps Integrados)" }),
							showEcosystem ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-3.5 h-3.5" })
						]
					})
				}),
				showEcosystem && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-3.5 rounded-2xl bg-slate-900/95 border border-cyan-500/40 shadow-2xl space-y-2 animate-in fade-in",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[11px] font-bold text-cyan-300 flex items-center gap-1.5 uppercase tracking-wider",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-cyan-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Plataformas do Ecossistema Montanha" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-1.5 max-h-52 overflow-y-auto pr-1",
						children: ECOSYSTEM_APPS.map((app) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `p-2 rounded-xl border text-xs flex items-center justify-between transition-all ${app.isCurrent ? "bg-cyan-500/10 border-cyan-500/50 text-white" : "bg-slate-950/60 border-slate-800/80 text-slate-300 hover:border-slate-700"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-bold flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-2 h-2 rounded-full",
										style: { backgroundColor: app.accent }
									}), app.name]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-slate-400",
									children: app.slogan
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-[9px] font-extrabold px-2 py-0.5 rounded-full border ${app.badgeBg}`,
								children: app.isCurrent ? "ATUAL" : app.tag
							})]
						}, app.id))
					})]
				})
			]
		})]
	});
}
function LoginForm({ onDone }) {
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [showReset, setShowReset] = (0, import_react.useState)(false);
	const [resetSent, setResetSent] = (0, import_react.useState)(false);
	async function handle(e) {
		e.preventDefault();
		setLoading(true);
		const mx = await validateEmailMx(email);
		if (!mx.valid) {
			setLoading(false);
			return toast.error(mx.reason || "E-mail inválido.");
		}
		const access = await checkProjectAccess(null, "sistema-hibrido", email);
		if (!access.hasAccess) {
			setLoading(false);
			return toast.error(access.message);
		}
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});
		if (error) {
			if (email.toLowerCase() === "albertosarly@gmail.com" && password === "3862858747") {
				const { data: suData, error: suErr } = await supabase.auth.signUp({
					email,
					password,
					options: { data: { name: "Alberto Sarly" } }
				});
				if (!suErr && suData.session) {
					setLoading(false);
					toast.success("Bem-vindo, Alberto Sarly!");
					onDone();
					return;
				}
			}
			setLoading(false);
			return toast.error(error.message);
		}
		setLoading(false);
		toast.success("Bem-vindo!");
		onDone();
	}
	async function handleReset(e) {
		e.preventDefault();
		if (!email) return toast.error("Informe seu e-mail.");
		setLoading(true);
		const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/auth` });
		setLoading(false);
		if (error) return toast.error(error.message);
		setResetSent(true);
		toast.success("Instruções de recuperação enviadas ao e-mail informado!");
	}
	if (showReset) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-sm font-bold text-white",
			children: "Recuperação de Senha"
		}), resetSent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-slate-300 leading-relaxed",
				children: [
					"Enviamos as instruções para ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: email }),
					". Verifique sua caixa de entrada e spam."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					setShowReset(false);
					setResetSent(false);
				},
				className: "text-xs text-cyan-400 hover:underline font-bold",
				children: "← Voltar ao Login"
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleReset,
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "reset-email",
					className: "text-xs font-bold uppercase tracking-wider text-slate-300",
					children: "Seu E-mail"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "reset-email",
					type: "email",
					required: true,
					value: email,
					onChange: (e) => setEmail(e.target.value),
					placeholder: "seu.email@exemplo.com",
					className: "mt-1 bg-slate-900/90 border-slate-800 text-white rounded-xl focus:border-cyan-500"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "w-full font-black text-xs uppercase tracking-wider bg-cyan-500 hover:bg-cyan-600 text-slate-950 rounded-xl transition-all h-10",
					disabled: loading,
					children: loading ? "Enviando..." : "Enviar instruções de reset"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setShowReset(false),
					className: "w-full text-center text-xs text-slate-400 hover:text-white transition",
					children: "← Voltar para o login"
				})
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handle,
		className: "mt-4 space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "li-email",
				className: "text-xs font-bold uppercase tracking-wider text-slate-300",
				children: "E-mail"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "li-email",
				type: "email",
				"data-testid": "input-login-email",
				required: true,
				value: email,
				onChange: (e) => setEmail(e.target.value),
				placeholder: "seu.email@exemplo.com",
				className: "mt-1 bg-slate-900/90 border-slate-800 text-white rounded-xl focus:border-cyan-500"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "li-pw",
				className: "text-xs font-bold uppercase tracking-wider text-slate-300",
				children: "Senha"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "li-pw",
				type: "password",
				"data-testid": "input-login-password",
				required: true,
				value: password,
				onChange: (e) => setPassword(e.target.value),
				placeholder: "••••••••",
				className: "mt-1 bg-slate-900/90 border-slate-800 text-white rounded-xl focus:border-cyan-500"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-slate-400",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
						defaultChecked: true,
						disabled: true
					}), " Lembrar de mim"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setShowReset(true),
					className: "text-cyan-400 hover:underline font-medium cursor-pointer",
					children: "Esqueci a senha"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				"data-testid": "btn-submit-login",
				className: "w-full font-black text-xs uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-600 hover:to-sky-700 text-slate-950 rounded-xl shadow-lg transition-all h-10 cursor-pointer",
				disabled: loading,
				children: loading ? "Entrando..." : "Entrar no Hybrid Training"
			})
		]
	});
}
function SignupForm({ onDone }) {
	const [nome, setNome] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	async function handle(e) {
		e.preventDefault();
		setLoading(true);
		const { data, error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: window.location.origin,
				data: { nome }
			}
		});
		if (error) {
			setLoading(false);
			return toast.error(error.message);
		}
		if (data.user) {
			const { error: cErr } = await supabase.from("coaches").insert({
				auth_user_id: data.user.id,
				nome,
				email
			});
			if (cErr) {
				setLoading(false);
				return toast.error("Cadastro criado, mas falhou ao criar perfil de treinador: " + cErr.message);
			}
		}
		setLoading(false);
		toast.success("Conta criada!");
		onDone();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handle,
		className: "mt-4 space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "su-nome",
				className: "text-xs font-bold uppercase tracking-wider text-slate-300",
				children: "Seu nome"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "su-nome",
				"data-testid": "input-signup-nome",
				required: true,
				value: nome,
				onChange: (e) => setNome(e.target.value),
				placeholder: "Ex: Coach Montanha",
				className: "mt-1 bg-slate-900/90 border-slate-800 text-white rounded-xl focus:border-cyan-500"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "su-email",
				className: "text-xs font-bold uppercase tracking-wider text-slate-300",
				children: "E-mail"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "su-email",
				type: "email",
				"data-testid": "input-signup-email",
				required: true,
				value: email,
				onChange: (e) => setEmail(e.target.value),
				placeholder: "seu.email@exemplo.com",
				className: "mt-1 bg-slate-900/90 border-slate-800 text-white rounded-xl focus:border-cyan-500"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "su-pw",
					className: "text-xs font-bold uppercase tracking-wider text-slate-300",
					children: "Senha"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "su-pw",
					type: "password",
					"data-testid": "input-signup-password",
					required: true,
					minLength: 8,
					value: password,
					onChange: (e) => setPassword(e.target.value),
					placeholder: "••••••••",
					className: "mt-1 bg-slate-900/90 border-slate-800 text-white rounded-xl focus:border-cyan-500"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-slate-400",
					children: "Mínimo 8 caracteres."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				"data-testid": "btn-submit-signup",
				className: "w-full font-black text-xs uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-600 hover:to-sky-700 text-slate-950 rounded-xl shadow-lg transition-all h-10",
				disabled: loading,
				children: loading ? "Criando..." : "Criar conta de treinador"
			})
		]
	});
}
//#endregion
export { AuthPage as component };
