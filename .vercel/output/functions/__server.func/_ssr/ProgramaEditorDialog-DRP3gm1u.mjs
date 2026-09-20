import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BxRH54s6.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { r as cn, t as Button } from "./button-CCQEfgNs.mjs";
import { $ as Lock, C as Sparkles, Et as FileDown, Ft as Copy, Ht as CircleQuestionMark, I as Save, Mt as Download, at as LayoutGrid, dt as ImageDown, tt as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-SwVf5DHm.mjs";
import { t as Input } from "./input-DoD5W07l.mjs";
import { t as Label } from "./label-B1jF9p8Y.mjs";
import { t as Textarea } from "./textarea-Dfe41XSO.mjs";
import { t as Badge } from "./badge-Bt-nVIZo.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-B7RuMzGd.mjs";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./sortable-list-7C-6tQZ_.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { r as METHODOLOGY_LABEL } from "./methodology-DF-HMT6m.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as prepararTreinoPdf } from "./pdf-treino-BvAJGnnP.mjs";
import { a as exportarSessoesEmMassa, c as prepararSessoesParaImagem, l as salvarLayout, n as UnifiedCanvasEditor, o as exportarSessoesPDF, r as carregarLayout, t as PRESETS_LAYOUT } from "./UnifiedCanvasEditor-Dz7MrYug.mjs";
import { t as Skeleton } from "./skeleton-DLRLwmh_.mjs";
import { l as ScrollArea, u as Slider } from "./slider-DOPtNy4x.mjs";
import { t as require_lib } from "../_libs/jszip+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProgramaEditorDialog-DRP3gm1u.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_lib = /* @__PURE__ */ __toESM(require_lib());
var W = 1240;
var H = 1754;
var M = 70;
var COLS = [
	.34,
	.16,
	.11,
	.12,
	.27
];
var HEADS = [
	"Exercício",
	"Séries x Reps",
	"Carga",
	"Descanso",
	"Observações"
];
function wrap(ctx, text, max) {
	if (!text) return [""];
	const palavras = String(text).split(/\s+/);
	const linhas = [];
	let atual = "";
	for (const p of palavras) {
		const tentativa = atual ? `${atual} ${p}` : p;
		if (ctx.measureText(tentativa).width <= max || !atual) atual = tentativa;
		else {
			linhas.push(atual);
			atual = p;
		}
	}
	if (atual) linhas.push(atual);
	return linhas;
}
/** Desenha uma sessão (uma ou mais páginas A4) e devolve os canvases. */
function desenharSessao(treino, sessao) {
	const paginas = [];
	const larguraUtil = W - M * 2;
	const larguras = COLS.map((c) => c * larguraUtil);
	let canvas;
	let ctx;
	let y = 0;
	const novaPagina = (comCabecalho) => {
		canvas = document.createElement("canvas");
		canvas.width = W;
		canvas.height = H;
		ctx = canvas.getContext("2d");
		ctx.fillStyle = "#FFFFFF";
		ctx.fillRect(0, 0, W, H);
		ctx.textBaseline = "top";
		paginas.push(canvas);
		y = M;
		if (comCabecalho) {
			ctx.fillStyle = "#141414";
			ctx.font = "700 34px \"Poppins\", Helvetica, sans-serif";
			ctx.fillText(treino.titulo, M, y);
			y += 44;
			ctx.fillStyle = "#5A5A5A";
			ctx.font = "400 17px \"Poppins\", Helvetica, sans-serif";
			for (const linha of [
				treino.aluno ? `Aluno: ${treino.aluno}` : null,
				treino.periodo ? `Período: ${treino.periodo}` : null,
				treino.categoria || null
			].filter(Boolean)) for (const l of wrap(ctx, linha, larguraUtil)) {
				ctx.fillText(l, M, y);
				y += 24;
			}
			y += 14;
		}
		ctx.fillStyle = "#141414";
		ctx.font = "700 22px \"Poppins\", Helvetica, sans-serif";
		ctx.fillText(sessao.titulo, M, y);
		y += 30;
		if (sessao.subtitulo) {
			ctx.fillStyle = "#6E6E6E";
			ctx.font = "400 15px \"Poppins\", Helvetica, sans-serif";
			for (const l of wrap(ctx, sessao.subtitulo, larguraUtil)) {
				ctx.fillText(l, M, y);
				y += 20;
			}
		}
		y += 10;
		cabecalhoTabela();
	};
	const cabecalhoTabela = () => {
		const alturaH = 34;
		ctx.fillStyle = "#1A1A1A";
		ctx.fillRect(M, y, larguraUtil, alturaH);
		ctx.fillStyle = "#FFFFFF";
		ctx.font = "700 14px \"Poppins\", Helvetica, sans-serif";
		let x = M;
		HEADS.forEach((h, i) => {
			ctx.fillText(h, x + 8, y + 10);
			x += larguras[i];
		});
		y += alturaH;
	};
	novaPagina(true);
	(sessao.linhas.length > 0 ? sessao.linhas.map((l) => [
		l.nome,
		l.seriesReps,
		l.carga,
		l.descanso,
		l.observacoes
	]) : [[
		"Sem exercícios cadastrados",
		"",
		"",
		"",
		""
	]]).forEach((celulas, idx) => {
		ctx.font = "400 14px \"Poppins\", Helvetica, sans-serif";
		const linhasCel = celulas.map((c, i) => wrap(ctx, c ?? "", larguras[i] - 16));
		const alturaLinha = Math.max(...linhasCel.map((l) => l.length)) * 20 + 14;
		if (y + alturaLinha > H - M) {
			novaPagina(false);
			ctx.font = "400 14px \"Poppins\", Helvetica, sans-serif";
		}
		if (idx % 2 === 1) {
			ctx.fillStyle = "#F5F5F5";
			ctx.fillRect(M, y, larguraUtil, alturaLinha);
		}
		ctx.fillStyle = "#282828";
		let x = M;
		linhasCel.forEach((cel, i) => {
			cel.forEach((l, li) => ctx.fillText(l, x + 8, y + 7 + li * 20));
			x += larguras[i];
		});
		y += alturaLinha;
	});
	return paginas;
}
function toBlob(canvas, formato) {
	return new Promise((resolve, reject) => canvas.toBlob((b) => b ? resolve(b) : reject(/* @__PURE__ */ new Error("Falha ao gerar imagem")), formato === "jpg" ? "image/jpeg" : "image/png", formato === "jpg" ? .95 : void 0));
}
function slug(s) {
	return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]+/g, "-").replace(/(^-|-$)/g, "").toLowerCase().slice(0, 60);
}
/**
* Exporta as sessões como imagens A4 (mesmo layout do PDF padrão).
* Retorna a quantidade de imagens geradas.
*/
async function exportarSessoesImagemA4(sessionIds, formato = "png", nomeZip = `treinos_${formato}.zip`) {
	const treino = await prepararTreinoPdf(sessionIds);
	const arquivos = [];
	for (const sessao of treino.sessoes) {
		const paginas = desenharSessao(treino, sessao);
		for (let i = 0; i < paginas.length; i++) {
			const sufixo = paginas.length > 1 ? `-p${i + 1}` : "";
			arquivos.push({
				nome: `${slug(sessao.titulo) || "sessao"}${sufixo}.${formato}`,
				blob: await toBlob(paginas[i], formato)
			});
		}
	}
	if (arquivos.length === 1) {
		const url = URL.createObjectURL(arquivos[0].blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = arquivos[0].nome;
		a.click();
		URL.revokeObjectURL(url);
		return 1;
	}
	const zip = new import_lib.default();
	arquivos.forEach((f) => zip.file(f.nome, f.blob));
	const zipBlob = await zip.generateAsync({ type: "blob" });
	const url = URL.createObjectURL(zipBlob);
	const a = document.createElement("a");
	a.href = url;
	a.download = nomeZip;
	a.click();
	URL.revokeObjectURL(url);
	return arquivos.length;
}
function idsDasSessoes(programa) {
	return (programa.program_weeks ?? []).slice().sort((a, b) => (a.numero_semana ?? 0) - (b.numero_semana ?? 0)).flatMap((w) => (w.sessions ?? []).slice().sort((a, b) => (a.numero_dia ?? 0) - (b.numero_dia ?? 0)).map((s) => String(s.id)));
}
var NOVIDADES_KEY = "program-image-novidades-dispensadas";
function novidadesPendentes() {
	if (typeof window === "undefined") return false;
	try {
		return window.localStorage.getItem(NOVIDADES_KEY) !== "1";
	} catch {
		return false;
	}
}
function useNovidadesPendentes() {
	const [pendente, setPendente] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setPendente(novidadesPendentes()), []);
	return pendente;
}
var ANEL = "ring-2 ring-primary/50 ring-offset-2 ring-offset-background rounded-md transition-shadow duration-200";
function GuiaDeUso({ realcado }) {
	const passos = [{
		icon: LayoutGrid,
		titulo: "Canvas Livre",
		texto: "Arraste os blocos para qualquer lugar da imagem. O sistema salvará as coordenadas automaticamente."
	}, {
		icon: Download,
		titulo: "Exportar",
		texto: "PNG e JPG saem em um ZIP com todas as sessões; o PDF sai em arquivo único com uma página por sessão."
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon",
			className: cn("h-8 w-8 shrink-0 text-muted-foreground transition-colors duration-200 hover:text-foreground", realcado && ANEL),
			"aria-label": "Como usar o layout de imagem",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-4 w-4" })
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverContent, {
		align: "end",
		className: "w-[min(22rem,calc(100vw-2rem))] p-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-b border-border/60 px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold leading-tight",
				children: "Como usar"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-snug text-muted-foreground",
				children: "Ajuste e exporte suas imagens."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-4 px-4 py-4",
			children: passos.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-primary/10 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-4 w-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold leading-tight",
						children: p.titulo
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs leading-relaxed text-muted-foreground",
						children: p.texto
					})]
				})]
			}, p.titulo))
		})]
	})] });
}
function ProgramImageDialog({ programa, onOpenChange }) {
	const open = !!programa;
	const [layout, setLayout] = (0, import_react.useState)(null);
	const [sessoes, setSessoes] = (0, import_react.useState)(null);
	const [preview, setPreview] = (0, import_react.useState)(null);
	const [gerandoPreview, setGerandoPreview] = (0, import_react.useState)(false);
	const [exportando, setExportando] = (0, import_react.useState)(null);
	const [novidades, setNovidades] = (0, import_react.useState)(false);
	const [destaque, setDestaque] = (0, import_react.useState)(null);
	const sessionIds = (0, import_react.useMemo)(() => programa ? idsDasSessoes(programa) : [], [programa]);
	const modalidade = programa?.metodologia ?? null;
	const modalidadeLabel = modalidade ? METHODOLOGY_LABEL[modalidade] ?? modalidade : null;
	(0, import_react.useEffect)(() => {
		if (open) setNovidades(novidadesPendentes());
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (!destaque) return;
		const t = setTimeout(() => setDestaque(null), 1600);
		return () => clearTimeout(t);
	}, [destaque]);
	function dispensarNovidades() {
		setNovidades(false);
		try {
			window.localStorage.setItem(NOVIDADES_KEY, "1");
		} catch {}
	}
	(0, import_react.useEffect)(() => {
		if (!programa) {
			setSessoes(null);
			setPreview(null);
			return;
		}
		setLayout(carregarLayout(programa.id, modalidade).layout);
		let cancelado = false;
		(async () => {
			try {
				const dados = await prepararSessoesParaImagem(sessionIds);
				if (!cancelado) setSessoes(dados);
			} catch (e) {
				if (!cancelado) toast.error(e?.message ?? "Não foi possível carregar as sessões");
			}
		})();
		return () => {
			cancelado = true;
		};
	}, [
		programa,
		sessionIds,
		modalidade
	]);
	async function exportar(formato) {
		if (!layout || !sessoes || sessoes.length === 0) return;
		setExportando(formato);
		try {
			const base = (programa?.titulo ?? "programa").replace(/[^\w\-]+/g, "_");
			const itens = sessoes.map((s) => ({
				...s,
				input: {
					...s.input,
					layout
				}
			}));
			if (formato === "pdf") await exportarSessoesPDF(itens, `${base}.pdf`);
			else await exportarSessoesEmMassa(itens, formato, `${base}_${formato}.zip`);
			toast.success(`Exportação concluída (${sessoes.length} sessões)`);
		} catch (e) {
			toast.error(e?.message ?? "Falha ao exportar");
		} finally {
			setExportando(null);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] max-w-5xl overflow-hidden p-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "space-y-2 border-b border-border/60 px-4 py-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
								className: "flex flex-wrap items-center gap-2 text-base leading-tight",
								children: ["Layout de imagem", programa?.titulo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "secondary",
									className: "max-w-[16rem] truncate font-normal",
									children: programa.titulo
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
								className: "leading-snug",
								children: "Arraste os blocos e exporte em PNG, JPG ou PDF."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuiaDeUso, { realcado: destaque === "ajuda" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: modalidadeLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[11px] leading-snug text-muted-foreground",
							children: ["Modalidade: ", modalidadeLabel]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
					className: "max-h-[72vh]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6 px-6 py-5",
						children: [novidades && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl border border-primary/30 bg-primary/[0.04] p-4 duration-200 animate-in fade-in",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[auto_minmax(0,1fr)] gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold leading-tight",
											children: "Novo Motor de Canvas"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs leading-relaxed text-muted-foreground",
											children: "Agora você pode arrastar livremente os blocos para qualquer lugar da imagem."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "sm",
											onClick: dispensarNovidades,
											children: "Entendi"
										})
									]
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
											children: "Canvas Livre"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-2 rounded-lg border border-border/60 bg-muted/40 p-1",
											children: Object.entries(PRESETS_LAYOUT).map(([id, p]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "ghost",
												size: "sm",
												className: cn("h-7 px-2 text-[10px] uppercase font-bold", layout?.largura === p.layout.largura && "bg-background shadow-sm"),
												onClick: () => {
													if (!layout) return;
													const next = {
														...layout,
														largura: p.layout.largura,
														altura: p.layout.altura
													};
													setLayout(next);
													salvarLayout(programa.id, next);
												},
												children: p.nome
											}, id))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "outline",
											size: "sm",
											className: "h-7 gap-1 text-[10px] uppercase font-bold",
											onClick: () => {
												if (!layout) return;
												const next = {
													...layout,
													fundo: layout.fundo === "claro" ? "escuro" : "claro"
												};
												setLayout(next);
												salvarLayout(programa.id, next);
											},
											children: layout?.fundo === "claro" ? "Escuro" : "Claro"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3 ml-2 border-l pl-4 border-border/60",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] uppercase font-bold text-muted-foreground whitespace-nowrap",
													children: "Fonte"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "w-32",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
														value: [layout?.fontSize ?? 1],
														min: .5,
														max: 2,
														step: .1,
														onValueChange: ([val]) => {
															if (!layout) return;
															const next = {
																...layout,
																fontSize: val
															};
															setLayout(next);
															salvarLayout(programa.id, next);
														}
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-[10px] font-mono w-8",
													children: [(layout?.fontSize ?? 1).toFixed(1), "x"]
												})
											]
										})
									]
								}), gerandoPreview && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin text-muted-foreground" })]
							}), layout && sessoes && sessoes.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnifiedCanvasEditor, {
								layout,
								blocos: sessoes[0].input.principal,
								metodologiaLabel: sessoes[0].input.metodologiaLabel,
								coachLabel: sessoes[0].input.coachLabel,
								onChange: (newLayout) => {
									setLayout(newLayout);
									salvarLayout(programa.id, newLayout);
								}
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "aspect-video w-full rounded-md" })]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 border-t border-border/60 px-4 py-4 sm:flex-row sm:items-center sm:justify-end sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => onOpenChange(false),
						children: "Fechar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap justify-end gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								disabled: !sessoes?.length || !!exportando,
								onClick: () => exportar("png"),
								children: [exportando === "png" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageDown, { className: "h-4 w-4" }), " PNG"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								disabled: !sessoes?.length || !!exportando,
								onClick: () => exportar("jpg"),
								children: [exportando === "jpg" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageDown, { className: "h-4 w-4" }), " JPG"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								disabled: !sessoes?.length || !!exportando,
								onClick: () => exportar("pdf"),
								children: [exportando === "pdf" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "h-4 w-4" }), " Exportar PDF"]
							})
						]
					})]
				})
			]
		})
	});
}
var STATUS = [
	{
		value: "rascunho",
		label: "Rascunho"
	},
	{
		value: "publicada",
		label: "Publicada"
	},
	{
		value: "arquivada",
		label: "Arquivada"
	}
];
/** Metadados de IA gravados em `regras_progressao.ai` na geração. */
function lerIa(regras) {
	if (!regras || typeof regras !== "object") return null;
	const ai = regras["ai"];
	if (!ai || typeof ai !== "object") return null;
	return {
		prompt: typeof ai.ai_prompt === "string" ? ai.ai_prompt : "",
		geradoEm: typeof ai.ai_generated_at === "string" ? ai.ai_generated_at : null,
		notas: typeof ai.notes === "string" ? ai.notes : null
	};
}
function ProgramaEditorDialog({ programaId, onOpenChange }) {
	const qc = useQueryClient();
	const [form, setForm] = (0, import_react.useState)(null);
	const { data: programa, isLoading } = useQuery({
		queryKey: ["programa-edit", programaId],
		enabled: !!programaId,
		queryFn: async () => {
			const { data, error } = await supabase.from("programs").select("id, titulo, descricao, metodologia, data_inicio, duracao_semanas, status, regras_progressao").eq("id", programaId).maybeSingle();
			if (error) throw error;
			return data;
		}
	});
	(0, import_react.useEffect)(() => {
		if (!programa) return;
		setForm({
			titulo: programa.titulo ?? "",
			descricao: programa.descricao ?? "",
			metodologia: programa.metodologia,
			data_inicio: programa.data_inicio ?? "",
			duracao_semanas: programa.duracao_semanas ?? 1,
			status: programa.status ?? "rascunho"
		});
	}, [programa]);
	const ia = lerIa(programa?.regras_progressao);
	const salvar = useMutation({
		mutationFn: async () => {
			if (!programaId || !form) throw new Error("Nada para salvar");
			if (!form.titulo.trim()) throw new Error("Informe um título");
			const { error } = await supabase.from("programs").update({
				titulo: form.titulo.trim(),
				descricao: form.descricao.trim() || null,
				metodologia: form.metodologia,
				...form.data_inicio ? { data_inicio: form.data_inicio } : {},
				duracao_semanas: Math.max(1, Math.min(52, Number(form.duracao_semanas) || 1)),
				status: form.status
			}).eq("id", programaId);
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success("Programa atualizado");
			qc.invalidateQueries({ queryKey: ["programas"] });
			qc.invalidateQueries({ queryKey: ["programa-edit", programaId] });
			onOpenChange(false);
		},
		onError: (e) => toast.error(e?.message ?? "Falha ao salvar")
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: !!programaId,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "flex max-h-[90dvh] max-w-xl flex-col gap-0 p-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "border-b border-border/60 px-5 py-4 text-left sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-base",
						children: "Editar programa"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-xs",
						children: "Altere título, descrição, modalidade, período e status desta rotina."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-0 flex-1 space-y-4 overflow-y-auto px-5 py-5 sm:px-6",
					children: isLoading || !form ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), " Carregando…"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "prog-titulo",
								children: "Título"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "prog-titulo",
								value: form.titulo,
								onChange: (e) => setForm({
									...form,
									titulo: e.target.value
								}),
								placeholder: "Ex.: Hipertrofia — Bloco 1"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "prog-desc",
								children: "Descrição / objetivos"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "prog-desc",
								rows: 3,
								value: form.descricao,
								onChange: (e) => setForm({
									...form,
									descricao: e.target.value
								}),
								placeholder: "Objetivos, contexto do aluno, observações gerais…",
								className: "resize-y text-sm"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Modalidade" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: form.metodologia,
										onValueChange: (v) => setForm({
											...form,
											metodologia: v
										}),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: Object.keys(METHODOLOGY_LABEL).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: m,
											children: METHODOLOGY_LABEL[m]
										}, m)) })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: form.status,
										onValueChange: (v) => setForm({
											...form,
											status: v
										}),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: STATUS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: s.value,
											children: s.label
										}, s.value)) })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "prog-inicio",
										children: "Data de início"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "prog-inicio",
										type: "date",
										value: form.data_inicio,
										onChange: (e) => setForm({
											...form,
											data_inicio: e.target.value
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "prog-semanas",
										children: "Duração (semanas)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "prog-semanas",
										type: "number",
										min: 1,
										max: 52,
										value: form.duracao_semanas,
										onChange: (e) => setForm({
											...form,
											duracao_semanas: Number(e.target.value)
										})
									})]
								})
							]
						}),
						ia && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-xl border border-primary/25 bg-primary/[0.06] p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
									className: "flex flex-wrap items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-primary" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-sm font-semibold",
											children: "Prompt usado na geração"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
											variant: "outline",
											className: "gap-1 border-border/60 text-[10px] uppercase tracking-wide",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3" }), " Privado"]
										}),
										ia.geradoEm && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-auto text-[11px] text-muted-foreground",
											children: new Date(ia.geradoEm).toLocaleString("pt-BR")
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
									className: "mt-3 max-h-48 overflow-auto whitespace-pre-wrap rounded-lg border border-border/50 bg-card px-3 py-2 text-xs leading-relaxed text-muted-foreground",
									children: ia.prompt.trim() || "— (gerado apenas com o escopo selecionado, sem instruções extras)"
								}),
								ia.notas && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-xs leading-relaxed text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Observações da IA:"
										}),
										" ",
										ia.notas
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex justify-end",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "button",
										size: "sm",
										variant: "outline",
										className: "h-8 gap-1.5",
										onClick: async () => {
											try {
												await navigator.clipboard.writeText(ia.prompt);
												toast.success("Prompt copiado");
											} catch {
												toast.error("Não foi possível copiar");
											}
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3.5 w-3.5" }), "Copiar prompt"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-[11px] leading-relaxed text-muted-foreground/80",
									children: "Visível apenas para você — o prompt nunca é exibido ao aluno nem nas exportações."
								})
							]
						})
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "border-t border-border/60 px-5 py-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => onOpenChange(false),
						children: "Cancelar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => salvar.mutate(),
						disabled: !form || salvar.isPending,
						className: "gap-2",
						children: [salvar.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4" }), "Salvar alterações"]
					})]
				})
			]
		})
	});
}
//#endregion
export { useNovidadesPendentes as i, ProgramaEditorDialog as n, exportarSessoesImagemA4 as r, ProgramImageDialog as t };
