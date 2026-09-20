//#region node_modules/.nitro/vite/services/ssr/assets/athlete-memory-AjhKHXJa.js
var COMMON_INJURIES_LIST = [
	"Ombro (Manguito / Impacto)",
	"Lombar (Hérnia / Desconforto mecânico)",
	"Joelho (Tendinite / Condromalácia)",
	"Punho / Antebraço",
	"Cotovelo (Epicondilite)",
	"Quadril (Impacto / Bursite)",
	"Tornozelo / Tendão de Aquiles",
	"Cervical / Trapézio"
];
var COMMON_EQUIPMENT_LIST = [
	"Kettlebells (diversos pesos)",
	"Halteres (pares leves e médios)",
	"Halteres pesados (>20kg)",
	"Barra Olímpica e Anilhas",
	"Rack / Gaiola de Agachamento",
	"Banco Regulável",
	"Barra Fixa / Argolas de Ginástica",
	"Polia / CrossOver",
	"Máquinas Articuladas de Musculação",
	"Fita de Suspensão (TRX)",
	"Elásticos / Superbands",
	"Caixa de Salto (Plyo Box)",
	"Remo Indoor / AirBike",
	"Esteira Ergométrica"
];
var DEFAULT_ATHLETE_MEMORY = {
	nivelAtleta: "intermediario",
	tempoTreinoMeses: null,
	lesoes: [],
	equipamentos: [],
	cargas1rm: {
		agachamentoCostasKg: null,
		agachamentoFrontalKg: null,
		supinoKg: null,
		levantamentoTerraKg: null,
		desenvolvimentoMilitarKg: null,
		snatchKg: null,
		cleanAndJerkKg: null,
		snatchKbKg: null,
		jerkKbKg: null,
		longCycleKbKg: null,
		outrasCargas: null
	},
	diretrizesTreinador: "",
	estiloPreferido: "",
	observacoesGerais: "",
	atualizadoEm: (/* @__PURE__ */ new Date()).toISOString(),
	perfilEstruturado: false
};
/**
* Faz parse resiliente do campo observacoes da tabela students.
* Suporta JSON estruturado de memória e faz fallback caso seja texto livre antigo.
*/
function parseAthleteMemory(raw) {
	if (!raw || typeof raw !== "string" || !raw.trim()) return { ...DEFAULT_ATHLETE_MEMORY };
	const trimmed = raw.trim();
	if (trimmed.startsWith("{") && trimmed.endsWith("}")) try {
		const parsed = JSON.parse(trimmed);
		return {
			nivelAtleta: parsed.nivelAtleta || "intermediario",
			tempoTreinoMeses: typeof parsed.tempoTreinoMeses === "number" ? parsed.tempoTreinoMeses : null,
			lesoes: Array.isArray(parsed.lesoes) ? parsed.lesoes : [],
			equipamentos: Array.isArray(parsed.equipamentos) ? parsed.equipamentos : [],
			cargas1rm: {
				agachamentoCostasKg: parsed.cargas1rm?.agachamentoCostasKg ?? null,
				agachamentoFrontalKg: parsed.cargas1rm?.agachamentoFrontalKg ?? null,
				supinoKg: parsed.cargas1rm?.supinoKg ?? null,
				levantamentoTerraKg: parsed.cargas1rm?.levantamentoTerraKg ?? null,
				desenvolvimentoMilitarKg: parsed.cargas1rm?.desenvolvimentoMilitarKg ?? null,
				snatchKg: parsed.cargas1rm?.snatchKg ?? null,
				cleanAndJerkKg: parsed.cargas1rm?.cleanAndJerkKg ?? null,
				snatchKbKg: parsed.cargas1rm?.snatchKbKg ?? null,
				jerkKbKg: parsed.cargas1rm?.jerkKbKg ?? null,
				longCycleKbKg: parsed.cargas1rm?.longCycleKbKg ?? null,
				outrasCargas: parsed.cargas1rm?.outrasCargas ?? null
			},
			diretrizesTreinador: parsed.diretrizesTreinador || "",
			estiloPreferido: parsed.estiloPreferido || "",
			observacoesGerais: parsed.observacoesGerais || "",
			atualizadoEm: parsed.atualizadoEm || (/* @__PURE__ */ new Date()).toISOString(),
			perfilEstruturado: true
		};
	} catch {}
	return {
		...DEFAULT_ATHLETE_MEMORY,
		observacoesGerais: trimmed,
		diretrizesTreinador: trimmed
	};
}
/**
* Serializa a memória do atleta em JSON para armazenamento seguro no banco.
*/
function serializeAthleteMemory(memory) {
	const payload = {
		...memory,
		atualizadoEm: (/* @__PURE__ */ new Date()).toISOString(),
		perfilEstruturado: true
	};
	return JSON.stringify(payload);
}
/**
* Formata o contexto completo da memória persistente para injeção semântica nos prompts de IA.
*/
function formatMemoryForPrompt(athleteName, memory) {
	const parts = [];
	parts.push(`=== MEMÓRIA PERSISTENTE DO ATLETA (V3-CONTEXT ENGINE) ===`);
	parts.push(`- Atleta: ${athleteName || "Atleta"}`);
	if (memory.perfilEstruturado !== false) parts.push(`- Nível de Treinamento: ${memory.nivelAtleta.toUpperCase()}${memory.tempoTreinoMeses ? ` (~${memory.tempoTreinoMeses} meses de experiência)` : ""}`);
	if (memory.lesoes && memory.lesoes.length > 0) {
		parts.push(`- ⚠️ RESTRIÇÕES E LESÕES (SEGURANÇA OBRIGATÓRIA): ${memory.lesoes.join(", ")}`);
		parts.push(`  * REGRA CRÍTICA: A IA NÃO DEVE prescrever movimentos que sobrecarreguem ou agravem essas articulações/regiões.`);
	} else if (memory.perfilEstruturado !== false) parts.push(`- Restrições / Lesões: Nenhuma restrição anatômica declarada.`);
	if (memory.equipamentos && memory.equipamentos.length > 0) {
		parts.push(`- 🏋️ EQUIPAMENTOS ACESSÍVEIS AO ATLETA: ${memory.equipamentos.join(", ")}`);
		parts.push(`  * REGRA: Selecione EXCLUSIVAMENTE exercícios executáveis com esses equipamentos.`);
	}
	const cargasAtivas = [];
	const c = memory.cargas1rm || {};
	if (c.agachamentoCostasKg) cargasAtivas.push(`Agachamento Costas: ${c.agachamentoCostasKg}kg`);
	if (c.agachamentoFrontalKg) cargasAtivas.push(`Agachamento Frontal: ${c.agachamentoFrontalKg}kg`);
	if (c.supinoKg) cargasAtivas.push(`Supino: ${c.supinoKg}kg`);
	if (c.levantamentoTerraKg) cargasAtivas.push(`Levantamento Terra: ${c.levantamentoTerraKg}kg`);
	if (c.desenvolvimentoMilitarKg) cargasAtivas.push(`Desenvolvimento Militar: ${c.desenvolvimentoMilitarKg}kg`);
	if (c.snatchKg) cargasAtivas.push(`Snatch (LPO): ${c.snatchKg}kg`);
	if (c.cleanAndJerkKg) cargasAtivas.push(`Clean & Jerk: ${c.cleanAndJerkKg}kg`);
	if (c.snatchKbKg) cargasAtivas.push(`Snatch Kettlebell: ${c.snatchKbKg}kg`);
	if (c.jerkKbKg) cargasAtivas.push(`Jerk Kettlebell: ${c.jerkKbKg}kg`);
	if (c.longCycleKbKg) cargasAtivas.push(`Long Cycle KB: ${c.longCycleKbKg}kg`);
	if (c.outrasCargas) cargasAtivas.push(`Outras cargas: ${c.outrasCargas}`);
	if (cargasAtivas.length > 0) {
		parts.push(`- 🎯 CARGAS DE REFERÊNCIA / 1RMs CONHECIDOS:`);
		cargasAtivas.forEach((item) => parts.push(`  * ${item}`));
		parts.push(`  * REGRA: Calcule as sugestões de carga (%) respeitando estes números como base real.`);
	}
	if (memory.diretrizesTreinador && memory.diretrizesTreinador.trim()) parts.push(`- 📋 DIRETRIZES DO TREINADOR: ${memory.diretrizesTreinador.trim()}`);
	if (memory.estiloPreferido && memory.estiloPreferido.trim()) parts.push(`- ⚡ ESTILO & PREFERÊNCIAS: ${memory.estiloPreferido.trim()}`);
	parts.push(`===========================================================`);
	return parts.join("\n");
}
//#endregion
export { serializeAthleteMemory as a, parseAthleteMemory as i, COMMON_INJURIES_LIST as n, formatMemoryForPrompt as r, COMMON_EQUIPMENT_LIST as t };
