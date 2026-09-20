import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BxRH54s6.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { r as cn, t as Button } from "./button-CCQEfgNs.mjs";
import { B as Play, C as Sparkles, Et as FileDown, L as RotateCcw, Qt as Calculator, U as PartyPopper, Ut as CircleCheck, Yt as Check, a as Wind, bt as Flame, g as Timer, j as Share2, on as ArrowLeft, r as X, tt as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, t as Dialog } from "./dialog-SwVf5DHm.mjs";
import { t as Badge } from "./badge-Bt-nVIZo.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as BLOCK_FORMAT_LABEL } from "./methodology-DF-HMT6m.mjs";
import { x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Card } from "./card-Bav9nr75.mjs";
import { r as exportarSessoesPdfTabela } from "./pdf-treino-BvAJGnnP.mjs";
import { t as InstallAppButton } from "./InstallAppButton-DY-mnlM3.mjs";
import { t as Route } from "./aluno.sessao._id-DeyxJ3Af.mjs";
import { t as Progress } from "./progress-Rwu-UcSt.mjs";
import { n as WorkoutTimerDialog, r as soundEffects, t as OneRepMaxDialog } from "./WorkoutTimerDialog-ErYNhnLI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/aluno.sessao._id-ePuFDIvw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function formatSessionForWhatsApp(session, portalUrl) {
	const parts = [];
	parts.push(`🏋️ *TREINO: ${session.titulo.toUpperCase()}*`);
	if (session.metodologia) parts.push(`📌 *Modalidade:* ${session.metodologia}`);
	if (session.coachNome) parts.push(`👤 *Treinador:* ${session.coachNome}`);
	if (session.data) {
		const formattedDate = new Date(session.data).toLocaleDateString("pt-BR", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric"
		});
		parts.push(`📅 *Data:* ${formattedDate}`);
	}
	parts.push(`────────────────────`);
	for (const bloco of session.blocos) {
		parts.push(`\n🔹 *${bloco.titulo.toUpperCase()}*`);
		for (const ex of bloco.exercicios) {
			const details = [];
			if (ex.series && ex.reps) details.push(`${ex.series}x${ex.reps}`);
			else if (ex.series) details.push(`${ex.series} séries`);
			else if (ex.reps) details.push(`${ex.reps} reps`);
			if (ex.carga) details.push(`${ex.carga}kg`);
			if (ex.descanso) details.push(`descanso ${ex.descanso}s`);
			const detailStr = details.length > 0 ? ` (${details.join(" | ")})` : "";
			const obsStr = ex.observacoes ? ` _[${ex.observacoes}]_` : "";
			parts.push(`• *${ex.nome}*${detailStr}${obsStr}`);
		}
	}
	parts.push(`\n────────────────────`);
	if (portalUrl) {
		parts.push(`📱 *Acesse seu treino no portal:*`);
		parts.push(portalUrl);
	} else parts.push(`💪 _Bons treinos! Foque na técnica e consistência._`);
	return parts.join("\n");
}
function openWhatsAppShare(text, phone) {
	const encoded = encodeURIComponent(text);
	const cleanPhone = phone ? phone.replace(/\D/g, "") : "";
	const url = cleanPhone ? `https://wa.me/${cleanPhone}?text=${encoded}` : `https://wa.me/?text=${encoded}`;
	window.open(url, "_blank", "noopener,noreferrer");
}
function SessaoAluno() {
	const { id } = Route.useParams();
	const [activeMedia, setActiveMedia] = (0, import_react.useState)(null);
	const [rmOpen, setRmOpen] = (0, import_react.useState)(false);
	const [timerOpen, setTimerOpen] = (0, import_react.useState)(false);
	const [downloadingPdf, setDownloadingPdf] = (0, import_react.useState)(false);
	const [completedSets, setCompletedSets] = (0, import_react.useState)(() => {
		try {
			const saved = localStorage.getItem(`session-${id}-sets`);
			return saved ? JSON.parse(saved) : {};
		} catch {
			return {};
		}
	});
	const [isFinished, setIsFinished] = (0, import_react.useState)(() => {
		try {
			return localStorage.getItem(`session-${id}-finished`) === "true";
		} catch {
			return false;
		}
	});
	const [restTimer, setRestTimer] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let timer = null;
		if (restTimer && restTimer.secondsLeft > 0) timer = setInterval(() => {
			setRestTimer((prev) => {
				if (!prev) return null;
				if (prev.secondsLeft <= 1) {
					soundEffects.playRestCompleteBeep();
					toast.success(`Descanso concluído para ${prev.exerciseName}!`, { description: "Hora da próxima série!" });
					return null;
				}
				return {
					...prev,
					secondsLeft: prev.secondsLeft - 1
				};
			});
		}, 1e3);
		return () => clearInterval(timer);
	}, [restTimer]);
	const { data: session } = useQuery({
		queryKey: ["aluno-sessao", id],
		queryFn: async () => {
			const { data, error } = await supabase.from("sessions").select("id, titulo, numero_dia, data, program_weeks(numero_semana, programs(titulo, metodologia))").eq("id", id).maybeSingle();
			if (error) throw error;
			return data;
		}
	});
	const { data: blocks = [] } = useQuery({
		queryKey: ["aluno-blocks", id],
		queryFn: async () => {
			const { data, error } = await supabase.from("session_blocks").select("id, ordem, formato, titulo, duracao_min, config, session_block_exercises(id, ordem, reps, series, pct_1rm, carga_kg, descanso_seg, lado, observacoes, nome_livre, exercises(nome_pt, video_url, exercise_media(*)))").eq("session_id", id).order("ordem");
			if (error) throw error;
			return data;
		}
	});
	const { totalSets, completedSetsCount } = (0, import_react.useMemo)(() => {
		let total = 0;
		let completed = 0;
		for (const b of blocks) for (const ex of b.session_block_exercises ?? []) {
			const s = Number(ex.series) || 0;
			if (s > 0) {
				total += s;
				const done = completedSets[ex.id]?.length || 0;
				completed += Math.min(done, s);
			}
		}
		return {
			totalSets: total,
			completedSetsCount: completed
		};
	}, [blocks, completedSets]);
	const progressPct = totalSets > 0 ? Math.round(completedSetsCount / totalSets * 100) : 0;
	const toggleSet = (exerciseId, setIndex, restSeconds, exerciseName) => {
		setCompletedSets((prev) => {
			const current = prev[exerciseId] || [];
			const isDone = current.includes(setIndex);
			const nextList = isDone ? current.filter((s) => s !== setIndex) : [...current, setIndex];
			const next = {
				...prev,
				[exerciseId]: nextList
			};
			try {
				localStorage.setItem(`session-${id}-sets`, JSON.stringify(next));
			} catch {}
			if (!isDone) {
				const dur = restSeconds && restSeconds > 0 ? restSeconds : 60;
				setRestTimer({
					totalSeconds: dur,
					secondsLeft: dur,
					exerciseName: exerciseName || "Exercício"
				});
				toast.info(`Descanso iniciado (${dur}s)`);
			}
			return next;
		});
	};
	const addRestTime = (sec) => {
		setRestTimer((prev) => {
			if (!prev) return null;
			const nextVal = Math.max(0, prev.secondsLeft + sec);
			return {
				...prev,
				secondsLeft: nextVal,
				totalSeconds: Math.max(prev.totalSeconds, nextVal)
			};
		});
	};
	function handleShareWhatsApp() {
		if (!session) return;
		openWhatsAppShare(formatSessionForWhatsApp({
			titulo: session.titulo ?? "Treino",
			data: session.data,
			metodologia: session.program_weeks?.programs?.metodologia,
			blocos: blocks.map((b) => ({
				titulo: b.titulo ?? "Bloco",
				formato: b.formato,
				exercicios: (b.session_block_exercises ?? []).map((e) => ({
					nome: e.exercises?.nome_pt ?? e.nome_livre ?? "Exercício",
					series: e.series,
					reps: e.reps,
					carga: e.carga_kg,
					descanso: e.descanso_seg
				}))
			}))
		}, window.location.href));
	}
	const handleDownloadPdf = async () => {
		setDownloadingPdf(true);
		try {
			await exportarSessoesPdfTabela([id], `${session?.titulo ?? "treino"}.pdf`);
			toast.success("Ficha do treino em PDF baixada com sucesso!");
		} catch (err) {
			toast.error("Erro ao gerar PDF: " + err.message);
		} finally {
			setDownloadingPdf(false);
		}
	};
	const handleFinishWorkout = () => {
		setIsFinished(true);
		try {
			localStorage.setItem(`session-${id}-finished`, "true");
		} catch {}
		toast.success("Parabéns, treino concluído!", { description: "Todas as séries e registros foram marcados como concluídos." });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background max-w-full overflow-x-hidden pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-border bg-background/95 backdrop-blur sticky top-0 z-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-3xl items-center justify-between px-3 py-2.5 sm:px-6 sm:py-3.5 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/aluno",
						className: "flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground hover:text-foreground shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Meus treinos"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 flex-wrap justify-end",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallAppButton, {
								size: "sm",
								className: "h-8 px-2.5 text-xs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								className: "h-8 px-2.5 gap-1.5 text-xs cursor-pointer",
								onClick: () => setTimerOpen(true),
								title: "Cronômetro / Timer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, { className: "h-3.5 w-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "Timer"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								className: "h-8 px-2.5 gap-1.5 text-xs cursor-pointer",
								onClick: () => setRmOpen(true),
								title: "Calculadora de 1RM",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, { className: "h-3.5 w-3.5 text-sky-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "1RM"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								disabled: downloadingPdf,
								className: "h-8 px-2.5 gap-1.5 text-xs cursor-pointer",
								onClick: handleDownloadPdf,
								title: "Baixar ficha em PDF",
								children: [downloadingPdf ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "h-3.5 w-3.5 text-rose-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "PDF"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								className: "h-8 px-2.5 gap-1.5 text-xs text-emerald-600 hover:text-emerald-700 hover:border-emerald-500/50 cursor-pointer",
								onClick: handleShareWhatsApp,
								title: "Compartilhar no WhatsApp",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "WhatsApp"
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-3xl space-y-4 px-3 py-4 sm:p-6 min-w-0",
				children: [
					session && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-muted-foreground break-words",
									children: [
										session.program_weeks?.programs?.titulo,
										" · Semana ",
										session.program_weeks?.numero_semana,
										" · Dia ",
										session.numero_dia,
										" · ",
										session.data ?? ""
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-xl sm:text-2xl font-bold break-words",
									children: session.titulo ?? "Treino"
								})]
							}), isFinished && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								className: "bg-emerald-600 hover:bg-emerald-600 text-white gap-1 shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }), " Treino Concluído"]
							})]
						}), totalSets > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border bg-card/60 p-3 shadow-2xs space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold text-foreground flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }), " Progresso da Sessão"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-muted-foreground",
									children: [
										completedSetsCount,
										" / ",
										totalSets,
										" séries (",
										progressPct,
										"%)"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
								value: progressPct,
								className: "h-2"
							})]
						})]
					}),
					blocks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "p-8 text-center text-muted-foreground",
						children: "Sessão vazia."
					}) : blocks.map((b) => {
						const slots = b.config?.slots ?? {};
						const exs = (b.session_block_exercises ?? []).slice().sort((a, z) => a.ordem - z.ordem);
						const grupos = b.formato === "preparacao_movimento" && Object.keys(slots).length > 0 ? [{
							key: "mobilidade",
							label: "Mobilidade",
							icon: Wind,
							items: exs.filter((e) => slots[String(e.ordem)] === "mobilidade")
						}, {
							key: "aquecimento",
							label: "Aquecimento",
							icon: Flame,
							items: exs.filter((e) => (slots[String(e.ordem)] ?? "aquecimento") === "aquecimento")
						}] : null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-3.5 sm:p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs uppercase tracking-wide text-primary font-semibold",
										children: [BLOCK_FORMAT_LABEL[b.formato] ?? b.formato, b.duracao_min ? ` · ${b.duracao_min} min` : ""]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-lg font-semibold",
										children: b.titulo ?? "Bloco"
									}),
									b.config?.instrucoes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-sm text-muted-foreground",
										children: b.config.instrucoes
									})
								]
							}), grupos ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4",
								children: grupos.map(({ key, label, icon: Icon, items }) => items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-md border border-border/60 bg-muted/20 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-2 flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-semibold uppercase tracking-wide",
											children: label
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExerciseList, {
										items,
										completedSets,
										onToggleSet: toggleSet,
										onOpenMedia: (m) => setActiveMedia(m)
									})]
								}, key))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExerciseList, {
								items: exs,
								completedSets,
								onToggleSet: toggleSet,
								onOpenMedia: (m) => setActiveMedia(m)
							})]
						}, b.id);
					}),
					blocks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pt-2",
						children: isFinished ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-4 border-emerald-500/40 bg-emerald-500/10 text-center space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-center gap-2 text-emerald-600 font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartyPopper, { className: "h-5 w-5" }), " Treino Concluído com Sucesso!"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Excelente consistência! Todas as suas séries foram salvas."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									className: "mt-2 text-xs",
									onClick: () => setIsFinished(false),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-3 w-3 mr-1.5" }), " Reabrir marcações"]
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							className: "w-full h-12 text-base font-bold gap-2 cursor-pointer shadow-sm",
							onClick: handleFinishWorkout,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5" }), " Finalizar Treino de Hoje"]
						})
					})
				]
			}),
			restTimer && restTimer.secondsLeft > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed bottom-4 inset-x-3 sm:inset-x-auto sm:right-6 sm:w-96 z-40 animate-in slide-in-from-bottom-4 duration-200",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 rounded-2xl border border-primary/40 bg-card/95 p-3.5 shadow-xl backdrop-blur",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary font-mono font-bold text-sm ring-1 ring-primary/30",
							children: [restTimer.secondsLeft, "s"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs font-semibold text-foreground truncate",
								children: ["Descanso: ", restTimer.exerciseName]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-28 mt-1.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
									value: (restTimer.totalSeconds - restTimer.secondsLeft) / restTimer.totalSeconds * 100,
									className: "h-1.5"
								})
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 shrink-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								className: "h-7 px-1.5 text-xs text-muted-foreground hover:text-foreground",
								onClick: () => addRestTime(15),
								children: "+15s"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								className: "h-7 px-1.5 text-xs text-muted-foreground hover:text-foreground",
								onClick: () => addRestTime(-15),
								children: "-15s"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: "ghost",
								className: "h-7 w-7 text-muted-foreground hover:text-foreground",
								onClick: () => setRestTimer(null),
								title: "Fechar descanso",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
							})
						]
					})]
				})
			}),
			activeMedia && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!activeMedia,
				onOpenChange: (open) => !open && setActiveMedia(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: activeMedia.nome }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4 py-2",
						children: activeMedia.media && activeMedia.media.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3",
							children: activeMedia.media.map((item, idx) => {
								if (item.tipo === "video") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
									src: item.url_publica,
									controls: true,
									className: "w-full rounded-lg bg-black"
								}, idx);
								if (item.tipo === "youtube" || item.url_publica && item.url_publica.includes("youtube.com")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
									src: item.url_publica.replace("watch?v=", "embed/"),
									title: activeMedia.nome,
									className: "aspect-video w-full rounded-lg",
									allowFullScreen: true
								}, idx);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.url_publica,
									alt: activeMedia.nome,
									className: "max-h-80 w-full rounded-lg object-contain bg-black/5 dark:bg-white/5"
								}, idx);
							})
						}) : activeMedia.videoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-video w-full overflow-hidden rounded-lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								src: activeMedia.videoUrl.replace("watch?v=", "embed/"),
								title: activeMedia.nome,
								className: "h-full w-full",
								allowFullScreen: true
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-sm text-muted-foreground",
							children: "Nenhuma mídia disponível."
						})
					})]
				})
			}),
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
function formatMetric(v, tpl) {
	if (v === null || v === void 0 || v === "") return null;
	if (v === 0 || v === "0") return tpl("sem limite");
	return tpl(String(v));
}
function ExerciseList({ items, completedSets, onToggleSet, onOpenMedia }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-2.5",
		children: items.map((ex) => {
			const exerciseName = ex.exercises?.nome_pt ?? ex.nome_livre ?? "Exercício";
			const mediaList = ex.exercises?.exercise_media ?? [];
			const hasMedia = mediaList.length > 0 || !!ex.exercises?.video_url;
			const totalSetsNum = Number(ex.series) || 0;
			const parts = [
				formatMetric(ex.series, (x) => x === "sem limite" ? "séries livres" : `${x} séries`),
				formatMetric(ex.reps, (x) => x === "sem limite" ? "reps livres" : `${x} reps`),
				ex.pct_1rm ? `${ex.pct_1rm}% 1RM` : null,
				ex.carga_kg ? `${ex.carga_kg} kg` : null,
				ex.descanso_seg ? `descanso ${ex.descanso_seg}s` : null
			].filter(Boolean);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border/60 bg-card p-3 shadow-2xs space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-semibold text-foreground text-sm",
								children: [exerciseName, ex.lado ? ` · ${ex.lado}` : ""]
							}),
							parts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-0.5 text-xs text-muted-foreground",
								children: parts.join(" · ")
							}),
							ex.observacoes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-[11px] text-muted-foreground/80",
								children: ex.observacoes
							})
						]
					}), hasMedia && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "sm",
						className: "ml-2 shrink-0 gap-1.5 text-xs text-primary hover:bg-primary/10 h-8 px-2.5 cursor-pointer",
						onClick: () => onOpenMedia({
							nome: exerciseName,
							media: mediaList,
							videoUrl: ex.exercises?.video_url
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-3 w-3 fill-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Execução"
						})]
					})]
				}), totalSetsNum > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-1 border-t border-border/40 flex items-center gap-1.5 flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-semibold text-muted-foreground mr-1",
						children: "Séries:"
					}), Array.from({ length: Math.min(totalSetsNum, 12) }).map((_, idx) => {
						const setNum = idx + 1;
						const isDone = completedSets[ex.id]?.includes(setNum);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onToggleSet(ex.id, setNum, ex.descanso_seg, exerciseName),
							className: cn("inline-flex h-7 min-w-[34px] px-2 items-center justify-center rounded-md text-xs font-bold transition-all duration-150 cursor-pointer", isDone ? "bg-emerald-500 text-white shadow-xs scale-102 ring-1 ring-emerald-600" : "border border-border/80 bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"),
							children: [
								isDone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 mr-0.5 stroke-[3]" }) : null,
								"S",
								setNum
							]
						}, setNum);
					})]
				})]
			}, ex.id);
		})
	});
}
//#endregion
export { SessaoAluno as component };
