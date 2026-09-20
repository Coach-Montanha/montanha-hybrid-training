//#region node_modules/.nitro/vite/services/ssr/assets/format-limits-DWDauxMB.js
var DEFAULT_LIMIT = {
	maxExercicios: 30,
	maxSeries: 30
};
var LIMITS = {
	mobilidade: {
		maxExercicios: 8,
		maxSeries: 10
	},
	preparacao_movimento: {
		maxExercicios: 10,
		maxSeries: 12
	},
	forca_tecnica_pct: {
		maxExercicios: 8,
		maxSeries: 12
	},
	bodybuilding_sets: {
		maxExercicios: 15,
		maxSeries: 12
	},
	series_tempo: {
		maxExercicios: 15,
		maxSeries: 12
	},
	finalizador: {
		maxExercicios: 12,
		maxSeries: 15
	},
	emom: {
		maxExercicios: 20,
		maxSeries: 60
	},
	e2mom: {
		maxExercicios: 20,
		maxSeries: 60
	},
	amrap: {
		maxExercicios: 20,
		maxSeries: 30
	},
	kb_timed_sets: {
		maxExercicios: 20,
		maxSeries: 30
	},
	circuito: {
		maxExercicios: 30,
		maxSeries: 30
	},
	metcon: {
		maxExercicios: 30,
		maxSeries: 30
	},
	livre: {
		maxExercicios: 30,
		maxSeries: 30
	}
};
function baseFormatId(formatId) {
	if (!formatId) return "circuito";
	if (formatId.startsWith("builtin:")) return formatId.replace("builtin:", "");
	return formatId;
}
function getFormatLimit(formatId) {
	return LIMITS[baseFormatId(formatId)] ?? DEFAULT_LIMIT;
}
/** Pré-validação usada no cliente antes de chamar o servidor. */
function validarLimitesDoMolde(blocos) {
	const out = [];
	for (const b of blocos) {
		const limite = getFormatLimit(b.formato);
		if (b.numeroExercicios > limite.maxExercicios) out.push({
			code: "FORMAT_LIMIT_EXCEEDED",
			formato: b.formato,
			campo: "numeroExercicios",
			valor: b.numeroExercicios,
			maximo: limite.maxExercicios
		});
		if (b.seriesMax != null && b.seriesMax > limite.maxSeries) out.push({
			code: "FORMAT_LIMIT_EXCEEDED",
			formato: b.formato,
			campo: "series",
			valor: b.seriesMax,
			maximo: limite.maxSeries
		});
	}
	return out;
}
//#endregion
export { validarLimitesDoMolde };
