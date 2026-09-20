import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BxRH54s6.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { r as cn, t as Button } from "./button-CCQEfgNs.mjs";
import { _ as CSS, s as closestCenter, t as DndContext } from "../_libs/@dnd-kit/core+[...].mjs";
import { B as Play, C as Sparkles, Ft as Copy, I as Save, Kt as ChevronRight, Mt as Download, Yt as Check, a as Wind, bt as Flame, dt as ImageDown, h as Trash2, ht as GripVertical, m as TriangleAlert, qt as ChevronLeft, tn as Bookmark, tt as LoaderCircle, ut as Image, z as Plus } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-SwVf5DHm.mjs";
import { t as Input } from "./input-DoD5W07l.mjs";
import { t as Label } from "./label-B1jF9p8Y.mjs";
import { t as Textarea } from "./textarea-Dfe41XSO.mjs";
import { t as Badge } from "./badge-Bt-nVIZo.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-B7RuMzGd.mjs";
import { n as restrictToVerticalAxis, t as restrictToParentElement } from "../_libs/dnd-kit__modifiers.mjs";
import { a as useSortable, o as verticalListSortingStrategy, t as SortableContext } from "../_libs/dnd-kit__sortable.mjs";
import { a as SortableRow, c as useSortableSensors, i as SortableList, n as PopoverContent, o as dragHandleClass, r as PopoverTrigger, s as ptAnnouncements, t as Popover } from "./sortable-list-7C-6tQZ_.mjs";
import { n as ToggleGroup, r as ToggleGroupItem, t as ExercisePicker } from "./ExercisePicker-DYY2xz1N.mjs";
import { t as BLOCK_FORMAT_LABEL } from "./methodology-DF-HMT6m.mjs";
import { S as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useSetTypeRegistry } from "./set-type-registry-BN6pSciu.mjs";
import { t as useFormatRegistry } from "./format-registry-CPHaJypP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Card } from "./card-Bav9nr75.mjs";
import { i as DropdownMenuItem, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-ChrMfaLT.mjs";
import { n as exportarSessaoPDF, r as exportarSessoesPdfTabela, t as exportarSessaoExcel } from "./pdf-treino-BvAJGnnP.mjs";
import { i as exportarSessaoImagem, l as salvarLayout, n as UnifiedCanvasEditor, o as exportarSessoesPDF, r as carregarLayout, s as prepararSessaoParaImagem, t as PRESETS_LAYOUT } from "./UnifiedCanvasEditor-Dz7MrYug.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SessionBuilder-DAuRtaAi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var uid$1 = () => Math.random().toString(36).slice(2, 10);
function mapExerciseSets(s, blockTempId, exTempId, fn) {
	return { blocks: s.blocks.map((b) => b.tempId === blockTempId ? {
		...b,
		exercises: b.exercises.map((e) => e.tempId === exTempId ? {
			...e,
			sets: fn(e.sets ?? [])
		} : e)
	} : b) };
}
var DEFAULT_CONFIG = {
	mobilidade: {
		rounds: 4,
		round_min: 5,
		modo_execucao: "circuito"
	},
	preparacao_movimento: {
		rounds: 4,
		round_min: 5,
		modo_execucao: "circuito"
	},
	e2mom: {
		rounds: 8,
		intervalo_min: 2,
		rest_after_min: 3,
		modo_execucao: "circuito"
	},
	amrap: {
		duracao_min: 12,
		modo_execucao: "circuito"
	},
	emom: {
		rounds: 10,
		intervalo_min: 1,
		modo_execucao: "circuito"
	},
	circuito: {
		rounds: 3,
		series: 3,
		reps: "12",
		descanso_seg: 60,
		modo_execucao: "circuito"
	},
	kb_timed_sets: {
		aquecimento: [{
			sets: 2,
			work_min: 2,
			rest_min: 2
		}],
		tiro: [{
			sets: 1,
			work_min: 2,
			rest_min: 2
		}]
	},
	forca_tecnica_pct: { passos: [
		{
			pct: 50,
			sets: 3,
			reps: 6
		},
		{
			pct: 60,
			sets: 2,
			reps: 5
		},
		{
			pct: 70,
			sets: 1,
			reps: 4
		}
	] },
	metcon: {
		series: 3,
		reps: "10",
		descanso_seg: 60,
		modo_execucao: "circuito"
	},
	bodybuilding_sets: {
		series: 4,
		reps: "8-12",
		descanso_seg: 60,
		modo_execucao: "series_fixas"
	},
	series_tempo: {
		series: 4,
		tempo_seg: 40,
		descanso_seg: 60,
		modo_execucao: "series_fixas"
	},
	finalizador: {
		series: 3,
		reps: "15",
		descanso_seg: 45,
		modo_execucao: "circuito"
	},
	livre: { instrucoes: "" }
};
var useBuilder = create((set) => ({
	titulo: "",
	numero_dia: 1,
	data: null,
	blocks: [],
	setMeta: (m) => set(m),
	addBlock: (formato, extras) => set((s) => ({ blocks: [...s.blocks, {
		tempId: uid$1(),
		formato,
		set_type_id: extras?.config?.set_type_id,
		ordem: s.blocks.length,
		titulo: extras?.titulo ?? null,
		config: {
			...DEFAULT_CONFIG[formato],
			...extras?.config ?? {}
		},
		exercises: []
	}] })),
	removeBlock: (tempId) => set((s) => ({ blocks: s.blocks.filter((b) => b.tempId !== tempId).map((b, i) => ({
		...b,
		ordem: i
	})) })),
	updateBlock: (tempId, patch) => set((s) => ({ blocks: s.blocks.map((b) => b.tempId === tempId ? {
		...b,
		...patch
	} : b) })),
	reorderBlocks: (from, to) => set((s) => {
		const next = [...s.blocks];
		const [moved] = next.splice(from, 1);
		next.splice(to, 0, moved);
		return { blocks: next.map((b, i) => ({
			...b,
			ordem: i
		})) };
	}),
	addExercise: (blockTempId, ex) => set((s) => ({ blocks: s.blocks.map((b) => b.tempId === blockTempId ? {
		...b,
		exercises: [...b.exercises, {
			tempId: uid$1(),
			ordem: b.exercises.length,
			reps: b.formato === "amrap" ? "" : "10",
			...ex
		}]
	} : b) })),
	updateExercise: (blockTempId, exTempId, patch) => set((s) => ({ blocks: s.blocks.map((b) => b.tempId === blockTempId ? {
		...b,
		exercises: b.exercises.map((e) => e.tempId === exTempId ? {
			...e,
			...patch
		} : e)
	} : b) })),
	removeExercise: (blockTempId, exTempId) => set((s) => ({ blocks: s.blocks.map((b) => b.tempId === blockTempId ? {
		...b,
		exercises: b.exercises.filter((e) => e.tempId !== exTempId).map((e, i) => ({
			...e,
			ordem: i
		}))
	} : b) })),
	reorderExercises: (blockTempId, activeTempId, overTempId) => set((s) => ({ blocks: s.blocks.map((b) => {
		if (b.tempId !== blockTempId) return b;
		const list = [...b.exercises];
		const from = list.findIndex((e) => e.tempId === activeTempId);
		const to = list.findIndex((e) => e.tempId === overTempId);
		if (from < 0 || to < 0 || from === to) return b;
		const [moved] = list.splice(from, 1);
		list.splice(to, 0, moved);
		return {
			...b,
			exercises: list.map((e, i) => ({
				...e,
				ordem: i
			}))
		};
	}) })),
	addSet: (blockTempId, exTempId, input) => set((s) => {
		const block = s.blocks.find((b) => b.tempId === blockTempId);
		return mapExerciseSets(s, blockTempId, exTempId, (sets) => [...sets, {
			id: uid$1(),
			tipo: input?.tipo ?? sets.at(-1)?.tipo ?? block?.set_type_id ?? "reps_carga",
			serie_rep: input?.serie_rep ?? "",
			carga: input?.carga ?? "",
			intervalo_seg: input?.intervalo_seg ?? "",
			...input
		}]);
	}),
	updateSet: (blockTempId, exTempId, setId, patch) => set((s) => mapExerciseSets(s, blockTempId, exTempId, (sets) => sets.map((x) => x.id === setId ? {
		...x,
		...patch
	} : x))),
	removeSet: (blockTempId, exTempId, setId) => set((s) => mapExerciseSets(s, blockTempId, exTempId, (sets) => sets.filter((x) => x.id !== setId))),
	replicateLastSet: (blockTempId, exTempId) => set((s) => mapExerciseSets(s, blockTempId, exTempId, (sets) => {
		const last = sets.at(-1);
		if (!last) return sets;
		return [...sets, {
			...last,
			id: uid$1()
		}];
	})),
	setExerciseSets: (blockTempId, exTempId, sets) => set((s) => mapExerciseSets(s, blockTempId, exTempId, () => sets)),
	hydrate: (data) => set({
		titulo: data.titulo,
		numero_dia: data.numero_dia,
		data: data.data,
		blocks: data.blocks
	}),
	reset: () => set({
		titulo: "",
		numero_dia: 1,
		data: null,
		blocks: []
	})
}));
var KEY = "shdt.exercise-set-presets.v1";
var EMPTY = Object.freeze([]);
var cache = EMPTY;
var cacheRaw = null;
function read() {
	if (typeof window === "undefined") return EMPTY;
	try {
		const raw = window.localStorage.getItem(KEY);
		if (raw === cacheRaw) return cache;
		cacheRaw = raw;
		if (!raw) {
			cache = EMPTY;
			return cache;
		}
		const parsed = JSON.parse(raw);
		cache = Array.isArray(parsed) ? parsed : EMPTY;
		return cache;
	} catch {
		cache = EMPTY;
		cacheRaw = null;
		return cache;
	}
}
function write(next) {
	if (typeof window === "undefined") return;
	const raw = JSON.stringify(next);
	window.localStorage.setItem(KEY, raw);
	cacheRaw = raw;
	cache = next;
	window.dispatchEvent(new Event("set-presets:changed"));
}
function subscribe(fn) {
	if (typeof window === "undefined") return () => {};
	const handler = () => fn();
	window.addEventListener("set-presets:changed", handler);
	window.addEventListener("storage", handler);
	return () => {
		window.removeEventListener("set-presets:changed", handler);
		window.removeEventListener("storage", handler);
	};
}
var uid = () => Math.random().toString(36).slice(2, 10);
function useSetPresets() {
	const list = (0, import_react.useSyncExternalStore)(subscribe, read, () => EMPTY);
	return {
		presets: list,
		save(name, sets) {
			const clean = sets.map(({ id: _id, ...rest }) => rest);
			const now = Date.now();
			const existingIdx = list.findIndex((p) => p.name.trim().toLowerCase() === name.trim().toLowerCase());
			write(existingIdx >= 0 ? list.map((p, i) => i === existingIdx ? {
				...p,
				sets: clean,
				updatedAt: now
			} : p) : [...list, {
				id: uid(),
				name: name.trim(),
				sets: clean,
				updatedAt: now
			}]);
		},
		remove(id) {
			write(list.filter((p) => p.id !== id));
		}
	};
}
function materializePreset(preset) {
	return preset.sets.map((s) => ({
		...s,
		id: Math.random().toString(36).slice(2, 10)
	}));
}
function SetsEditor({ block, exercise }) {
	const addSet = useBuilder((s) => s.addSet);
	const updateSet = useBuilder((s) => s.updateSet);
	const removeSet = useBuilder((s) => s.removeSet);
	const replicateLastSet = useBuilder((s) => s.replicateLastSet);
	const setExerciseSets = useBuilder((s) => s.setExerciseSets);
	const { presets: setPresets, save: savePreset, remove: removePreset } = useSetPresets();
	const sets = exercise.sets ?? [];
	const [addOpen, setAddOpen] = (0, import_react.useState)(false);
	const [presetsOpen, setPresetsOpen] = (0, import_react.useState)(false);
	const [saveOpen, setSaveOpen] = (0, import_react.useState)(false);
	const [saveName, setSaveName] = (0, import_react.useState)("");
	sets.at(-1)?.tipo;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3 rounded-lg border border-border/60 bg-muted/20 p-3 transition-colors",
		children: [
			sets.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-[12px] text-muted-foreground",
				children: "Nenhuma série adicionada ainda."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: sets.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetRow, {
					index: idx,
					set: s,
					onChange: (patch) => updateSet(block.tempId, exercise.tempId, s.id, patch),
					onRemove: () => removeSet(block.tempId, exercise.tempId, s.id)
				}, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
						open: addOpen,
						onOpenChange: setAddOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								className: "h-9.5 w-full sm:w-auto min-h-[38px] px-3.5 gap-1.5 font-medium cursor-pointer shrink-0 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Adicionar série"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
							align: "start",
							className: "w-[min(92vw,380px)] p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddSetForm, {
								defaultType: sets.at(-1)?.tipo ?? block?.set_type_id ?? "reps_carga",
								onSubmit: (draft) => {
									addSet(block.tempId, exercise.tempId, draft);
									setAddOpen(false);
								}
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "outline",
						className: "h-9.5 w-full sm:w-auto min-h-[38px] px-3.5 gap-1.5 font-medium cursor-pointer shrink-0 border-border/80 bg-background/80 hover:bg-accent",
						onClick: () => {
							if (!sets.length) return toast.error("Adicione uma série primeiro.");
							replicateLastSet(block.tempId, exercise.tempId);
						},
						disabled: !sets.length,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" }), " Replicar séries"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
						open: presetsOpen,
						onOpenChange: setPresetsOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "outline",
								className: "h-9.5 w-full sm:w-auto min-h-[38px] px-3.5 gap-1.5 font-medium cursor-pointer shrink-0 border-border/80 bg-background/80 hover:bg-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "h-4 w-4" }), " Adicionar preset"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
							align: "start",
							className: "w-[min(92vw,340px)] p-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PresetList, {
								presets: setPresets,
								onPick: (p) => {
									setExerciseSets(block.tempId, exercise.tempId, [...sets, ...materializePreset(p)]);
									setPresetsOpen(false);
									toast.success(`Preset "${p.name}" aplicado`);
								},
								onDelete: (p) => {
									removePreset(p.id);
									toast.success(`Preset "${p.name}" removido`);
								}
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
					open: saveOpen,
					onOpenChange: setSaveOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "ghost",
							className: "h-8 gap-1.5 text-xs text-primary hover:bg-primary/10 hover:text-primary",
							disabled: !sets.length,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-3.5 w-3.5" }), " Salvar como preset"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverContent, {
						align: "center",
						className: "w-[min(92vw,320px)] p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "preset-name",
							className: "text-xs uppercase tracking-wide text-muted-foreground",
							children: "Nome do preset"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "preset-name",
								autoFocus: true,
								value: saveName,
								onChange: (e) => setSaveName(e.target.value),
								placeholder: "Ex: Pirâmide 3x",
								className: "h-9",
								onKeyDown: (e) => {
									if (e.key === "Enter" && saveName.trim()) {
										savePreset(saveName, sets);
										toast.success("Preset salvo");
										setSaveName("");
										setSaveOpen(false);
									}
								}
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								className: "h-9 w-9",
								disabled: !saveName.trim(),
								onClick: () => {
									savePreset(saveName, sets);
									toast.success("Preset salvo");
									setSaveName("");
									setSaveOpen(false);
								},
								"aria-label": "Salvar preset",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
							})]
						})]
					})]
				})
			})
		]
	});
}
function SetRow({ index, set, onChange, onRemove }) {
	const { presets } = useSetTypeRegistry();
	const fields = (presets.find((p) => p.id === set.tipo) || presets[0]).fields;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group grid grid-cols-[1fr_auto] items-end gap-2 rounded-md border border-border/60 bg-background/70 p-2 transition-colors hover:border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid min-w-0 grid-cols-2 gap-2 sm:grid-cols-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-2 sm:col-span-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FieldLabel, { children: ["Tipo · #", index + 1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: set.tipo,
					onValueChange: (v) => onChange({ tipo: v }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9 text-xs",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: presets.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: t.id,
						className: "text-xs",
						children: t.label
					}, t.id)) })]
				})]
			}), fields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: f.wide ? "col-span-2 sm:col-span-3" : "",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: f.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					className: "h-9 text-center text-base sm:text-sm tabular-nums transition-colors focus-visible:ring-2 focus-visible:ring-ring/60",
					placeholder: f.placeholder,
					value: set[f.key] ?? "",
					"aria-label": `${f.label} da série ${index + 1}`,
					onChange: (e) => onChange({ [f.key]: e.target.value })
				})]
			}, f.key))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon",
			onClick: onRemove,
			"aria-label": `Remover série ${index + 1}`,
			className: "h-9 w-9 min-h-[36px] min-w-[36px] self-end text-muted-foreground opacity-80 sm:opacity-60 transition hover:bg-destructive/10 hover:text-destructive group-hover:opacity-100 cursor-pointer",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
		})]
	});
}
function FieldLabel({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground",
		children
	});
}
function AddSetForm({ defaultType, onSubmit }) {
	const { presets } = useSetTypeRegistry();
	const [tipo, setTipo] = (0, import_react.useState)(defaultType);
	const [values, setValues] = (0, import_react.useState)({});
	const fields = presets.find((p) => p.id === tipo)?.fields || presets[0].fields;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "Selecione o tipo da série" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
				value: tipo,
				onValueChange: (v) => {
					setTipo(v);
					setValues({});
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					className: "h-9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: presets.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: t.id,
					children: t.label
				}, t.id)) })]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `grid gap-2 ${fields.length > 2 ? "grid-cols-2" : "grid-cols-1"}`,
				children: fields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: f.wide ? "col-span-2" : "",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: f.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "h-9 text-center text-sm tabular-nums",
						placeholder: f.placeholder,
						value: values[f.key] ?? "",
						onChange: (e) => setValues((prev) => ({
							...prev,
							[f.key]: e.target.value
						}))
					})]
				}, f.key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "h-9 w-full",
				onClick: () => onSubmit({
					tipo,
					...values
				}),
				children: "Adicionar"
			})
		]
	});
}
function PresetList({ presets, onPick, onDelete }) {
	const { presets: setTypes } = useSetTypeRegistry();
	if (!presets.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "p-3 text-center text-xs text-muted-foreground",
		children: "Nenhum preset salvo ainda."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "max-h-72 space-y-1 overflow-auto",
		children: presets.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "group flex items-center gap-2 rounded-md p-2 transition-colors hover:bg-accent",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onPick(p),
				className: "min-w-0 flex-1 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate text-sm font-medium text-foreground",
					children: p.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "truncate text-[11px] text-muted-foreground",
					children: [
						p.sets.length,
						" ",
						p.sets.length === 1 ? "série" : "séries",
						" ·",
						" ",
						setTypes.find((t) => t.id === p.sets[0]?.tipo)?.label || "Desconhecido"
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "icon",
				variant: "ghost",
				className: "h-8 w-8 text-muted-foreground opacity-0 transition hover:bg-destructive/10 hover:text-destructive group-hover:opacity-100",
				onClick: (e) => {
					e.stopPropagation();
					onDelete(p);
				},
				"aria-label": `Remover preset ${p.name}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
			})]
		}, p.id))
	});
}
var GRUPOS = [
	"A",
	"B",
	"C",
	"D"
];
var NOME_COMBINACAO = {
	2: "Bi-set",
	3: "Tri-set"
};
function BlockExercises({ block, slot, modo, agrupavel }) {
	const addExercise = useBuilder((s) => s.addExercise);
	const removeExercise = useBuilder((s) => s.removeExercise);
	const updateExercise = useBuilder((s) => s.updateExercise);
	const reorderExercises = useBuilder((s) => s.reorderExercises);
	const [previewMedia, setPreviewMedia] = (0, import_react.useState)(null);
	const lista = slot ? block.exercises.filter((e) => (e.slot ?? "aquecimento") === slot) : block.exercises;
	const isMobilidade = slot === "mobilidade";
	const rotuloGrupo = (0, import_react.useMemo)(() => {
		if (!agrupavel) return {};
		const contagem = /* @__PURE__ */ new Map();
		for (const e of lista) if (e.grupo) contagem.set(e.grupo, (contagem.get(e.grupo) ?? 0) + 1);
		const out = {};
		contagem.forEach((n, g) => {
			if (n > 1) out[g] = NOME_COMBINACAO[n] ?? "Superset";
		});
		return out;
	}, [agrupavel, lista]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3 space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableList, {
				ids: lista.map((e) => e.tempId),
				label: "Exercício",
				onReorder: (a, o) => reorderExercises(block.tempId, a, o),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: lista.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SortableRow, {
						id: e.tempId,
						handleLabel: `Reordenar ${e.nome_livre ?? "exercício"}`,
						className: "flex-col items-stretch bg-background/60 p-2 pl-1.5",
						contentClassName: "flex-col items-stretch gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group flex w-full items-center gap-3",
							children: [
								e.exercise_id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										const media = e.exercise?.exercise_media;
										if (media?.length) setPreviewMedia(media);
									},
									className: "group/thumb relative h-10 w-16 shrink-0 overflow-hidden rounded border border-border bg-black/5 transition-colors hover:border-primary/50",
									children: (() => {
										const media = e.exercise?.exercise_media?.[0];
										if (!media) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-4 w-4 text-muted-foreground/40" });
										const isYoutube = media.storage_path?.startsWith("youtube-");
										if (isYoutube || media.tipo === "video") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute inset-0 flex items-center justify-center bg-black/20 group-hover/thumb:bg-black/40",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-3 w-3 fill-white text-white" })
										}), isYoutube ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-muted/20" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
											src: media.url_publica,
											className: "h-full w-full object-cover"
										})] });
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: media.url_publica,
											className: "h-full w-full object-cover"
										});
									})()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1 truncate text-sm font-medium leading-6 text-foreground",
									children: [e.nome_livre ?? "Exercício", e.grupo && rotuloGrupo[e.grupo] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "ml-2 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary",
										children: [
											rotuloGrupo[e.grupo],
											" ",
											e.grupo
										]
									})]
								}),
								agrupavel && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: e.grupo ?? "individual",
									onValueChange: (v) => updateExercise(block.tempId, e.tempId, { grupo: v === "individual" ? null : v }),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "h-8 w-[128px] text-xs",
										"aria-label": "Combinação do exercício",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "individual",
										className: "text-xs",
										children: "Individual"
									}), GRUPOS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
										value: g,
										className: "text-xs",
										children: ["Combinado ", g]
									}, g))] })]
								}),
								isMobilidade && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										inputMode: "numeric",
										className: "h-8 w-24 pr-9 text-center tabular-nums transition-colors",
										placeholder: "tempo",
										"aria-label": "Tempo de mobilidade em segundos",
										value: e.reps ?? "",
										onChange: (ev) => updateExercise(block.tempId, e.tempId, { reps: ev.target.value })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pointer-events-none absolute inset-y-0 right-2 flex items-center text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
										children: "seg"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									className: "h-8 w-8 text-muted-foreground opacity-60 transition hover:bg-destructive/10 hover:text-destructive group-hover:opacity-100",
									onClick: () => removeExercise(block.tempId, e.tempId),
									"aria-label": "Remover exercício",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
								})
							]
						}), !isMobilidade && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetsEditor, {
								block,
								exercise: e
							})
						})]
					}, e.tempId))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExercisePicker, { onPick: (ex) => addExercise(block.tempId, {
				exercise_id: ex.id,
				nome_livre: ex.nome_pt,
				slot: slot ?? null,
				exercise: ex
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaPreviewDialog, {
				open: !!previewMedia,
				onOpenChange: (v) => !v && setPreviewMedia(null),
				media: previewMedia ?? []
			})
		]
	});
}
function MediaPreviewDialog({ open, onOpenChange, media }) {
	const [index, setIndex] = (0, import_react.useState)(0);
	const current = media[index];
	if (!current) return null;
	const isYoutube = current.storage_path?.startsWith("youtube-");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-3xl border-none bg-black/95 p-0 text-white shadow-2xl overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
				className: "absolute left-0 top-0 z-10 w-full bg-gradient-to-b from-black/80 to-transparent p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
					className: "text-sm font-medium text-white/90",
					children: ["Mídia do Exercício ", media.length > 1 && `(${index + 1}/${media.length})`]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-video w-full bg-black",
				children: [isYoutube ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					src: current.url_publica,
					className: "h-full w-full",
					allowFullScreen: true
				}) : current.tipo === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					src: current.url_publica,
					controls: true,
					autoPlay: true,
					className: "h-full w-full object-contain"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: current.url_publica,
					alt: "Mídia",
					className: "h-full w-full object-contain"
				}), media.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "absolute left-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-black/40 text-white hover:bg-black/60",
					onClick: () => setIndex((i) => i === 0 ? media.length - 1 : i - 1),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-6 w-6" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-black/40 text-white hover:bg-black/60",
					onClick: () => setIndex((i) => i === media.length - 1 ? 0 : i + 1),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-6 w-6" })
				})] })]
			})]
		})
	});
}
function ModoToggle({ block }) {
	const update = useBuilder((s) => s.updateBlock);
	const modo = block.config?.modo_execucao ?? (block.formato === "bodybuilding_sets" ? "series_fixas" : "circuito");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
			children: "Execução"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToggleGroup, {
			type: "single",
			size: "sm",
			value: modo,
			onValueChange: (v) => {
				if (!v) return;
				update(block.tempId, { config: {
					...block.config,
					modo_execucao: v
				} });
			},
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
	});
}
function PrepMovimentoForm({ block }) {
	const update = useBuilder((s) => s.updateBlock);
	const cfg = block.config || {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotSection, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wind, { className: "h-3.5 w-3.5" }),
				label: "Mobilidade",
				hint: "movimentos articulares, respiração, ativação leve",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockExercises, {
					block,
					slot: "mobilidade"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-3 rounded-lg border border-border/60 bg-muted/10 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid flex-1 grid-cols-2 gap-3 sm:max-w-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
						children: "Rounds"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						min: 0,
						value: cfg.rounds ?? 4,
						onChange: (e) => update(block.tempId, { config: {
							...cfg,
							rounds: Number(e.target.value)
						} })
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
						children: "Minutos"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						min: 0,
						value: cfg.round_min ?? 5,
						onChange: (e) => update(block.tempId, { config: {
							...cfg,
							round_min: Number(e.target.value)
						} })
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModoToggle, { block })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotSection, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3.5 w-3.5" }),
				label: "Aquecimento",
				hint: "progressão para a intensidade da sessão",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockExercises, {
					block,
					slot: "aquecimento"
				})
			})
		]
	});
}
function SlotSection({ icon, label, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border/60 bg-muted/20 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 text-primary",
				children: icon
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-wide text-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[11px] text-muted-foreground",
					children: hint
				})]
			})]
		}), children]
	});
}
function TimedForm({ block }) {
	const update = useBuilder((s) => s.updateBlock);
	const cfg = block.config || {};
	const isAmrap = block.formato === "amrap";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid flex-1 grid-cols-2 gap-3 sm:max-w-sm",
					children: isAmrap ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
						children: "Duração total (min)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						min: 0,
						value: cfg.duracao_min ?? 12,
						onChange: (e) => update(block.tempId, {
							config: {
								...cfg,
								duracao_min: Number(e.target.value)
							},
							duracao_min: Number(e.target.value)
						})
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
						children: "Rounds"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						min: 0,
						value: cfg.rounds ?? 8,
						onChange: (e) => update(block.tempId, { config: {
							...cfg,
							rounds: Number(e.target.value)
						} })
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
						children: "Intervalo (min)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						min: 0,
						step: "0.5",
						value: cfg.intervalo_min ?? (block.formato === "e2mom" ? 2 : 1),
						onChange: (e) => update(block.tempId, { config: {
							...cfg,
							intervalo_min: Number(e.target.value)
						} })
					})] })] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModoToggle, { block })]
			}),
			isAmrap && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[11px] text-muted-foreground",
				children: [
					"Dica: use ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-foreground",
						children: "0"
					}),
					" em séries ou reps para sinalizar \"sem limite\"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockExercises, { block })
		]
	});
}
function ForcaPctForm({ block }) {
	const update = useBuilder((s) => s.updateBlock);
	const cfg = block.config || {};
	const passos = cfg.passos ?? [];
	function setPassos(next) {
		update(block.tempId, { config: {
			...cfg,
			passos: next
		} });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Passos (% × séries × reps)" }),
				passos.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							className: "w-20",
							value: p.pct,
							onChange: (e) => {
								const next = [...passos];
								next[i] = {
									...p,
									pct: Number(e.target.value)
								};
								setPassos(next);
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: "% ·"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							className: "w-16",
							value: p.sets,
							onChange: (e) => {
								const next = [...passos];
								next[i] = {
									...p,
									sets: Number(e.target.value)
								};
								setPassos(next);
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: "séries ·"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							className: "w-16",
							value: p.reps,
							onChange: (e) => {
								const next = [...passos];
								next[i] = {
									...p,
									reps: Number(e.target.value)
								};
								setPassos(next);
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: "reps"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							onClick: () => setPassos(passos.filter((_, j) => j !== i)),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
						})
					]
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					onClick: () => setPassos([...passos, {
						pct: 70,
						sets: 1,
						reps: 3
					}]),
					children: "Adicionar passo"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				className: "mb-2 block",
				children: "Complex (movimentos deste bloco)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockExercises, { block })]
		})]
	});
}
var SETS_HINT = {
	bodybuilding_sets: "Defina o padrão do bloco; cada exercício pode sobrescrever nas séries tipadas.",
	circuito: "Percorra os exercícios em sequência e repita o número de voltas.",
	metcon: "Condicionamento: use 0 em séries ou reps para sinalizar “sem limite”.",
	finalizador: "Bloco curto de finalização, geralmente em alta densidade."
};
function SetsRepsForm({ block }) {
	const update = useBuilder((s) => s.updateBlock);
	const cfg = block.config || {};
	const setCfg = (patch) => update(block.tempId, { config: {
		...cfg,
		...patch
	} });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-3 rounded-lg border border-border/60 bg-muted/10 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid flex-1 grid-cols-3 gap-3 sm:max-w-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
							children: "Séries"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							min: 0,
							className: "tabular-nums",
							value: cfg.series ?? 3,
							onChange: (e) => setCfg({ series: Number(e.target.value) })
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
							children: "Reps"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							className: "tabular-nums",
							placeholder: "8-12",
							value: cfg.reps ?? "",
							onChange: (e) => setCfg({ reps: e.target.value })
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
							children: "Descanso (seg)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							min: 0,
							step: 5,
							className: "tabular-nums",
							value: cfg.descanso_seg ?? 60,
							onChange: (e) => setCfg({ descanso_seg: Number(e.target.value) })
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModoToggle, { block })]
			}),
			SETS_HINT[block.formato] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] text-muted-foreground",
				children: SETS_HINT[block.formato]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] text-muted-foreground",
				children: "Combine exercícios (bi-set, tri-set) marcando o mesmo grupo em “Combinado A/B/C”."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockExercises, {
				block,
				agrupavel: true
			})
		]
	});
}
function SeriesTempoForm({ block }) {
	const update = useBuilder((s) => s.updateBlock);
	const cfg = block.config || {};
	const setCfg = (patch) => update(block.tempId, { config: {
		...cfg,
		...patch
	} });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-3 rounded-lg border border-border/60 bg-muted/10 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid flex-1 grid-cols-3 gap-3 sm:max-w-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
							children: "Séries"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							min: 0,
							className: "tabular-nums",
							value: cfg.series ?? 4,
							onChange: (e) => setCfg({ series: Number(e.target.value) })
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
							children: "Tempo (seg)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							min: 0,
							step: 5,
							className: "tabular-nums",
							value: cfg.tempo_seg ?? 40,
							onChange: (e) => setCfg({ tempo_seg: Number(e.target.value) })
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
							children: "Descanso (seg)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							min: 0,
							step: 5,
							className: "tabular-nums",
							value: cfg.descanso_seg ?? 60,
							onChange: (e) => setCfg({ descanso_seg: Number(e.target.value) })
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModoToggle, { block })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] text-muted-foreground",
				children: "Cada exercício é executado por tempo (ex.: 4 × 40s). Ajuste fino por exercício nas séries tipadas."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockExercises, {
				block,
				agrupavel: true
			})
		]
	});
}
function LivreForm({ block }) {
	const update = useBuilder((s) => s.updateBlock);
	const cfg = block.config;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
			children: "Instruções"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
			rows: 3,
			className: "mt-1 resize-y text-sm leading-relaxed",
			placeholder: "Descreva livremente o que deve ser executado neste bloco.",
			value: cfg.instrucoes ?? "",
			onChange: (e) => update(block.tempId, { config: {
				...cfg,
				instrucoes: e.target.value
			} })
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockExercises, { block })]
	});
}
function KbTimedForm({ block }) {
	const update = useBuilder((s) => s.updateBlock);
	const cfg = block.config || {};
	function updateSet(kind, idx, patch) {
		const arr = [...cfg[kind] ?? []];
		arr[idx] = {
			...arr[idx],
			...patch
		};
		update(block.tempId, { config: {
			...cfg,
			[kind]: arr
		} });
	}
	function addSet(kind) {
		const arr = [...cfg[kind] ?? [], {
			sets: 1,
			work_min: 2,
			rest_min: 2
		}];
		update(block.tempId, { config: {
			...cfg,
			[kind]: arr
		} });
	}
	function removeSet(kind, idx) {
		const arr = (cfg[kind] ?? []).filter((_, i) => i !== idx);
		update(block.tempId, { config: {
			...cfg,
			[kind]: arr
		} });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [["aquecimento", "tiro"].map((kind) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			className: "uppercase tracking-wide",
			children: kind === "aquecimento" ? "AQ · Aquecimento" : "TR · Tiro"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 space-y-2",
			children: [(cfg[kind] ?? []).map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						className: "w-16",
						value: s.sets,
						onChange: (e) => updateSet(kind, i, { sets: Number(e.target.value) })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted-foreground",
						children: "× "
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						step: "0.5",
						className: "w-16",
						value: s.work_min,
						onChange: (e) => updateSet(kind, i, { work_min: Number(e.target.value) })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted-foreground",
						children: "min work · rest"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						step: "0.5",
						className: "w-16",
						value: s.rest_min,
						onChange: (e) => updateSet(kind, i, { rest_min: Number(e.target.value) })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted-foreground",
						children: "min"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => removeSet(kind, i),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
					})
				]
			}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				size: "sm",
				onClick: () => addSet(kind),
				children: "Adicionar linha"
			})]
		})] }, kind)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			className: "mb-2 block",
			children: "Movimento clássico"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockExercises, { block })] })]
	});
}
function BlockCard({ block }) {
	const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging, isOver } = useSortable({ id: block.tempId });
	const update = useBuilder((s) => s.updateBlock);
	const remove = useBuilder((s) => s.removeBlock);
	const { presets } = useFormatRegistry();
	const formatLabel = presets.find((p) => p.id === block.formato || p.id === `builtin:${block.formato}` || p.base === block.formato)?.label ?? BLOCK_FORMAT_LABEL[block.formato] ?? (block.formato.startsWith("custom:") ? "Personalizado" : block.formato);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		ref: setNodeRef,
		style: {
			transform: CSS.Transform.toString(transform ? {
				...transform,
				scaleX: 1,
				scaleY: 1
			} : null),
			transition: transition ?? "transform 200ms cubic-bezier(0.2,0,0,1)"
		},
		className: cn("p-3 sm:p-4 transition-[border-color,box-shadow] duration-200", isDragging ? "z-20 scale-[1.01] border-primary/60 shadow-xl shadow-primary/10" : "border-border/70 hover:border-primary/40", isOver && !isDragging && "ring-2 ring-primary/40 ring-offset-2 ring-offset-background"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				ref: setActivatorNodeRef,
				...attributes,
				...listeners,
				className: cn(dragHandleClass, "mt-1 sm:mt-0.5"),
				"aria-label": `Reordenar bloco ${block.titulo ?? ""}`.trim(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "h-4 w-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 sm:flex-row sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							className: "shrink-0 max-w-[220px] truncate text-xs font-semibold uppercase tracking-wider py-1 px-2.5",
							children: formatLabel
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							onClick: () => remove(block.tempId),
							"aria-label": "Remover bloco",
							className: "h-8 w-8 text-muted-foreground hover:bg-destructive/10 hover:text-destructive shrink-0 sm:hidden cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 flex-1 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							placeholder: "Título do bloco (opcional)",
							className: "h-9 flex-1 text-sm bg-background/80",
							value: block.titulo ?? "",
							onChange: (e) => update(block.tempId, { titulo: e.target.value })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							onClick: () => remove(block.tempId),
							"aria-label": "Remover bloco",
							className: "hidden sm:inline-flex h-9 w-9 text-muted-foreground hover:bg-destructive/10 hover:text-destructive shrink-0 cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockBody, { block })
				})]
			})]
		})
	});
}
function BlockBody({ block }) {
	const { presets } = useFormatRegistry();
	const format = block.formato;
	switch (format.startsWith("custom:") || format.startsWith("builtin:") ? presets.find((p) => p.id === format)?.base ?? format.split(":")[1] ?? format : format) {
		case "mobilidade":
		case "preparacao_movimento": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrepMovimentoForm, { block });
		case "e2mom":
		case "emom":
		case "amrap": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimedForm, { block });
		case "forca_tecnica_pct": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForcaPctForm, { block });
		case "kb_timed_sets": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbTimedForm, { block });
		case "series_tempo": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeriesTempoForm, { block });
		case "bodybuilding_sets":
		case "circuito":
		case "metcon":
		case "finalizador": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetsRepsForm, { block });
		case "livre": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LivreForm, { block });
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetsRepsForm, { block });
	}
}
function ExportImageDialog({ open, onOpenChange, sessionId }) {
	const [formato, setFormato] = (0, import_react.useState)("png");
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	const [payload, setPayload] = (0, import_react.useState)(null);
	const [baixando, setBaixando] = (0, import_react.useState)(false);
	const [layout, setLayout] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (open) setLayout(carregarLayout(sessionId).layout);
	}, [open, sessionId]);
	(0, import_react.useEffect)(() => {
		if (!open || !layout) return;
		let cancel = false;
		setLoading(true);
		setError(null);
		(async () => {
			try {
				const prep = await prepararSessaoParaImagem(sessionId);
				if (cancel) return;
				setPayload(prep);
			} catch (e) {
				if (!cancel) setError(e?.message ?? "Falha ao preparar dados");
			} finally {
				if (!cancel) setLoading(false);
			}
		})();
		return () => {
			cancel = true;
		};
	}, [
		open,
		sessionId,
		layout
	]);
	async function baixar() {
		if (!payload || !layout) return;
		setBaixando(true);
		try {
			const inputComLayout = {
				...payload.input,
				layout
			};
			if (formato === "pdf") await exportarSessoesPDF([{
				...payload,
				input: inputComLayout
			}], `${payload.nomeArquivo}.pdf`);
			else await exportarSessaoImagem(inputComLayout, payload.nomeArquivo, formato);
			toast.success(`${payload.nomeArquivo}.${formato} baixado`);
			onOpenChange(false);
		} catch (e) {
			toast.error(e?.message ?? "Falha ao exportar");
		} finally {
			setBaixando(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-3xl gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageDown, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "text-lg font-semibold tracking-tight",
							children: "Exportar como imagem"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							className: "mt-1 text-sm leading-relaxed",
							children: "Arraste os blocos no canvas livre e exporte no formato desejado."
						})]
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [layout && payload ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnifiedCanvasEditor, {
						layout,
						blocos: payload.input.principal,
						metodologiaLabel: payload.input.metodologiaLabel,
						coachLabel: payload.input.coachLabel,
						onChange: (newLayout) => {
							setLayout(newLayout);
							salvarLayout(sessionId, newLayout);
						}
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-video animate-pulse rounded-lg bg-muted flex items-center justify-center",
						children: error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-2 text-destructive",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-6 w-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: error
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
								children: "Formato de tela"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2",
								children: Object.entries(PRESETS_LAYOUT).map(([id, p]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "sm",
									className: cn("h-8 text-[10px] uppercase font-bold", layout?.largura === p.layout.largura && "bg-primary text-primary-foreground border-primary"),
									onClick: () => {
										if (!layout) return;
										const next = {
											...layout,
											largura: p.layout.largura,
											altura: p.layout.altura
										};
										setLayout(next);
										salvarLayout(sessionId, next);
									},
									children: p.nome
								}, id))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
								children: "Arquivo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroup, {
								type: "single",
								value: formato,
								onValueChange: (v) => v && setFormato(v),
								className: "gap-1 rounded-lg border border-border/60 bg-muted/40 p-1",
								children: [
									"png",
									"jpg",
									"pdf"
								].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItem, {
									value: f,
									className: "h-8 min-w-[64px] rounded-md px-3 text-xs font-semibold uppercase tracking-wide transition-all duration-200 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-sm",
									children: f
								}, f))
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "gap-2 sm:gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => onOpenChange(false),
						disabled: baixando,
						children: "Cancelar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: baixar,
						disabled: loading || !!error || baixando || !payload || !layout,
						className: "gap-2",
						children: baixando ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), " Baixando…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageDown, { className: "h-4 w-4" }),
							" Baixar ",
							formato.toUpperCase()
						] })
					})]
				})
			]
		})
	});
}
var SETS_ENVELOPE_PREFIX = "__sets__:";
function parseSetsFromObs(obs) {
	if (!obs) return { rest: null };
	if (!obs.startsWith(SETS_ENVELOPE_PREFIX)) return { rest: obs };
	try {
		const payload = JSON.parse(obs.slice(SETS_ENVELOPE_PREFIX.length));
		if (Array.isArray(payload?.sets)) return {
			sets: payload.sets,
			rest: payload.obs ?? null
		};
	} catch {}
	return { rest: obs };
}
function encodeSetsToObs(sets, originalObs) {
	if (!sets || sets.length === 0) return originalObs ?? null;
	return SETS_ENVELOPE_PREFIX + JSON.stringify({
		sets,
		obs: originalObs ?? null
	});
}
function legacyToSets(e) {
	if (!e.reps && !e.series && !e.carga_kg) return void 0;
	const serie_rep = e.series && e.reps ? `${e.series}x${e.reps}` : e.reps ? String(e.reps) : e.series ? String(e.series) : "";
	return [{
		id: Math.random().toString(36).slice(2, 10),
		tipo: "reps_carga",
		serie_rep,
		carga: e.carga_kg != null ? String(e.carga_kg) : "",
		intervalo_seg: e.descanso_seg != null ? String(e.descanso_seg) : ""
	}];
}
var PrescreverIaDialog = (0, import_react.lazy)(() => import("./PrescreverIaDialog-CrVK-cbI.mjs").then((m) => ({ default: m.PrescreverIaDialog })));
function SessionBuilder({ sessionId, programWeekId }) {
	const navigate = useNavigate();
	const state = useBuilder();
	const sensors = useSortableSensors();
	const { presets } = useFormatRegistry();
	const [imgOpen, setImgOpen] = (0, import_react.useState)(false);
	const [iaPrograma, setIaPrograma] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!sessionId) {
			state.reset();
			return;
		}
		(async () => {
			const { data: session } = await supabase.from("sessions").select("id, titulo, numero_dia, data").eq("id", sessionId).single();
			if (!session) return;
			const { data: blocks } = await supabase.from("session_blocks").select("*, session_block_exercises(*, exercises(*, exercise_media(*)))").eq("session_id", sessionId).order("ordem");
			state.hydrate({
				titulo: session.titulo ?? "",
				numero_dia: session.numero_dia,
				data: session.data,
				blocks: (blocks ?? []).map((b) => ({
					tempId: b.id,
					id: b.id,
					formato: b.formato,
					titulo: b.titulo,
					duracao_min: b.duracao_min,
					ordem: b.ordem,
					config: b.config ?? {},
					exercises: (b.session_block_exercises ?? []).sort((a, z) => a.ordem - z.ordem).map((e) => ({
						tempId: e.id,
						exercise_id: e.exercise_id,
						nome_livre: e.nome_livre ?? e.exercises?.nome_pt ?? null,
						exercise: e.exercises,
						ordem: e.ordem,
						reps: e.reps,
						series: e.series,
						pct_1rm: e.pct_1rm,
						carga_kg: e.carga_kg,
						descanso_seg: e.descanso_seg,
						lado: e.lado,
						observacoes: parseSetsFromObs(e.observacoes).rest,
						sets: parseSetsFromObs(e.observacoes).sets ?? legacyToSets({
							series: e.series,
							reps: e.reps,
							carga_kg: e.carga_kg,
							descanso_seg: e.descanso_seg
						}),
						slot: b.config?.slots?.[String(e.ordem)] ?? null,
						grupo: b.config?.grupos?.[String(e.ordem)] ?? null
					}))
				}))
			});
		})();
	}, [sessionId]);
	function onDragEnd(e) {
		const { active, over } = e;
		if (!over || active.id === over.id) return;
		const from = state.blocks.findIndex((b) => b.tempId === active.id);
		const to = state.blocks.findIndex((b) => b.tempId === over.id);
		if (from < 0 || to < 0) return;
		state.reorderBlocks(from, to);
	}
	async function save(publicar) {
		if (!state.blocks.length) return toast.error("Adicione pelo menos um bloco.");
		try {
			let currentSessionId = sessionId;
			if (!currentSessionId) {
				let weekId = programWeekId;
				if (!weekId) {
					const { data: coach } = await supabase.from("coaches").select("id").maybeSingle();
					if (!coach) throw new Error("Perfil de treinador não encontrado");
					const { data: prog, error: pe } = await supabase.from("programs").insert({
						coach_id: coach.id,
						metodologia: "hibrido",
						titulo: "Rascunhos avulsos",
						data_inicio: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
						duracao_semanas: 1
					}).select("id").single();
					if (pe) throw pe;
					const { data: wk, error: we } = await supabase.from("program_weeks").insert({
						program_id: prog.id,
						numero_semana: 1
					}).select("id").single();
					if (we) throw we;
					weekId = wk.id;
				}
				const { data: sess, error: se } = await supabase.from("sessions").insert({
					program_week_id: weekId,
					numero_dia: state.numero_dia,
					titulo: state.titulo || null,
					data: state.data,
					status: publicar ? "publicada" : "rascunho"
				}).select("id").single();
				if (se) throw se;
				currentSessionId = sess.id;
			} else {
				const { error: ue } = await supabase.from("sessions").update({
					titulo: state.titulo || null,
					numero_dia: state.numero_dia,
					data: state.data,
					status: publicar ? "publicada" : "rascunho",
					atualizado_em: (/* @__PURE__ */ new Date()).toISOString()
				}).eq("id", currentSessionId);
				if (ue) throw ue;
				await supabase.from("session_blocks").delete().eq("session_id", currentSessionId);
			}
			for (const b of state.blocks) {
				const slots = {};
				b.exercises.forEach((e) => {
					if (e.slot) slots[String(e.ordem)] = e.slot;
				});
				const grupos = {};
				b.exercises.forEach((e) => {
					if (e.grupo) grupos[String(e.ordem)] = e.grupo;
				});
				const configToSave = {
					...b.config,
					...Object.keys(slots).length ? { slots } : {},
					...Object.keys(grupos).length ? { grupos } : {}
				};
				const { data: bIns, error: be } = await supabase.from("session_blocks").insert({
					session_id: currentSessionId,
					ordem: b.ordem,
					formato: b.formato,
					titulo: b.titulo || null,
					duracao_min: b.duracao_min ?? null,
					config: configToSave
				}).select("id").single();
				if (be) throw be;
				if (b.exercises.length) {
					const rows = b.exercises.map((e) => ({
						session_block_id: bIns.id,
						exercise_id: e.exercise_id ?? null,
						nome_livre: e.nome_livre ?? null,
						ordem: e.ordem,
						reps: e.reps ?? null,
						series: e.series ?? null,
						pct_1rm: e.pct_1rm ?? null,
						carga_kg: e.carga_kg ?? null,
						descanso_seg: e.descanso_seg ?? null,
						lado: e.lado ?? null,
						observacoes: encodeSetsToObs(e.sets, e.observacoes)
					}));
					const { error: xe } = await supabase.from("session_block_exercises").insert(rows);
					if (xe) throw xe;
				}
			}
			toast.success(publicar ? "Sessão publicada" : "Rascunho salvo");
			navigate({
				to: "/app/sessoes/$id",
				params: { id: currentSessionId }
			});
		} catch (e) {
			toast.error(e.message);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl min-w-0 px-3 py-4 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold tracking-tight sm:text-3xl break-words",
						children: sessionId ? "Editar sessão" : "Nova sessão"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: () => navigate({
							to: "/app/treinos",
							search: { aba: "programas" }
						}),
						className: "text-muted-foreground hover:text-foreground sm:hidden min-h-[36px]",
						children: "Voltar"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: () => navigate({
								to: "/app/treinos",
								search: { aba: "programas" }
							}),
							className: "hidden text-muted-foreground hover:text-foreground sm:flex min-h-[36px]",
							children: "Voltar"
						}),
						sessionId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							className: "gap-2 border-primary/30 text-primary hover:bg-primary/5",
							onClick: async () => {
								const { data: sess } = await supabase.from("sessions").select("program_week_id, program_weeks(program_id, programs(titulo, metodologia))").eq("id", sessionId).single();
								if (sess?.program_weeks?.programs) {
									const prog = sess.program_weeks.programs;
									setIaPrograma({
										p: {
											id: sess.program_weeks.program_id,
											titulo: prog.titulo,
											metodologia: prog.metodologia
										},
										isContinuation: true
									});
								}
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), "Continuar com IA"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }), " Exportar"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onClick: () => exportarSessaoPDF(sessionId).catch((e) => toast.error(e.message)),
								children: "PDF com marca"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onClick: () => exportarSessoesPdfTabela([sessionId]).catch((e) => toast.error(e.message)),
								children: "Ficha A4 (Tabela Completa)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onClick: () => exportarSessaoExcel(sessionId).catch((e) => toast.error(e.message)),
								children: "Excel"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
								onClick: () => setImgOpen(true),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageDown, { className: "mr-2 h-4 w-4" }), " Exportar Imagem"]
							})
						] })] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: () => save(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "mr-2 h-4 w-4" }), " Salvar rascunho"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => save(true),
							children: "Publicar"
						})
					]
				})]
			}),
			sessionId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportImageDialog, {
				open: imgOpen,
				onOpenChange: setImgOpen,
				sessionId
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "mb-6 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 md:grid-cols-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Título" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							placeholder: "Ex: D1 · Fitness A/E2MOM",
							value: state.titulo,
							onChange: (e) => state.setMeta({ titulo: e.target.value })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Dia" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						value: state.numero_dia,
						onChange: (e) => state.setMeta({ numero_dia: Number(e.target.value) })
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DndContext, {
				sensors,
				collisionDetection: closestCenter,
				onDragEnd,
				accessibility: { announcements: ptAnnouncements("Bloco") },
				modifiers: [restrictToVerticalAxis, restrictToParentElement],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableContext, {
					items: state.blocks.map((b) => b.tempId),
					strategy: verticalListSortingStrategy,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: state.blocks.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockCard, { block: b }, b.tempId))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " Adicionar bloco"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
					align: "start",
					className: "min-w-[240px]",
					children: presets.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
						onClick: () => state.addBlock(p.builtin ? p.base : p.id, {
							titulo: p.builtin ? null : p.label,
							config: p.defaults
						}),
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: p.label
						}), !p.builtin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-wider text-muted-foreground",
							children: BLOCK_FORMAT_LABEL[p.base]
						})]
					}, p.id))
				})] })
			}),
			iaPrograma && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrescreverIaDialog, {
					programa: iaPrograma.p,
					escopo: iaPrograma.isContinuation ? { label: "Continuação de Programação" } : null,
					onOpenChange: (o) => !o && setIaPrograma(null)
				})
			})
		]
	});
}
//#endregion
export { SessionBuilder };
