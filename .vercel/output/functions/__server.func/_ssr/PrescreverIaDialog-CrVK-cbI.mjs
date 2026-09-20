import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BxRH54s6.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-CCQEfgNs.mjs";
import { $t as Brain, C as Sparkles, Jt as ChevronDown, Mt as Download, Y as Minus, g as Timer, lt as Info, o as Weight, rt as ListOrdered, tt as LoaderCircle, z as Plus } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-SwVf5DHm.mjs";
import { t as Textarea } from "./textarea-Dfe41XSO.mjs";
import { t as Badge } from "./badge-Bt-nVIZo.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-B7RuMzGd.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as CollapsibleContent, r as CollapsibleTrigger, t as Collapsible } from "./collapsible-Ct2uArBC.mjs";
import { r as METHODOLOGY_LABEL } from "./methodology-DF-HMT6m.mjs";
import { u as createServerFn } from "./esm-BJY6H9OB.mjs";
import { n as useServerFn, t as createSsrRpc } from "./ssr-rpc-DsWtVjPG.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-CHOPR5bi.mjs";
import { a as array, c as object, i as any, o as boolean, r as _enum, s as number, u as string } from "../_libs/tanstack__zod-adapter+zod.mjs";
import { a as useSetTypeRegistry } from "./set-type-registry-BN6pSciu.mjs";
import { t as useFormatRegistry } from "./format-registry-CPHaJypP.mjs";
import { i as parseAthleteMemory } from "./athlete-memory-AjhKHXJa.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PrescreverIaDialog-CrVK-cbI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CARGA = object({
	pesoKettlebellKg: number().nullable().default(null),
	repsAtuais10min: number().nullable().default(null)
}).optional();
var KB = object({
	escolaMetodologica: _enum([
		"auto",
		"fedorenko",
		"rudnev",
		"vorotyntsev",
		"denisov",
		"vasilev",
		"gomonov"
	]),
	nivelAtleta: _enum([
		"iniciante",
		"intermediario",
		"avancado",
		"elite"
	]),
	disciplina: _enum([
		"biathlon",
		"long_cycle",
		"ambas"
	]),
	pesoCorporalKg: number().nullable().default(null),
	cargas: object({
		snatch: CARGA,
		jerk: CARGA,
		longCycle: CARGA
	}).default({})
}).nullable().optional();
var WL = object({
	escolaMetodologica: _enum([
		"auto",
		"bulgara",
		"russa_classica",
		"chinesa",
		"cubana",
		"colombiana",
		"pendlay",
		"takano"
	]),
	nivelAtleta: _enum([
		"iniciante",
		"intermediario",
		"avancado",
		"elite"
	]),
	pesoCorporalKg: number().nullable().default(null),
	classificacaoOficial: string().max(80).nullable().default(null),
	pontoFracoIdentificado: _enum([
		"pernas",
		"costas",
		"recepcao",
		"mobilidade_ombro"
	]).nullable().default(null),
	capacidadeRecuperacao: _enum([
		"baixa",
		"media",
		"alta"
	]).default("media"),
	suporteTotalDeclarado: boolean().default(false),
	cargas: object({
		arranco: object({ cargaKg: number().nullable().default(null) }).optional(),
		arremesso: object({ cargaKg: number().nullable().default(null) }).optional(),
		agachamentoCostas: object({ cargaKg: number().nullable().default(null) }).optional(),
		agachamentoFrontal: object({ cargaKg: number().nullable().default(null) }).optional()
	}).default({})
}).nullable().optional();
var TF = object({
	escolaMetodologica: _enum([
		"auto",
		"fms_sfma",
		"boyle",
		"exos",
		"dns",
		"crossfit",
		"original_strength"
	]),
	nivelAtleta: _enum([
		"iniciante",
		"intermediario",
		"avancado",
		"elite"
	]),
	objetivo: _enum([
		"condicionamento_geral",
		"performance_esportiva",
		"reabilitacao_retorno",
		"emagrecimento",
		"hipertrofia_funcional"
	]),
	equipamento: _enum([
		"peso_corporal",
		"academia_completa",
		"kettlebell_halteres",
		"outdoor"
	]),
	sedentarismoProlongado: boolean().default(false),
	lesoes: array(object({
		regiao: _enum([
			"lombar",
			"joelho",
			"ombro",
			"quadril",
			"tornozelo",
			"core",
			"outro"
		]),
		fase: _enum([
			"aguda",
			"em_recuperacao",
			"cronica_controlada"
		]),
		observacaoLivre: string().max(300).nullable().default(null)
	})).max(6).default([])
}).nullable().optional();
var CO = object({
	escolaMetodologica: _enum([
		"auto",
		"daniels",
		"lydiard",
		"canova",
		"hansons",
		"pfitzinger",
		"horwill",
		"koop"
	]),
	nivelAtleta: _enum([
		"iniciante",
		"intermediario",
		"avancado",
		"elite"
	]),
	distanciaAlvo: _enum([
		"corrida_rua",
		"5k",
		"10k",
		"21k",
		"42k",
		"ultramaratona"
	]),
	volumeSemanalKm: number().nullable().default(null),
	frequenciaSemanalAtual: number().nullable().default(null),
	marcaRecenteDistancia: _enum([
		"corrida_rua",
		"5k",
		"10k",
		"21k",
		"42k",
		"ultramaratona"
	]).nullable().default(null),
	marcaRecenteTempo: string().max(20).nullable().default(null),
	dataProvaAlvo: string().max(20).nullable().default(null),
	terreno: _enum([
		"estrada",
		"trilha",
		"montanha",
		"pista"
	]).nullable().default(null),
	preferenciaAltaFrequencia: boolean().default(false),
	lesoes: array(object({
		regiao: _enum([
			"lombar",
			"joelho",
			"ombro",
			"quadril",
			"tornozelo",
			"core",
			"outro"
		]),
		fase: _enum([
			"aguda",
			"em_recuperacao",
			"cronica_controlada"
		]),
		observacaoLivre: string().max(300).nullable().default(null)
	})).max(6).default([])
}).nullable().optional();
var INPUT = object({
	programId: string().uuid(),
	studentId: string().uuid().nullable().optional(),
	prompt: string().max(4e3).default(""),
	diasPorSemana: number().int().min(1).max(7).nullable().optional(),
	escopoLabel: string().max(80).nullable().optional(),
	semanasNovas: number().int().min(1).max(12).default(1),
	metodologiaOverride: string().nullable().optional(),
	escolaOverride: string().optional(),
	historicoSessoes: number().int().min(0).max(12).nullable().optional(),
	cooldownSessoes: number().int().min(0).max(8).default(3),
	kb: KB,
	wl: WL,
	tf: TF,
	co: CO,
	hibrido: any().optional(),
	setTypes: array(any()).optional(),
	formatRegistry: array(any()).optional()
});
var prescribeTrainingWithAi = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => {
	try {
		return INPUT.parse(input);
	} catch (e) {
		console.error("[prescribeTrainingWithAi] Validation Error:", e);
		throw e;
	}
}).handler(createSsrRpc("e3ea1bf471664cc4a40358e0c339c9751fc02e4381934324365f8c93b5351070"));
var PLACEHOLDER = `Ex.: Próxima fase focada em força máxima, mantendo a divisão A/B anterior mas reduzindo as repetições para 4-6 e aumentando o descanso.
Priorizar exercícios básicos; manter o agachamento e o supino como primeiros movimentos da sessão.`;
function isPrescricaoHibrido(value) {
	return Boolean(value && Array.isArray(value.sessoes));
}
var EXEMPLOS = [
	{
		chip: "Hipertrofia 4x/semana",
		texto: "Divisão A/B/C/D para hipertrofia, 4 treinos por semana. 4x8-12 nos compostos e 3x12 nos isoladores, 90s de descanso."
	},
	{
		chip: "Full body 3x/semana",
		texto: "Full body 3 vezes por semana, 5 a 6 exercícios por treino, 3x10, 60s de descanso, foco em barra e halteres."
	},
	{
		chip: "Foco em membros inferiores",
		texto: "Divisão de 3 treinos com ênfase em membros inferiores (2 de perna e 1 de superiores), 4x8, 120s de descanso nos compostos."
	}
];
var LIMITACOES = [
	"Exclusivo da modalidade Musculação.",
	"A IA monta a prescrição com exercícios sugeridos de musculação.",
	"Suporta exercícios individuais e combinados (bi-set, tri-set).",
	"Até 4.000 caracteres por prompt.",
	"A IA gera uma prévia — nada é salvo até você confirmar.",
	"Os treinos entram na última semana da rotina, seguindo a numeração de dias existente.",
	"Cargas e observações são sugestões: revise antes de publicar."
];
var COMBINACAO_LABEL = {
	biset: "Bi-set",
	triset: "Tri-set",
	superset: "Superset"
};
/** "4x10" -> { series: 4, reps: "10" } */
function parseSetsReps(v) {
	const m = v.match(/^\s*(\d+)\s*[xX×]\s*(.+)$/);
	if (m) return {
		series: Number(m[1]),
		reps: m[2].trim()
	};
	const t = v.trim();
	return {
		series: null,
		reps: t.length ? t : null
	};
}
/** Classifica o texto de "load" da IA: kg, %1RM, ou texto livre (ritmo/pace/outro). */
function classificarCarga(v) {
	const raw = v.trim();
	if (!raw) return null;
	if (/:\d{2}/.test(raw) || /\/\s*km/i.test(raw) || /ritmo/i.test(raw)) return {
		tipo: "texto",
		valor: raw
	};
	const pct = raw.match(/(\d+(?:[.,]\d+)?)\s*%/);
	if (pct) {
		const n = Number(pct[1].replace(",", "."));
		return Number.isFinite(n) ? {
			tipo: "pct_1rm",
			valor: n
		} : {
			tipo: "texto",
			valor: raw
		};
	}
	const kg = raw.match(/(\d+(?:[.,]\d+)?)\s*kg/i);
	if (kg) {
		const n = Number(kg[1].replace(",", "."));
		return Number.isFinite(n) ? {
			tipo: "kg",
			valor: n
		} : {
			tipo: "texto",
			valor: raw
		};
	}
	const solto = raw.match(/^(\d+(?:[.,]\d+)?)$/);
	if (solto) {
		const n = Number(solto[1].replace(",", "."));
		return Number.isFinite(n) ? {
			tipo: "kg",
			valor: n
		} : {
			tipo: "texto",
			valor: raw
		};
	}
	return {
		tipo: "texto",
		valor: raw
	};
}
function juntarObs(...partes) {
	const s = partes.filter((p) => p && p.trim().length > 0).join(" · ");
	return s.length ? s : null;
}
/**
* Converte os grupos da IA ("A1"/"A2") no mapa `grupos` por ordem que o
* construtor de sessão já lê do config do bloco.
*/
function gruposDoDia(dia) {
	const grupos = {};
	dia.exercises.forEach((e, i) => {
		if (e.group_type !== "individual" && e.group) grupos[String(i + 1)] = e.group.charAt(0).toUpperCase();
	});
	return Object.keys(grupos).length ? { grupos } : {};
}
var DiaCard = (0, import_react.memo)(function DiaCard({ dia, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl border border-border/70 bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-semibold tracking-tight",
					children: dia.name || `Treino ${index + 1}`
				}), dia.day_label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "secondary",
					className: "text-[10px] uppercase tracking-wide",
					children: dia.day_label
				})]
			}),
			dia.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-xs leading-relaxed text-muted-foreground",
				children: dia.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-2",
				children: dia.exercises.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-border/50 bg-muted/25 px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex flex-wrap items-center gap-2 text-sm font-medium",
							children: [e.name, e.group_type !== "individual" && e.group && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "outline",
								className: "border-primary/30 bg-primary/10 text-[10px] uppercase tracking-wide text-primary",
								children: [
									COMBINACAO_LABEL[e.group_type] ?? "Combinado",
									" · ",
									e.group
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-muted-foreground",
							children: [
								e.sets_reps && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListOrdered, { className: "h-3 w-3" }), e.sets_reps]
								}),
								e.load && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Weight, { className: "h-3 w-3" }), e.load]
								}),
								e.rest_seconds != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, { className: "h-3 w-3" }),
										e.rest_seconds,
										"s"
									]
								})
							]
						})]
					}), e.observations && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs leading-relaxed text-muted-foreground/80",
						children: e.observations
					})]
				}, `${e.name}-${i}`))
			})
		]
	});
});
var HibridoPreview = (0, import_react.memo)(function HibridoPreview({ prescricao, template }) {
	const labels = new Map(template.map((b) => [b.chave, b.titulo || b.formato]));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h5", {
				className: "text-sm font-bold tracking-tight",
				children: [
					"Sessões Geradas (",
					prescricao.sessoes.length,
					")"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: "outline",
				className: "text-[10px] uppercase",
				children: "Modo: Híbrido por molde"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: prescricao.sessoes.map((sessao, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl border border-border/70 bg-card p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
					className: "text-sm font-semibold",
					children: ["Sessão ", i + 1]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 space-y-2",
					children: sessao.blocos.map((bloco) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border/50 bg-muted/25 px-3 py-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-primary",
								children: labels.get(bloco.chave) ?? bloco.chave
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: [bloco.exerciciosIds.length, " exercício(s) vinculado(s) por ID real."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 break-all text-[10px] text-muted-foreground/80",
								children: bloco.exerciciosIds.join(", ") || "Nenhum ID selecionado"
							})
						]
					}, bloco.chave))
				})]
			}, i))
		})]
	});
});
async function salvarPrescricaoHibrida(args) {
	const { programaId, diasPorSemana, prescricao, template } = args;
	if (template.length === 0) throw new Error("O molde da continuação está vazio. Feche e abra o programa novamente.");
	const { data: semanasExistentes, error: we } = await supabase.from("program_weeks").select("numero_semana").eq("program_id", programaId).order("numero_semana", { ascending: false }).limit(1);
	if (we) throw we;
	const ultimaSemana = semanasExistentes?.[0]?.numero_semana ?? 0;
	const weekMap = /* @__PURE__ */ new Map();
	const dias = Math.max(1, diasPorSemana);
	for (const [index, sessao] of prescricao.sessoes.entries()) {
		const semanaNumero = ultimaSemana + Math.floor(index / dias) + 1;
		if (!weekMap.has(semanaNumero)) {
			const { data: semanaExistente, error: se } = await supabase.from("program_weeks").select("id").eq("program_id", programaId).eq("numero_semana", semanaNumero).maybeSingle();
			if (se) throw se;
			if (semanaExistente) weekMap.set(semanaNumero, semanaExistente.id);
			else {
				const { data: novaSemana, error: ne } = await supabase.from("program_weeks").insert({
					program_id: programaId,
					numero_semana: semanaNumero
				}).select("id").single();
				if (ne || !novaSemana) throw ne ?? /* @__PURE__ */ new Error("Falha ao criar semana da continuação");
				weekMap.set(semanaNumero, novaSemana.id);
			}
		}
		const weekId = weekMap.get(semanaNumero);
		const { data: ultimaSessao, error: le } = await supabase.from("sessions").select("numero_dia").eq("program_week_id", weekId).order("numero_dia", { ascending: false }).limit(1);
		if (le) throw le;
		const numeroDia = (ultimaSessao?.[0]?.numero_dia ?? 0) + 1;
		const { data: sessaoRow, error: sessaoError } = await supabase.from("sessions").insert({
			program_week_id: weekId,
			numero_dia: numeroDia,
			titulo: `Sessão ${index + 1}`,
			status: "rascunho"
		}).select("id").single();
		if (sessaoError || !sessaoRow) throw sessaoError ?? /* @__PURE__ */ new Error("Falha ao criar sessão");
		for (const [ordem, blocoTemplate] of template.entries()) {
			const ids = sessao.blocos.find((b) => b.chave === blocoTemplate.chave)?.exerciciosIds ?? [];
			if (ids.length === 0) continue;
			const { data: blocoRow, error: blocoError } = await supabase.from("session_blocks").insert({
				session_id: sessaoRow.id,
				ordem: ordem + 1,
				formato: blocoTemplate.formato,
				titulo: blocoTemplate.titulo ?? null,
				duracao_min: blocoTemplate.duracaoMin,
				config: {
					chave: blocoTemplate.chave,
					modo_execucao: blocoTemplate.modoExecucao,
					descanso_apos_seg: blocoTemplate.descansoAposSeg
				}
			}).select("id").single();
			if (blocoError || !blocoRow) throw blocoError ?? /* @__PURE__ */ new Error("Falha ao criar bloco");
			const rows = ids.map((exerciseId, exerciseIndex) => ({
				session_block_id: blocoRow.id,
				exercise_id: exerciseId,
				nome_livre: null,
				ordem: exerciseIndex + 1,
				series: blocoTemplate.seriesMin,
				reps: blocoTemplate.repsPorExercicio == null ? null : String(blocoTemplate.repsPorExercicio),
				pct_1rm: blocoTemplate.percentual1rm ?? null,
				descanso_seg: blocoTemplate.descansoEntreSeriesSeg ?? null
			}));
			const { error: exerciseError } = await supabase.from("session_block_exercises").insert(rows);
			if (exerciseError) throw exerciseError;
		}
	}
	return prescricao.sessoes.length;
}
function PrescreverIaDialog({ programa, escopo: escopoInicial, kb: kbInicial, wl: wlInicial, tf: tfInicial, co: coInicial, studentId, onOpenChange }) {
	const qc = useQueryClient();
	const gerar = useServerFn(prescribeTrainingWithAi);
	const [selectedStudentId] = (0, import_react.useState)(studentId || null);
	const { data: assignedStudent } = useQuery({
		queryKey: [
			"dialog-athlete-memory",
			programa?.id,
			selectedStudentId
		],
		queryFn: async () => {
			const targetId = selectedStudentId;
			if (targetId) {
				const { data } = await supabase.from("students").select("id, nome, email, observacoes").eq("id", targetId).maybeSingle();
				return data ?? null;
			}
			if (!programa?.id) return null;
			const { data: asg } = await supabase.from("assignments").select("student_id, students(id, nome, email, observacoes)").eq("program_id", programa.id).limit(1).maybeSingle();
			return asg?.students ?? null;
		},
		enabled: !!programa?.id || !!selectedStudentId
	});
	const athleteMemory = (0, import_react.useMemo)(() => {
		return assignedStudent?.observacoes ? parseAthleteMemory(assignedStudent.observacoes) : null;
	}, [assignedStudent?.observacoes]);
	const [prompt, setPrompt] = (0, import_react.useState)("");
	const [metodologia, setMetodologia] = (0, import_react.useState)(programa?.metodologia || "musculacao");
	const [escola, setEscola] = (0, import_react.useState)("auto");
	const [semanas, setSemanas] = (0, import_react.useState)(escopoInicial?.semanas || 1);
	const [diasPorSemana, setDiasPorSemana] = (0, import_react.useState)(escopoInicial?.diasPorSemana || 3);
	const [historicoSessoes, setHistoricoSessoes] = (0, import_react.useState)(6);
	const [cooldownSessoes, setCooldownSessoes] = (0, import_react.useState)(3);
	const [previa, setPrevia] = (0, import_react.useState)(null);
	const [progresso, setProgresso] = (0, import_react.useState)([]);
	const { presets: setTypes } = useSetTypeRegistry();
	const { presets: customFormats } = useFormatRegistry();
	const [moldeSelecionado, setMoldeSelecionado] = (0, import_react.useState)("auto");
	const isHibrido = metodologia === "hibrido" || metodologia === "kettlebell_fitness";
	(0, import_react.useEffect)(() => {
		async function carregarConfiguracoes() {
			if (!programa?.id) return;
			const { data: coach } = await supabase.from("coaches").select("id").maybeSingle();
			if (coach && isHibrido) {
				const { data: pref } = await supabase.from("generator_preferences").select("blocos").eq("coach_id", coach.id).eq("metodologia", metodologia).maybeSingle();
			}
			const { data, error } = await supabase.from("programs").select("regras_progressao").eq("id", programa.id).maybeSingle();
			if (data?.regras_progressao) {
				const r = data.regras_progressao;
				if (r.metodologia) setMetodologia(r.metodologia);
				if (r.escola) setEscola(r.escola);
				if (r.dias_por_semana) setDiasPorSemana(r.dias_por_semana);
				if (r.semanas) setSemanas(r.semanas);
				if (r.historico_sessoes !== void 0) setHistoricoSessoes(r.historico_sessoes);
				if (r.cooldown_sessoes !== void 0) setCooldownSessoes(r.cooldown_sessoes);
				if (r.prompt) setPrompt(r.prompt);
			}
		}
		carregarConfiguracoes();
	}, [
		programa?.id,
		metodologia,
		isHibrido
	]);
	const moldesHistoricos = (0, import_react.useMemo)(() => {
		if (!escopoInicial?.hibrido?.historicoSessoes) return [];
		const porDia = /* @__PURE__ */ new Map();
		escopoInicial.hibrido.historicoSessoes.forEach((s) => {
			porDia.set(s.numero_dia, s);
		});
		return Array.from(porDia.values()).sort((a, b) => (a.numero_dia ?? 0) - (b.numero_dia ?? 0));
	}, [escopoInicial?.hibrido?.historicoSessoes]);
	const hibridoPayload = (0, import_react.useMemo)(() => {
		const base = escopoInicial?.hibrido;
		if (!base) return null;
		let template = base.sessaoTemplate;
		if (moldeSelecionado !== "auto") {
			const molde = moldesHistoricos.find((m) => String(m.id) === moldeSelecionado);
			if (molde?.blocks) template = molde.blocks;
		}
		return {
			...base,
			sessaoTemplate: template ?? []
		};
	}, [
		escopoInicial?.hibrido,
		moldeSelecionado,
		moldesHistoricos
	]);
	const ESCOLAS_DISPONIVEIS = (0, import_react.useMemo)(() => ({
		musculacao: [
			{
				value: "auto",
				label: "Automático (IA decide)"
			},
			{
				value: "bro_split",
				label: "Bro-Split (Bodybuilding Clássico)"
			},
			{
				value: "upper_lower",
				label: "Upper/Lower"
			},
			{
				value: "ppl",
				label: "PPL (Push/Pull/Legs)"
			},
			{
				value: "full_body",
				label: "Full Body"
			},
			{
				value: "heavy_duty",
				label: "Heavy Duty / HIT"
			}
		],
		treinamento_funcional: [
			{
				value: "auto",
				label: "Automático (IA decide)"
			},
			{
				value: "exos",
				label: "EXOS / Core Performance"
			},
			{
				value: "crossfit",
				label: "CrossFit"
			},
			{
				value: "boyle",
				label: "Joint-by-Joint (Boyle)"
			},
			{
				value: "fms_sfma",
				label: "FMS/SFMA"
			},
			{
				value: "dns",
				label: "DNS (Praga)"
			},
			{
				value: "original_strength",
				label: "Original Strength"
			}
		],
		levantamento_peso: [
			{
				value: "auto",
				label: "Automático (IA decide)"
			},
			{
				value: "bulgara",
				label: "Búlgara"
			},
			{
				value: "russa_classica",
				label: "Russa Clássica"
			},
			{
				value: "chinesa",
				label: "Chinesa"
			},
			{
				value: "cubana",
				label: "Cubana"
			},
			{
				value: "colombiana",
				label: "Colombiana"
			},
			{
				value: "pendlay",
				label: "Takano / Pendlay"
			}
		],
		kettlebell_sport: [
			{
				value: "auto",
				label: "Automático (IA decide)"
			},
			{
				value: "fedorenko",
				label: "Fedorenko / WKC"
			},
			{
				value: "rudnev",
				label: "Rudnev"
			},
			{
				value: "vorotyntsev",
				label: "Vorotyntsev"
			},
			{
				value: "denisov",
				label: "Denisov"
			},
			{
				value: "vasilev",
				label: "Vasilev"
			},
			{
				value: "gomonov",
				label: "Gomonov"
			}
		],
		corrida: [
			{
				value: "auto",
				label: "Automático (IA decide)"
			},
			{
				value: "daniels",
				label: "Daniels / VDOT"
			},
			{
				value: "lydiard",
				label: "Lydiard (Base)"
			},
			{
				value: "canova",
				label: "Canova (Elite)"
			},
			{
				value: "hansons",
				label: "Hansons"
			},
			{
				value: "pfitzinger",
				label: "Pfitzinger"
			},
			{
				value: "horwill",
				label: "Horwill"
			},
			{
				value: "koop",
				label: "Koop (Ultra)"
			}
		],
		hibrido: [
			{
				value: "auto",
				label: "Híbrido Clássico"
			},
			{
				value: "performance",
				label: "Híbrido Performance"
			},
			{
				value: "saude",
				label: "Híbrido Saúde/Longevidade"
			}
		],
		kettlebell_fitness: [{
			value: "auto",
			label: "KB Fitness Padrão"
		}, {
			value: "fluxo",
			label: "KB Flows / Complexos"
		}]
	}), []);
	(0, import_react.useEffect)(() => {
		if (!(ESCOLAS_DISPONIVEIS[metodologia] || []).some((e) => e.value === escola)) setEscola("auto");
	}, [
		metodologia,
		escola,
		ESCOLAS_DISPONIVEIS
	]);
	const limpar = (0, import_react.useCallback)(() => {
		setPrompt("");
		setPrevia(null);
	}, []);
	const gerarMut = useMutation({
		mutationFn: async () => {
			if (!programa) throw new Error("Programa não selecionado");
			setProgresso(["Salvando perfil e analisando histórico..."]);
			await supabase.from("programs").update({ regras_progressao: {
				metodologia,
				escola,
				dias_por_semana: diasPorSemana,
				semanas,
				historico_sessoes: historicoSessoes,
				cooldown_sessoes: cooldownSessoes,
				prompt: prompt.trim()
			} }).eq("id", programa.id);
			const totalSessoes = semanas * diasPorSemana;
			setProgresso((prev) => [...prev, `Projetando periodização para ${semanas} semana(s) (${totalSessoes} treinos)...`]);
			try {
				const res = await gerar({ data: {
					programId: programa.id,
					studentId: selectedStudentId || assignedStudent?.id || null,
					prompt: prompt.trim(),
					diasPorSemana,
					escopoLabel: `${semanas} semanas`,
					metodologiaOverride: metodologia,
					escolaOverride: escola,
					historicoSessoes,
					cooldownSessoes,
					semanasNovas: semanas,
					setTypes: setTypes.map((t) => ({
						id: t.id,
						label: t.label,
						fields: t.fields
					})),
					formatRegistry: customFormats.map((f) => ({
						id: f.id,
						label: f.label,
						base: f.base,
						set_type_id: f.set_type_id,
						field_labels: f.field_labels
					})),
					kb: kbInicial ?? null,
					wl: wlInicial ?? null,
					tf: tfInicial ?? null,
					co: coInicial ?? null,
					hibrido: metodologia === "hibrido" || metodologia === "kettlebell_fitness" ? {
						...hibridoPayload || {},
						sessaoTemplate: hibridoPayload?.sessaoTemplate ?? [],
						modalidade: metodologia,
						tituloPrograma: programa.titulo ?? "Continuar Progressão",
						numeroSessoes: totalSessoes,
						diasPorSemana,
						dataInicio: escopoInicial?.dataInicio ?? (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
						escola: escola !== "auto" ? escola : null,
						set_types: setTypes.map((t) => ({
							id: t.id,
							label: t.label
						})),
						custom_formats: customFormats.map((f) => ({
							id: f.id,
							label: f.label,
							base: f.base,
							set_type_id: f.set_type_id,
							field_labels: f.field_labels
						}))
					} : null
				} });
				setProgresso((prev) => [
					...prev,
					"Gerando relatório de evolução...",
					"Finalizando prescrição em bloco!"
				]);
				return res;
			} catch (e) {
				setProgresso([]);
				console.error("Erro na geração de IA:", e);
				throw e;
			}
		},
		onSuccess: (res) => {
			if (res && res.sessoes && !res.days) res.days = res.sessoes.map((s, idx) => {
				const week_number = res.week_numbers?.[idx] || Math.floor(idx / (diasPorSemana || 1)) + 1;
				return {
					name: `Sessão ${idx + 1}`,
					week_number,
					exercises: s.blocos.flatMap((b) => {
						return (Array.isArray(b.exerciciosIds) ? b.exerciciosIds : Array.isArray(b.exercicios_ids) ? b.exercicios_ids : []).map((id) => ({
							id,
							name: "Exercício Selecionado",
							group_type: "individual",
							group: ""
						}));
					})
				};
			});
			setPrevia(res);
			setTimeout(() => setProgresso([]), 1e3);
		},
		onError: (e) => {
			setProgresso([]);
			let msg = "Não foi possível gerar a prescrição.";
			const errorStr = String(e.message || e);
			if (errorStr.includes("POOL_VAZIO")) msg = "O pool de exercícios da biblioteca não atende aos filtros de equipamento/metodologia do molde.";
			else if (errorStr.includes("AI_GATEWAY_ERROR")) msg = "O serviço de IA está temporariamente indisponível. Tente novamente em alguns instantes.";
			else if (errorStr.includes("AI_EMPTY_CONTENT") || errorStr.includes("AI_INVALID_JSON")) msg = "A IA retornou uma resposta inválida. Tente gerar novamente.";
			else if (errorStr.includes("AI_SCHEMA_MISMATCH")) msg = "A estrutura do treino gerado pela IA é incompatível com o molde.";
			else if (errorStr.includes("Server function info not found")) {
				const lastReload = window.sessionStorage.getItem("sf_recovery_reload");
				const now = Date.now();
				if (!lastReload || now - parseInt(lastReload) > 3e4) {
					window.sessionStorage.setItem("sf_recovery_reload", now.toString());
					toast.info("Atualizando aplicação...", { description: "Detectamos uma nova versão. Suas alterações foram preservadas localmente e a página será recarregada." });
					setTimeout(() => {
						const url = new URL(window.location.href);
						url.searchParams.set("v", now.toString());
						window.location.href = url.toString();
					}, 1500);
					return;
				}
				msg = "A aplicação precisa ser atualizada. Por favor, feche esta aba e abra novamente ou limpe o cache do navegador.";
			} else if (errorStr.includes("400") || errorStr.includes("token")) msg = "Histórico muito longo. Tente reduzir o número de semanas ou o histórico analisado.";
			toast.error("Falha na Prescrição", { description: msg });
		}
	});
	const salvarMut = useMutation({
		mutationFn: async () => {
			if (!programa || !previa) throw new Error("Nada para salvar");
			const isHibridoPreview = isHibrido && isPrescricaoHibrido(previa);
			if (isHibridoPreview) await salvarPrescricaoHibrida({
				programaId: programa.id,
				diasPorSemana,
				prescricao: previa,
				template: hibridoPayload?.sessaoTemplate ?? []
			});
			if (isHibridoPreview) {} else {
				const { data: semanasExistentes, error: we } = await supabase.from("program_weeks").select("numero_semana").eq("program_id", programa.id).order("numero_semana", { ascending: false }).limit(1);
				if (we) throw we;
				const ultimaSemanaReal = semanasExistentes?.[0]?.numero_semana ?? 0;
				const weekMap = /* @__PURE__ */ new Map();
				const diasPrevia = previa.days;
				for (const dia of diasPrevia) {
					const targetWeekNum = ultimaSemanaReal + (dia.week_number || 1);
					if (!weekMap.has(targetWeekNum)) {
						const { data: existente } = await supabase.from("program_weeks").select("id").eq("program_id", programa.id).eq("numero_semana", targetWeekNum).maybeSingle();
						if (existente) weekMap.set(targetWeekNum, existente.id);
						else {
							const { data: nova, error } = await supabase.from("program_weeks").insert({
								program_id: programa.id,
								numero_semana: targetWeekNum
							}).select("id").single();
							if (error) throw error;
							weekMap.set(targetWeekNum, nova.id);
						}
					}
					const weekId = weekMap.get(targetWeekNum);
					const { data: ultimas, error: se } = await supabase.from("sessions").select("numero_dia").eq("program_week_id", weekId).order("numero_dia", { ascending: false }).limit(1);
					if (se) throw se;
					const proximoDia = (ultimas?.[0]?.numero_dia ?? 0) + 1;
					const { data: sess, error: ie } = await supabase.from("sessions").insert({
						program_week_id: weekId,
						numero_dia: proximoDia,
						titulo: dia.name || `Treino ${proximoDia}`,
						status: "rascunho"
					}).select("id").single();
					if (ie) throw ie;
					const { data: bloco, error: be } = await supabase.from("session_blocks").insert({
						session_id: sess.id,
						ordem: 1,
						formato: metodologia === "kettlebell_sport" ? "kb_timed_sets" : metodologia === "levantamento_peso" ? "forca_tecnica_pct" : metodologia === "corrida" ? "livre" : metodologia === "treinamento_funcional" ? "circuito" : "bodybuilding_sets",
						titulo: dia.day_label || dia.description || "Bloco principal",
						config: gruposDoDia(dia)
					}).select("id").single();
					if (be) throw be;
					if (dia.exercises.length) {
						const rows = dia.exercises.map((e, i) => {
							const { series, reps } = parseSetsReps(e.sets_reps);
							const cls = e.load ? classificarCarga(e.load) : null;
							return {
								session_block_id: bloco.id,
								nome_livre: e.name,
								ordem: i + 1,
								series,
								reps,
								carga_kg: cls?.tipo === "kg" ? cls.valor : null,
								pct_1rm: cls?.tipo === "pct_1rm" ? cls.valor : null,
								descanso_seg: e.rest_seconds,
								observacoes: juntarObs(e.observations, cls?.tipo === "texto" ? `Carga: ${cls.valor}` : null)
							};
						});
						const { error: xe } = await supabase.from("session_block_exercises").insert(rows);
						if (xe) throw xe;
					}
				}
			}
			const { data: prog } = await supabase.from("programs").select("regras_progressao").eq("id", programa.id).maybeSingle();
			const regras = prog?.regras_progressao && typeof prog.regras_progressao === "object" ? prog.regras_progressao : {};
			await supabase.from("programs").update({ regras_progressao: {
				...regras,
				ai: {
					ai_prompt: prompt.trim(),
					ai_generated_at: (/* @__PURE__ */ new Date()).toISOString(),
					notes: previa.notes || null,
					escola_metodologica: escola !== "auto" ? escola : null
				}
			} }).eq("id", programa.id);
			return isHibridoPreview ? previa.sessoes.length : previa.days.length;
		},
		onSuccess: (n) => {
			toast.success(`${n} treino(s) adicionado(s) à rotina`);
			qc.invalidateQueries({ queryKey: ["programas"] });
			limpar();
			onOpenChange(false);
		},
		onError: (e) => toast.error(e?.message ?? "Falha ao adicionar os treinos")
	});
	const baixarTxt = (0, import_react.useCallback)(async () => {
		if (!previa) return;
		let txt = `PROGRAMA DE TREINAMENTO: ${programa?.titulo || "SEM TÍTULO"}\n`;
		txt += `MODALIDADE: ${METHODOLOGY_LABEL[metodologia] || metodologia}\n`;
		txt += `DATA DE GERAÇÃO: ${(/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR")}\n`;
		txt += `================================================================================\n\n`;
		if (isPrescricaoHibrido(previa)) {
			const template = hibridoPayload?.sessaoTemplate ?? [];
			const labels = new Map(template.map((b) => [b.chave, b.titulo || b.formato]));
			for (let i = 0; i < previa.sessoes.length; i++) {
				const sessao = previa.sessoes[i];
				txt += `SESSÃO ${i + 1}\n`;
				txt += `--------------------------------------------------------------------------------\n`;
				for (const bloco of sessao.blocos) {
					const titulo = labels.get(bloco.chave) || bloco.chave;
					txt += `[${titulo.toUpperCase()}]\n`;
					if (bloco.exerciciosIds.length > 0) {
						txt += `Exercícios selecionados (${bloco.exerciciosIds.length})\n`;
						bloco.exerciciosIds.forEach((id, idx) => {
							txt += `${idx + 1}. ID: ${id}\n`;
						});
					} else txt += `Nenhum exercício selecionado.\n`;
					txt += `\n`;
				}
				txt += `\n`;
			}
		} else {
			const p = previa;
			for (const dia of p.days) {
				txt += `${dia.name || "TREINO"} ${dia.day_label ? `(${dia.day_label})` : ""}\n`;
				if (dia.description) txt += `DESCRIÇÃO: ${dia.description}\n`;
				txt += `--------------------------------------------------------------------------------\n`;
				dia.exercises.forEach((e, i) => {
					let linha = `${i + 1}. ${e.name}`;
					if (e.group_type !== "individual" && e.group) linha += ` [${COMBINACAO_LABEL[e.group_type] || e.group_type} ${e.group}]`;
					txt += `${linha}\n`;
					const detalhes = [];
					if (e.sets_reps) detalhes.push(`Séries/Reps: ${e.sets_reps}`);
					if (e.load) detalhes.push(`Carga: ${e.load}`);
					if (e.rest_seconds) detalhes.push(`Descanso: ${e.rest_seconds}s`);
					if (detalhes.length > 0) txt += `   ${detalhes.join(" | ")}\n`;
					if (e.observations) txt += `   OBS: ${e.observations}\n`;
					txt += `\n`;
				});
				txt += `\n`;
			}
		}
		const blob = new Blob([txt], { type: "text/plain;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `programa-${programa?.titulo?.toLowerCase().replace(/\s+/g, "-") || "treino"}.txt`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
		toast.success("Arquivo .txt gerado com sucesso");
	}, [
		previa,
		programa,
		metodologia,
		hibridoPayload
	]);
	const podeGerar = (0, import_react.useMemo)(() => !gerarMut.isPending, [gerarMut.isPending]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: !!programa,
		onOpenChange: (o) => {
			if (!o) limpar();
			onOpenChange(o);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "flex max-h-[90dvh] max-w-2xl flex-col gap-0 p-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "border-b border-border/60 px-5 py-4 text-left sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
						className: "flex items-center gap-2 text-base",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
							}),
							"Prescrever com IA",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "secondary",
								className: "ml-1 text-[10px] uppercase tracking-wide",
								children: [
									METHODOLOGY_LABEL[metodologia] || metodologia,
									" - ",
									escola === "auto" ? "IA" : escola
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
						className: "text-xs",
						children: [
							programa?.titulo ? `Gerando para "${programa.titulo}".` : "Gere uma prescrição estruturada.",
							" ",
							"Motor de IA (Variação): a IA analisa o histórico e as limitações do aluno para evoluir a periodização."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-h-0 flex-1 space-y-5 overflow-y-auto px-5 py-5 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
							children: [
								{
									label: "Rotina alvo",
									value: programa?.titulo ?? "—"
								},
								{
									label: "Escola Metodológica",
									value: escola === "auto" ? "Automático" : ESCOLAS_DISPONIVEIS[metodologia]?.find((e) => e.value === escola)?.label ?? escola
								},
								{
									label: "Duração",
									value: `${semanas} semana(s)`
								},
								{
									label: "Dias/semana",
									value: `${diasPorSemana}`
								}
							].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border border-border/60 bg-muted/30 px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground",
									children: k.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									title: k.value,
									className: "mt-0.5 truncate text-sm font-medium tabular-nums",
									children: k.value
								})]
							}, k.label))
						}),
						assignedStudent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-primary/30 bg-primary/5 p-3.5 space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2 flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs font-semibold text-foreground",
										children: ["Memória IA Ativa: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: assignedStudent.nome
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "border-primary/40 text-primary text-[10px] font-mono",
									children: "Context Engine V3"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground",
								children: [
									athleteMemory?.lesoes && athleteMemory.lesoes.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-amber-500 font-medium",
										children: [
											"⚠️ ",
											athleteMemory.lesoes.length,
											" restrições protegidas (",
											athleteMemory.lesoes.slice(0, 2).join(", "),
											athleteMemory.lesoes.length > 2 ? "..." : "",
											")"
										]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nenhuma restrição articular" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [athleteMemory?.equipamentos?.length || 0, " equipamentos disponíveis"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Nível: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-foreground capitalize",
										children: athleteMemory?.nivelAtleta || "intermediário"
									})] })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-4 rounded-xl border border-border/60 bg-muted/20 p-4 sm:grid-cols-2",
							children: [(metodologia === "hibrido" || metodologia === "kettlebell_fitness") && moldesHistoricos.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-full space-y-2 border-b border-border/40 pb-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[10px] font-bold uppercase tracking-wider text-primary",
										children: "Recuperação de Estrutura (Molde)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: moldeSelecionado,
										onValueChange: setMoldeSelecionado,
										disabled: gerarMut.isPending,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: "h-9 bg-background border-primary/30",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Escolha qual estrutura repetir..." })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "auto",
											children: escopoInicial?.hibrido?.sessaoTemplate?.length ? "Manter molde atual" : "Selecionar molde histórico..."
										}), moldesHistoricos.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
											value: m.id,
											children: [
												m.titulo,
												" (",
												m.blocks.length,
												" blocos)"
											]
										}, m.id))] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-muted-foreground italic",
										children: "* A IA usará esta estrutura para prescrever novos exercícios."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-full space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-[10px] font-bold uppercase tracking-wider text-primary",
												children: "Base Técnica (Motor)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												value: metodologia,
												onValueChange: setMetodologia,
												disabled: gerarMut.isPending,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													className: "h-9 border-primary/20 bg-background/50",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Selecione a modalidade" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "musculacao",
														children: "Musculação"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "hibrido",
														children: "Treinamento Híbrido"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "kettlebell_fitness",
														children: "Kettlebell Fitness"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "kettlebell_sport",
														children: "Kettlebell Sport"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "levantamento_peso",
														children: "LPO"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "treinamento_funcional",
														children: "Funcional"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "corrida",
														children: "Corrida"
													})
												] })]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-[10px] font-bold uppercase tracking-wider text-primary",
												children: "Escola Metodológica"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												value: escola,
												onValueChange: setEscola,
												disabled: gerarMut.isPending,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													className: "h-9 border-primary/20 bg-background/50",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Padrão do Sistema" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: (ESCOLAS_DISPONIVEIS[metodologia] || [{
													value: "auto",
													label: "Automático"
												}]).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: e.value,
													children: e.label
												}, e.value)) })]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
												children: "Semanas (Volume)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex h-9 items-center justify-between rounded-md border bg-background px-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														variant: "ghost",
														size: "icon",
														className: "h-7 w-7",
														onClick: () => setSemanas(Math.max(1, semanas - 1)),
														disabled: gerarMut.isPending || semanas <= 1,
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm font-medium tabular-nums",
														children: semanas
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														variant: "ghost",
														size: "icon",
														className: "h-7 w-7",
														onClick: () => setSemanas(Math.min(12, semanas + 1)),
														disabled: gerarMut.isPending || semanas >= 12,
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" })
													})
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
												children: "Frequência (Dias/Sem)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex h-9 items-center justify-between rounded-md border bg-background px-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														variant: "ghost",
														size: "icon",
														className: "h-7 w-7",
														onClick: () => setDiasPorSemana(Math.max(1, diasPorSemana - 1)),
														disabled: gerarMut.isPending || diasPorSemana <= 1,
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm font-medium tabular-nums",
														children: diasPorSemana
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														variant: "ghost",
														size: "icon",
														className: "h-7 w-7",
														onClick: () => setDiasPorSemana(Math.min(7, diasPorSemana + 1)),
														disabled: gerarMut.isPending || diasPorSemana >= 7,
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" })
													})
												]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
												children: "Histórico considerado (sessões)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex h-9 items-center justify-between rounded-md border bg-background px-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														variant: "ghost",
														size: "icon",
														className: "h-7 w-7",
														onClick: () => setHistoricoSessoes(Math.max(0, historicoSessoes - 1)),
														disabled: gerarMut.isPending || historicoSessoes <= 0,
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm font-medium tabular-nums",
														children: historicoSessoes === 0 ? "Sem histórico" : historicoSessoes
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														variant: "ghost",
														size: "icon",
														className: "h-7 w-7",
														onClick: () => setHistoricoSessoes(Math.min(12, historicoSessoes + 1)),
														disabled: gerarMut.isPending || historicoSessoes >= 12,
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" })
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-muted-foreground",
												children: "Reduza se aparecer o aviso de histórico muito longo."
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
												children: "Bloqueio de repetição (Cooldown)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex h-9 items-center justify-between rounded-md border bg-background px-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														variant: "ghost",
														size: "icon",
														className: "h-7 w-7",
														onClick: () => setCooldownSessoes(Math.max(0, cooldownSessoes - 1)),
														disabled: gerarMut.isPending || cooldownSessoes <= 0,
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm font-medium tabular-nums",
														children: cooldownSessoes === 0 ? "Sem bloqueio" : `${cooldownSessoes} sessões`
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														variant: "ghost",
														size: "icon",
														className: "h-7 w-7",
														onClick: () => setCooldownSessoes(Math.min(10, cooldownSessoes + 1)),
														disabled: gerarMut.isPending || cooldownSessoes >= 10,
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" })
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-muted-foreground",
												children: "Evita repetir exercícios usados nas últimas N sessões."
											})
										]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Collapsible, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CollapsibleTrigger, {
							className: "group flex w-full items-center gap-2 rounded-lg border border-border/60 px-3 py-2 text-left text-xs font-medium transition-colors duration-200 hover:bg-muted/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-3.5 w-3.5 text-primary" }),
								"Como usar e limitações",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "ml-auto h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CollapsibleContent, {
							className: "space-y-3 px-3 pb-1 pt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs leading-relaxed text-muted-foreground",
								children: "Descreva: divisão dos dias (A/B/C…), frequência semanal, objetivo, séries e repetições, descanso e equipamentos preferidos."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-1",
								children: LIMITACOES.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2 text-xs leading-relaxed text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										className: "text-primary",
										children: "•"
									}), l]
								}, l))
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "prompt-ia",
									className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: "Instruções"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-1.5",
									children: EXEMPLOS.map((ex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										size: "sm",
										variant: "outline",
										disabled: gerarMut.isPending || salvarMut.isPending,
										onClick: () => setPrompt(ex.texto),
										className: "h-7 rounded-full px-3 text-[11px] font-medium",
										children: ex.chip
									}, ex.chip))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "prompt-ia",
									value: prompt,
									onChange: (e) => setPrompt(e.target.value),
									placeholder: PLACEHOLDER,
									rows: 6,
									maxLength: 4e3,
									disabled: gerarMut.isPending || salvarMut.isPending,
									className: "resize-y text-sm leading-relaxed transition-colors duration-200"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-end text-[11px] tabular-nums text-muted-foreground",
									children: [prompt.trim().length, "/4000"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: () => gerarMut.mutate(),
									disabled: !podeGerar,
									className: "w-full gap-2 transition-all duration-200 sm:w-auto",
									children: gerarMut.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
										"Gerando ",
										semanas,
										" semana(s)..."
									] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }),
										"Gerar periodização (",
										semanas,
										" sem)"
									] })
								})
							]
						}),
						gerarMut.isPending && progresso.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl border border-border/60 bg-muted/30 p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-xs font-medium text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }), "Processando evolução..."]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-1",
									children: progresso.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-[10px] text-muted-foreground animate-in fade-in slide-in-from-left-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-1 rounded-full bg-primary/40" }), p]
									}, i))
								})]
							})
						}),
						previa ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [previa.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-primary/20 bg-primary/5 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h5", {
									className: "mb-2 flex items-center gap-2 text-sm font-bold text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), "Estratégia de Periodização do Bloco"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-foreground whitespace-pre-wrap",
									children: previa.notes
								})]
							}), isPrescricaoHibrido(previa) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HibridoPreview, {
								prescricao: previa,
								template: hibridoPayload?.sessaoTemplate ?? []
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h5", {
										className: "text-sm font-bold tracking-tight",
										children: [
											"Sessões Geradas (",
											previa.days.length,
											")"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										className: "text-[10px] uppercase",
										children: "Modo: Evolução em Bloco"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-3 sm:grid-cols-2",
									children: previa.days.map((dia, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiaCard, {
										dia,
										index: i
									}, i))
								})]
							})]
						}) : !gerarMut.isPending && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-dashed border-border/70 p-6 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Nenhuma prescrição gerada ainda."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground/80",
								children: "Descreva a divisão desejada e clique em “Gerar periodização em bloco”."
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "gap-2 border-t border-border/60 px-5 py-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => {
								limpar();
								onOpenChange(false);
							},
							disabled: salvarMut.isPending,
							className: "w-full sm:w-auto",
							children: "Cancelar"
						}),
						previa && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: baixarTxt,
							className: "w-full gap-2 sm:w-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Baixar .txt"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => salvarMut.mutate(),
							disabled: !previa || salvarMut.isPending,
							className: "w-full gap-2 sm:w-auto",
							children: [salvarMut.isPending && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), salvarMut.isPending ? "Adicionando..." : "Adicionar treinos à rotina"]
						})
					]
				})
			]
		})
	});
}
//#endregion
export { PrescreverIaDialog, PrescreverIaDialog as default };
