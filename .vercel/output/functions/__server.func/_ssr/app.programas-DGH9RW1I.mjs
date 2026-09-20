import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BxRH54s6.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-CCQEfgNs.mjs";
import { C as Sparkles, F as Search, Kt as ChevronRight, Mt as Download, St as FileText, V as Pencil, Zt as CalendarDays, dt as ImageDown, h as Trash2, r as X, st as Layers, tt as LoaderCircle, vt as FolderKanban } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-DoD5W07l.mjs";
import { t as Badge } from "./badge-Bt-nVIZo.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-B7RuMzGd.mjs";
import { a as SortableRow, i as SortableList } from "./sortable-list-7C-6tQZ_.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as CollapsibleContent, r as CollapsibleTrigger, t as Collapsible } from "./collapsible-Ct2uArBC.mjs";
import { r as METHODOLOGY_LABEL } from "./methodology-DF-HMT6m.mjs";
import { v as lazyRouteComponent, x as Link, y as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as object, n as zodValidator, o as boolean, t as fallback, u as string } from "../_libs/tanstack__zod-adapter+zod.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Card } from "./card-Bav9nr75.mjs";
import { a as prepararTreinoPdf, r as exportarSessoesPdfTabela } from "./pdf-treino-BvAJGnnP.mjs";
import { t as useCoach } from "./use-coach-B0Sg5_sT.mjs";
import { t as Skeleton } from "./skeleton-DLRLwmh_.mjs";
import { t as Checkbox } from "./checkbox-BvhzXIX4.mjs";
import { a as AlertDialogDescription, c as AlertDialogTitle, i as AlertDialogContent, n as AlertDialogAction, o as AlertDialogFooter, r as AlertDialogCancel, s as AlertDialogHeader, t as AlertDialog } from "./slider-DOPtNy4x.mjs";
import { i as useNovidadesPendentes, n as ProgramaEditorDialog, r as exportarSessoesImagemA4, t as ProgramImageDialog } from "./ProgramaEditorDialog-DRP3gm1u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.programas-DGH9RW1I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter$1 = () => import("./app.treinos-Dy2SL8XN.mjs");
var searchSchema = object({
	aba: fallback(string(), "programas").default("programas"),
	ia: fallback(boolean(), false).default(false)
});
var Route$1 = createFileRoute("/_authenticated/app/treinos")({
	validateSearch: zodValidator(searchSchema),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./app.programas-CXs6ZApe.mjs");
var PrescreverIaDialog = (0, import_react.lazy)(() => import("./PrescreverIaDialog-CrVK-cbI.mjs").then((m) => ({ default: m.PrescreverIaDialog })));
var Route = createFileRoute("/_authenticated/app/programas")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var METHODS = Object.keys(METHODOLOGY_LABEL);
function montarEscopoHibridoContinuacao(p) {
	const isHibrido = p?.metodologia === "hibrido" || p?.metodologia === "kettlebell_fitness";
	const historico = (p?.program_weeks ?? []).flatMap((w) => (w.sessions ?? []).map((s) => ({
		id: s.id,
		titulo: s.titulo ?? "Sessão",
		numero_dia: s.numero_dia,
		blocks: (s.session_blocks ?? []).map((b) => ({
			chave: b.chave || b.config?.chave || `b_${b.id}`,
			formato: b.formato,
			titulo: b.titulo,
			duracaoMin: b.duracao_min,
			seriesMin: b.config?.series || b.config?.rounds || 3,
			seriesMax: b.config?.series || b.config?.rounds || 3,
			numeroExercicios: b.session_block_exercises?.length || 1,
			repsPorExercicio: b.session_block_exercises?.[0]?.reps || "12",
			modoExecucao: b.config?.modo_execucao || "circuito",
			descansoAposSeg: b.config?.descanso_apos_seg || 0,
			selecaoExercicios: "ia",
			fonteExercicios: b.config?.fonteExercicios || { metodologias: [p.metodologia] }
		}))
	}))).filter((s) => s.blocks.length > 0);
	const diasPorSemana = p?.program_weeks?.[0]?.sessions?.length || 3;
	const ultimoHistorico = historico[historico.length - 1];
	return {
		label: "Continuação de Programação",
		semanas: p?.duracao_semanas || p?.program_weeks?.length || 1,
		diasPorSemana,
		hibrido: isHibrido ? {
			modalidade: p.metodologia,
			tituloPrograma: p.titulo ?? "Continuar Progressão",
			numeroSessoes: historico.length || diasPorSemana,
			diasPorSemana,
			dataInicio: (/* @__PURE__ */ new Date()).toISOString(),
			historicoSessoes: historico,
			sessaoTemplate: ultimoHistorico?.blocks ?? []
		} : null
	};
}
function ProgramasPanel({ showHeader = true, destacarIa = false } = {}) {
	const { data: coach } = useCoach();
	const qc = useQueryClient();
	const [q, setQ] = (0, import_react.useState)("");
	const [met, setMet] = (0, import_react.useState)(destacarIa ? "musculacao" : "todos");
	const [toDelete, setToDelete] = (0, import_react.useState)(null);
	const [selected, setSelected] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [confirmBulk, setConfirmBulk] = (0, import_react.useState)(false);
	const [bulkImg, setBulkImg] = (0, import_react.useState)(null);
	const [bulkPdf, setBulkPdf] = (0, import_react.useState)(false);
	const [geradas, setGeradas] = (0, import_react.useState)({});
	const [bulkImgLoading, setBulkImgLoading] = (0, import_react.useState)(false);
	const [layoutPrograma, setLayoutPrograma] = (0, import_react.useState)(null);
	const [editarId, setEditarId] = (0, import_react.useState)(null);
	const [iaPrograma, setIaPrograma] = (0, import_react.useState)(null);
	const programasKey = ["programas", coach?.id];
	const { data: programas = [], isLoading } = useQuery({
		queryKey: programasKey,
		enabled: !!coach,
		queryFn: async () => {
			const { data, error } = await supabase.from("programs").select("id, titulo, metodologia, data_inicio, duracao_semanas, status, criado_em, program_weeks(id, numero_semana, rotulo, sessions(id, numero_dia, titulo, status, session_blocks(id, titulo, formato, ordem, config, session_block_exercises(id, ordem, reps, series, carga_kg, descanso_seg, exercise_id, exercises(nome_pt)))))").order("criado_em", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const filtered = (0, import_react.useMemo)(() => {
		const needle = q.trim().toLowerCase();
		return programas.filter((p) => {
			if (met !== "todos" && p.metodologia !== met) return false;
			if (!needle) return true;
			return String(p.titulo ?? "").toLowerCase().includes(needle);
		});
	}, [
		programas,
		q,
		met
	]);
	const del = useMutation({
		mutationFn: async (id) => {
			const { error } = await supabase.from("programs").delete().eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success("Programa removido");
			qc.invalidateQueries({ queryKey: ["programas"] });
		},
		onError: (e) => toast.error(e.message)
	});
	/** Reordena sessões dentro de uma semana gravando `numero_dia`. */
	async function reorderSessoes(programId, weekId, orderedIds) {
		const snapshot = qc.getQueryData(programasKey);
		qc.setQueryData(programasKey, (old) => (old ?? []).map((p) => p.id !== programId ? p : {
			...p,
			program_weeks: (p.program_weeks ?? []).map((w) => w.id !== weekId ? w : {
				...w,
				sessions: orderedIds.map((id, i) => ({
					...(w.sessions ?? []).find((s) => s.id === id),
					numero_dia: i + 1
				}))
			})
		}));
		try {
			for (let i = 0; i < orderedIds.length; i++) {
				const { error } = await supabase.from("sessions").update({ numero_dia: i + 1 }).eq("id", orderedIds[i]);
				if (error) throw error;
			}
		} catch (e) {
			qc.setQueryData(programasKey, snapshot);
			toast.error(e?.message ?? "Não foi possível salvar a nova ordem dos dias");
		}
	}
	/** Reordena semanas gravando `numero_semana` (duas passadas por causa do unique). */
	async function reorderSemanas(programId, orderedIds) {
		const snapshot = qc.getQueryData(programasKey);
		qc.setQueryData(programasKey, (old) => (old ?? []).map((p) => p.id !== programId ? p : {
			...p,
			program_weeks: orderedIds.map((id, i) => ({
				...(p.program_weeks ?? []).find((w) => w.id === id),
				numero_semana: i + 1
			}))
		}));
		try {
			for (let i = 0; i < orderedIds.length; i++) {
				const { error } = await supabase.from("program_weeks").update({ numero_semana: -(i + 1) }).eq("id", orderedIds[i]);
				if (error) throw error;
			}
			for (let i = 0; i < orderedIds.length; i++) {
				const { error } = await supabase.from("program_weeks").update({ numero_semana: i + 1 }).eq("id", orderedIds[i]);
				if (error) throw error;
			}
		} catch (e) {
			qc.setQueryData(programasKey, snapshot);
			toast.error(e?.message ?? "Não foi possível salvar a nova ordem das semanas");
		}
	}
	const bulkDel = useMutation({
		mutationFn: async (ids) => {
			const { error } = await supabase.from("sessions").delete().in("id", ids);
			if (error) throw error;
		},
		onSuccess: (_d, ids) => {
			toast.success(`${ids.length} sessão(ões) removida(s)`);
			setSelected(/* @__PURE__ */ new Set());
			setConfirmBulk(false);
			qc.invalidateQueries({ queryKey: ["programas"] });
		},
		onError: (e) => toast.error(e.message)
	});
	function toggle(id) {
		setGeradas({});
		setSelected((prev) => {
			const next = new Set(prev);
			if (next.has(id)) next.delete(id);
			else next.add(id);
			return next;
		});
	}
	function toggleWeek(ids, allSelected) {
		setSelected((prev) => {
			const next = new Set(prev);
			if (allSelected) ids.forEach((id) => next.delete(id));
			else ids.forEach((id) => next.add(id));
			return next;
		});
	}
	async function exportarImagens(formato) {
		if (selected.size === 0) return;
		setBulkImgLoading(true);
		setBulkImg(formato);
		try {
			const total = await exportarSessoesImagemA4(Array.from(selected), formato, `treinos_${formato}.zip`);
			setGeradas((prev) => ({
				...prev,
				[formato]: total
			}));
			toast.success(`${total} imagem(ns) A4 exportada(s)`);
		} catch (e) {
			toast.error(e?.message ?? "Falha ao exportar imagens");
		} finally {
			setBulkImgLoading(false);
			setBulkImg(null);
		}
	}
	async function exportarPdfA4() {
		if (selected.size === 0) return;
		setBulkImgLoading(true);
		setBulkPdf(true);
		try {
			const ids = Array.from(selected);
			await exportarSessoesPdfTabela(ids, "treinos-a4.pdf");
			toast.success(`PDF A4 com ${ids.length} sessão(ões) gerado`);
		} catch (e) {
			toast.error(e?.message ?? "Falha ao exportar PDF");
		} finally {
			setBulkImgLoading(false);
			setBulkPdf(false);
		}
	}
	async function exportarTxtBulk() {
		if (selected.size === 0) return;
		setBulkImgLoading(true);
		setBulkImg("txt");
		try {
			const treino = await prepararTreinoPdf(Array.from(selected));
			let txt = `PROGRAMA DE TREINAMENTO: ${treino.titulo}\n`;
			if (treino.aluno) txt += `ALUNO: ${treino.aluno}\n`;
			txt += `CATEGORIA: ${treino.categoria}\n`;
			txt += `PERÍODO: ${treino.periodo}\n`;
			txt += `EXPORTADO EM: ${(/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR")}\n`;
			txt += `================================================================================\n\n`;
			for (const s of treino.sessoes) {
				txt += `${s.titulo.toUpperCase()}\n`;
				if (s.subtitulo) txt += `${s.subtitulo}\n`;
				txt += `--------------------------------------------------------------------------------\n`;
				for (const l of s.linhas) if (l.observacoes === "BLOCO_HEADER") txt += `\n[${l.nome.toUpperCase()}]\n`;
				else {
					txt += `- ${l.nome}`;
					const specs = [];
					if (l.seriesReps) specs.push(l.seriesReps);
					if (l.carga) specs.push(l.carga);
					if (l.descanso) specs.push(l.descanso);
					if (specs.length > 0) txt += ` (${specs.join(" | ")})`;
					if (l.observacoes) txt += ` · OBS: ${l.observacoes}`;
					txt += `\n`;
				}
				txt += `\n\n`;
			}
			const blob = new Blob([txt], { type: "text/plain;charset=utf-8" });
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = `treinos-selecionados.txt`;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			URL.revokeObjectURL(url);
			toast.success("Arquivo .txt gerado com sucesso");
		} catch (e) {
			toast.error(e?.message ?? "Falha ao exportar TXT");
		} finally {
			setBulkImgLoading(false);
			setBulkImg(null);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: showHeader ? "mx-auto max-w-6xl px-3 py-4 sm:px-6 sm:py-8 min-w-0" : "mx-auto max-w-6xl min-w-0",
		children: [
			showHeader && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "mb-6 sm:mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold tracking-tight sm:text-3xl break-words",
						children: "Programas"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs sm:text-sm text-muted-foreground",
						children: "Todos os treinos gerados e criados por você, organizados por semana."
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 sm:mb-6 grid gap-2.5 sm:gap-3 grid-cols-1 sm:grid-cols-[minmax(0,1fr)_16rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Buscar por título...",
						className: "pl-9",
						value: q,
						onChange: (e) => setQ(e.target.value)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: met,
					onValueChange: (v) => setMet(v),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "todos",
						children: "Todas as modalidades"
					}), METHODS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: m,
						children: METHODOLOGY_LABEL[m]
					}, m))] })]
				})]
			}),
			isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: [
					1,
					2,
					3
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "p-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-1/3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-20 rounded-full" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-28" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-24" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-8" })]
						})]
					})
				}, i))
			}) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "flex flex-col items-center justify-center gap-3 border-dashed p-14 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderKanban, { className: "h-6 w-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold",
						children: q || met !== "todos" ? "Nenhum programa encontrado" : "Nenhum programa cadastrado ainda"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground max-w-sm mx-auto",
						children: q || met !== "todos" ? "Tente ajustar o termo de busca ou selecione outra modalidade." : "Gere seu primeiro programa personalizado com Inteligência Artificial ou monte manualmente."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex gap-2",
						children: q || met !== "todos" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => {
								setQ("");
								setMet("todos");
							},
							children: "Limpar filtros"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/app/treinos",
							search: { aba: "gerar" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mr-1.5 h-4 w-4" }), " Criar Programa com IA"]
							})
						})
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 pb-24",
				children: filtered.map((p) => {
					const semanas = (p.program_weeks ?? []).sort((a, b) => a.numero_semana - b.numero_semana);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramaCard, {
						programa: p,
						semanas,
						totalSessoes: semanas.reduce((acc, w) => acc + (w.sessions?.length ?? 0), 0),
						selected,
						onToggleSession: toggle,
						onToggleWeek: toggleWeek,
						onReorderSessoes: (weekId, ids) => reorderSessoes(p.id, weekId, ids),
						onReorderSemanas: (ids) => reorderSemanas(p.id, ids),
						onOpenLayout: () => setLayoutPrograma(p),
						onEdit: () => setEditarId(p.id),
						onOpenIa: () => setIaPrograma({
							p,
							isContinuation: false
						}),
						destacarIa,
						onOpenContinuar: () => setIaPrograma({
							p,
							isContinuation: true
						}),
						onDelete: () => setToDelete({
							id: p.id,
							titulo: p.titulo ?? "programa"
						})
					}, p.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramImageDialog, {
				programa: layoutPrograma,
				onOpenChange: (o) => !o && setLayoutPrograma(null)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramaEditorDialog, {
				programaId: editarId,
				onOpenChange: (o) => !o && setEditarId(null)
			}),
			iaPrograma && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrescreverIaDialog, {
					programa: iaPrograma.p,
					escopo: iaPrograma.isContinuation ? montarEscopoHibridoContinuacao(iaPrograma.p) : null,
					onOpenChange: (o) => !o && setIaPrograma(null)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
				open: !!toDelete,
				onOpenChange: (o) => !o && setToDelete(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, { children: "Excluir programa?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogDescription, { children: [
					"\"",
					toDelete?.titulo,
					"\" e todas as suas semanas e sessões serão removidas. Esta ação não pode ser desfeita."
				] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: "Cancelar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
					className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
					onClick: () => {
						if (toDelete) del.mutate(toDelete.id);
						setToDelete(null);
					},
					children: "Excluir"
				})] })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
				open: confirmBulk,
				onOpenChange: setConfirmBulk,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogTitle, { children: [
					"Excluir ",
					selected.size,
					" sessão(ões)?"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, { children: "As sessões selecionadas e seus blocos/exercícios serão removidos. Esta ação não pode ser desfeita." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, {
					disabled: bulkDel.isPending,
					children: "Cancelar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
					disabled: bulkDel.isPending,
					className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
					onClick: (e) => {
						e.preventDefault();
						bulkDel.mutate(Array.from(selected));
					},
					children: bulkDel.isPending ? "Excluindo..." : "Excluir selecionadas"
				})] })] })
			}),
			selected.size > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-2 sm:px-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] sm:pb-6 duration-200 animate-in slide-in-from-bottom-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto flex flex-wrap items-center justify-between sm:justify-start gap-1.5 sm:gap-2 rounded-2xl sm:rounded-full border border-border/70 bg-card/95 p-2.5 sm:px-4 sm:py-2 shadow-lg backdrop-blur max-w-[96vw]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs sm:text-sm font-medium",
							children: [selected.size, " sessão(ões) selecionada(s)"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => setSelected(/* @__PURE__ */ new Set()),
							disabled: bulkImgLoading,
							className: "h-8 gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" }), "Limpar"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => exportarImagens("png"),
							disabled: bulkImgLoading,
							className: "h-8 gap-1.5",
							children: [
								bulkImgLoading && bulkImg === "png" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageDown, { className: "h-3.5 w-3.5" }),
								"PNG",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-muted px-1.5 text-[11px] font-semibold text-muted-foreground",
									children: geradas.png ?? selected.size
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => exportarImagens("jpg"),
							disabled: bulkImgLoading,
							className: "h-8 gap-1.5",
							children: [
								bulkImgLoading && bulkImg === "jpg" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageDown, { className: "h-3.5 w-3.5" }),
								"JPG",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-muted px-1.5 text-[11px] font-semibold text-muted-foreground",
									children: geradas.jpg ?? selected.size
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							onClick: exportarPdfA4,
							disabled: bulkImgLoading,
							className: "h-8 gap-1.5",
							children: [bulkPdf ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5" }), "PDF (A4)"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							onClick: exportarTxtBulk,
							disabled: bulkImgLoading,
							className: "h-8 gap-1.5",
							children: [bulkImgLoading && bulkImg === "txt" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), "TXT"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "destructive",
							onClick: () => setConfirmBulk(true),
							disabled: bulkImgLoading,
							className: "h-8 gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" }), "Excluir"]
						})
					]
				})
			})
		]
	});
}
function ProgramaCard({ programa, semanas, totalSessoes, selected, onToggleSession, onToggleWeek, onReorderSessoes, onReorderSemanas, onOpenLayout, onOpenIa, onEdit, destacarIa, onOpenContinuar, onDelete }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const temNovidades = useNovidadesPendentes();
	const data = programa.data_inicio ? new Date(programa.data_inicio).toLocaleDateString("pt-BR", {
		day: "2-digit",
		month: "short",
		year: "numeric"
	}) : "—";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collapsible, {
		open,
		onOpenChange: setOpen,
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "overflow-hidden border-border/70 transition-colors duration-200 hover:border-primary/40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CollapsibleTrigger, {
				className: "group flex w-full items-start gap-3 p-3.5 sm:p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-9 w-9 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderKanban, { className: "h-4 w-4 sm:h-5 sm:w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "break-words line-clamp-2 text-base font-semibold tracking-tight",
									children: programa.titulo
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: programa.status === "publicada" ? "default" : "secondary",
									className: "text-[10px] uppercase tracking-wide",
									children: programa.status
								}),
								programa.metodologia === "musculacao" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									variant: "outline",
									className: "gap-1 border-primary/40 text-[10px] uppercase tracking-wide text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), "IA"]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-3.5 w-3.5" }), METHODOLOGY_LABEL[programa.metodologia]]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-3.5 w-3.5" }), data]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									programa.duracao_semanas,
									" sem · ",
									totalSessoes,
									" sessões"
								] })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: `mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-90" : ""}` })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border/60 bg-muted/20 p-5",
				children: [semanas.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Sem semanas neste programa."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableList, {
					ids: semanas.map((w) => String(w.id)),
					label: "Semana",
					onReorder: (activeId, overId) => {
						const ids = semanas.map((w) => String(w.id));
						const from = ids.indexOf(activeId);
						const to = ids.indexOf(overId);
						if (from < 0 || to < 0) return;
						const next = [...ids];
						next.splice(to, 0, next.splice(from, 1)[0]);
						onReorderSemanas(next);
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4",
						children: semanas.map((w) => {
							const sessoes = (w.sessions ?? []).sort((a, b) => a.numero_dia - b.numero_dia);
							const sessionIds = sessoes.map((s) => s.id);
							const allSelected = sessionIds.length > 0 && sessionIds.every((id) => selected.has(id));
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SortableRow, {
								id: String(w.id),
								handleLabel: `Reordenar semana ${w.numero_semana}`,
								className: "flex-col items-stretch bg-card/60 p-3 pl-2",
								contentClassName: "flex-col items-stretch gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 truncate text-xs font-semibold uppercase tracking-wider text-muted-foreground",
										children: [
											"Semana ",
											w.numero_semana,
											w.rotulo ? ` · ${w.rotulo}` : ""
										]
									}), sessionIds.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => onToggleWeek(sessionIds, allSelected),
										className: "shrink-0 text-[11px] font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
										children: allSelected ? "desmarcar semana" : "selecionar semana"
									})]
								}), sessoes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground/80",
									children: "Sem sessões."
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableList, {
									ids: sessionIds.map(String),
									label: "Dia",
									onReorder: (activeId, overId) => {
										const ids = sessionIds.map(String);
										const from = ids.indexOf(activeId);
										const to = ids.indexOf(overId);
										if (from < 0 || to < 0) return;
										const next = [...ids];
										next.splice(to, 0, next.splice(from, 1)[0]);
										onReorderSessoes(String(w.id), next);
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-2",
										children: sessoes.map((s) => {
											const isSel = selected.has(s.id);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SortableRow, {
												id: String(s.id),
												handleLabel: `Reordenar dia ${s.numero_dia}`,
												className: `group items-start rounded-lg border border-border/60 bg-card px-3 py-3 text-sm transition-colors hover:border-primary/40 ${isSel ? "border-primary/60 bg-primary/5" : ""}`,
												contentClassName: "items-start gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
													checked: isSel,
													onCheckedChange: () => onToggleSession(s.id),
													className: "mt-1 shrink-0",
													"aria-label": "Selecionar sessão"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0 flex-1",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex flex-wrap items-center gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
																className: "truncate text-base font-semibold tracking-tight",
																children: s.titulo ?? `Treino ${s.numero_dia}`
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
																variant: "secondary",
																className: "shrink-0 text-[10px] font-medium",
																children: ["Dia ", s.numero_dia]
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-1 text-xs text-muted-foreground",
															children: s.status === "publicada" ? "Publicada para o aluno" : "Ainda não executado"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "mt-3 space-y-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex flex-wrap items-center gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
																	asChild: true,
																	size: "sm",
																	variant: "outline",
																	className: "h-8 gap-1.5",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
																		to: "/app/sessoes/$id",
																		params: { id: s.id },
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5" }), "Ver exercícios"]
																	})
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
																	variant: "outline",
																	className: "h-8 shrink-0 text-[10px] uppercase",
																	children: s.status
																})]
															}), s.session_blocks && s.session_blocks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "grid gap-2 border-t border-border/40 pt-2",
																children: s.session_blocks.sort((a, b) => (a.ordem || 0) - (b.ordem || 0)).map((block) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "text-[11px] leading-tight",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																		className: "font-bold uppercase text-primary/80",
																		children: [block.titulo || (block.formato ? block.formato.replace("builtin:", "") : "Bloco"), ":"]
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "ml-1 text-muted-foreground",
																		children: block.session_block_exercises && block.session_block_exercises.length > 0 ? block.session_block_exercises.sort((a, b) => (a.ordem || 0) - (b.ordem || 0)).map((e) => e.exercises?.nome_pt || e.nome_livre || "Exercício").join(", ") : "Sem exercícios"
																	})]
																}, block.id))
															})]
														})
													]
												})]
											}, s.id);
										})
									})
								})]
							}, w.id);
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-col sm:flex-row sm:flex-wrap sm:justify-end gap-2 w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							className: "w-full sm:w-auto min-h-[40px] gap-2 bg-primary/90 hover:bg-primary cursor-pointer",
							onClick: (e) => {
								e.preventDefault();
								e.stopPropagation();
								onOpenContinuar();
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), "Continuar gerando"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							className: "w-full sm:w-auto min-h-[40px] gap-2 cursor-pointer",
							onClick: (e) => {
								e.preventDefault();
								e.stopPropagation();
								onEdit();
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" }), "Editar programa"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							className: "relative w-full sm:w-auto min-h-[40px] gap-2 cursor-pointer",
							onClick: (e) => {
								e.preventDefault();
								e.stopPropagation();
								onOpenLayout();
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageDown, { className: "h-4 w-4" }),
								"Layout de imagem",
								temNovidades && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "absolute -right-1 -top-1 h-2 w-2 rounded-full bg-primary"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "ghost",
							className: "w-full sm:w-auto min-h-[40px] text-destructive hover:bg-destructive/10 hover:text-destructive cursor-pointer",
							onClick: (e) => {
								e.preventDefault();
								e.stopPropagation();
								onDelete();
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-2 h-4 w-4" }), "Excluir programa"]
						})
					]
				})]
			}) })]
		})
	});
}
//#endregion
export { Route as n, Route$1 as r, ProgramasPanel as t };
