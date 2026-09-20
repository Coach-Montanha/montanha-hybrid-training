import { o as __toESM } from "../_runtime.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-CCQEfgNs.mjs";
import { m as TriangleAlert, s as WandSparkles } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-SwVf5DHm.mjs";
import { t as Input } from "./input-DoD5W07l.mjs";
import { t as Label } from "./label-B1jF9p8Y.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-B7RuMzGd.mjs";
import { t as Switch } from "./switch-C6cVMin1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/GerarTreinoModal-D1PBa0YY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ESCOLAS_CO = [
	{
		value: "auto",
		label: "Deixar sistema escolher",
		descricao: "Seleção pela distância-alvo, nível, volume e lesões"
	},
	{
		value: "daniels",
		label: "Daniels / VDOT",
		descricao: "Cinco ritmos calculados a partir de uma marca recente"
	},
	{
		value: "lydiard",
		label: "Lydiard",
		descricao: "Base aeróbica e periodização clássica em fases"
	},
	{
		value: "canova",
		label: "Canova",
		descricao: "Extensão do ritmo de prova — 21k/42k avançado/elite"
	},
	{
		value: "hansons",
		label: "Hansons",
		descricao: "Fadiga cumulativa, 6 dias/semana, long run curto"
	},
	{
		value: "pfitzinger",
		label: "Pfitzinger",
		descricao: "Limiar + long run tradicional (32-37 km)"
	},
	{
		value: "horwill",
		label: "Horwill / 5 ritmos",
		descricao: "Multi-Tier para 5k, 10k e meio-fundo"
	},
	{
		value: "koop",
		label: "Koop / Ultra",
		descricao: "Ultramaratona: fitness, especificidade e nutrição"
	}
];
var DISTANCIAS_CO = [
	{
		value: "corrida_rua",
		label: "Corrida de rua (geral)"
	},
	{
		value: "5k",
		label: "5 km"
	},
	{
		value: "10k",
		label: "10 km"
	},
	{
		value: "21k",
		label: "Meia maratona (21 km)"
	},
	{
		value: "42k",
		label: "Maratona (42 km)"
	},
	{
		value: "ultramaratona",
		label: "Ultramaratona"
	}
];
var TERRENOS_CO = [
	{
		value: "estrada",
		label: "Estrada / asfalto"
	},
	{
		value: "trilha",
		label: "Trilha"
	},
	{
		value: "montanha",
		label: "Montanha"
	},
	{
		value: "pista",
		label: "Pista de atletismo"
	}
];
var ESCOLAS_TF = [
	{
		value: "auto",
		label: "Deixar sistema escolher",
		descricao: "Seleção automática pelo perfil e limitações"
	},
	{
		value: "fms_sfma",
		label: "FMS/SFMA (Gray Cook)",
		descricao: "Triagem e corretivos antes de carga"
	},
	{
		value: "boyle",
		label: "Joint-by-Joint (Boyle)",
		descricao: "Unilaterais e performance esportiva"
	},
	{
		value: "exos",
		label: "EXOS / Core Performance",
		descricao: "Sistema integrado com blocos fixos"
	},
	{
		value: "dns",
		label: "DNS (Escola de Praga)",
		descricao: "Estabilização central e respiração"
	},
	{
		value: "crossfit",
		label: "CrossFit",
		descricao: "Condicionamento geral variado e intenso"
	},
	{
		value: "original_strength",
		label: "Original Strength",
		descricao: "Reset neuromotor e base de movimento"
	}
];
var OBJETIVOS_TF = [
	{
		value: "condicionamento_geral",
		label: "Condicionamento geral"
	},
	{
		value: "performance_esportiva",
		label: "Performance esportiva"
	},
	{
		value: "reabilitacao_retorno",
		label: "Reabilitação / retorno"
	},
	{
		value: "emagrecimento",
		label: "Emagrecimento"
	},
	{
		value: "hipertrofia_funcional",
		label: "Hipertrofia funcional"
	}
];
var EQUIPAMENTOS_TF = [
	{
		value: "peso_corporal",
		label: "Apenas peso corporal"
	},
	{
		value: "academia_completa",
		label: "Academia completa"
	},
	{
		value: "kettlebell_halteres",
		label: "Kettlebells e halteres"
	},
	{
		value: "outdoor",
		label: "Outdoor"
	}
];
var REGIOES_TF = [
	{
		value: "lombar",
		label: "Lombar"
	},
	{
		value: "joelho",
		label: "Joelho"
	},
	{
		value: "ombro",
		label: "Ombro"
	},
	{
		value: "quadril",
		label: "Quadril"
	},
	{
		value: "tornozelo",
		label: "Tornozelo"
	},
	{
		value: "core",
		label: "Core"
	},
	{
		value: "outro",
		label: "Outro"
	}
];
var FASES_TF = [
	{
		value: "aguda",
		label: "Aguda (dor ativa)"
	},
	{
		value: "em_recuperacao",
		label: "Em recuperação"
	},
	{
		value: "cronica_controlada",
		label: "Crônica controlada"
	}
];
var ESCOLAS_KB = [
	{
		value: "auto",
		label: "Deixar sistema escolher",
		descricao: "Seleção automática pelo perfil do atleta"
	},
	{
		value: "fedorenko",
		label: "Fedorenko / WKC",
		descricao: "Volume progressivo, técnica minimalista"
	},
	{
		value: "rudnev",
		label: "Rudnev",
		descricao: "Periodização científica e relaxamento"
	},
	{
		value: "vorotyntsev",
		label: "Vorotyntsev",
		descricao: "Didática técnica por estágios"
	},
	{
		value: "denisov",
		label: "Denisov",
		descricao: "Alto volume — nível avançado/elite"
	},
	{
		value: "vasilev",
		label: "Vasilev",
		descricao: "Ciclos com testes de controle"
	},
	{
		value: "gomonov",
		label: "Gomonov / Machotkin",
		descricao: "Onboarding pedagógico para iniciantes"
	}
];
var ESCOLAS_WL = [
	{
		value: "auto",
		label: "Deixar sistema escolher",
		descricao: "Seleção automática pelo perfil do atleta"
	},
	{
		value: "bulgara",
		label: "Búlgara",
		descricao: "Máximo diário — apenas elite com suporte total"
	},
	{
		value: "russa_classica",
		label: "Russa Clássica",
		descricao: "Periodização plurianual (Medvedev)"
	},
	{
		value: "chinesa",
		label: "Chinesa",
		descricao: "Correção de ponto fraco em alta frequência"
	},
	{
		value: "cubana",
		label: "Cubana",
		descricao: "Onboarding pedagógico para iniciantes"
	},
	{
		value: "colombiana",
		label: "Colombiana",
		descricao: "Transição de linha por classificação"
	},
	{
		value: "pendlay",
		label: "Pendlay / MDUSA",
		descricao: "Ensino técnico + frequência adaptada"
	},
	{
		value: "takano",
		label: "Takano",
		descricao: "Framework científico de planejamento"
	}
];
var NIVEIS = [
	{
		value: "iniciante",
		label: "Iniciante"
	},
	{
		value: "intermediario",
		label: "Intermediário"
	},
	{
		value: "avancado",
		label: "Avançado"
	},
	{
		value: "elite",
		label: "Elite"
	}
];
var DISCIPLINAS = [
	{
		value: "biathlon",
		label: "Biathlon (Snatch + Jerk)"
	},
	{
		value: "long_cycle",
		label: "Long Cycle"
	},
	{
		value: "ambas",
		label: "Ambas"
	}
];
var PONTOS_FRACOS = [
	{
		value: "pernas",
		label: "Pernas"
	},
	{
		value: "costas",
		label: "Costas"
	},
	{
		value: "recepcao",
		label: "Técnica de recepção"
	},
	{
		value: "mobilidade_ombro",
		label: "Mobilidade de ombro"
	}
];
var RECUPERACAO = [
	{
		value: "baixa",
		label: "Baixa"
	},
	{
		value: "media",
		label: "Média"
	},
	{
		value: "alta",
		label: "Alta"
	}
];
var PESOS_KETTLEBELL = [
	8,
	12,
	16,
	20,
	24,
	28,
	32
];
function CargaKbInput({ label, carga, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-2 gap-3 rounded-lg border border-border bg-muted/30 p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "col-span-2 text-sm font-medium text-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					className: "text-xs text-muted-foreground",
					children: "Kettlebell (kg)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: carga.pesoKettlebellKg?.toString() ?? "",
					onValueChange: (v) => onChange({
						...carga,
						pesoKettlebellKg: Number(v)
					}),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Selecionar" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: PESOS_KETTLEBELL.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
						value: p.toString(),
						children: [p, " kg"]
					}, p)) })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					className: "text-xs text-muted-foreground",
					children: "Reps atuais (10 min)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "number",
					min: 0,
					placeholder: "Ex: 45",
					className: "h-9",
					value: carga.repsAtuais10min ?? "",
					onChange: (e) => onChange({
						...carga,
						repsAtuais10min: e.target.value ? Number(e.target.value) : null
					})
				})]
			})
		]
	});
}
function CargaWlInput({ label, valor, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex-1 text-sm font-medium text-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			type: "number",
			min: 0,
			placeholder: "kg (melhor marca)",
			className: "h-9 w-40",
			value: valor ?? "",
			onChange: (e) => onChange(e.target.value ? Number(e.target.value) : null)
		})]
	});
}
function GerarTreinoModal({ open, onOpenChange, modalidade, titulo, escopoLabel, dataInicio, diasPorSemana, onGenerateKb, onGenerateWl, onGenerateTf, onGenerateCo, onGenerateHibrido, isGenerating = false }) {
	const isKb = modalidade === "kettlebell_sport";
	const isTf = modalidade === "treinamento_funcional";
	const isCo = modalidade === "corrida";
	const isHibrido = modalidade === "hibrido" || modalidade === "kettlebell_fitness";
	const isWlMod = !isKb && !isTf && !isCo && !isHibrido;
	const [escolaKb, setEscolaKb] = (0, import_react.useState)("auto");
	const [escolaWl, setEscolaWl] = (0, import_react.useState)("auto");
	const [nivel, setNivel] = (0, import_react.useState)("intermediario");
	const [disciplina, setDisciplina] = (0, import_react.useState)("long_cycle");
	const [pesoCorporal, setPesoCorporal] = (0, import_react.useState)(null);
	const vazia = {
		pesoKettlebellKg: null,
		repsAtuais10min: null
	};
	const [snatch, setSnatch] = (0, import_react.useState)(vazia);
	const [jerk, setJerk] = (0, import_react.useState)(vazia);
	const [longCycle, setLongCycle] = (0, import_react.useState)(vazia);
	const [classificacao, setClassificacao] = (0, import_react.useState)("");
	const [pontoFraco, setPontoFraco] = (0, import_react.useState)("nenhum");
	const [recuperacao, setRecuperacao] = (0, import_react.useState)("media");
	const [suporteTotal, setSuporteTotal] = (0, import_react.useState)(false);
	const [arranco, setArranco] = (0, import_react.useState)(null);
	const [arremesso, setArremesso] = (0, import_react.useState)(null);
	const [agachaCostas, setAgachaCostas] = (0, import_react.useState)(null);
	const [agachaFrontal, setAgachaFrontal] = (0, import_react.useState)(null);
	const [escolaTf, setEscolaTf] = (0, import_react.useState)("auto");
	const [objetivoTf, setObjetivoTf] = (0, import_react.useState)("condicionamento_geral");
	const [equipamentoTf, setEquipamentoTf] = (0, import_react.useState)("academia_completa");
	const [sedentarismo, setSedentarismo] = (0, import_react.useState)(false);
	const [lesoes, setLesoes] = (0, import_react.useState)([]);
	const [escolaCo, setEscolaCo] = (0, import_react.useState)("auto");
	const [distanciaCo, setDistanciaCo] = (0, import_react.useState)("10k");
	const [volumeKm, setVolumeKm] = (0, import_react.useState)(null);
	const [freqAtual, setFreqAtual] = (0, import_react.useState)(null);
	const [marcaDist, setMarcaDist] = (0, import_react.useState)("nenhuma");
	const [marcaTempo, setMarcaTempo] = (0, import_react.useState)("");
	const [dataProva, setDataProva] = (0, import_react.useState)("");
	const [terreno, setTerreno] = (0, import_react.useState)("nao_informado");
	const [altaFrequencia, setAltaFrequencia] = (0, import_react.useState)(false);
	const escolas = isCo ? ESCOLAS_CO : isTf ? ESCOLAS_TF : isKb ? ESCOLAS_KB : ESCOLAS_WL;
	const escolaAtual = isCo ? escolaCo : isTf ? escolaTf : isKb ? escolaKb : isHibrido ? "auto" : escolaWl;
	const descricaoEscola = escolas.find((e) => e.value === escolaAtual)?.descricao;
	const avisoKb = isKb && escolaKb === "denisov" && (nivel === "iniciante" || nivel === "intermediario");
	const avisoWl = isWlMod && escolaWl === "bulgara" && !((nivel === "elite" || nivel === "avancado") && recuperacao === "alta" && suporteTotal);
	function handleSubmit() {
		if (isCo) {
			onGenerateCo?.({
				escolaMetodologica: escolaCo,
				nivelAtleta: nivel,
				distanciaAlvo: distanciaCo,
				volumeSemanalKm: volumeKm,
				frequenciaSemanalAtual: freqAtual,
				marcaRecenteDistancia: marcaDist === "nenhuma" ? null : marcaDist,
				marcaRecenteTempo: marcaTempo.trim() || null,
				dataProvaAlvo: dataProva || null,
				terreno: terreno === "nao_informado" ? null : terreno,
				preferenciaAltaFrequencia: altaFrequencia,
				lesoes
			});
			return;
		}
		if (isHibrido) {
			onGenerateHibrido?.({
				modalidade,
				tituloPrograma: titulo,
				numeroSessoes: diasPorSemana,
				diasPorSemana,
				dataInicio,
				sessaoTemplate: []
			});
			return;
		}
		if (isTf) {
			onGenerateTf?.({
				escolaMetodologica: escolaTf,
				nivelAtleta: nivel,
				objetivo: objetivoTf,
				equipamento: equipamentoTf,
				sedentarismoProlongado: sedentarismo,
				lesoes
			});
			return;
		}
		if (isKb) {
			const cargas = {};
			if (disciplina === "biathlon" || disciplina === "ambas") {
				cargas.snatch = snatch;
				cargas.jerk = jerk;
			}
			if (disciplina === "long_cycle" || disciplina === "ambas") cargas.longCycle = longCycle;
			onGenerateKb({
				escolaMetodologica: escolaKb,
				nivelAtleta: nivel,
				disciplina,
				pesoCorporalKg: pesoCorporal,
				cargas
			});
			return;
		}
		onGenerateWl({
			escolaMetodologica: escolaWl,
			nivelAtleta: nivel,
			pesoCorporalKg: pesoCorporal,
			classificacaoOficial: classificacao.trim() || null,
			pontoFracoIdentificado: pontoFraco === "nenhum" ? null : pontoFraco,
			capacidadeRecuperacao: recuperacao,
			suporteTotalDeclarado: suporteTotal,
			cargas: {
				arranco: { cargaKg: arranco },
				arremesso: { cargaKg: arremesso },
				agachamentoCostas: { cargaKg: agachaCostas },
				agachamentoFrontal: { cargaKg: agachaFrontal }
			}
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "flex max-h-[90dvh] max-w-lg flex-col overflow-y-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
					className: "flex items-center gap-2 text-base",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "h-5 w-5 text-primary" }),
						"Configurar geração —",
						" ",
						isCo ? "Corrida" : isTf ? "Treinamento Funcional" : isKb ? "Kettlebell Sport" : "Levantamento de Peso"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
					className: "text-xs",
					children: [
						titulo,
						" · ",
						escopoLabel,
						" · ",
						diasPorSemana,
						" sessão(ões)/semana · início em",
						" ",
						dataInicio
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5 py-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Escola metodológica" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: escolaAtual,
									onValueChange: (v) => isCo ? setEscolaCo(v) : isTf ? setEscolaTf(v) : isKb ? setEscolaKb(v) : setEscolaWl(v),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: escolas.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: e.value,
										children: e.label
									}, e.value)) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: descricaoEscola
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Nível do atleta" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: nivel,
									onValueChange: (v) => setNivel(v),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: NIVEIS.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: n.value,
										children: n.label
									}, n.value)) })]
								})]
							}), isCo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Distância-alvo" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: distanciaCo,
									onValueChange: (v) => setDistanciaCo(v),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: DISTANCIAS_CO.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: d.value,
										children: d.label
									}, d.value)) })]
								})]
							}) : isTf ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Objetivo principal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: objetivoTf,
									onValueChange: (v) => setObjetivoTf(v),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: OBJETIVOS_TF.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: o.value,
										children: o.label
									}, o.value)) })]
								})]
							}) : isKb ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Disciplina" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: disciplina,
									onValueChange: (v) => setDisciplina(v),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: DISCIPLINAS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: d.value,
										children: d.label
									}, d.value)) })]
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Capacidade de recuperação" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: recuperacao,
									onValueChange: (v) => setRecuperacao(v),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: RECUPERACAO.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: r.value,
										children: r.label
									}, r.value)) })]
								})]
							})]
						}),
						isCo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Volume semanal atual (km)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "number",
										min: 0,
										placeholder: "Ex: 35",
										value: volumeKm ?? "",
										onChange: (e) => setVolumeKm(e.target.value ? Number(e.target.value) : null)
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Frequência atual (dias/sem)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "number",
										min: 0,
										max: 7,
										placeholder: "Ex: 4",
										value: freqAtual ?? "",
										onChange: (e) => setFreqAtual(e.target.value ? Number(e.target.value) : null)
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Marca recente — distância" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: marcaDist,
										onValueChange: (v) => setMarcaDist(v),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "nenhuma",
											children: "Não informar"
										}), DISTANCIAS_CO.filter((d) => d.value !== "corrida_rua").map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: d.value,
											children: d.label
										}, d.value))] })]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Marca recente — tempo" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: "Ex: 00:48:30",
										maxLength: 20,
										disabled: marcaDist === "nenhuma",
										value: marcaTempo,
										onChange: (e) => setMarcaTempo(e.target.value)
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Data da prova-alvo — opcional" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "date",
										value: dataProva,
										onChange: (e) => setDataProva(e.target.value)
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Terreno" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: terreno,
										onValueChange: (v) => setTerreno(v),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "nao_informado",
											children: "Não informado"
										}), TERRENOS_CO.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: t.value,
											children: t.label
										}, t.value))] })]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-lg border border-border bg-muted/30 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pr-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: "Prefere alta frequência semanal"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Tolera 6 dias/semana — habilita o modelo de fadiga cumulativa (Hansons)."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
									checked: altaFrequencia,
									onCheckedChange: setAltaFrequencia
								})]
							})
						] }),
						(isTf || isCo) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							isTf && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Equipamento disponível" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: equipamentoTf,
									onValueChange: (v) => setEquipamentoTf(v),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: EQUIPAMENTOS_TF.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: e.value,
										children: e.label
									}, e.value)) })]
								})]
							}),
							isTf && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-lg border border-border bg-muted/30 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pr-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: "Sedentarismo prolongado"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Retorno após longo período sem treinar."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
									checked: sedentarismo,
									onCheckedChange: setSedentarismo
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-sm",
										children: "Lesões e limitações"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										variant: "outline",
										size: "sm",
										disabled: lesoes.length >= 6,
										onClick: () => setLesoes((l) => [...l, {
											regiao: "lombar",
											fase: "cronica_controlada",
											observacaoLivre: null
										}]),
										children: "Adicionar"
									})]
								}), lesoes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Nenhuma limitação informada — a prescrição assume liberação total."
								}) : lesoes.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 rounded-lg border border-border bg-muted/30 p-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												value: l.regiao,
												onValueChange: (v) => setLesoes((arr) => arr.map((x, j) => j === i ? {
													...x,
													regiao: v
												} : x)),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													className: "h-9",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: REGIOES_TF.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: r.value,
													children: r.label
												}, r.value)) })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												value: l.fase,
												onValueChange: (v) => setLesoes((arr) => arr.map((x, j) => j === i ? {
													...x,
													fase: v
												} : x)),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													className: "h-9",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: FASES_TF.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: f.value,
													children: f.label
												}, f.value)) })]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: "Observação (opcional)",
											maxLength: 300,
											value: l.observacaoLivre ?? "",
											onChange: (e) => setLesoes((arr) => arr.map((x, j) => j === i ? {
												...x,
												observacaoLivre: e.target.value || null
											} : x))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "button",
											variant: "ghost",
											size: "sm",
											className: "text-destructive hover:text-destructive",
											onClick: () => setLesoes((arr) => arr.filter((_, j) => j !== i)),
											children: "Remover"
										})
									]
								}, i))]
							}),
							lesoes.some((l) => l.fase === "aguda") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-2 rounded-lg border border-warning/40 bg-warning/10 p-3 text-xs leading-relaxed text-warning-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Há lesão em fase aguda: a prescrição será conservadora e recomendará avaliação profissional presencial antes de progredir carga." })]
							})
						] }),
						isWlMod && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Classificação oficial — opcional" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									placeholder: "Ex: Mestre do Esporte",
									value: classificacao,
									onChange: (e) => setClassificacao(e.target.value)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Ponto fraco identificado" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: pontoFraco,
									onValueChange: (v) => setPontoFraco(v),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "nenhum",
										children: "Nenhum"
									}), PONTOS_FRACOS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: p.value,
										children: p.label
									}, p.value))] })]
								})]
							})]
						}),
						isWlMod && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between rounded-lg border border-border bg-muted/30 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pr-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: "Suporte total declarado"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Dedicação integral, fisioterapia e recuperação assistida."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
								checked: suporteTotal,
								onCheckedChange: setSuporteTotal
							})]
						}),
						(avisoKb || avisoWl) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-2 rounded-lg border border-warning/40 bg-warning/10 p-3 text-xs leading-relaxed text-warning-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: avisoKb ? "A linha Denisov envolve volume muito alto e é recomendada para atletas avançados/elite. Confirme que deseja aplicá-la a este perfil." : "A linha Búlgara exige nível elite/avançado, recuperação alta e suporte total. Sem as três condições, a prescrição será gerada em versão mais conservadora." })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Peso corporal (kg) — opcional" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								min: 0,
								placeholder: "Ex: 78",
								value: pesoCorporal ?? "",
								onChange: (e) => setPesoCorporal(e.target.value ? Number(e.target.value) : null)
							})]
						}),
						!isTf && !isCo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-sm",
								children: "Cargas iniciais"
							}), isKb ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(disciplina === "biathlon" || disciplina === "ambas") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CargaKbInput, {
								label: "Snatch",
								carga: snatch,
								onChange: setSnatch
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CargaKbInput, {
								label: "Jerk",
								carga: jerk,
								onChange: setJerk
							})] }), (disciplina === "long_cycle" || disciplina === "ambas") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CargaKbInput, {
								label: "Long Cycle",
								carga: longCycle,
								onChange: setLongCycle
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CargaWlInput, {
									label: "Arranco",
									valor: arranco,
									onChange: setArranco
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CargaWlInput, {
									label: "Arremesso",
									valor: arremesso,
									onChange: setArremesso
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CargaWlInput, {
									label: "Agachamento costas",
									valor: agachaCostas,
									onChange: setAgachaCostas
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CargaWlInput, {
									label: "Agachamento frontal",
									valor: agachaFrontal,
									onChange: setAgachaFrontal
								})
							] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => onOpenChange(false),
					children: "Cancelar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: handleSubmit,
					disabled: isGenerating,
					children: isGenerating ? "Gerando..." : "Gerar treino"
				})] })
			]
		})
	});
}
//#endregion
export { GerarTreinoModal, GerarTreinoModal as default };
