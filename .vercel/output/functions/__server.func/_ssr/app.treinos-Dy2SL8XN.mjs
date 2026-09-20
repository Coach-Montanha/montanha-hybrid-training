import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BxRH54s6.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { r as cn, t as Button } from "./button-CCQEfgNs.mjs";
import { Kt as ChevronRight, Rt as Clock, Ut as CircleCheck, Xt as Calendar, jt as Dumbbell, qt as ChevronLeft, s as WandSparkles, tt as LoaderCircle, vt as FolderKanban, x as SquarePlus } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, t as Dialog } from "./dialog-SwVf5DHm.mjs";
import { t as Badge } from "./badge-Bt-nVIZo.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { S as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$1, t as ProgramasPanel } from "./app.programas-DGH9RW1I.mjs";
import { a as format, c as eachDayOfInterval, d as startOfWeek, f as addMonths, i as isSameMonth, l as endOfMonth, n as subMonths, o as endOfWeek, r as isToday, s as startOfMonth, t as ptBR, u as isSameDay } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.treinos-Dy2SL8XN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EventCalendar({ events = [], initialDate = /* @__PURE__ */ new Date(), onSelectDate, onSelectEvent, className }) {
	const [currentMonth, setCurrentMonth] = import_react.useState(initialDate);
	const [selectedDay, setSelectedDay] = import_react.useState(null);
	const [dayModalOpen, setDayModalOpen] = import_react.useState(false);
	const monthStart = startOfMonth(currentMonth);
	const monthEnd = endOfMonth(monthStart);
	const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
	const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
	const days = import_react.useMemo(() => {
		return eachDayOfInterval({
			start: calendarStart,
			end: calendarEnd
		});
	}, [calendarStart, calendarEnd]);
	const handlePrevMonth = () => setCurrentMonth((prev) => subMonths(prev, 1));
	const handleNextMonth = () => setCurrentMonth((prev) => addMonths(prev, 1));
	const handleToday = () => setCurrentMonth(/* @__PURE__ */ new Date());
	const getDayEvents = (day) => {
		return events.filter((e) => {
			return isSameDay(typeof e.date === "string" ? new Date(e.date) : e.date, day);
		});
	};
	const handleDayClick = (day, dayEvents) => {
		setSelectedDay(day);
		if (onSelectDate) onSelectDate(day);
		if (dayEvents.length > 0) setDayModalOpen(true);
	};
	const selectedDayEvents = selectedDay ? getDayEvents(selectedDay) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("w-full rounded-xl border border-border/80 bg-card p-4 sm:p-6 shadow-xs", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-border/50 pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base sm:text-lg font-bold capitalize text-foreground",
						children: format(currentMonth, "MMMM yyyy", { locale: ptBR })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [events.length, " treino(s) e sessão(ões) no período"]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 self-end sm:self-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						onClick: handleToday,
						className: "h-8 px-2.5 text-xs font-semibold cursor-pointer",
						children: "Hoje"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center rounded-lg border border-border/70 p-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							onClick: handlePrevMonth,
							className: "h-7 w-7 cursor-pointer",
							title: "Mês anterior",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							onClick: handleNextMonth,
							className: "h-7 w-7 cursor-pointer",
							title: "Próximo mês",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-7 gap-1 text-center mb-1.5",
				children: [
					"Seg",
					"Ter",
					"Qua",
					"Qui",
					"Sex",
					"Sáb",
					"Dom"
				].map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("py-1.5 text-xs font-semibold uppercase tracking-wider", i >= 5 ? "text-muted-foreground/60" : "text-muted-foreground"),
					children: d
				}, d))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-7 gap-1 sm:gap-1.5",
				children: days.map((day) => {
					const isSelected = selectedDay && isSameDay(day, selectedDay);
					const isCurrentMonth = isSameMonth(day, currentMonth);
					const isTodayDate = isToday(day);
					const dayEvents = getDayEvents(day);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: () => handleDayClick(day, dayEvents),
						className: cn("group relative min-h-[68px] sm:min-h-[88px] rounded-lg p-1.5 sm:p-2 border transition-all cursor-pointer flex flex-col justify-between", isCurrentMonth ? "bg-card border-border/60 hover:border-primary/50 hover:bg-muted/30" : "bg-muted/15 border-border/20 text-muted-foreground/40", isSelected && "ring-2 ring-primary border-primary", isTodayDate && "border-primary/70 bg-primary/5"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("text-xs font-semibold", isTodayDate ? "grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground font-bold" : isCurrentMonth ? "text-foreground" : "text-muted-foreground/50"),
								children: format(day, "d")
							}), dayEvents.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary sm:hidden" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex flex-col gap-1 overflow-hidden",
							children: [dayEvents.slice(0, 2).map((ev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onClick: (e) => {
									e.stopPropagation();
									if (onSelectEvent) onSelectEvent(ev);
									setSelectedDay(day);
									setDayModalOpen(true);
								},
								className: cn("hidden sm:flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] font-medium truncate transition-colors leading-tight", ev.status === "completed" ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30" : ev.type === "deload" ? "bg-muted text-muted-foreground border border-border" : "bg-primary/15 text-primary border border-primary/30"),
								title: ev.title,
								children: [ev.status === "completed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-2.5 w-2.5 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, { className: "h-2.5 w-2.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: ev.title
								})]
							}, ev.id)), dayEvents.length > 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hidden sm:block text-[9px] font-mono text-muted-foreground font-semibold px-1",
								children: [
									"+",
									dayEvents.length - 2,
									" mais"
								]
							})]
						})]
					}, day.toISOString());
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: dayModalOpen,
				onOpenChange: setDayModalOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
						className: "flex items-center gap-2 capitalize",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedDay ? format(selectedDay, "EEEE, dd 'de' MMMM", { locale: ptBR }) : "Detalhes do Dia" })]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3 pt-2",
						children: selectedDayEvents.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground text-center py-4",
							children: "Nenhum treino prescrito para este dia."
						}) : selectedDayEvents.map((ev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border p-3 space-y-1.5 bg-muted/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-semibold text-sm flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, { className: "h-4 w-4 text-primary" }), ev.title]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: ev.status === "completed" ? "default" : "secondary",
										className: cn("text-[10px] uppercase font-mono", ev.status === "completed" && "bg-emerald-600 text-white"),
										children: ev.status === "completed" ? "Concluído" : "Prescrito"
									})]
								}),
								ev.subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: ev.subtitle
								}),
								ev.durationMinutes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1 text-[11px] text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [ev.durationMinutes, " minutos estimados"] })]
								})
							]
						}, ev.id))
					})]
				})
			})
		]
	});
}
var SessionBuilder = (0, import_react.lazy)(() => import("./SessionBuilder-DAuRtaAi.mjs").then((m) => ({ default: m.SessionBuilder })));
var GerarPanel = (0, import_react.lazy)(() => import("./app.gerar-DG4LMFH9.mjs").then((m) => ({ default: m.GerarPanel })));
var TABS = [
	{
		key: "programas",
		label: "Programas",
		icon: FolderKanban
	},
	{
		key: "agenda",
		label: "Calendário",
		icon: Calendar
	},
	{
		key: "nova",
		label: "Nova sessão",
		icon: SquarePlus
	},
	{
		key: "gerar",
		label: "Gerar treino",
		icon: WandSparkles
	}
];
function TreinosHub() {
	const { aba, ia } = Route$1.useSearch();
	const navigate = useNavigate({ from: "/app/treinos" });
	const active = TABS.find((t) => t.key === aba)?.key ?? "programas";
	function setTab(key) {
		navigate({
			search: {
				aba: key,
				ia: false
			},
			replace: true
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl min-w-0 px-3 py-4 sm:px-6 sm:py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-5 flex items-start justify-between gap-3 sm:mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-bold tracking-tight sm:text-3xl break-words",
							children: "Treinos"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs sm:text-sm text-muted-foreground",
							children: "Programas, nova sessão e gerador automático — tudo num só lugar."
						})]
					})]
				}), active !== "programas" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: () => setTab("programas"),
					className: "cursor-pointer text-muted-foreground hover:text-foreground shrink-0 min-h-[36px]",
					children: "Voltar"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "tablist",
				"aria-label": "Seções de treinos",
				className: "mb-5 flex gap-1 overflow-x-auto rounded-xl border border-border/70 bg-muted/40 p-1 sm:mb-8 no-scrollbar",
				children: TABS.map((t) => {
					const isActive = active === t.key;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "tab",
						"aria-selected": isActive,
						onClick: () => setTab(t.key),
						className: `inline-flex flex-1 min-w-[100px] cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 min-h-[44px] text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${isActive ? "bg-card text-primary shadow-sm font-semibold border border-border/50" : "text-muted-foreground hover:bg-card/60 hover:text-foreground"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.label })]
					}, t.key);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				active === "programas" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramasPanel, {
					showHeader: false,
					destacarIa: ia
				}, ia ? "ia" : "todos"),
				active === "agenda" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreinosCalendarView, {}),
				active === "nova" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-64 items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" })
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionBuilder, {})
				}),
				active === "gerar" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-64 items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" })
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GerarPanel, { showHeader: false })
				})
			] })
		]
	});
}
function TreinosCalendarView() {
	const { data: sessions = [], isLoading } = useQuery({
		queryKey: ["treinos-calendar-sessions"],
		queryFn: async () => {
			const { data, error } = await supabase.from("sessions").select("id, titulo, data, numero_dia, criado_em, program_weeks(program_id, programs(titulo))").order("criado_em", { ascending: false }).limit(150);
			if (error) throw error;
			return data || [];
		}
	});
	const events = (0, import_react.useMemo)(() => {
		return sessions.map((s) => ({
			id: s.id,
			title: s.titulo || `Treino Dia ${s.numero_dia}`,
			date: s.data || s.criado_em,
			type: "workout",
			status: s.data ? "scheduled" : "completed",
			subtitle: s.program_weeks?.programs?.titulo ? `Programa: ${s.program_weeks.programs.titulo}` : void 0,
			durationMinutes: 60
		}));
	}, [sessions]);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-64 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCalendar, { events })
	});
}
//#endregion
export { TreinosHub as component };
