import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BxRH54s6.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-CCQEfgNs.mjs";
import { At as Earth, _t as GitMerge, h as Trash2, qt as ChevronLeft, tt as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as Badge } from "./badge-Bt-nVIZo.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { r as METHODOLOGY_LABEL } from "./methodology-DF-HMT6m.mjs";
import { S as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Card } from "./card-Bav9nr75.mjs";
import { t as useCoach } from "./use-coach-B0Sg5_sT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.exercicios.duplicados-B-SdaH1u.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DuplicadosPage() {
	const { data: coach } = useCoach();
	const navigate = useNavigate();
	const qc = useQueryClient();
	const [busyId, setBusyId] = (0, import_react.useState)(null);
	const { data: duplicates = [], isLoading } = useQuery({
		queryKey: ["exercises", "duplicates"],
		queryFn: async () => {
			if (!coach?.id) return [];
			const { data, error } = await supabase.rpc("find_duplicate_exercises", { _coach_id: coach.id });
			if (error) throw error;
			const groups = {};
			(data || []).forEach((ex) => {
				const key = ex.nome_pt.toLowerCase().trim();
				if (!groups[key]) groups[key] = [];
				groups[key].push(ex);
			});
			return Object.entries(groups).map(([name, items]) => ({
				name,
				items
			}));
		},
		enabled: !!coach?.id
	});
	const mergeMutation = useMutation({
		mutationFn: async ({ keeperId, duplicateIds }) => {
			const { error } = await supabase.rpc("merge_exercises", {
				_keeper_id: keeperId,
				_duplicate_ids: duplicateIds
			});
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success("Exercícios fundidos com sucesso");
			qc.invalidateQueries({ queryKey: ["exercises"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const deleteMutation = useMutation({
		mutationFn: async (id) => {
			const { error } = await supabase.from("exercises").delete().eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success("Exercício excluído");
			qc.invalidateQueries({ queryKey: ["exercises"] });
		},
		onError: (e) => toast.error(e.message)
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-[50vh] items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 flex items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				onClick: () => navigate({ to: "/app/exercicios" }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold tracking-tight text-foreground",
					children: "Limpeza de Duplicados"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Encontramos exercícios com nomes idênticos em nosso repositório. Como todos são iguais, você pode fundir qualquer duplicata sem restrições."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					className: "mt-4 border-orange-500/50 text-orange-500 hover:bg-orange-500/10",
					onClick: async () => {
						if (!coach?.id || duplicates.length === 0) return;
						if (confirm("Isso irá processar todos os grupos de duplicados, fundindo os exercícios excedentes na primeira versão encontrada. Deseja continuar?")) {
							setBusyId("cleaning-all");
							let successCount = 0;
							for (const group of duplicates) {
								const keeper = group.items[0];
								const duplicateIds = group.items.filter((i) => i.id !== keeper.id).map((i) => i.id);
								if (duplicateIds.length > 0) try {
									await mergeMutation.mutateAsync({
										keeperId: keeper.id,
										duplicateIds
									});
									successCount++;
								} catch (e) {
									console.error(`Erro ao fundir grupo ${group.name}:`, e);
								}
							}
							setBusyId(null);
							toast.success(`Limpeza concluída! ${successCount} grupos processados.`);
						}
					},
					disabled: !!busyId,
					children: [busyId === "cleaning-all" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitMerge, { className: "mr-2 h-4 w-4" }), "Limpeza Automática de Todos"]
				})
			] })]
		}), duplicates.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "flex flex-col items-center justify-center p-12 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 rounded-full bg-primary/10 p-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitMerge, { className: "h-6 w-6 text-primary" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-medium",
					children: "Tudo limpo!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Não foram encontrados exercícios duplicados no seu catálogo."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-6",
					onClick: () => navigate({ to: "/app/exercicios" }),
					children: "Voltar ao Banco"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-6",
			children: duplicates.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "overflow-hidden border-border/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-muted/30 px-4 py-2 border-b border-border/40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: ["Grupo: ", group.name]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-border/40",
					children: group.items.map((ex) => {
						const isGlobal = !ex.coach_id;
						const canMergeHere = group.items.length > 1;
						const isBusy = busyId === ex.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between hover:bg-accent/5 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: ex.nome_pt
									}), isGlobal && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
										variant: "outline",
										className: "gap-1 text-[10px] uppercase",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-3 w-3" }), " Global"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 flex flex-wrap gap-1",
									children: [ex.equipamento?.map((eq) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "secondary",
										className: "text-[10px]",
										children: eq
									}, eq)), ex.metodologias?.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										className: "text-[10px]",
										children: METHODOLOGY_LABEL[m]
									}, m))]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex shrink-0 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									className: "h-8 gap-1.5",
									onClick: async () => {
										const duplicateIds = group.items.filter((i) => i.id !== ex.id).map((i) => i.id);
										if (duplicateIds.length === 0) {
											toast.info("Não há outros exercícios neste grupo para fundir.");
											return;
										}
										if (confirm(`Deseja fundir os ${duplicateIds.length} exercícios duplicados deste grupo em "${ex.nome_pt}"?`)) {
											setBusyId(ex.id);
											await mergeMutation.mutateAsync({
												keeperId: ex.id,
												duplicateIds
											});
											setBusyId(null);
										}
									},
									disabled: !!busyId || !canMergeHere,
									children: [isBusy && busyId === ex.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitMerge, { className: "h-3.5 w-3.5" }), "Manter e Fundir"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "sm",
									className: "h-8 text-destructive hover:bg-destructive/10",
									onClick: async () => {
										if (confirm(`Excluir permanentemente o exercício "${ex.nome_pt}"?`)) {
											setBusyId(ex.id);
											await deleteMutation.mutateAsync(ex.id);
											setBusyId(null);
										}
									},
									disabled: !!busyId,
									children: isBusy && busyId === ex.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
								})]
							})]
						}, ex.id);
					})
				})]
			}, group.name))
		})]
	});
}
//#endregion
export { DuplicadosPage as component };
