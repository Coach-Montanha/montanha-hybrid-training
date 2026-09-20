import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BxRH54s6.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-CCQEfgNs.mjs";
import { C as Sparkles, Kt as ChevronRight, M as Settings, Qt as Calculator, Wt as CircleAlert, Z as MessageCircle, an as ArrowRight, bt as Flame, cn as Activity, g as Timer, jt as Dumbbell, s as WandSparkles, u as Users, vt as FolderKanban, x as SquarePlus } from "../_libs/lucide-react.mjs";
import { t as Badge } from "./badge-Bt-nVIZo.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Card } from "./card-Bav9nr75.mjs";
import { t as InstallAppButton } from "./InstallAppButton-DY-mnlM3.mjs";
import { n as WorkoutTimerDialog, t as OneRepMaxDialog } from "./WorkoutTimerDialog-ErYNhnLI.mjs";
import { t as useCoach } from "./use-coach-B0Sg5_sT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.index-CMZUnpsW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Dashboard() {
	const { data: coach } = useCoach();
	const [rmOpen, setRmOpen] = (0, import_react.useState)(false);
	const [timerOpen, setTimerOpen] = (0, import_react.useState)(false);
	const stats = useQuery({
		queryKey: ["dashboard-stats", coach?.id],
		enabled: !!coach,
		queryFn: async () => {
			const [ex, prog, stu, ses] = await Promise.all([
				supabase.from("exercises").select("id", {
					count: "exact",
					head: true
				}),
				supabase.from("programs").select("id", {
					count: "exact",
					head: true
				}),
				supabase.from("students").select("id", {
					count: "exact",
					head: true
				}),
				supabase.from("sessions").select("id", {
					count: "exact",
					head: true
				})
			]);
			return {
				exercises: ex.count ?? 0,
				programs: prog.count ?? 0,
				students: stu.count ?? 0,
				sessions: ses.count ?? 0
			};
		}
	});
	const { data: studentsAtRisk = [] } = useQuery({
		queryKey: ["students-retention", coach?.id],
		enabled: !!coach,
		queryFn: async () => {
			const { data, error } = await supabase.from("students").select("id, nome, email, telefone, status, criado_em").order("criado_em", { ascending: false });
			if (error) throw error;
			return (data ?? []).filter((s) => s.status === "convidado" || s.status === "inativo");
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl min-w-0 space-y-6 px-3 py-4 sm:space-y-8 sm:px-6 sm:py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-3 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-2 w-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })]
						}), "Sistema Híbrido Ativo"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-2 text-2xl font-extrabold tracking-tight sm:text-4xl break-words",
						children: ["Olá, ", coach?.nome ?? "Treinador"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground sm:text-base",
						children: "Prescrição atlética, periodização contínua e gestão de atletas."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 self-start sm:self-auto flex-wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallAppButton, {
							size: "sm",
							className: "min-h-[36px]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "cursor-pointer border-border/80 hover:bg-muted/80 min-h-[36px] gap-1.5",
							onClick: () => setTimerOpen(true),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, { className: "h-4 w-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Timer Treino"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "cursor-pointer border-border/80 hover:bg-muted/80 min-h-[36px] gap-1.5",
							onClick: () => setRmOpen(true),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, { className: "h-4 w-4 text-sky-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Calculadora 1RM"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "sm",
							className: "cursor-pointer border-border/80 hover:bg-muted/80 min-h-[36px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/app/configuracoes",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "mr-2 h-4 w-4 text-muted-foreground" }), "Configurações"]
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 grid-cols-1 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "relative overflow-hidden border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 p-4 sm:p-6 shadow-sm transition-all duration-200 hover:border-primary/50 hover:shadow-md hover:shadow-primary/5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								className: "font-semibold text-xs text-primary bg-primary/15 border-none",
								children: "IA Prescritiva"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 sm:mt-5 text-lg sm:text-xl font-bold tracking-tight",
							children: "Gerador de Treinos com IA"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground leading-relaxed",
							children: "Prescreva sessões em blocos mecânicos com progressão ondulatória e consulta automática ao seu banco de dados."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-5 sm:mt-6 w-full cursor-pointer min-h-[44px] font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-200",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/app/treinos",
								search: {
									aba: "gerar",
									ia: true
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "mr-2 h-4 w-4" }), "Gerar Sessão com IA"]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "relative overflow-hidden border-border/80 bg-card p-4 sm:p-6 shadow-sm transition-all duration-200 hover:border-primary/40 hover:shadow-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-xl bg-muted text-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePlus, { className: "h-5 w-5 text-primary" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-xs text-muted-foreground",
								children: "Manual & Modular"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 sm:mt-5 text-lg sm:text-xl font-bold tracking-tight",
							children: "Montar Sessão por Blocos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground leading-relaxed",
							children: "Arraste e solte exercícios com formatos EMOM, AMRAP, Circuitos e RFT personalizados para cada nível."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							className: "mt-5 sm:mt-6 w-full cursor-pointer min-h-[44px] font-semibold border-border/80 hover:border-primary/40 hover:bg-card/80 transition-all duration-200",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/app/sessoes/nova",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "mr-2 h-4 w-4 text-primary" }), "Abrir Construtor de Sessão"]
							})
						})
					]
				})]
			}),
			studentsAtRisk.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "border-amber-500/30 bg-amber-500/[0.04] p-4 sm:p-5 shadow-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-amber-500/20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-8 w-8 place-items-center rounded-lg bg-amber-500/15 text-amber-600",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-bold text-foreground",
							children: [
								"Monitor de Retenção (",
								studentsAtRisk.length,
								" atleta",
								studentsAtRisk.length === 1 ? "" : "s",
								" requer",
								studentsAtRisk.length === 1 ? "e" : "em",
								" atenção)"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Atletas convidados ou inativos com pendências de adesão às planilhas."
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						variant: "ghost",
						className: "text-xs gap-1 self-start sm:self-auto cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/app/alunos",
							children: ["Ver todos os alunos ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" })]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 divide-y divide-border/50",
					children: studentsAtRisk.slice(0, 3).map((s) => {
						const cleanPhone = (s.telefone || "").replace(/\D/g, "");
						const msg = `Fala ${s.nome}! Coach Montanha passando para saber como estão os treinos e o seu ritmo essa semana. Vamos juntos retomar o planejamento?`;
						const waUrl = cleanPhone ? `https://wa.me/55${cleanPhone}?text=${encodeURIComponent(msg)}` : null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between py-2.5 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-xs sm:text-sm truncate text-foreground",
									children: s.nome
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 mt-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										className: "text-[10px] px-1.5 py-0 h-4 uppercase",
										children: s.status
									}), s.telefone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-muted-foreground truncate",
										children: s.telefone
									})]
								})]
							}), waUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								variant: "outline",
								className: "h-8 text-xs gap-1.5 text-emerald-600 hover:text-emerald-700 hover:border-emerald-500/50 cursor-pointer shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: waUrl,
									target: "_blank",
									rel: "noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-3.5 w-3.5" }), " Resgatar"]
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								variant: "ghost",
								className: "h-8 text-xs shrink-0 cursor-pointer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/app/alunos",
									children: "Ver perfil"
								})
							})]
						}, s.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 flex items-center justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Visão Geral do Sistema"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app/exercicios",
						className: "group cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-3.5 sm:p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs sm:text-sm font-medium text-muted-foreground break-words line-clamp-2 min-w-0 leading-tight",
										children: "Exercícios"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-7 w-7 sm:h-8 sm:w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight tabular-nums truncate",
									children: stats.data?.exercises ?? "…"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[11px] sm:text-xs text-muted-foreground truncate",
									children: "Vídeos e mecânicas cadastradas"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app/treinos",
						search: {
							aba: "programas",
							ia: false
						},
						className: "group cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-3.5 sm:p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs sm:text-sm font-medium text-muted-foreground break-words line-clamp-2 min-w-0 leading-tight",
										children: "Programas"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-7 w-7 sm:h-8 sm:w-8 shrink-0 place-items-center rounded-lg bg-blue-500/10 text-blue-500 transition-colors group-hover:bg-blue-500 group-hover:text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderKanban, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight tabular-nums truncate",
									children: stats.data?.programs ?? "…"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[11px] sm:text-xs text-muted-foreground truncate",
									children: "Planilhas e periodizações"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app/treinos",
						className: "group cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-3.5 sm:p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs sm:text-sm font-medium text-muted-foreground break-words line-clamp-2 min-w-0 leading-tight",
										children: "Sessões"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-7 w-7 sm:h-8 sm:w-8 shrink-0 place-items-center rounded-lg bg-amber-500/10 text-amber-500 transition-colors group-hover:bg-amber-500 group-hover:text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight tabular-nums truncate",
									children: stats.data?.sessions ?? "…"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[11px] sm:text-xs text-muted-foreground truncate",
									children: "Treinos registrados"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app/alunos",
						className: "group cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-3.5 sm:p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs sm:text-sm font-medium text-muted-foreground break-words line-clamp-2 min-w-0 leading-tight",
										children: "Atletas & Alunos"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-7 w-7 sm:h-8 sm:w-8 shrink-0 place-items-center rounded-lg bg-emerald-500/10 text-emerald-500 transition-colors group-hover:bg-emerald-500 group-hover:text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight tabular-nums truncate",
									children: stats.data?.students ?? "…"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[11px] sm:text-xs text-muted-foreground truncate",
									children: "Alunos ativos"
								})
							]
						})
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 flex items-center justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Acesso Rápido"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "h-auto cursor-pointer justify-between p-4 border-border/70 hover:border-primary/30 hover:bg-card/80 transition-all duration-200 min-h-[44px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/app/treinos",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-8 w-8 shrink-0 place-items-center rounded-md bg-muted text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-sm",
									children: "Hub de Treinos"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "Gerenciar sessões"
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 text-muted-foreground shrink-0" })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "h-auto cursor-pointer justify-between p-4 border-border/70 hover:border-primary/30 hover:bg-card/80 transition-all duration-200 min-h-[44px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/app/exercicios",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-8 w-8 shrink-0 place-items-center rounded-md bg-muted text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-sm",
									children: "Banco de Exercícios"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "Consultar mídias"
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 text-muted-foreground shrink-0" })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "h-auto cursor-pointer justify-between p-4 border-border/70 hover:border-primary/30 hover:bg-card/80 transition-all duration-200 min-h-[44px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/app/alunos",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-8 w-8 shrink-0 place-items-center rounded-md bg-muted text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-sm",
									children: "Gestão de Alunos"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "Vincular programas"
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 text-muted-foreground shrink-0" })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "h-auto cursor-pointer justify-between p-4 border-border/70 hover:border-primary/30 hover:bg-card/80 transition-all duration-200 min-h-[44px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/app/configuracoes",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-8 w-8 shrink-0 place-items-center rounded-md bg-muted text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-sm",
									children: "Aparência & Temas"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "Personalizar UI"
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 text-muted-foreground shrink-0" })]
						})
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OneRepMaxDialog, {
				open: rmOpen,
				onOpenChange: setRmOpen
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkoutTimerDialog, {
				open: timerOpen,
				onOpenChange: setTimerOpen
			})
		]
	});
}
//#endregion
export { Dashboard as component };
