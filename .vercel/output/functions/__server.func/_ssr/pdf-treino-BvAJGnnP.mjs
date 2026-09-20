import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BxRH54s6.mjs";
import { r as METHODOLOGY_LABEL } from "./methodology-DF-HMT6m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pdf-treino-BvAJGnnP.js
async function exportarSemanaPDF(semana, branding) {
	const [{ default: jsPDF }, { default: autoTable }] = await Promise.all([import("../_libs/jspdf.mjs").then((n) => /* @__PURE__ */ __toESM(n.t())), import("../_libs/jspdf-autotable.mjs").then((n) => n.t)]);
	const doc = new jsPDF({
		unit: "mm",
		format: "a4"
	});
	const pageWidth = doc.internal.pageSize.getWidth();
	const margin = 14;
	let cursorY = 0;
	doc.setFillColor(branding.corPrimaria);
	doc.rect(0, 0, pageWidth, 24, "F");
	if (branding.logoUrl) try {
		const logoData = await carregarImagemBase64(branding.logoUrl);
		doc.addImage(logoData, "PNG", margin, 4, 16, 16);
	} catch {}
	doc.setTextColor("#FFFFFF");
	doc.setFontSize(16);
	doc.text(semana.titulo, margin + (branding.logoUrl ? 20 : 0), 12);
	doc.setFontSize(9);
	doc.text(semana.subtitulo, margin + (branding.logoUrl ? 20 : 0), 18);
	cursorY = 32;
	doc.setTextColor("#000000");
	for (const sessao of semana.sessoes) {
		doc.setFontSize(12);
		doc.setTextColor(branding.corPrimaria);
		doc.text(sessao.titulo, margin, cursorY);
		cursorY += 4;
		const rows = sessao.blocos.map((b) => [b.titulo, b.conteudo]);
		autoTable(doc, {
			startY: cursorY,
			head: [["Bloco", "Conteúdo"]],
			body: rows,
			theme: "grid",
			styles: {
				fontSize: 8.5,
				cellPadding: 2,
				valign: "top"
			},
			headStyles: {
				fillColor: branding.corPrimaria,
				textColor: "#FFFFFF"
			},
			columnStyles: {
				0: {
					cellWidth: 35,
					fontStyle: "bold"
				},
				1: { cellWidth: "auto" }
			},
			margin: {
				left: margin,
				right: margin
			}
		});
		cursorY = doc.lastAutoTable.finalY + 8;
		if (cursorY > 260) {
			doc.addPage();
			cursorY = 20;
		}
	}
	if (branding.rodape) {
		const pageCount = doc.getNumberOfPages();
		for (let i = 1; i <= pageCount; i++) {
			doc.setPage(i);
			doc.setFontSize(8);
			doc.setTextColor("#888888");
			doc.text(branding.rodape, margin, 290);
		}
	}
	doc.save(`${slugify(semana.titulo)}.pdf`);
}
async function exportarSemanaExcel(semana, branding) {
	const XLSX = await import("../_libs/xlsx.mjs").then((n) => n.t);
	const wb = XLSX.utils.book_new();
	const aoa = [
		[semana.titulo],
		[semana.subtitulo],
		[],
		[
			"Dia",
			"Bloco",
			"Conteúdo"
		]
	];
	for (const sessao of semana.sessoes) sessao.blocos.forEach((b, i) => {
		aoa.push([
			i === 0 ? sessao.titulo : "",
			b.titulo,
			b.conteudo
		]);
	});
	const ws = XLSX.utils.aoa_to_sheet(aoa);
	ws["!cols"] = [
		{ wch: 18 },
		{ wch: 24 },
		{ wch: 70 }
	];
	ws["!merges"] = [{
		s: {
			r: 0,
			c: 0
		},
		e: {
			r: 0,
			c: 2
		}
	}, {
		s: {
			r: 1,
			c: 0
		},
		e: {
			r: 1,
			c: 2
		}
	}];
	XLSX.utils.book_append_sheet(wb, ws, "Semana");
	XLSX.writeFile(wb, `${slugify(semana.titulo)}.xlsx`);
}
async function carregarImagemBase64(url) {
	const blob = await (await fetch(url)).blob();
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onloadend = () => resolve(reader.result);
		reader.onerror = reject;
		reader.readAsDataURL(blob);
	});
}
function slugify(s) {
	return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
async function fetchCoachBranding() {
	const { data } = await supabase.from("coaches").select("nome, logo_url, cor_primaria, cor_secundaria, rodape_export").maybeSingle();
	return {
		nome: data?.nome ?? "Coach",
		logoUrl: data?.logo_url ?? void 0,
		corPrimaria: data?.cor_primaria ?? "#F26B1F",
		corSecundaria: data?.cor_secundaria ?? "#0F1115",
		rodape: data?.rodape_export ?? void 0
	};
}
function formatarExercicio(e) {
	const nome = e.exercises?.nome_pt ?? e.nome_livre ?? "Exercício";
	const lado = e.lado ? ` (${e.lado === "direito" ? "D" : e.lado === "esquerdo" ? "E" : e.lado})` : "";
	const partes = [];
	if (e.pct_1rm != null) partes.push(`${e.pct_1rm}%`);
	if (e.series != null && e.reps != null) partes.push(`${e.series}x${e.reps}`);
	else if (e.reps != null) partes.push(String(e.reps));
	else if (e.series != null) partes.push(`${e.series} séries`);
	const prefix = partes.join(" ");
	return `${prefix ? prefix + " " : ""}${nome}${lado}`.trim();
}
async function loadSessaoExport(sessionId) {
	const { data: session, error: se } = await supabase.from("sessions").select("id, titulo, numero_dia, data, program_week_id, program_weeks(numero_semana, programs(titulo))").eq("id", sessionId).single();
	if (se || !session) throw new Error(se?.message ?? "Sessão não encontrada");
	const { data: blocks } = await supabase.from("session_blocks").select("id, ordem, titulo, formato, duracao_min, session_block_exercises(ordem, reps, series, pct_1rm, lado, nome_livre, exercises(nome_pt))").eq("session_id", sessionId).order("ordem");
	const sessao = {
		titulo: session.titulo ?? `Dia ${session.numero_dia}`,
		blocos: (blocks ?? []).map((b) => {
			const linhas = (b.session_block_exercises ?? []).sort((a, z) => a.ordem - z.ordem).map(formatarExercicio);
			return {
				titulo: b.titulo ?? b.formato,
				conteudo: linhas.join("\n")
			};
		})
	};
	const programa = session.program_weeks?.programs?.titulo ?? "Programa";
	const semanaN = session.program_weeks?.numero_semana;
	return { semana: {
		titulo: programa,
		subtitulo: [semanaN ? `Semana ${semanaN}` : null, session.data ? (/* @__PURE__ */ new Date(session.data + "T00:00:00")).toLocaleDateString("pt-BR") : null].filter(Boolean).join(" · "),
		sessoes: [sessao]
	} };
}
async function exportarSessaoPDF(sessionId) {
	const [{ semana }, branding] = await Promise.all([loadSessaoExport(sessionId), fetchCoachBranding()]);
	await exportarSemanaPDF(semana, branding);
}
async function exportarSessaoExcel(sessionId) {
	const [{ semana }, branding] = await Promise.all([loadSessaoExport(sessionId), fetchCoachBranding()]);
	await exportarSemanaExcel(semana, branding);
}
function fmtData(d) {
	if (!d) return null;
	const dt = /* @__PURE__ */ new Date(String(d).slice(0, 10) + "T00:00:00");
	return Number.isNaN(dt.getTime()) ? null : dt.toLocaleDateString("pt-BR");
}
function seriesReps(e) {
	const reps = e.reps != null && String(e.reps).trim() !== "" ? String(e.reps).trim() : null;
	if (e.series != null && reps) return `${e.series}x${reps}`;
	if (reps) return reps;
	if (e.series != null) return `${e.series} séries`;
	return "—";
}
function nomeExercicio(e) {
	return `${e.exercises?.nome_pt ?? e.nome_livre ?? "Exercício"}${e.lado ? ` (${e.lado === "direito" ? "D" : e.lado === "esquerdo" ? "E" : e.lado})` : ""}`;
}
/** Monta o conteúdo do PDF a partir das sessões selecionadas. */
async function prepararTreinoPdf(sessionIds) {
	const { data: sessions, error } = await supabase.from("sessions").select("id, titulo, numero_dia, data, program_weeks(numero_semana, programs(id, titulo, descricao, metodologia, data_inicio, duracao_semanas))").in("id", sessionIds);
	if (error) throw new Error(error.message);
	const lista = sessions ?? [];
	if (lista.length === 0) throw new Error("Nenhuma sessão encontrada");
	const ordenadas = [...lista].sort((a, b) => {
		return (a.program_weeks?.numero_semana ?? 0) - (b.program_weeks?.numero_semana ?? 0) || (a.numero_dia ?? 0) - (b.numero_dia ?? 0);
	});
	const { data: blocks } = await supabase.from("session_blocks").select("id, session_id, ordem, titulo, formato, session_block_exercises(ordem, reps, series, carga_kg, pct_1rm, descanso_seg, observacoes, lado, nome_livre, exercises(*, exercise_media(*)))").in("session_id", ordenadas.map((s) => s.id)).order("ordem");
	const programa = ordenadas[0].program_weeks?.programs;
	const branding = await fetchCoachBranding();
	let aluno;
	if (programa?.id) {
		const { data: asg } = await supabase.from("assignments").select("students(nome)").eq("program_id", programa.id).limit(1);
		aluno = (asg?.[0])?.students?.nome ?? void 0;
	}
	const sessoes = ordenadas.map((s) => {
		const bl = (blocks ?? []).filter((b) => b.session_id === s.id).sort((a, z) => (a.ordem ?? 0) - (z.ordem ?? 0));
		const linhas = [];
		for (const b of bl) {
			const exs = (b.session_block_exercises ?? []).sort((a, z) => (a.ordem ?? 0) - (z.ordem ?? 0));
			if (exs.length > 0) linhas.push({
				nome: b.titulo || "Bloco",
				seriesReps: "",
				carga: "",
				descanso: "",
				observacoes: "BLOCO_HEADER"
			});
			for (const e of exs) linhas.push({
				nome: nomeExercicio(e),
				seriesReps: seriesReps(e),
				carga: e.carga_kg != null ? `${e.carga_kg} kg` : e.pct_1rm != null ? `${e.pct_1rm}% 1RM` : "",
				descanso: e.descanso_seg != null ? `${e.descanso_seg}s` : "",
				observacoes: e.observacoes ?? ""
			});
		}
		const semana = s.program_weeks?.numero_semana;
		return {
			titulo: `${s.titulo ?? `Treino ${s.numero_dia}`} • Dia ${s.numero_dia}`,
			subtitulo: [
				semana ? `Semana ${semana}` : null,
				fmtData(s.data),
				bl.map((b) => b.titulo).filter(Boolean).join(" · ") || null
			].filter(Boolean).join(" · "),
			linhas
		};
	});
	const periodo = [fmtData(programa?.data_inicio), programa?.duracao_semanas ? `${programa.duracao_semanas} semana(s)` : null].filter(Boolean).join(" · ");
	return {
		titulo: programa?.titulo ?? "Programa de treino",
		aluno,
		periodo: periodo || void 0,
		categoria: [
			METHODOLOGY_LABEL[programa?.metodologia] ?? programa?.metodologia,
			programa?.descricao,
			branding.nome ? `Coach: ${branding.nome}` : null
		].filter(Boolean).join(" · "),
		sessoes
	};
}
/** Gera e baixa o PDF A4 no modelo de tabela. */
async function exportarTreinoPdf(treino, nomeArquivo = "treino.pdf") {
	const [{ jsPDF }, { default: autoTable }] = await Promise.all([import("../_libs/jspdf.mjs").then((n) => /* @__PURE__ */ __toESM(n.t())), import("../_libs/jspdf-autotable.mjs").then((n) => n.t)]);
	const doc = new jsPDF({
		unit: "mm",
		format: "a4",
		orientation: "portrait"
	});
	const margin = 14;
	let y = 20;
	doc.setFont("helvetica", "bold");
	doc.setFontSize(20);
	doc.setTextColor(20, 20, 20);
	doc.text(treino.titulo, margin, y);
	y += 8;
	doc.setFont("helvetica", "normal");
	doc.setFontSize(10);
	doc.setTextColor(90, 90, 90);
	for (const linha of [
		treino.aluno ? `Aluno: ${treino.aluno}` : null,
		treino.periodo ? `Período: ${treino.periodo}` : null,
		treino.categoria || null
	].filter(Boolean)) {
		doc.text(linha, margin, y);
		y += 5;
	}
	y += 2;
	const pageH = doc.internal.pageSize.getHeight();
	for (const s of treino.sessoes) {
		if (y > pageH - 45) {
			doc.addPage();
			y = 20;
		}
		doc.setFont("helvetica", "bold");
		doc.setFontSize(12);
		doc.setTextColor(20, 20, 20);
		doc.text(s.titulo, margin, y);
		y += 5;
		if (s.subtitulo) {
			doc.setFont("helvetica", "normal");
			doc.setFontSize(9);
			doc.setTextColor(110, 110, 110);
			doc.text(s.subtitulo, margin, y);
			y += 4;
		}
		y += 2;
		autoTable(doc, {
			startY: y,
			margin: {
				left: margin,
				right: margin
			},
			head: [[
				"Exercício",
				"Séries x Reps",
				"Carga",
				"Descanso",
				"Observações"
			]],
			body: s.linhas.length > 0 ? s.linhas.map((l) => [
				l.nome,
				l.seriesReps,
				l.carga,
				l.descanso,
				l.observacoes === "BLOCO_HEADER" ? "" : l.observacoes
			]) : [[
				"Sem exercícios cadastrados",
				"",
				"",
				"",
				""
			]],
			didParseCell: (data) => {
				const linha = s.linhas[data.row.index];
				if (linha && linha.observacoes === "BLOCO_HEADER") {
					if (data.section === "body") {
						data.cell.styles.fillColor = [
							240,
							240,
							240
						];
						data.cell.styles.fontStyle = "bold";
						data.cell.styles.textColor = [
							20,
							20,
							20
						];
						data.cell.styles.fontSize = 9.5;
					}
				}
			},
			styles: {
				font: "helvetica",
				fontSize: 9,
				cellPadding: 2,
				textColor: [
					40,
					40,
					40
				]
			},
			headStyles: {
				fillColor: [
					26,
					26,
					26
				],
				textColor: [
					255,
					255,
					255
				],
				fontStyle: "bold"
			},
			alternateRowStyles: { fillColor: [
				245,
				245,
				245
			] },
			columnStyles: {
				0: { cellWidth: 52 },
				1: { cellWidth: 27 },
				2: { cellWidth: 18 },
				3: { cellWidth: 20 },
				4: { cellWidth: "auto" }
			},
			theme: "plain"
		});
		y = (doc.lastAutoTable?.finalY ?? y) + 8;
	}
	doc.save(nomeArquivo);
}
async function exportarSessoesPdfTabela(sessionIds, nomeArquivo = "treino.pdf") {
	await exportarTreinoPdf(await prepararTreinoPdf(sessionIds), nomeArquivo);
}
//#endregion
export { prepararTreinoPdf as a, fetchCoachBranding as i, exportarSessaoPDF as n, exportarSessoesPdfTabela as r, exportarSessaoExcel as t };
