import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BxRH54s6.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-CCQEfgNs.mjs";
import { C as Sparkles, N as Settings2, an as ArrowRight, m as TriangleAlert, on as ArrowLeft, s as WandSparkles } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-DoD5W07l.mjs";
import { t as Label } from "./label-B1jF9p8Y.mjs";
import { t as Badge } from "./badge-Bt-nVIZo.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-B7RuMzGd.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { r as METHODOLOGY_LABEL } from "./methodology-DF-HMT6m.mjs";
import { S as useNavigate, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useServerFn } from "./ssr-rpc-DsWtVjPG.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Card } from "./card-Bav9nr75.mjs";
import { t as useCoach } from "./use-coach-B0Sg5_sT.mjs";
import { r as getGeneratorPrefs } from "./generator-prefs.functions-VkZdfEVy.mjs";
import { n as gerarTreino, t as Stepper } from "./gerador.functions-C5JHuKjv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.gerar-C9ur7dNx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PrescreverIaDialog = (0, import_react.lazy)(() => import("./PrescreverIaDialog-CrVK-cbI.mjs").then((m) => ({ default: m.PrescreverIaDialog })));
var GerarTreinoModal = (0, import_react.lazy)(() => import("./GerarTreinoModal-D1PBa0YY.mjs").then((m) => ({ default: m.GerarTreinoModal })));
var ConstrutorMoldeDialog = (0, import_react.lazy)(() => import("./ConstrutorMoldeDialog-DbZub7hC.mjs").then((m) => ({ default: m.ConstrutorMoldeDialog })));
var SEMANAS_POR_ESCOPO = {
	sessao: 1,
	semana: 1,
	mes: 4,
	ano: 52
};
var ESCOPO_LABEL = {
	sessao: "1 sessão",
	semana: "1 semana",
	mes: "1 mês (4 semanas)",
	ano: "1 ano (52 semanas)"
};
function GerarPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GerarPanel, {});
}
function GerarPanel({ showHeader = true } = {}) {
	const navigate = useNavigate();
	const gerar = useServerFn(gerarTreino);
	const { data: coach } = useCoach();
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [metodologia, setMetodologia] = (0, import_react.useState)("hibrido");
	const [escopo, setEscopo] = (0, import_react.useState)("sessao");
	const [titulo, setTitulo] = (0, import_react.useState)("Programa gerado");
	const [dataInicio, setDataInicio] = (0, import_react.useState)((/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
	const [dias, setDias] = (0, import_react.useState)(3);
	const [avisos, setAvisos] = (0, import_react.useState)([]);
	const [iaPrograma, setIaPrograma] = (0, import_react.useState)(null);
	const [iaEscopo, setIaEscopo] = (0, import_react.useState)(null);
	const [kbConfig, setKbConfig] = (0, import_react.useState)(null);
	const [wlConfig, setWlConfig] = (0, import_react.useState)(null);
	const [tfConfig, setTfConfig] = (0, import_react.useState)(null);
	const [coConfig, setCoConfig] = (0, import_react.useState)(null);
	const [kbModalOpen, setKbModalOpen] = (0, import_react.useState)(false);
	const [moldeModalOpen, setMoldeModalOpen] = (0, import_react.useState)(false);
	const isMusculacao = metodologia === "musculacao";
	const isKbSport = metodologia === "kettlebell_sport";
	const isWeightlifting = metodologia === "levantamento_peso";
	const isFuncional = metodologia === "treinamento_funcional";
	const isCorrida = metodologia === "corrida";
	const isHibrido = metodologia === "hibrido";
	const isKbFitness = metodologia === "kettlebell_fitness";
	const [, setPosicionarAberto] = (0, import_react.useState)(null);
	const [activeStep, setActiveStep] = (0, import_react.useState)(0);
	const steps = [
		{
			title: "Modalidade",
			description: "Tipo e identificação"
		},
		{
			title: "Planejamento",
			description: "Escopo e frequência"
		},
		{
			title: "Parâmetros & IA",
			description: "Diretrizes e geração"
		}
	];
	const isKbFitnessMolde = isKbFitness;
	const usaModalIa = isKbSport || isWeightlifting || isFuncional || isCorrida;
	const usaMolde = isHibrido || isKbFitnessMolde;
	const prefs = useQuery({
		queryKey: ["generator-prefs", metodologia],
		queryFn: () => getGeneratorPrefs({ data: { metodologia } })
	});
	async function onSubmit(e) {
		e.preventDefault();
		if (usaMolde) {
			setMoldeModalOpen(true);
			return;
		}
		if (usaModalIa) {
			setKbModalOpen(true);
			return;
		}
		setLoading(true);
		setAvisos([]);
		try {
			if (isMusculacao) {
				if (!coach) throw new Error("Perfil de treinador não encontrado");
				const { data: prog, error } = await supabase.from("programs").insert({
					coach_id: coach.id,
					metodologia: "musculacao",
					titulo,
					data_inicio: dataInicio,
					duracao_semanas: SEMANAS_POR_ESCOPO[escopo] ?? 4
				}).select("id, titulo").single();
				if (error || !prog) throw new Error(error?.message ?? "Falha ao criar rotina");
				setIaEscopo({
					label: ESCOPO_LABEL[escopo] ?? escopo,
					semanas: SEMANAS_POR_ESCOPO[escopo] ?? 4,
					diasPorSemana: escopo === "sessao" ? 1 : dias,
					dataInicio
				});
				setIaPrograma({
					id: prog.id,
					titulo: prog.titulo ?? titulo,
					metodologia: "musculacao"
				});
				return;
			}
			const res = await gerar({ data: {
				metodologia,
				escopo,
				titulo,
				data_inicio: dataInicio,
				dias_por_semana: dias
			} });
			toast.success(`Gerado: ${res.resultado.reduce((s, r) => s + (r.sessoes || 0), 0)} sessão(ões)`);
			const list = res.avisos;
			if (list && list.length > 0) setAvisos(list);
			if (res.primeira_sessao_id) navigate({
				to: "/app/sessoes/$id",
				params: { id: res.primeira_sessao_id }
			});
		} catch (err) {
			toast.error(err?.message ?? "Falha ao gerar");
		} finally {
			setLoading(false);
		}
	}
	/** Cria a rotina e abre a prescrição por IA com a escola metodológica escolhida. */
	async function gerarComEscola(cfg) {
		setLoading(true);
		try {
			if (!coach) throw new Error("Perfil de treinador não encontrado");
			if (usaMolde && cfg.hibrido) {
				const { validarLimitesDoMolde } = await import("./format-limits-DWDauxMB.mjs");
				const violacoes = validarLimitesDoMolde(cfg.hibrido.sessaoTemplate.map((b) => ({
					formato: b.formato,
					numeroExercicios: b.numeroExercicios,
					seriesMax: b.seriesMax
				})));
				if (violacoes.length > 0) {
					const v = violacoes[0];
					throw new Error(`FORMAT_LIMIT_EXCEEDED — o formato "${v.formato}" aceita no máximo ${v.maximo} em ${v.campo} (você configurou ${v.valor}).`);
				}
				const { gerarSessoesHibrido } = await import("./hibrido-gerar.functions-CqLmB83b.mjs");
				const res = await gerarSessoesHibrido({ data: {
					modalidade: metodologia,
					tituloPrograma: titulo,
					numeroSessoes: cfg.hibrido.numeroSessoes,
					diasPorSemana: escopo === "sessao" ? 1 : dias,
					dataInicio,
					sessaoTemplate: cfg.hibrido.sessaoTemplate,
					instrucoes: cfg.instrucoes ?? ""
				} });
				toast.success(`${res.sessoesGeradas} treino(s) gerado(s) com sucesso.`);
				res.avisos?.forEach((a) => toast.warning(a));
				setMoldeModalOpen(false);
				setPosicionarAberto({
					programaId: res.programaId,
					modalidade: metodologia
				});
				return;
			}
			const semanas = SEMANAS_POR_ESCOPO[escopo] ?? 4;
			const { data: prog, error } = await supabase.from("programs").insert({
				coach_id: coach.id,
				metodologia,
				titulo,
				data_inicio: dataInicio,
				duracao_semanas: semanas
			}).select("id, titulo").single();
			if (error || !prog) throw new Error(error?.message ?? "Falha ao criar rotina");
			setKbConfig(cfg.kb ?? null);
			setWlConfig(cfg.wl ?? null);
			setTfConfig(cfg.tf ?? null);
			setCoConfig(cfg.co ?? null);
			setKbModalOpen(false);
			setIaEscopo({
				label: ESCOPO_LABEL[escopo] ?? escopo,
				semanas,
				diasPorSemana: escopo === "sessao" ? 1 : dias,
				dataInicio
			});
			setIaPrograma({
				id: prog.id,
				titulo: prog.titulo ?? titulo
			});
		} catch (err) {
			toast.error(err?.message ?? "Falha ao gerar");
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: showHeader ? "mx-auto max-w-2xl p-6" : "mx-auto max-w-2xl",
		children: [
			showHeader && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold tracking-tight",
						children: "Gerar treino"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Motor automático baseado nos templates da modalidade."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: () => navigate({
						to: "/app/treinos",
						search: { aba: "programas" }
					}),
					className: "text-muted-foreground hover:text-foreground",
					children: "Voltar"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-6 pb-4 border-b",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
							steps,
							activeStep,
							onStepClick: (step) => setActiveStep(step)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "space-y-5",
						children: [
							activeStep === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 animate-in fade-in duration-200",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "titulo-input",
										className: "text-sm font-medium",
										children: "Título do programa"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "titulo-input",
										value: titulo,
										onChange: (e) => setTitulo(e.target.value),
										placeholder: "Ex.: Bloco de Força Inicial, Hipertrofia 12 Semanas...",
										required: true,
										className: "mt-1.5"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-sm font-medium",
											children: "Modalidade esportiva / metodologia"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: metodologia,
											onValueChange: (v) => setMetodologia(v),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "mt-1.5",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: Object.keys(METHODOLOGY_LABEL).map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: k,
												children: METHODOLOGY_LABEL[k]
											}, k)) })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-xs text-muted-foreground",
											children: "O gerador adapta os templates e motores de IA para os princípios técnicos dessa modalidade."
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pt-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "button",
											className: "w-full gap-2 cursor-pointer",
											onClick: () => {
												if (!titulo.trim()) {
													toast.error("Por favor, preencha o título do programa antes de continuar.");
													return;
												}
												setActiveStep(1);
											},
											children: ["Continuar: Planejamento ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
										})
									})
								]
							}),
							activeStep === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 animate-in fade-in duration-200",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 md:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-sm font-medium",
											children: "Escopo do programa"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: escopo,
											onValueChange: (v) => setEscopo(v),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "mt-1.5",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "sessao",
													children: "1 sessão"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "semana",
													children: "1 semana"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "mes",
													children: "1 mês (4 semanas)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "ano",
													children: "1 ano (52 semanas)"
												})
											] })]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-sm font-medium",
											children: "Data de início"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "date",
											value: dataInicio,
											onChange: (e) => setDataInicio(e.target.value),
											required: true,
											className: "mt-1.5"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-sm font-medium",
											children: "Frequência semanal (dias)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "number",
											min: 1,
											max: 7,
											value: dias,
											onChange: (e) => setDias(Number(e.target.value)),
											disabled: escopo === "sessao",
											className: "mt-1.5"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-xs text-muted-foreground",
											children: escopo === "sessao" ? "Fixado em 1 sessão avulsa." : "Quantidade de treinos distribuídos ao longo de cada semana."
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2 pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "button",
											variant: "outline",
											className: "flex-1 gap-2 cursor-pointer",
											onClick: () => setActiveStep(0),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Voltar"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "button",
											className: "flex-1 gap-2 cursor-pointer",
											onClick: () => setActiveStep(2),
											children: ["Avançar: Parâmetros & IA ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
										})]
									})
								]
							}),
							activeStep === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 animate-in fade-in duration-200",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-lg border bg-muted/20 p-3.5 text-xs space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-foreground block text-sm",
												children: "Resumo da Prescrição"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap gap-2 items-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground font-medium",
													children: "Programa:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-foreground",
													children: titulo
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap gap-2 items-center pt-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
														variant: "default",
														className: "text-xs",
														children: METHODOLOGY_LABEL[metodologia]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
														variant: "outline",
														className: "text-xs",
														children: ESCOPO_LABEL[escopo] ?? escopo
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
														variant: "secondary",
														className: "text-xs",
														children: escopo === "sessao" ? "1 sessão" : `${dias} dias / semana`
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-muted-foreground ml-auto text-[11px]",
														children: ["Início: ", dataInicio]
													})
												]
											})
										]
									}),
									isMusculacao ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5 rounded-lg border border-primary/25 bg-primary/[0.06] p-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex-1 leading-relaxed text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground",
													children: "Musculação usa IA."
												}),
												" Esta modalidade não usa o banco de exercícios nem os templates de blocos: ao gerar, criamos a rotina e abrimos o ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground",
													children: "Prescrever com IA"
												}),
												", onde você descreve a divisão desejada e revisa a prévia antes de salvar."
											]
										})]
									}) : isHibrido ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5 rounded-lg border border-primary/25 bg-primary/[0.06] p-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex-1 leading-relaxed text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground",
													children: "Motor por molde estrutural."
												}),
												" ",
												"Ao gerar, você monta a estrutura fixa de blocos da sessão (formato, duração, séries, número de exercícios, descanso) e a IA só escolhe quais exercícios da sua biblioteca preenchem cada bloco marcado como \"IA escolhe\"."
											]
										})]
									}) : isKbFitness ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5 rounded-lg border border-primary/25 bg-primary/[0.06] p-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex-1 leading-relaxed text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-foreground",
												children: "Motor dedicado por molde."
											}), " Kettlebell Fitness segue uma estrutura técnica rigorosa: Mobilidade (2 min), Aquecimento (5 min circuito) e bloco principal Kettlebell Fitness."]
										})]
									}) : isCorrida ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5 rounded-lg border border-primary/25 bg-primary/[0.06] p-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex-1 leading-relaxed text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground",
													children: "Motor por linha metodológica."
												}),
												" ",
												"Ao gerar, você informa distância-alvo, volume semanal, marca recente e lesões, e escolhe a linha (Daniels/VDOT, Lydiard, Canova, Hansons, Pfitzinger, Horwill, Koop)."
											]
										})]
									}) : isFuncional ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5 rounded-lg border border-primary/25 bg-primary/[0.06] p-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex-1 leading-relaxed text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground",
													children: "Motor por linha metodológica."
												}),
												" ",
												"Ao gerar, você informa objetivo, equipamento e limitações, e escolhe a linha (FMS, EXOS, DNS, CrossFit, Original Strength)."
											]
										})]
									}) : isWeightlifting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5 rounded-lg border border-primary/25 bg-primary/[0.06] p-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex-1 leading-relaxed text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground",
													children: "Motor por escola metodológica."
												}),
												" ",
												"Ao gerar, você escolhe a linha (Búlgara, Russa Clássica, Chinesa, Cubana, Colombiana, Pendlay, Takano)."
											]
										})]
									}) : isKbSport ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5 rounded-lg border border-primary/25 bg-primary/[0.06] p-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex-1 leading-relaxed text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground",
													children: "Motor por escola metodológica."
												}),
												" ",
												"Ao gerar, você escolhe a linha (Fedorenko, Rudnev, Vorotyntsev, Denisov, Vasilev, Gomonov)."
											]
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2 rounded-lg border border-border/60 bg-muted/30 p-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-1 flex-wrap items-center gap-x-2 gap-y-1 leading-relaxed text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: prefs.data?.origem === "custom" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
												"Usando suas preferências de ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground",
													children: METHODOLOGY_LABEL[metodologia]
												}),
												"."
											] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
												"Usando templates padrão de ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground",
													children: METHODOLOGY_LABEL[metodologia]
												}),
												"."
											] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/app/configuracoes",
												search: { section: "geracao" },
												className: "font-medium text-primary underline-offset-4 hover:underline",
												children: "Personalizar"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2 pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "button",
											variant: "outline",
											className: "flex-1 gap-2 cursor-pointer",
											onClick: () => setActiveStep(1),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Voltar"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "submit",
											disabled: loading,
											className: "flex-1 gap-2 cursor-pointer",
											children: loading ? isMusculacao ? "Criando rotina..." : "Gerando..." : isMusculacao ? "Prescrever com IA" : usaModalIa ? "Configurar e gerar" : "Gerar treino"
										})]
									})
								]
							})
						]
					}),
					avisos.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-2 rounded-lg border border-warning/40 bg-warning/10 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-sm font-semibold text-warning-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" }), "Avisos da geração"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-1 text-xs leading-relaxed text-warning-foreground/90",
							children: avisos.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 h-1 w-1 shrink-0 rounded-full bg-warning-foreground/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a })]
							}, i))
						})]
					})
				]
			}),
			moldeModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConstrutorMoldeDialog, {
					open: moldeModalOpen,
					onOpenChange: setMoldeModalOpen,
					modalidade: metodologia,
					tituloPrograma: titulo,
					isGenerating: loading,
					onGerar: (hibrido, instrucoes) => gerarComEscola({
						hibrido,
						instrucoes
					})
				})
			}),
			kbModalOpen && !isHibrido && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GerarTreinoModal, {
					open: kbModalOpen,
					onOpenChange: setKbModalOpen,
					modalidade: isKbSport ? "kettlebell_sport" : isCorrida ? "corrida" : isFuncional ? "treinamento_funcional" : "levantamento_peso",
					titulo,
					escopoLabel: ESCOPO_LABEL[escopo] ?? escopo,
					dataInicio,
					diasPorSemana: escopo === "sessao" ? 1 : dias,
					isGenerating: loading,
					onGenerateKb: (kb) => gerarComEscola({ kb }),
					onGenerateWl: (wl) => gerarComEscola({ wl }),
					onGenerateTf: (tf) => gerarComEscola({ tf }),
					onGenerateCo: (co) => gerarComEscola({ co })
				})
			}),
			iaPrograma && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrescreverIaDialog, {
					programa: iaPrograma,
					escopo: iaEscopo,
					kb: kbConfig,
					wl: wlConfig,
					tf: tfConfig,
					co: coConfig,
					onOpenChange: (o) => {
						if (!o) {
							setIaPrograma(null);
							setIaEscopo(null);
							setKbConfig(null);
							setWlConfig(null);
							setTfConfig(null);
							setCoConfig(null);
							navigate({ to: "/app/programas" });
						}
					}
				})
			})
		]
	});
}
//#endregion
export { GerarPanel, GerarPage as component };
