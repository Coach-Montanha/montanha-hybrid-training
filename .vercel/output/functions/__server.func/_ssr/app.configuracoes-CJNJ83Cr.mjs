import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BxRH54s6.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { r as cn, t as Button } from "./button-CCQEfgNs.mjs";
import { _ as CSS, a as PointerSensor, g as useSensors, h as useSensor, s as closestCenter, t as DndContext } from "../_libs/@dnd-kit/core+[...].mjs";
import { C as Sparkles, Ct as FileSpreadsheet, D as ShieldOff, Dt as Eye, E as Shield, F as Search, Ft as Copy, G as Palette, Gt as ChevronUp, Jt as ChevronDown, L as RotateCcw, Lt as CloudUpload, M as Settings, Mt as Download, Ot as EyeOff, P as Server, Pt as Database, R as RefreshCw, St as FileText, T as SlidersHorizontal, Tt as FileImage, Ut as CircleCheck, V as Pencil, Wt as CircleAlert, Yt as Check, a as Wind, bt as Flame, cn as Activity, ct as KeyRound, h as Trash2, ht as GripVertical, i as Wrench, it as ListChecks, jt as Dumbbell, lt as Info, p as Upload, r as X, s as WandSparkles, st as Layers, tt as LoaderCircle, wt as FilePlay, xt as File, yt as FolderArchive, z as Plus } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-SwVf5DHm.mjs";
import { t as Input } from "./input-DoD5W07l.mjs";
import { t as Label } from "./label-B1jF9p8Y.mjs";
import { t as Textarea } from "./textarea-Dfe41XSO.mjs";
import { t as Badge } from "./badge-Bt-nVIZo.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-B7RuMzGd.mjs";
import { a as useSortable, n as arrayMove, o as verticalListSortingStrategy, t as SortableContext } from "../_libs/dnd-kit__sortable.mjs";
import { l as keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as ENABLED_FORMATS, r as METHODOLOGY_LABEL, t as BLOCK_FORMAT_LABEL } from "./methodology-DF-HMT6m.mjs";
import { S as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as createServerFn } from "./esm-BJY6H9OB.mjs";
import { n as useServerFn, t as createSsrRpc } from "./ssr-rpc-DsWtVjPG.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-CHOPR5bi.mjs";
import { c as object, u as string } from "../_libs/tanstack__zod-adapter+zod.mjs";
import { a as useSetTypeRegistry } from "./set-type-registry-BN6pSciu.mjs";
import { t as useFormatRegistry } from "./format-registry-CPHaJypP.mjs";
import { t as Switch } from "./switch-C6cVMin1.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Card$1 } from "./card-Bav9nr75.mjs";
import { t as Progress } from "./progress-Rwu-UcSt.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-BiHV7YXM.mjs";
import { n as setStoredTheme, t as getStoredTheme } from "./theme-C4REE9V2.mjs";
import { t as useCoach } from "./use-coach-B0Sg5_sT.mjs";
import { t as Skeleton } from "./skeleton-DLRLwmh_.mjs";
import { a as SheetTitle, i as SheetHeader, n as SheetContent, r as SheetDescription, t as Sheet } from "./sheet-I2vVf37L.mjs";
import { a as saveGeneratorPrefs, i as listEquipamentos, n as getExerciciosByIds, o as searchExercicios, r as getGeneratorPrefs, t as countExercicios } from "./generator-prefs.functions-VkZdfEVy.mjs";
import { t as Checkbox } from "./checkbox-BvhzXIX4.mjs";
import { a as AlertDialogDescription, c as AlertDialogTitle, i as AlertDialogContent, l as ScrollArea, n as AlertDialogAction, o as AlertDialogFooter, r as AlertDialogCancel, s as AlertDialogHeader, t as AlertDialog, u as Slider } from "./slider-DOPtNy4x.mjs";
import { t as Route } from "./app.configuracoes-6JaVC33m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.configuracoes-CJNJ83Cr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var listApiKeys = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("9c16a1334f173e5502a2837ee3bf6872ea4ce17caaf726fe6253f73e9026a7a4"));
var createApiKey = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => object({ nome: string().trim().min(1).max(60).optional() }).parse(data ?? {})).handler(createSsrRpc("18adb0d08f035bca242326a836cf9ede60aec85479d77901068de5e252620893"));
var revokeApiKey = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => object({ id: string().uuid() }).parse(data)).handler(createSsrRpc("ef1b8419836a0f686f46d144e74f00f36776c58fb73f90458b37bd6ce8efe04e"));
function PanelHeader({ icon: Icon, title, description, aside }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-start gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-[18px] w-[18px]" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "truncate text-lg font-semibold tracking-tight",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-relaxed text-muted-foreground",
					children: description
				})]
			})]
		}), aside ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "shrink-0 pt-1",
			children: aside
		}) : null]
	});
}
function useCopy() {
	const [copied, setCopied] = (0, import_react.useState)(null);
	return {
		copied,
		copy: async (value, id) => {
			try {
				await navigator.clipboard.writeText(value);
				setCopied(id);
				setTimeout(() => setCopied((c) => c === id ? null : c), 1600);
			} catch {
				toast.error("Não foi possível copiar");
			}
		}
	};
}
function CopyButton({ value, id, label = "Copiar" }) {
	const { copied, copy } = useCopy();
	const done = copied === id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		type: "button",
		variant: "outline",
		size: "sm",
		onClick: () => copy(value, id),
		className: "shrink-0 gap-1.5 transition-colors duration-200",
		children: [done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden sm:inline",
			children: done ? "Copiado" : label
		})]
	});
}
var fmt = (iso) => iso ? new Date(iso).toLocaleDateString("pt-BR", {
	day: "2-digit",
	month: "short",
	year: "numeric"
}) : "—";
function ApiPanel() {
	const qc = useQueryClient();
	const list = useServerFn(listApiKeys);
	const create = useServerFn(createApiKey);
	const revoke = useServerFn(revokeApiKey);
	const [nome, setNome] = (0, import_react.useState)("");
	const [freshKey, setFreshKey] = (0, import_react.useState)(null);
	const [toRevoke, setToRevoke] = (0, import_react.useState)(null);
	const keys = useQuery({
		queryKey: ["api-keys"],
		queryFn: () => list({})
	});
	const createMut = useMutation({
		mutationFn: () => create({ data: { nome: nome.trim() || void 0 } }),
		onSuccess: (res) => {
			setFreshKey(res.key);
			setNome("");
			qc.invalidateQueries({ queryKey: ["api-keys"] });
		},
		onError: (e) => toast.error(e?.message ?? "Falha ao gerar a chave")
	});
	const revokeMut = useMutation({
		mutationFn: (id) => revoke({ data: { id } }),
		onSuccess: () => {
			toast.success("Chave revogada");
			qc.invalidateQueries({ queryKey: ["api-keys"] });
		},
		onError: (e) => toast.error(e?.message ?? "Falha ao revogar")
	});
	const origin = typeof window === "undefined" ? "" : window.location.origin;
	const rows = keys.data ?? [];
	const ativas = rows.filter((k) => !k.revoked_at).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHeader, {
			icon: KeyRound,
			title: "Chave da API",
			description: "Gere chaves para consumir os endpoints públicos de programas. A chave completa aparece uma única vez.",
			aside: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
				variant: "secondary",
				className: "tabular-nums",
				children: [
					ativas,
					" ativa",
					ativas === 1 ? "" : "s"
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid max-w-3xl gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card$1, {
					className: "space-y-5 p-5 md:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold tracking-tight",
							children: "Nova chave"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs leading-relaxed text-muted-foreground",
							children: "256 bits aleatórios, guardados apenas como impressão digital — nem o app consegue lê-la depois."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 sm:flex-row sm:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1 space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "api-key-nome",
								className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
								children: "Nome (opcional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "api-key-nome",
								placeholder: "Integração com o site",
								value: nome,
								maxLength: 60,
								onChange: (e) => setNome(e.target.value)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => createMut.mutate(),
							disabled: createMut.isPending,
							className: "sm:min-w-[170px]",
							children: createMut.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), " Gerando…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " Gerar chave"] })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card$1, {
					className: "p-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-b border-border px-5 py-4 md:px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold tracking-tight",
							children: "Chaves emitidas"
						})
					}), keys.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 p-5 md:p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-12 w-full rounded-lg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-12 w-full rounded-lg" })]
					}) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-5 py-10 text-center text-sm text-muted-foreground md:px-6",
						children: "Nenhuma chave emitida ainda."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-border",
						children: rows.map((k) => {
							const revogada = Boolean(k.revoked_at);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex flex-col gap-3 px-5 py-4 transition-colors duration-200 hover:bg-accent/30 sm:flex-row sm:items-center sm:justify-between md:px-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate text-sm font-medium",
												children: k.nome
											}), revogada ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "outline",
												className: "text-muted-foreground",
												children: "revogada"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												className: "bg-primary/15 text-primary hover:bg-primary/15",
												children: "ativa"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-mono text-xs text-muted-foreground",
											children: [
												k.key_prefix,
												"••••",
												k.last4
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground",
											children: [
												"Criada em ",
												fmt(k.created_at),
												" · último uso ",
												fmt(k.last_used_at)
											]
										})
									]
								}), !revogada && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "ghost",
									size: "sm",
									onClick: () => setToRevoke(k.id),
									className: "shrink-0 gap-1.5 text-destructive transition-colors duration-200 hover:bg-destructive/10 hover:text-destructive",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldOff, { className: "h-3.5 w-3.5" }), " Revogar"]
								})]
							}, k.id);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card$1, {
					className: "space-y-4 p-5 md:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold tracking-tight",
							children: "Como usar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs leading-relaxed text-muted-foreground",
							children: [
								"Envie a chave no header ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono",
									children: "x-api-key"
								}),
								"."
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: [
							{
								path: "/api/public/programs",
								desc: "Listar programas"
							},
							{
								path: "/api/public/programs/:id",
								desc: "Detalhes de um programa"
							},
							{
								path: "/api/public/exercises",
								desc: "Banco de Exercícios (Biblioteca)"
							}
						].map(({ path, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-lg border border-border bg-muted/40 px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										className: "shrink-0 font-mono text-[10px]",
										children: "GET"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("code", {
										className: "min-w-0 truncate text-xs text-muted-foreground",
										children: [origin, path]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-muted-foreground/70 mt-0.5",
									children: desc
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, {
								value: `${origin}${path}`,
								id: path
							})]
						}, path))
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: Boolean(freshKey),
			onOpenChange: (o) => !o && setFreshKey(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Copie sua chave agora" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Este é o único momento em que a chave completa é exibida. Guarde-a em local seguro." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-lg border border-border bg-muted/50 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
						className: "min-w-0 flex-1 break-all font-mono text-xs",
						children: freshKey
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, {
						value: freshKey ?? "",
						id: "fresh"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setFreshKey(null),
					children: "Já guardei"
				}) })
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
			open: Boolean(toRevoke),
			onOpenChange: (o) => !o && setToRevoke(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, { children: "Revogar esta chave?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, { children: "Qualquer integração usando esta chave deixa de funcionar imediatamente. A ação não pode ser desfeita." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: "Cancelar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
				className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
				onClick: () => {
					if (toRevoke) revokeMut.mutate(toRevoke);
					setToRevoke(null);
				},
				children: "Revogar"
			})] })] })
		})
	] });
}
function MarcaPanel() {
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [coachId, setCoachId] = (0, import_react.useState)();
	const [logoUrl, setLogoUrl] = (0, import_react.useState)(null);
	const [corPrimaria, setCorPrimaria] = (0, import_react.useState)("#F26B1F");
	const [corSecundaria, setCorSecundaria] = (0, import_react.useState)("#0F1115");
	const [rodape, setRodape] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		(async () => {
			const { data } = await supabase.from("coaches").select("id, logo_url, cor_primaria, cor_secundaria, rodape_export").maybeSingle();
			if (data) {
				setCoachId(data.id);
				setLogoUrl(data.logo_url);
				setCorPrimaria(data.cor_primaria ?? "#F26B1F");
				setCorSecundaria(data.cor_secundaria ?? "#0F1115");
				setRodape(data.rodape_export ?? "");
			}
			setLoading(false);
		})();
	}, []);
	async function onUpload(file) {
		if (!coachId) return;
		setUploading(true);
		try {
			const ext = file.name.split(".").pop() ?? "png";
			const path = `${coachId}/logo-${Date.now()}.${ext}`;
			const { error: ue } = await supabase.storage.from("coach-branding").upload(path, file, { upsert: true });
			if (ue) throw ue;
			const { data: signed } = await supabase.storage.from("coach-branding").createSignedUrl(path, 3600 * 24 * 365);
			setLogoUrl(signed?.signedUrl ?? null);
			toast.success("Logo enviada");
		} catch (e) {
			toast.error(e.message);
		} finally {
			setUploading(false);
		}
	}
	async function save() {
		setSaving(true);
		try {
			const { error } = await supabase.from("coaches").update({
				logo_url: logoUrl,
				cor_primaria: corPrimaria,
				cor_secundaria: corSecundaria,
				rodape_export: rodape || null
			}).eq("id", coachId);
			if (error) throw error;
			toast.success("Marca salva");
		} catch (e) {
			toast.error(e.message);
		} finally {
			setSaving(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-24 w-full rounded-xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-40 w-full rounded-xl" })]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card$1, {
		className: "max-w-2xl space-y-8 border-0 bg-transparent p-0 shadow-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
					children: "Logo"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 sm:flex-row sm:items-center",
					children: [logoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logoUrl,
						alt: "Logo do treinador",
						className: "h-16 w-16 shrink-0 rounded-lg border border-border bg-card object-contain p-1.5"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-16 w-16 shrink-0 place-items-center rounded-lg border border-dashed border-border/80 text-[11px] text-muted-foreground",
						children: "sem logo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							accept: "image/*",
							className: "sr-only",
							onChange: (e) => {
								const f = e.target.files?.[0];
								if (f) onUpload(f);
								e.target.value = "";
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							disabled: uploading,
							className: "transition-colors duration-200",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [uploading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "mr-2 h-4 w-4" }), uploading ? "Enviando…" : "Enviar logo"] })
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [{
					label: "Cor primária",
					value: corPrimaria,
					set: setCorPrimaria
				}, {
					label: "Cor secundária",
					value: corSecundaria,
					set: setCorSecundaria
				}].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
						children: c.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "color",
							"aria-label": c.label,
							value: c.value,
							onChange: (e) => c.set(e.target.value),
							className: "h-10 w-14 shrink-0 cursor-pointer p-1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: c.value,
							onChange: (e) => c.set(e.target.value),
							className: "font-mono text-sm"
						})]
					})]
				}, c.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
						children: "Rodapé"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "@seuinstagram · seusite.com",
						value: rodape,
						onChange: (e) => setRodape(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs leading-relaxed text-muted-foreground",
						children: "Exibido no pé de cada página exportada."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: save,
				disabled: saving,
				className: "w-full sm:w-auto sm:min-w-[180px]",
				children: saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), " Salvando…"] }) : "Salvar marca"
			})
		]
	}) });
}
function AparenciaPanel() {
	const [activeTheme, setActiveTheme] = (0, import_react.useState)("padrao");
	(0, import_react.useEffect)(() => {
		setActiveTheme(getStoredTheme());
	}, []);
	const handleThemeChange = (theme) => {
		setActiveTheme(theme);
		setStoredTheme(theme);
		const themeName = theme === "pulse" ? "Pulse" : theme === "midnight" ? "Midnight" : "Padrão";
		toast.success(`Tema ${themeName} aplicado`);
		window.location.reload();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeCard, {
				label: "Padrão",
				description: "O visual clássico do Coach Montanha.",
				isActive: activeTheme === "padrao",
				onClick: () => handleThemeChange("padrao"),
				colors: [
					"#F26B1F",
					"#0F1115",
					"#F5F5F4"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeCard, {
				label: "Pulse",
				description: "Visual moderno com bordas arredondadas e alto contraste.",
				isActive: activeTheme === "pulse",
				onClick: () => handleThemeChange("pulse"),
				colors: [
					"#FF6B00",
					"#0A0A0C",
					"#18181C"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeCard, {
				label: "Midnight",
				description: "Atmosfera dark fintech com canvas ink-navy, brilho violeta/magenta e controle de alta precisão.",
				isActive: activeTheme === "midnight",
				onClick: () => handleThemeChange("midnight"),
				colors: [
					"#6958E2",
					"#7317D5",
					"#050A14",
					"#3898EC"
				]
			})
		]
	});
}
function ThemeCard({ label, description, isActive, onClick, colors }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: cn("relative flex flex-col items-start gap-3 rounded-2xl border-2 p-4 text-left transition-all hover:border-primary/50", isActive ? "border-primary bg-primary/5 shadow-md" : "border-border bg-card"),
		children: [
			isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1.5",
				children: colors.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-6 w-6 rounded-full border border-white/10",
					style: { backgroundColor: c }
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "font-bold tracking-tight",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: description
			})] })
		]
	});
}
var COACH_FILES_BUCKET = "coach-files";
function useCoachFiles() {
	const { data: coach } = useCoach();
	return useQuery({
		queryKey: ["coach-files", coach?.id],
		enabled: !!coach,
		queryFn: async () => {
			const { data, error } = await supabase.storage.from(COACH_FILES_BUCKET).list(coach.id, {
				limit: 200,
				sortBy: {
					column: "created_at",
					order: "desc"
				}
			});
			if (error) throw error;
			return (data ?? []).filter((f) => f.name !== ".emptyFolderPlaceholder");
		}
	});
}
function formatBytes(n) {
	if (!n) return "0 B";
	const units = [
		"B",
		"KB",
		"MB",
		"GB"
	];
	const i = Math.min(units.length - 1, Math.floor(Math.log(n) / Math.log(1024)));
	const v = n / Math.pow(1024, i);
	return `${v.toFixed(v < 10 && i > 0 ? 1 : 0)} ${units[i]}`;
}
function formatFileSize(bytes) {
	if (!bytes || bytes === 0) return "0 B";
	const k = 1024;
	const sizes = [
		"B",
		"KB",
		"MB",
		"GB",
		"TB"
	];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}
function getFileIcon(mimeOrName) {
	const lower = mimeOrName.toLowerCase();
	if (lower.includes("image") || /\.(jpe?g|png|webp|gif|svg)$/i.test(lower)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileImage, { className: "h-5 w-5 text-sky-500" });
	if (lower.includes("pdf") || /\.pdf$/i.test(lower)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5 text-rose-500" });
	if (lower.includes("spreadsheet") || lower.includes("excel") || lower.includes("csv") || /\.(xlsx?|csv)$/i.test(lower)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "h-5 w-5 text-emerald-500" });
	if (lower.includes("video") || /\.(mp4|mov|avi|mkv|webm)$/i.test(lower)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilePlay, { className: "h-5 w-5 text-amber-500" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(File, { className: "h-5 w-5 text-muted-foreground" });
}
var FileUpload = import_react.forwardRef(({ onFilesSelected, onFileRemove, items = [], accept, multiple = true, maxFiles, maxSizeBytes = 50 * 1024 * 1024, disabled = false, className, title = "Arraste seus arquivos aqui ou clique para selecionar", description = "Suporta múltiplos formatos de arquivo" }, ref) => {
	const inputRef = import_react.useRef(null);
	const [dragOver, setDragOver] = import_react.useState(false);
	const [errorMsg, setErrorMsg] = import_react.useState(null);
	const validateAndDispatch = import_react.useCallback((incoming) => {
		setErrorMsg(null);
		const fileArr = Array.from(incoming);
		if (fileArr.length === 0) return;
		if (maxFiles && fileArr.length > maxFiles) {
			setErrorMsg(`Máximo de ${maxFiles} arquivos permitidos por vez.`);
			return;
		}
		const validFiles = [];
		for (const file of fileArr) {
			if (maxSizeBytes && file.size > maxSizeBytes) {
				setErrorMsg(`O arquivo "${file.name}" ultrapassa o limite de ${formatFileSize(maxSizeBytes)}.`);
				return;
			}
			validFiles.push(file);
		}
		if (validFiles.length > 0 && onFilesSelected) onFilesSelected(validFiles);
	}, [
		maxFiles,
		maxSizeBytes,
		onFilesSelected
	]);
	const handleDrop = import_react.useCallback((e) => {
		e.preventDefault();
		e.stopPropagation();
		setDragOver(false);
		if (disabled) return;
		if (e.dataTransfer.files && e.dataTransfer.files.length > 0) validateAndDispatch(e.dataTransfer.files);
	}, [disabled, validateAndDispatch]);
	const handleDragOver = import_react.useCallback((e) => {
		e.preventDefault();
		e.stopPropagation();
		if (disabled) return;
		setDragOver(true);
	}, [disabled]);
	const handleDragLeave = import_react.useCallback((e) => {
		e.preventDefault();
		e.stopPropagation();
		setDragOver(false);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: cn("w-full space-y-4", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "button",
				tabIndex: disabled ? -1 : 0,
				onClick: () => !disabled && inputRef.current?.click(),
				onKeyDown: (e) => {
					if (!disabled && (e.key === "Enter" || e.key === " ")) {
						e.preventDefault();
						inputRef.current?.click();
					}
				},
				onDragOver: handleDragOver,
				onDragLeave: handleDragLeave,
				onDrop: handleDrop,
				className: cn("group relative flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-8 text-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", disabled && "opacity-50 cursor-not-allowed", !disabled && "cursor-pointer hover:border-primary/60 hover:bg-muted/30", dragOver ? "border-primary bg-primary/10 scale-[1.008] shadow-sm" : "border-border/70 bg-card/60"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: inputRef,
						type: "file",
						accept,
						multiple,
						disabled,
						className: "sr-only",
						onChange: (e) => {
							if (e.target.files && e.target.files.length > 0) {
								validateAndDispatch(e.target.files);
								e.target.value = "";
							}
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("grid h-12 w-12 place-items-center rounded-full transition-all duration-200", dragOver ? "bg-primary text-primary-foreground ring-4 ring-primary/20 scale-110" : "bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-105"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "h-6 w-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-foreground",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: description
						})]
					})
				]
			}),
			errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 shrink-0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errorMsg }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "icon",
						className: "ml-auto h-5 w-5 text-destructive/70 hover:text-destructive",
						onClick: () => setErrorMsg(null),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
					})
				]
			}),
			items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: items.map((item) => {
					const isUploading = item.status === "uploading" || item.progress !== void 0 && item.progress < 100;
					const isSuccess = item.status === "success" || item.progress === 100;
					const isError = item.status === "error";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-lg border border-border/70 bg-card p-3 shadow-2xs transition-all",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-9 w-9 shrink-0 place-items-center rounded-md bg-muted/60",
								children: getFileIcon(item.file.name)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-xs font-medium text-foreground",
											children: item.file.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] text-muted-foreground shrink-0",
											children: formatFileSize(item.file.size)
										})]
									}),
									isUploading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
											value: item.progress ?? 0,
											className: "h-1.5 flex-1"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[10px] text-muted-foreground shrink-0",
											children: [item.progress ?? 0, "%"]
										})]
									}),
									isError && item.errorMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[11px] text-destructive",
										children: item.errorMessage
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "shrink-0 flex items-center gap-1",
								children: [isSuccess && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-emerald-500" }), onFileRemove && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "ghost",
									size: "icon",
									className: "h-7 w-7 text-muted-foreground hover:text-foreground cursor-pointer",
									onClick: () => onFileRemove(item.id),
									title: "Remover",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
								})]
							})
						]
					}, item.id);
				})
			})
		]
	});
});
FileUpload.displayName = "FileUpload";
function ArquivosPanel() {
	const { data: coach } = useCoach();
	const qc = useQueryClient();
	const [uploadItems, setUploadItems] = (0, import_react.useState)([]);
	const [toDelete, setToDelete] = (0, import_react.useState)(null);
	const { data: files = [], isLoading } = useCoachFiles();
	const handleFilesSelected = (0, import_react.useCallback)(async (fileList) => {
		if (!coach) return;
		setUploadItems(fileList.map((f, i) => ({
			id: `${f.name}-${Date.now()}-${i}`,
			file: f,
			progress: 0,
			status: "uploading"
		})));
		try {
			await Promise.all(fileList.map(async (file, i) => {
				const path = `${coach.id}/${Date.now()}-${file.name}`;
				const { error } = await supabase.storage.from(COACH_FILES_BUCKET).upload(path, file, {
					upsert: false,
					contentType: file.type
				});
				if (error) {
					setUploadItems((prev) => prev.map((item, idx) => idx === i ? {
						...item,
						status: "error",
						errorMessage: error.message
					} : item));
					throw error;
				}
				setUploadItems((prev) => prev.map((item, idx) => idx === i ? {
					...item,
					progress: 100,
					status: "success"
				} : item));
			}));
			toast.success(fileList.length === 1 ? "Arquivo enviado" : `${fileList.length} arquivos enviados`);
			qc.invalidateQueries({ queryKey: ["coach-files"] });
		} catch (e) {
			toast.error(e.message || "Erro ao enviar arquivo");
		} finally {
			setTimeout(() => setUploadItems([]), 1500);
		}
	}, [coach, qc]);
	const del = useMutation({
		mutationFn: async (path) => {
			const { error } = await supabase.storage.from(COACH_FILES_BUCKET).remove([path]);
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success("Arquivo removido");
			qc.invalidateQueries({ queryKey: ["coach-files"] });
		},
		onError: (e) => toast.error(e.message)
	});
	async function download(path, name) {
		const { data, error } = await supabase.storage.from(COACH_FILES_BUCKET).createSignedUrl(path, 3600);
		if (error || !data) return toast.error(error?.message ?? "Falha ao gerar link");
		const a = document.createElement("a");
		a.href = data.signedUrl;
		a.download = name;
		a.target = "_blank";
		a.rel = "noopener";
		document.body.appendChild(a);
		a.click();
		a.remove();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUpload, {
				onFilesSelected: handleFilesSelected,
				items: uploadItems,
				title: "Arraste seus arquivos aqui ou clique para selecionar",
				description: "Suporta PDFs, planilhas, fotos, vídeos de execução e documentos (múltiplos arquivos)"
			})
		}),
		isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-2",
			children: [
				0,
				1,
				2
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card$1, { className: "h-16 animate-pulse border-border/60 bg-muted/40" }, i))
		}) : files.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card$1, {
			className: "flex flex-col items-center justify-center gap-3 border-dashed p-12 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderArchive, { className: "h-6 w-6" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-base font-semibold",
				children: "Nenhum arquivo ainda"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Envie planilhas, PDFs e mídias para ter tudo à mão."
			})] })]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-2",
			children: files.map((f) => {
				const path = `${coach.id}/${f.name}`;
				const displayName = f.name.replace(/^\d+-/, "");
				const size = f.metadata?.size ?? 0;
				const when = f.created_at ? new Date(f.created_at).toLocaleDateString("pt-BR", {
					day: "2-digit",
					month: "short",
					year: "numeric"
				}) : "";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card$1, {
					className: "group flex items-center gap-3 border-border/70 p-3 transition-colors duration-150 hover:border-primary/40 hover:bg-accent/20 md:gap-4 md:p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(iconFor(displayName), { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-sm font-medium",
								children: displayName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-0.5 text-xs tabular-nums text-muted-foreground",
								children: [
									formatBytes(size),
									" · ",
									when
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex shrink-0 items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: "ghost",
								className: "h-9 w-9 transition-colors duration-150",
								onClick: () => download(path, displayName),
								"aria-label": `Baixar ${displayName}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: "ghost",
								className: "h-9 w-9 text-muted-foreground transition-colors duration-150 hover:bg-destructive/10 hover:text-destructive",
								onClick: () => setToDelete({
									name: displayName,
									path
								}),
								"aria-label": `Excluir ${displayName}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
							})]
						})
					]
				}, f.id ?? f.name);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
			open: !!toDelete,
			onOpenChange: (o) => !o && setToDelete(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, { children: "Excluir arquivo?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogDescription, { children: [
				"\"",
				toDelete?.name,
				"\" será removido permanentemente."
			] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: "Cancelar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
				className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
				onClick: () => {
					if (toDelete) del.mutate(toDelete.path);
					setToDelete(null);
				},
				children: "Excluir"
			})] })] })
		})
	] });
}
function iconFor(name) {
	const ext = name.split(".").pop()?.toLowerCase() ?? "";
	if ([
		"xlsx",
		"xls",
		"csv",
		"numbers"
	].includes(ext)) return FileSpreadsheet;
	if ([
		"pdf",
		"doc",
		"docx",
		"txt",
		"md",
		"rtf"
	].includes(ext)) return FileText;
	if ([
		"png",
		"jpg",
		"jpeg",
		"gif",
		"webp",
		"svg",
		"heic"
	].includes(ext)) return FileImage;
	if ([
		"mp4",
		"mov",
		"webm",
		"avi",
		"mkv"
	].includes(ext)) return FilePlay;
	return File;
}
var getDiagnosticInfo = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("4931dcaf93ae0ff03d38ab8f0f1b8250aedd2193978a79f487c004f47e323b76"));
function DiagnosticPanel() {
	const [data, setData] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const runDiagnostic = useServerFn(getDiagnosticInfo);
	const handleRun = async () => {
		setLoading(true);
		try {
			setData(await runDiagnostic());
			toast.success("Diagnóstico concluído");
		} catch (err) {
			toast.error("Erro no diagnóstico: " + err.message);
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground max-w-md",
				children: "Execute uma verificação técnica para comparar o estado deste ambiente com o banco de dados e storage."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: handleRun,
				disabled: loading,
				size: "sm",
				children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "mr-2 h-4 w-4" }), "Executar Diagnóstico"]
			})]
		}), data && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-4 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
						className: "text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "h-3 w-3" }), " Ambiente"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Projeto:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono",
								children: data.env?.projectRef
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Build:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono",
								children: data.env?.buildId
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-4 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
						className: "text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-3 w-3" }), " Autenticação"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Coach ID:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs truncate max-w-[150px]",
								children: data.auth?.coachId || "N/A"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "User ID:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs truncate max-w-[150px]",
								children: data.auth?.userId
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-4 space-y-3 col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
						className: "text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "h-3 w-3" }), " Banco de Dados"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 md:grid-cols-4 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xl font-bold",
								children: data.database?.exercise_media
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-muted-foreground",
								children: "Mídias Registradas"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xl font-bold",
								children: data.database?.exercises
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-muted-foreground",
								children: "Exercícios Totais"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xl font-bold",
								children: data.database?.correlation_jobs
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-muted-foreground",
								children: "Jobs de Sincronia"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xl font-bold",
								children: data.database?.correlation_items
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-muted-foreground",
								children: "Itens Inventariados"
							})] })
						]
					})]
				}),
				data.lastJob && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-4 space-y-3 col-span-full bg-muted/30",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
						className: "text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-3 w-3" }), " Último Job"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground mr-2",
								children: "Data:"
							}), new Date(data.lastJob.created_at).toLocaleString()] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground mr-2",
								children: "Status:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: data.lastJob.status === "completed" ? "text-green-500" : "text-amber-500",
								children: data.lastJob.status
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-full text-xs font-mono bg-background/50 p-2 rounded",
								children: ["Stats: ", JSON.stringify(data.lastJob.stats)]
							})
						]
					})]
				})
			]
		})]
	});
}
function Card({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `rounded-lg border border-border bg-card p-4 shadow-sm ${className}`,
		children
	});
}
function SettingsHeader({ icon: Icon, eyebrow, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-6 sm:mb-8 flex items-start gap-3 sm:gap-4 min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 text-2xl font-bold leading-tight tracking-tight sm:text-3xl break-words",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 max-w-xl text-xs sm:text-sm leading-relaxed text-muted-foreground",
					children: description
				})
			]
		})]
	});
}
function Fold({ title, description, aside, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("rounded-2xl border border-border/60 bg-card/60 p-3.5 shadow-sm sm:p-5 md:p-6 min-w-0", className),
		children: [title ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-semibold leading-tight tracking-tight sm:text-lg break-words",
					children: title
				}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground",
					children: description
				}) : null]
			}), aside ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shrink-0 self-start sm:self-auto",
				children: aside
			}) : null]
		}) : null, children]
	});
}
function KpiRow({ items, loading }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4",
		children: items.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "group rounded-xl border border-border/60 bg-card/60 p-4 transition-colors duration-200 hover:border-primary/40 hover:bg-accent/20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [k.swatch ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "h-3.5 w-3.5 shrink-0 rounded-full border border-border/70",
						style: { backgroundColor: k.swatch }
					}) : k.icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(k.icon, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground transition-colors duration-200 group-hover:text-primary" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground leading-tight break-words line-clamp-2 min-w-0",
						children: k.label
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					title: k.value,
					className: cn("mt-2 break-words font-semibold leading-tight tabular-nums", k.value.length > 13 ? "text-base md:text-lg" : "text-xl md:text-2xl", loading && "animate-pulse text-muted-foreground/60"),
					children: loading ? "—" : k.value
				}),
				k.hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs leading-snug text-muted-foreground break-words line-clamp-2",
					children: k.hint
				}) : null
			]
		}, k.label))
	});
}
var KB_CATEGORIAS = [
	{
		key: "Kettlebell",
		peso: "81%",
		icon: Dumbbell,
		hint: "coluna do motor"
	},
	{
		key: "Ginásticos",
		peso: "15%",
		icon: Activity,
		hint: "peso corporal"
	},
	{
		key: "Dumbbell",
		peso: "2%",
		icon: Dumbbell,
		hint: "halteres"
	},
	{
		key: "Barbell",
		peso: "1%",
		icon: Wrench,
		hint: "barra"
	},
	{
		key: "Objetos Alternativos",
		peso: "—",
		icon: Wind,
		hint: "sacos, cordas"
	}
];
function ensureKbBloco(blocos) {
	if (blocos.length > 0) return blocos[0];
	return {
		formato: "kb_timed_sets",
		presetId: "builtin:kb_timed_sets",
		titulo: "Kettlebell Fitness",
		duracao_min: null,
		num_exercicios: 6,
		series: 6,
		seriesMin: 6,
		seriesMax: 6,
		reps_base: 12,
		repsPorExercicio: 12,
		reps_pattern: [],
		progressao: "nenhuma",
		passos: [],
		tempo_trabalho: null,
		tempo_descanso: null,
		descansoAposSeg: 0,
		modoExecucao: "circuito",
		selecaoExercicios: "ia",
		exerciciosFixos: [],
		fonteExercicios: {},
		modalidades_alvo: [],
		equipamentos_alvo: [],
		exercicios_permitidos: []
	};
}
function KbFitnessPanel({ state, onUpdate }) {
	if (state.loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-center rounded-xl border border-border/60 bg-card/60 py-16 text-sm text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), " Carregando configuração…"]
	});
	const bloco = ensureKbBloco(state.blocos);
	const cats = bloco.kb_categorias_ativas ?? {};
	const isAtiva = (k) => cats[k] ?? true;
	const ativasCount = KB_CATEGORIAS.reduce((n, c) => n + (isAtiva(c.key) ? 1 : 0), 0);
	const numOverride = bloco.kb_num_estacoes_override ?? null;
	const durOverride = bloco.kb_duracao_min_override ?? null;
	const autoEstacoes = numOverride === null;
	const autoDuracao = durOverride === null;
	function patch(update) {
		onUpdate((prev) => {
			return [{
				...ensureKbBloco(prev),
				...update
			}, ...prev.slice(1)];
		});
	}
	function toggleCategoria(k) {
		patch({ kb_categorias_ativas: {
			...cats,
			[k]: !isAtiva(k)
		} });
	}
	function restaurarPadrao() {
		patch({
			kb_categorias_ativas: void 0,
			kb_num_estacoes_override: null,
			kb_duracao_min_override: null
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3 rounded-xl border border-border/60 bg-gradient-to-br from-primary/[0.04] via-card to-card p-4 sm:p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1 space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold tracking-tight text-foreground",
						children: "Estrutura do motor KB Fitness"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs leading-relaxed text-muted-foreground sm:text-sm",
						children: "O motor sorteia estrutura, categoria e exercícios por padrão. Use os controles abaixo para fixar duração, nº de estações ou restringir categorias — o restante segue no automático."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card$1, {
				className: "overflow-hidden border-border/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border/60 px-5 py-3.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-semibold tracking-tight text-foreground",
						children: "Duração e estações"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs text-muted-foreground",
						children: "Deixe no automático para o motor sortear com base na distribuição real."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "divide-y divide-border/60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverrideRow, {
						label: "Duração da sessão",
						auto: autoDuracao,
						onAutoChange: (v) => patch({ kb_duracao_min_override: v ? null : durOverride ?? 30 }),
						value: durOverride ?? 30,
						onValueChange: (v) => patch({ kb_duracao_min_override: v }),
						min: 10,
						max: 60,
						step: 1,
						unit: "min",
						autoHint: "30 min em 96% das sessões"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverrideRow, {
						label: "Nº de estações",
						auto: autoEstacoes,
						onAutoChange: (v) => patch({ kb_num_estacoes_override: v ? null : numOverride ?? 6 }),
						value: numOverride ?? 6,
						onValueChange: (v) => patch({ kb_num_estacoes_override: v }),
						min: 3,
						max: 10,
						step: 1,
						unit: numOverride === 1 ? "estação" : "estações",
						autoHint: "5–6 em 91% das sessões"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card$1, {
				className: "overflow-hidden border-border/60",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3 border-b border-border/60 px-5 py-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-sm font-semibold tracking-tight text-foreground",
							children: "Categorias ativas"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs text-muted-foreground",
							children: "Desativar redistribui os pesos entre as restantes. Mobilidade fica reservada à Preparação de Movimento."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "shrink-0 rounded-full border border-border/60 bg-muted/40 px-2 py-0.5 text-[11px] font-medium tabular-nums text-muted-foreground",
							children: [
								ativasCount,
								"/",
								KB_CATEGORIAS.length
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2 p-4 sm:grid-cols-2",
						children: KB_CATEGORIAS.map((c) => {
							const on = isAtiva(c.key);
							const Icon = c.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => toggleCategoria(c.key),
								"aria-pressed": on,
								className: cn("group flex items-center gap-3 rounded-lg border px-3 py-2.5 text-left transition-all duration-200", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", "active:translate-y-[1px]", on ? "border-primary/40 bg-primary/[0.06] text-foreground hover:border-primary/60" : "border-border/60 bg-card text-muted-foreground hover:border-border hover:text-foreground"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition-colors", on ? "bg-primary/15 text-primary" : "bg-muted/60 text-muted-foreground"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block truncate text-sm font-medium leading-none",
											children: c.key
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mt-1 block text-[11px] leading-none text-muted-foreground",
											children: [
												"peso padrão ",
												c.peso,
												" · ",
												c.hint
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide transition-colors", on ? "bg-primary/15 text-primary" : "bg-muted/60 text-muted-foreground"),
										children: on ? "Ativa" : "Off"
									})
								]
							}, c.key);
						})
					}),
					ativasCount === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-border/60 bg-muted/30 px-5 py-3 text-xs text-muted-foreground",
						children: "Nenhuma categoria ativa — o motor volta ao padrão (Kettlebell) para não gerar sessão vazia."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrepMovimentoCard, {
				bloco,
				patch
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 rounded-xl border border-dashed border-border/60 bg-muted/20 px-4 py-3 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0",
					children: [
						"A seleção final de exercícios continua vindo do seu banco marcado como",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-1 font-medium text-foreground",
							children: "Kettlebell Fitness"
						}),
						"."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: restaurarPadrao,
					className: "shrink-0 gap-1.5 text-muted-foreground hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-3.5 w-3.5" }), " Padrão"]
				})]
			})
		]
	});
}
function OverrideRow({ label, auto, onAutoChange, value, onValueChange, min, max, step, unit, autoHint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3 sm:w-56 sm:justify-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium leading-none text-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[11px] leading-none text-muted-foreground",
					children: auto ? autoHint : "Fixado por você"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex shrink-0 items-center gap-2 sm:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
					children: "Auto"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
					checked: auto,
					onCheckedChange: onAutoChange
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 items-center gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					min,
					max,
					step,
					value: [auto ? value : value],
					disabled: auto,
					onValueChange: ([v]) => onValueChange(v),
					className: cn("flex-1 transition-opacity", auto && "opacity-50")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: cn("min-w-[74px] shrink-0 rounded-md border px-2.5 py-1 text-right text-sm font-semibold tabular-nums transition-colors", auto ? "border-border/60 bg-muted/40 text-muted-foreground" : "border-primary/40 bg-primary/[0.08] text-foreground"),
					children: [
						value,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-medium uppercase tracking-wide text-muted-foreground",
							children: unit
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "hidden shrink-0 items-center gap-2 sm:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
						children: "Auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						checked: auto,
						onCheckedChange: onAutoChange
					})]
				})
			]
		})]
	});
}
function PrepMovimentoCard({ bloco, patch }) {
	const enabled = !!bloco.kb_prep_enabled;
	const mob = bloco.kb_prep_mobilidade ?? 3;
	const aq = bloco.kb_prep_aquecimento ?? 2;
	const dur = bloco.kb_prep_duracao_min ?? 8;
	const tempo = bloco.kb_prep_tempo_seg ?? 30;
	const total = mob + aq;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card$1, {
		className: "overflow-hidden border-border/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3 border-b border-border/60 px-5 py-3.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors", enabled ? "bg-primary/10 text-primary ring-1 ring-primary/20" : "bg-muted/60 text-muted-foreground"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wind, { className: "h-4 w-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-semibold tracking-tight text-foreground",
						children: "Preparação de Movimento"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs text-muted-foreground",
						children: "Anexa um bloco de mobilidade e aquecimento antes do motor automático."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
				checked: enabled,
				onCheckedChange: (v) => patch({ kb_prep_enabled: v }),
				"aria-label": "Ativar Preparação de Movimento"
			})]
		}), enabled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4 px-5 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotCounter, {
						icon: Wind,
						label: "Mobilidade",
						hint: "tempo por movimento",
						value: mob,
						onChange: (v) => patch({ kb_prep_mobilidade: v }),
						min: 0,
						max: 10
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotCounter, {
						icon: Flame,
						label: "Aquecimento",
						hint: "movimentos leves",
						value: aq,
						onChange: (v) => patch({ kb_prep_aquecimento: v }),
						min: 0,
						max: 10
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberRow, {
						label: "Duração",
						unit: "min",
						value: dur,
						min: 1,
						max: 30,
						onChange: (v) => patch({ kb_prep_duracao_min: v })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberRow, {
						label: "Tempo por mobilidade",
						unit: "seg",
						value: tempo,
						min: 10,
						max: 180,
						step: 5,
						onChange: (v) => patch({ kb_prep_tempo_seg: v })
					})]
				}),
				total === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-md border border-warning/30 bg-warning/[0.06] px-3 py-2 text-xs text-warning-foreground",
					children: "Com 0 mobilidades e 0 aquecimentos, nenhum bloco será criado."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[11px] leading-relaxed text-muted-foreground",
					children: [
						"Mobilidades são sorteadas dentre exercícios marcados como",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-1 font-medium text-foreground",
							children: "Mobilidade"
						}),
						"no seu banco. Aquecimento usa exercícios leves do banco geral."
					]
				})
			]
		})]
	});
}
function SlotCounter({ icon: Icon, label, hint, value, onChange, min, max }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 rounded-lg border border-border/60 bg-background/60 px-3 py-2.5 transition-colors hover:border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium leading-none text-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[11px] leading-none text-muted-foreground",
					children: hint
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						size: "icon",
						variant: "ghost",
						className: "h-7 w-7 rounded-md",
						disabled: value <= min,
						onClick: () => onChange(Math.max(min, value - 1)),
						"aria-label": `Diminuir ${label.toLowerCase()}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base leading-none",
							children: "−"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-[2ch] text-center text-sm font-semibold tabular-nums text-foreground",
						children: value
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						size: "icon",
						variant: "ghost",
						className: "h-7 w-7 rounded-md",
						disabled: value >= max,
						onClick: () => onChange(Math.min(max, value + 1)),
						"aria-label": `Aumentar ${label.toLowerCase()}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base leading-none",
							children: "+"
						})
					})
				]
			})
		]
	});
}
function NumberRow({ label, unit, value, min, max, step = 1, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex items-center justify-between gap-3 rounded-lg border border-border/60 bg-background/60 px-3 py-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-medium text-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				type: "number",
				inputMode: "numeric",
				min,
				max,
				step,
				value,
				onChange: (e) => {
					const n = Number(e.target.value);
					if (Number.isFinite(n)) onChange(Math.min(max, Math.max(min, n)));
				},
				className: "h-8 w-20 text-right tabular-nums"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
				children: unit
			})]
		})]
	});
}
function DefaultField({ label, value, onChange, step }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			type: "number",
			step,
			value: value ?? "",
			onChange: (e) => {
				onChange(e.target.value === "" ? null : Number(e.target.value));
			},
			className: "h-8 text-xs tabular-nums"
		})]
	});
}
function DeleteFormatDialog({ preset, onCancel, onConfirm }) {
	const open = !!preset;
	const isBuiltin = !!preset?.builtin;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
		open,
		onOpenChange: (v) => !v && onCancel(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, { children: isBuiltin ? "Ocultar bloco padrão?" : "Excluir bloco personalizado?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, {
			className: "leading-relaxed",
			children: isBuiltin ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium text-foreground",
				children: preset?.label
			}), " vai sair do grid e do menu do construtor. Você pode restaurá-lo depois em \"Blocos ocultos\"."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium text-foreground",
				children: preset?.label
			}), " será removido permanentemente. Essa ação não pode ser desfeita."] })
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: "Cancelar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
			onClick: onConfirm,
			className: cn(!isBuiltin && "bg-destructive text-destructive-foreground hover:bg-destructive/90"),
			children: isBuiltin ? "Ocultar" : "Excluir"
		})] })] })
	});
}
function FormatoEditorDialog({ open, preset, onOpenChange, onSave, onDelete, setTypes }) {
	const [draft, setDraft] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (open && preset) setDraft({
			...preset,
			defaults: { ...preset.defaults ?? {} }
		});
		if (!open) setDraft(null);
	}, [open, preset]);
	if (!draft) return null;
	const isNew = !draft.builtin && !draft.id;
	const defaults = draft.defaults ?? {};
	const setDefault = (key, v) => {
		setDraft((d) => d ? {
			...d,
			defaults: {
				...d.defaults ?? {},
				[key]: v
			}
		} : d);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-lg gap-0 p-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "border-b border-border/60 px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-base font-semibold tracking-tight",
						children: isNew ? "Novo formato" : draft.builtin ? "Editar formato padrão" : "Editar preset"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-xs text-muted-foreground",
						children: "Aplica ao construtor manual e às preferências do gerador automático."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5 px-6 py-5 max-h-[70vh] overflow-y-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
								children: "Nome"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: draft.label,
								onChange: (e) => setDraft({
									...draft,
									label: e.target.value
								}),
								placeholder: BLOCK_FORMAT_LABEL[draft.base] || draft.base,
								className: "h-10",
								autoFocus: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
									children: "Mecânica da Série (Tipo)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: draft.set_type_id,
									onValueChange: (v) => {
										const newSetType = setTypes.find((t) => t.id === v);
										setDraft({
											...draft,
											set_type_id: v,
											enabled_fields: newSetType?.fields.map((f) => f.key)
										});
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "h-10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: setTypes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: t.id,
										children: t.label
									}, t.id)) })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
									children: "Estrutura do bloco"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: draft.base,
									onValueChange: (v) => setDraft({
										...draft,
										base: v
									}),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "h-10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: ENABLED_FORMATS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: f,
										children: BLOCK_FORMAT_LABEL[f] || f
									}, f)) })]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
								children: "Campos visíveis e Rótulos"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-lg border border-border/60 bg-muted/20 p-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-1 gap-3",
									children: setTypes.find((t) => t.id === draft.set_type_id)?.fields.map((field) => {
										const isEnabled = draft.enabled_fields?.includes(field.key) ?? true;
										const customLabel = draft.field_labels?.[field.key] || field.label;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
												id: `field-${field.key}`,
												checked: isEnabled,
												onCheckedChange: (checked) => {
													const currentFields = draft.enabled_fields || setTypes.find((t) => t.id === draft.set_type_id)?.fields.map((f) => f.key) || [];
													const nextFields = checked ? [...currentFields, field.key] : currentFields.filter((k) => k !== field.key);
													setDraft({
														...draft,
														enabled_fields: nextFields
													});
												}
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1 grid grid-cols-2 gap-2 items-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													htmlFor: `field-${field.key}`,
													className: "text-xs cursor-pointer",
													children: field.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													size: 1,
													className: "h-7 text-[11px]",
													placeholder: field.label,
													value: customLabel,
													onChange: (e) => {
														setDraft({
															...draft,
															field_labels: {
																...draft.field_labels || {},
																[field.key]: e.target.value
															}
														});
													}
												})]
											})]
										}, field.key);
									})
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
								className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
								children: ["Descrição", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-1 normal-case tracking-normal text-muted-foreground/70",
									children: "(opcional)"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								rows: 2,
								value: draft.description ?? "",
								onChange: (e) => setDraft({
									...draft,
									description: e.target.value
								}),
								placeholder: "Ex.: AMRAP curto para finalizar a sessão",
								className: "resize-none text-sm"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
									children: "Valores padrão"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultField, {
											label: "Rounds",
											value: defaults.rounds,
											onChange: (v) => setDefault("rounds", v)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultField, {
											label: "Duração (min)",
											value: defaults.duracao_min,
											onChange: (v) => setDefault("duracao_min", v)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultField, {
											label: "Intervalo (min)",
											value: defaults.intervalo_min,
											step: "0.5",
											onChange: (v) => setDefault("intervalo_min", v)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultField, {
											label: "Reps por ex.",
											value: defaults.reps,
											onChange: (v) => setDefault("reps", v)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultField, {
											label: "Tempo (seg)",
											value: defaults.tempo_seg,
											onChange: (v) => setDefault("tempo_seg", v)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultField, {
											label: "Estações",
											value: defaults.estacoes,
											onChange: (v) => setDefault("estacoes", v)
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground",
									children: "Deixe em branco para usar o valor do bloco. Só campos aplicáveis ao formato serão usados."
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "flex items-center justify-between gap-2 border-t border-border/60 px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [!draft.builtin && draft.id && onDelete && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							className: "text-destructive hover:bg-destructive/10 hover:text-destructive",
							onClick: () => {
								onDelete(draft.id);
								onOpenChange(false);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-2 h-4 w-4" }), "Excluir formato"]
						}), draft.builtin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							className: "text-destructive hover:bg-destructive/10 hover:text-destructive",
							onClick: () => {
								onDelete(draft.id);
								onOpenChange(false);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "mr-2 h-4 w-4" }), "Desativar formato"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => onOpenChange(false),
							children: "Cancelar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => onSave(draft),
							disabled: !draft.label.trim(),
							children: "Salvar"
						})]
					})]
				})
			]
		})
	});
}
function FormatosPanel() {
	const { builtins, presets, saveBuiltin, resetBuiltin, toggleBuiltin, addCustom, updateCustom, removePreset, duplicatePreset, reorderPresets } = useFormatRegistry();
	const { presets: setTypes } = useSetTypeRegistry();
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [showHidden, setShowHidden] = (0, import_react.useState)(false);
	const [confirmDelete, setConfirmDelete] = (0, import_react.useState)(null);
	const hiddenBuiltins = builtins.filter((p) => !presets.find((pr) => pr.id === p.id));
	const activeCount = presets.length;
	const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }));
	function handleDragEnd(e) {
		const { active, over } = e;
		if (!over || active.id === over.id) return;
		reorderPresets(String(active.id), String(over.id));
	}
	function confirmedDelete() {
		if (!confirmDelete) return;
		removePreset(confirmDelete.id);
		setConfirmDelete(null);
	}
	function openNew() {
		setEditing({
			id: "",
			label: "",
			base: "bodybuilding_sets",
			set_type_id: "reps_carga",
			description: "",
			defaults: {
				series: 4,
				reps: "8-12",
				descanso_seg: 60
			},
			builtin: false
		});
	}
	function handleSave(next) {
		if (next.builtin) saveBuiltin(next.id, {
			label: next.label,
			base: next.base,
			set_type_id: next.set_type_id,
			description: next.description,
			defaults: next.defaults,
			enabled_fields: next.enabled_fields,
			field_labels: next.field_labels
		});
		else if (next.id) updateCustom(next.id, {
			label: next.label,
			base: next.base,
			set_type_id: next.set_type_id,
			description: next.description,
			defaults: next.defaults,
			enabled_fields: next.enabled_fields,
			field_labels: next.field_labels
		});
		else addCustom({
			label: next.label,
			base: next.base,
			set_type_id: next.set_type_id,
			description: next.description,
			defaults: next.defaults,
			enabled_fields: next.enabled_fields,
			field_labels: next.field_labels
		});
		setEditing(null);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold tracking-tight text-foreground",
						children: "Formatos de bloco"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 max-w-lg text-sm text-muted-foreground",
						children: "Edite, oculte ou crie variações dos blocos que aparecem no construtor manual e nas preferências de geração automática."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "secondary",
							className: "h-6 gap-1 rounded-full px-2.5 text-[11px] font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }),
								" ",
								activeCount,
								" ativos"
							]
						}),
						hiddenBuiltins.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "outline",
							className: "h-6 gap-1 rounded-full px-2.5 text-[11px] font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-3 w-3" }),
								" ",
								hiddenBuiltins.length,
								" ocultos"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							className: "gap-2",
							onClick: openNew,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Novo formato"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DndContext, {
					sensors,
					collisionDetection: closestCenter,
					onDragEnd: handleDragEnd,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableContext, {
						items: presets.map((p) => p.id),
						strategy: verticalListSortingStrategy,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3",
							children: presets.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormatoCard, {
								preset: p,
								customized: false,
								onEdit: () => setEditing(p),
								onDuplicate: async () => {
									const id = await duplicatePreset(p);
									const newPreset = presets.find((pr) => pr.id === id);
									if (newPreset) setEditing(newPreset);
								},
								onReset: p.builtin ? () => resetBuiltin(p.base) : void 0,
								onDelete: () => setConfirmDelete(p)
							}, p.id))
						})
					})
				}), activeCount === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card$1, {
					className: "flex flex-col items-center justify-center gap-2 border-dashed py-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "Nenhum formato ativo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-xs text-xs text-muted-foreground",
							children: "Todos os formatos estão ocultos. Reative um abaixo ou crie um novo."
						})
					]
				})]
			}),
			hiddenBuiltins.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setShowHidden((v) => !v),
				className: "group flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground",
				children: [
					showHidden ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5" }),
					"Blocos ocultos (",
					hiddenBuiltins.length,
					")"
				]
			}), showHidden && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3",
				children: hiddenBuiltins.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormatoCard, {
					preset: p,
					hidden: true,
					customized: false,
					onEdit: () => setEditing(p),
					onShow: () => toggleBuiltin(p.base, true),
					onReset: () => resetBuiltin(p.base)
				}, p.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormatoEditorDialog, {
				open: !!editing,
				preset: editing,
				onOpenChange: (v) => !v && setEditing(null),
				onSave: handleSave,
				onDelete: (id) => {
					const p = presets.find((x) => x.id === id) || builtins.find((x) => x.id === id);
					if (p) setConfirmDelete(p);
				},
				setTypes
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeleteFormatDialog, {
				preset: confirmDelete,
				onCancel: () => setConfirmDelete(null),
				onConfirm: confirmedDelete
			})
		]
	});
}
function FormatoCard({ preset, hidden, customized, onEdit, onDuplicate, onShow, onReset, onDelete }) {
	const defaults = preset.defaults ?? {};
	const chips = [];
	if (defaults.rounds) chips.push({
		label: "Rounds",
		value: String(defaults.rounds)
	});
	if (defaults.duracao_min) chips.push({
		label: "Min",
		value: String(defaults.duracao_min)
	});
	if (defaults.intervalo_min) chips.push({
		label: "Int",
		value: `${defaults.intervalo_min}′`
	});
	if (defaults.reps) chips.push({
		label: "Reps",
		value: String(defaults.reps)
	});
	if (defaults.tempo_seg) chips.push({
		label: "Tempo",
		value: `${defaults.tempo_seg}s`
	});
	if (defaults.estacoes) chips.push({
		label: "Estações",
		value: String(defaults.estacoes)
	});
	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
		id: preset.id,
		disabled: hidden
	});
	const style = hidden ? void 0 : {
		transform: CSS.Transform.toString(transform),
		transition
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card$1, {
		ref: hidden ? void 0 : setNodeRef,
		style,
		className: cn("group relative flex flex-col gap-4 rounded-2xl border-border/60 bg-card/60 p-5 backdrop-blur transition-all duration-200", "hover:border-primary/40 hover:shadow-[0_0_0_1px_hsl(var(--primary)/0.12),0_8px_24px_-12px_hsl(var(--primary)/0.25)]", hidden && "opacity-70", isDragging && "z-10 scale-[1.02] shadow-lg ring-1 ring-primary/40"),
		children: [
			!hidden && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				...attributes,
				...listeners,
				className: "absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-md text-muted-foreground opacity-0 transition-all duration-150 hover:bg-muted hover:text-foreground focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group-hover:opacity-100 md:opacity-0 touch-none cursor-grab active:cursor-grabbing",
				"aria-label": `Arrastar para reordenar ${preset.label}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "h-4 w-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors", preset.builtin ? "bg-primary/10 text-primary" : "bg-accent/40 text-accent-foreground"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "truncate text-sm font-semibold tracking-tight text-foreground",
									children: preset.label
								}),
								!preset.builtin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "h-5 rounded-full px-1.5 text-[10px] font-medium",
									children: "Preset"
								}),
								customized && preset.builtin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									variant: "outline",
									className: "h-5 gap-1 rounded-full border-primary/40 px-1.5 text-[10px] font-medium text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "h-2.5 w-2.5" }), " editado"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground",
							children: BLOCK_FORMAT_LABEL[preset.base]
						}),
						preset.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground",
							children: preset.description
						})
					]
				})]
			}),
			chips.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5",
				children: chips.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1 rounded-md bg-muted/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[9px] uppercase tracking-wider opacity-70",
						children: c.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums text-foreground",
						children: c.value
					})]
				}, c.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto flex items-center justify-between gap-1 pt-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					variant: "ghost",
					className: "h-8 gap-1.5 px-2 text-xs",
					onClick: onEdit,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3.5 w-3.5" }), " Editar"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-0.5",
					children: [
						onDuplicate && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon",
							variant: "ghost",
							className: "h-8 w-8 text-muted-foreground transition-colors hover:text-foreground",
							onClick: onDuplicate,
							"aria-label": "Duplicar",
							title: "Duplicar como preset",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3.5 w-3.5" })
						}),
						customized && onReset && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon",
							variant: "ghost",
							className: "h-8 w-8 text-muted-foreground transition-colors hover:text-foreground",
							onClick: onReset,
							"aria-label": "Restaurar padrão",
							title: "Restaurar padrão",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-3.5 w-3.5" })
						}),
						onShow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "icon",
							variant: "ghost",
							className: "h-8 gap-1.5 px-2 text-xs text-muted-foreground transition-colors hover:text-foreground",
							onClick: onShow,
							"aria-label": "Restaurar",
							title: "Restaurar no grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5" }), " Restaurar"]
						}),
						onDelete && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon",
							variant: "ghost",
							className: cn("h-8 w-8 transition-colors", preset.builtin ? "text-muted-foreground hover:text-foreground" : "text-muted-foreground hover:bg-destructive/10 hover:text-destructive"),
							onClick: onDelete,
							"aria-label": preset.builtin ? "Ocultar" : "Excluir",
							title: preset.builtin ? "Ocultar do menu" : "Excluir preset",
							children: preset.builtin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
						})
					]
				})]
			})
		]
	});
}
var FIELD_OPTIONS = [
	{
		key: "serie_rep",
		label: "Série/Rep"
	},
	{
		key: "carga",
		label: "Carga (kg)"
	},
	{
		key: "tempo_seg",
		label: "Tempo (s)"
	},
	{
		key: "intervalo_seg",
		label: "Intervalo (s)"
	},
	{
		key: "inclinacao_pct",
		label: "Inclinação (%)"
	},
	{
		key: "distancia",
		label: "Distância"
	},
	{
		key: "ritmo",
		label: "Ritmo"
	},
	{
		key: "cadencia",
		label: "Cadência"
	},
	{
		key: "obs",
		label: "Observações"
	}
];
function SetTypesPanel() {
	const { presets, addCustom, updateCustom, removePreset } = useSetTypeRegistry();
	const [editing, setEditing] = (0, import_react.useState)(null);
	function handleSave(next) {
		if (!next.id) addCustom({
			label: next.label,
			fields: next.fields
		});
		else updateCustom(next.id, {
			label: next.label,
			fields: next.fields
		});
		setEditing(null);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold tracking-tight text-foreground",
						children: "Tipos de séries"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 max-w-lg text-sm text-muted-foreground",
						children: "Crie novos tipos de séries (Ex: Repetições e Potência) definindo quais campos o treinador deve preencher."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					className: "gap-2",
					onClick: () => setEditing({
						id: "",
						label: "",
						fields: [{
							key: "serie_rep",
							label: "Série/rep"
						}]
					}),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Novo tipo"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: presets.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card$1, {
					className: "relative overflow-hidden border-border/60 bg-card p-4 transition-all hover:border-primary/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-foreground",
							children: p.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-1",
							children: p.fields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-[10px] uppercase tracking-wide",
								children: f.label
							}, f.key))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "h-8 w-8",
								onClick: () => setEditing(p),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { className: "h-4 w-4 text-muted-foreground" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "h-8 w-8 text-destructive hover:bg-destructive/10",
								onClick: () => removePreset(p.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
							})]
						})]
					}), p.builtin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						className: "absolute right-2 top-2 h-5 text-[9px] uppercase tracking-tighter opacity-40",
						children: "Padrão"
					})]
				}, p.id))
			}),
			editing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetTypeEditorDialog, {
				preset: editing,
				onSave: handleSave,
				onOpenChange: (o) => !o && setEditing(null)
			})
		]
	});
}
function SetTypeEditorDialog({ preset, onSave, onOpenChange }) {
	const [draft, setDraft] = (0, import_react.useState)(preset);
	function toggleField(key) {
		if (draft.fields.find((f) => f.key === key)) setDraft({
			...draft,
			fields: draft.fields.filter((f) => f.key !== key)
		});
		else {
			const option = FIELD_OPTIONS.find((o) => o.key === key);
			setDraft({
				...draft,
				fields: [...draft.fields, {
					key,
					label: option.label
				}]
			});
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: true,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-[425px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: preset.id ? "Editar tipo" : "Novo tipo de série" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Escolha as colunas que estarão disponíveis para este tipo de série." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Nome do tipo" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: draft.label,
							onChange: (e) => setDraft({
								...draft,
								label: e.target.value
							}),
							placeholder: "Ex: Repetições e Potência"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Colunas disponíveis" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-2",
							children: FIELD_OPTIONS.map((opt) => {
								const active = draft.fields.some((f) => f.key === opt.key);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									variant: active ? "default" : "outline",
									className: "h-9 justify-start text-xs",
									onClick: () => toggleField(opt.key),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: cn("mr-2 h-3 w-3 opacity-0 transition-opacity", active && "opacity-100") }), opt.label]
								}, opt.key);
							})
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => onOpenChange(false),
					children: "Cancelar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => onSave(draft),
					disabled: !draft.label.trim() || draft.fields.length === 0,
					children: "Salvar tipo"
				})] })
			]
		})
	});
}
function CurationSection({ bloco, onChange }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const permitidos = bloco.exercicios_permitidos ?? [];
	const ativo = permitidos.length > 0;
	const hidratados = useQuery({
		queryKey: ["curated-names", permitidos.slice().sort().join("|")],
		queryFn: () => getExerciciosByIds({ data: { ids: permitidos } }),
		enabled: ativo,
		staleTime: 3e4
	});
	const preview = (hidratados.data ?? []).slice(0, 3);
	const resto = Math.max(0, permitidos.length - preview.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("space-y-3 rounded-lg border p-4 transition-colors", ativo ? "border-primary/30 bg-primary/[0.03]" : "border-border/50 bg-muted/20"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, { className: "h-3.5 w-3.5 text-primary" }), "Pool de exercícios"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs leading-relaxed text-muted-foreground",
						children: ativo ? "O motor sorteia só dos exercícios curados abaixo — filtros de modalidade e equipamento ficam ignorados." : "Sem curadoria — o motor usa modalidade + equipamento do bloco."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center gap-2",
					children: [ativo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "outline",
						className: "border-primary/40 bg-primary/10 font-medium tabular-nums text-primary",
						children: [
							permitidos.length,
							" curado",
							permitidos.length === 1 ? "" : "s"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: ativo ? "outline" : "default",
						size: "sm",
						className: "gap-1.5",
						onClick: () => setOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, { className: "h-3.5 w-3.5" }), ativo ? "Editar pool" : "Curar exercícios"]
					})]
				})]
			}),
			ativo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap items-center gap-1.5",
				children: hidratados.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }), " Carregando nomes…"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					preview.map((ex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						className: "max-w-[220px] truncate border-border/60 bg-background font-normal",
						title: ex.nome_pt,
						children: ex.nome_pt
					}, ex.id)),
					resto > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "secondary",
						className: "border-border/60 bg-background font-normal tabular-nums text-muted-foreground",
						children: ["+", resto]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "ghost",
						size: "sm",
						className: "h-7 gap-1 px-2 text-xs text-muted-foreground hover:text-destructive",
						onClick: () => onChange({
							...bloco,
							exercicios_permitidos: []
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-3 w-3" }), "Voltar ao automático"]
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurationSheet, {
				open,
				onOpenChange: setOpen,
				selectedIds: permitidos,
				onSave: (ids) => onChange({
					...bloco,
					exercicios_permitidos: ids
				})
			})
		]
	});
}
function CurationSheet({ open, onOpenChange, selectedIds, onSave }) {
	const [q, setQ] = (0, import_react.useState)("");
	const [debouncedQ, setDebouncedQ] = (0, import_react.useState)("");
	const [mods, setMods] = (0, import_react.useState)([]);
	const [equips, setEquips] = (0, import_react.useState)([]);
	const [somenteMeus, setSomenteMeus] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)(new Set(selectedIds));
	(0, import_react.useEffect)(() => {
		if (open) setDraft(new Set(selectedIds));
	}, [open, selectedIds]);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setDebouncedQ(q), 200);
		return () => clearTimeout(t);
	}, [q]);
	const equipQuery = useQuery({
		queryKey: ["equipamentos"],
		queryFn: () => listEquipamentos(),
		staleTime: 6e4
	});
	const listQuery = useQuery({
		queryKey: [
			"curation-search",
			debouncedQ,
			mods.slice().sort().join("|"),
			equips.slice().sort().join("|"),
			somenteMeus
		],
		queryFn: () => searchExercicios({ data: {
			query: debouncedQ,
			modalidades: mods,
			equipamentos: equips,
			somente_meus: somenteMeus,
			limit: 300
		} }),
		enabled: open,
		placeholderData: keepPreviousData,
		staleTime: 15e3
	});
	const items = listQuery.data ?? [];
	const visibleIds = (0, import_react.useMemo)(() => items.map((x) => x.id), [items]);
	const allVisibleSelected = visibleIds.length > 0 && visibleIds.every((id) => draft.has(id));
	function toggle(id) {
		setDraft((prev) => {
			const next = new Set(prev);
			if (next.has(id)) next.delete(id);
			else next.add(id);
			return next;
		});
	}
	function selectAllVisible() {
		setDraft((prev) => {
			const next = new Set(prev);
			for (const id of visibleIds) next.add(id);
			return next;
		});
	}
	function unselectAllVisible() {
		setDraft((prev) => {
			const next = new Set(prev);
			for (const id of visibleIds) next.delete(id);
			return next;
		});
	}
	function commit() {
		onSave(Array.from(draft));
		onOpenChange(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			side: "right",
			className: "flex w-full flex-col gap-0 p-0 sm:max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, {
					className: "border-b border-border/60 px-5 py-4 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, {
						className: "flex items-center gap-2 text-base",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, { className: "h-4 w-4 text-primary" }), "Curar pool de exercícios"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, {
						className: "text-xs",
						children: "Escolha manualmente os exercícios que o motor pode sortear neste bloco."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 border-b border-border/60 bg-muted/20 px-5 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: q,
								onChange: (e) => setQ(e.target.value),
								placeholder: "Buscar por nome…",
								className: "h-10 pl-9",
								"aria-label": "Buscar exercícios"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: Object.keys(METHODOLOGY_LABEL).map((m) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setMods((prev) => prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]),
									className: cn("inline-flex h-7 items-center rounded-full border px-2.5 text-xs font-medium transition-all duration-200", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", mods.includes(m) ? "border-primary bg-primary text-primary-foreground shadow-sm" : "border-border/60 bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"),
									children: METHODOLOGY_LABEL[m]
								}, m);
							})
						}),
						(equipQuery.data ?? []).length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: (equipQuery.data ?? []).map((eq) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setEquips((prev) => prev.includes(eq) ? prev.filter((x) => x !== eq) : [...prev, eq]),
									className: cn("inline-flex h-7 items-center rounded-full border px-2.5 text-xs capitalize transition-all duration-200", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", equips.includes(eq) ? "border-primary bg-primary text-primary-foreground shadow-sm" : "border-border/60 bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"),
									children: eq
								}, eq);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2 pt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "inline-flex cursor-pointer items-center gap-2 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
									checked: somenteMeus,
									onCheckedChange: (v) => setSomenteMeus(v === true)
								}), "Somente meus exercícios"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "ghost",
									size: "sm",
									className: "h-7 px-2 text-xs",
									onClick: allVisibleSelected ? unselectAllVisible : selectAllVisible,
									disabled: visibleIds.length === 0,
									children: allVisibleSelected ? "Desmarcar visíveis" : "Selecionar visíveis"
								}), draft.size > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "ghost",
									size: "sm",
									className: "h-7 px-2 text-xs text-muted-foreground hover:text-destructive",
									onClick: () => setDraft(/* @__PURE__ */ new Set()),
									children: "Limpar seleção"
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
					className: "min-h-0 flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-3 py-2",
						children: listQuery.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-2 py-16 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), " Carregando…"]
						}) : items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center justify-center gap-2 py-16 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground/60",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: "Nenhum exercício encontrado"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-xs text-xs text-muted-foreground",
									children: "Ajuste os filtros ou a busca."
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-1",
							children: items.map((ex) => {
								const checked = draft.has(ex.id);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => toggle(ex.id),
									className: cn("flex w-full items-center gap-3 rounded-md border px-3 py-2 text-left transition-colors duration-150", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", checked ? "border-primary/40 bg-primary/10" : "border-transparent bg-transparent hover:border-border/60 hover:bg-accent/40"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
										checked,
										className: "pointer-events-none",
										tabIndex: -1
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-sm font-medium text-foreground",
											children: ex.nome_pt
										}), (ex.metodologias.length > 0 || ex.equipamento.length > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-0.5 truncate text-[11px] text-muted-foreground",
											children: [
												ex.metodologias.map((m) => METHODOLOGY_LABEL[m] ?? m).join(" · "),
												ex.metodologias.length > 0 && ex.equipamento.length > 0 ? " — " : "",
												ex.equipamento.join(", ")
											]
										})]
									})]
								}) }, ex.id);
							})
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sticky bottom-0 flex items-center justify-between gap-3 border-t border-border/60 bg-background/95 px-5 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs tabular-nums text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: draft.size
							}),
							" selecionado",
							draft.size === 1 ? "" : "s",
							items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "ml-1 text-muted-foreground/70",
								children: [
									"· ",
									items.length,
									" visíve",
									items.length === 1 ? "l" : "is"
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "sm",
							onClick: () => onOpenChange(false),
							children: "Cancelar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							size: "sm",
							onClick: commit,
							className: "min-w-[100px]",
							children: "Aplicar"
						})]
					})]
				})
			]
		})
	});
}
function TargetingSection({ bloco, onChange }) {
	const equipQuery = useQuery({
		queryKey: ["equipamentos"],
		queryFn: () => listEquipamentos(),
		staleTime: 6e4
	});
	const modalidades = bloco.modalidades_alvo ?? [];
	const equipamentos = bloco.equipamentos_alvo ?? [];
	const countQuery = useQuery({
		queryKey: [
			"count-exercicios",
			modalidades.slice().sort().join("|"),
			equipamentos.slice().sort().join("|")
		],
		queryFn: () => countExercicios({ data: {
			modalidades,
			equipamentos
		} }),
		enabled: modalidades.length > 0,
		staleTime: 3e4
	});
	const toggleMod = (m) => {
		const next = modalidades.includes(m) ? modalidades.filter((x) => x !== m) : [...modalidades, m];
		onChange({
			...bloco,
			modalidades_alvo: next
		});
	};
	const toggleEquip = (e) => {
		const next = equipamentos.includes(e) ? equipamentos.filter((x) => x !== e) : [...equipamentos, e];
		onChange({
			...bloco,
			equipamentos_alvo: next
		});
	};
	const alvo = modalidades.length === 0;
	const count = countQuery.data ?? 0;
	const needed = bloco.num_exercicios ?? 3;
	const insuficiente = !alvo && !countQuery.isLoading && count < needed;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 rounded-xl border border-border/70 bg-card/60 p-3.5 sm:p-4 shadow-xs",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-border/50 pb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "h-3.5 w-3.5 text-primary" }), "Direcionamento do sorteio"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs text-muted-foreground leading-relaxed",
						children: "Restrinja de quais modalidades e equipamentos o motor sorteia neste bloco."
					})]
				}), modalidades.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					variant: "outline",
					className: cn("self-start sm:self-auto gap-1.5 border-border/70 font-medium tabular-nums shrink-0", countQuery.isLoading && "opacity-60", insuficiente && "border-warning/50 bg-warning/10 text-warning-foreground", !insuficiente && count > 0 && "border-primary/40 bg-primary/10 text-primary font-semibold"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs sm:text-sm font-bold",
						children: count
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[10px] uppercase tracking-wider",
						children: [
							count === 1 ? "exercício" : "exercícios",
							" · precisa ",
							needed
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2 flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-xs font-bold uppercase tracking-wider text-foreground",
						children: "Modalidades"
					}), modalidades.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] text-muted-foreground bg-muted/60 px-2 py-0.5 rounded border border-border/40",
						children: "Padrão: usa a modalidade do treino"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[11px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20",
							children: [
								modalidades.length,
								" selecionada",
								modalidades.length > 1 ? "s" : ""
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onChange({
								...bloco,
								modalidades_alvo: []
							}),
							className: "text-[11px] text-muted-foreground hover:text-foreground underline cursor-pointer",
							children: "Limpar"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2",
					children: Object.keys(METHODOLOGY_LABEL).map((m) => {
						const active = modalidades.includes(m);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => toggleMod(m),
							className: cn("flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition-all duration-150 text-left min-h-[38px] cursor-pointer", active ? "border-primary bg-primary/15 text-primary shadow-xs font-semibold ring-1 ring-primary/40" : "border-border/70 bg-background/80 text-muted-foreground hover:border-primary/40 hover:bg-accent/40 hover:text-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: METHODOLOGY_LABEL[m]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors", active ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/40 bg-background/50"),
								children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" })
							})]
						}, m);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2.5 pt-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2 flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-xs font-bold uppercase tracking-wider text-foreground",
						children: "Equipamentos"
					}), equipamentos.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] text-muted-foreground bg-muted/60 px-2 py-0.5 rounded border border-border/40",
						children: "Padrão: qualquer equipamento"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[11px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20",
							children: [
								equipamentos.length,
								" selecionado",
								equipamentos.length > 1 ? "s" : ""
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onChange({
								...bloco,
								equipamentos_alvo: []
							}),
							className: "text-[11px] text-muted-foreground hover:text-foreground underline cursor-pointer",
							children: "Limpar"
						})]
					})]
				}), equipQuery.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs text-muted-foreground py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin text-primary" }), " Carregando lista de equipamentos…"]
				}) : (equipQuery.data ?? []).length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground py-2",
					children: "Nenhum equipamento cadastrado no seu banco."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2",
					children: (equipQuery.data ?? []).map((eq) => {
						const active = equipamentos.includes(eq);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => toggleEquip(eq),
							className: cn("flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-xs capitalize transition-all duration-150 text-left min-h-[38px] cursor-pointer", active ? "border-primary bg-primary/15 text-primary shadow-xs font-semibold ring-1 ring-primary/40" : "border-border/70 bg-background/80 text-muted-foreground hover:border-primary/40 hover:bg-accent/40 hover:text-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: eq
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors", active ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/40 bg-background/50"),
								children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" })
							})]
						}, eq);
					})
				})]
			}),
			insuficiente && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-warning/50 bg-warning/10 p-3 text-xs text-warning-foreground leading-relaxed",
				children: [
					"Apenas ",
					count,
					" exercício",
					count === 1 ? "" : "s",
					" atende",
					count === 1 ? "" : "m",
					" a esses filtros. O motor precisará de ",
					needed,
					" e poderá repetir ou acionar fallback."
				]
			})
		]
	});
}
function SortableBloco({ id, index, bloco, onChange, onRemove }) {
	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
	const [expanded, setExpanded] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card$1, {
		ref: setNodeRef,
		style: {
			transform: CSS.Transform.toString(transform),
			transition
		},
		className: cn("group overflow-hidden border-border/60 transition-all duration-200", "hover:border-primary/40", isDragging && "shadow-xl ring-2 ring-primary/30"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-stretch gap-2 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					...attributes,
					...listeners,
					className: "flex w-6 shrink-0 cursor-grab items-center justify-center text-muted-foreground transition-colors hover:text-primary active:cursor-grabbing focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded",
					"aria-label": "Reordenar bloco",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 md:grid-cols-[220px_1fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
									children: "Formato"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: bloco.formato,
									onValueChange: (v) => onChange({
										...bloco,
										formato: v,
										presetId: v.includes(":") ? v : `builtin:${v}`
									}),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: ENABLED_FORMATS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: f,
										children: BLOCK_FORMAT_LABEL[f]
									}, f)) })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
									children: "Título"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: bloco.titulo,
									onChange: (e) => onChange({
										...bloco,
										titulo: e.target.value
									}),
									placeholder: "Ex: Aquecimento articular"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2 md:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumField, {
									label: "Duração (min)",
									value: bloco.duracao_min ?? 0,
									min: 0,
									max: 180,
									onChange: (n) => onChange({
										...bloco,
										duracao_min: n || null
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumField, {
									label: "Exercícios",
									value: bloco.num_exercicios,
									min: 1,
									max: 20,
									onChange: (n) => onChange({
										...bloco,
										num_exercicios: Math.max(1, n)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumField, {
									label: "Séries",
									value: bloco.series ?? 0,
									min: 1,
									max: 20,
									onChange: (n) => onChange({
										...bloco,
										series: n || 0,
										seriesMin: n || 0,
										seriesMax: n || 0
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumField, {
									label: "Reps base",
									value: bloco.reps_base,
									min: 1,
									max: 100,
									onChange: (n) => onChange({
										...bloco,
										reps_base: Math.max(1, n),
										repsPorExercicio: Math.max(1, n)
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TargetingSection, {
							bloco,
							onChange
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurationSection, {
							bloco,
							onChange
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setExpanded((v) => !v),
							className: "inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded",
							children: [expanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5" }), "Progressão avançada"]
						}), expanded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 space-y-4 rounded-lg border border-border/50 bg-muted/20 p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-3 md:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
											children: "Progressão"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: bloco.progressao,
											onValueChange: (v) => onChange({
												...bloco,
												progressao: v
											}),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "nenhuma",
													children: "Nenhuma (reps base)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "piramide_crescente",
													children: "Pirâmide crescente"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "piramide_decrescente",
													children: "Pirâmide decrescente"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "onda",
													children: "Onda"
												})
											] })]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RepsPattern, {
										value: bloco.reps_pattern,
										onChange: (reps_pattern) => onChange({
											...bloco,
											reps_pattern
										})
									})]
								}),
								bloco.formato === "forca_tecnica_pct" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PassosPct, {
									value: bloco.passos,
									onChange: (passos) => onChange({
										...bloco,
										passos
									})
								}),
								bloco.formato === "kb_timed_sets" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-3 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumField, {
										label: "Tempo trabalho (s)",
										value: bloco.tempo_trabalho ?? 0,
										min: 0,
										max: 600,
										onChange: (n) => onChange({
											...bloco,
											tempo_trabalho: n || null
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumField, {
										label: "Tempo descanso (s)",
										value: bloco.tempo_descanso ?? 0,
										min: 0,
										max: 600,
										onChange: (n) => onChange({
											...bloco,
											tempo_descanso: n || null
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-3 sm:grid-cols-2 md:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumField, {
											label: "Descanso bloco (s)",
											value: bloco.descansoAposSeg,
											min: 0,
											max: 600,
											onChange: (n) => onChange({
												...bloco,
												descansoAposSeg: n
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
												children: "Execução"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												value: bloco.modoExecucao,
												onValueChange: (v) => onChange({
													...bloco,
													modoExecucao: v
												}),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "circuito",
													children: "Circuito"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "series_fixas",
													children: "Séries Fixas"
												})] })]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
												children: "Seleção Exerc."
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												value: bloco.selecaoExercicios,
												onValueChange: (v) => onChange({
													...bloco,
													selecaoExercicios: v
												}),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "ia",
													children: "Inteligência Artificial"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "manual",
													children: "Manual (Curadoria)"
												})] })]
											})]
										})
									]
								})
							]
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "icon",
						onClick: onRemove,
						className: "h-8 w-8 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive",
						"aria-label": "Remover bloco",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[10px] font-medium uppercase tracking-widest text-muted-foreground/70",
						children: ["#", index + 1]
					})]
				})
			]
		})
	});
}
function NumField({ label, value, min, max, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			type: "number",
			min,
			max,
			value,
			onChange: (e) => onChange(Number(e.target.value))
		})]
	});
}
function RepsPattern({ value, onChange }) {
	const [input, setInput] = (0, import_react.useState)("");
	function add() {
		const n = Number(input);
		if (!Number.isFinite(n) || n <= 0) return;
		onChange([...value, Math.floor(n)]);
		setInput("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
				children: "Padrão de reps (opcional)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-1.5 rounded-md border border-input bg-background p-2 focus-within:ring-2 focus-within:ring-ring",
				children: [value.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					variant: "secondary",
					className: "gap-1 pr-1",
					children: [n, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onChange(value.filter((_, j) => j !== i)),
						className: "rounded-full p-0.5 text-muted-foreground transition-colors hover:bg-destructive/20 hover:text-destructive",
						"aria-label": `Remover ${n}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
					})]
				}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: input,
					onChange: (e) => setInput(e.target.value),
					onKeyDown: (e) => {
						if (e.key === "Enter" || e.key === ",") {
							e.preventDefault();
							add();
						}
					},
					onBlur: add,
					placeholder: value.length ? "" : "Ex: 12, 10, 8, 6",
					className: "min-w-[80px] flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/60",
					inputMode: "numeric"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] leading-relaxed text-muted-foreground",
				children: "Se preenchido, substitui reps base e progressão."
			})
		]
	});
}
function PassosPct({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
				children: "Passos %1RM"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "ghost",
				size: "sm",
				onClick: () => onChange([...value, {
					pct: 60,
					sets: 3,
					reps: 5
				}]),
				className: "h-7 gap-1 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" }), " Adicionar passo"]
			})]
		}), value.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "rounded-md border border-dashed border-border/60 p-3 text-center text-xs text-muted-foreground",
			children: "Sem passos definidos — o motor usa um padrão automático."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: value.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[1fr_1fr_1fr_auto] gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumField, {
						label: i === 0 ? "%1RM" : "",
						value: p.pct,
						min: 0,
						max: 100,
						onChange: (n) => onChange(value.map((x, j) => j === i ? {
							...x,
							pct: n
						} : x))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumField, {
						label: i === 0 ? "Séries" : "",
						value: p.sets,
						min: 1,
						max: 20,
						onChange: (n) => onChange(value.map((x, j) => j === i ? {
							...x,
							sets: n
						} : x))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumField, {
						label: i === 0 ? "Reps" : "",
						value: p.reps,
						min: 1,
						max: 50,
						onChange: (n) => onChange(value.map((x, j) => j === i ? {
							...x,
							reps: n
						} : x))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "icon",
						onClick: () => onChange(value.filter((_, j) => j !== i)),
						className: cn("h-9 w-9 self-end text-muted-foreground hover:bg-destructive/10 hover:text-destructive"),
						"aria-label": "Remover passo",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
					})
				]
			}, i))
		})]
	});
}
function novoBloco() {
	return {
		formato: "bodybuilding_sets",
		presetId: "builtin:bodybuilding_sets",
		titulo: "Novo bloco",
		duracao_min: null,
		num_exercicios: 3,
		series: 3,
		seriesMin: 3,
		seriesMax: 3,
		reps_base: 10,
		repsPorExercicio: 10,
		reps_pattern: [],
		progressao: "nenhuma",
		passos: [],
		tempo_trabalho: null,
		tempo_descanso: null,
		descansoAposSeg: 60,
		modoExecucao: "circuito",
		selecaoExercicios: "ia",
		exerciciosFixos: [],
		fonteExercicios: {},
		modalidades_alvo: [],
		equipamentos_alvo: [],
		exercicios_permitidos: []
	};
}
function MethodologyPanel({ state, onUpdate, sensors, onDragEnd }) {
	if (state.loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-center rounded-xl border border-dashed border-border/60 py-16 text-sm text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), " Carregando preferências…"]
	});
	const ids = state.blocos.map((_, i) => `bloco-${i}`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					variant: state.origem === "custom" ? "default" : "secondary",
					className: "gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), state.origem === "custom" ? "Preferências personalizadas" : "Usando templates padrão"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted-foreground",
					children: [
						state.blocos.length,
						" ",
						state.blocos.length === 1 ? "bloco" : "blocos"
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				onClick: () => onUpdate((b) => [...b, novoBloco()]),
				className: "gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Adicionar bloco"]
			})]
		}), state.blocos.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card$1, {
			className: "flex flex-col items-center justify-center gap-3 border-dashed py-12 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: "Nenhum bloco configurado"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: "Adicione blocos para personalizar essa modalidade."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					onClick: () => onUpdate((b) => [...b, novoBloco()]),
					className: "gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Adicionar bloco"]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DndContext, {
			sensors,
			collisionDetection: closestCenter,
			onDragEnd,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableContext, {
				items: ids,
				strategy: verticalListSortingStrategy,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: state.blocos.map((bloco, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableBloco, {
						id: `bloco-${i}`,
						index: i,
						bloco,
						onChange: (next) => onUpdate((b) => b.map((x, j) => j === i ? next : x)),
						onRemove: () => onUpdate((b) => b.filter((_, j) => j !== i))
					}, `bloco-${i}`))
				})
			})
		})]
	});
}
var SECTIONS = [
	{
		key: "geracao",
		label: "Geração & Blocos",
		hint: "Motor automático, formatos e API",
		icon: Sparkles
	},
	{
		key: "aparencia",
		label: "Aparência",
		hint: "Tema e visual",
		icon: Palette
	},
	{
		key: "marca",
		label: "Marca",
		hint: "Logo, cores e rodapé",
		icon: Layers
	},
	{
		key: "arquivos",
		label: "Arquivos",
		hint: "Planilhas, PDFs e mídias",
		icon: FolderArchive
	}
];
var LEGACY_SECTION = {
	formatos: "geracao",
	fusao: "geracao",
	api: "geracao"
};
var METS = Object.keys(METHODOLOGY_LABEL);
function makeEmpty() {
	return METS.reduce((acc, m) => {
		acc[m] = {
			blocos: [],
			origem: "template",
			loading: true,
			dirty: false
		};
		return acc;
	}, {});
}
function ConfiguracoesPage() {
	const searchSection = Route.useSearch().section;
	const navigate = useNavigate({ from: Route.fullPath });
	const load = useServerFn(getGeneratorPrefs);
	const save = useServerFn(saveGeneratorPrefs);
	const [state, setState] = (0, import_react.useState)(makeEmpty);
	const [tab, setTab] = (0, import_react.useState)("hibrido");
	const [saving, setSaving] = (0, import_react.useState)(false);
	const section = SECTIONS.some((s) => s.key === searchSection) ? searchSection : LEGACY_SECTION[searchSection ?? ""] ?? "geracao";
	const { presets } = useFormatRegistry();
	const { data: coach } = useCoach();
	const { data: files = [], isLoading: filesLoading } = useCoachFiles();
	function setSection(next) {
		navigate({
			search: { section: next },
			replace: true
		});
	}
	(0, import_react.useEffect)(() => {
		if (!state[tab].loading) return;
		load({ data: { metodologia: tab } }).then((res) => setState((prev) => ({
			...prev,
			[tab]: {
				blocos: res.blocos,
				origem: res.origem,
				loading: false,
				dirty: false
			}
		}))).catch((err) => {
			toast.error(err?.message ?? "Falha ao carregar preferências");
			setState((prev) => ({
				...prev,
				[tab]: {
					...prev[tab],
					loading: false
				}
			}));
		});
	}, [tab]);
	const current = state[tab];
	function update(fn) {
		setState((prev) => ({
			...prev,
			[tab]: {
				...prev[tab],
				blocos: fn(prev[tab].blocos),
				dirty: true
			}
		}));
	}
	async function onSave() {
		setSaving(true);
		try {
			await save({ data: {
				metodologia: tab,
				blocos: current.blocos
			} });
			toast.success("Preferências salvas");
			setState((prev) => ({
				...prev,
				[tab]: {
					...prev[tab],
					dirty: false,
					origem: "custom"
				}
			}));
		} catch (err) {
			toast.error(err?.message ?? "Falha ao salvar");
		} finally {
			setSaving(false);
		}
	}
	async function onDiscard() {
		setState((prev) => ({
			...prev,
			[tab]: {
				...prev[tab],
				loading: true,
				dirty: false
			}
		}));
	}
	const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 4 } }));
	function onDragEnd(e) {
		const { active, over } = e;
		if (!over || active.id === over.id) return;
		update((blocos) => {
			const oldIndex = blocos.findIndex((_, i) => `bloco-${i}` === active.id);
			const newIndex = blocos.findIndex((_, i) => `bloco-${i}` === over.id);
			if (oldIndex < 0 || newIndex < 0) return blocos;
			return arrayMove(blocos, oldIndex, newIndex);
		});
	}
	const totalBytes = files.reduce((acc, f) => acc + (f.metadata?.size ?? 0), 0);
	const lastUpload = files[0]?.created_at ? new Date(files[0].created_at).toLocaleDateString("pt-BR", {
		day: "2-digit",
		month: "short"
	}) : "—";
	const [activeVisualTheme, setActiveVisualTheme] = (0, import_react.useState)("padrao");
	(0, import_react.useEffect)(() => {
		setActiveVisualTheme(getStoredTheme());
	}, [section]);
	const kpis = section === "aparencia" ? [{
		label: "Tema ativo",
		value: activeVisualTheme === "pulse" ? "Pulse" : activeVisualTheme === "midnight" ? "Midnight" : "Padrão",
		icon: Palette
	}, {
		label: "Estilo visual",
		value: activeVisualTheme === "pulse" ? "Moderno" : activeVisualTheme === "midnight" ? "Fintech Glow" : "Clássico",
		hint: "Afeta bordas, gradientes e cores"
	}] : section === "marca" ? [
		{
			label: "Logo",
			value: coach?.logo_url ? "Enviada" : "Pendente",
			hint: "Cabeçalho das exportações",
			icon: Palette
		},
		{
			label: "Cor primária",
			value: (coach?.cor_primaria ?? "#F26B1F").toUpperCase(),
			swatch: coach?.cor_primaria ?? "#F26B1F"
		},
		{
			label: "Cor secundária",
			value: (coach?.cor_secundaria ?? "#0F1115").toUpperCase(),
			swatch: coach?.cor_secundaria ?? "#0F1115"
		},
		{
			label: "Rodapé",
			value: coach?.rodape_export ? "Definido" : "Vazio",
			hint: coach?.rodape_export ?? "Pé de página das exportações"
		}
	] : section === "arquivos" ? [
		{
			label: "Arquivos",
			value: String(files.length),
			icon: FolderArchive
		},
		{
			label: "Espaço usado",
			value: formatBytes(totalBytes)
		},
		{
			label: "Último envio",
			value: lastUpload,
			hint: "Data do upload mais recente"
		}
	] : [
		{
			label: "Modalidade",
			value: METHODOLOGY_LABEL[tab],
			icon: Sparkles
		},
		{
			label: "Blocos",
			value: String(current.blocos.length),
			hint: "Na modalidade ativa"
		},
		{
			label: "Preferências",
			value: current.origem === "custom" ? "Personalizadas" : "Padrão"
		},
		{
			label: "Formatos ativos",
			value: String(presets.length),
			icon: Layers
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl min-w-0 px-3 py-4 sm:px-6 sm:py-8 md:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsHeader, {
				icon: Settings,
				eyebrow: "Conta",
				title: "Configurações",
				description: "Preferências do motor de geração, identidade visual e materiais do seu trabalho."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				role: "tablist",
				"aria-label": "Seções de configurações",
				className: "-mx-3 mb-6 sm:mb-8 flex snap-x gap-1.5 overflow-x-auto px-3 pb-1.5 md:mx-0 md:inline-flex md:snap-none md:gap-1 md:rounded-xl md:border md:border-border/60 md:bg-muted/40 md:p-1 md:px-1 no-scrollbar",
				children: SECTIONS.map((s) => {
					const active = section === s.key;
					const Icon = s.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "tab",
						"aria-selected": active,
						onClick: () => setSection(s.key),
						className: cn("group flex shrink-0 snap-start items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]", active ? "border-primary/40 bg-background text-foreground shadow-sm" : "border-transparent text-muted-foreground hover:bg-accent/40 hover:text-foreground"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: cn("h-4 w-4 shrink-0 transition-colors duration-200", active ? "text-primary" : "text-muted-foreground group-hover:text-foreground") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "whitespace-nowrap",
							children: s.label
						})]
					}, s.key);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiRow, {
				items: kpis,
				loading: section === "arquivos" ? filesLoading : false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 space-y-6",
				children: [
					section === "aparencia" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fold, {
						title: "Aparência do sistema",
						description: "Escolha o tema visual que melhor se adapta ao seu estilo de trabalho.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AparenciaPanel, {})
					}),
					section === "marca" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fold, {
						title: "Marca do treinador",
						description: "Logo, cores e rodapé aplicados no cabeçalho das exportações em PDF, Excel e imagem.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarcaPanel, {})
					}),
					section === "arquivos" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fold, {
						title: "Seus arquivos",
						description: "Envie e baixe planilhas, PDFs, mídias e outros materiais do seu trabalho.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArquivosPanel, {})
					}),
					section === "geracao" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Fold, {
							title: "Geração automática",
							description: "Blocos, séries e progressões usados pelo motor em cada modalidade.",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
								value: tab,
								onValueChange: (v) => setTab(v),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-6 md:hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: tab,
											onValueChange: (v) => setTab(v),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: METS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: m,
												children: METHODOLOGY_LABEL[m]
											}, m)) })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
										className: "mb-6 hidden h-auto w-full flex-wrap justify-start gap-1 bg-muted/40 p-1 md:flex",
										children: METS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
											value: m,
											className: "data-[state=active]:bg-background data-[state=active]:shadow-sm",
											children: METHODOLOGY_LABEL[m]
										}, m))
									}),
									METS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
										value: m,
										className: "mt-0 focus-visible:outline-none",
										children: m === tab && (m === "kettlebell_fitness" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbFitnessPanel, {
											state: current,
											onUpdate: update
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodologyPanel, {
											state: current,
											onUpdate: update,
											sensors,
											onDragEnd
										}))
									}, m))
								]
							}), current.dirty && !current.loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sticky bottom-4 z-20 mt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mx-auto flex max-w-3xl items-center justify-between gap-3 rounded-xl border border-border/60 bg-card/95 p-3 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-card/80",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "pl-2 text-xs text-muted-foreground md:text-sm",
										children: "Alterações se aplicam nas próximas gerações."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "sm",
											onClick: onDiscard,
											disabled: saving,
											children: "Descartar"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											onClick: onSave,
											disabled: saving,
											className: "min-w-[140px]",
											children: saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), " Salvando…"] }) : "Salvar alterações"
										})]
									})]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fold, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetTypesPanel, {}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fold, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormatosPanel, {}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fold, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApiPanel, {}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fold, {
							title: "Diagnóstico de Sistema",
							description: "Informações técnicas para suporte e depuração.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiagnosticPanel, {})
						})
					] })
				]
			})
		]
	});
}
//#endregion
export { ConfiguracoesPage as component };
