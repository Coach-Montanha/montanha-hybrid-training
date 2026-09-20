import { u as createServerFn } from "./esm-BJY6H9OB.mjs";
import { t as createSsrRpc } from "./ssr-rpc-DsWtVjPG.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-CHOPR5bi.mjs";
import { a as array, c as object, d as union, l as record, o as boolean, r as _enum, s as number, u as string } from "../_libs/tanstack__zod-adapter+zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/generator-prefs.functions-VkZdfEVy.js
var METODOLOGIA = _enum([
	"hibrido",
	"kettlebell_sport",
	"kettlebell_fitness",
	"levantamento_peso",
	"musculacao",
	"treinamento_funcional",
	"corrida"
]);
_enum([
	"preparacao_movimento",
	"forca_tecnica_pct",
	"emom",
	"e2mom",
	"amrap",
	"circuito",
	"kb_timed_sets",
	"metcon",
	"bodybuilding_sets",
	"finalizador",
	"livre"
]);
var PASSO_PCT = object({
	pct: number().min(0).max(100),
	sets: number().int().min(1).max(20),
	reps: number().int().min(1).max(50)
});
var BLOCO = object({
	formato: string().min(1).max(120),
	presetId: string().nullable().optional(),
	titulo: string().min(1).max(120),
	duracao_min: number().int().min(1).max(180).nullable().optional(),
	num_exercicios: number().int().min(1).max(20).default(3),
	series: number().int().min(1).max(20).nullable().optional(),
	seriesMin: number().int().min(1).max(20).nullable().optional(),
	seriesMax: number().int().min(1).max(20).nullable().optional(),
	reps_base: number().int().min(1).max(100).default(10),
	repsPorExercicio: union([string(), number()]).nullable().optional(),
	reps_pattern: array(number().int().min(1).max(100)).default([]),
	progressao: _enum([
		"nenhuma",
		"piramide_crescente",
		"piramide_decrescente",
		"onda"
	]).default("nenhuma"),
	passos: array(PASSO_PCT).default([]),
	tempo_trabalho: number().int().min(1).max(600).nullable().optional(),
	tempo_descanso: number().int().min(0).max(600).nullable().optional(),
	descansoAposSeg: number().int().min(0).max(600).default(0),
	descansoEntreSeriesSeg: number().int().min(0).max(600).nullable().optional(),
	intervaloMin: number().int().min(1).max(60).nullable().optional(),
	percentual1rm: number().int().min(1).max(100).nullable().optional(),
	modoExecucao: _enum(["circuito", "series_fixas"]).default("circuito"),
	selecaoExercicios: _enum(["ia", "manual"]).default("ia"),
	exerciciosFixos: array(string().uuid()).default([]),
	slot: _enum(["mobilidade", "aquecimento"]).nullable().optional(),
	modalidades_alvo: array(string()).default([]),
	equipamentos_alvo: array(string().min(1).max(60)).default([]),
	exercicios_permitidos: array(string().uuid()).default([]),
	fonteExercicios: object({
		metodologias: array(string()).optional(),
		equipamento: array(string()).optional()
	}).default({}),
	kb_categorias_ativas: record(string(), boolean()).optional(),
	kb_num_estacoes_override: number().int().min(3).max(10).nullable().optional(),
	kb_duracao_min_override: number().int().min(10).max(60).nullable().optional(),
	kb_prep_enabled: boolean().optional(),
	kb_prep_duracao_min: number().int().min(1).max(30).nullable().optional(),
	kb_prep_mobilidade: number().int().min(0).max(10).nullable().optional(),
	kb_prep_aquecimento: number().int().min(0).max(10).nullable().optional(),
	kb_prep_tempo_seg: number().int().min(10).max(180).nullable().optional()
});
var getGeneratorPrefs = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).inputValidator((raw) => object({ metodologia: METODOLOGIA }).parse(raw)).handler(createSsrRpc("cbb2a19113033f6ab0e4c7d863222e173ecb4c573556d2f3622684de92aff33e"));
var saveGeneratorPrefs = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((raw) => object({
	metodologia: METODOLOGIA,
	blocos: array(BLOCO)
}).parse(raw)).handler(createSsrRpc("75b34b4372795f2c67e8d4dfa2ee3d3a8e8b2118128bb802c2e5754392c39525"));
/** Retorna a lista de equipamentos distintos do banco do coach + globais. */
var listEquipamentos = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("f99b4acdd130e30648ec98f10d7c3a75f27e843d4de4815f28a7c30c45173c94"));
/** Conta exercícios que casam com filtros (modalidades + equipamentos). */
var countExercicios = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((raw) => object({
	modalidades: array(METODOLOGIA).min(1),
	equipamentos: array(string().min(1)).default([])
}).parse(raw)).handler(createSsrRpc("0c1eba71d111a69af345691018a5924bf9591201a10bd7b64e17c0f0897848bc"));
/** Lista exercícios do banco do coach para curadoria (com busca + filtros). */
var searchExercicios = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((raw) => object({
	query: string().max(120).default(""),
	modalidades: array(METODOLOGIA).default([]),
	equipamentos: array(string().min(1)).default([]),
	somente_meus: boolean().default(false),
	limit: number().int().min(1).max(500).default(200)
}).parse(raw)).handler(createSsrRpc("68360392555ddce5699a9643a717f95ffacd7e86e75b297c0cdf1a636ae261cf"));
/** Busca exercícios por IDs (para hidratar chips de curadoria). */
var getExerciciosByIds = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((raw) => object({ ids: array(string().uuid()).max(500) }).parse(raw)).handler(createSsrRpc("403c96d66d0de6ff7a0734f8d0f68d1af09109f9325d3d22516f14ab6c01cab6"));
//#endregion
export { saveGeneratorPrefs as a, listEquipamentos as i, getExerciciosByIds as n, searchExercicios as o, getGeneratorPrefs as r, countExercicios as t };
