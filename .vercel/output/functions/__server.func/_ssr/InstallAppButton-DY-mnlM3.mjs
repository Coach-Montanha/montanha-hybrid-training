import { o as __toESM } from "../_runtime.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-CCQEfgNs.mjs";
import { A as Share, C as Sparkles, Mt as Download, Ut as CircleCheck, w as Smartphone, x as SquarePlus } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-SwVf5DHm.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as usePwaInstall } from "./pwa-CO9oSDi1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/InstallAppButton-DY-mnlM3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function InstallAppButton({ className = "", variant = "outline", size = "sm", showLabel = true }) {
	const { isInstalled, isIOS, hasNativePrompt, promptInstall } = usePwaInstall();
	const [showIosModal, setShowIosModal] = (0, import_react.useState)(false);
	if (isInstalled) return null;
	const handleInstallClick = async () => {
		if (isIOS) {
			setShowIosModal(true);
			return;
		}
		if (hasNativePrompt) {
			const { outcome } = await promptInstall();
			if (outcome === "accepted") toast.success("Aplicativo Coach Montanha instalado com sucesso!");
		} else setShowIosModal(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		type: "button",
		variant,
		size,
		onClick: handleInstallClick,
		className: `cursor-pointer gap-1.5 font-medium border-primary/40 bg-primary/5 hover:bg-primary/15 text-primary hover:text-primary transition-all duration-200 ${className}`,
		title: "Instalar aplicativo Coach Montanha no seu aparelho",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex items-center justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "absolute -top-0.5 -right-0.5 flex h-1.5 w-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" })]
			})]
		}), showLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-xs sm:text-sm font-semibold whitespace-nowrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline sm:hidden",
				children: "Instalar"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden sm:inline",
				children: "Instalar App"
			})]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: showIosModal,
		onOpenChange: setShowIosModal,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-md bg-card border-border text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary mb-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-6 w-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-center text-xl font-bold",
						children: "Instale o Coach Montanha"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-center text-sm text-muted-foreground",
						children: "Tenha acesso instantâneo sem barra de navegação, com suporte offline e experiência 100% nativa."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 my-2 text-sm",
					children: [isIOS ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 rounded-lg border border-border/80 bg-muted/40 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-semibold text-foreground flex items-center gap-1.5 text-xs uppercase tracking-wider text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " No Safari do iPhone / iPad:"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "space-y-2.5 text-muted-foreground text-xs leading-relaxed list-decimal list-inside",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Toque no botão ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-semibold text-foreground inline-flex items-center gap-1 bg-background px-1.5 py-0.5 rounded border",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share, { className: "h-3 w-3 text-sky-400" }), " Compartilhar"]
									}),
									" na barra inferior do Safari."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Role a lista e toque em ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-semibold text-foreground inline-flex items-center gap-1 bg-background px-1.5 py-0.5 rounded border",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePlus, { className: "h-3 w-3 text-emerald-400" }), " Adicionar à Tela de Início"]
									}),
									"."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Toque em ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-foreground",
										children: "\"Adicionar\""
									}),
									" no canto superior direito para concluir."
								] })
							]
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 rounded-lg border border-border/80 bg-muted/40 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-semibold text-foreground flex items-center gap-1.5 text-xs uppercase tracking-wider text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Como instalar no seu navegador:"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "space-y-2.5 text-muted-foreground text-xs leading-relaxed list-decimal list-inside",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Abra o menu de opções do navegador ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-foreground",
										children: "(três pontinhos no topo ou barra de endereços)"
									}),
									"."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Clique ou toque na opção ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-foreground",
										children: "\"Instalar aplicativo\""
									}),
									" ou ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-foreground",
										children: "\"Adicionar à tela inicial\""
									}),
									"."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Confirme para ter o Coach Montanha instalado como aplicativo independente." })
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2 text-xs text-muted-foreground pt-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Carregamento ultrarrápido" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Funciona offline" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tela cheia sem bordas" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Timers e áudios em 1 toque" })]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					className: "w-full cursor-pointer mt-2",
					onClick: () => setShowIosModal(false),
					children: "Entendido"
				})
			]
		})
	})] });
}
//#endregion
export { InstallAppButton as t };
