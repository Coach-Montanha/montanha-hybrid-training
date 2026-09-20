import { u as createServerFn } from "./esm-BJY6H9OB.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-CHOPR5bi.mjs";
import { a as array, c as object, i as any, o as boolean, r as _enum, s as number, u as string } from "../_libs/tanstack__zod-adapter+zod.mjs";
import { t as BUILTIN_SET_TYPES } from "./set-type-registry-BN6pSciu.mjs";
import { i as parseAthleteMemory, r as formatMemoryForPrompt } from "./athlete-memory-AjhKHXJa.mjs";
import { t as createServerRpc } from "./server-rpc-DWINvzj2.mjs";
import { n as montarHibridoPrompt, r as normalizarPrescricaoHibrido, t as buscarCandidatosDoMolde } from "./hibrido-ia.server-DtG5MFAp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/prescricao-ia.functions-OuUkuH9B.js
var SYSTEM_PROMPT = `Você é um Personal Trainer experiente em MUSCULAÇÃO (treinamento resistido com pesos), atendendo atletas, pessoas comuns e pessoas com necessidades especiais. Este motor é exclusivo de musculação: monte divisões de treino (A/B/C/D...), com foco muscular por dia, exercícios de sala de musculação, séries, repetições, carga e descanso.

Sua tarefa é planejar a CONTINUIDADE e PERIODIZAÇÃO EM BLOCO da programação, respeitando estritamente o HISTÓRICO e as LIMITAÇÕES DO ALUNO.

Se o treinador fornecer o "CONTEXTO DA PROGRAMAÇÃO ATUAL" ou "HISTÓRICO COMPLETO":
1. Analise meticulosamente o que já foi executado (exercícios, séries, repetições, cargas).
2. Identifique limitações físicas, lesões ou restrições mencionadas nos objetivos/resumo e NUNCA prescreva movimentos que as violem.
3. Projete a progressão completa para o BLOCO solicitado (ex: 4 semanas):
   - Utilize a estratégia de PERIODIZAÇÃO ONDULATÓRIA: alterne volume, intensidade e complexidade técnica de forma não linear entre as semanas para maximizar a adaptação e evitar o platô.
   - Você tem LIBERDADE TOTAL para evoluir o programa: pode manter exercícios chave progredindo carga, substituir movimentos por variantes mais complexas ou introduzir novos estímulos (ex: troca de isoladores por compostos ou vice-versa).
4. O objetivo é EXPANDIR o programa, criando sessões/semanas que são a continuação lógica e estratégica do que veio antes.
5. OBRIGATÓRIO: Identifique corretamente o "week_number" (1, 2, 3...) para cada sessão gerada, garantindo que elas sejam agrupadas nas semanas corretas.
6. ATENÇÃO AOS DETALHES: Siga rigorosamente as "INSTRUÇÕES DO TREINADOR" para esta fase. Se ele pedir foco em um músculo, ou mudança de objetivo, priorize isso acima da lógica padrão.

PROIBIDO usar movimentos de kettlebell (swing, snatch, jerk, turkish get-up), levantamento de peso olímpico (clean, arranco, arremesso), ginásticos (muscle-up, handstand), CrossFit/MetCon (burpee, wall ball, box jump, thruster) ou qualquer condicionamento metabólico. Use apenas exercícios clássicos de sala de musculação com barra, halteres, polias, máquinas e peso corporal guiado.

Você tem acesso ao pool de exercícios da biblioteca através do histórico fornecido. Se for solicitado um novo exercício não presente no histórico, escreva o nome por extenso em português.
Exercícios podem ser individuais ou combinados. Para combinar, use o mesmo prefixo em "group" ("A1"/"A2" = par combinado) e defina "group_type" como "biset", "triset" ou "superset". Exercício isolado: "group" vazio e "group_type" igual a "individual".

Gere a prescrição em português (Brasil). Responda APENAS com JSON válido, sem markdown, no formato:
{
  "days": [
    { "name": "Treino 1",
      "day_label": "Dia A",
      "week_number": 1,
      "description": "Foco muscular / observações gerais",
      "exercises": [
        { "name": "Supino reto", "sets_reps": "4x10", "load": "60kg",
          "rest_seconds": 90, "observations": "Cadência 2:1",
          "group": "", "group_type": "individual" }
      ] }
  ],
  "notes": "RELATÓRIO DE EVOLUÇÃO: Descreva detalhadamente a ESTRATÉGIA DE PERIODIZAÇÃO ONDULATÓRIA usada para todo o bloco gerado (ex: Semana 1 adaptação, Semana 2 carga, Semana 3 pico, Semana 4 deload) e justifique a escolha/troca dos exercícios em relação ao histórico."
}
Regras: 4 a 8 exercícios por dia; 'load' e 'observations' podem ser vazios; 'day_label' segue o tipo de nomenclatura da rotina.
 Se você for informado sobre 'TIPOS DE SÉRIES DISPONÍVEIS', utilize preferencialmente esses formatos e nomenclaturas no campo 'load' ou 'observations' conforme adequado ao contexto.
 Se você for informado sobre 'FORMATOS DE BLOCO CUSTOMIZADOS DISPONÍVEIS', utilize-os para entender a estrutura dos blocos solicitados.
 Cada formato de bloco customizado pode ter 'field_labels' específicos (ex: 'Rounds' em vez de 'Séries'). Ao preencher os campos técnicos, use a nomenclatura sugerida pelo treinador nos field_labels quando disponível.`;
