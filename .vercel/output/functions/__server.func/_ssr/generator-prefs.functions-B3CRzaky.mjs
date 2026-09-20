import { u as createServerFn } from "./esm-BJY6H9OB.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-CHOPR5bi.mjs";
import { a as array, c as object, d as union, l as record, o as boolean, r as _enum, s as number, u as string } from "../_libs/tanstack__zod-adapter+zod.mjs";
import { t as createServerRpc } from "./server-rpc-DWINvzj2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/generator-prefs.functions-B3CRzaky.js
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
var getGeneratorPrefs_createServerFn_handler = createServerRpc({
	id: "cbb2a19113033f6ab0e4c7d863222e173ecb4c573556d2f3622684de92aff33e",
	name: "getGeneratorPrefs",
	filename: "src/lib/generator-prefs.functions.ts"
}, (opts) => getGeneratorPrefs.__executeServer(opts));
var getGeneratorPrefs = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).inputValidator((raw) => object({ metodologia: METODOLOGIA }).parse(raw)).handler(getGeneratorPrefs_createServerFn_handler, async ({ data, context }) => {
	const supabase = context.supabase;
	const { data: coach } = await supabase.from("coaches").select("id").maybeSingle();
	if (!coach) throw new Error("Perfil de treinador não encontrado");
	const { data: pref } = await supabase.from("generator_preferences").select("blocos").eq("coach_id", coach.id).eq("metodologia", data.metodologia).maybeSingle();
	if (pref?.blocos && Array.isArray(pref.blocos) && pref.blocos.length > 0) return {
		blocos: pref.blocos,
		origem: "custom"
	};
	const { data: templates } = await supabase.from("block_templates").select("*").eq("metodologia", data.metodologia).or(`coach_id.eq.${coach.id},coach_id.is.null`).eq("ativo", true).order("nome");
	return {
		blocos: (templates ?? []).map((t) => ({
			formato: t.formato,
			presetId: t.config?.presetId ?? `builtin:${t.formato}`,
			titulo: t.nome,
			duracao_min: t.duracao_min ?? null,
			num_exercicios: t.config?.num_exercicios ?? 3,
			series: t.config?.series ?? 3,
			seriesMin: t.config?.seriesMin ?? t.config?.series ?? 3,
			seriesMax: t.config?.seriesMax ?? t.config?.series ?? 3,
			reps_base: t.config?.reps_base ?? 10,
			repsPorExercicio: t.config?.repsPorExercicio ?? 10,
			reps_pattern: t.config?.reps_pattern ?? [],
			progressao: t.config?.progressao ?? "nenhuma",
			passos: t.config?.passos ?? [],
			tempo_trabalho: t.config?.tempo_trabalho ?? null,
			tempo_descanso: t.config?.tempo_descanso ?? null,
			descansoAposSeg: t.config?.descansoAposSeg ?? 0,
			descansoEntreSeriesSeg: t.config?.descansoEntreSeriesSeg ?? null,
			intervaloMin: t.config?.intervaloMin ?? null,
			percentual1rm: t.config?.percentual1rm ?? null,
			modoExecucao: t.config?.modoExecucao ?? "circuito",
			selecaoExercicios: t.config?.selecaoExercicios ?? "ia",
			exerciciosFixos: t.config?.exerciciosFixos ?? [],
			slot: t.config?.slot ?? null,
			modalidades_alvo: t.config?.modalidades_alvo ?? [],
			equipamentos_alvo: t.config?.equipamentos_alvo ?? [],
			exercicios_permitidos: t.config?.exercicios_permitidos ?? [],
			fonteExercicios: t.config?.fonteExercicios ?? {}
		})),
		origem: "template"
	};
});
var saveGeneratorPrefs_createServerFn_handler = createServerRpc({
	id: "75b34b4372795f2c67e8d4dfa2ee3d3a8e8b2118128bb802c2e5754392c39525",
	name: "saveGeneratorPrefs",
	filename: "src/lib/generator-prefs.functions.ts"
}, (opts) => saveGeneratorPrefs.__executeServer(opts));
var saveGeneratorPrefs = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((raw) => object({
	metodologia: METODOLOGIA,
	blocos: array(BLOCO)
}).parse(raw)).handler(saveGeneratorPrefs_createServerFn_handler, async ({ data, context }) => {
	const supabase = context.supabase;
	const { data: coach } = await supabase.from("coaches").select("id").maybeSingle();
	if (!coach) throw new Error("Perfil de treinador não encontrado");
	const { error } = await supabase.from("generator_preferences").upsert({
		coach_id: coach.id,
		metodologia: data.metodologia,
		blocos: data.blocos
	}, { onConflict: "coach_id,metodologia" });
	if (error) throw new Error(error.message);
	return { ok: true };
});
var listEquipamentos_createServerFn_handler = createServerRpc({
	id: "f99b4acdd130e30648ec98f10d7c3a75f27e843d4de4815f28a7c30c45173c94",
	name: "listEquipamentos",
	filename: "src/lib/generator-prefs.functions.ts"
}, (opts) => listEquipamentos.__executeServer(opts));
var listEquipamentos = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(listEquipamentos_createServerFn_handler, async ({ context }) => {
	const supabase = context.supabase;
	const { data: coach } = await supabase.from("coaches").select("id").maybeSingle();
	if (!coach) return [];
	const { data } = await supabase.from("exercises").select("equipamento").or(`coach_id.eq.${coach.id},coach_id.is.null`);
	const set = /* @__PURE__ */ new Set();
	for (const row of data ?? []) {
		const arr = row.equipamento ?? [];
		if (!Array.isArray(arr)) continue;
		for (const raw of arr) {
			if (!raw) continue;
			const norm = String(raw).toLowerCase().trim();
			if (norm) set.add(norm);
		}
	}
	return Array.from(set).sort();
});
var countExercicios_createServerFn_handler = createServerRpc({
	id: "0c1eba71d111a69af345691018a5924bf9591201a10bd7b64e17c0f0897848bc",
	name: "countExercicios",
	filename: "src/lib/generator-prefs.functions.ts"
}, (opts) => countExercicios.__executeServer(opts));
var countExercicios = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((raw) => object({
	modalidades: array(METODOLOGIA).min(1),
	equipamentos: array(string().min(1)).default([])
}).parse(raw)).handler(countExercicios_createServerFn_handler, async ({ data, context }) => {
	const supabase = context.supabase;
	const { data: coach } = await supabase.from("coaches").select("id").maybeSingle();
	if (!coach) return 0;
	const { data: rows } = await supabase.from("exercises").select("id, equipamento").or(`coach_id.eq.${coach.id},coach_id.is.null`).overlaps("metodologias", data.modalidades);
	if (data.equipamentos.length === 0) return rows?.length ?? 0;
	const alvo = data.equipamentos.map((e) => e.toLowerCase().trim());
	return (rows ?? []).filter((r) => {
		return (Array.isArray(r.equipamento) ? r.equipamento : []).some((v) => alvo.includes(String(v).toLowerCase().trim()));
	}).length;
});
var searchExercicios_createServerFn_handler = createServerRpc({
	id: "68360392555ddce5699a9643a717f95ffacd7e86e75b297c0cdf1a636ae261cf",
	name: "searchExercicios",
	filename: "src/lib/generator-prefs.functions.ts"
}, (opts) => searchExercicios.__executeServer(opts));
var searchExercicios = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((raw) => object({
	query: string().max(120).default(""),
	modalidades: array(METODOLOGIA).default([]),
	equipamentos: array(string().min(1)).default([]),
	somente_meus: boolean().default(false),
	limit: number().int().min(1).max(500).default(200)
}).parse(raw)).handler(searchExercicios_createServerFn_handler, async ({ data, context }) => {
	const supabase = context.supabase;
	const { data: coach } = await supabase.from("coaches").select("id").maybeSingle();
	if (!coach) return [];
	let q = supabase.from("exercises").select("id, nome_pt, metodologias, equipamento, coach_id").order("nome_pt").limit(data.limit);
	if (data.somente_meus) q = q.eq("coach_id", coach.id);
	else q = q.or(`coach_id.eq.${coach.id},coach_id.is.null`);
	if (data.query.trim()) q = q.ilike("nome_pt", `%${data.query.trim()}%`);
	if (data.modalidades.length > 0) q = q.overlaps("metodologias", data.modalidades);
	const { data: rows, error } = await q;
	if (error) throw new Error(error.message);
	let result = rows ?? [];
	if (data.equipamentos.length > 0) {
		const alvo = data.equipamentos.map((e) => e.toLowerCase().trim());
		result = result.filter((r) => {
			return (Array.isArray(r.equipamento) ? r.equipamento : []).some((v) => alvo.includes(String(v).toLowerCase().trim()));
		});
	}
	return result.map((r) => ({
		id: r.id,
		nome_pt: r.nome_pt,
		metodologias: r.metodologias ?? [],
		equipamento: r.equipamento ?? []
	}));
});
var getExerciciosByIds_createServerFn_handler = createServerRpc({
	id: "403c96d66d0de6ff7a0734f8d0f68d1af09109f9325d3d22516f14ab6c01cab6",
	name: "getExerciciosByIds",
	filename: "src/lib/generator-prefs.functions.ts"
}, (opts) => getExerciciosByIds.__executeServer(opts));
var getExerciciosByIds = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((raw) => object({ ids: array(string().uuid()).max(500) }).parse(raw)).handler(getExerciciosByIds_createServerFn_handler, async ({ data, context }) => {
	if (data.ids.length === 0) return [];
	const { data: rows, error } = await context.supabase.from("exercises").select("id, nome_pt").in("id", data.ids);
	if (error) throw new Error(error.message);
	return rows ?? [];
});
//#endregion
export { countExercicios_createServerFn_handler, getExerciciosByIds_createServerFn_handler, getGeneratorPrefs_createServerFn_handler, listEquipamentos_createServerFn_handler, saveGeneratorPrefs_createServerFn_handler, searchExercicios_createServerFn_handler };
