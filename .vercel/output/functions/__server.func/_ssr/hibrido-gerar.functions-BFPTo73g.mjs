import { u as createServerFn } from "./esm-BJY6H9OB.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-CHOPR5bi.mjs";
import { a as array, c as object, d as union, r as _enum, s as number, u as string } from "../_libs/tanstack__zod-adapter+zod.mjs";
import { t as createServerRpc } from "./server-rpc-DWINvzj2.mjs";
import { validarLimitesDoMolde } from "./format-limits-DWDauxMB.mjs";
import { n as montarHibridoPrompt, r as normalizarPrescricaoHibrido, t as buscarCandidatosDoMolde } from "./hibrido-ia.server-DtG5MFAp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hibrido-gerar.functions-BFPTo73g.js
var FORMATO = string().min(1);
var FONTE_EXERCICIOS = object({
	metodologias: array(string()).optional(),
	equipamento: array(string()).optional()
}).default({});
var BLOCO = object({
	chave: string().min(1),
	formato: FORMATO,
	titulo: string().nullable().optional(),
	duracaoMin: number().nullable(),
	seriesMin: number().nullable(),
	seriesMax: number().nullable(),
	numeroExercicios: number().int().min(1),
	repsPorExercicio: union([string(), number()]).nullable(),
	modoExecucao: _enum(["circuito", "series_fixas"]),
	descansoAposSeg: number().min(0).default(0),
	descansoEntreSeriesSeg: number().nullable().optional(),
	intervaloMin: number().nullable().optional(),
	percentual1rm: number().nullable().optional(),
	selecaoExercicios: _enum(["ia", "manual"]),
	exerciciosFixos: array(string()).default([]),
	slot: _enum(["mobilidade", "aquecimento"]).nullable().optional(),
	fonteExercicios: FONTE_EXERCICIOS
});
var INPUT = object({
	modalidade: _enum(["hibrido", "kettlebell_fitness"]),
	tituloPrograma: string().min(1).max(120),
	numeroSessoes: number().int().min(1).max(52),
	/** Quantas sessões cabem por semana antes de abrir uma nova program_week. Padrão 6 (D1-D6, como nas planilhas). */
	diasPorSemana: number().int().min(1).max(7).default(6),
	dataInicio: string().nullable().optional(),
	sessaoTemplate: array(BLOCO).min(1),
	instrucoes: string().max(4e3).default("")
}).superRefine((val, ctx) => {
	const violacoes = validarLimitesDoMolde(val.sessaoTemplate.map((b) => ({
		formato: b.formato,
		numeroExercicios: b.numeroExercicios,
		seriesMax: b.seriesMax
	})));
	for (const v of violacoes) ctx.addIssue({
		code: "custom",
		path: ["sessaoTemplate"],
		message: `FORMAT_LIMIT_EXCEEDED: o formato "${v.formato}" aceita no máximo ${v.maximo} em ${v.campo} (recebido ${v.valor}).`
	});
});
function configDoBloco(b) {
	const base = {
		chave: b.chave,
		descanso_apos_seg: b.descansoAposSeg
	};
	const formato = (b.formato ?? "").replace(/^(builtin|custom):/, "");
	switch (formato) {
		case "preparacao_movimento": return {
			...base,
			rounds: b.seriesMin ?? 4,
			round_min: b.duracaoMin ?? 2,
			modo_execucao: b.modoExecucao
		};
		case "forca_tecnica_pct": {
			const reps = typeof b.repsPorExercicio === "number" ? b.repsPorExercicio : Number(b.repsPorExercicio) || 6;
			return {
				...base,
				passos: [{
					pct: b.percentual1rm ?? 70,
					sets: b.seriesMin ?? 3,
					reps
				}]
			};
		}
		case "emom":
		case "e2mom": return {
			...base,
			rounds: b.seriesMin ?? 8,
			intervalo_min: b.intervaloMin ?? (formato === "e2mom" ? 2 : 1),
			modo_execucao: b.modoExecucao
		};
		case "amrap": return {
			...base,
			duracao_min: b.duracaoMin ?? 12
		};
		case "kb_timed_sets": return { ...base };
		case "livre": return {
			...base,
			instrucoes: ""
		};
		default: return {
			...base,
			series: b.seriesMin ?? 3,
			reps: b.repsPorExercicio != null ? String(b.repsPorExercicio) : "",
			descanso_seg: b.descansoEntreSeriesSeg ?? 60,
			modo_execucao: b.modoExecucao
		};
	}
}
var gerarSessoesHibrido_createServerFn_handler = createServerRpc({
	id: "fecb06e7f6b6928adae50ded803997e69dd620a043606b7a08894ea0994985c4",
	name: "gerarSessoesHibrido",
	filename: "src/lib/hibrido-gerar.functions.ts"
}, (opts) => gerarSessoesHibrido.__executeServer(opts));
var gerarSessoesHibrido = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => INPUT.parse(input)).handler(gerarSessoesHibrido_createServerFn_handler, async ({ data, context }) => {
	const supabase = context.supabase;
	const template = data.sessaoTemplate;
	const { data: coachRow, error: coachErr } = await supabase.from("coaches").select("id").maybeSingle();
	if (coachErr) throw new Error(coachErr.message);
	if (!coachRow) throw new Error("Treinador não encontrado para este usuário");
	const coachId = coachRow.id;
	const candidatos = await buscarCandidatosDoMolde(supabase, template);
	const avisos = [];
	for (const b of template) if (b.selecaoExercicios === "ia" && (candidatos[b.chave]?.length ?? 0) === 0) avisos.push(`Nenhum exercício encontrado na biblioteca para o bloco "${b.titulo ?? b.formato}" com os filtros informados — verifique metodologias/equipamento.`);
	const { callLovableAiJson, AiGatewayError } = await import("./ai-gateway.server-DP7dTmSZ.mjs");
	const prompt = montarHibridoPrompt({
		payload: data,
		candidatos,
		instrucoes: data.instrucoes
	});
	let conteudo;
	try {
		conteudo = (await callLovableAiJson({
			scope: "hibrido-gerar",
			prompt
		})).raw;
	} catch (err) {
		if (err instanceof AiGatewayError) throw new Error(`${err.code}: ${err.message}`);
		throw err;
	}
	const prescricao = normalizarPrescricaoHibrido(conteudo, template, candidatos, data.numeroSessoes);
	const numeroSemanas = Math.max(1, Math.ceil(data.numeroSessoes / data.diasPorSemana));
	const { data: prog, error: progErr } = await supabase.from("programs").insert({
		coach_id: coachId,
		metodologia: data.modalidade,
		titulo: data.tituloPrograma,
		data_inicio: data.dataInicio ?? (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
		duracao_semanas: numeroSemanas
	}).select("id").single();
	if (progErr || !prog) throw new Error(progErr?.message ?? "Falha ao criar o programa");
	let numeroSemanaAtual = 0;
	let semanaId = null;
	let numeroDiaNaSemana = 0;
	for (let i = 0; i < prescricao.sessoes.length; i++) {
		const sessaoPrescrita = prescricao.sessoes[i];
		if (numeroDiaNaSemana === 0 || numeroDiaNaSemana > data.diasPorSemana) {
			numeroSemanaAtual += 1;
			numeroDiaNaSemana = 1;
			const { data: semana, error: semanaErr } = await supabase.from("program_weeks").insert({
				program_id: prog.id,
				numero_semana: numeroSemanaAtual
			}).select("id").single();
			if (semanaErr || !semana) throw new Error(semanaErr?.message ?? "Falha ao criar a semana");
			semanaId = semana.id;
		}
		const { data: sess, error: sessErr } = await supabase.from("sessions").insert({
			program_week_id: semanaId,
			numero_dia: numeroDiaNaSemana,
			titulo: `Sessão ${i + 1}`,
			status: "rascunho"
		}).select("id").single();
		if (sessErr || !sess) throw new Error(sessErr?.message ?? "Falha ao criar a sessão");
		numeroDiaNaSemana += 1;
		let ordemBloco = 1;
		for (const blocoTpl of template) {
			const exercicioIds = sessaoPrescrita.blocos.find((b) => b.chave === blocoTpl.chave)?.exerciciosIds ?? [];
			const { data: blocoRow, error: blocoErr } = await supabase.from("session_blocks").insert({
				session_id: sess.id,
				ordem: ordemBloco,
				formato: blocoTpl.formato,
				titulo: blocoTpl.titulo ?? null,
				duracao_min: blocoTpl.duracaoMin,
				config: configDoBloco(blocoTpl)
			}).select("id").single();
			if (blocoErr || !blocoRow) throw new Error(blocoErr?.message ?? "Falha ao criar o bloco");
			ordemBloco += 1;
			if (exercicioIds.length > 0) {
				const rows = exercicioIds.map((exId, idx) => ({
					session_block_id: blocoRow.id,
					exercise_id: exId,
					ordem: idx + 1,
					series: blocoTpl.seriesMin ?? null,
					reps: blocoTpl.repsPorExercicio != null ? String(blocoTpl.repsPorExercicio) : null,
					pct_1rm: blocoTpl.percentual1rm ?? null,
					descanso_seg: blocoTpl.descansoEntreSeriesSeg ?? null
				}));
				const { error: exErr } = await supabase.from("session_block_exercises").insert(rows);
				if (exErr) throw new Error(exErr.message);
			}
		}
	}
	return {
		programaId: prog.id,
		sessoesGeradas: prescricao.sessoes.length,
		notes: prescricao.notes,
		avisos
	};
});
//#endregion
export { gerarSessoesHibrido_createServerFn_handler };
