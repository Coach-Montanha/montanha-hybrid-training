import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BxRH54s6.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-CCQEfgNs.mjs";
import { C as Sparkles, E as Shield, Ft as Copy, N as Settings2, Nt as DollarSign, O as ShieldCheck, Pt as Database, Q as LogOut, St as FileText, X as MessageSquare, an as ArrowRight, bt as Flame, cn as Activity, en as Bot, f as UserCheck, g as Timer, gt as Globe, jt as Dumbbell, kt as ExternalLink, m as TriangleAlert, on as ArrowLeft, pt as HeartPulse, s as WandSparkles, st as Layers, t as Zap } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-DoD5W07l.mjs";
import { t as Label } from "./label-B1jF9p8Y.mjs";
import { t as Badge } from "./badge-Bt-nVIZo.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-B7RuMzGd.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as useQuery, r as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { r as METHODOLOGY_LABEL } from "./methodology-DF-HMT6m.mjs";
import { C as useRouter, S as useNavigate, V as redirect, _ as Outlet, b as createRootRouteWithContext, d as Scripts, f as HeadContent, g as createRouter, m as useRouterState, v as lazyRouteComponent, x as Link, y as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useServerFn } from "./ssr-rpc-DsWtVjPG.mjs";
import { c as object, r as _enum } from "../_libs/tanstack__zod-adapter+zod.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as Card } from "./card-Bav9nr75.mjs";
import { t as registerServiceWorker } from "./pwa-CO9oSDi1.mjs";
import { t as Route$21 } from "./aluno.sessao._id-DeyxJ3Af.mjs";
import { r as themeInitScript } from "./theme-C4REE9V2.mjs";
import { t as useCoach } from "./use-coach-B0Sg5_sT.mjs";
import { r as getGeneratorPrefs } from "./generator-prefs.functions-VkZdfEVy.mjs";
import { t as Route$22 } from "./app.configuracoes-6JaVC33m.mjs";
import { n as gerarTreino, t as Stepper } from "./gerador.functions-C5JHuKjv.mjs";
import { t as Route$23 } from "./auth-D5cTbhE_.mjs";
import { n as Route$25, r as Route$1$24 } from "./app.programas-DGH9RW1I.mjs";
import { t as Route$24 } from "./app.sessoes._id-rznymWVi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BKt9Q4mV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-6tunuN8W.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var IMPERSONATE_STORAGE_KEY = "montanha_impersonate";
function getImpersonatedEmail() {
	if (typeof window === "undefined") return null;
	try {
		const fromUrl = new URLSearchParams(window.location.search).get("impersonate");
		if (fromUrl && fromUrl.trim()) {
			const clean = fromUrl.trim().toLowerCase();
			localStorage.setItem(IMPERSONATE_STORAGE_KEY, clean);
			return clean;
		}
		return localStorage.getItem(IMPERSONATE_STORAGE_KEY);
	} catch {
		return null;
	}
}
function clearImpersonation() {
	if (typeof window === "undefined") return;
	try {
		localStorage.removeItem(IMPERSONATE_STORAGE_KEY);
		const url = new URL(window.location.href);
		url.searchParams.delete("impersonate");
		window.location.href = url.pathname + (url.search ? url.search : "") + url.hash;
	} catch {
		localStorage.removeItem(IMPERSONATE_STORAGE_KEY);
		window.location.reload();
	}
}
var ImpersonationBanner = () => {
	const [email, setEmail] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setEmail(getImpersonatedEmail());
		const handleStorage = (e) => {
			if (e.key === "montanha_impersonate") setEmail(e.newValue);
		};
		window.addEventListener("storage", handleStorage);
		return () => window.removeEventListener("storage", handleStorage);
	}, [useRouterState({ select: (s) => s.location.search })]);
	if (!email) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		"aria-label": "Aviso de Modo Suporte Técnico",
		className: "sticky top-0 z-[9999] w-full bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-cyan-500/20 border-b border-amber-500/40 backdrop-blur-xl px-4 py-2 text-xs text-amber-200 shadow-lg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "p-1 rounded-lg bg-amber-500/30 text-amber-300",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-4 h-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-extrabold uppercase tracking-wider text-[11px] text-amber-300",
							children: "Modo Suporte Técnico:"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Você está operando como" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono font-bold text-white bg-slate-900/80 px-2 py-0.5 rounded border border-amber-500/30",
							children: email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-slate-400 hidden sm:inline",
							children: "(Seus privilégios de SuperAdmin permanecem ativos)"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 rounded-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "w-3 h-3" }), " Sessão Ativa"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: clearImpersonation,
					className: "inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/50 font-bold transition text-xs cursor-pointer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "w-3 h-3" }), " Sair do modo suporte"]
				})]
			})]
		})
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$20 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{ title: "Montanha Hybrid Training — Plataforma de Alta Performance, Endurance & Periodização de Treino" },
			{
				name: "description",
				content: "Plataforma de Alta Performance, Endurance & Periodização de Treino."
			},
			{
				name: "author",
				content: "Coach Montanha"
			},
			{
				name: "theme-color",
				content: "#0F1115"
			},
			{
				name: "visual-theme",
				content: "padrao"
			},
			{
				name: "apple-mobile-web-app-capable",
				content: "yes"
			},
			{
				name: "apple-mobile-web-app-status-bar-style",
				content: "black-translucent"
			},
			{
				name: "apple-mobile-web-app-title",
				content: "Montanha Hybrid Training"
			},
			{
				name: "mobile-web-app-capable",
				content: "yes"
			},
			{
				property: "og:title",
				content: "Montanha Hybrid Training — Plataforma de Alta Performance, Endurance & Periodização de Treino"
			},
			{
				property: "og:description",
				content: "Plataforma de Alta Performance, Endurance & Periodização de Treino."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "manifest",
				href: "/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&display=swap"
			}
		],
		scripts: [{ children: themeInitScript }]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt-BR",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { dangerouslySetInnerHTML: { __html: `
              #app-preloader {
                position: fixed;
                top: 0; left: 0; right: 0; bottom: 0;
                z-index: 999999;
                background-color: #0f1115;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                transition: opacity 0.4s ease, visibility 0.4s ease;
              }
              #app-preloader.preloader-hidden {
                opacity: 0 !important;
                visibility: hidden !important;
                pointer-events: none !important;
                display: none !important;
              }
              .preloader-emblem-wrap {
                position: relative;
                width: 96px;
                height: 96px;
                border-radius: 28px;
                background: linear-gradient(135deg, #082f49 0%, #0f172a 100%);
                border: 2px solid rgba(6, 182, 212, 0.4);
                box-shadow: 0 0 35px rgba(6, 182, 212, 0.3), inset 0 0 15px rgba(6, 182, 212, 0.15);
                display: flex;
                align-items: center;
                justify-content: center;
                animation: preloaderPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
              }
              .preloader-aura-ring {
                position: absolute;
                inset: -6px;
                border-radius: 34px;
                border: 1.5px solid rgba(6, 182, 212, 0.25);
                animation: auraExpand 2.5s linear infinite;
              }
              .preloader-title {
                margin-top: 22px;
                font-size: 22px;
                font-weight: 900;
                letter-spacing: -0.02em;
                color: #f8fafc;
                text-align: center;
              }
              .preloader-title span {
                color: #06b6d4;
              }
              .preloader-subtitle {
                margin-top: 6px;
                font-size: 13px;
                font-weight: 500;
                color: #94a3b8;
                text-align: center;
                max-width: 350px;
                padding: 0 16px;
              }
              .preloader-spinner {
                margin-top: 24px;
                width: 26px;
                height: 26px;
                border: 3px solid rgba(6, 182, 212, 0.15);
                border-top-color: #06b6d4;
                border-radius: 50%;
                animation: preloaderSpin 0.75s linear infinite;
              }
              .preloader-progress-track {
                margin-top: 20px;
                width: 160px;
                height: 4px;
                background: rgba(255, 255, 255, 0.08);
                border-radius: 99px;
                overflow: hidden;
              }
              .preloader-progress-bar {
                height: 100%;
                width: 60%;
                background: linear-gradient(90deg, #06b6d4, #38bdf8);
                border-radius: 99px;
                animation: progressMove 1.5s ease-in-out infinite alternate;
              }
              @keyframes preloaderPulse {
                0%, 100% { transform: scale(1); box-shadow: 0 0 35px rgba(6, 182, 212, 0.3); }
                50% { transform: scale(1.05); box-shadow: 0 0 50px rgba(6, 182, 212, 0.5); }
              }
              @keyframes auraExpand {
                0% { opacity: 0.8; transform: scale(0.95); }
                100% { opacity: 0; transform: scale(1.2); }
              }
              @keyframes preloaderSpin {
                to { transform: rotate(360deg); }
              }
              @keyframes progressMove {
                0% { transform: translateX(-40%); }
                100% { transform: translateX(100%); }
              }
            ` } })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "app-preloader",
				"aria-label": "Carregando Montanha Hybrid Training...",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "preloader-emblem-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "preloader-aura-ring" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							width: "48",
							height: "48",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "#06b6d4",
							strokeWidth: "2.2",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m8 3 4 8 5-5 5 15H2L8 3z" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "preloader-title",
						children: ["Montanha ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hybrid Training" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "preloader-subtitle",
						children: "Plataforma de Alta Performance, Endurance & Periodização de Treino"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "preloader-spinner" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "preloader-progress-track",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "preloader-progress-bar" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `(function(){
              function dismiss(){
                var p = document.getElementById('app-preloader');
                if(p){
                  p.classList.add('preloader-hidden');
                  p.style.display = 'none';
                }
              }
              if (document.readyState === 'complete') {
                setTimeout(dismiss, 50);
              } else {
                window.addEventListener('load', function(){ setTimeout(dismiss, 50); });
                setTimeout(dismiss, 500);
              }
            })();` } }),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$20.useRouteContext();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		registerServiceWorker();
		const { data: sub } = supabase.auth.onAuthStateChange((event) => {
			if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED") return;
			router.invalidate();
			if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
		});
		return () => sub.subscription.unsubscribe();
	}, [router, queryClient]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpersonationBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
				richColors: true,
				position: "top-right"
			})
		]
	});
}
var $$splitComponentImporter$11 = () => import("./master-admin-BEFZPTe6.mjs");
var Route$19 = createFileRoute("/master-admin")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var Route$18 = createFileRoute("/eco")({ component: EcoPage });
var ECOSYSTEM_APPS = [
	{
		id: "sistema-hibrido",
		name: "Montanha Hybrid Training",
		tag: "Plataforma Atual",
		category: "Treinamento & Periodização",
		color: "border-cyan-500/40 bg-cyan-500/10 text-cyan-300",
		icon: Flame,
		url: "/app",
		isLocal: true,
		description: "Plataforma de alta performance para atletas híbridos, endurance, musculação, LPO e periodização com IA."
	},
	{
		id: "eduflow-finance",
		name: "Montanha Personal Studio",
		tag: "EduFlow Finance",
		category: "Finanças & Gestão de Studio",
		color: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
		icon: DollarSign,
		url: "http://localhost:5173/eco",
		isLocal: false,
		description: "Gestão financeira, controle de alunos, cobrança automática e contratos para personal trainers."
	},
	{
		id: "smart-language",
		name: "Montanha Language AI",
		tag: "Smart Language",
		category: "Idiomas & Imersão com IA",
		color: "border-indigo-500/40 bg-indigo-500/10 text-indigo-300",
		icon: Globe,
		url: "http://localhost:5174/eco",
		isLocal: false,
		description: "Tutor de idiomas inteligente com IA, microtreinos de 5 minutos e fluência acelerada."
	},
	{
		id: "construtor-pdf",
		name: "Montanha PDF Studio",
		tag: "Editorial & PDFs",
		category: "Diagramação Editorial",
		color: "border-amber-500/40 bg-amber-500/10 text-amber-300",
		icon: FileText,
		url: "http://localhost:5175/eco",
		isLocal: false,
		description: "Gerador e diagramador de fichas de treino, relatórios e e-books com padrão editorial suíço."
	},
	{
		id: "whatsapp-lovable",
		name: "Montanha WhatsApp Automation",
		tag: "SaaS WhatsApp",
		category: "Automação & CRM",
		color: "border-purple-500/40 bg-purple-500/10 text-purple-300",
		icon: MessageSquare,
		url: "http://localhost:3000/#/eco",
		isLocal: false,
		description: "Disparos inteligentes de WhatsApp, notificações de treinos e CRM integrado multi-tenant."
	}
];
function EcoPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground p-4 md:p-8 space-y-8 max-w-7xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40 p-6 md:p-10 shadow-2xl backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "outline",
								className: "border-cyan-500/50 bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-wider px-3 py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 mr-1.5 text-cyan-400" }), "Ecossistema Montanha Hub"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "outline",
								className: "border-purple-500/50 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-wider px-3 py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-3.5 h-3.5 mr-1.5 text-purple-400" }), "Ruflo Eco Engine v2.5"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-3xl md:text-5xl font-black tracking-tight text-white",
							children: ["Hub do Ecossistema ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-cyan-400",
								children: "Montanha"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed",
							children: "Painel unificado do ecossistema de 5 aplicativos. Alterne instantaneamente entre os módulos, monitore a eficiência da economia de tokens do motor Ruflo e acesse ferramentas de alta performance."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3 pt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-bold shadow-lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/create",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 mr-2" }), "Estúdio de Criação com IA"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									className: "border-cyan-500/40 hover:bg-cyan-500/10 text-cyan-300 font-bold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/boost",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-4 h-4 mr-2" }), "Acelerador de Performance"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									className: "border-purple-500/40 hover:bg-purple-500/10 text-purple-300 font-bold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/master-admin",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-4 h-4 mr-2" }), "Painel Master SuperAdmin"]
									})
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-5 border-cyan-500/20 bg-card/60 backdrop-blur-md space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-center text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider",
									children: "Economia de Tokens"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-4 h-4 text-cyan-400" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl font-black text-cyan-400",
								children: "84.7%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Redução estimada de custos com Ruflo /eco"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-5 border-purple-500/20 bg-card/60 backdrop-blur-md space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-center text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider",
									children: "Cache Semântico Local"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "w-4 h-4 text-purple-400" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl font-black text-purple-400",
								children: "0 Tokens"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Consultas repetidas servidas com latência zero"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-5 border-emerald-500/20 bg-card/60 backdrop-blur-md space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-center text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider",
									children: "Compressão de Contexto"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "w-4 h-4 text-emerald-400" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl font-black text-emerald-400",
								children: "Ativa"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Context Pruning preservando intenção do atleta"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-5 border-amber-500/20 bg-card/60 backdrop-blur-md space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-center text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider",
									children: "Nível de Modelo Dinâmico"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "w-4 h-4 text-amber-400" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl font-black text-amber-400",
								children: "Flash 2.5"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Roteamento automático por complexidade de treino"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-between",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-2xl font-black tracking-tight text-white flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-6 h-6 text-cyan-400" }), "Aplicativos do Ecossistema Montanha"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Conectividade total entre treinamento, finanças, idiomas, editorial e comunicação."
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
					children: ECOSYSTEM_APPS.map((app) => {
						const Icon = app.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: `p-6 border transition-all duration-200 hover:shadow-xl hover:border-cyan-500/50 bg-card/70 backdrop-blur-md flex flex-col justify-between space-y-4 ${app.isLocal ? "ring-2 ring-cyan-500/30" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-3 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-6 h-6" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col items-end gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${app.color}`,
												children: app.tag
											}), app.isLocal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-bold text-cyan-400",
												children: "App Local"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-extrabold text-base text-white",
										children: app.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold text-muted-foreground",
										children: app.category
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-slate-300 leading-relaxed",
										children: app.description
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-2",
								children: app.isLocal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: app.url,
										children: ["Acessar Aplicativo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4 ml-1.5" })]
									})
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									className: "w-full border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 font-bold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: app.url,
										target: "_blank",
										rel: "noopener noreferrer",
										children: ["Abrir Módulo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-4 h-4 ml-1.5" })]
									})
								})
							})]
						}, app.id);
					})
				})]
			})
		]
	});
}
var $$splitComponentImporter$10 = () => import("./app.gerar-C9ur7dNx.mjs");
var PrescreverIaDialog = (0, import_react.lazy)(() => import("./PrescreverIaDialog-CrVK-cbI.mjs").then((m) => ({ default: m.PrescreverIaDialog })));
var GerarTreinoModal = (0, import_react.lazy)(() => import("./GerarTreinoModal-D1PBa0YY.mjs").then((m) => ({ default: m.GerarTreinoModal })));
var ConstrutorMoldeDialog = (0, import_react.lazy)(() => import("./ConstrutorMoldeDialog-DbZub7hC.mjs").then((m) => ({ default: m.ConstrutorMoldeDialog })));
var SEMANAS_POR_ESCOPO = {
	sessao: 1,
	semana: 1,
	mes: 4,
	ano: 52
};
var ESCOPO_LABEL = {
	sessao: "1 sessão",
	semana: "1 semana",
	mes: "1 mês (4 semanas)",
	ano: "1 ano (52 semanas)"
};
var Route$17 = createFileRoute("/_authenticated/app/gerar")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
function GerarPanel({ showHeader = true } = {}) {
	const navigate = useNavigate();
	const gerar = useServerFn(gerarTreino);
	const { data: coach } = useCoach();
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [metodologia, setMetodologia] = (0, import_react.useState)("hibrido");
	const [escopo, setEscopo] = (0, import_react.useState)("sessao");
	const [titulo, setTitulo] = (0, import_react.useState)("Programa gerado");
	const [dataInicio, setDataInicio] = (0, import_react.useState)((/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
	const [dias, setDias] = (0, import_react.useState)(3);
	const [avisos, setAvisos] = (0, import_react.useState)([]);
	const [iaPrograma, setIaPrograma] = (0, import_react.useState)(null);
	const [iaEscopo, setIaEscopo] = (0, import_react.useState)(null);
	const [kbConfig, setKbConfig] = (0, import_react.useState)(null);
	const [wlConfig, setWlConfig] = (0, import_react.useState)(null);
	const [tfConfig, setTfConfig] = (0, import_react.useState)(null);
	const [coConfig, setCoConfig] = (0, import_react.useState)(null);
	const [kbModalOpen, setKbModalOpen] = (0, import_react.useState)(false);
	const [moldeModalOpen, setMoldeModalOpen] = (0, import_react.useState)(false);
	const isMusculacao = metodologia === "musculacao";
	const isKbSport = metodologia === "kettlebell_sport";
	const isWeightlifting = metodologia === "levantamento_peso";
	const isFuncional = metodologia === "treinamento_funcional";
	const isCorrida = metodologia === "corrida";
	const isHibrido = metodologia === "hibrido";
	const isKbFitness = metodologia === "kettlebell_fitness";
	const [, setPosicionarAberto] = (0, import_react.useState)(null);
	const [activeStep, setActiveStep] = (0, import_react.useState)(0);
	const steps = [
		{
			title: "Modalidade",
			description: "Tipo e identificação"
		},
		{
			title: "Planejamento",
			description: "Escopo e frequência"
		},
		{
			title: "Parâmetros & IA",
			description: "Diretrizes e geração"
		}
	];
	const isKbFitnessMolde = isKbFitness;
	const usaModalIa = isKbSport || isWeightlifting || isFuncional || isCorrida;
	const usaMolde = isHibrido || isKbFitnessMolde;
	const prefs = useQuery({
		queryKey: ["generator-prefs", metodologia],
		queryFn: () => getGeneratorPrefs({ data: { metodologia } })
	});
	async function onSubmit(e) {
		e.preventDefault();
		if (usaMolde) {
			setMoldeModalOpen(true);
			return;
		}
		if (usaModalIa) {
			setKbModalOpen(true);
			return;
		}
		setLoading(true);
		setAvisos([]);
		try {
			if (isMusculacao) {
				if (!coach) throw new Error("Perfil de treinador não encontrado");
				const { data: prog, error } = await supabase.from("programs").insert({
					coach_id: coach.id,
					metodologia: "musculacao",
					titulo,
					data_inicio: dataInicio,
					duracao_semanas: SEMANAS_POR_ESCOPO[escopo] ?? 4
				}).select("id, titulo").single();
				if (error || !prog) throw new Error(error?.message ?? "Falha ao criar rotina");
				setIaEscopo({
					label: ESCOPO_LABEL[escopo] ?? escopo,
					semanas: SEMANAS_POR_ESCOPO[escopo] ?? 4,
					diasPorSemana: escopo === "sessao" ? 1 : dias,
					dataInicio
				});
				setIaPrograma({
					id: prog.id,
					titulo: prog.titulo ?? titulo,
					metodologia: "musculacao"
				});
				return;
			}
			const res = await gerar({ data: {
				metodologia,
				escopo,
				titulo,
				data_inicio: dataInicio,
				dias_por_semana: dias
			} });
			toast.success(`Gerado: ${res.resultado.reduce((s, r) => s + (r.sessoes || 0), 0)} sessão(ões)`);
			const list = res.avisos;
			if (list && list.length > 0) setAvisos(list);
			if (res.primeira_sessao_id) navigate({
				to: "/app/sessoes/$id",
				params: { id: res.primeira_sessao_id }
			});
		} catch (err) {
			toast.error(err?.message ?? "Falha ao gerar");
		} finally {
			setLoading(false);
		}
	}
	/** Cria a rotina e abre a prescrição por IA com a escola metodológica escolhida. */
	async function gerarComEscola(cfg) {
		setLoading(true);
		try {
			if (!coach) throw new Error("Perfil de treinador não encontrado");
			if (usaMolde && cfg.hibrido) {
				const { validarLimitesDoMolde } = await import("./format-limits-DWDauxMB.mjs");
				const violacoes = validarLimitesDoMolde(cfg.hibrido.sessaoTemplate.map((b) => ({
					formato: b.formato,
					numeroExercicios: b.numeroExercicios,
					seriesMax: b.seriesMax
				})));
				if (violacoes.length > 0) {
					const v = violacoes[0];
					throw new Error(`FORMAT_LIMIT_EXCEEDED — o formato "${v.formato}" aceita no máximo ${v.maximo} em ${v.campo} (você configurou ${v.valor}).`);
				}
				const { gerarSessoesHibrido } = await import("./hibrido-gerar.functions-CqLmB83b.mjs");
				const res = await gerarSessoesHibrido({ data: {
					modalidade: metodologia,
					tituloPrograma: titulo,
					numeroSessoes: cfg.hibrido.numeroSessoes,
					diasPorSemana: escopo === "sessao" ? 1 : dias,
					dataInicio,
					sessaoTemplate: cfg.hibrido.sessaoTemplate,
					instrucoes: cfg.instrucoes ?? ""
				} });
				toast.success(`${res.sessoesGeradas} treino(s) gerado(s) com sucesso.`);
				res.avisos?.forEach((a) => toast.warning(a));
				setMoldeModalOpen(false);
				setPosicionarAberto({
					programaId: res.programaId,
					modalidade: metodologia
				});
				return;
			}
			const semanas = SEMANAS_POR_ESCOPO[escopo] ?? 4;
			const { data: prog, error } = await supabase.from("programs").insert({
				coach_id: coach.id,
				metodologia,
				titulo,
				data_inicio: dataInicio,
				duracao_semanas: semanas
			}).select("id, titulo").single();
			if (error || !prog) throw new Error(error?.message ?? "Falha ao criar rotina");
			setKbConfig(cfg.kb ?? null);
			setWlConfig(cfg.wl ?? null);
			setTfConfig(cfg.tf ?? null);
			setCoConfig(cfg.co ?? null);
			setKbModalOpen(false);
			setIaEscopo({
				label: ESCOPO_LABEL[escopo] ?? escopo,
				semanas,
				diasPorSemana: escopo === "sessao" ? 1 : dias,
				dataInicio
			});
			setIaPrograma({
				id: prog.id,
				titulo: prog.titulo ?? titulo
			});
		} catch (err) {
			toast.error(err?.message ?? "Falha ao gerar");
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: showHeader ? "mx-auto max-w-2xl p-6" : "mx-auto max-w-2xl",
		children: [
			showHeader && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold tracking-tight",
						children: "Gerar treino"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Motor automático baseado nos templates da modalidade."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: () => navigate({
						to: "/app/treinos",
						search: { aba: "programas" }
					}),
					className: "text-muted-foreground hover:text-foreground",
					children: "Voltar"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-6 pb-4 border-b",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
							steps,
							activeStep,
							onStepClick: (step) => setActiveStep(step)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "space-y-5",
						children: [
							activeStep === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 animate-in fade-in duration-200",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "titulo-input",
										className: "text-sm font-medium",
										children: "Título do programa"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "titulo-input",
										value: titulo,
										onChange: (e) => setTitulo(e.target.value),
										placeholder: "Ex.: Bloco de Força Inicial, Hipertrofia 12 Semanas...",
										required: true,
										className: "mt-1.5"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-sm font-medium",
											children: "Modalidade esportiva / metodologia"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: metodologia,
											onValueChange: (v) => setMetodologia(v),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "mt-1.5",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: Object.keys(METHODOLOGY_LABEL).map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: k,
												children: METHODOLOGY_LABEL[k]
											}, k)) })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-xs text-muted-foreground",
											children: "O gerador adapta os templates e motores de IA para os princípios técnicos dessa modalidade."
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pt-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "button",
											className: "w-full gap-2 cursor-pointer",
											onClick: () => {
												if (!titulo.trim()) {
													toast.error("Por favor, preencha o título do programa antes de continuar.");
													return;
												}
												setActiveStep(1);
											},
											children: ["Continuar: Planejamento ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
										})
									})
								]
							}),
							activeStep === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 animate-in fade-in duration-200",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 md:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-sm font-medium",
											children: "Escopo do programa"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: escopo,
											onValueChange: (v) => setEscopo(v),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "mt-1.5",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "sessao",
													children: "1 sessão"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "semana",
													children: "1 semana"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "mes",
													children: "1 mês (4 semanas)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "ano",
													children: "1 ano (52 semanas)"
												})
											] })]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-sm font-medium",
											children: "Data de início"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "date",
											value: dataInicio,
											onChange: (e) => setDataInicio(e.target.value),
											required: true,
											className: "mt-1.5"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-sm font-medium",
											children: "Frequência semanal (dias)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "number",
											min: 1,
											max: 7,
											value: dias,
											onChange: (e) => setDias(Number(e.target.value)),
											disabled: escopo === "sessao",
											className: "mt-1.5"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-xs text-muted-foreground",
											children: escopo === "sessao" ? "Fixado em 1 sessão avulsa." : "Quantidade de treinos distribuídos ao longo de cada semana."
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2 pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "button",
											variant: "outline",
											className: "flex-1 gap-2 cursor-pointer",
											onClick: () => setActiveStep(0),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Voltar"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "button",
											className: "flex-1 gap-2 cursor-pointer",
											onClick: () => setActiveStep(2),
											children: ["Avançar: Parâmetros & IA ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
										})]
									})
								]
							}),
							activeStep === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 animate-in fade-in duration-200",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-lg border bg-muted/20 p-3.5 text-xs space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-foreground block text-sm",
												children: "Resumo da Prescrição"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap gap-2 items-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground font-medium",
													children: "Programa:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-foreground",
													children: titulo
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap gap-2 items-center pt-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
														variant: "default",
														className: "text-xs",
														children: METHODOLOGY_LABEL[metodologia]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
														variant: "outline",
														className: "text-xs",
														children: ESCOPO_LABEL[escopo] ?? escopo
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
														variant: "secondary",
														className: "text-xs",
														children: escopo === "sessao" ? "1 sessão" : `${dias} dias / semana`
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-muted-foreground ml-auto text-[11px]",
														children: ["Início: ", dataInicio]
													})
												]
											})
										]
									}),
									isMusculacao ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5 rounded-lg border border-primary/25 bg-primary/[0.06] p-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex-1 leading-relaxed text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground",
													children: "Musculação usa IA."
												}),
												" Esta modalidade não usa o banco de exercícios nem os templates de blocos: ao gerar, criamos a rotina e abrimos o ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground",
													children: "Prescrever com IA"
												}),
												", onde você descreve a divisão desejada e revisa a prévia antes de salvar."
											]
										})]
									}) : isHibrido ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5 rounded-lg border border-primary/25 bg-primary/[0.06] p-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex-1 leading-relaxed text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground",
													children: "Motor por molde estrutural."
												}),
												" ",
												"Ao gerar, você monta a estrutura fixa de blocos da sessão (formato, duração, séries, número de exercícios, descanso) e a IA só escolhe quais exercícios da sua biblioteca preenchem cada bloco marcado como \"IA escolhe\"."
											]
										})]
									}) : isKbFitness ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5 rounded-lg border border-primary/25 bg-primary/[0.06] p-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex-1 leading-relaxed text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-foreground",
												children: "Motor dedicado por molde."
											}), " Kettlebell Fitness segue uma estrutura técnica rigorosa: Mobilidade (2 min), Aquecimento (5 min circuito) e bloco principal Kettlebell Fitness."]
										})]
									}) : isCorrida ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5 rounded-lg border border-primary/25 bg-primary/[0.06] p-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex-1 leading-relaxed text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground",
													children: "Motor por linha metodológica."
												}),
												" ",
												"Ao gerar, você informa distância-alvo, volume semanal, marca recente e lesões, e escolhe a linha (Daniels/VDOT, Lydiard, Canova, Hansons, Pfitzinger, Horwill, Koop)."
											]
										})]
									}) : isFuncional ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5 rounded-lg border border-primary/25 bg-primary/[0.06] p-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex-1 leading-relaxed text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground",
													children: "Motor por linha metodológica."
												}),
												" ",
												"Ao gerar, você informa objetivo, equipamento e limitações, e escolhe a linha (FMS, EXOS, DNS, CrossFit, Original Strength)."
											]
										})]
									}) : isWeightlifting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5 rounded-lg border border-primary/25 bg-primary/[0.06] p-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex-1 leading-relaxed text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground",
													children: "Motor por escola metodológica."
												}),
												" ",
												"Ao gerar, você escolhe a linha (Búlgara, Russa Clássica, Chinesa, Cubana, Colombiana, Pendlay, Takano)."
											]
										})]
									}) : isKbSport ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5 rounded-lg border border-primary/25 bg-primary/[0.06] p-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex-1 leading-relaxed text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground",
													children: "Motor por escola metodológica."
												}),
												" ",
												"Ao gerar, você escolhe a linha (Fedorenko, Rudnev, Vorotyntsev, Denisov, Vasilev, Gomonov)."
											]
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2 rounded-lg border border-border/60 bg-muted/30 p-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-1 flex-wrap items-center gap-x-2 gap-y-1 leading-relaxed text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: prefs.data?.origem === "custom" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
												"Usando suas preferências de ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground",
													children: METHODOLOGY_LABEL[metodologia]
												}),
												"."
											] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
												"Usando templates padrão de ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground",
													children: METHODOLOGY_LABEL[metodologia]
												}),
												"."
											] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/app/configuracoes",
												search: { section: "geracao" },
												className: "font-medium text-primary underline-offset-4 hover:underline",
												children: "Personalizar"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2 pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "button",
											variant: "outline",
											className: "flex-1 gap-2 cursor-pointer",
											onClick: () => setActiveStep(1),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Voltar"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "submit",
											disabled: loading,
											className: "flex-1 gap-2 cursor-pointer",
											children: loading ? isMusculacao ? "Criando rotina..." : "Gerando..." : isMusculacao ? "Prescrever com IA" : usaModalIa ? "Configurar e gerar" : "Gerar treino"
										})]
									})
								]
							})
						]
					}),
					avisos.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-2 rounded-lg border border-warning/40 bg-warning/10 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-sm font-semibold text-warning-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" }), "Avisos da geração"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-1 text-xs leading-relaxed text-warning-foreground/90",
							children: avisos.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 h-1 w-1 shrink-0 rounded-full bg-warning-foreground/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a })]
							}, i))
						})]
					})
				]
			}),
			moldeModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConstrutorMoldeDialog, {
					open: moldeModalOpen,
					onOpenChange: setMoldeModalOpen,
					modalidade: metodologia,
					tituloPrograma: titulo,
					isGenerating: loading,
					onGerar: (hibrido, instrucoes) => gerarComEscola({
						hibrido,
						instrucoes
					})
				})
			}),
			kbModalOpen && !isHibrido && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GerarTreinoModal, {
					open: kbModalOpen,
					onOpenChange: setKbModalOpen,
					modalidade: isKbSport ? "kettlebell_sport" : isCorrida ? "corrida" : isFuncional ? "treinamento_funcional" : "levantamento_peso",
					titulo,
					escopoLabel: ESCOPO_LABEL[escopo] ?? escopo,
					dataInicio,
					diasPorSemana: escopo === "sessao" ? 1 : dias,
					isGenerating: loading,
					onGenerateKb: (kb) => gerarComEscola({ kb }),
					onGenerateWl: (wl) => gerarComEscola({ wl }),
					onGenerateTf: (tf) => gerarComEscola({ tf }),
					onGenerateCo: (co) => gerarComEscola({ co })
				})
			}),
			iaPrograma && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrescreverIaDialog, {
					programa: iaPrograma,
					escopo: iaEscopo,
					kb: kbConfig,
					wl: wlConfig,
					tf: tfConfig,
					co: coConfig,
					onOpenChange: (o) => {
						if (!o) {
							setIaPrograma(null);
							setIaEscopo(null);
							setKbConfig(null);
							setWlConfig(null);
							setTfConfig(null);
							setCoConfig(null);
							navigate({ to: "/app/programas" });
						}
					}
				})
			})
		]
	});
}
var Route$16 = createFileRoute("/create")({ component: CreateStudioPage });
function CreateStudioPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground p-4 md:p-8 space-y-8 max-w-7xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40 p-6 md:p-10 shadow-2xl backdrop-blur-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "outline",
						className: "border-cyan-500/50 bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-wider px-3 py-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 mr-1.5 text-cyan-400" }), "Estúdio de Criação com IA"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "outline",
						className: "border-purple-500/50 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-wider px-3 py-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "w-3.5 h-3.5 mr-1.5 text-purple-400" }), "Periodização Inteligente"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-3xl md:text-5xl font-black tracking-tight text-white",
						children: ["Criação de ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-cyan-400",
							children: "Treinos & Periodização"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed mt-1",
						children: "Gere prescrições de alta performance com IA: Endurance, Musculação, LPO, Kettlebell Sport e Treinos Híbridos completos."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								className: "border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-xs font-bold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/eco",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-3.5 h-3.5 mr-1.5" }), "Hub Ecossistema"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								className: "border-cyan-500/40 hover:bg-cyan-500/10 text-cyan-300 text-xs font-bold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/boost",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "w-3.5 h-3.5 mr-1.5" }), "Acelerador"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/app/programas",
									children: ["Ver Programas ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5 ml-1.5" })]
								})
							})
						]
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-card/70 border border-slate-800 rounded-2xl p-4 md:p-8 shadow-xl backdrop-blur-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GerarPanel, { showHeader: false })
		})]
	});
}
var Route$15 = createFileRoute("/boost")({ component: BoostPage });
var QUICK_WORKOUTS = [
	{
		title: "EMOM 20 Turbo — KB & Peso Corporal",
		type: "EMOM",
		duration: "20 min",
		intensity: "Alta",
		description: "Minuto 1: 15 KB Swings (24/16kg); Minuto 2: 12 Burpees; Minuto 3: 15 Goblet Squats; Minuto 4: Descanso ativo.",
		color: "border-cyan-500/40 bg-cyan-500/10 text-cyan-300"
	},
	{
		title: "Tabata 4x4 — Queima & Potência",
		type: "Tabata",
		duration: "16 min",
		intensity: "Máxima",
		description: "20s estímulo / 10s repouso: 1. Thrusters; 2. Remo/Bike Sprint; 3. Flexões Explosivas; 4. Hollow Rock.",
		color: "border-purple-500/40 bg-purple-500/10 text-purple-300"
	},
	{
		title: "Intervalado VAM 30/30 — Corrida",
		type: "Endurance",
		duration: "25 min",
		intensity: "VAM 105%",
		description: "10 min aquecimento Z2 + 10x (30s @ 105% VAM / 30s trote Z1) + 5 min desaquecimento.",
		color: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
	},
	{
		title: "Complex Barbell — Carga & Força Rápida",
		type: "LPO / Força",
		duration: "20 min",
		intensity: "Submáxima",
		description: "5 séries sem largar a barra: 3 Deadlifts + 3 Hang Power Cleans + 3 Front Squats + 3 Push Presses.",
		color: "border-amber-500/40 bg-amber-500/10 text-amber-300"
	}
];
function BoostPage() {
	const [weight, setWeight] = (0, import_react.useState)(100);
	const [reps, setReps] = (0, import_react.useState)(5);
	const [distanciaMetros, setDistanciaMetros] = (0, import_react.useState)(1500);
	const [tempoMinutos, setTempoMinutos] = (0, import_react.useState)(5.5);
	const oneRmEpley = Math.round(weight * (1 + reps / 30));
	const oneRmBrzycki = Math.round(weight * (36 / (37 - reps)));
	const vamKmh = (distanciaMetros / (tempoMinutos * 60) * 3.6).toFixed(1);
	const vamPaceMinSec = () => {
		const vam = Number(vamKmh);
		if (!vam || vam <= 0) return "0:00";
		const paceSecondsTotal = 3600 / vam;
		const min = Math.floor(paceSecondsTotal / 60);
		const sec = Math.round(paceSecondsTotal % 60);
		return `${min}:${sec < 10 ? "0" : ""}${sec} /km`;
	};
	const copyWorkout = (text) => {
		navigator.clipboard.writeText(text);
		toast.success("Treino copiado para a área de transferência!");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground p-4 md:p-8 space-y-8 max-w-7xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40 p-6 md:p-10 shadow-2xl backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "outline",
							className: "border-cyan-500/50 bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-wider px-3 py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-3.5 h-3.5 mr-1.5 text-cyan-400" }), "Acelerador de Performance"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "outline",
							className: "border-purple-500/50 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-wider px-3 py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "w-3.5 h-3.5 mr-1.5 text-purple-400" }), "Treinos Express & Métricas Avançadas"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-3xl md:text-5xl font-black tracking-tight text-white",
							children: ["Performance ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-cyan-400",
								children: "Booster"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed mt-1",
							children: "Acelere os resultados dos seus atletas com treinos rápidos de alta densidade, cálculo preciso de 1RM, zonas de VAM e otimização por IA."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								className: "border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-xs font-bold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/eco",
									children: "Hub Ecossistema"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/create",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 mr-1.5" }), "Criar Programa Completo"]
								})
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-2xl font-black tracking-tight text-white flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, { className: "w-6 h-6 text-cyan-400" }), "Treinos Rápidos Express (15 a 25 Minutos)"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Prescrições ultrarrápidas de alta densidade para quando o tempo do atleta é escasso."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-5",
					children: QUICK_WORKOUTS.map((workout, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6 border-slate-800 bg-card/70 backdrop-blur-md space-y-4 flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: `text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${workout.color}`,
										children: [
											workout.type,
											" • ",
											workout.duration
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
										variant: "outline",
										className: "text-[10px] border-slate-700 text-slate-300",
										children: ["Intensidade: ", workout.intensity]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-extrabold text-base text-white",
									children: workout.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-slate-300 leading-relaxed font-mono bg-slate-950/60 p-3 rounded-xl border border-slate-800",
									children: workout.description
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2 pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: () => copyWorkout(`${workout.title}\n${workout.description}`),
								variant: "outline",
								size: "sm",
								className: "w-full text-xs font-bold border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3.5 h-3.5 mr-1.5" }), "Copiar Treino"]
							})
						})]
					}, idx))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6 border-slate-800 bg-card/70 backdrop-blur-md space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 border-b border-slate-800 pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, { className: "w-5 h-5 text-cyan-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-extrabold text-base text-white",
								children: "Estimador de 1RM com IA"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Previsão precisa de carga máxima sem teste exaustivo"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-4 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "weight",
									className: "text-xs font-bold",
									children: "Carga Levantada (kg)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "weight",
									type: "number",
									value: weight,
									onChange: (e) => setWeight(Number(e.target.value)),
									className: "bg-slate-900 border-slate-800 font-mono font-bold"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "reps",
									className: "text-xs font-bold",
									children: "Repetições Executadas"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "reps",
									type: "number",
									min: 1,
									max: 15,
									value: reps,
									onChange: (e) => setReps(Number(e.target.value)),
									className: "bg-slate-900 border-slate-800 font-mono font-bold"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-slate-950/80 p-3.5 rounded-xl border border-cyan-500/30 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] uppercase tracking-wider text-muted-foreground block font-bold",
									children: "1RM (Epley)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-2xl font-black text-cyan-400 font-mono",
									children: [oneRmEpley, " kg"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-slate-950/80 p-3.5 rounded-xl border border-purple-500/30 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] uppercase tracking-wider text-muted-foreground block font-bold",
									children: "1RM (Brzycki)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-2xl font-black text-purple-400 font-mono",
									children: [oneRmBrzycki, " kg"]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 pt-1 border-t border-slate-800/80 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
								children: "Zonas de Intensidade de Carga:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-4 gap-1.5 font-mono text-center text-[11px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-2 rounded-lg bg-slate-900 border border-slate-800",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[9px] text-muted-foreground",
											children: "70%"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-bold text-slate-200",
											children: [Math.round(oneRmEpley * .7), "kg"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-2 rounded-lg bg-slate-900 border border-slate-800",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[9px] text-muted-foreground",
											children: "80%"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-bold text-slate-200",
											children: [Math.round(oneRmEpley * .8), "kg"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-2 rounded-lg bg-slate-900 border border-slate-800",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[9px] text-muted-foreground",
											children: "85%"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-bold text-cyan-300",
											children: [Math.round(oneRmEpley * .85), "kg"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-2 rounded-lg bg-slate-900 border border-slate-800",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[9px] text-muted-foreground",
											children: "90%"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-bold text-purple-300",
											children: [Math.round(oneRmEpley * .9), "kg"]
										})]
									})
								]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6 border-slate-800 bg-card/70 backdrop-blur-md space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 border-b border-slate-800 pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "w-5 h-5 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-extrabold text-base text-white",
								children: "Calculadora VAM & Zonas Aeróbicas"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Velocidade Aeróbica Máxima para Endurance e Corrida"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-4 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "dist",
									className: "text-xs font-bold",
									children: "Distância do Teste (m)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "dist",
									type: "number",
									value: distanciaMetros,
									onChange: (e) => setDistanciaMetros(Number(e.target.value)),
									className: "bg-slate-900 border-slate-800 font-mono font-bold"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "tempo",
									className: "text-xs font-bold",
									children: "Tempo (Minutos)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "tempo",
									type: "number",
									step: "0.1",
									value: tempoMinutos,
									onChange: (e) => setTempoMinutos(Number(e.target.value)),
									className: "bg-slate-900 border-slate-800 font-mono font-bold"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-slate-950/80 p-3.5 rounded-xl border border-emerald-500/30 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] uppercase tracking-wider text-muted-foreground block font-bold",
									children: "VAM Estimada"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-2xl font-black text-emerald-400 font-mono",
									children: [vamKmh, " km/h"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-slate-950/80 p-3.5 rounded-xl border border-cyan-500/30 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] uppercase tracking-wider text-muted-foreground block font-bold",
									children: "Pace Médio VAM"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-2xl font-black text-cyan-400 font-mono",
									children: vamPaceMinSec()
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 pt-1 border-t border-slate-800/80 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
								children: "Zonas de Treino por VAM:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-1.5 font-mono text-center text-[11px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-2 rounded-lg bg-slate-900 border border-slate-800",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[9px] text-emerald-400",
											children: "Z2 (65-75%)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-bold text-slate-200",
											children: [(Number(vamKmh) * .7).toFixed(1), " km/h"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-2 rounded-lg bg-slate-900 border border-slate-800",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[9px] text-amber-400",
											children: "Z3 Limiar (80-88%)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-bold text-slate-200",
											children: [(Number(vamKmh) * .84).toFixed(1), " km/h"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-2 rounded-lg bg-slate-900 border border-slate-800",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[9px] text-red-400",
											children: "Z5 VO2max (95-105%)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-bold text-cyan-300",
											children: [(Number(vamKmh) * 1).toFixed(1), " km/h"]
										})]
									})
								]
							})]
						})
					]
				})]
			})
		]
	});
}
var $$splitComponentImporter$9 = () => import("./route-Di7iQBCH.mjs");
var Route$14 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./routes-DTEZEvkE.mjs");
var searchSchema = object({ modo: _enum(["login", "cadastro"]).optional() });
var Route$13 = createFileRoute("/")({
	validateSearch: searchSchema,
	beforeLoad: async ({ search }) => {
		const { data: u } = await supabase.auth.getUser();
		if (u?.user) {
			const { data: coach } = await supabase.from("coaches").select("id").eq("auth_user_id", u.user.id).maybeSingle();
			if (coach) throw redirect({ to: "/app" });
			throw redirect({ to: "/aluno" });
		}
		throw redirect({
			to: "/auth",
			search: search.modo ? { modo: search.modo } : void 0
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./auth.primeiro-acesso-DUQqwz9j.mjs");
var Route$12 = createFileRoute("/auth/primeiro-acesso")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./app-DCFWuJdE.mjs");
var Route$11 = createFileRoute("/_authenticated/app")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./aluno-B1X8TIZJ.mjs");
var Route$10 = createFileRoute("/_authenticated/aluno")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./app.index-CMZUnpsW.mjs");
var Route$9 = createFileRoute("/_authenticated/app/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var Route$8 = createFileRoute("/api/public/programs")({ server: { handlers: {
	OPTIONS: async () => {
		const { preflight } = await import("./public-api.server-EtUGyicv.mjs");
		return preflight();
	},
	GET: async ({ request }) => {
		const { requireApiKey, json, errorResponse, ApiError } = await import("./public-api.server-EtUGyicv.mjs");
		try {
			const { coachId } = await requireApiKey(request);
			const rawLimit = new URL(request.url).searchParams.get("limit");
			let limit = 50;
			if (rawLimit !== null) {
				const parsed = Number(rawLimit);
				if (!Number.isInteger(parsed) || parsed < 1 || parsed > 100) throw new ApiError(400, "Invalid limit");
				limit = parsed;
			}
			const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
			const { data, error } = await supabaseAdmin.from("programs").select("id, titulo, metodologia, data_inicio, duracao_semanas, program_weeks(id)").eq("coach_id", coachId).order("data_inicio", { ascending: false }).limit(limit);
			if (error) throw error;
			return json({ data: (data ?? []).map((p) => ({
				id: p.id,
				title: p.titulo,
				methodology: p.metodologia,
				start_date: p.data_inicio,
				weeks_count: p.program_weeks?.length || p.duracao_semanas
			})) });
		} catch (error) {
			return errorResponse(error);
		}
	}
} } });
var Route$7 = createFileRoute("/api/public/exercises")({ server: { handlers: { GET: async () => {
	const files = [
		"src/routes/_authenticated/app.treinos.tsx",
		"src/routes/_authenticated/app.gerar.tsx",
		"src/routes/_authenticated/app.programas.tsx",
		"src/components/session-builder/SessionBuilder.tsx",
		"src/components/session-builder/BlockFormats.tsx",
		"src/components/session-builder/ExercisePicker.tsx",
		"src/components/programa-ia/GerarTreinoModal.tsx",
		"src/components/programa-ia/PrescreverIaDialog.tsx"
	];
	return new Response(JSON.stringify({
		pages: files.filter((f) => f.includes("routes")),
		components: files.filter((f) => f.includes("components")),
		edge_functions: ["Nenhuma edge function encontrada (lógica centralizada em TanStack Start Server Functions)."]
	}), { headers: { "Content-Type": "application/json" } });
} } } });
var Route$6 = createFileRoute("/_authenticated/app/marca")({ beforeLoad: () => {
	throw redirect({
		to: "/app/configuracoes",
		search: { section: "marca" }
	});
} });
var $$splitComponentImporter$3 = () => import("./app.exercicios-CWYHAFFC.mjs");
var Route$5 = createFileRoute("/_authenticated/app/exercicios")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var Route$4 = createFileRoute("/_authenticated/app/arquivos")({ beforeLoad: () => {
	throw redirect({
		to: "/app/configuracoes",
		search: { section: "arquivos" }
	});
} });
var $$splitComponentImporter$2 = () => import("./app.alunos-CNeERFd-.mjs");
var Route$3 = createFileRoute("/_authenticated/app/alunos")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function parseObservacoes(raw) {
	if (!raw) return {
		notes: null,
		sets_detail: null
	};
	if (!raw.startsWith("__sets__:")) return {
		notes: raw,
		sets_detail: null
	};
	try {
		const payload = JSON.parse(raw.slice(9));
		return {
			notes: typeof payload.notes === "string" && payload.notes ? payload.notes : null,
			sets_detail: payload.sets ?? null
		};
	} catch {
		return {
			notes: null,
			sets_detail: null
		};
	}
}
function byNumber(key) {
	return (a, b) => Number(a[key] ?? 0) - Number(b[key] ?? 0);
}
var Route$2 = createFileRoute("/api/public/programs/$id")({ server: { handlers: {
	OPTIONS: async () => {
		const { preflight } = await import("./public-api.server-EtUGyicv.mjs");
		return preflight();
	},
	GET: async ({ request, params }) => {
		const { requireApiKey, json, errorResponse, ApiError } = await import("./public-api.server-EtUGyicv.mjs");
		try {
			const { coachId } = await requireApiKey(request);
			const id = params.id;
			if (!UUID_RE.test(id)) throw new ApiError(400, "Invalid program id");
			const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
			const { data, error } = await supabaseAdmin.from("programs").select(`id, titulo, descricao, metodologia, data_inicio, duracao_semanas, status,
               program_weeks (
                 id, numero_semana, rotulo, data_inicio, eh_semana_especial, observacoes,
                 sessions (
                   id, numero_dia, data, titulo, status,
                   session_blocks (
                     id, ordem, formato, titulo, duracao_min, config,
                     session_block_exercises (
                       id, ordem, reps, series, pct_1rm, carga_kg, descanso_seg, lado,
                       observacoes, nome_livre, exercises ( id, nome_pt, metodologias, equipamento )
                     )
                   )
                 )
               )`).eq("id", id).eq("coach_id", coachId).maybeSingle();
			if (error) throw error;
			if (!data) throw new ApiError(404, "Not found");
			const weeks = [...data.program_weeks ?? []].sort(byNumber("numero_semana")).map((w) => ({
				id: w.id,
				week_number: w.numero_semana,
				label: w.rotulo ?? null,
				start_date: w.data_inicio ?? null,
				is_special: w.eh_semana_especial,
				notes: w.observacoes ?? null,
				sessions: [...w.sessions ?? []].sort(byNumber("numero_dia")).map((s) => ({
					id: s.id,
					day_number: s.numero_dia,
					date: s.data ?? null,
					title: s.titulo ?? null,
					status: s.status,
					blocks: [...s.session_blocks ?? []].sort(byNumber("ordem")).map((b) => ({
						id: b.id,
						order: b.ordem,
						format: b.formato,
						title: b.titulo ?? null,
						duration_min: b.duracao_min ?? null,
						config: b.config ?? {},
						exercises: [...b.session_block_exercises ?? []].sort(byNumber("ordem")).map((e) => {
							const { notes, sets_detail } = parseObservacoes(e.observacoes ?? null);
							return {
								id: e.id,
								order: e.ordem,
								exercise_id: e.exercises?.id ?? null,
								name: e.exercises?.nome_pt ?? e.nome_livre ?? null,
								modalities: e.exercises?.metodologias ?? [],
								equipment: e.exercises?.equipamento ?? [],
								sets: e.series ?? null,
								reps: e.reps ?? null,
								pct_1rm: e.pct_1rm ?? null,
								load_kg: e.carga_kg ?? null,
								rest_sec: e.descanso_seg ?? null,
								side: e.lado ?? null,
								notes,
								sets_detail
							};
						})
					}))
				}))
			}));
			return json({ data: {
				id: data.id,
				title: data.titulo,
				description: data.descricao ?? null,
				methodology: data.metodologia,
				start_date: data.data_inicio,
				weeks_count: weeks.length || data.duracao_semanas,
				status: data.status,
				weeks
			} });
		} catch (error) {
			return errorResponse(error);
		}
	}
} } });
var $$splitComponentImporter$1 = () => import("./app.sessoes.nova-tgvoKlLl.mjs");
var Route$1 = createFileRoute("/_authenticated/app/sessoes/nova")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./app.exercicios.duplicados-B-SdaH1u.mjs");
var Route = createFileRoute("/_authenticated/app/exercicios/duplicados")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var MasterAdminRoute = Route$19.update({
	id: "/master-admin",
	path: "/master-admin",
	getParentRoute: () => Route$20
});
var EcoRoute = Route$18.update({
	id: "/eco",
	path: "/eco",
	getParentRoute: () => Route$20
});
var CreateRoute = Route$16.update({
	id: "/create",
	path: "/create",
	getParentRoute: () => Route$20
});
var BoostRoute = Route$15.update({
	id: "/boost",
	path: "/boost",
	getParentRoute: () => Route$20
});
var AuthRoute = Route$23.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$20
});
var AuthenticatedRouteRoute = Route$14.update({
	id: "/_authenticated",
	getParentRoute: () => Route$20
});
var IndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$20
});
var AuthPrimeiroAcessoRoute = Route$12.update({
	id: "/primeiro-acesso",
	path: "/primeiro-acesso",
	getParentRoute: () => AuthRoute
});
var AuthenticatedAppRoute = Route$11.update({
	id: "/app",
	path: "/app",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedAlunoRoute = Route$10.update({
	id: "/aluno",
	path: "/aluno",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedAppIndexRoute = Route$9.update({
	id: "/",
	path: "/",
	getParentRoute: () => AuthenticatedAppRoute
});
var ApiPublicProgramsRoute = Route$8.update({
	id: "/api/public/programs",
	path: "/api/public/programs",
	getParentRoute: () => Route$20
});
var ApiPublicExercisesRoute = Route$7.update({
	id: "/api/public/exercises",
	path: "/api/public/exercises",
	getParentRoute: () => Route$20
});
var AuthenticatedAppTreinosRoute = Route$1$24.update({
	id: "/treinos",
	path: "/treinos",
	getParentRoute: () => AuthenticatedAppRoute
});
var AuthenticatedAppProgramasRoute = Route$25.update({
	id: "/programas",
	path: "/programas",
	getParentRoute: () => AuthenticatedAppRoute
});
var AuthenticatedAppMarcaRoute = Route$6.update({
	id: "/marca",
	path: "/marca",
	getParentRoute: () => AuthenticatedAppRoute
});
var AuthenticatedAppGerarRoute = Route$17.update({
	id: "/gerar",
	path: "/gerar",
	getParentRoute: () => AuthenticatedAppRoute
});
var AuthenticatedAppExerciciosRoute = Route$5.update({
	id: "/exercicios",
	path: "/exercicios",
	getParentRoute: () => AuthenticatedAppRoute
});
var AuthenticatedAppConfiguracoesRoute = Route$22.update({
	id: "/configuracoes",
	path: "/configuracoes",
	getParentRoute: () => AuthenticatedAppRoute
});
var AuthenticatedAppArquivosRoute = Route$4.update({
	id: "/arquivos",
	path: "/arquivos",
	getParentRoute: () => AuthenticatedAppRoute
});
var AuthenticatedAppAlunosRoute = Route$3.update({
	id: "/alunos",
	path: "/alunos",
	getParentRoute: () => AuthenticatedAppRoute
});
var ApiPublicProgramsIdRoute = Route$2.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => ApiPublicProgramsRoute
});
var AuthenticatedAppSessoesNovaRoute = Route$1.update({
	id: "/sessoes/nova",
	path: "/sessoes/nova",
	getParentRoute: () => AuthenticatedAppRoute
});
var AuthenticatedAppSessoesIdRoute = Route$24.update({
	id: "/sessoes/$id",
	path: "/sessoes/$id",
	getParentRoute: () => AuthenticatedAppRoute
});
var AuthenticatedAppExerciciosDuplicadosRoute = Route.update({
	id: "/duplicados",
	path: "/duplicados",
	getParentRoute: () => AuthenticatedAppExerciciosRoute
});
var AuthenticatedAlunoRouteChildren = { AuthenticatedAlunoSessaoIdRoute: Route$21.update({
	id: "/sessao/$id",
	path: "/sessao/$id",
	getParentRoute: () => AuthenticatedAlunoRoute
}) };
var AuthenticatedAlunoRouteWithChildren = AuthenticatedAlunoRoute._addFileChildren(AuthenticatedAlunoRouteChildren);
var AuthenticatedAppExerciciosRouteChildren = { AuthenticatedAppExerciciosDuplicadosRoute };
var AuthenticatedAppRouteChildren = {
	AuthenticatedAppAlunosRoute,
	AuthenticatedAppArquivosRoute,
	AuthenticatedAppConfiguracoesRoute,
	AuthenticatedAppExerciciosRoute: AuthenticatedAppExerciciosRoute._addFileChildren(AuthenticatedAppExerciciosRouteChildren),
	AuthenticatedAppGerarRoute,
	AuthenticatedAppMarcaRoute,
	AuthenticatedAppProgramasRoute,
	AuthenticatedAppTreinosRoute,
	AuthenticatedAppIndexRoute,
	AuthenticatedAppSessoesIdRoute,
	AuthenticatedAppSessoesNovaRoute
};
var AuthenticatedRouteRouteChildren = {
	AuthenticatedAlunoRoute: AuthenticatedAlunoRouteWithChildren,
	AuthenticatedAppRoute: AuthenticatedAppRoute._addFileChildren(AuthenticatedAppRouteChildren)
};
var AuthenticatedRouteRouteWithChildren = AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren);
var AuthRouteChildren = { AuthPrimeiroAcessoRoute };
var AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren);
var ApiPublicProgramsRouteChildren = { ApiPublicProgramsIdRoute };
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRouteWithChildren,
	AuthRoute: AuthRouteWithChildren,
	BoostRoute,
	CreateRoute,
	EcoRoute,
	MasterAdminRoute,
	ApiPublicExercisesRoute,
	ApiPublicProgramsRoute: ApiPublicProgramsRoute._addFileChildren(ApiPublicProgramsRouteChildren)
};
var routeTree = Route$20._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient({ defaultOptions: { queries: {
			staleTime: 1e3 * 60 * 2,
			gcTime: 1e3 * 60 * 10,
			refetchOnWindowFocus: false
		} } }) },
		scrollRestoration: true,
		defaultPreloadStaleTime: 1e3 * 30
	});
};
//#endregion
export { getRouter, Route$17 as n, GerarPanel as t };
