import { o as __toESM } from "../_runtime.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { r as cn } from "./button-CCQEfgNs.mjs";
import { Yt as Check } from "../_libs/lucide-react.mjs";
import { u as createServerFn } from "./esm-BJY6H9OB.mjs";
import { t as createSsrRpc } from "./ssr-rpc-DsWtVjPG.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-CHOPR5bi.mjs";
import { c as object, r as _enum, s as number, u as string } from "../_libs/tanstack__zod-adapter+zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gerador.functions-C5JHuKjv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Stepper = import_react.forwardRef(({ steps, activeStep, onStepClick, orientation = "horizontal", variant = "default", clickable = true, className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		ref,
		"aria-label": "Progresso das etapas",
		className: cn("w-full", orientation === "vertical" ? "flex flex-col space-y-4" : "block", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: cn("flex items-center", orientation === "vertical" ? "flex-col items-start gap-4" : "flex-row justify-between gap-2 overflow-x-auto pb-2 no-scrollbar"),
			children: steps.map((step, index) => {
				const isCompleted = activeStep > index;
				const isCurrent = activeStep === index;
				const isUpcoming = activeStep < index;
				const isClickable = clickable && (isCompleted || isCurrent || index === activeStep + 1);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: cn("flex-1 relative flex items-center min-w-0", orientation === "vertical" ? "w-full" : "items-center"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						role: clickable ? "button" : void 0,
						tabIndex: isClickable ? 0 : void 0,
						onClick: () => {
							if (isClickable && onStepClick) onStepClick(index);
						},
						onKeyDown: (e) => {
							if (isClickable && onStepClick && (e.key === "Enter" || e.key === " ")) {
								e.preventDefault();
								onStepClick(index);
							}
						},
						className: cn("group flex items-center gap-3 w-full text-left transition-colors rounded-lg p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", isClickable ? "cursor-pointer hover:bg-muted/40" : "cursor-default opacity-70"),
						"aria-current": isCurrent ? "step" : void 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-all duration-200 ring-offset-background", isCompleted && "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2", isCurrent && "border-2 border-primary bg-background text-primary font-bold shadow-sm ring-2 ring-primary/30 ring-offset-2", isUpcoming && "border border-muted-foreground/30 bg-muted/30 text-muted-foreground"),
							children: isCompleted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 stroke-[2.5]" }) : step.icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: index + 1 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("text-xs sm:text-sm font-medium leading-none truncate transition-colors", isCurrent ? "text-primary font-bold" : isCompleted ? "text-foreground" : "text-muted-foreground"),
									children: step.title
								}), step.optional && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-muted-foreground/80 font-normal",
									children: "(Opcional)"
								})]
							}), step.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("text-[11px] truncate mt-0.5 transition-colors hidden sm:block", isCurrent ? "text-muted-foreground" : "text-muted-foreground/60"),
								children: step.description
							})]
						})]
					}), index < steps.length - 1 && orientation === "horizontal" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": "true",
						className: cn("hidden md:block h-0.5 flex-1 mx-2 rounded-full transition-colors duration-200", isCompleted ? "bg-primary" : "bg-border/60")
					})]
				}, step.id || index);
			})
		})
	});
});
Stepper.displayName = "Stepper";
var inputSchema = object({
	program_id: string().uuid().optional(),
	metodologia: _enum([
		"hibrido",
		"kettlebell_sport",
		"kettlebell_fitness",
		"levantamento_peso",
		"musculacao"
	]),
	titulo: string().min(1).default("Programa gerado"),
	escopo: _enum([
		"sessao",
		"semana",
		"mes",
		"ano"
	]),
	data_inicio: string().regex(/^\d{4}-\d{2}-\d{2}$/),
	dias_por_semana: number().int().min(1).max(7).default(3)
});
var gerarTreino = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((raw) => inputSchema.parse(raw)).handler(createSsrRpc("37d397e2c4673dbd39852daff1bf57bc74eb73391c3f8bd020f3d8435cef1355"));
//#endregion
export { gerarTreino as n, Stepper as t };
