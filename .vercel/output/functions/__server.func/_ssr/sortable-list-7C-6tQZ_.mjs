import { o as __toESM } from "../_runtime.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { r as cn } from "./button-CCQEfgNs.mjs";
import { _ as CSS, a as PointerSensor, g as useSensors, h as useSensor, i as KeyboardSensor, o as TouchSensor, s as closestCenter, t as DndContext } from "../_libs/@dnd-kit/core+[...].mjs";
import { ht as GripVertical } from "../_libs/lucide-react.mjs";
import { a as Trigger, i as Root2, n as Content2, r as Portal } from "../_libs/@radix-ui/react-popover+[...].mjs";
import { n as restrictToVerticalAxis, t as restrictToParentElement } from "../_libs/dnd-kit__modifiers.mjs";
import { a as useSortable, i as sortableKeyboardCoordinates, o as verticalListSortingStrategy, r as rectSortingStrategy, t as SortableContext } from "../_libs/dnd-kit__sortable.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sortable-list-7C-6tQZ_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Popover = Root2;
var PopoverTrigger = Trigger;
var PopoverContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)", className),
	...props
}) }));
PopoverContent.displayName = Content2.displayName;
/** Classe única do handle de arraste — mesma personalidade em toda a app. */
var dragHandleClass = cn("inline-flex h-8 w-8 shrink-0 cursor-grab touch-none items-center justify-center rounded-md", "text-muted-foreground transition-[color,background-color,box-shadow] duration-200", "hover:bg-accent hover:text-accent-foreground active:cursor-grabbing", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", "disabled:pointer-events-none disabled:opacity-40");
function ptAnnouncements(label) {
	return {
		onDragStart: ({ active }) => `${label} ${String(active.id)} agarrado. Use as setas para mover e Espaço para soltar.`,
		onDragOver: ({ over }) => over ? `Movendo sobre a posição de ${String(over.id)}.` : "Fora de uma área válida.",
		onDragEnd: ({ over }) => over ? `Solto na posição de ${String(over.id)}.` : "Movimento cancelado.",
		onDragCancel: () => "Movimento cancelado, posição original mantida."
	};
}
function useSortableSensors() {
	return useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 4 } }), useSensor(TouchSensor, { activationConstraint: {
		delay: 160,
		tolerance: 8
	} }), useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }));
}
function SortableList({ ids, onReorder, label = "Item", axis = "vertical", children }) {
	const sensors = useSortableSensors();
	function handleEnd(event) {
		const { active, over } = event;
		if (!over || active.id === over.id) return;
		onReorder(String(active.id), String(over.id));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DndContext, {
		sensors,
		collisionDetection: closestCenter,
		onDragEnd: handleEnd,
		accessibility: { announcements: ptAnnouncements(label) },
		modifiers: axis === "vertical" ? [restrictToVerticalAxis, restrictToParentElement] : void 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableContext, {
			items: ids,
			strategy: axis === "vertical" ? verticalListSortingStrategy : rectSortingStrategy,
			children
		})
	});
}
/**
* Linha ordenável com handle dedicado (não briga com scroll no toque).
* `children` recebe o estado de arraste para ajustes finos de estilo.
*/
function SortableRow({ id, className, contentClassName, handleLabel = "Reordenar", children, disabled }) {
	const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging, isOver } = useSortable({
		id,
		disabled
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: setNodeRef,
		style: {
			transform: CSS.Transform.toString(transform ? {
				...transform,
				scaleX: 1,
				scaleY: 1
			} : null),
			transition: transition ?? "transform 200ms cubic-bezier(0.2,0,0,1)"
		},
		className: cn("group/row relative flex items-center gap-2 rounded-lg border bg-card transition-[border-color,box-shadow,background-color] duration-200", isDragging ? "z-20 scale-[1.015] border-primary/60 shadow-lg shadow-primary/10" : "border-border/60 hover:border-primary/40", isOver && !isDragging && "ring-2 ring-primary/40 ring-offset-1 ring-offset-background", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			ref: setActivatorNodeRef,
			...attributes,
			...listeners,
			disabled,
			"aria-label": handleLabel,
			title: `${handleLabel} — arraste ou use Espaço + setas`,
			className: dragHandleClass,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "h-4 w-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("flex min-w-0 flex-1 items-center gap-2", contentClassName),
			children
		})]
	});
}
//#endregion
export { SortableRow as a, useSortableSensors as c, SortableList as i, PopoverContent as n, dragHandleClass as o, PopoverTrigger as r, ptAnnouncements as s, Popover as t };
