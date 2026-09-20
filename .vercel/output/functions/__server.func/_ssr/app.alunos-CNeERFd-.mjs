import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BxRH54s6.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { r as cn, t as Button } from "./button-CCQEfgNs.mjs";
import { a as PointerSensor, c as closestCorners, g as useSensors, h as useSensor, m as useDroppable, n as DragOverlay, p as useDraggable, t as DndContext } from "../_libs/@dnd-kit/core+[...].mjs";
import { $t as Brain, C as Sparkles, Dt as Eye, Ft as Copy, I as Save, It as Columns3, St as FileText, Ut as CircleCheck, Yt as Check, _ as Target, d as UserPlus, ft as History, h as Trash2, ht as GripVertical, jt as Dumbbell, k as ShieldAlert, m as TriangleAlert, nn as BookOpen, nt as List, r as X, u as Users, z as Plus } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, s as DialogTrigger, t as Dialog } from "./dialog-SwVf5DHm.mjs";
import { t as Input } from "./input-DoD5W07l.mjs";
import { t as Label } from "./label-B1jF9p8Y.mjs";
import { t as Textarea } from "./textarea-Dfe41XSO.mjs";
import { t as Badge } from "./badge-Bt-nVIZo.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-B7RuMzGd.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { u as createServerFn } from "./esm-BJY6H9OB.mjs";
import { n as useServerFn, t as createSsrRpc } from "./ssr-rpc-DsWtVjPG.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-CHOPR5bi.mjs";
import { a as serializeAthleteMemory, i as parseAthleteMemory, n as COMMON_INJURIES_LIST, r as formatMemoryForPrompt, t as COMMON_EQUIPMENT_LIST } from "./athlete-memory-AjhKHXJa.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Card } from "./card-Bav9nr75.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-BiHV7YXM.mjs";
import { t as Skeleton } from "./skeleton-DLRLwmh_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.alunos-CNeERFd-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Timeline = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
	ref,
	className: cn("relative flex flex-col gap-6 pl-2 before:absolute before:bottom-2 before:left-[19px] before:top-2 before:w-0.5 before:bg-border/70", className),
	...props
}));
Timeline.displayName = "Timeline";
var TimelineItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
	ref,
	className: cn("group relative flex items-start gap-4 text-left", className),
	...props
}));
TimelineItem.displayName = "TimelineItem";
var timelinePointVariants = cva("relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold shadow-xs ring-4 ring-background transition-transform duration-200 group-hover:scale-105", {
	variants: { variant: {
		default: "border-border bg-muted text-muted-foreground",
		primary: "border-primary/40 bg-primary/10 text-primary",
		success: "border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
		warning: "border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400",
		destructive: "border-destructive/40 bg-destructive/10 text-destructive"
	} },
	defaultVariants: { variant: "default" }
});
var TimelinePoint = import_react.forwardRef(({ className, variant, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn(timelinePointVariants({ variant }), className),
	...props,
	children
}));
TimelinePoint.displayName = "TimelinePoint";
var TimelineContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-1 min-w-0 flex-col gap-1 rounded-lg border border-border/50 bg-card/60 p-3 sm:p-4 shadow-xs transition-colors group-hover:border-border/80 group-hover:bg-card", className),
	...props
}));
TimelineContent.displayName = "TimelineContent";
var TimelineTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
	ref,
	className: cn("flex items-center gap-2 font-semibold text-sm tracking-tight text-foreground flex-wrap", className),
	...props
}));
TimelineTitle.displayName = "TimelineTitle";
var TimelineTime = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
	ref,
	className: cn("text-xs font-mono text-muted-foreground shrink-0", className),
	...props
}));
TimelineTime.displayName = "TimelineTime";
var TimelineDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
	ref,
	className: cn("text-xs sm:text-sm text-muted-foreground leading-relaxed break-words", className),
	...props
}));
TimelineDescription.displayName = "TimelineDescription";
function KanbanBoard({ columns, items, onItemMove, renderCard, onCardClick, className }) {
	const [activeItem, setActiveItem] = import_react.useState(null);
	const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 4 } }));
	const handleDragStart = (event) => {
		const item = items.find((i) => i.id === event.active.id);
		if (item) setActiveItem(item);
	};
	const handleDragEnd = (event) => {
		const { active, over } = event;
		setActiveItem(null);
		if (!over) return;
		const activeId = String(active.id);
		const overId = String(over.id);
		const sourceItem = items.find((i) => i.id === activeId);
		if (!sourceItem) return;
		let destinationColumnId = overId;
		const overItem = items.find((i) => i.id === overId);
		if (overItem) destinationColumnId = overItem.columnId;
		if (sourceItem.columnId !== destinationColumnId) onItemMove?.(activeId, sourceItem.columnId, destinationColumnId);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DndContext, {
		sensors,
		collisionDetection: closestCorners,
		onDragStart: handleDragStart,
		onDragEnd: handleDragEnd,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("grid grid-flow-col auto-cols-[280px] sm:auto-cols-[320px] gap-4 overflow-x-auto pb-4 no-scrollbar items-start", className),
			children: columns.map((col) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanbanColumnDroppable, {
					column: col,
					items: items.filter((item) => item.columnId === col.id),
					renderCard,
					onCardClick
				}, col.id);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DragOverlay, { children: activeItem ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rotate-2 scale-105 opacity-90 transition-transform",
			children: renderCard ? renderCard(activeItem, true) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultKanbanCard, {
				item: activeItem,
				isDragging: true
			})
		}) : null })]
	});
}
function KanbanColumnDroppable({ column, items, renderCard, onCardClick }) {
	const { setNodeRef, isOver } = useDroppable({ id: column.id });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: setNodeRef,
		className: cn("flex flex-col rounded-xl border border-border/70 bg-muted/20 p-3 transition-colors min-h-[350px]", isOver && "border-primary/60 bg-primary/[0.04] ring-2 ring-primary/20"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between pb-3 mb-2 border-b border-border/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [column.color && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-2.5 w-2.5 rounded-full shrink-0", column.color) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold text-foreground tracking-tight",
						children: column.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "secondary",
					className: "h-5 px-1.5 text-xs font-medium",
					children: items.length
				})]
			}),
			column.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] text-muted-foreground mb-2.5",
				children: column.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 flex flex-col gap-2.5",
				children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 flex items-center justify-center p-4 border border-dashed border-border/50 rounded-lg text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground/60",
						children: "Nenhum item nesta etapa"
					})
				}) : items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanbanDraggableCard, {
					item,
					renderCard,
					onCardClick
				}, item.id))
			})
		]
	});
}
function KanbanDraggableCard({ item, renderCard, onCardClick }) {
	const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
		id: item.id,
		data: item
	});
	const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : void 0;
	if (isDragging) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: setNodeRef,
		style,
		className: "h-20 rounded-lg border-2 border-dashed border-primary/40 bg-primary/5 opacity-50"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: setNodeRef,
		style,
		...listeners,
		...attributes,
		onClick: () => onCardClick?.(item),
		className: "cursor-grab active:cursor-grabbing focus:outline-none",
		children: renderCard ? renderCard(item, false) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultKanbanCard, { item })
	});
}
function DefaultKanbanCard({ item, isDragging }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: cn("p-3 space-y-2 bg-card border-border/80 shadow-xs hover:border-border hover:shadow-sm transition-all duration-150", isDragging && "shadow-lg ring-1 ring-primary/20"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-xs font-semibold text-foreground line-clamp-2",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground/40 hover:text-foreground" })]
			}),
			item.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] text-muted-foreground line-clamp-2",
				children: item.description
			}),
			(item.badge || item.tags && item.tags.length > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-1.5 pt-1",
				children: [item.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: item.badgeVariant || "outline",
					className: "text-[10px] px-1.5 py-0 h-4 font-medium",
					children: item.badge
				}), item.tags?.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] text-muted-foreground/80 bg-muted px-1.5 py-0.5 rounded",
					children: tag
				}, tag))]
			})
		]
	});
}
var inviteStudent = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => data).handler(createSsrRpc("cb2bc7b71619bc7f5ab8988b41e90b0f1ef5e11e204b79be7d4323fd8cb8a016"));
var deleteStudent = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => data).handler(createSsrRpc("b8a9b83624769d32f6ff879d69c7123bb5a0ec48a60b89c6401b89e21dfaffcf"));
var assignSessionToStudent = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => data).handler(createSsrRpc("9dae41e4450e7d225a95f54de0a9f4215cd968978c40aaa1a6f2bd34b245df21"));
var assignProgramToStudent = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => data).handler(createSsrRpc("fbe9257f66fc24e9303909130388b83f464dfda6f22008648015fba87b3fead0"));
var unassign = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => data).handler(createSsrRpc("37e094e60a295214e1a09ccd583d3009d1f7ac9cba3f6232597b275841d5012f"));
var updateStudentMemory = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => data).handler(createSsrRpc("7ee1dc61dd380910b20451a74ed6d39b3bfd45dd56b89d2caab135301e3bff22"));
function AthleteMemoryPanel({ student }) {
	const qc = useQueryClient();
	const updateMemoryFn = useServerFn(updateStudentMemory);
	const [memory, setMemory] = (0, import_react.useState)((0, import_react.useMemo)(() => parseAthleteMemory(student.observacoes), [student.observacoes]));
	const [novaLesao, setNovaLesao] = (0, import_react.useState)("");
	const [novoEquipamento, setNovoEquipamento] = (0, import_react.useState)("");
	const [showPromptPreview, setShowPromptPreview] = (0, import_react.useState)(false);
	const [isSaving, setIsSaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMemory(parseAthleteMemory(student.observacoes));
	}, [student.id, student.observacoes]);
	const togglePresetLesao = (lesaoText) => {
		setMemory((prev) => {
			const updated = prev.lesoes.includes(lesaoText) ? prev.lesoes.filter((l) => l !== lesaoText) : [...prev.lesoes, lesaoText];
			return {
				...prev,
				lesoes: updated
			};
		});
	};
	const addCustomLesao = () => {
		const trimmed = novaLesao.trim();
		if (!trimmed) return;
		if (!memory.lesoes.includes(trimmed)) setMemory((prev) => ({
			...prev,
			lesoes: [...prev.lesoes, trimmed]
		}));
		setNovaLesao("");
	};
	const removeLesao = (idx) => {
		setMemory((prev) => ({
			...prev,
			lesoes: prev.lesoes.filter((_, i) => i !== idx)
		}));
	};
	const togglePresetEquipamento = (equipText) => {
		setMemory((prev) => {
			const updated = prev.equipamentos.includes(equipText) ? prev.equipamentos.filter((e) => e !== equipText) : [...prev.equipamentos, equipText];
			return {
				...prev,
				equipamentos: updated
			};
		});
	};
	const addCustomEquipamento = () => {
		const trimmed = novoEquipamento.trim();
		if (!trimmed) return;
		if (!memory.equipamentos.includes(trimmed)) setMemory((prev) => ({
			...prev,
			equipamentos: [...prev.equipamentos, trimmed]
		}));
		setNovoEquipamento("");
	};
	const removeEquipamento = (idx) => {
		setMemory((prev) => ({
			...prev,
			equipamentos: prev.equipamentos.filter((_, i) => i !== idx)
		}));
	};
	const handleCargaChange = (campo, valor) => {
		if (campo === "outrasCargas") {
			setMemory((prev) => ({
				...prev,
				cargas1rm: {
					...prev.cargas1rm,
					outrasCargas: valor || null
				}
			}));
			return;
		}
		const num = valor === "" ? null : Number(valor);
		setMemory((prev) => ({
			...prev,
			cargas1rm: {
				...prev.cargas1rm,
				[campo]: isNaN(num) ? null : num
			}
		}));
	};
	const handleSave = async () => {
		setIsSaving(true);
		try {
			const serialized = serializeAthleteMemory(memory);
			await updateMemoryFn({ data: {
				student_id: student.id,
				memory: serialized
			} });
			toast.success("Memória do atleta atualizada com sucesso!");
			qc.invalidateQueries({ queryKey: ["students"] });
		} catch (err) {
			toast.error(`Erro ao salvar memória: ${err.message || "Tente novamente"}`);
		} finally {
			setIsSaving(false);
		}
	};
	const formattedPromptPreview = (0, import_react.useMemo)(() => formatMemoryForPrompt(student.nome, memory), [student.nome, memory]);
	const countCargas = (0, import_react.useMemo)(() => {
		const c = memory.cargas1rm || {};
		return Object.entries(c).filter(([k, v]) => k !== "outrasCargas" && v !== null && v !== void 0 && v > 0).length;
	}, [memory.cargas1rm]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pt-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-background p-4 sm:p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/20 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 flex-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-foreground text-base",
								children: "Memória Persistente do Atleta"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "border-primary/40 text-primary text-[10px] font-mono",
								children: "IA Context Engine"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted-foreground leading-relaxed max-w-xl",
							children: [
								"Toda vez que a IA prescrever treinos para ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: student.nome }),
								", ela consultará automaticamente estas restrições, 1RMs, equipamentos e diretrizes técnicas."
							]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 self-end sm:self-center shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							className: "h-8 text-xs gap-1.5 cursor-pointer",
							onClick: () => setShowPromptPreview(!showPromptPreview),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5" }), showPromptPreview ? "Ocultar IA" : "Ver IA"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							className: "h-8 text-xs gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer",
							onClick: handleSave,
							disabled: isSaving,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-3.5 w-3.5" }), isSaving ? "Salvando..." : "Salvar Memória"]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap items-center gap-2 pt-3 border-t border-border/50 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "secondary",
							className: "gap-1 bg-muted/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "h-3 w-3 text-primary" }),
								"Nível: ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium capitalize",
									children: memory.nivelAtleta
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "secondary",
							className: `gap-1 ${memory.lesoes.length > 0 ? "bg-amber-500/10 text-amber-500 border-amber-500/30" : "bg-muted/60"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-3 w-3" }),
								memory.lesoes.length,
								" restrição(ões)"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "secondary",
							className: "gap-1 bg-muted/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, { className: "h-3 w-3 text-primary" }),
								memory.equipamentos.length,
								" equipamento(s)"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "secondary",
							className: "gap-1 bg-muted/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-primary" }),
								countCargas,
								" 1RM(s) cadastrado(s)"
							]
						})
					]
				})]
			}),
			showPromptPreview && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-4 bg-muted/30 border-dashed border-primary/30 space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs font-semibold text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Visão Semântica Injetada na IA"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] text-muted-foreground",
						children: "Injeção automática nos geradores"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "text-[11px] font-mono leading-relaxed bg-background/80 p-3 rounded-lg border border-border/60 overflow-x-auto text-muted-foreground whitespace-pre-wrap",
					children: formattedPromptPreview
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-xs font-medium",
						children: "Nível de Treinamento"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: memory.nivelAtleta,
						onValueChange: (val) => setMemory((prev) => ({
							...prev,
							nivelAtleta: val
						})),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							className: "h-9",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "iniciante",
								children: "Iniciante (menos de 6 meses)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "intermediario",
								children: "Intermediário (6 a 24 meses)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "avancado",
								children: "Avançado (2 a 5 anos)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "elite",
								children: "Elite / Competidor (+5 anos)"
							})
						] })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-xs font-medium",
						children: "Tempo de Prática Contínua (meses)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						min: 0,
						className: "h-9",
						placeholder: "Ex: 18",
						value: memory.tempoTreinoMeses ?? "",
						onChange: (e) => setMemory((prev) => ({
							...prev,
							tempoTreinoMeses: e.target.value ? Number(e.target.value) : null
						}))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 rounded-xl border border-border/70 p-4 bg-card/50",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-4 w-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-sm font-semibold text-foreground",
								children: "Lesões, Dores & Restrições Articulares"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-amber-500/90 font-medium",
							children: "A IA nunca prescreverá exercícios de risco"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Clique nas regiões abaixo para ativar rapidamente ou adicione um detalhe específico."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						children: COMMON_INJURIES_LIST.map((injury) => {
							const isSelected = memory.lesoes.includes(injury);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => togglePresetLesao(injury),
								className: `inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full border transition cursor-pointer ${isSelected ? "bg-amber-500/20 border-amber-500/60 text-amber-400 font-medium" : "bg-muted/40 border-border/60 text-muted-foreground hover:bg-muted"}`,
								children: [isSelected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3 opacity-60" }), injury]
							}, injury);
						})
					}),
					memory.lesoes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-[11px] font-semibold text-foreground uppercase tracking-wider",
							children: [
								"Restrições ativas para este aluno (",
								memory.lesoes.length,
								"):"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: memory.lesoes.map((lesao, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "outline",
								className: "gap-1.5 border-amber-500/40 bg-amber-500/10 text-amber-400 pr-1 py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: lesao }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => removeLesao(idx),
									className: "p-0.5 rounded-full hover:bg-amber-500/30 cursor-pointer",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
								})]
							}, idx))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 pt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							placeholder: "Ex: Hérnia discal L5-S1, evitar flexão sob carga pesada",
							value: novaLesao,
							onChange: (e) => setNovaLesao(e.target.value),
							onKeyDown: (e) => e.key === "Enter" && (e.preventDefault(), addCustomLesao()),
							className: "h-8 text-xs"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "secondary",
							size: "sm",
							onClick: addCustomLesao,
							className: "h-8 text-xs shrink-0 cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 mr-1" }), " Adicionar"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 rounded-xl border border-border/70 p-4 bg-card/50",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-sm font-semibold text-foreground",
								children: "Equipamentos Acessíveis ao Atleta"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-muted-foreground",
							children: "A IA usará apenas o que o atleta possui"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Marque tudo o que o atleta tem no box, academia ou home gym."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						children: COMMON_EQUIPMENT_LIST.map((equip) => {
							const isSelected = memory.equipamentos.includes(equip);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => togglePresetEquipamento(equip),
								className: `inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full border transition cursor-pointer ${isSelected ? "bg-primary/20 border-primary/60 text-primary font-medium" : "bg-muted/40 border-border/60 text-muted-foreground hover:bg-muted"}`,
								children: [isSelected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3 opacity-60" }), equip]
							}, equip);
						})
					}),
					memory.equipamentos.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-[11px] font-semibold text-foreground uppercase tracking-wider",
							children: [
								"Equipamentos selecionados (",
								memory.equipamentos.length,
								"):"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: memory.equipamentos.map((equip, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "outline",
								className: "gap-1.5 border-primary/40 bg-primary/10 text-primary pr-1 py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: equip }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => removeEquipamento(idx),
									className: "p-0.5 rounded-full hover:bg-primary/30 cursor-pointer",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
								})]
							}, idx))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 pt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							placeholder: "Ex: Kettlebell de 20kg e 24kg em casa",
							value: novoEquipamento,
							onChange: (e) => setNovoEquipamento(e.target.value),
							onKeyDown: (e) => e.key === "Enter" && (e.preventDefault(), addCustomEquipamento()),
							className: "h-8 text-xs"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "secondary",
							size: "sm",
							onClick: addCustomEquipamento,
							className: "h-8 text-xs shrink-0 cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 mr-1" }), " Adicionar"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 rounded-xl border border-border/70 p-4 bg-card/50",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-sm font-semibold text-foreground",
								children: "Cargas de Referência & 1RM"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-muted-foreground",
							children: "Base para cálculo de porcentagens na prescrição"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 pt-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-[11px] text-muted-foreground",
									children: "Agachamento Costas (kg)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									min: 0,
									placeholder: "Ex: 140",
									className: "h-8 text-xs",
									value: memory.cargas1rm.agachamentoCostasKg ?? "",
									onChange: (e) => handleCargaChange("agachamentoCostasKg", e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-[11px] text-muted-foreground",
									children: "Agachamento Frontal (kg)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									min: 0,
									placeholder: "Ex: 115",
									className: "h-8 text-xs",
									value: memory.cargas1rm.agachamentoFrontalKg ?? "",
									onChange: (e) => handleCargaChange("agachamentoFrontalKg", e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-[11px] text-muted-foreground",
									children: "Supino Reto (kg)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									min: 0,
									placeholder: "Ex: 100",
									className: "h-8 text-xs",
									value: memory.cargas1rm.supinoKg ?? "",
									onChange: (e) => handleCargaChange("supinoKg", e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-[11px] text-muted-foreground",
									children: "Levantamento Terra (kg)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									min: 0,
									placeholder: "Ex: 170",
									className: "h-8 text-xs",
									value: memory.cargas1rm.levantamentoTerraKg ?? "",
									onChange: (e) => handleCargaChange("levantamentoTerraKg", e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-[11px] text-muted-foreground",
									children: "Desenvolvimento Militar (kg)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									min: 0,
									placeholder: "Ex: 70",
									className: "h-8 text-xs",
									value: memory.cargas1rm.desenvolvimentoMilitarKg ?? "",
									onChange: (e) => handleCargaChange("desenvolvimentoMilitarKg", e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-[11px] text-muted-foreground",
									children: "Snatch / Arranco (kg)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									min: 0,
									placeholder: "Ex: 85",
									className: "h-8 text-xs",
									value: memory.cargas1rm.snatchKg ?? "",
									onChange: (e) => handleCargaChange("snatchKg", e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-[11px] text-muted-foreground",
									children: "Clean & Jerk (kg)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									min: 0,
									placeholder: "Ex: 105",
									className: "h-8 text-xs",
									value: memory.cargas1rm.cleanAndJerkKg ?? "",
									onChange: (e) => handleCargaChange("cleanAndJerkKg", e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-[11px] text-muted-foreground",
									children: "Snatch KB (kg)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									min: 0,
									placeholder: "Ex: 24",
									className: "h-8 text-xs",
									value: memory.cargas1rm.snatchKbKg ?? "",
									onChange: (e) => handleCargaChange("snatchKbKg", e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-[11px] text-muted-foreground",
									children: "Jerk KB (kg)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									min: 0,
									placeholder: "Ex: 2x24",
									className: "h-8 text-xs",
									value: memory.cargas1rm.jerkKbKg ?? "",
									onChange: (e) => handleCargaChange("jerkKbKg", e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-[11px] text-muted-foreground",
									children: "Long Cycle KB (kg)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									min: 0,
									placeholder: "Ex: 2x20",
									className: "h-8 text-xs",
									value: memory.cargas1rm.longCycleKbKg ?? "",
									onChange: (e) => handleCargaChange("longCycleKbKg", e.target.value)
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-[11px] text-muted-foreground",
							children: "Outras Cargas & Marcas"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							placeholder: "Ex: Barra fixa com +15kg, Remada curvada 85kg, Pace de 5km em 4:45/km",
							className: "h-8 text-xs mt-1",
							value: memory.cargas1rm.outrasCargas ?? "",
							onChange: (e) => handleCargaChange("outrasCargas", e.target.value)
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2 rounded-xl border border-border/70 p-4 bg-card/50",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-sm font-semibold text-foreground",
							children: "Diretrizes Fixas do Coach para a IA"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Instruções permanentes que a IA deve respeitar em qualquer treino montado para este aluno."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						placeholder: "Ex: Priorizar estabilização de core e ativação de glúteos no aquecimento; evitar exercícios com impacto alto repetitivo; foco em hipertrofia de membros superiores e dorsais; descanso mínimo de 75s entre séries pesadas.",
						rows: 3,
						className: "text-xs leading-relaxed",
						value: memory.diretrizesTreinador,
						onChange: (e) => setMemory((prev) => ({
							...prev,
							diretrizesTreinador: e.target.value
						}))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					className: "text-xs font-medium",
					children: "Estilo de Sessão & Preferências do Aluno (Opcional)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Ex: Gosta de treinos intensos com alta densidade, prefere circuitos no final da sessão",
					className: "h-9 text-xs",
					value: memory.estiloPreferido ?? "",
					onChange: (e) => setMemory((prev) => ({
						...prev,
						estiloPreferido: e.target.value
					}))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-end gap-3 pt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "default",
					className: "w-full sm:w-auto min-h-[40px] px-6 gap-2 bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-sm",
					onClick: handleSave,
					disabled: isSaving,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4" }), isSaving ? "Gravando Memória..." : "Salvar Memória do Atleta"]
				})
			})
		]
	});
}
function AlunosPage() {
	const qc = useQueryClient();
	const { data: students = [], isLoading } = useQuery({
		queryKey: ["students"],
		queryFn: async () => {
			const { data, error } = await supabase.from("students").select("id, nome, email, telefone, status, auth_user_id, observacoes, criado_em").order("nome");
			if (error) throw error;
			return data;
		}
	});
	const [selectedId, setSelectedId] = (0, import_react.useState)(null);
	const selected = students.find((s) => s.id === selectedId) ?? null;
	const [viewMode, setViewMode] = (0, import_react.useState)("list");
	const [athletePhases, setAthletePhases] = (0, import_react.useState)(() => {
		try {
			const saved = localStorage.getItem("athlete_kanban_phases");
			return saved ? JSON.parse(saved) : {};
		} catch {
			return {};
		}
	});
	const KANBAN_COLUMNS = [
		{
			id: "adaptacao",
			title: "Adaptação & Base",
			description: "Avaliação inicial e introdução",
			color: "bg-blue-500"
		},
		{
			id: "hipertrofia",
			title: "Hipertrofia / Volume",
			description: "Bloco acumulativo estrutural",
			color: "bg-emerald-500"
		},
		{
			id: "forca",
			title: "Força & Pico",
			description: "Intensificação e cargas máximas",
			color: "bg-amber-500"
		},
		{
			id: "deload",
			title: "Deload & Renovação",
			description: "Recuperação ativa e reteste",
			color: "bg-purple-500"
		}
	];
	const kanbanItems = (0, import_react.useMemo)(() => {
		return students.map((s, idx) => {
			let colId = athletePhases[s.id];
			if (!colId) if (s.status === "convidado") colId = "adaptacao";
			else {
				const defaultCols = [
					"adaptacao",
					"hipertrofia",
					"forca",
					"deload"
				];
				colId = defaultCols[idx % defaultCols.length];
			}
			return {
				id: s.id,
				columnId: colId,
				title: s.nome,
				description: s.email || void 0,
				badge: s.status,
				badgeVariant: s.status === "ativo" ? "default" : "outline",
				tags: s.telefone ? [s.telefone] : void 0
			};
		});
	}, [students, athletePhases]);
	const handleMoveAthlete = (studentId, _fromCol, toCol) => {
		setAthletePhases((prev) => {
			const next = {
				...prev,
				[studentId]: toCol
			};
			try {
				localStorage.setItem("athlete_kanban_phases", JSON.stringify(next));
			} catch {}
			return next;
		});
		const colName = KANBAN_COLUMNS.find((c) => c.id === toCol)?.title || toCol;
		const student = students.find((s) => s.id === studentId);
		toast.success(`${student?.nome || "Aluno"} movido para "${colName}"`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl min-w-0 px-3 py-4 sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold tracking-tight sm:text-3xl break-words",
					children: "Alunos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs sm:text-sm text-muted-foreground",
					children: "Convide alunos e libere programas/sessões para eles."
				})]
			}), students.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 self-start sm:self-auto flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center border rounded-lg p-0.5 bg-muted/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: viewMode === "list" ? "secondary" : "ghost",
						size: "sm",
						className: "h-8 px-2.5 gap-1.5 cursor-pointer",
						onClick: () => setViewMode("list"),
						title: "Visualização em Lista",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs",
							children: "Lista"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: viewMode === "kanban" ? "secondary" : "ghost",
						size: "sm",
						className: "h-8 px-2.5 gap-1.5 cursor-pointer",
						onClick: () => setViewMode("kanban"),
						title: "Visualização em Pipeline Kanban",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Columns3, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs",
							children: "Kanban"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InviteButton, { onDone: () => qc.invalidateQueries({ queryKey: ["students"] }) })]
			})]
		}), isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: [
					1,
					2,
					3,
					4
				].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "p-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-1/3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3 w-1/2" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-14 rounded-full" })]
					})
				}, n))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { className: "h-64 animate-pulse border-border/60 bg-muted/20" })]
		}) : students.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "flex flex-col items-center justify-center gap-3 border-dashed p-14 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-6 w-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-base font-semibold",
					children: "Nenhum aluno cadastrado ainda"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground max-w-sm",
					children: "Convide seus atletas para que eles acessem os treinos e acompanhem a execução pelo portal do aluno."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InviteButton, { onDone: () => qc.invalidateQueries({ queryKey: ["students"] }) })
				})
			]
		}) : viewMode === "kanban" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-lg border border-border/60 bg-muted/20 p-3 text-xs text-muted-foreground flex items-center justify-between gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Arraste os cards para mover os atletas entre as fases de periodização. Clique em um aluno para abrir suas prescrições e evolução." })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanbanBoard, {
					columns: KANBAN_COLUMNS,
					items: kanbanItems,
					onItemMove: handleMoveAthlete,
					onCardClick: (item) => setSelectedId(item.id)
				}),
				selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 pt-6 border-t",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-lg font-bold tracking-tight",
							children: ["Painel do Atleta: ", selected.nome]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: () => setSelectedId(null),
							children: "Fechar painel"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudentPanel, {
						student: selected,
						onDeleted: () => setSelectedId(null)
					}, selected.id)]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: students.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					onClick: () => setSelectedId(s.id),
					className: `cursor-pointer p-3 transition ${selectedId === s.id ? "border-primary" : ""}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate font-medium",
								children: s.nome
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-xs text-muted-foreground",
								children: s.email
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-secondary px-2 py-0.5 text-xs",
							children: s.status
						})]
					})
				}, s.id))
			}), selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudentPanel, {
				student: selected,
				onDeleted: () => setSelectedId(null)
			}, selected.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "flex items-center justify-center p-12 text-muted-foreground",
				children: "Selecione um aluno para gerenciar programas e sessões atribuídas."
			})]
		})]
	});
}
function InviteButton({ onDone }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [nome, setNome] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [telefone, setTelefone] = (0, import_react.useState)("");
	const [result, setResult] = (0, import_react.useState)(null);
	const invite = useServerFn(inviteStudent);
	const m = useMutation({
		mutationFn: async () => invite({ data: {
			nome,
			email,
			telefone
		} }),
		onSuccess: (r) => {
			onDone();
			setResult({
				email,
				tempPassword: r.tempPassword
			});
			if (r.alreadyExisted) toast.info("Usuário já existia; vinculado ao seu perfil.");
			else toast.success("Aluno convidado!");
			setNome("");
			setEmail("");
			setTelefone("");
		},
		onError: (e) => toast.error(e.message)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: (o) => {
			setOpen(o);
			if (!o) setResult(null);
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "mr-2 h-4 w-4" }), " Convidar aluno"] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Convidar aluno" }) }), result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm",
					children: "Envie estas credenciais para o aluno:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md border border-border bg-muted p-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "E-mail:" }),
						" ",
						result.email
					] }), result.tempPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Senha:" }),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: result.tempPassword })
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => {
								navigator.clipboard.writeText(result.tempPassword);
								toast.success("Copiado");
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3 w-3" })
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-muted-foreground",
						children: "Este e-mail já tinha conta. Peça para o aluno entrar com a senha existente."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Guarde agora — não mostraremos novamente."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						setOpen(false);
						setResult(null);
					},
					children: "Fechar"
				}) })
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault();
				m.mutate();
			},
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Nome" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					required: true,
					value: nome,
					onChange: (e) => setNome(e.target.value)
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "E-mail" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "email",
					required: true,
					value: email,
					onChange: (e) => setEmail(e.target.value)
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Telefone (opcional)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: telefone,
					onChange: (e) => setTelefone(e.target.value)
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: m.isPending,
					children: m.isPending ? "Convidando..." : "Convidar"
				}) })
			]
		})] })]
	});
}
function StudentPanel({ student, onDeleted }) {
	const qc = useQueryClient();
	const del = useServerFn(deleteStudent);
	const assignS = useServerFn(assignSessionToStudent);
	const assignP = useServerFn(assignProgramToStudent);
	const unassignFn = useServerFn(unassign);
	const { data: programs = [] } = useQuery({
		queryKey: ["programs-list"],
		queryFn: async () => {
			const { data, error } = await supabase.from("programs").select("id, titulo, metodologia").order("criado_em", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	const { data: sessions = [] } = useQuery({
		queryKey: ["sessions-list"],
		queryFn: async () => {
			const { data, error } = await supabase.from("sessions").select("id, titulo, numero_dia, data, program_week_id, program_weeks(program_id, programs(titulo))").order("criado_em", { ascending: false }).limit(200);
			if (error) throw error;
			return data;
		}
	});
	const { data: assignments = [] } = useQuery({
		queryKey: ["assignments", student.id],
		queryFn: async () => {
			const { data, error } = await supabase.from("assignments").select("id, session_id, program_id, program_week_id, liberado_em, sessions(titulo), programs(titulo)").eq("student_id", student.id).order("liberado_em", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	const [pickProgram, setPickProgram] = (0, import_react.useState)("");
	const [pickSession, setPickSession] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-start justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-lg font-semibold",
					children: student.nome
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm text-muted-foreground",
					children: student.email
				}),
				student.telefone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm text-muted-foreground",
					children: student.telefone
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "sm",
				onClick: async () => {
					if (!confirm("Remover este aluno?")) return;
					await del({ data: { id: student.id } });
					qc.invalidateQueries({ queryKey: ["students"] });
					onDeleted();
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			defaultValue: "prescricoes",
			className: "w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
					className: "mb-4 grid w-full grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "prescricoes",
							children: "Prescrições & Treinos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
							value: "timeline",
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "h-3.5 w-3.5" }), " Linha do Tempo"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
							value: "memoria_ia",
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "h-3.5 w-3.5 text-primary" }), " Memória IA"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
					value: "prescricoes",
					className: "space-y-4 focus-visible:outline-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "mb-2 block",
							children: "Liberar programa inteiro"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: pickProgram,
								onValueChange: setPickProgram,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "w-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Escolha um programa" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: programs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: p.id,
									children: p.titulo
								}, p.id)) })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								disabled: !pickProgram,
								className: "w-full sm:w-auto min-h-[40px] shrink-0 cursor-pointer",
								onClick: async () => {
									try {
										await assignP({ data: {
											student_id: student.id,
											program_id: pickProgram
										} });
										toast.success("Programa liberado");
										setPickProgram("");
										qc.invalidateQueries({ queryKey: ["assignments", student.id] });
									} catch (e) {
										toast.error(e.message);
									}
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1 h-4 w-4" }), " Liberar"]
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "mb-2 block",
							children: "Liberar sessão avulsa"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: pickSession,
								onValueChange: setPickSession,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "w-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Escolha uma sessão" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: sessions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
									value: s.id,
									children: [
										s.program_weeks?.programs?.titulo ?? "Sessão",
										" · Dia ",
										s.numero_dia,
										" ",
										s.titulo ? `— ${s.titulo}` : ""
									]
								}, s.id)) })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								disabled: !pickSession,
								className: "w-full sm:w-auto min-h-[40px] shrink-0 cursor-pointer",
								onClick: async () => {
									try {
										await assignS({ data: {
											student_id: student.id,
											session_id: pickSession
										} });
										toast.success("Sessão liberada");
										setPickSession("");
										qc.invalidateQueries({ queryKey: ["assignments", student.id] });
									} catch (e) {
										toast.error(e.message);
									}
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1 h-4 w-4" }), " Liberar"]
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 text-sm font-medium",
							children: [
								"Liberado (",
								assignments.length,
								")"
							]
						}), assignments.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-md border border-dashed border-border p-4 text-center text-sm text-muted-foreground",
							children: "Nada liberado ainda."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: assignments.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-md border border-border p-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									a.program_id ? `📚 Programa: ${a.programs?.titulo ?? "—"}` : null,
									a.session_id ? `🏋️ Sessão: ${a.sessions?.titulo ?? "—"}` : null,
									a.program_week_id ? `📅 Semana` : null
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "sm",
									onClick: async () => {
										await unassignFn({ data: { id: a.id } });
										qc.invalidateQueries({ queryKey: ["assignments", student.id] });
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
								})]
							}, a.id))
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
					value: "timeline",
					className: "focus-visible:outline-none pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Jornada & Marcos do Atleta"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "outline",
							className: "text-[10px] font-mono",
							children: [assignments.length + 1, " evento(s)"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Timeline, {
						className: "py-2",
						children: [assignments.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TimelineItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelinePoint, {
							variant: a.program_id ? "primary" : "success",
							children: a.program_id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TimelineContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2 flex-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineTitle, { children: a.program_id ? "Programa Atribuído" : "Sessão Avulsa Prescrita" }), a.liberado_em && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineTime, { children: new Date(a.liberado_em).toLocaleDateString("pt-BR", {
								day: "2-digit",
								month: "short",
								hour: "2-digit",
								minute: "2-digit"
							}) })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineDescription, { children: a.program_id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: a.programs?.titulo ?? "Programa" }), " disponibilizado com periodização completa."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: a.sessions?.titulo ?? "Sessão" }), " liberada para execução imediata no app."] }) })] })] }, a.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TimelineItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelinePoint, {
							variant: "default",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TimelineContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2 flex-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineTitle, { children: "Entrada no Sistema Híbrido" }), student.criado_em && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineTime, { children: new Date(student.criado_em).toLocaleDateString("pt-BR", {
								day: "2-digit",
								month: "short",
								year: "numeric"
							}) })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TimelineDescription, { children: [
							"Atleta cadastrado na assessoria do Coach Montanha com status",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground",
								children: student.status ?? "ativo"
							}),
							"."
						] })] })] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "memoria_ia",
					className: "focus-visible:outline-none pt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AthleteMemoryPanel, { student })
				})
			]
		})]
	});
}
//#endregion
export { AlunosPage as component };
