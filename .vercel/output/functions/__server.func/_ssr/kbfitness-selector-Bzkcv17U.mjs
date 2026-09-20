//#region node_modules/.nitro/vite/services/ssr/assets/kbfitness-selector-Bzkcv17U.js
var PESO_CATEGORIA_KB_FITNESS = {
	Kettlebell: .813,
	"Ginásticos": .15,
	Dumbbell: .024,
	Barbell: .009,
	Mobilidade: .005,
	"Objetos Alternativos": 0
};
var DISTRIBUICAO_DURACAO = [
	{
		min: 30,
		peso: .961
	},
	{
		min: 36,
		peso: .013
	},
	{
		min: 24,
		peso: .011
	},
	{
		min: 20,
		peso: .011
	},
	{
		min: 15,
		peso: .004
	}
];
var DISTRIBUICAO_NUM_ESTACOES = [
	{
		n: 6,
		peso: .538
	},
	{
		n: 5,
		peso: .368
	},
	{
		n: 4,
		peso: .087
	},
	{
		n: 7,
		peso: .007
	}
];
function espacamentoAlvo(totalUsos) {
	if (totalUsos >= 100) return 9;
	if (totalUsos >= 30) return 18;
	if (totalUsos >= 10) return 48;
	return 204;
}
var PROBABILIDADE_ACEITAR_REPETICAO_NO_DIA = .157;
function montarSessaoKettlebellFitness(pool, sessaoIdxAtual, opts) {
	const duracao_min = opts?.duracaoMinOverride ?? sortearPonderado(DISTRIBUICAO_DURACAO.map((d) => ({
		item: d.min,
		peso: d.peso
	})));
	const num_estacoes = opts?.numEstacoesOverride ?? sortearPonderado(DISTRIBUICAO_NUM_ESTACOES.map((d) => ({
		item: d.n,
		peso: d.peso
	})));
	const ativas = {
		...opts?.categoriasAtivas ?? {},
		Mobilidade: false
	};
	const usadosHoje = /* @__PURE__ */ new Set();
	const estacoes = [];
	for (let i = 0; i < num_estacoes; i++) {
		const escolhido = escolherExercicio(pool, sortearCategoria(ativas), sessaoIdxAtual, Math.random() < PROBABILIDADE_ACEITAR_REPETICAO_NO_DIA ? /* @__PURE__ */ new Set() : usadosHoje);
		if (escolhido) {
			estacoes.push(escolhido);
			usadosHoje.add(escolhido.id);
		}
	}
	return {
		duracao_min,
		num_estacoes,
		estacoes
	};
}
function escolherExercicio(pool, categoria, sessaoIdxAtual, usadosHoje) {
	let candidatos = pool.filter((e) => e.categoria === categoria && !usadosHoje.has(e.id));
	if (candidatos.length === 0) candidatos = pool.filter((e) => !usadosHoje.has(e.id));
	if (candidatos.length === 0) return null;
	return sortearPonderado(candidatos.map((ex) => {
		const alvo = espacamentoAlvo(ex.total_usos);
		const atraso = (ex.ultima_sessao_idx === null ? alvo * 2 : sessaoIdxAtual - ex.ultima_sessao_idx) / alvo;
		return {
			ex,
			score: Math.max(atraso, .01)
		};
	}).map((p) => ({
		item: p.ex,
		peso: p.score
	})));
}
function sortearCategoria(ativas) {
	const opcoes = Object.entries(PESO_CATEGORIA_KB_FITNESS).filter(([cat, peso]) => peso > 0 && (ativas?.[cat] ?? true)).map(([cat, peso]) => ({
		item: cat,
		peso
	}));
	if (opcoes.length === 0) return "Kettlebell";
	return sortearPonderado(opcoes);
}
function sortearPonderado(opcoes) {
	const total = opcoes.reduce((s, o) => s + o.peso, 0);
	let r = Math.random() * total;
	for (const o of opcoes) {
		r -= o.peso;
		if (r <= 0) return o.item;
	}
	return opcoes[opcoes.length - 1].item;
}
function mapEquipamentoToCategoria(equipamento) {
	const first = Array.isArray(equipamento) && equipamento.length > 0 ? String(equipamento[0]).toLowerCase().trim() : "";
	if (first.includes("kettlebell")) return "Kettlebell";
	if (first.includes("ginast") || first.includes("calist") || first.includes("peso_corporal") || first.includes("peso corporal")) return "Ginásticos";
	if (first.includes("dumbbell") || first.includes("halter")) return "Dumbbell";
	if (first.includes("barbell") || first.includes("barra")) return "Barbell";
	if (first.includes("mobilidade")) return "Mobilidade";
	return "Kettlebell";
}
async function buildKbFitnessSession(args) {
	const { supabase, coachId, sessionId, sessaoIdx, avisos, config } = args;
	const ordemBase = args.ordemBase ?? 0;
	const { data: raw, error: exErr } = await supabase.from("exercises").select("id, nome_pt, equipamento, metodologias").or(`coach_id.eq.${coachId},coach_id.is.null`).overlaps("metodologias", ["kettlebell_fitness"]);
	if (exErr) throw new Error(exErr.message);
	const exercicios = raw ?? [];
	if (exercicios.length === 0) {
		avisos.push(`Kettlebell Fitness: nenhum exercício marcado para essa modalidade — sessão criada vazia.`);
		return;
	}
	const ids = exercicios.map((e) => e.id);
	const { data: usos } = await supabase.from("session_block_exercises").select("exercise_id, session_blocks!inner(sessions!inner(data, program_weeks!inner(programs!inner(coach_id, metodologia))))").in("exercise_id", ids).eq("session_blocks.sessions.program_weeks.programs.coach_id", coachId).eq("session_blocks.sessions.program_weeks.programs.metodologia", "kettlebell_fitness");
	const stats = /* @__PURE__ */ new Map();
	for (const row of usos ?? []) {
		const id = row.exercise_id;
		const data = row?.session_blocks?.sessions?.data;
		const cur = stats.get(id) ?? {
			total: 0,
			ultimaData: null
		};
		cur.total += 1;
		if (data && (!cur.ultimaData || data > cur.ultimaData)) cur.ultimaData = data;
		stats.set(id, cur);
	}
	const sessao = montarSessaoKettlebellFitness(exercicios.map((e) => {
		const s = stats.get(e.id);
		return {
			id: e.id,
			nome_pt: e.nome_pt,
			categoria: mapEquipamentoToCategoria(e.equipamento),
			total_usos: s?.total ?? 0,
			ultima_sessao_idx: s ? Math.max(0, sessaoIdx - s.total) : null
		};
	}).filter((e) => e.categoria !== "Mobilidade"), sessaoIdx, {
		categoriasAtivas: config?.categoriasAtivas,
		numEstacoesOverride: config?.numEstacoesOverride ?? null,
		duracaoMinOverride: config?.duracaoMinOverride ?? null
	});
	if (sessao.estacoes.length === 0) {
		avisos.push(`Kettlebell Fitness: pool vazio após filtros — nenhuma estação sorteada.`);
		return;
	}
	const { data: block, error: be } = await supabase.from("session_blocks").insert({
		session_id: sessionId,
		ordem: ordemBase,
		formato: "kb_timed_sets",
		titulo: `Kettlebell Fitness (${sessao.duracao_min}')`,
		duracao_min: sessao.duracao_min,
		config: {
			formato: "kb_timed_sets",
			template: "kb_fitness",
			num_estacoes: sessao.num_estacoes,
			num_rounds: sessao.num_estacoes,
			duracao_min: sessao.duracao_min
		}
	}).select("id").single();
	if (be || !block) throw new Error(be?.message ?? "Falha ao criar bloco KB Fitness");
	const linhas = sessao.estacoes.map((ex, i) => ({
		session_block_id: block.id,
		exercise_id: ex.id,
		ordem: i,
		series: sessao.num_estacoes,
		reps: "12"
	}));
	const { error: xe } = await supabase.from("session_block_exercises").insert(linhas);
	if (xe) throw new Error(xe.message);
}
//#endregion
export { buildKbFitnessSession };
