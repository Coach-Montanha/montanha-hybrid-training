import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BxRH54s6.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { r as cn } from "./button-CCQEfgNs.mjs";
import { a as PointerSensor, g as useSensors, h as useSensor, i as KeyboardSensor, p as useDraggable, t as DndContext } from "../_libs/@dnd-kit/core+[...].mjs";
import { t as restrictToParentElement } from "../_libs/dnd-kit__modifiers.mjs";
import { r as METHODOLOGY_LABEL } from "./methodology-DF-HMT6m.mjs";
import { i as fetchCoachBranding } from "./pdf-treino-BvAJGnnP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/UnifiedCanvasEditor-Dz7MrYug.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var METODOLOGIA_SIGLA = {
	hibrido: "TH",
	kettlebell_fitness: "KF",
	kettlebell_sport: "KS",
	levantamento_peso: "LP",
	musculacao: "MU",
	treinamento_funcional: "TF",
	corrida: "CO"
};
var DIA_SEMANA = [
	"Domingo",
	"Segunda",
	"Terça",
	"Quarta",
	"Quinta",
	"Sexta",
	"Sábado"
];
function formatarLinhaExercicio(e) {
	const nome = (e.exercises?.nome_pt ?? e.nome_livre ?? "Exercício").toString().toUpperCase();
	const lado = e.lado ? ` (${e.lado === "direito" ? "D" : e.lado === "esquerdo" ? "E" : String(e.lado).toUpperCase()})` : "";
	const partes = [];
	if (e.pct_1rm != null) partes.push(`${e.pct_1rm}%`);
	else if (e.carga_kg != null) partes.push(`${e.carga_kg}KG`);
	const reps = e.reps != null && String(e.reps).trim() !== "" ? String(e.reps).toUpperCase() : e.series != null ? `${e.series}X` : "";
	if (reps) partes.push(reps);
	return `${partes.join(" ")} ${nome}${lado}`.trim();
}
function tituloBloco(b) {
	if (b.formato === "mobilidade") return "BLOCO DE MOBILIDADE" + (b.duracao_min ? ` (${b.duracao_min}')` : "");
	if (ehAquecimento(b)) return "AQUECIMENTO" + (b.duracao_min ? ` (${b.duracao_min}')` : "");
	return `${(b.titulo ?? b.formato ?? "").toString().toUpperCase()}${b.duracao_min ? ` (${b.duracao_min}')` : ""}`;
}
function subtituloFormato(b) {
	const cfg = b.config ?? {};
	const rounds = cfg.rounds ?? cfg.num_rounds;
	const clusters = cfg.clusters ?? cfg.num_clusters;
	if (clusters && cfg.cluster_min) return `${clusters} CLUSTERS ROUNDS (${cfg.cluster_min}' CADA)`;
	if (rounds) return `${rounds} ROUNDS`;
	return null;
}
function ehAquecimento(b) {
	return (b.titulo ?? "").toString().toLowerCase().includes("aquecimento");
}
function nomeArquivoSessao(session, metodologia) {
	const sigla = METODOLOGIA_SIGLA[metodologia] ?? metodologia.slice(0, 2).toUpperCase();
	const num = session.numero_dia ?? 1;
	let dia = "Sessao";
	if (session.data) dia = DIA_SEMANA[(/* @__PURE__ */ new Date(session.data + "T00:00:00")).getDay()] ?? dia;
	return `${sigla}_${num}_-_${dia}`;
}
async function montarInputDeBlocos(blocks, metodologia, coachNome) {
	function linhasExerciciosDe(b) {
		return (b.session_block_exercises ?? []).sort((a, z) => (a.ordem ?? 0) - (z.ordem ?? 0)).map((e) => ({ texto: formatarLinhaExercicio(e) }));
	}
	function blocoParaImagem(b, tituloForcado) {
		return {
			chave: b.chave || b.id,
			titulo: (tituloForcado ?? tituloBloco(b)).toUpperCase(),
			subtitulo: subtituloFormato(b),
			linhas: linhasExerciciosDe(b)
		};
	}
	return {
		esquerda: [],
		principal: blocks.map((b) => blocoParaImagem(b)),
		metodologiaLabel: (METHODOLOGY_LABEL[metodologia] ?? metodologia).toUpperCase(),
		coachLabel: `by ${coachNome}`
	};
}
async function fetchSessionFull(sessionId) {
	const { data: session, error } = await supabase.from("sessions").select("id, titulo, numero_dia, data, program_week_id, program_weeks(numero_semana, programs(id, titulo, metodologia))").eq("id", sessionId).single();
	if (error || !session) throw new Error(error?.message ?? "Sessão não encontrada");
	const { data: blocks } = await supabase.from("session_blocks").select("id, ordem, titulo, formato, duracao_min, config, session_block_exercises(ordem, reps, series, pct_1rm, lado, nome_livre, exercises(nome_pt))").eq("session_id", sessionId).order("ordem");
	const metodologia = session.program_weeks?.programs?.metodologia ?? "hibrido";
	return {
		session,
		blocks: blocks ?? [],
		metodologia
	};
}
async function prepararSessaoParaImagem(sessionId) {
	const [{ session, blocks, metodologia }, branding] = await Promise.all([fetchSessionFull(sessionId), fetchCoachBranding()]);
	return {
		input: await montarInputDeBlocos(blocks, metodologia, branding.nome),
		nomeArquivo: nomeArquivoSessao(session, metodologia)
	};
}
async function prepararSessoesParaImagem(sessionIds) {
	const branding = await fetchCoachBranding();
	const out = [];
	for (const id of sessionIds) {
		const { session, blocks, metodologia } = await fetchSessionFull(id);
		const input = await montarInputDeBlocos(blocks, metodologia, branding.nome);
		out.push({
			input,
			nomeArquivo: nomeArquivoSessao(session, metodologia)
		});
	}
	return out;
}
var FONT_FAMILY = "Poppins";
function desenharColuna(ctx, blocos, x, yInicial, largura, escala, corTexto, corMuted, layout) {
	let y = yInicial;
	const escalaBase = layout.fontSize ?? 1;
	const tituloSize = 44 * escala * escalaBase;
	const linhaSize = 34 * escala * escalaBase;
	for (const b of blocos) {
		let drawX = x;
		let drawY = y;
		let drawW = largura;
		const pos = b.chave ? layout.posicoes?.[b.chave] : null;
		if (pos) {
			drawX = pos.x / 100 * ctx.canvas.width;
			drawY = pos.y / 100 * ctx.canvas.height;
			drawW = pos.w / 100 * ctx.canvas.width;
		}
		ctx.fillStyle = corTexto;
		ctx.font = `800 ${tituloSize}px "${FONT_FAMILY}", sans-serif`;
		ctx.fillText(b.titulo ?? "", drawX, drawY, drawW);
		let currentY = drawY + tituloSize * 1.35;
		if (b.subtitulo) {
			ctx.fillStyle = corMuted;
			ctx.font = `600 ${linhaSize}px "${FONT_FAMILY}", sans-serif`;
			ctx.fillText(b.subtitulo, drawX, currentY, drawW);
			currentY += linhaSize * 1.4;
		}
		ctx.fillStyle = corTexto;
		ctx.font = `400 ${linhaSize}px "${FONT_FAMILY}", sans-serif`;
		for (const l of b.linhas) {
			ctx.fillText(l.texto, drawX, currentY, drawW);
			currentY += linhaSize * 1.35;
		}
		if (!pos) y = currentY + tituloSize * .8;
	}
}
async function renderizarSessaoCanvas(input) {
	const L = input.layout ?? {
		largura: 5760,
		altura: 2160,
		fundo: "claro",
		fontSize: 1
	};
	const canvas = document.createElement("canvas");
	canvas.width = L.largura;
	canvas.height = L.altura;
	const ctx = canvas.getContext("2d");
	const escuro = L.fundo === "escuro";
	const corFundo = input.corFundo ?? (escuro ? "#0F1115" : "#FFFFFF");
	const corTexto = input.corTexto ?? (escuro ? "#F5F5F4" : "#0F1115");
	const corMuted = input.corMuted ?? (escuro ? "#9CA3AF" : "#6B7280");
	if (L.fundo !== "transparente") {
		ctx.fillStyle = corFundo;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}
	ctx.textBaseline = "top";
	const escala = canvas.height / 2160;
	const margem = 140 * escala;
	const temEsquerda = input.esquerda.length > 0;
	const larguraEsq = temEsquerda ? (canvas.width - margem * 3) * .3 : 0;
	const larguraPrin = canvas.width - margem * (temEsquerda ? 3 : 2) - larguraEsq;
	ctx.fillStyle = corTexto;
	ctx.font = `900 ${90 * escala}px "${FONT_FAMILY}", sans-serif`;
	ctx.fillText(input.metodologiaLabel, margem, margem);
	const topo = margem + 160 * escala;
	if (temEsquerda) desenharColuna(ctx, input.esquerda, margem, topo, larguraEsq, escala, corTexto, corMuted, L);
	desenharColuna(ctx, input.principal, margem + (temEsquerda ? larguraEsq + margem : 0), topo, larguraPrin, escala, corTexto, corMuted, L);
	ctx.fillStyle = corMuted;
	ctx.font = `600 ${40 * escala}px "${FONT_FAMILY}", sans-serif`;
	ctx.fillText(input.coachLabel, margem, canvas.height - margem);
	return canvas;
}
async function canvasParaBlob(canvas, formato) {
	return new Promise((resolve) => canvas.toBlob((b) => resolve(b), formato === "jpg" ? "image/jpeg" : "image/png", .95));
}
function baixarBlob(blob, nome) {
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = nome;
	a.click();
	URL.revokeObjectURL(url);
}
async function exportarSessaoImagem(input, nomeArquivo, formato = "png") {
	baixarBlob(await canvasParaBlob(await renderizarSessaoCanvas(input), formato), `${nomeArquivo}.${formato}`);
}
/** Exporta várias sessões como um único ZIP de imagens. */
async function exportarSessoesEmMassa(itens, formato, nomeZip) {
	const { default: JSZip } = await import("../_libs/jszip+[...].mjs").then((n) => /* @__PURE__ */ __toESM(n.t()));
	const zip = new JSZip();
	for (const item of itens) {
		const blob = await canvasParaBlob(await renderizarSessaoCanvas(item.input), formato);
		zip.file(`${item.nomeArquivo}.${formato}`, blob);
	}
	baixarBlob(await zip.generateAsync({ type: "blob" }), nomeZip);
}
/** Exporta várias sessões num PDF único (uma página por sessão). */
async function exportarSessoesPDF(itens, nomeArquivo) {
	const { jsPDF } = await import("../_libs/jspdf.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()));
	let pdf = null;
	for (const item of itens) {
		const canvas = await renderizarSessaoCanvas(item.input);
		const orientacao = canvas.width >= canvas.height ? "landscape" : "portrait";
		const dataUrl = canvas.toDataURL("image/jpeg", .92);
		if (!pdf) pdf = new jsPDF({
			orientation: orientacao,
			unit: "px",
			format: [canvas.width, canvas.height]
		});
		else pdf.addPage([canvas.width, canvas.height], orientacao);
		pdf.addImage(dataUrl, "JPEG", 0, 0, canvas.width, canvas.height);
	}
	if (pdf) pdf.save(nomeArquivo);
}
var LAYOUT_PADRAO = {
	largura: 5760,
	altura: 2160,
	fundo: "claro",
	fontSize: 1,
	posicoes: {}
};
/** Formatos de tela disponíveis para exportação. */
var PRESETS_LAYOUT = {
	padrao: {
		nome: "Painel ultrawide",
		layout: {
			largura: 5760,
			altura: 2160,
			fundo: "claro",
			fontSize: 1
		}
	},
	a4: {
		nome: "A4 paisagem",
		layout: {
			largura: 3508,
			altura: 2480,
			fundo: "claro",
			fontSize: 1
		}
	},
	quadrado: {
		nome: "Quadrado 1:1",
		layout: {
			largura: 2160,
			altura: 2160,
			fundo: "claro",
			fontSize: 1
		}
	},
	feed: {
		nome: "Feed 4:5",
		layout: {
			largura: 2160,
			altura: 2700,
			fundo: "claro",
			fontSize: 1
		}
	},
	story: {
		nome: "Story 9:16",
		layout: {
			largura: 2160,
			altura: 3840,
			fundo: "claro",
			fontSize: 1
		}
	}
};
function carregarLayout(programId, _modalidade) {
	if (typeof window === "undefined") return {
		layout: LAYOUT_PADRAO,
		origem: "padrao"
	};
	try {
		const salvo = window.localStorage.getItem(`program-image-layout:${programId}`);
		if (salvo) return {
			layout: JSON.parse(salvo),
			origem: "custom"
		};
	} catch (e) {
		console.error("Erro ao carregar layout:", e);
	}
	return {
		layout: LAYOUT_PADRAO,
		origem: "padrao"
	};
}
function salvarLayout(programId, layout) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(`program-image-layout:${programId}`, JSON.stringify(layout));
	} catch (e) {
		console.error("Erro ao salvar layout:", e);
	}
}
function UnifiedCanvasEditor({ layout, onChange, blocos, metodologiaLabel, coachLabel }) {
	const containerRef = (0, import_react.useRef)(null);
	const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor));
	const aspectRatio = layout.largura / layout.altura;
	const fundo = layout.fundo;
	const handleDragEnd = (event) => {
		const { active, delta } = event;
		const blockId = active.id;
		const container = containerRef.current;
		if (!container) return;
		const rect = container.getBoundingClientRect();
		const currentPos = layout.posicoes[blockId] || {
			x: 5,
			y: 15,
			w: 30
		};
		const deltaXPercent = delta.x / rect.width * 100;
		const deltaYPercent = delta.y / rect.height * 100;
		const newPos = {
			x: Math.max(0, Math.min(95, currentPos.x + deltaXPercent)),
			y: Math.max(0, Math.min(95, currentPos.y + deltaYPercent)),
			w: currentPos.w
		};
		onChange({
			...layout,
			posicoes: {
				...layout.posicoes,
				[blockId]: newPos
			}
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: containerRef,
			className: cn("relative w-full overflow-hidden border border-border shadow-inner rounded-lg transition-colors duration-300", fundo === "escuro" ? "bg-[#0F1115] text-[#F5F5F4]" : "bg-white text-[#0F1115]"),
			style: { aspectRatio },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-[5%] left-[5%] font-black uppercase",
					style: { fontSize: `calc(min(40px, 4vw) * ${layout.fontSize || 1})` },
					children: metodologiaLabel
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DndContext, {
					sensors,
					onDragEnd: handleDragEnd,
					modifiers: [restrictToParentElement],
					children: blocos.map((bloco) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DraggableBlock, {
							bloco,
							pos: layout.posicoes[bloco.chave] || {
								x: 5,
								y: 15,
								w: 30
							},
							fundo,
							fontSize: layout.fontSize
						}, bloco.chave);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("absolute bottom-[5%] left-[5%] font-semibold opacity-60"),
					style: { fontSize: `calc(min(18px, 1.8vw) * ${layout.fontSize || 1})` },
					children: coachLabel
				})
			]
		})
	});
}
function DraggableBlock({ bloco, pos, fundo, fontSize = 1 }) {
	const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id: bloco.chave });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: setNodeRef,
		style: {
			...transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : void 0,
			left: `${pos.x}%`,
			top: `${pos.y}%`,
			width: `${pos.w}%`,
			position: "absolute"
		},
		className: cn("cursor-move p-4 rounded border border-dashed border-transparent hover:border-primary/50 hover:bg-primary/5 transition-colors", isDragging && "z-50 ring-2 ring-primary opacity-80"),
		...listeners,
		...attributes,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-bold uppercase mb-2",
				style: { fontSize: `${1.2 * fontSize}rem` },
				children: bloco.titulo
			}),
			bloco.subtitulo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "opacity-70 mb-2 font-semibold",
				style: { fontSize: `${.9 * fontSize}rem` },
				children: bloco.subtitulo
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-1",
				children: bloco.linhas.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "leading-snug",
					style: { fontSize: `${.85 * fontSize}rem` },
					children: l.texto
				}, i))
			})
		]
	});
}
//#endregion
export { exportarSessoesEmMassa as a, prepararSessoesParaImagem as c, exportarSessaoImagem as i, salvarLayout as l, UnifiedCanvasEditor as n, exportarSessoesPDF as o, carregarLayout as r, prepararSessaoParaImagem as s, PRESETS_LAYOUT as t };
