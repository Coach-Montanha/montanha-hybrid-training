import { u as createServerFn } from "./esm-BJY6H9OB.mjs";
import { t as createSsrRpc } from "./ssr-rpc-DsWtVjPG.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-CHOPR5bi.mjs";
import { a as array, c as object, d as union, r as _enum, s as number, u as string } from "../_libs/tanstack__zod-adapter+zod.mjs";
import { validarLimitesDoMolde } from "./format-limits-DWDauxMB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hibrido-gerar.functions-CqLmB83b.js
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
var gerarSessoesHibrido = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => INPUT.parse(input)).handler(createSsrRpc("fecb06e7f6b6928adae50ded803997e69dd620a043606b7a08894ea0994985c4"));
//#endregion
export { gerarSessoesHibrido };
