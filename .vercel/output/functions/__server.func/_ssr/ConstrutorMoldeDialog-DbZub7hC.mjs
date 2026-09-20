import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BxRH54s6.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-CCQEfgNs.mjs";
import { C as Sparkles, Jt as ChevronDown, Yt as Check, h as Trash2, mt as Hand, r as X, s as WandSparkles, z as Plus } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-SwVf5DHm.mjs";
import { t as Input } from "./input-DoD5W07l.mjs";
import { t as Label } from "./label-B1jF9p8Y.mjs";
import { t as Textarea } from "./textarea-Dfe41XSO.mjs";
import { t as Badge } from "./badge-Bt-nVIZo.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-B7RuMzGd.mjs";
import { a as SortableRow, i as SortableList, n as PopoverContent, r as PopoverTrigger, t as Popover } from "./sortable-list-7C-6tQZ_.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as ToggleGroup, r as ToggleGroupItem, t as ExercisePicker } from "./ExercisePicker-DYY2xz1N.mjs";
import { n as CollapsibleContent, r as CollapsibleTrigger, t as Collapsible } from "./collapsible-Ct2uArBC.mjs";
import { r as METHODOLOGY_LABEL, t as BLOCK_FORMAT_LABEL } from "./methodology-DF-HMT6m.mjs";
import { a as useSetTypeRegistry } from "./set-type-registry-BN6pSciu.mjs";
import { t as useFormatRegistry } from "./format-registry-CPHaJypP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ConstrutorMoldeDialog-DbZub7hC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EQUIPAMENTO_VALORES = [
	"Kettlebell",
	"Ginásticos",
	"Dumbbell",
	"Barbell",
	"Mobilidade",
	"Alternativos Musculação",
	"Objetos Alternativos"
];
function usePoolExercicios() {
	return useQuery({
		queryKey: ["pool-exercicios-molde"],
		staleTime: 300 * 1e3,
		queryFn: async () => {
			const { data, error } = await supabase.from("exercises").select("metodologias, equipamento");
			if (error) throw error;
			return data ?? [];
		}
	});
}
function contarCompativeis(pool, metodologias, equipamento) {
	return pool.filter((e) => {
		const okMet = metodologias.length === 0 || (e.metodologias ?? []).some((m) => metodologias.includes(m));
		const okEq = equipamento.length === 0 || (e.equipamento ?? []).some((q) => equipamento.includes(q));
		return okMet && okEq;
	}).length;
}
function ContagemFiltro({ metodologias, equipamento, necessarios }) {
	const { data: pool, isLoading } = usePoolExercicios();
	if (isLoading || !pool) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "col-span-full text-[11px] text-muted-foreground",
		children: "Conferindo a biblioteca de exercícios..."
	});
	const total = contarCompativeis(pool, metodologias, equipamento);
	const insuficiente = total < necessarios;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: `col-span-full text-[11px] ${insuficiente ? "font-medium text-destructive" : "text-muted-foreground"}`,
		children: insuficiente ? `Apenas ${total} exercício(s) da biblioteca batem com esses filtros, mas o bloco pede ${necessarios}. Ajuste os filtros ou cadastre mais exercícios antes de gerar.` : `${total} exercício(s) da biblioteca batem com esses filtros. A IA escolherá ${necessarios}.`
	});
}
/** Formatos cujo bloco tem faixa/valor fixo de séries (rounds). */
var USA_SERIES = [
	"emom",
	"e2mom",
	"circuito",
	"bodybuilding_sets",
	"metcon",
	"finalizador"
];
var USA_INTERVALO = ["emom", "e2mom"];
var USA_DURACAO_TOTAL = [
	"amrap",
	"preparacao_movimento",
	"mobilidade"
];
var USA_PERCENTUAL = ["forca_tecnica_pct"];
var USA_SLOT = ["preparacao_movimento"];
var USA_NUMERO_EXERCICIOS = (formato) => formato !== "kb_timed_sets" && !formato.includes("kb_timed_sets");
function gerarChave(formatoBase, existentes) {
	const base = (formatoBase || "bloco").split("_")[0];
	let n = 1;
	let chave = `${base}_${n}`;
	const usados = new Set(existentes.map((b) => b.chave));
	let safety = 0;
	while (usados.has(chave) && safety < 1e3) {
		n += 1;
		chave = `${base}_${n}`;
		safety += 1;
	}
	return chave;
}
function novoBloco(presetOrFormat, existentes, presets) {
	const preset = typeof presetOrFormat === "object" ? presetOrFormat : presets.find((p) => p.id === presetOrFormat || p.base === presetOrFormat);
	const formatoBase = preset?.base || presetOrFormat;
	const base = {
		chave: gerarChave(formatoBase, existentes),
		formato: formatoBase,
		presetId: preset?.id || null,
		titulo: preset?.label || null,
		duracaoMin: preset?.defaults?.duracaoMin ?? 9,
		seriesMin: preset?.defaults?.seriesMin ?? 3,
		seriesMax: preset?.defaults?.seriesMax ?? 3,
		numeroExercicios: preset?.defaults?.numeroExercicios ?? 2,
		repsPorExercicio: preset?.defaults?.repsPorExercicio ?? 12,
		modoExecucao: preset?.defaults?.modoExecucao ?? "circuito",
		descansoAposSeg: preset?.defaults?.descansoAposSeg ?? 0,
		descansoEntreSeriesSeg: preset?.defaults?.descansoEntreSeriesSeg ?? null,
		intervaloMin: preset?.defaults?.intervaloMin ?? null,
		percentual1rm: preset?.defaults?.percentual1rm ?? null,
		selecaoExercicios: preset?.defaults?.selecaoExercicios ?? "ia",
		exerciciosFixos: preset?.defaults?.exerciciosFixos ?? [],
		slot: preset?.defaults?.slot ?? null,
		fonteExercicios: preset?.defaults?.fonteExercicios ?? {}
	};
	if (!preset || preset.id.startsWith("builtin:")) switch (formatoBase) {
		case "preparacao_movimento": return {
			...base,
			titulo: "Mobilidade",
			duracaoMin: 2,
			numeroExercicios: 1,
			seriesMin: 4,
			seriesMax: 4,
			slot: "mobilidade"
		};
		case "forca_tecnica_pct": return {
			...base,
			duracaoMin: 8,
			seriesMin: 6,
			seriesMax: 6,
			numeroExercicios: 1,
			repsPorExercicio: 6,
			percentual1rm: 70
		};
		case "emom": return {
			...base,
			duracaoMin: 9,
			seriesMin: 9,
			seriesMax: 9,
			intervaloMin: 1,
			numeroExercicios: 2
		};
		case "e2mom": return {
			...base,
			duracaoMin: 16,
			seriesMin: 8,
			seriesMax: 8,
			intervaloMin: 2,
			numeroExercicios: 2
		};
		case "amrap": return {
			...base,
			duracaoMin: 12,
			seriesMin: null,
			seriesMax: null,
			numeroExercicios: 3
		};
		case "kb_timed_sets": return {
			...base,
			duracaoMin: 10,
			seriesMin: null,
			seriesMax: null,
			numeroExercicios: 1,
			selecaoExercicios: "manual"
		};
		case "finalizador": return {
			...base,
			duracaoMin: 2,
			seriesMin: 1,
			seriesMax: 1,
			numeroExercicios: 1
		};
	}
	return base;
}
function novoAquecimento(existentes, modalidade) {
	const formato = "circuito";
	return {
		chave: gerarChave(formato, existentes),
		formato,
		presetId: `builtin:${formato}`,
		titulo: "Aquecimento",
		duracaoMin: 5,
		seriesMin: 4,
		seriesMax: 4,
		numeroExercicios: 2,
		repsPorExercicio: 10,
		modoExecucao: "circuito",
		descansoAposSeg: 0,
		descansoEntreSeriesSeg: 30,
		selecaoExercicios: "ia",
		exerciciosFixos: [],
		fonteExercicios: { metodologias: [modalidade] }
	};
}
function resumoBloco(b) {
	const partes = [];
	if (b.duracaoMin) partes.push(`${b.duracaoMin}'`);
	if (USA_SERIES.includes(b.formato) && b.seriesMin != null) partes.push(b.seriesMin === b.seriesMax ? `${b.seriesMin} séries` : `${b.seriesMin}-${b.seriesMax} séries`);
	if (USA_INTERVALO.includes(b.formato) && b.intervaloMin != null) partes.push(`a cada ${b.intervaloMin}'`);
	if (USA_PERCENTUAL.includes(b.formato) && b.percentual1rm != null) partes.push(`${b.percentual1rm}% 1RM`);
	if (USA_NUMERO_EXERCICIOS(b.formato)) partes.push(`${b.numeroExercicios} exerc.`);
	if (b.repsPorExercicio) partes.push(`${b.repsPorExercicio} reps`);
	partes.push(b.selecaoExercicios === "ia" ? "seleção IA" : "seleção manual");
	if (b.descansoAposSeg > 0) partes.push(`descanso depois: ${b.descansoAposSeg}s`);
	return partes.join(" · ");
}
function CampoNumero({ label, value, onChange, suffix, min = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			className: "text-xs text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				type: "number",
				min,
				className: "h-9 tabular-nums",
				value: value ?? "",
				onChange: (e) => onChange(e.target.value ? Number(e.target.value) : null)
			}), suffix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pointer-events-none absolute inset-y-0 right-2 flex items-center text-[11px] text-muted-foreground",
				children: suffix
			})]
		})]
	});
}
function BlocoConfigForm({ bloco, onChange, formatLabel, presets }) {
	const { presets: setTypes } = useSetTypeRegistry();
	const activePreset = presets.find((p) => p.id === bloco.presetId || p.id === `builtin:${bloco.formato}`);
	const activeSetType = setTypes.find((t) => t.id === activePreset?.set_type_id);
	const getFieldMeta = (key) => {
		return {
			isEnabled: activePreset?.enabled_fields ? activePreset.enabled_fields.includes(key) : true,
			label: activePreset?.field_labels?.[key] || activeSetType?.fields.find((f) => f.key === key)?.label || key
		};
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 border-t border-border/60 pt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-xs text-muted-foreground",
						children: "Formato"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: bloco.presetId || (bloco.formato.startsWith("builtin:") ? bloco.formato : `builtin:${bloco.formato}`),
						onValueChange: (v) => {
							const p = presets.find((pr) => pr.id === v);
							if (p) onChange({
								formato: p.base,
								presetId: p.id,
								titulo: p.label,
								duracaoMin: p.defaults?.duracaoMin ?? 10,
								seriesMin: p.defaults?.seriesMin ?? 3,
								seriesMax: p.defaults?.seriesMax ?? 3,
								numeroExercicios: p.defaults?.numeroExercicios ?? 2,
								repsPorExercicio: p.defaults?.repsPorExercicio ?? 12,
								descansoEntreSeriesSeg: p.defaults?.descansoEntreSeriesSeg ?? null,
								descansoAposSeg: p.defaults?.descansoAposSeg ?? 0,
								percentual1rm: p.defaults?.percentual1rm ?? null,
								intervaloMin: p.defaults?.intervaloMin ?? null
							});
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							className: "h-9",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: presets.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: p.id,
							children: p.label
						}, p.id)) })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-xs text-muted-foreground",
						children: "Título do bloco — opcional"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "h-9",
						placeholder: formatLabel(bloco.formato),
						value: bloco.titulo ?? "",
						onChange: (e) => onChange({ titulo: e.target.value || null })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CampoNumero, {
					label: USA_DURACAO_TOTAL.includes(bloco.formato) ? "Duração total" : "Teto de tempo",
					value: bloco.duracaoMin,
					onChange: (v) => onChange({ duracaoMin: v }),
					suffix: "min"
				}),
				activeSetType?.fields.filter((f) => activePreset?.enabled_fields ? activePreset.enabled_fields.includes(f.key) : true).map((field) => {
					const meta = getFieldMeta(field.key);
					if (field.key === "serie_rep") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs text-muted-foreground",
							children: meta.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									min: 1,
									className: "h-9 w-16 tabular-nums",
									value: bloco.seriesMin ?? "",
									onChange: (e) => onChange({ seriesMin: e.target.value ? Number(e.target.value) : null })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: "a"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									min: 1,
									className: "h-9 w-16 tabular-nums",
									value: bloco.seriesMax ?? "",
									onChange: (e) => onChange({ seriesMax: e.target.value ? Number(e.target.value) : null })
								})
							]
						})]
					}, field.key);
					if (field.key === "intervalo_seg" || field.key === "tempo_seg" || field.key === "ritmo") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CampoNumero, {
						label: meta.label,
						value: field.key === "intervalo_seg" ? bloco.descansoEntreSeriesSeg : bloco[field.key],
						onChange: (v) => onChange({ [field.key === "intervalo_seg" ? "descansoEntreSeriesSeg" : field.key]: v }),
						suffix: field.key === "ritmo" ? "min/km" : "seg"
					}, field.key);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs text-muted-foreground",
							children: meta.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							className: "h-9",
							value: bloco[field.key === "carga" ? "percentual1rm" : "repsPorExercicio"] ?? "",
							onChange: (e) => onChange({ [field.key === "carga" ? "percentual1rm" : "repsPorExercicio"]: e.target.value })
						})]
					}, field.key);
				}),
				USA_NUMERO_EXERCICIOS(bloco.formato) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CampoNumero, {
					label: "Número de exercícios",
					value: bloco.numeroExercicios,
					onChange: (v) => onChange({ numeroExercicios: v ?? 1 }),
					min: 1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CampoNumero, {
					label: "Descanso após este bloco",
					value: bloco.descansoAposSeg,
					onChange: (v) => onChange({ descansoAposSeg: v ?? 0 }),
					suffix: "seg"
				}),
				USA_SLOT.includes(bloco.formato) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-xs text-muted-foreground",
						children: "Slot"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: bloco.slot ?? "mobilidade",
						onValueChange: (v) => onChange({ slot: v }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							className: "h-9",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "mobilidade",
							children: "Mobilidade"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "aquecimento",
							children: "Aquecimento"
						})] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-xs text-muted-foreground",
						children: "Execução"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToggleGroup, {
						type: "single",
						size: "sm",
						value: bloco.modoExecucao,
						onValueChange: (v) => v && onChange({ modoExecucao: v }),
						className: "rounded-md border border-border/60 bg-muted/30 p-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItem, {
							value: "circuito",
							className: "h-7 px-3 text-xs data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
							children: "Circuito"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItem, {
							value: "series_fixas",
							className: "h-7 px-3 text-xs data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
							children: "Séries fixas"
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-lg border border-border/60 bg-muted/10 p-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					className: "mb-2 block text-xs font-medium uppercase tracking-wide text-muted-foreground",
					children: "Seleção de exercícios"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToggleGroup, {
					type: "single",
					size: "sm",
					value: bloco.selecaoExercicios,
					onValueChange: (v) => v && onChange({ selecaoExercicios: v }),
					className: "mb-3 rounded-md border border-border/60 bg-background p-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToggleGroupItem, {
						value: "ia",
						className: "h-7 gap-1.5 px-3 text-xs data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "h-3 w-3" }), " IA escolhe"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToggleGroupItem, {
						value: "manual",
						className: "h-7 gap-1.5 px-3 text-xs data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hand, { className: "h-3 w-3" }), " Eu escolho"]
					})]
				}),
				bloco.selecaoExercicios === "ia" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3.5 pt-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2 flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold uppercase tracking-wider text-foreground",
									children: "Metodologias de origem"
								}), (bloco.fonteExercicios.metodologias ?? []).length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-muted-foreground bg-muted/60 px-2 py-0.5 rounded border border-border/40",
									children: "Padrão: usa modalidade da geração"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[11px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20",
										children: [
											(bloco.fonteExercicios.metodologias ?? []).length,
											" selecionada",
											(bloco.fonteExercicios.metodologias ?? []).length > 1 ? "s" : ""
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => onChange({ fonteExercicios: {
											...bloco.fonteExercicios,
											metodologias: []
										} }),
										className: "text-[11px] text-muted-foreground hover:text-foreground underline cursor-pointer",
										children: "Limpar"
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-1.5",
								children: Object.keys(METHODOLOGY_LABEL).map((m) => {
									const ativo = (bloco.fonteExercicios.metodologias ?? []).includes(m);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											const atuais = bloco.fonteExercicios.metodologias ?? [];
											const proximo = ativo ? atuais.filter((x) => x !== m) : [...atuais, m];
											onChange({ fonteExercicios: {
												...bloco.fonteExercicios,
												metodologias: proximo
											} });
										},
										className: `flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition-all duration-150 text-left min-h-[38px] cursor-pointer ${ativo ? "border-primary bg-primary/15 text-primary shadow-xs font-semibold ring-1 ring-primary/40" : "border-border/70 bg-background/80 text-muted-foreground hover:border-primary/40 hover:bg-accent/40 hover:text-foreground"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate",
											children: METHODOLOGY_LABEL[m]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${ativo ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/40 bg-background/50"}`,
											children: ativo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" })
										})]
									}, m);
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 pt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2 flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold uppercase tracking-wider text-foreground",
									children: "Equipamento"
								}), (bloco.fonteExercicios.equipamento ?? []).length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-muted-foreground bg-muted/60 px-2 py-0.5 rounded border border-border/40",
									children: "Padrão: qualquer equipamento"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[11px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20",
										children: [
											(bloco.fonteExercicios.equipamento ?? []).length,
											" selecionado",
											(bloco.fonteExercicios.equipamento ?? []).length > 1 ? "s" : ""
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => onChange({ fonteExercicios: {
											...bloco.fonteExercicios,
											equipamento: []
										} }),
										className: "text-[11px] text-muted-foreground hover:text-foreground underline cursor-pointer",
										children: "Limpar"
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-1.5",
								children: EQUIPAMENTO_VALORES.map((eq) => {
									const ativo = (bloco.fonteExercicios.equipamento ?? []).includes(eq);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											const atuais = bloco.fonteExercicios.equipamento ?? [];
											const proximo = ativo ? atuais.filter((x) => x !== eq) : [...atuais, eq];
											onChange({ fonteExercicios: {
												...bloco.fonteExercicios,
												equipamento: proximo
											} });
										},
										className: `flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-xs capitalize transition-all duration-150 text-left min-h-[38px] cursor-pointer ${ativo ? "border-primary bg-primary/15 text-primary shadow-xs font-semibold ring-1 ring-primary/40" : "border-border/70 bg-background/80 text-muted-foreground hover:border-primary/40 hover:bg-accent/40 hover:text-foreground"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate",
											children: eq
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${ativo ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/40 bg-background/50"}`,
											children: ativo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" })
										})]
									}, eq);
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContagemFiltro, {
							metodologias: bloco.fonteExercicios.metodologias ?? [],
							equipamento: bloco.fonteExercicios.equipamento ?? [],
							necessarios: bloco.numeroExercicios
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						children: (bloco.exerciciosFixos ?? []).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "secondary",
							className: "gap-1 pr-1 text-[11px]",
							children: [
								id.slice(0, 8),
								"…",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => onChange({ exerciciosFixos: (bloco.exerciciosFixos ?? []).filter((x) => x !== id) }),
									className: "rounded-full p-0.5 hover:bg-muted-foreground/20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
								})
							]
						}, id))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExercisePicker, { onPick: (ex) => onChange({ exerciciosFixos: [...bloco.exerciciosFixos ?? [], ex.id] }) })]
				})
			]
		})]
	});
}
function BlocoCard({ bloco, aberto, onToggle, onChange, onRemove, formatLabel, presets }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Collapsible, {
			open: aberto,
			onOpenChange: onToggle,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 p-3 pr-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex flex-1 items-center gap-2 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${aberto ? "rotate-180" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold",
									children: bloco.titulo || formatLabel(bloco.formato)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "text-[10px] uppercase tracking-wide",
									children: formatLabel(bloco.formato)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 truncate text-xs text-muted-foreground",
								children: resumoBloco(bloco)
							})]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "h-8 w-8 shrink-0 text-muted-foreground hover:text-destructive mr-1",
					onClick: onRemove,
					"aria-label": "Remover bloco",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContent, {
				className: "px-3 pb-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlocoConfigForm, {
					bloco,
					onChange,
					formatLabel,
					presets
				})
			})]
		})
	});
}
var LABEL_MODALIDADE = {
	hibrido: "Treinamento Híbrido",
	kettlebell_fitness: "Kettlebell Fitness"
};
function ConstrutorMoldeDialog({ open, onOpenChange, modalidade, tituloPrograma, isGenerating = false, onGerar }) {
	(0, import_react.useEffect)(() => {
		if (open) console.log("[ConstrutorMoldeDialog] Opened", {
			modalidade,
			tituloPrograma
		});
	}, [
		open,
		modalidade,
		tituloPrograma
	]);
	const { presets } = useFormatRegistry();
	const [numeroSessoes, setNumeroSessoes] = (0, import_react.useState)(1);
	const [instrucoes, setInstrucoes] = (0, import_react.useState)("");
	const [blocos, setBlocos] = (0, import_react.useState)([]);
	const [abertoChave, setAbertoChave] = (0, import_react.useState)(null);
	function adicionarBloco(presetId) {
		try {
			console.log("[block:add:click]", { presetId });
			const preset = presets.find((p) => p.id === presetId);
			if (!preset) {
				console.error("[block:add:error] Preset not found", { presetId });
				return;
			}
			console.log("[block:add:resolve]", {
				label: preset.label,
				base: preset.base
			});
			if (preset.base === "preparacao_movimento") {
				const mob = novoBloco(preset, blocos, presets);
				const aq = novoAquecimento([...blocos, mob], modalidade);
				mob.titulo = "Mobilidade";
				aq.titulo = "Aquecimento";
				console.log("[block:add:create:prep]", {
					mobKey: mob.chave,
					aqKey: aq.chave
				});
				setBlocos((prev) => [
					...prev,
					mob,
					aq
				]);
				setAbertoChave(mob.chave);
			} else {
				const b = novoBloco(preset, blocos, presets);
				console.log("[block:add:create]", {
					key: b.chave,
					format: b.formato
				});
				setBlocos((prev) => [...prev, b]);
				setAbertoChave(b.chave);
			}
		} catch (err) {
			console.error("[block:add:fatal]", err);
		}
	}
	function atualizarBloco(chave, patch) {
		setBlocos((prev) => prev.map((b) => b.chave === chave ? {
			...b,
			...patch
		} : b));
	}
	function removerBloco(chave) {
		setBlocos((prev) => prev.filter((b) => b.chave !== chave));
	}
	function reordenar(activeId, overId) {
		setBlocos((prev) => {
			const from = prev.findIndex((b) => b.chave === activeId);
			const to = prev.findIndex((b) => b.chave === overId);
			if (from === -1 || to === -1 || from === to) return prev;
			const next = [...prev];
			const [item] = next.splice(from, 1);
			next.splice(to, 0, item);
			return next;
		});
	}
	function limpar() {
		setNumeroSessoes(1);
		setInstrucoes("");
		setBlocos([]);
		setAbertoChave(null);
	}
	function handleGerar() {
		onGerar({
			modalidade,
			tituloPrograma,
			numeroSessoes,
			sessaoTemplate: blocos,
			diasPorSemana: 1,
			dataInicio: (/* @__PURE__ */ new Date()).toISOString()
		}, instrucoes);
	}
	const formatosDisponiveis = presets;
	const getFormatLabel = (f) => {
		const p = presets.find((p) => p.id === f || p.base === f);
		if (p?.label) return p.label;
		if (typeof f === "string") {
			if (f.startsWith("custom:")) return "Personalizado";
			if (f.startsWith("builtin:")) {
				const raw = f.replace("builtin:", "");
				return BLOCK_FORMAT_LABEL[raw] ?? raw;
			}
			return BLOCK_FORMAT_LABEL[f] ?? f;
		}
		return f;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (o) => {
			if (!o) limpar();
			onOpenChange(o);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "flex max-h-[90dvh] max-w-3xl flex-col gap-0 p-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "border-b border-border/60 px-5 py-4 text-left sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
						className: "flex items-center gap-2 text-base",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
							}),
							"Construtor de molde",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								className: "ml-1 text-[10px] uppercase tracking-wide",
								children: LABEL_MODALIDADE[modalidade]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-xs",
						children: "Monte a estrutura fixa de blocos da sessão. A IA só escolhe quais exercícios da sua biblioteca preenchem cada bloco marcado como \"IA escolhe\" — a estrutura em si (formato, duração, séries, número de exercícios, descanso) é definida por você."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-h-0 flex-1 space-y-5 overflow-y-auto px-5 py-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs text-muted-foreground",
									children: "Sessões a gerar nesta sequência"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									min: 1,
									max: 52,
									className: "h-9 tabular-nums",
									value: numeroSessoes,
									onChange: (e) => setNumeroSessoes(Math.max(1, Number(e.target.value)))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground",
									children: "Mesmo molde repetido, exercícios variando entre elas quando o pool permitir."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs text-muted-foreground",
								children: "Instruções adicionais — opcional"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								rows: 2,
								className: "resize-y text-sm",
								placeholder: "Ex.: priorizar padrões de empurrar nesta semana.",
								value: instrucoes,
								onChange: (e) => setInstrucoes(e.target.value)
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-between",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
									className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: [
										"Blocos da sessão (",
										blocos.length,
										")"
									]
								})
							}),
							blocos.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-dashed border-border/70 p-6 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Nenhum bloco adicionado ainda."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground/80",
									children: "Comece adicionando o primeiro bloco da sessão (ex.: Mobilidade / Preparação)."
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableList, {
								ids: blocos.map((b) => b.chave),
								label: "Bloco",
								onReorder: reordenar,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-2",
									children: blocos.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableRow, {
										id: b.chave,
										handleLabel: `Reordenar ${getFormatLabel(b.formato)}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex-1 min-w-0 pr-3 py-1",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlocoCard, {
												bloco: b,
												aberto: abertoChave === b.chave,
												onToggle: () => setAbertoChave((prev) => prev === b.chave ? null : b.chave),
												onChange: (patch) => atualizarBloco(b.chave, patch),
												onRemove: () => removerBloco(b.chave),
												formatLabel: getFormatLabel,
												presets
											})
										})
									}, b.chave))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									variant: "outline",
									size: "sm",
									className: "gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Adicionar bloco"]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
								align: "start",
								className: "w-64 p-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-0.5",
									children: [formatosDisponiveis.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-2 text-xs text-muted-foreground",
										children: "Nenhum formato disponível"
									}), formatosDisponiveis.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											console.log("[block:button:click]", f.id);
											adicionarBloco(f.id);
										},
										className: "rounded-md px-2.5 py-1.5 text-left text-sm transition-colors duration-150 hover:bg-accent hover:text-accent-foreground",
										children: getFormatLabel(f.id)
									}, f.id))]
								})
							})] })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "gap-2 border-t border-border/60 px-5 py-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => {
							limpar();
							onOpenChange(false);
						},
						disabled: isGenerating,
						className: "w-full sm:w-auto",
						children: "Cancelar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: handleGerar,
						disabled: blocos.length === 0 || isGenerating,
						className: "w-full gap-2 sm:w-auto",
						children: isGenerating ? "Gerando..." : `Gerar ${numeroSessoes} sessão(ões)`
					})]
				})
			]
		})
	});
}
//#endregion
export { ConstrutorMoldeDialog, ConstrutorMoldeDialog as default };