function montarUserPrompt(ctx, instrucoes) {
	const exemplo = ctx.nomenclatura === "alfabetico" ? "Dia A, Dia B, Dia C" : "Dia 1, Dia 2, Dia 3";
	const dias = ctx.dias_por_semana && ctx.dias_por_semana > 0 ? ctx.dias_por_semana : null;
	const historySection = ctx.continuation ? [
		"RESUMO ESTRUTURADO DO HISTÓRICO RECENTE (Análise para Progressão):",
		`- Sessões analisadas: ${ctx.continuation.sourceSessionCount}`,
		`- Exercícios recentes: ${ctx.continuation.recentSessions.flatMap((s) => s.exerciseNames).join(", ")}`,
		`- Grupos musculares trabalhados: ${Array.from(new Set(ctx.continuation.recentSessions.flatMap((s) => s.muscleGroups))).join(", ")}`,
		`- BLOQUEIO DE REPETIÇÃO (Soft Avoid): Evite usar estes IDs se possível: ${ctx.continuation.softAvoidIds.join(", ")}`,
		`- Exercícios mais frequentes: ${ctx.continuation.usage.slice(0, 5).map((u) => u.name).join(", ")}`,
		`- Formatos de bloco recentes: ${ctx.continuation.recentFormats.join(", ")}`,
		`- NOTAS DE PROGRESSÃO: ${ctx.continuation.progressionNotes}`
	].join("\n") : ctx.resumo_anterior;
	return [
		"CONTEXTO DA ROTINA (não repita, apenas use):",
		`- Nome: ${ctx.titulo}`,
		`- Modalidade: ${ctx.metodologia}`,
		ctx.escola ? `- Escola Metodológica: ${ctx.escola}` : null,
		`- Duração: ${ctx.duracao_semanas} semana(s)`,
		ctx.escopo_label ? `- Escopo da prescrição: ${ctx.escopo_label}` : null,
		dias ? `- Dias de treino por semana: ${dias}` : null,
		`- Período: ${ctx.data_inicio ?? "não informado"} até ${ctx.data_fim ?? "não informado"}`,
		`- Nomenclatura dos dias: ${ctx.nomenclatura} (ex.: ${exemplo})`,
		`- Sessões já existentes: ${ctx.sessoes_existentes}`,
		historySection ? `- CONTEXTO DA PROGRAMAÇÃO ATUAL:\n${historySection}` : null,
		ctx.aluno_info ? `- LIMITAÇÕES E INFO DO ALUNO: ${ctx.aluno_info}` : null,
		ctx.objetivos ? `- Objetivos: ${ctx.objetivos}` : null,
		ctx.set_types ? `- TIPOS DE SÉRIES DISPONÍVEIS: ${ctx.set_types.map((t) => `${t.label} (ID: ${t.id})`).join(", ")}` : null,
		ctx.custom_formats ? `- FORMATOS DE BLOCO CUSTOMIZADOS: ${ctx.custom_formats.map((f) => `${f.label} (Base: ${f.base}, SetType: ${f.set_type_id}, Rótulos: ${JSON.stringify(f.field_labels || {})})`).join("; ")}` : null,
		"",
		dias ? `OBRIGATÓRIO: gere o programa completo conforme o escopo selecionado (${ctx.escopo_label ?? `${ctx.duracao_semanas} semanas`}). Se o escopo for de múltiplas semanas, gere exatamente ${dias} dia(s) distintos PARA CADA SEMANA, garantindo a evolução entre elas (ex: se gerar 2 semanas com 3 dias/sem, gere 6 dias no total, identificando "week_number" de 1 a 2). Use apenas o histórico compacto fornecido para evitar repetições.` : "OBRIGATÓRIO: gere exatamente 1 dia de treino.",
		"",
		"INSTRUÇÕES DO TREINADOR:",
		instrucoes.trim().length > 0 ? instrucoes.trim() : "Sem instruções adicionais: monte uma division equilibrada de hipertrofia adequada ao escopo acima."
	].filter(Boolean).join("\n");
}
function calcularDataFim(inicio, semanas) {
	if (!inicio) return null;
	const d = /* @__PURE__ */ new Date(`${inicio}T00:00:00`);
	if (Number.isNaN(d.getTime())) return null;
	d.setDate(d.getDate() + Math.max(1, semanas) * 7 - 1);
	return d.toISOString().slice(0, 10);
}
function texto(v, fallback = "") {
	return typeof v === "string" ? v.trim() : fallback;
}
var GROUP_TYPES = [
	"individual",
	"biset",
	"triset",
	"superset"
];
function tipoDeGrupo(v, grupo) {
	const t = texto(v).toLowerCase().replace(/[\s-]/g, "");
	const achado = GROUP_TYPES.find((g) => g === t);
	if (achado && achado !== "individual") return grupo ? achado : "individual";
	return grupo ? "biset" : "individual";
}
/** JSON.parse defensivo + normalização do formato esperado. */
function normalizarPrescricao(bruto) {
	let json;
	try {
		const limpo = bruto.trim().replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
		json = JSON.parse(limpo);
	} catch (e) {
		console.error("Erro ao fazer parse do JSON da IA:", e, "\nConteúdo bruto:", bruto);
		throw new Error("A IA respondeu em um formato inesperado. Tente novamente.");
	}
	const days = (Array.isArray(json?.days) ? json.days : []).map((d, i) => {
		const exRaw = Array.isArray(d?.exercises) ? d.exercises : [];
		return {
			name: texto(d?.name, `Treino ${i + 1}`),
			day_label: texto(d?.day_label),
			week_number: typeof d?.week_number === "number" ? d.week_number : void 0,
			description: texto(d?.description),
			exercises: exRaw.map((e) => {
				const grupo = texto(e?.group).toUpperCase().slice(0, 4);
				return {
					name: texto(e?.name),
					sets_reps: texto(e?.sets_reps),
					load: texto(e?.load),
					rest_seconds: typeof e?.rest_seconds === "number" && Number.isFinite(e.rest_seconds) ? Math.max(0, Math.round(e.rest_seconds)) : null,
					observations: texto(e?.observations),
					group: grupo,
					group_type: tipoDeGrupo(e?.group_type, grupo)
				};
			}).filter((e) => e.name.length > 0)
		};
	});
	if (days.length === 0) throw new Error("A IA não retornou nenhum dia de treino. Refine as instruções.");
	return {
		days,
		notes: texto(json?.notes)
	};
}
var ESCOLA_LABEL = {
	fedorenko: "Fedorenko / WKC",
	rudnev: "Rudnev",
	vorotyntsev: "Vorotyntsev",
	denisov: "Denisov",
	vasilev: "Vasilev",
	gomonov: "Gomonov / Machotkin"
};
var PROMPT_ESCOLA = {
	fedorenko: `LINHA FEDORENKO / WKC: volume progressivo com séries longas de ritmo constante (sets de 5 a 10 min), técnica minimalista e econômica, poucas variações. Ênfase em acumular tempo sob o sino com pace fixo (reps/min), séries de repetição contínua e trabalho complementar leve de core e pernas.`,
	rudnev: `LINHA RUDNEV: periodização científica com controle de intensidade por % das reps máximas, alternância entre sessões de volume, ritmo e recuperação. Ênfase na fase de relaxamento dentro do ciclo do movimento, respiração acoplada, séries por tempo com pace prescrito e trabalho de flexibilidade/relaxamento no fim.`,
	vorotyntsev: `LINHA VOROTYNTSEV: didática técnica por estágios — decompõe o levantamento em partes (pegada, fixação, queda, respiração), muitas séries curtas de alta qualidade técnica, correções progressivas, aumento de carga só após domínio do estágio.`,
	denisov: `LINHA DENISOV: altíssimo volume competitivo, múltiplas séries longas com carga próxima da competição, treino frequente e forte demanda de resistência específica. Adequado para atletas avançados/elite.`,
	vasilev: `LINHA VASILEV: ciclos de 4 a 6 semanas com testes de controle no fim de cada ciclo, progressão em degraus de volume e carga, sessões de ritmo alternadas com sessões de força específica.`,
	gomonov: `LINHA GOMONOV / MACHOTKIN: onboarding pedagógico para iniciantes — carga leve, séries curtas, muito trabalho de mobilidade, respiração e postura, aumento gradual de tempo sob o sino e ênfase em segurança articular.`
};
/** Orquestrador (escola = "auto"): escolhe a linha pelo perfil do atleta. */
function escolherEscola(nivel, disciplina) {
	if (nivel === "iniciante") return "gomonov";
	if (nivel === "intermediario") return disciplina === "long_cycle" ? "vasilev" : "rudnev";
	if (nivel === "avancado") return "fedorenko";
	return "denisov";
}
var KB_SPORT_SYSTEM_PROMPT = `Você é um treinador especialista em KETTLEBELL SPORT (Girevoy Sport) de nível internacional.
Este motor é exclusivo de Kettlebell Sport: prescreva apenas movimentos de competição e assistências específicas — Snatch, Jerk, Long Cycle, Half Snatch, Swing, Clean, fixações, segurações (holds), rack holds, além de assistências gerais leves (core, pernas, grip, mobilidade).
PROIBIDO prescrever exercícios de sala de musculação (supino, leg press, cadeira extensora, rosca em polia), CrossFit/MetCon ou ginásticos.
Você NÃO tem acesso a nenhum banco de exercícios: escreva os nomes por extenso, em português.
Em Kettlebell Sport o volume é definido por TEMPO e RITMO: use "sets_reps" no formato "3x5min" ou "4x2min", coloque o peso do sino em "load" (ex.: "24kg" ou "2x24kg") e o pace/detalhes em "observations" (ex.: "12 rpm, respiração 2:1").
Exercícios podem ser combinados em complexos: use o mesmo prefixo em "group" ("A1"/"A2") e "group_type" igual a "superset"; isolados usam "group" vazio e "group_type" "individual".
Responda APENAS com JSON válido, sem markdown, no formato:
{
  "days": [
    { "name": "Sessão 1", "day_label": "Dia 1", "description": "Foco da sessão",
      "exercises": [ { "name": "Long Cycle", "sets_reps": "3x5min", "load": "24kg",
        "rest_seconds": 180, "observations": "10 rpm", "group": "", "group_type": "individual" } ] }
  ],
  "notes": "Observações finais do ciclo"
}
Regras: 3 a 7 exercícios por sessão; sempre inclua aquecimento específico e finalização de mobilidade dentro da sessão; 'load' e 'observations' podem ser vazios.`;
function montarKbSportPrompt(args) {
	const { kb, linha, semanas, diasPorSemana, dataInicio, escopoLabel, resumoAnterior } = args;
	const dias = diasPorSemana && diasPorSemana > 0 ? diasPorSemana : 1;
	const dados = {
		escola_metodologica: linha,
		nivel_atleta: kb.nivelAtleta,
		disciplina: kb.disciplina,
		escopo_geracao: escopoLabel ?? `${semanas}_semanas`,
		dias_por_semana: dias,
		data_inicio: dataInicio,
		cargas_iniciais: {
			peso_corporal_kg: kb.pesoCorporalKg,
			snatch: kb.cargas.snatch ?? void 0,
			jerk: kb.cargas.jerk ?? void 0,
			long_cycle: kb.cargas.longCycle ?? void 0
		}
	};
	return [
		PROMPT_ESCOLA[linha],
		"",
		"Dados do atleta e da geração:",
		JSON.stringify(dados, null, 2),
		"",
		resumoAnterior ? `HISTÓRICO DA PROGRAMAÇÃO ATUAL:\n${resumoAnterior}\n` : null,
		"",
		`Sua tarefa é planejar a CONTINUIDADE e PERIODIZAÇÃO EM BLOCO da programação.`,
		`Analise o HISTÓRICO acima para projetar a sobrecarga progressiva e PERIODIZAÇÃO ONDULATÓRIA.`,
		`OBRIGATÓRIO: Identifique corretamente o "week_number" (1, 2, 3...) para cada sessão gerada.`,
		"",
		`Gere um programa de ${semanas} semana(s), ${dias} sessão(ões)/semana, iniciando em ${dataInicio ?? "data não informada"}, seguindo estritamente a filosofia ${ESCOLA_LABEL[linha]} descrita acima e partindo das cargas informadas (se ausentes, assuma padrão conservador para o nível).`,
		`OBRIGATÓRIO: gere exatamente ${dias} sessão(ões) distinta(s), que formam a semana-modelo a ser repetida/progredida ao longo das ${semanas} semana(s).`,
		"",
		"INSTRUÇÕES DO TREINADOR:",
		args.instrucoes.trim().length > 0 ? args.instrucoes.trim() : "Sem instruções adicionais.",
		"",
		"Responda APENAS em JSON válido no schema de programa."
	].join("\n");
}
var ESCOLA_WL_LABEL = {
	bulgara: "Búlgara",
	russa_classica: "Russa Clássica",
	chinesa: "Chinesa",
	cubana: "Cubana",
	colombiana: "Colombiana",
	pendlay: "Pendlay / MDUSA",
	takano: "Takano"
};
var PROMPT_ESCOLA_WL = {
	bulgara: `LINHA BÚLGARA (Abadjiev): poucos exercícios (arranco, arremesso, agachamento frontal), máximos diários ou quase-diários, múltiplas sessões curtas, intensidade 90-100% quase todos os dias, volume acessório mínimo. EXCLUSIVA para atletas elite com recuperação alta e suporte total; inclua alerta explícito de risco nas observações.`,
	russa_classica: `LINHA RUSSA CLÁSSICA (Medvedev): periodização em blocos com distribuição GPP/SPP, volume alto e variação ampla de exercícios (puxadas, agachamentos, levantamentos parciais, complementares), intensidades médias (70-85%) predominantes e ondulação semanal de volume/intensidade.`,
	chinesa: `LINHA CHINESA: alta frequência com sessões duplas, forte ênfase em correção do ponto fraco identificado via exercícios especiais dirigidos, uso amplo de puxadas, agachamentos e variações de posição, controle de intensidade por RPE/percentual e trabalho de estabilidade articular.`,
	cubana: `LINHA CUBANA: didática para iniciantes/intermediários, muitas séries curtas de baixa repetição (1-3) com carga moderada, ênfase em velocidade de barra e aprendizado técnico, progressão conservadora e ampla base de exercícios preparatórios.`,
	colombiana: `LINHA COLOMBIANA: triagem por nível de classificação — combina fundamentos russos com progressão por degraus de classificação, ajustando volume e densidade conforme a categoria do atleta e a proximidade da competição.`,
	pendlay: `LINHA PENDLAY / MDUSA: ensino técnico direto, frequência adaptada ao atleta, séries de qualidade com carga guiada por sensação diária, forte trabalho de força de base (agachamento e puxadas) junto aos levantamentos completos.`,
	takano: `LINHA TAKANO: framework científico de planejamento — controle de carga por tonelagem e densidade, respeito à recuperação, progressão conservadora, ampla instrução técnica; usada como padrão em perfis ambíguos.`
};
/** Seleção determinística (escola = "auto"). */
function escolherEscolaWl(p) {
	if (p.nivel === "iniciante") return "cubana";
	if (p.pontoFraco) return "chinesa";
	const classe = (p.classificacao ?? "").toLowerCase();
	if ((p.nivel === "elite" || p.nivel === "avancado") && /mestre/.test(classe) && p.recuperacao === "alta" && p.suporteTotal) return "bulgara";
	if (p.nivel === "intermediario") return "russa_classica";
	return "takano";
}
var WL_SYSTEM_PROMPT = `Você é um treinador especialista em LEVANTAMENTO DE PESO OLÍMPICO (Weightlifting) de nível internacional.
Este motor é exclusivo de Weightlifting: prescreva apenas os levantamentos de competição, suas variações e assistências específicas — Arranco (Snatch), Arremesso (Clean & Jerk), variações de bloco/suspensão/potência, puxadas altas, agachamentos (costas/frontal/overhead), pressões acima da cabeça, levantamentos parciais e trabalho de mobilidade/estabilidade.
PROIBIDO prescrever CrossFit/MetCon, kettlebell sport ou exercícios de estética de sala de musculação sem função para o levantamento.
Você NÃO tem acesso a nenhum banco de exercícios: escreva os nomes por extenso, em português.
O volume é definido por SÉRIES x REPETIÇÕES e a intensidade por PERCENTUAL DE 1RM: use "sets_reps" no formato "5x3", coloque a intensidade em "load" (ex.: "80% 1RM" ou "100kg") e detalhes técnicos em "observations".
Exercícios podem ser combinados em complexos: use o mesmo prefixo em "group" ("A1"/"A2") e "group_type" igual a "superset"; isolados usam "group" vazio e "group_type" "individual".
Responda APENAS com JSON válido, sem markdown, no formato:
{
  "days": [
    { "name": "Sessão 1", "day_label": "Dia 1", "description": "Foco da sessão",
      "exercises": [ { "name": "Arranco", "sets_reps": "5x2", "load": "80% 1RM",
        "rest_seconds": 180, "observations": "Foco na recepção", "group": "", "group_type": "individual" } ] }
  ],
  "notes": "Observações finais do ciclo"
}
Regras: 3 a 7 exercícios por sessão; sempre inclua aquecimento específico e finalização de mobilidade dentro da sessão; 'load' e 'observations' podem ser vazios.`;
function montarWlPrompt(args) {
	const { wl, linha, semanas, diasPorSemana, dataInicio, escopoLabel, resumoAnterior } = args;
	const dias = diasPorSemana && diasPorSemana > 0 ? diasPorSemana : 1;
	const dados = {
		escola_metodologica: linha,
		nivel_atleta: wl.nivelAtleta,
		classificacao_oficial: wl.classificacaoOficial,
		ponto_fraco_identificado: wl.pontoFracoIdentificado,
		capacidade_recuperacao: wl.capacidadeRecuperacao,
		suporte_total_declarado: wl.suporteTotalDeclarado,
		escopo_geracao: escopoLabel ?? `${semanas}_semanas`,
		dias_por_semana: dias,
		data_inicio: dataInicio,
		cargas_iniciais: {
			peso_corporal_kg: wl.pesoCorporalKg,
			arranco: wl.cargas.arranco ?? void 0,
			arremesso: wl.cargas.arremesso ?? void 0,
			agachamento_costas: wl.cargas.agachamentoCostas ?? void 0,
			agachamento_frontal: wl.cargas.agachamentoFrontal ?? void 0
		}
	};
	const alertaBulgara = linha === "bulgara" && !(wl.suporteTotalDeclarado && wl.capacidadeRecuperacao === "alta") ? "ATENÇÃO: a linha Búlgara foi escolhida sem as três condições (elite, recuperação alta, suporte total). Reduza a densidade de máximos e registre esse alerta em 'notes'." : null;
	return [
		PROMPT_ESCOLA_WL[linha],
		alertaBulgara,
		"",
		"Dados do atleta e da geração:",
		JSON.stringify(dados, null, 2),
		"",
		resumoAnterior ? `HISTÓRICO DA PROGRAMAÇÃO ATUAL:\n${resumoAnterior}\n` : null,
		"",
		`Sua tarefa é planejar a CONTINUIDADE e PERIODIZAÇÃO EM BLOCO da programação.`,
		`Analise o HISTÓRICO acima para projetar a sobrecarga progressiva e PERIODIZAÇÃO ONDULATÓRIA.`,
		`OBRIGATÓRIO: Identifique corretamente o "week_number" (1, 2, 3...) para cada sessão gerada.`,
		"",
		`Gere um programa de ${semanas} semana(s), ${dias} sessão(ões)/semana, iniciando em ${dataInicio ?? "data não informada"}, seguindo estritamente a filosofia ${ESCOLA_WL_LABEL[linha]} descrita acima e partindo das cargas informadas (se ausentes, assuma padrão conservador para o nível).`,
		`OBRIGATÓRIO: gere exatamente ${dias} sessão(ões) distinta(s), que formam a semana-modelo a ser repetida/progredida ao longo das ${semanas} semana(s).`,
		"",
		"INSTRUÇÕES DO TREINADOR:",
		args.instrucoes.trim().length > 0 ? args.instrucoes.trim() : "Sem instruções adicionais.",
		"",
		"Responda APENAS em JSON válido no schema de programa."
	].filter(Boolean).join("\n");
}
var ESCOLA_TF_LABEL = {
	fms_sfma: "FMS/SFMA (Gray Cook)",
	boyle: "Joint-by-Joint (Michael Boyle)",
	exos: "EXOS / Core Performance",
	dns: "DNS (Escola de Praga)",
	crossfit: "CrossFit",
	original_strength: "Original Strength"
};
var PROMPT_ESCOLA_TF = {
	fms_sfma: `LINHA FMS/SFMA (Gray Cook e Lee Burton) — triagem e corretivo.
- Nunca prescreva progressão de carga em um padrão identificado como disfuncional: corrija o padrão primeiro.
- Com dor ativa (lesão em fase "aguda"), use lógica top-down: module a partir dos padrões que geram dor e recomende avaliação profissional presencial antes de progredir carga — registre isso nas observações finais.
- Sem dor ativa, use lógica bottom-up: corretivos de mobilidade OU estabilidade (nunca os dois no mesmo padrão).
- O objetivo desta linha nunca é gasto calórico ou hipertrofia: é preparar o corpo para treinar outra linha com segurança.
- Ao final, indique explicitamente para qual linha o aluno deve ser encaminhado.`,
	boyle: `LINHA JOINT-BY-JOINT (Michael Boyle) — performance esportiva.
- Tornozelo, quadril, torácica e ombro priorizam mobilidade; joelho, lombar e escápula priorizam estabilidade — mantenha essa alternância em toda a prescrição.
- Priorize exercícios unilaterais (agachamento búlgaro, afundo, RDL unilateral) sobre bilaterais.
- Estruture cada sessão: preparação de movimento → força (dobradiça de quadril, agachamento, empurrar horizontal/vertical, puxar horizontal/vertical, core anti-rotação) → potência/pliometria → condicionamento.
- Progrida por complexidade de padrão antes de progredir carga.`,
	exos: `LINHA EXOS / CORE PERFORMANCE (Mark Verstegen) — sistema integrado.
- Blocos fixos em toda sessão, nunca omita nenhum: preparação de movimento (8-10 min) → ativação (5 min) → força/potência → condicionamento metabólico → regeneração (mobilidade estática/respiração, 5-10 min).
- Inclua recomendações formais e específicas de recuperação (sono, hidratação) coerentes com o volume da semana, nas observações do plano.
- Para iniciantes, reduza a intensidade dentro de cada bloco — jamais remova blocos.
- Esta é a linha padrão/fallback: trate-a como a opção mais equilibrada.`,
	dns: `LINHA DNS (Dynamic Neuromuscular Stabilization, Escola de Praga) — estabilização e retorno.
- Toda sessão começa com estabilização central e respiração diafragmática antes de qualquer padrão carregado.
- Use posições desenvolvimentais (prono em antebraços, quatro apoios, ajoelhado, meio-ajoelhado) como exercícios corretivos formais, progredindo só com controle postural na posição anterior.
- Indicada quando há limitação em lombar, quadril ou instabilidade central: seja ainda mais conservador na carga externa.
- Nunca introduza carga externa significativa antes de confirmar padrão respiratório e estabilização central.
- Havendo dor ativa, recomende avaliação profissional presencial.`,
	crossfit: `LINHA CROSSFIT — condicionamento geral em alta intensidade relativa.
- Combine ao longo da semana levantamento olímpico/powerlifting, ginástica/calistenia e condicionamento metabólico; nunca repita a mesma estrutura de sessão em dias seguidos.
- Escale tudo ao nível declarado: reduza carga, simplifique movimentos complexos e ajuste volume/tempo.
- Pressupõe ausência de lesão ativa; havendo lesão, prescreva de forma conservadora no espírito DNS/FMS e explique nas observações.
- Inclua um benchmark/teste de referência a cada 4 semanas.`,
	original_strength: `LINHA ORIGINAL STRENGTH (Tim Anderson e Geoff Neupert) — reset neuromotor.
- Toda sessão abre com bloco de "reset" de 5-10 min: rolamentos, embalos (rocking) e posições de engatinhar.
- Pode ser programa principal (retorno de afastamento longo, histórico de treino pesado sem base motora) ou módulo complementar de outra linha — declare qual caso se aplica nas observações.
- Priorize qualidade de movimento e controle sobre volume e intensidade.
- Progrida de padrões estáticos (rolar, embalar) para locomotores (engatinhar cruzado, marcha) só com controle demonstrado.`
};
/** Seleção determinística (escola = "auto"). Segurança clínica tem prioridade máxima. */
function escolherEscolaFuncional(p) {
	const aguda = p.lesoes.find((l) => l.fase === "aguda" || l.fase === "em_recuperacao");
	if (aguda) return [
		"lombar",
		"quadril",
		"core"
	].includes(aguda.regiao) ? "dns" : "fms_sfma";
	if (p.lesoes.some((l) => l.fase === "cronica_controlada")) return "fms_sfma";
	if (p.objetivo === "performance_esportiva") return "boyle";
	if (p.objetivo === "condicionamento_geral") return "crossfit";
	if (p.objetivo === "reabilitacao_retorno") return "dns";
	if (p.nivel === "iniciante" && p.sedentarismoProlongado) return "original_strength";
	return "exos";
}
var TF_SYSTEM_PROMPT = `Você é um treinador especialista em TREINAMENTO FUNCIONAL de nível internacional.

Este motor é exclusivo de Treinamento Funcional: prescreva padrões de movimento multiarticulares com transferência real — agachar, empurrar (horizontal/vertical), puxar (horizontal/vertical), dobradiça de quadril, carregar, rotação/anti-rotação, engatinhar/rolar, além de corretivos de mobilidade e estabilidade. Use peso corporal, kettlebell, halteres, bandas ou TRX conforme o equipamento disponível informado.

PROIBIDO prescrever os levantamentos completos de competição de Kettlebell Sport (Snatch, Jerk, Long Cycle) ou de Levantamento de Peso Olímpico (Arranco, Arremesso completos) — pode citar variações leves apenas como acessório, nunca como foco central. PROIBIDO isolamento clássico de musculação em máquina (cadeira extensora, cadeira flexora, peck deck).

Você NÃO tem acesso a nenhum banco de exercícios: escreva os nomes por extenso, em português.

Use "sets_reps" no formato "3x12" ou "3x30s"; coloque carga/nível em "load" (ex.: "peso corporal", "kettlebell 16kg", pode ficar vazio); detalhes técnicos e cautelas em "observations".

Exercícios podem ser combinados em complexos: use o mesmo prefixo em "group" ("A1"/"A2") e "group_type" igual a "superset"; isolados usam "group" vazio e "group_type" "individual".

Responda APENAS com JSON válido, sem markdown, no formato:

{
  "days": [
    { "name": "Sessão 1", "day_label": "Dia 1", "description": "Foco da sessão",
      "exercises": [ { "name": "Agachamento búlgaro", "sets_reps": "3x10 cada lado", "load": "halteres leves",
        "rest_seconds": 60, "observations": "Foco em controle excêntrico", "group": "", "group_type": "individual" } ] }
  ],
  "notes": "Observações finais do ciclo"
}

Regras: 4 a 8 exercícios por sessão; sempre inclua preparação de movimento no início e mobilidade/regeneração ao final da sessão; 'load' e 'observations' podem ser vazios.`;
var OBJETIVO_LABEL = {
	condicionamento_geral: "condicionamento geral",
	performance_esportiva: "performance esportiva",
	reabilitacao_retorno: "reabilitação / retorno ao treino",
	emagrecimento: "emagrecimento",
	hipertrofia_funcional: "hipertrofia funcional"
};
var EQUIPAMENTO_LABEL = {
	peso_corporal: "apenas peso corporal",
	academia_completa: "academia completa",
	kettlebell_halteres: "kettlebells e halteres",
	outdoor: "treino outdoor"
};
function montarFuncionalPrompt(args) {
	const { tf, linha, semanas, diasPorSemana, dataInicio, escopoLabel, resumoAnterior } = args;
	const dias = diasPorSemana && diasPorSemana > 0 ? diasPorSemana : 1;
	const dados = {
		escola_metodologica: linha,
		nivel_atleta: tf.nivelAtleta,
		objetivo: OBJETIVO_LABEL[tf.objetivo],
		equipamento_disponivel: EQUIPAMENTO_LABEL[tf.equipamento],
		sedentarismo_prolongado: tf.sedentarismoProlongado,
		lesoes_limitacoes: tf.lesoes.map((l) => ({
			regiao: l.regiao,
			fase: l.fase,
			observacao_livre: l.observacaoLivre
		})),
		escopo_geracao: escopoLabel ?? `${semanas}_semanas`,
		dias_por_semana: dias,
		data_inicio: dataInicio
	};
	const alertaLesao = tf.lesoes.some((l) => l.fase === "aguda" || l.fase === "em_recuperacao") && (linha === "crossfit" || linha === "boyle") ? "ATENÇÃO: há lesão/limitação ativa ou em recuperação registrada, e esta linha pressupõe ausência de lesões ativas. Reduza significativamente intensidade e complexidade, priorize segurança, e registre esse alerta em 'notes'." : null;
	return [
		PROMPT_ESCOLA_TF[linha],
		alertaLesao,
		"",
		"Dados do aluno e da geração:",
		JSON.stringify(dados, null, 2),
		"",
		resumoAnterior ? `HISTÓRICO DA PROGRAMAÇÃO ATUAL:\n${resumoAnterior}\n` : null,
		"",
		`Sua tarefa é planejar a CONTINUIDADE e PERIODIZAÇÃO EM BLOCO da programação.`,
		`Analise o HISTÓRICO acima para projetar a sobrecarga progressiva e PERIODIZAÇÃO ONDULATÓRIA.`,
		`OBRIGATÓRIO: Identifique corretamente o "week_number" (1, 2, 3...) para cada sessão gerada.`,
		"",
		`Gere um programa de ${semanas} semana(s), ${dias} sessão(ões)/semana, iniciando em ${dataInicio ?? "data não informada"}, seguindo estritamente a filosofia ${ESCOLA_TF_LABEL[linha]} descrita acima.`,
		`OBRIGATÓRIO: gere exatamente ${dias} sessão(ões) distinta(s), que formam a semana-modelo a ser repetida/progredida ao longo das ${semanas} semana(s).`,
		"",
		"INSTRUÇÕES DO TREINADOR:",
		args.instrucoes.trim().length > 0 ? args.instrucoes.trim() : "Sem instruções adicionais.",
		"",
		"Responda APENAS em JSON válido no schema de programa."
	].filter(Boolean).join("\n");
}
var ESCOLA_CO_LABEL = {
	daniels: "Daniels / VDOT",
	lydiard: "Lydiard (base aeróbica)",
	canova: "Canova (extensão do ritmo)",
	hansons: "Hansons (fadiga cumulativa)",
	pfitzinger: "Pfitzinger (limiar + long run)",
	horwill: "Horwill / Multi-Tier (5 ritmos)",
	koop: "Koop (ultramaratona)"
};
var PROMPT_ESCOLA_CO = {
	daniels: `LINHA DANIELS / VDOT (Jack Daniels) — ritmo certo para o propósito certo.
- Se uma marca recente de prova foi informada, estime o VDOT do atleta de forma consistente com as tabelas de Daniels e declare-o nas observações finais.
- A partir do VDOT, derive os cinco ritmos: Easy (65-78% VO2max), Marathon (80-84%), Threshold (88-92%), Interval (95-100%) e Repetition (acima de 100%) — use esses ritmos, e apenas esses, para toda prescrição de intensidade.
- A maior parte da quilometragem semanal deve ser em ritmo Easy; sessões de Threshold, Interval ou Repetition entram conforme a fase do ciclo e a distância-alvo.
- Recomende recalcular o VDOT a cada 4-6 semanas ou após uma prova de referência.
- Estruture o ciclo em fases: base, desenvolvimento de velocidade e preparação específica de prova.`,
	lydiard: `LINHA LYDIARD (Arthur Lydiard) — a base aeróbica antes de tudo.
- Nunca introduza trabalho anaeróbico (velocidade máxima, intervalado intenso) antes de confirmar base aeróbica consolidada: priorize corrida contínua em "steady state" (repetível no dia seguinte).
- Estruture o ciclo em fases sequenciais e não sobrepostas: base aeróbica → colinas (força específica) → anaeróbico → afinamento → polimento (tapering). Nunca pule uma fase.
- Esta é a linha indicada como fase 1 para volume semanal baixo, nível iniciante ou retorno de lesão/afastamento, independentemente da distância-alvo — declare isso nas observações e indique a linha de destino após a base consolidada.
- Priorize volume sobre intensidade durante toda a fase de base.`,
	canova: `LINHA CANOVA (Renato Canova) — extensão da capacidade no ritmo de prova, 21k/42k avançado/elite.
- Trate a prova como questão de "extensão": aumente progressivamente o volume sustentado no ritmo-alvo, não apenas quilometragem genérica.
- Progrida de "velocidades especiais" (90-110% do ritmo-alvo) para trabalho específico (95-105% do ritmo-alvo).
- A cada 3-4 semanas inclua um "bloco especial/específico": um dia com dois treinos (manhã e tarde) de maior exigência, seguido de recuperação proporcionalmente maior. Nunca encadeie blocos sem essa recuperação.
- Exclusiva para avançado/elite com base aeróbica consolidada. Se o perfil não atender, prescreva na linha Pfitzinger e explique o motivo nas observações.
- Inclua trabalho de oxidação aeróbica de lactato (ex.: 1km a ~105% do ritmo-alvo alternado com 1km levemente mais lento) como ferramenta regular.`,
	hansons: `LINHA HANSONS MARATHON METHOD — fadiga cumulativa, 21k/42k.
- Limite o long run a ~26km, independentemente do volume semanal — o efeito vem da fadiga acumulada dos dias anteriores.
- Frequência de 6 dias de treino por semana é não-negociável: ritmo de prova-alvo nos dias que antecedem o long run e corridas fáceis/moderadas nos dias intermediários, para que o long run ocorra sobre pernas fatigadas.
- Havendo histórico de lesão ao correr diariamente ou ao iniciar velocidade rapidamente, não use esta linha: prescreva em Pfitzinger ou Lydiard e explique nas observações.
- Corridas de threshold devem ser desafiadoras mas controladas (falar em frases curtas).`,
	pfitzinger: `LINHA PFITZINGER (Pete Pfitzinger) — limiar como motor da maratona.
- Estruture a semana em torno de duas sessões-chave: uma corrida de limiar (tempo run) e um long run tradicional, que pode chegar a 32-37km nas semanas de pico.
- Reduza levemente o volume nos dias que antecedem o long run e prescreva dia fácil ou descanso no dia seguinte.
- Linha padrão/fallback para intermediários de 21k/42k fora dos critérios de Canova e sem preferência pelo modelo Hansons.
- Progrida o volume gradualmente com semanas de redução de carga (cutback) a cada 3-4 semanas.`,
	horwill: `LINHA HORWILL / MULTI-TIER (Frank Horwill) — cinco ritmos, 5k/10k e meio-fundo.
- Nunca limite o trabalho a 2-3 ritmos: distribua o treino em cinco ritmos cobrindo de uma distância mais curta que a prova-alvo até uma mais longa.
- Use a "regra dos 4 segundos" por 400m para derivar ritmos entre distâncias adjacentes de forma consistente.
- Cada sessão de qualidade deve ter um ritmo-alvo declarado e um propósito fisiológico explícito.
- Exige base aeróbica prévia: para atletas sem base, indique a linha Lydiard antes.`,
	koop: `LINHA KOOP (Jason Koop) — ultramaratona.
- Ultramaratona não é "uma maratona mais longa": nunca prescreva apenas acúmulo linear de quilometragem.
- Estruture o macrociclo em dois blocos sequenciais: condicionamento/fitness geral primeiro, depois especificidade de prova (terreno, duração, ritmo de ultra).
- Inclua trabalho intervalado direcionado mesmo nesta modalidade, para focar adaptações e reduzir lesão por volume repetitivo.
- Inclua, como parte formal do plano, estratégia de nutrição e hidratação nos treinos longos, simulando a prova.
- Adapte ao terreno da prova-alvo quando informado (trilha técnica, estrada, montanha).`
};
/** Seleção determinística (escola = "auto"). Segurança e base aeróbica têm prioridade. */
function escolherEscolaCorrida(p) {
	if (p.lesoes.some((l) => l.fase === "aguda" || l.fase === "em_recuperacao")) return "lydiard";
	if (p.nivel === "iniciante" || p.volumeSemanalKm !== null && p.volumeSemanalKm < 20) return "lydiard";
	if (p.distanciaAlvo === "ultramaratona") return "koop";
	if (p.distanciaAlvo === "5k" || p.distanciaAlvo === "10k") return p.nivel === "avancado" || p.nivel === "elite" ? "horwill" : "daniels";
	if (p.distanciaAlvo === "21k" || p.distanciaAlvo === "42k") {
		if (p.nivel === "avancado" || p.nivel === "elite") return "canova";
		if (p.preferenciaAltaFrequencia) return "hansons";
		return "pfitzinger";
	}
	return "daniels";
}
var CO_SYSTEM_PROMPT = `Você é um treinador especialista em CORRIDA (rua, 5k, 10k, 21k, 42k e ultramaratona), atuando dentro de uma linha metodológica específica informada no pedido.
Este motor é exclusivo de corrida: prescreva sessões de corrida (rodagens fáceis, longões, limiar, intervalados, colinas, ritmo de prova, regenerativos) e, quando pertinente, trabalho complementar de força/mobilidade preventiva para corredores.
SEGURANÇA TEM PRIORIDADE MÁXIMA: corrida é a modalidade com maior incidência de lesão por overuse — respeite integralmente as lesões e limitações informadas, reduza volume quando houver fase aguda ou em recuperação e registre alertas explícitos nas observações.
Respeite o volume semanal atual informado: nunca aumente mais de ~10% por semana.
Você NÃO tem acesso a nenhum banco de exercícios: escreva os nomes das sessões e trechos por extenso, em português.
Sequências dentro da mesma sessão (ex.: aquecimento → série principal → volta à calma) usam "group" vazio e "group_type" "individual"; blocos alternados/repetidos podem usar o mesmo prefixo em "group" ("A1"/"A2") com "group_type" igual a "superset".
Responda APENAS com JSON válido, sem markdown, no formato:
{
  "days": [
    { "name": "Sessão 1", "day_label": "Dia 1", "description": "Foco da sessão",
      "exercises": [ { "name": "Rodagem em ritmo Easy", "sets_reps": "8 km contínuos", "load": "ritmo 6:10/km",
        "rest_seconds": 0, "observations": "Conversar em frases completas", "group": "", "group_type": "individual" } ] }
  ],
  "notes": "Observações finais, progressão de volume, reavaliação e alertas"
}
Regras: 3 a 7 itens por sessão, cobrindo aquecimento, parte principal e volta à calma; use 'sets_reps' para distância/tempo/séries e 'load' para o ritmo-alvo; campos podem ser vazios quando não se aplicarem.`;
var DISTANCIA_LABEL = {
	corrida_rua: "corrida de rua / condicionamento geral",
	"5k": "5 km",
	"10k": "10 km",
	"21k": "meia maratona (21 km)",
	"42k": "maratona (42 km)",
	ultramaratona: "ultramaratona"
};
var TERRENO_LABEL = {
	estrada: "estrada / asfalto",
	trilha: "trilha",
	montanha: "montanha",
	pista: "pista de atletismo"
};
function montarCorridaPrompt(args) {
	const { co, linha, semanas, diasPorSemana, dataInicio, escopoLabel, resumoAnterior } = args;
	const dias = diasPorSemana && diasPorSemana > 0 ? diasPorSemana : 1;
	const dados = {
		linha_metodologica: linha,
		nivel_atleta: co.nivelAtleta,
		distancia_alvo: DISTANCIA_LABEL[co.distanciaAlvo],
		volume_semanal_atual_km: co.volumeSemanalKm,
		frequencia_semanal_atual: co.frequenciaSemanalAtual,
		marca_recente: co.marcaRecenteDistancia && co.marcaRecenteTempo ? {
			distancia: DISTANCIA_LABEL[co.marcaRecenteDistancia],
			tempo: co.marcaRecenteTempo
		} : null,
		data_prova_alvo: co.dataProvaAlvo,
		terreno: co.terreno ? TERRENO_LABEL[co.terreno] : null,
		preferencia_alta_frequencia: co.preferenciaAltaFrequencia,
		lesoes_limitacoes: co.lesoes.map((l) => ({
			regiao: l.regiao,
			fase: l.fase,
			observacao_livre: l.observacaoLivre
		})),
		escopo_geracao: escopoLabel ?? `${semanas}_semanas`,
		dias_por_semana: dias,
		data_inicio: dataInicio
	};
	return [
		`LINHA METODOLÓGICA APLICADA: ${ESCOLA_CO_LABEL[linha]}`,
		PROMPT_ESCOLA_CO[linha],
		"",
		"DADOS DO ATLETA (JSON):",
		JSON.stringify(dados, null, 2),
		"",
		resumoAnterior ? `HISTÓRICO DA PROGRAMAÇÃO ATUAL:\n${resumoAnterior}\n` : null,
		"",
		`Sua tarefa é planejar a CONTINUIDADE e PERIODIZAÇÃO EM BLOCO da programação.`,
		`Analise o HISTÓRICO acima para projetar a sobrecarga progressiva e PERIODIZAÇÃO ONDULATÓRIA.`,
		`OBRIGATÓRIO: Identifique corretamente o "week_number" (1, 2, 3...) para cada sessão gerada.`,
		"",
		`OBRIGATÓRIO: gere exatamente ${dias} sessão(ões) distintas, formando a semana-padrão a ser repetida/progredida ao longo das ${semanas} semana(s).`,
		co.marcaRecenteDistancia && co.marcaRecenteTempo ? "OBRIGATÓRIO: derive os ritmos-alvo a partir da marca recente informada e declare-os em 'load'." : "OBRIGATÓRIO: sem marca recente, prescreva ritmos por percepção de esforço e explique como calibrar.",
		co.lesoes.length > 0 ? "OBRIGATÓRIO: adapte volume e impacto às lesões/limitações listadas e explique a adaptação nas observações." : null,
		"",
		"INSTRUÇÕES DO TREINADOR:",
		args.instrucoes.trim().length > 0 ? args.instrucoes.trim() : "Sem instruções adicionais: siga estritamente a filosofia da linha metodológica acima."
	].filter(Boolean).join("\n");
}
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
var prescribeTrainingWithAi_createServerFn_handler = createServerRpc({
	id: "e3ea1bf471664cc4a40358e0c339c9751fc02e4381934324365f8c93b5351070",
	name: "prescribeTrainingWithAi",
	filename: "src/lib/prescricao-ia.functions.ts"
}, (opts) => prescribeTrainingWithAi.__executeServer(opts));
var prescribeTrainingWithAi = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => {
	try {
		return INPUT.parse(input);
	} catch (e) {
		console.error("[prescribeTrainingWithAi] Validation Error:", e);
		throw e;
	}
}).handler(prescribeTrainingWithAi_createServerFn_handler, async ({ data, context }) => {
	const supabase = context.supabase;
	const { data: programa, error } = await supabase.from("programs").select("id, titulo, metodologia, descricao, data_inicio, duracao_semanas, program_weeks(id, numero_semana)").eq("id", data.programId).maybeSingle();
	if (error) throw new Error(error.message);
	if (!programa) throw new Error("Programa não encontrado ou sem permissão de acesso");
	const metodologiaEfetiva = data.metodologiaOverride || programa.metodologia;
	const isKbSport = metodologiaEfetiva === "kettlebell_sport";
	const isWl = metodologiaEfetiva === "levantamento_peso";
	const isTf = metodologiaEfetiva === "treinamento_funcional";
	const isCo = metodologiaEfetiva === "corrida";
	const isHibrido = metodologiaEfetiva === "hibrido" || metodologiaEfetiva === "kettlebell_fitness";
	if (metodologiaEfetiva !== "musculacao" && !isHibrido && !isKbSport && !isWl && !isTf && !isCo) throw new Error("Prescrever com IA está disponível apenas para Musculação, Híbrido, Kettlebell Fitness, Kettlebell Sport, Levantamento de Peso, Treinamento Funcional e Corrida");
	if (isKbSport && !data.kb) throw new Error("Configuração do Kettlebell Sport ausente");
	if (isWl && !data.wl) throw new Error("Configuração do Levantamento de Peso ausente");
	if (isTf && !data.tf) data.tf = {
		escolaMetodologica: "auto",
		nivelAtleta: "intermediario",
		objetivo: "condicionamento_geral",
		equipamento: "academia_completa",
		sedentarismoProlongado: false,
		lesoes: []
	};
	if (isCo && !data.co) throw new Error("Configuração da Corrida ausente");
	if (isHibrido && !data.hibrido) throw new Error("Configuração do motor Híbrido/KB Fitness ausente (hibrido payload)");
	if (isHibrido && data.hibrido && (!data.hibrido.sessaoTemplate || data.hibrido.sessaoTemplate.length === 0)) console.log("Aviso: Híbrido sem sessaoTemplate. Tentando recuperar do histórico...");
	const titulos = (programa.program_weeks ?? []).flatMap((w) => (w.sessions ?? []).map((s) => s.titulo ?? null));
	const nHistorico = data.historicoSessoes ?? 6;
	const cooldown = data.cooldownSessoes ?? 3;
	const { buildContinuationContext } = await import("./continuation.server-COvPEVE9.mjs");
	const continuation = await buildContinuationContext(supabase, data.programId, nHistorico, cooldown);
	let targetStudentId = data.studentId;
	if (!targetStudentId) {
		const { data: asg } = await supabase.from("assignments").select("student_id").eq("program_id", data.programId).limit(1).maybeSingle();
		if (asg?.student_id) targetStudentId = asg.student_id;
	}
	let memoriaAtletaPrompt = null;
	if (targetStudentId) {
		const { data: student } = await supabase.from("students").select("id, nome, observacoes").eq("id", targetStudentId).maybeSingle();
		if (student?.observacoes?.trim()) {
			const parsedMemory = parseAthleteMemory(student.observacoes);
			memoriaAtletaPrompt = formatMemoryForPrompt(student.nome, parsedMemory);
		}
	}
	const alunoInfoCombinado = [memoriaAtletaPrompt, programa.descricao ? `Objetivos declarados no programa: ${programa.descricao}` : null].filter(Boolean).join("\n\n") || null;
	const ctx = {
		titulo: programa.titulo ?? "Programa",
		metodologia: metodologiaEfetiva,
		duracao_semanas: data.semanasNovas,
		data_inicio: programa.data_inicio ?? null,
		data_fim: calcularDataFim(programa.data_inicio ?? null, data.semanasNovas),
		nomenclatura: "numerico",
		sessoes_existentes: titulos.length,
		objetivos: programa.descricao ?? null,
		dias_por_semana: data.diasPorSemana ?? null,
		escopo_label: data.escopoLabel ?? `${data.semanasNovas} semana(s)`,
		continuation,
		aluno_info: alunoInfoCombinado
	};
	const instrucoesCompletas = [data.prompt, memoriaAtletaPrompt].filter(Boolean).join("\n\n");
	const resumoAnterior = ctx.continuation ? `CONTEXTO RECENTE: Analisadas ${ctx.continuation.sourceSessionCount} sessões. IDs evitáveis: ${ctx.continuation.softAvoidIds.join(", ")}. Exercícios anteriores: ${ctx.continuation.recentSessions.flatMap((s) => s.exerciseNames).slice(-10).join(", ")}` : null;
	if (!process.env.LOVABLE_API_KEY) throw new Error("Serviço de IA indisponível no momento");
	const kb = data.kb ?? null;
	const linha = kb ? data.escolaOverride || (kb.escolaMetodologica === "auto" ? escolherEscola(kb.nivelAtleta, kb.disciplina) : kb.escolaMetodologica) : metodologiaEfetiva === "kettlebell_sport" ? data.escolaOverride || "gomonov" : null;
	const wl = data.wl ?? null;
	const linhaWl = wl ? data.escolaOverride || (wl.escolaMetodologica === "auto" ? escolherEscolaWl({
		nivel: wl.nivelAtleta,
		pontoFraco: wl.pontoFracoIdentificado,
		classificacao: wl.classificacaoOficial,
		recuperacao: wl.capacidadeRecuperacao,
		suporteTotal: wl.suporteTotalDeclarado
	}) : wl.escolaMetodologica) : metodologiaEfetiva === "levantamento_peso" ? data.escolaOverride || "takano" : null;
	const tf = data.tf ?? null;
	const linhaTf = tf ? data.escolaOverride || (tf.escolaMetodologica === "auto" ? escolherEscolaFuncional({
		lesoes: tf.lesoes,
		objetivo: tf.objetivo,
		nivel: tf.nivelAtleta,
		sedentarismoProlongado: tf.sedentarismoProlongado
	}) : tf.escolaMetodologica) : metodologiaEfetiva === "treinamento_funcional" ? data.escolaOverride || "exos" : null;
	const co = data.co ?? null;
	const linhaCo = co ? data.escolaOverride || (co.escolaMetodologica === "auto" ? escolherEscolaCorrida({
		lesoes: co.lesoes,
		nivel: co.nivelAtleta,
		distanciaAlvo: co.distanciaAlvo,
		volumeSemanalKm: co.volumeSemanalKm,
		preferenciaAltaFrequencia: co.preferenciaAltaFrequencia
	}) : co.escolaMetodologica) : metodologiaEfetiva === "corrida" ? data.escolaOverride || "daniels" : null;
	const systemPrompt = isKbSport ? KB_SPORT_SYSTEM_PROMPT : isWl ? WL_SYSTEM_PROMPT : isTf ? TF_SYSTEM_PROMPT : isCo ? CO_SYSTEM_PROMPT : SYSTEM_PROMPT;
	const userPrompt = isCo && co && linhaCo ? montarCorridaPrompt({
		co,
		linha: linhaCo,
		semanas: ctx.duracao_semanas,
		diasPorSemana: ctx.dias_por_semana,
		dataInicio: ctx.data_inicio,
		escopoLabel: ctx.escopo_label,
		instrucoes: instrucoesCompletas,
		resumoAnterior
	}) : isTf && tf && linhaTf ? montarFuncionalPrompt({
		tf,
		linha: linhaTf,
		semanas: ctx.duracao_semanas,
		diasPorSemana: ctx.dias_por_semana,
		dataInicio: ctx.data_inicio,
		escopoLabel: ctx.escopo_label,
		instrucoes: instrucoesCompletas,
		resumoAnterior
	}) : isWl && wl && linhaWl ? montarWlPrompt({
		wl,
		linha: linhaWl,
		semanas: ctx.duracao_semanas,
		diasPorSemana: ctx.dias_por_semana,
		dataInicio: ctx.data_inicio,
		escopoLabel: ctx.escopo_label,
		instrucoes: instrucoesCompletas,
		resumoAnterior
	}) : isKbSport && kb && linha ? montarKbSportPrompt({
		kb,
		linha,
		semanas: ctx.duracao_semanas,
		diasPorSemana: ctx.dias_por_semana,
		dataInicio: ctx.data_inicio,
		escopoLabel: ctx.escopo_label,
		instrucoes: instrucoesCompletas,
		resumoAnterior
	}) : isHibrido ? await (async () => {
		let template = data.hibrido.sessaoTemplate;
		const methodologyForQuery = metodologiaEfetiva === "kettlebell_fitness" ? "kettlebell_fitness" : "hibrido";
		if (!template || !Array.isArray(template) || template.length === 0) {
			console.log(`[prescribeTrainingWithAi] Híbrido sem sessaoTemplate. Buscando prefs para ${methodologyForQuery}...`);
			const { data: coach } = await supabase.from("coaches").select("id").maybeSingle();
			if (coach) {
				const { data: pref } = await supabase.from("generator_preferences").select("blocos").eq("coach_id", coach.id).eq("metodologia", methodologyForQuery).maybeSingle();
				if (pref?.blocos && Array.isArray(pref.blocos) && pref.blocos.length > 0) {
					console.log("[prescribeTrainingWithAi] Usando blocos das configurações persistidas.");
					template = pref.blocos.map((b, idx) => ({
						chave: b.chave || `bloco_${idx + 1}`,
						formato: b.formato,
						titulo: b.titulo,
						selecaoExercicios: b.selecaoExercicios || "ia",
						numeroExercicios: b.num_exercicios || 3,
						fonteExercicios: b.fonteExercicios || { metodologias: [metodologiaEfetiva] }
					}));
				}
			}
		}
		if (!template || !Array.isArray(template) || template.length === 0) {
			console.log("[prescribeTrainingWithAi] Fallback: Usando histórico da última sessão...");
			template = (continuation.lastSessionStructure ?? []).map((b) => ({
				chave: b.chave,
				formato: b.formato,
				titulo: b.titulo,
				selecaoExercicios: "ia",
				numeroExercicios: b.numeroExercicios || 1,
				fonteExercicios: b.fonteExercicios || { metodologias: [metodologiaEfetiva] }
			}));
		}
		if (!template || template.length === 0) {
			console.error("[prescribeTrainingWithAi] Falha Crítica: Nenhum molde disponível.");
			throw new Error("Não foi possível identificar o molde da sessão anterior para continuar a progressão. Configure o molde manualmente ou verifique se a rotina já possui treinos cadastrados.");
		}
		return montarHibridoPrompt({
			payload: {
				...data.hibrido,
				sessaoTemplate: template
			},
			candidatos: await buscarCandidatosDoMolde(supabase, template),
			instrucoes: instrucoesCompletas,
			resumoAnterior,
			continuation,
			setTypeRegistry: data.setTypes || BUILTIN_SET_TYPES,
			customFormats: data.formatRegistry || []
		});
	})() : montarUserPrompt({
		...ctx,
		set_types: data.setTypes || BUILTIN_SET_TYPES
	}, data.prompt);
	const { callLovableAiJson, AiGatewayError, resolveAiModel } = await import("./ai-gateway.server-DP7dTmSZ.mjs");
	const modelToUse = resolveAiModel();
	const requestId = Math.random().toString(36).substring(7);
	console.log(`[AI_REQUEST][${requestId}] Iniciando geração:`, {
		programId: data.programId,
		metodologia: metodologiaEfetiva,
		semanas: data.semanasNovas,
		model: modelToUse,
		promptChars: systemPrompt.length + userPrompt.length
	});
	let conteudo;
	try {
		conteudo = (await callLovableAiJson({
			scope: "prescricao-ia",
			system: systemPrompt,
			prompt: userPrompt
		})).raw;
	} catch (err) {
		if (err instanceof AiGatewayError) {
			console.error(`[AI_ERROR][${requestId}] ${err.code} (${err.status})`);
			throw new Error(`${err.code}: ${err.message}`);
		}
		throw err;
	}
	try {
		if (isHibrido) {
			const templateFinal = data.hibrido.sessaoTemplate?.length > 0 ? data.hibrido.sessaoTemplate : continuation.lastSessionStructure ? continuation.lastSessionStructure.map((b) => ({
				chave: b.chave,
				formato: b.formato,
				titulo: b.titulo,
				selecaoExercicios: "ia",
				numeroExercicios: b.numeroExercicios,
				fonteExercicios: b.fonteExercicios
			})) : [];
			if (!templateFinal || templateFinal.length === 0) throw new Error("AI_NO_TEMPLATE: O molde da sessão está vazio ou inválido.");
			return {
				...normalizarPrescricaoHibrido(conteudo, templateFinal, await buscarCandidatosDoMolde(supabase, templateFinal)),
				generation_source: "ai"
			};
		}
		return {
			...normalizarPrescricao(conteudo),
			generation_source: "ai"
		};
	} catch (parseErr) {
		console.error(`[AI_PARSE_ERROR][${requestId}] Falha ao processar resposta:`, parseErr);
		if (parseErr.message.includes("AI_") || parseErr.message.includes("POOL_VAZIO")) throw parseErr;
		throw new Error(`AI_SCHEMA_MISMATCH: A resposta da IA não pôde ser validada contra o molde. Erro: ${parseErr.message}`);
	}
});
//#endregion
export { prescribeTrainingWithAi_createServerFn_handler };
