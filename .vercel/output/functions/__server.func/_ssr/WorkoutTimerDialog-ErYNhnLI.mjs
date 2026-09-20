import { o as __toESM } from "../_runtime.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { r as cn, t as Button } from "./button-CCQEfgNs.mjs";
import { B as Play, H as Pause, L as RotateCcw, O as ShieldCheck, Qt as Calculator, Yt as Check, bt as Flame, c as VolumeX, g as Timer, jt as Dumbbell, l as Volume2, t as Zap, z as Plus } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-SwVf5DHm.mjs";
import { t as Input } from "./input-DoD5W07l.mjs";
import { t as Label } from "./label-B1jF9p8Y.mjs";
import { t as Badge } from "./badge-Bt-nVIZo.mjs";
import { i as TabsTrigger, r as TabsList, t as Tabs } from "./tabs-BiHV7YXM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/WorkoutTimerDialog-ErYNhnLI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OneRepMaxDialog({ open, onOpenChange, trigger, initialWeight = 60, initialReps = 5 }) {
	const [weight, setWeight] = import_react.useState(initialWeight);
	const [reps, setReps] = import_react.useState(initialReps);
	const epley = import_react.useMemo(() => {
		if (!weight || !reps || reps <= 0) return 0;
		if (reps === 1) return weight;
		return weight * (1 + .0333 * reps);
	}, [weight, reps]);
	const brzycki = import_react.useMemo(() => {
		if (!weight || !reps || reps <= 0) return 0;
		if (reps === 1) return weight;
		if (reps >= 37) return weight;
		return weight / (1.0278 - .0278 * reps);
	}, [weight, reps]);
	const estimated1RM = import_react.useMemo(() => {
		if (reps === 1) return weight;
		return Math.round((epley + brzycki) / 2 * 10) / 10;
	}, [
		epley,
		brzycki,
		reps,
		weight
	]);
	const percentages = import_react.useMemo(() => {
		return [
			100,
			95,
			90,
			85,
			80,
			75,
			70,
			65,
			60,
			55,
			50
		].map((pct) => ({
			percentage: pct,
			load: Math.round(estimated1RM * (pct / 100) * 2) / 2,
			estReps: pct === 100 ? "1 rep" : pct >= 90 ? "2 - 4 reps" : pct >= 80 ? "5 - 8 reps" : pct >= 70 ? "8 - 12 reps" : "15+ reps"
		}));
	}, [estimated1RM]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange,
		children: [trigger && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: trigger
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-md max-h-[90vh] overflow-y-auto no-scrollbar",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-8 w-8 place-items-center rounded-lg bg-primary/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, { className: "h-4 w-4 text-primary" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "text-lg font-bold",
					children: "Calculadora de 1RM"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
				className: "text-xs text-muted-foreground",
				children: "Estime sua repetição máxima e consulte as zonas de esforço com base nas fórmulas de Brzycki e Epley."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 pt-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs font-semibold",
							children: "Carga utilizada (kg)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							min: 1,
							max: 600,
							step: .5,
							value: weight || "",
							onChange: (e) => setWeight(Number(e.target.value)),
							className: "mt-1",
							placeholder: "Ex: 80"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs font-semibold",
							children: "Repetições feitas"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							min: 1,
							max: 30,
							value: reps || "",
							onChange: (e) => setReps(Number(e.target.value)),
							className: "mt-1",
							placeholder: "Ex: 5"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-4 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold",
								children: "1RM Estimado"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-center gap-1.5 mt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-4xl font-black tracking-tight text-primary",
									children: estimated1RM > 0 ? estimated1RM.toFixed(1) : "0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-bold text-muted-foreground",
									children: "kg"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-center gap-2 mt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									variant: "outline",
									className: "text-[10px] text-muted-foreground",
									children: [
										"Brzycki: ",
										brzycki.toFixed(1),
										"kg"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									variant: "outline",
									className: "text-[10px] text-muted-foreground",
									children: [
										"Epley: ",
										epley.toFixed(1),
										"kg"
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
							children: "Zonas de Adaptação Fisiológica"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border p-2.5 bg-card/60 space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 font-bold text-rose-500",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3.5 w-3.5" }), " Força Máxima"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-muted-foreground",
											children: "90% - 100% (1 a 3 reps)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "font-semibold text-foreground",
											children: [
												(estimated1RM * .9).toFixed(1),
												" - ",
												estimated1RM.toFixed(1),
												" kg"
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border p-2.5 bg-card/60 space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 font-bold text-amber-500",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3.5 w-3.5" }), " Potência"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-muted-foreground",
											children: "75% - 85% (3 a 5 reps)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "font-semibold text-foreground",
											children: [
												(estimated1RM * .75).toFixed(1),
												" - ",
												(estimated1RM * .85).toFixed(1),
												" kg"
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border p-2.5 bg-card/60 space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 font-bold text-emerald-500",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, { className: "h-3.5 w-3.5" }), " Hipertrofia"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-muted-foreground",
											children: "67% - 85% (6 a 12 reps)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "font-semibold text-foreground",
											children: [
												(estimated1RM * .67).toFixed(1),
												" - ",
												(estimated1RM * .85).toFixed(1),
												" kg"
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border p-2.5 bg-card/60 space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 font-bold text-sky-500",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5" }), " Resistência"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-muted-foreground",
											children: "<67% (15+ reps)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "font-semibold text-foreground",
											children: [
												"< ",
												(estimated1RM * .67).toFixed(1),
												" kg"
											]
										})
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
							children: "Escala de Porcentagens (% da Carga)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border overflow-hidden text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 bg-muted/50 p-2 font-semibold text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Intensidade" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-center",
										children: "Carga (kg)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-right",
										children: "Reps Estimadas"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "divide-y divide-border/60 max-h-48 overflow-y-auto no-scrollbar",
								children: percentages.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 p-2 hover:bg-muted/30 items-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-medium text-foreground",
											children: [p.percentage, "%"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-center font-bold text-primary",
											children: [p.load, " kg"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-right text-muted-foreground text-[11px]",
											children: p.estReps
										})
									]
								}, p.percentage))
							})]
						})]
					})
				]
			})]
		})]
	});
}
/**
* Sintetizador sonoro de bips e alertas para treinos usando a Web Audio API nativa.
* Funciona de forma 100% offline, sem arquivos externos de áudio e compatível com iOS e Android.
*/
var SoundSynthesizer = class {
	ctx = null;
	getContext() {
		if (typeof window === "undefined") return null;
		if (!this.ctx) {
			const AudioCtx = window.AudioContext || window.webkitAudioContext;
			if (AudioCtx) this.ctx = new AudioCtx();
		}
		if (this.ctx && this.ctx.state === "suspended") this.ctx.resume().catch(() => {});
		return this.ctx;
	}
	/**
	* Toca um tom senoidal limpo na frequência e duração especificadas
	*/
	playTone(freq, durationSec, type = "sine", gainVal = .15) {
		try {
			const ctx = this.getContext();
			if (!ctx) return;
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();
			osc.type = type;
			osc.frequency.setValueAtTime(freq, ctx.currentTime);
			gain.gain.setValueAtTime(gainVal, ctx.currentTime);
			gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + durationSec);
			osc.connect(gain);
			gain.connect(ctx.destination);
			osc.start(ctx.currentTime);
			osc.stop(ctx.currentTime + durationSec);
		} catch {}
	}
	/**
	* Bip de contagem regressiva curta (ex.: 3, 2, 1)
	*/
	playCountdownBeep() {
		this.playTone(587.33, .12, "sine", .18);
	}
	/**
	* Bip de início ou virada de minuto (ex.: EMOM go / Início do Tabata)
	*/
	playStartBeep() {
		this.playTone(880, .35, "triangle", .25);
	}
	/**
	* Alerta duplo de fim de descanso ou fim de round
	*/
	playRestCompleteBeep() {
		try {
			this.playTone(784, .15, "sine", .2);
			setTimeout(() => {
				this.playTone(1046.5, .3, "triangle", .25);
			}, 160);
		} catch {}
	}
};
var soundEffects = new SoundSynthesizer();
var SlideToConfirmWorkout = ({ onConfirm, text = "Deslize para Concluir Treino", confirmedText = "Treino Finalizado!", className = "", resetSignal = 0 }) => {
	const [isDragging, setIsDragging] = (0, import_react.useState)(false);
	const [dragProgress, setDragProgress] = (0, import_react.useState)(0);
	const [isConfirmed, setIsConfirmed] = (0, import_react.useState)(false);
	const [containerWidth, setContainerWidth] = (0, import_react.useState)(280);
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setIsDragging(false);
		setDragProgress(0);
		setIsConfirmed(false);
	}, [resetSignal]);
	(0, import_react.useEffect)(() => {
		const container = containerRef.current;
		if (!container) return;
		const updateWidth = () => setContainerWidth(container.getBoundingClientRect().width);
		updateWidth();
		const observer = new ResizeObserver(updateWidth);
		observer.observe(container);
		return () => observer.disconnect();
	}, []);
	const handleStart = () => {
		if (isConfirmed) return;
		setIsDragging(true);
	};
	const handleMove = (0, import_react.useCallback)((clientX) => {
		if (!isDragging || isConfirmed || !containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		const handleWidth = 52;
		const maxDrag = rect.width - handleWidth;
		const progress = Math.max(0, Math.min(clientX - rect.left - handleWidth / 2, maxDrag)) / maxDrag;
		setDragProgress(progress);
		if (progress >= .9) {
			setIsConfirmed(true);
			setIsDragging(false);
			setDragProgress(1);
			onConfirm();
		}
	}, [
		isDragging,
		isConfirmed,
		onConfirm
	]);
	const handleEnd = (0, import_react.useCallback)(() => {
		if (!isDragging || isConfirmed) return;
		setIsDragging(false);
		if (dragProgress < .9) setDragProgress(0);
	}, [
		isDragging,
		isConfirmed,
		dragProgress
	]);
	(0, import_react.useEffect)(() => {
		const onMouseMove = (e) => handleMove(e.clientX);
		const onMouseUp = () => handleEnd();
		const onTouchMove = (e) => handleMove(e.touches[0].clientX);
		const onTouchEnd = () => handleEnd();
		if (isDragging) {
			window.addEventListener("mousemove", onMouseMove);
			window.addEventListener("mouseup", onMouseUp);
			window.addEventListener("touchmove", onTouchMove);
			window.addEventListener("touchend", onTouchEnd);
		}
		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mouseup", onMouseUp);
			window.removeEventListener("touchmove", onTouchMove);
			window.removeEventListener("touchend", onTouchEnd);
		};
	}, [
		isDragging,
		handleMove,
		handleEnd
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: `relative h-14 w-full rounded-2xl bg-zinc-950 border border-amber-500/40 p-1.5 select-none overflow-hidden transition-all duration-300 shadow-xl ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-0 left-0 bottom-0 bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 rounded-xl transition-all duration-75",
				style: {
					width: `${52 + dragProgress * Math.max(0, containerWidth - 52)}px`,
					opacity: isConfirmed ? 1 : .85
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-center justify-center pointer-events-none text-xs font-black uppercase tracking-wider text-amber-200 drop-shadow-md",
				children: isConfirmed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-white flex items-center gap-2 animate-bounce",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-5 h-5" }),
						" ",
						confirmedText
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { opacity: 1 - dragProgress * 1.2 },
					children: text
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				onMouseDown: handleStart,
				onTouchStart: handleStart,
				className: `relative z-10 h-11 w-11 rounded-xl flex items-center justify-center cursor-grab active:cursor-grabbing shadow-2xl transition-transform duration-75 ${isConfirmed ? "bg-white text-emerald-600 pointer-events-none" : "bg-amber-400 text-black hover:scale-105"}`,
				style: { transform: `translateX(${dragProgress * Math.max(0, containerWidth - 52)}px)` },
				children: isConfirmed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-6 h-6 stroke-[3]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "w-6 h-6 animate-pulse" })
			})
		]
	});
};
function WorkoutTimerDialog({ open, onOpenChange, trigger, defaultMode = "emom" }) {
	const [mode, setMode] = import_react.useState(defaultMode);
	const [isRunning, setIsRunning] = import_react.useState(false);
	const [muted, setMuted] = import_react.useState(false);
	const [finishSliderReset, setFinishSliderReset] = import_react.useState(0);
	const [emomMinutes, setEmomMinutes] = import_react.useState(10);
	const [emomCurrentMinute, setEmomCurrentMinute] = import_react.useState(1);
	const [emomSecondsLeft, setEmomSecondsLeft] = import_react.useState(60);
	const [amrapMinutes, setAmrapMinutes] = import_react.useState(12);
	const [amrapSecondsLeft, setAmrapSecondsLeft] = import_react.useState(720);
	const [amrapRounds, setAmrapRounds] = import_react.useState(0);
	const [tabataWork, setTabataWork] = import_react.useState(20);
	const [tabataRest, setTabataRest] = import_react.useState(10);
	const [tabataRounds, setTabataRounds] = import_react.useState(8);
	const [tabataCurrentRound, setTabataCurrentRound] = import_react.useState(1);
	const [tabataPhase, setTabataPhase] = import_react.useState("work");
	const [tabataSecondsLeft, setTabataSecondsLeft] = import_react.useState(20);
	const [stopwatchSeconds, setStopwatchSeconds] = import_react.useState(0);
	const handleReset = import_react.useCallback(() => {
		setIsRunning(false);
		setFinishSliderReset((value) => value + 1);
		setEmomCurrentMinute(1);
		setEmomSecondsLeft(60);
		setAmrapSecondsLeft(amrapMinutes * 60);
		setAmrapRounds(0);
		setTabataCurrentRound(1);
		setTabataPhase("work");
		setTabataSecondsLeft(tabataWork);
		setStopwatchSeconds(0);
	}, [amrapMinutes, tabataWork]);
	import_react.useEffect(() => {
		let interval;
		if (isRunning) interval = window.setInterval(() => {
			if (mode === "emom") setEmomSecondsLeft((prev) => {
				if (prev <= 4 && prev > 1 && !muted) soundEffects.playCountdownBeep();
				if (prev <= 1) {
					if (emomCurrentMinute >= emomMinutes) {
						setIsRunning(false);
						if (!muted) soundEffects.playRestCompleteBeep();
						return 0;
					}
					setEmomCurrentMinute((m) => m + 1);
					if (!muted) soundEffects.playStartBeep();
					return 60;
				}
				return prev - 1;
			});
			else if (mode === "amrap") setAmrapSecondsLeft((prev) => {
				if (prev <= 4 && prev > 1 && !muted) soundEffects.playCountdownBeep();
				if (prev <= 1) {
					setIsRunning(false);
					if (!muted) soundEffects.playRestCompleteBeep();
					return 0;
				}
				return prev - 1;
			});
			else if (mode === "tabata") setTabataSecondsLeft((prev) => {
				if (prev <= 4 && prev > 1 && !muted) soundEffects.playCountdownBeep();
				if (prev <= 1) if (tabataPhase === "work") {
					setTabataPhase("rest");
					if (!muted) soundEffects.playRestCompleteBeep();
					return tabataRest;
				} else {
					if (tabataCurrentRound >= tabataRounds) {
						setIsRunning(false);
						if (!muted) soundEffects.playRestCompleteBeep();
						return 0;
					}
					setTabataCurrentRound((r) => r + 1);
					setTabataPhase("work");
					if (!muted) soundEffects.playStartBeep();
					return tabataWork;
				}
				return prev - 1;
			});
			else if (mode === "stopwatch") setStopwatchSeconds((prev) => prev + 1);
		}, 1e3);
		return () => {
			if (interval !== void 0) window.clearInterval(interval);
		};
	}, [
		isRunning,
		mode,
		muted,
		emomCurrentMinute,
		emomMinutes,
		tabataPhase,
		tabataCurrentRound,
		tabataRounds,
		tabataRest,
		tabataWork
	]);
	const fmt = (sec) => {
		const m = Math.floor(sec / 60);
		const s = sec % 60;
		return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange,
		children: [trigger && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: trigger
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-8 w-8 place-items-center rounded-lg bg-primary/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, { className: "h-4 w-4 text-primary" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-lg font-bold",
						children: "Timer de Treino"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "icon",
					className: "h-8 w-8 text-muted-foreground",
					onClick: () => setMuted(!muted),
					title: muted ? "Ativar som" : "Desativar som",
					children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-4 w-4" })
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 pt-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
						value: mode,
						onValueChange: (v) => {
							setIsRunning(false);
							setMode(v);
						},
						className: "w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
							className: "grid grid-cols-4 w-full h-9",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "emom",
									className: "text-xs",
									children: "EMOM"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "amrap",
									className: "text-xs",
									children: "AMRAP"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "tabata",
									className: "text-xs",
									children: "Tabata"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "stopwatch",
									className: "text-xs",
									children: "Livre"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("flex flex-col items-center justify-center rounded-2xl border p-6 text-center transition-all", mode === "tabata" && tabataPhase === "work" && "bg-rose-500/10 border-rose-500/40", mode === "tabata" && tabataPhase === "rest" && "bg-emerald-500/10 border-emerald-500/40", mode !== "tabata" && "bg-gradient-to-b from-card to-muted/40 border-border"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex items-center gap-2",
								children: [
									mode === "emom" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
										variant: "secondary",
										className: "text-xs",
										children: [
											"Minuto ",
											emomCurrentMinute,
											" de ",
											emomMinutes
										]
									}),
									mode === "amrap" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
										variant: "secondary",
										className: "text-xs",
										children: [
											amrapRounds,
											" round",
											amrapRounds === 1 ? "" : "s",
											" completos"
										]
									}),
									mode === "tabata" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
										variant: tabataPhase === "work" ? "destructive" : "default",
										className: "text-xs uppercase font-bold",
										children: [
											tabataPhase === "work" ? "Trabalho" : "Descanso",
											" · Round ",
											tabataCurrentRound,
											"/",
											tabataRounds
										]
									}),
									mode === "stopwatch" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										className: "text-xs",
										children: "Cronômetro Livre"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-mono text-6xl font-black tracking-tight text-foreground my-2",
								children: [
									mode === "emom" && fmt(emomSecondsLeft),
									mode === "amrap" && fmt(amrapSecondsLeft),
									mode === "tabata" && fmt(tabataSecondsLeft),
									mode === "stopwatch" && fmt(stopwatchSeconds)
								]
							}),
							mode === "amrap" && isRunning && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "outline",
								className: "mt-2 gap-1.5 font-semibold text-xs cursor-pointer border-primary/50",
								onClick: () => setAmrapRounds((r) => r + 1),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), " Concluir Round (+1)"]
							})
						]
					}),
					!isRunning && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border bg-muted/20 p-3 space-y-3 text-xs",
						children: [
							mode === "emom" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-medium",
									children: "Duração total (minutos):"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									min: 1,
									max: 60,
									value: emomMinutes,
									onChange: (e) => {
										setEmomMinutes(Number(e.target.value));
									},
									className: "w-20 h-8 text-center"
								})]
							}),
							mode === "amrap" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-medium",
									children: "Tempo limite (minutos):"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									min: 1,
									max: 60,
									value: amrapMinutes,
									onChange: (e) => {
										const v = Number(e.target.value);
										setAmrapMinutes(v);
										setAmrapSecondsLeft(v * 60);
									},
									className: "w-20 h-8 text-center"
								})]
							}),
							mode === "tabata" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-[11px] text-muted-foreground",
										children: "Trabalho (s)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "number",
										min: 5,
										max: 300,
										value: tabataWork,
										onChange: (e) => {
											const v = Number(e.target.value);
											setTabataWork(v);
											if (tabataPhase === "work") setTabataSecondsLeft(v);
										},
										className: "h-8 text-center mt-1"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-[11px] text-muted-foreground",
										children: "Descanso (s)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "number",
										min: 5,
										max: 300,
										value: tabataRest,
										onChange: (e) => setTabataRest(Number(e.target.value)),
										className: "h-8 text-center mt-1"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-[11px] text-muted-foreground",
										children: "Rounds"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "number",
										min: 1,
										max: 50,
										value: tabataRounds,
										onChange: (e) => setTabataRounds(Number(e.target.value)),
										className: "h-8 text-center mt-1"
									})] })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "py-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideToConfirmWorkout, {
							resetSignal: finishSliderReset,
							onConfirm: () => {
								setIsRunning(false);
								if (!muted) soundEffects.playRestCompleteBeep();
							},
							text: "Deslize para Concluir Treino",
							confirmedText: "Treino Finalizado!",
							className: "w-full"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "outline",
							className: "flex-1 gap-2 cursor-pointer",
							onClick: handleReset,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" }), " Reiniciar"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							className: cn("flex-1 gap-2 cursor-pointer font-bold", isRunning ? "bg-amber-600 hover:bg-amber-700" : "bg-primary"),
							onClick: () => {
								if (!isRunning && !muted) soundEffects.playStartBeep();
								setIsRunning(!isRunning);
							},
							children: isRunning ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-4 w-4" }), " Pausar"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" }), " Iniciar"] })
						})]
					})
				]
			})]
		})]
	});
}
//#endregion
export { WorkoutTimerDialog as n, soundEffects as r, OneRepMaxDialog as t };
