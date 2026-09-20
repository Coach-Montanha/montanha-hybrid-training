import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BxRH54s6.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { r as cn, t as Button } from "./button-CCQEfgNs.mjs";
import { At as Earth, F as Search, Jt as ChevronDown, Kt as ChevronRight, S as SquareCheckBig, T as SlidersHorizontal, V as Pencil, _t as GitMerge, at as LayoutGrid, h as Trash2, in as ArrowUpDown, jt as Dumbbell, m as TriangleAlert, n as Youtube, p as Upload, qt as ChevronLeft, r as X, rn as ArrowUp, s as WandSparkles, sn as ArrowDown, tt as LoaderCircle, v as Tag, y as Table, z as Plus } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, t as Dialog } from "./dialog-SwVf5DHm.mjs";
import { t as Input } from "./input-DoD5W07l.mjs";
import { t as Label } from "./label-B1jF9p8Y.mjs";
import { t as Textarea } from "./textarea-Dfe41XSO.mjs";
import { t as Badge } from "./badge-Bt-nVIZo.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-B7RuMzGd.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { r as METHODOLOGY_LABEL } from "./methodology-DF-HMT6m.mjs";
import { S as useNavigate, _ as Outlet, p as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Card } from "./card-Bav9nr75.mjs";
import { a as DropdownMenuLabel, i as DropdownMenuItem, n as DropdownMenuCheckboxItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-ChrMfaLT.mjs";
import { t as Progress } from "./progress-Rwu-UcSt.mjs";
import { t as useCoach } from "./use-coach-B0Sg5_sT.mjs";
import { t as Skeleton } from "./skeleton-DLRLwmh_.mjs";
import { t as Checkbox } from "./checkbox-BvhzXIX4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.exercicios-CWYHAFFC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DataGrid({ data = [], columns = [], keyExtractor, searchPlaceholder = "Buscar registros...", searchableKeys, facetedFilters = [], selectable = false, selectedIds = /* @__PURE__ */ new Set(), onSelectionChange, onRowClick, initialPageSize = 10, bulkActions, className }) {
	const [search, setSearch] = import_react.useState("");
	const [sortColumn, setSortColumn] = import_react.useState(null);
	const [sortDirection, setSortDirection] = import_react.useState("asc");
	const [page, setPage] = import_react.useState(0);
	const [pageSize, setPageSize] = import_react.useState(initialPageSize);
	const [activeFacetedFilters, setActiveFacetedFilters] = import_react.useState({});
	const [visibleColumns, setVisibleColumns] = import_react.useState(() => {
		const init = {};
		columns.forEach((c) => {
			init[c.id] = true;
		});
		return init;
	});
	const filteredData = import_react.useMemo(() => {
		return data.filter((row) => {
			if (search.trim()) {
				const query = search.toLowerCase();
				let matches = false;
				if (searchableKeys && searchableKeys.length > 0) matches = searchableKeys.some((k) => {
					const val = row[k];
					return val != null && String(val).toLowerCase().includes(query);
				});
				else matches = Object.values(row).some((val) => {
					return val != null && String(val).toLowerCase().includes(query);
				});
				if (!matches) return false;
			}
			for (const [filterId, selectedVals] of Object.entries(activeFacetedFilters)) {
				if (!selectedVals || selectedVals.length === 0) continue;
				const rowVal = row[filterId];
				if (Array.isArray(rowVal)) {
					if (!selectedVals.some((v) => rowVal.includes(v))) return false;
				} else if (rowVal == null || !selectedVals.includes(String(rowVal))) return false;
			}
			return true;
		});
	}, [
		data,
		search,
		searchableKeys,
		activeFacetedFilters
	]);
	const sortedData = import_react.useMemo(() => {
		if (!sortColumn) return filteredData;
		const col = columns.find((c) => c.id === sortColumn);
		if (!col || !col.accessorKey) return filteredData;
		return [...filteredData].sort((a, b) => {
			const aVal = a[col.accessorKey];
			const bVal = b[col.accessorKey];
			if (aVal == null && bVal == null) return 0;
			if (aVal == null) return sortDirection === "asc" ? -1 : 1;
			if (bVal == null) return sortDirection === "asc" ? 1 : -1;
			if (typeof aVal === "number" && typeof bVal === "number") return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
			const strA = String(aVal).toLowerCase();
			const strB = String(bVal).toLowerCase();
			return sortDirection === "asc" ? strA.localeCompare(strB) : strB.localeCompare(strA);
		});
	}, [
		filteredData,
		sortColumn,
		sortDirection,
		columns
	]);
	const totalPages = Math.max(1, Math.ceil(sortedData.length / pageSize));
	const paginatedData = import_react.useMemo(() => {
		const start = page * pageSize;
		return sortedData.slice(start, start + pageSize);
	}, [
		sortedData,
		page,
		pageSize
	]);
	const allCurrentPageSelected = paginatedData.length > 0 && paginatedData.every((row) => selectedIds.has(keyExtractor(row)));
	const toggleSelectAll = () => {
		if (!onSelectionChange) return;
		const newSelected = new Set(selectedIds);
		if (allCurrentPageSelected) paginatedData.forEach((row) => newSelected.delete(keyExtractor(row)));
		else paginatedData.forEach((row) => newSelected.add(keyExtractor(row)));
		onSelectionChange(newSelected);
	};
	const toggleSelectRow = (id, e) => {
		e.stopPropagation();
		if (!onSelectionChange) return;
		const newSelected = new Set(selectedIds);
		if (newSelected.has(id)) newSelected.delete(id);
		else newSelected.add(id);
		onSelectionChange(newSelected);
	};
	const handleSort = (colId) => {
		if (sortColumn === colId) if (sortDirection === "asc") setSortDirection("desc");
		else {
			setSortColumn(null);
			setSortDirection("asc");
		}
		else {
			setSortColumn(colId);
			setSortDirection("asc");
		}
	};
	const toggleFacetedOption = (filterId, value) => {
		setActiveFacetedFilters((prev) => {
			const current = prev[filterId] || [];
			const updated = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
			return {
				...prev,
				[filterId]: updated
			};
		});
		setPage(0);
	};
	const clearFacetedFilter = (filterId) => {
		setActiveFacetedFilters((prev) => {
			const copy = { ...prev };
			delete copy[filterId];
			return copy;
		});
		setPage(0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("w-full space-y-4 font-sans", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 min-w-[200px] max-w-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: search,
							onChange: (e) => {
								setSearch(e.target.value);
								setPage(0);
							},
							placeholder: searchPlaceholder,
							className: "pl-9 h-9 text-xs sm:text-sm bg-card"
						}),
						search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSearch(""),
							className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
						})
					]
				}), facetedFilters.map((filter) => {
					const selectedVals = activeFacetedFilters[filter.id] || [];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							className: cn("h-9 text-xs border-dashed cursor-pointer font-medium", selectedVals.length > 0 && "border-solid border-primary/60 bg-primary/5 text-primary"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: filter.title }), selectedVals.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								className: "ml-1.5 px-1.5 py-0 text-[10px] font-mono rounded bg-primary/20 text-primary border-none",
								children: selectedVals.length
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "start",
						className: "w-48",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, {
								className: "text-xs",
								children: filter.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
							filter.options.map((opt) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
									checked: selectedVals.includes(opt.value),
									onCheckedChange: () => toggleFacetedOption(filter.id, opt.value),
									className: "text-xs cursor-pointer",
									children: opt.label
								}, opt.value);
							}),
							selectedVals.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => clearFacetedFilter(filter.id),
								className: "w-full text-center py-1.5 text-xs text-muted-foreground hover:text-foreground font-medium cursor-pointer",
								children: "Limpar filtro"
							})] })
						]
					})] }, filter.id);
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 self-end lg:self-auto",
				children: [selectable && selectedIds.size > 0 && bulkActions, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9 text-xs cursor-pointer gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "h-3.5 w-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Colunas"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
					align: "end",
					className: "w-40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, {
							className: "text-xs",
							children: "Exibir colunas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
						columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
							checked: visibleColumns[col.id] !== false,
							onCheckedChange: (checked) => setVisibleColumns((prev) => ({
								...prev,
								[col.id]: checked
							})),
							className: "text-xs cursor-pointer",
							children: col.header
						}, col.id))
					]
				})] })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-border/80 bg-card overflow-hidden shadow-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto custom-scrollbar",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full border-collapse text-left text-xs sm:text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border/70 bg-muted/40 font-semibold text-muted-foreground",
						children: [selectable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "w-10 px-3 py-3 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								checked: allCurrentPageSelected,
								onCheckedChange: toggleSelectAll,
								"aria-label": "Selecionar todos da página"
							})
						}), columns.filter((col) => visibleColumns[col.id] !== false).map((col) => {
							const isSorted = sortColumn === col.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								onClick: () => col.sortable && handleSort(col.id),
								className: cn("px-4 py-3 select-none text-xs font-bold uppercase tracking-wider", col.sortable && "cursor-pointer hover:text-foreground", col.className),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: col.header }), col.sortable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground/60",
										children: isSorted ? sortDirection === "asc" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-3.5 w-3.5 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "h-3.5 w-3.5 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, { className: "h-3 w-3 opacity-40 hover:opacity-100" })
									})]
								})
							}, col.id);
						})]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "divide-y divide-border/50",
						children: paginatedData.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: columns.length + (selectable ? 1 : 0),
							className: "py-12 text-center text-xs sm:text-sm text-muted-foreground",
							children: "Nenhum registro encontrado."
						}) }) : paginatedData.map((row) => {
							const id = keyExtractor(row);
							const isSelected = selectedIds.has(id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								onClick: () => onRowClick && onRowClick(row),
								className: cn("transition-colors", onRowClick && "cursor-pointer hover:bg-muted/40", isSelected && "bg-primary/5 hover:bg-primary/10"),
								children: [selectable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "w-10 px-3 py-2.5 text-center",
									onClick: (e) => toggleSelectRow(id, e),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
										checked: isSelected,
										"aria-label": `Selecionar item ${id}`
									})
								}), columns.filter((col) => visibleColumns[col.id] !== false).map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: cn("px-4 py-2.5 text-foreground", col.className),
									children: col.cell ? col.cell(row) : col.accessorKey ? String(row[col.accessorKey] ?? "—") : null
								}, col.id))]
							}, id);
						})
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border/60 bg-muted/20 px-4 py-3 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Linhas por página:" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: String(pageSize),
							onValueChange: (val) => {
								setPageSize(Number(val));
								setPage(0);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "h-7 w-16 text-xs bg-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: String(pageSize) })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "10",
									children: "10"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "25",
									children: "25"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "50",
									children: "50"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "100",
									children: "100"
								})
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono ml-2",
							children: sortedData.length === 0 ? "0 itens" : `${page * pageSize + 1}–${Math.min((page + 1) * pageSize, sortedData.length)} de ${sortedData.length}`
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono",
						children: [
							"Página ",
							page + 1,
							" de ",
							totalPages
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "icon",
							onClick: () => setPage((p) => Math.max(0, p - 1)),
							disabled: page === 0,
							className: "h-7 w-7 cursor-pointer",
							title: "Página anterior",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "icon",
							onClick: () => setPage((p) => Math.min(totalPages - 1, p + 1)),
							disabled: page >= totalPages - 1,
							className: "h-7 w-7 cursor-pointer",
							title: "Próxima página",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
						})]
					})]
				})]
			})]
		})]
	});
}
function ExerciseMediaUpload({ exerciseId, onMediaChange, initialMedia = [] }) {
	const [media, setMedia] = (0, import_react.useState)(initialMedia);
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [youtubeUrl, setYoutubeUrl] = (0, import_react.useState)("");
	const fileInputRef = (0, import_react.useRef)(null);
	const handleFileUpload = async (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		if (file.size > 100 * 1024 * 1024) {
			toast.error("O arquivo deve ter no máximo 100MB");
			return;
		}
		setUploading(true);
		setProgress(0);
		try {
			const { data: coachId, error: coachError } = await supabase.rpc("auth_coach_id");
			if (coachError) throw coachError;
			if (!coachId) throw new Error("Usuário não autenticado");
			const fileExt = file.name.split(".").pop();
			const fileName = `${coachId}/${Date.now()}.${fileExt}`;
			const type = file.type.startsWith("video/") ? "video" : "imagem";
			const { error: uploadError } = await supabase.storage.from("exercise-media").upload(fileName, file);
			if (uploadError) throw uploadError;
			const { data, error: urlError } = await supabase.storage.from("exercise-media").createSignedUrl(fileName, 3600 * 24 * 365 * 100);
			if (urlError) throw urlError;
			const newItem = {
				storage_path: fileName,
				url_publica: data.signedUrl,
				tipo: type
			};
			const updatedMedia = [...media, newItem];
			setMedia(updatedMedia);
			onMediaChange(updatedMedia);
			toast.success("Mídia carregada com sucesso");
		} catch (error) {
			console.error("Erro no upload:", error);
			toast.error(error.message || "Erro ao fazer upload");
		} finally {
			setUploading(false);
			setProgress(0);
			if (fileInputRef.current) fileInputRef.current.value = "";
		}
	};
	const handleYoutubeAdd = () => {
		if (!youtubeUrl.trim()) return;
		let videoId = "";
		const match = youtubeUrl.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
		if (match && match[2].length === 11) {
			videoId = match[2];
			const embedUrl = `https://www.youtube.com/embed/${videoId}`;
			const newItem = {
				storage_path: `youtube-${videoId}`,
				url_publica: embedUrl,
				tipo: "youtube"
			};
			const updatedMedia = [...media, newItem];
			setMedia(updatedMedia);
			onMediaChange(updatedMedia);
			setYoutubeUrl("");
			toast.success("Link do YouTube adicionado");
		} else toast.error("URL do YouTube inválida");
	};
	const removeMedia = async (index) => {
		const item = media[index];
		if (item.tipo !== "youtube") try {
			await supabase.storage.from("exercise-media").remove([item.storage_path]);
		} catch (err) {
			console.warn("Erro ao remover do storage (pode já ter sido removido):", err);
		}
		const updatedMedia = media.filter((_, i) => i !== index);
		setMedia(updatedMedia);
		onMediaChange(updatedMedia);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Upload de Arquivo (JPG, PNG, MP4, MOV)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					onClick: () => fileInputRef.current?.click(),
					className: "flex h-32 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border transition-colors hover:border-primary/50 hover:bg-muted/50",
					children: [uploading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center gap-2 px-4 w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
								value: progress,
								className: "h-1 w-full"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground text-center",
								children: "Enviando..."
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "mb-2 h-8 w-8 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground text-center px-4",
						children: "Clique para upload (Máx 100MB)"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "file",
						ref: fileInputRef,
						className: "hidden",
						accept: "image/*,video/*",
						onChange: handleFileUpload,
						disabled: uploading
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Link do YouTube" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-32 flex-col items-center justify-center rounded-lg border border-border bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "mb-2 h-8 w-8 text-red-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex w-full gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							placeholder: "Cole a URL do vídeo...",
							value: youtubeUrl,
							onChange: (e) => setYoutubeUrl(e.target.value),
							onKeyDown: (e) => e.key === "Enter" && handleYoutubeAdd(),
							className: "h-8 text-xs"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: handleYoutubeAdd,
							className: "h-8",
							children: "Add"
						})]
					})]
				})]
			})]
		}), media.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
			children: media.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group relative overflow-hidden rounded-lg border border-border bg-card aspect-video",
				children: [item.tipo === "youtube" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					src: item.url_publica,
					className: "h-full w-full",
					allowFullScreen: true
				}) : item.tipo === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					src: item.url_publica,
					controls: true,
					className: "h-full w-full object-contain bg-black"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.url_publica,
					alt: "Mídia do exercício",
					loading: "lazy",
					className: "h-full w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "destructive",
					size: "icon",
					className: "absolute right-2 top-2 h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100",
					onClick: () => removeMedia(index),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
				})]
			}, index))
		})]
	});
}
function DuplicateResolverDialog({ open, onOpenChange, typedName, onRename, candidates, isEdit, editingId, coachId, persist, onPersisted, onKeep, onMerged }) {
	const [busyId, setBusyId] = (0, import_react.useState)(null);
	const [savingAnyway, setSavingAnyway] = (0, import_react.useState)(false);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)(null);
	const [renameValue, setRenameValue] = (0, import_react.useState)("");
	const [renameOpen, setRenameOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (open) {
			setErrorMsg(null);
			setRenameValue(`${typedName.trim()} (meu)`);
			setRenameOpen(false);
		}
	}, [open, typedName]);
	async function saveAnyway() {
		setSavingAnyway(true);
		setErrorMsg(null);
		const err = await persist();
		setSavingAnyway(false);
		if (err) setErrorMsg(err);
		else onPersisted();
	}
	async function renameAndSave() {
		const next = renameValue.trim();
		if (!next) return;
		onRename(next);
		setSavingAnyway(true);
		setErrorMsg(null);
		await new Promise((r) => setTimeout(r, 0));
		const err = await persist();
		setSavingAnyway(false);
		if (err) setErrorMsg(err);
		else onPersisted();
	}
	async function fuseIntoExisting(existing) {
		if (!isEdit || !editingId) {
			onKeep(existing);
			return;
		}
		setBusyId(existing.id);
		setErrorMsg(null);
		try {
			const { error } = await supabase.rpc("merge_exercises", {
				_keeper_id: existing.id,
				_duplicate_ids: [editingId]
			});
			if (error) throw error;
			toast.success("Exercícios fundidos");
			onMerged();
		} catch (e) {
			setErrorMsg(e?.message ?? "Falha ao fundir");
		} finally {
			setBusyId(null);
		}
	}
	const hasGlobal = candidates.some((c) => !c.coach_id);
	const busy = savingAnyway || !!busyId;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] w-[calc(100vw-1.5rem)] max-w-lg overflow-hidden p-0 sm:w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b border-border/60 px-5 py-4 sm:px-6 sm:py-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "text-base font-semibold leading-tight tracking-tight sm:text-lg",
								children: "Já existe algo parecido"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted-foreground",
								children: [
									hasGlobal ? "Esse nome já existe no banco base. Você pode usar o exercício existente ou criar uma versão sua." : "Você já tem um exercício com esse nome.",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-foreground/80",
										children: [
											"Equivalente a",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-medium text-foreground",
												children: [
													"“",
													typedName.trim(),
													"”"
												]
											}),
											"."
										]
									})
								]
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-h-[48vh] space-y-2 overflow-y-auto px-5 py-4 sm:px-6",
					children: [
						candidates.map((ex) => {
							const isGlobal = !ex.coach_id;
							const canFuseInto = isEdit && !isGlobal;
							const rowBusy = busyId === ex.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "group rounded-xl border border-border/60 bg-card p-3.5 transition-all duration-200 hover:border-primary/50 hover:bg-primary/[0.02] sm:p-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate text-sm font-semibold text-foreground",
												children: ex.nome_pt
											}), isGlobal && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
												variant: "outline",
												className: "shrink-0 gap-1 border-border/70 text-[10px] font-medium uppercase tracking-wider text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-3 w-3" }), " Global"]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-1.5 flex flex-wrap gap-1",
											children: [(ex.equipamento ?? []).map((eq) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												className: "border-transparent bg-primary/10 text-[10px] font-medium text-primary hover:bg-primary/15",
												children: eq
											}, eq)), (ex.metodologias ?? []).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "secondary",
												className: "text-[10px] font-medium",
												children: METHODOLOGY_LABEL[m]
											}, m))]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex shrink-0 flex-wrap gap-2 sm:justify-end",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "outline",
												size: "sm",
												className: "h-8 transition-colors duration-150",
												onClick: () => onKeep(ex),
												disabled: busy,
												children: "Usar este"
											}),
											canFuseInto && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "default",
												size: "sm",
												className: "h-8 gap-1.5 transition-colors duration-150",
												onClick: () => fuseIntoExisting(ex),
												disabled: busy || !coachId,
												children: rowBusy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }), "Fundindo…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitMerge, { className: "h-3.5 w-3.5" }), "Fundir neste"] })
											}),
											(!isGlobal || isGlobal && coachId) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												variant: "ghost",
												size: "sm",
												className: "h-8 text-destructive hover:bg-destructive/10 hover:text-destructive",
												onClick: async () => {
													if (confirm(`Deseja excluir permanentemente "${ex.nome_pt}"?`)) {
														setBusyId(ex.id);
														try {
															const { error } = await supabase.from("exercises").delete().eq("id", ex.id);
															if (error) throw error;
															toast.success("Exercício excluído");
															onMerged();
														} catch (e) {
															toast.error(e.message);
														} finally {
															setBusyId(null);
														}
													}
												},
												disabled: busy,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-1.5 h-3.5 w-3.5" }), "Excluir duplicado"]
											})
										]
									})]
								})
							}, ex.id);
						}),
						errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							role: "alert",
							className: "rounded-lg border border-destructive/30 bg-destructive/10 px-3.5 py-2.5 text-xs leading-relaxed text-destructive",
							children: errorMsg
						}),
						renameOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border/60 bg-muted/30 p-3.5 sm:p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "rename-input",
								className: "text-xs font-medium text-muted-foreground",
								children: "Novo nome"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1.5 flex flex-col gap-2 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "rename-input",
									value: renameValue,
									onChange: (e) => setRenameValue(e.target.value),
									className: "h-9",
									autoFocus: true,
									onKeyDown: (e) => {
										if (e.key === "Enter") {
											e.preventDefault();
											renameAndSave();
										}
									}
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									className: "h-9 shrink-0",
									onClick: () => void renameAndSave(),
									disabled: busy || !renameValue.trim(),
									children: savingAnyway ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-1.5 h-3.5 w-3.5 animate-spin" }), "Salvando…"] }) : "Renomear e salvar"
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "flex-col-reverse gap-2 border-t border-border/60 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						className: "h-9 sm:w-auto",
						onClick: () => onOpenChange(false),
						disabled: busy,
						children: "Voltar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							className: "h-9",
							onClick: () => setRenameOpen((v) => !v),
							disabled: busy,
							children: renameOpen ? "Ocultar renomear" : "Ajustar nome"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "h-9 gap-1.5",
							onClick: () => void saveAnyway(),
							disabled: busy,
							children: savingAnyway && !renameOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }), "Salvando…"] }) : "Criar assim mesmo"
						})]
					})]
				})
			]
		})
	});
}
var EQUIPAMENTOS = [
	"Kettlebell",
	"Ginásticos",
	"Mobilidade",
	"Barbell",
	"Dumbbell",
	"Alternativos Musculação",
	"Objetos Alternativos"
];
var METHODS$2 = Object.keys(METHODOLOGY_LABEL);
function normalizeName(s) {
	return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, " ").trim();
}
function ExerciseEditorDialog({ open, onOpenChange, editing, coachId, existingExercises, onOpenExisting }) {
	const qc = useQueryClient();
	const [nome, setNome] = (0, import_react.useState)("");
	const [padrao, setPadrao] = (0, import_react.useState)("");
	const [metods, setMetods] = (0, import_react.useState)([]);
	const [equip, setEquip] = (0, import_react.useState)("");
	const [unilateral, setUnilateral] = (0, import_react.useState)(false);
	const [instr, setInstr] = (0, import_react.useState)("");
	const [media, setMedia] = (0, import_react.useState)([]);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [duplicates, setDuplicates] = (0, import_react.useState)(null);
	const isEdit = !!editing;
	(0, import_react.useEffect)(() => {
		if (!open) return;
		setNome(editing?.nome_pt ?? "");
		setPadrao(editing?.padrao_movimento ?? "");
		setMetods(editing?.metodologias ?? []);
		setEquip((editing?.equipamento ?? [])[0] ?? "");
		setUnilateral(editing?.unilateral ?? false);
		setInstr(editing?.instrucoes ?? "");
		setMedia((editing?.exercise_media ?? []).map((m) => ({
			...m,
			tipo: m.storage_path?.startsWith("youtube-") ? "youtube" : m.tipo
		})));
		setDuplicates(null);
	}, [open, editing]);
	function findDuplicatesFor(name) {
		const target = normalizeName(name);
		if (!target) return [];
		return existingExercises.filter((ex) => {
			if (editing?.id && ex.id === editing.id) return false;
			return normalizeName(ex.nome_pt ?? "") === target;
		});
	}
	async function persist() {
		if (!coachId) {
			const m = "Perfil de treinador não encontrado";
			toast.error(m);
			return m;
		}
		setSaving(true);
		try {
			let exerciseId = editing?.id;
			let clonedFromShared = false;
			if (isEdit) {
				const { data: updated, error } = await supabase.from("exercises").update({
					nome_pt: nome,
					padrao_movimento: padrao || null,
					metodologias: metods,
					equipamento: equip ? [equip] : [],
					unilateral,
					instrucoes: instr || null,
					atualizado_em: (/* @__PURE__ */ new Date()).toISOString()
				}).eq("id", editing.id).select("id");
				if (error) throw error;
				if (!updated || updated.length === 0) {
					const { data: clone, error: cloneError } = await supabase.from("exercises").insert({
						coach_id: coachId,
						nome_pt: nome,
						padrao_movimento: padrao || null,
						metodologias: metods,
						equipamento: equip ? [equip] : [],
						unilateral,
						instrucoes: instr || null
					}).select("id").single();
					if (cloneError) throw cloneError;
					exerciseId = clone.id;
					clonedFromShared = true;
				}
			} else {
				const { data, error } = await supabase.from("exercises").insert({
					coach_id: coachId,
					nome_pt: nome,
					padrao_movimento: padrao || null,
					metodologias: metods,
					equipamento: equip ? [equip] : [],
					unilateral,
					instrucoes: instr || null
				}).select("id").single();
				if (error) throw error;
				exerciseId = data.id;
			}
			if (exerciseId) {
				await supabase.from("exercise_media").delete().eq("exercise_id", exerciseId);
				if (media.length > 0) {
					const { error: mediaError } = await supabase.from("exercise_media").insert(media.map((m) => ({
						exercise_id: exerciseId,
						storage_path: m.storage_path,
						url_publica: m.url_publica,
						tipo: m.tipo === "youtube" ? "video" : m.tipo
					})));
					if (mediaError) throw mediaError;
				}
			}
			toast.success(clonedFromShared ? "Cópia personalizada criada com suas alterações" : isEdit ? "Exercício atualizado com sucesso" : "Exercício criado com sucesso");
			qc.invalidateQueries({ queryKey: ["exercises"] });
			onOpenChange(false);
			return null;
		} catch (e) {
			const raw = e?.message ?? "Falha ao salvar";
			const friendly = e?.code === "42501" || /row-level security|row level security/i.test(raw) ? "Erro de permissão ao salvar. Verifique se o nome não está em conflito." : raw;
			if (!duplicates) toast.error(friendly);
			return friendly;
		} finally {
			setSaving(false);
		}
	}
	function save() {
		const dups = findDuplicatesFor(nome);
		if (dups.length > 0) {
			setDuplicates(dups);
			return;
		}
		persist();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[90vh] max-w-lg overflow-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: isEdit ? "Editar exercício" : "Novo exercício" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 py-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Nome (PT)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: nome,
							onChange: (e) => setNome(e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Padrão de movimento" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							placeholder: "hinge, squat, push, pull, core...",
							value: padrao,
							onChange: (e) => setPadrao(e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Equipamento" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: equip || "nenhum",
							onValueChange: (v) => setEquip(v === "nenhum" ? "" : v),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "mt-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Selecione..." })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "nenhum",
								children: "Sem equipamento"
							}), EQUIPAMENTOS.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: e,
								children: e
							}, e))] })]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Modalidades" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 grid grid-cols-2 gap-2",
							children: METHODS$2.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
									checked: metods.includes(m),
									onCheckedChange: (v) => {
										setMetods((prev) => v ? [...prev, m] : prev.filter((x) => x !== m));
									}
								}), METHODOLOGY_LABEL[m]]
							}, m))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								checked: unilateral,
								onCheckedChange: (v) => setUnilateral(Boolean(v))
							}), "Exercício unilateral"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Instruções" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							rows: 3,
							value: instr,
							onChange: (e) => setInstr(e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "mb-2 block",
								children: "Mídia (Fotos, Vídeos, YouTube)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExerciseMediaUpload, {
								exerciseId: editing?.id,
								initialMedia: media,
								onMediaChange: setMedia
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => onOpenChange(false),
					children: "Cancelar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: save,
					disabled: saving || !nome.trim(),
					children: saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), " Salvando…"] }) : "Salvar"
				})] })
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DuplicateResolverDialog, {
		open: !!duplicates,
		onOpenChange: (v) => !v && setDuplicates(null),
		typedName: nome,
		onRename: (newName) => {
			setNome(newName);
			const dups = findDuplicatesFor(newName);
			if (dups.length === 0) setDuplicates(null);
			else setDuplicates(dups);
		},
		candidates: duplicates ?? [],
		isEdit,
		editingId: editing?.id,
		coachId,
		persist,
		onPersisted: () => setDuplicates(null),
		onKeep: (existing) => {
			setDuplicates(null);
			onOpenChange(false);
			onOpenExisting(existing);
		},
		onMerged: () => {
			setDuplicates(null);
			qc.invalidateQueries({ queryKey: ["exercises"] });
			onOpenChange(false);
		}
	})] });
}
var METHODS$1 = Object.keys(METHODOLOGY_LABEL);
var MODE_LABEL = {
	manter: "Manter",
	adicionar: "Adicionar",
	remover: "Remover",
	substituir: "Substituir"
};
function applyMode(current, mode, values) {
	const cur = Array.from(new Set(current ?? []));
	const val = Array.from(new Set(values));
	switch (mode) {
		case "manter": return cur;
		case "adicionar": return Array.from(new Set([...cur, ...val]));
		case "remover": return cur.filter((x) => !val.includes(x));
		case "substituir": return val;
	}
}
function ModeTabs({ value, onChange, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "tablist",
		className: "inline-flex w-full items-center gap-1 rounded-lg border border-border/60 bg-muted/60 p-1",
		children: [
			"manter",
			"adicionar",
			"remover",
			"substituir"
		].map((m) => {
			const active = value === m;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				role: "tab",
				"aria-selected": active,
				disabled,
				onClick: () => onChange(m),
				className: "flex-1 rounded-md px-2.5 py-1.5 text-xs font-medium outline-none transition-all duration-150 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 " + (active ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
				children: MODE_LABEL[m]
			}, m);
		})
	});
}
function BulkChip({ label, active, disabled, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		disabled,
		"aria-pressed": active,
		className: "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium outline-none transition-all duration-150 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 " + (active ? "border-primary bg-primary text-primary-foreground shadow-sm" : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"),
		children: label
	});
}
function BulkEditDialog({ open, onOpenChange, selectedIds, exercises, coachId, onApplied }) {
	const [metMode, setMetMode] = (0, import_react.useState)("manter");
	const [metValues, setMetValues] = (0, import_react.useState)([]);
	const [equipMode, setEquipMode] = (0, import_react.useState)("manter");
	const [equipValues, setEquipValues] = (0, import_react.useState)([]);
	const [padraoMode, setPadraoMode] = (0, import_react.useState)("manter");
	const [padraoValue, setPadraoValue] = (0, import_react.useState)("");
	const [unilateralMode, setUnilateralMode] = (0, import_react.useState)("manter");
	const [showDeleteConfirm, setShowDeleteConfirm] = (0, import_react.useState)(false);
	const [applying, setApplying] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (open) {
			setMetMode("manter");
			setMetValues([]);
			setEquipMode("manter");
			setEquipValues([]);
			setPadraoMode("manter");
			setPadraoValue("");
			setUnilateralMode("manter");
			setShowDeleteConfirm(false);
			setProgress(0);
		}
	}, [open]);
	const willChange = metMode !== "manter" && (metMode === "substituir" || metValues.length > 0) || equipMode !== "manter" && (equipMode === "substituir" || equipValues.length > 0) || padraoMode !== "manter" && (padraoMode === "substituir" || padraoValue.trim().length > 0) || unilateralMode !== "manter";
	const byId = (0, import_react.useMemo)(() => {
		const m = /* @__PURE__ */ new Map();
		for (const ex of exercises) m.set(ex.id, ex);
		return m;
	}, [exercises]);
	const globalCount = (0, import_react.useMemo)(() => selectedIds.reduce((n, id) => n + (byId.get(id) && !byId.get(id).coach_id ? 1 : 0), 0), [selectedIds, byId]);
	async function apply() {
		if (!willChange || selectedIds.length === 0) return;
		if (globalCount > 0 && !coachId) {
			toast.error("Perfil de treinador não encontrado");
			return;
		}
		setApplying(true);
		setProgress(0);
		const batchSize = 20;
		let updated = 0;
		let cloned = 0;
		let failed = 0;
		let firstError = null;
		try {
			const resolved = new Map(byId);
			const missing = selectedIds.filter((id) => !resolved.has(id));
			for (let i = 0; i < missing.length; i += 500) {
				const chunk = missing.slice(i, i + 500);
				const { data, error } = await supabase.from("exercises").select("id, coach_id, nome_pt, metodologias, equipamento, padrao_movimento, unilateral, instrucoes").in("id", chunk);
				if (error) throw error;
				for (const row of data ?? []) resolved.set(row.id, row);
			}
			for (let i = 0; i < selectedIds.length; i += batchSize) {
				const batch = selectedIds.slice(i, i + batchSize);
				const results = await Promise.all(batch.map(async (id) => {
					const ex = resolved.get(id);
					if (!ex) return { kind: "fail" };
					const nextMet = metMode !== "manter" ? applyMode(ex.metodologias ?? [], metMode, metValues) : ex.metodologias ?? [];
					const nextEquip = equipMode !== "manter" ? applyMode(ex.equipamento ?? [], equipMode, equipValues) : ex.equipamento ?? [];
					const nextPadrao = padraoMode === "substituir" ? padraoValue : padraoMode === "adicionar" ? ex.padrao_movimento ? `${ex.padrao_movimento}, ${padraoValue}` : padraoValue : ex.padrao_movimento;
					const nextUnilateral = unilateralMode === "sim" ? true : unilateralMode === "nao" ? false : ex.unilateral;
					if (!ex.coach_id) {
						const { error } = await supabase.from("exercises").insert({
							coach_id: coachId,
							nome_pt: ex.nome_pt,
							padrao_movimento: nextPadrao || null,
							metodologias: nextMet,
							equipamento: nextEquip,
							unilateral: nextUnilateral ?? false,
							instrucoes: ex.instrucoes ?? null
						});
						return {
							kind: error ? "fail" : "cloned",
							message: error?.message
						};
					}
					const patch = {
						atualizado_em: (/* @__PURE__ */ new Date()).toISOString(),
						padrao_movimento: nextPadrao || null,
						unilateral: nextUnilateral
					};
					if (metMode !== "manter") patch.metodologias = nextMet;
					if (equipMode !== "manter") patch.equipamento = nextEquip;
					const { error } = await supabase.from("exercises").update(patch).eq("id", id);
					return {
						kind: error ? "fail" : "updated",
						message: error?.message
					};
				}));
				for (const r of results) if (r.kind === "updated") updated += 1;
				else if (r.kind === "cloned") cloned += 1;
				else {
					failed += 1;
					if (!firstError && r.message) firstError = r.message;
				}
				setProgress(Math.round((i + batch.length) / selectedIds.length * 100));
			}
			const okParts = [];
			if (updated > 0) okParts.push(`${updated} atualizado${updated === 1 ? "" : "s"}`);
			if (cloned > 0) okParts.push(`${cloned} clonado${cloned === 1 ? "" : "s"} no seu catálogo`);
			const okMsg = okParts.join(" · ") || "Nenhum exercício alterado";
			if (failed === 0) toast.success(okMsg);
			else if (updated + cloned === 0) toast.error(firstError ? `Nenhum exercício atualizado — ${firstError}` : `Nenhum exercício atualizado`);
			else toast.warning(`${okMsg} · ${failed} falharam${firstError ? ` — ${firstError}` : ""}`);
			onApplied();
		} catch (e) {
			toast.error(e?.message ?? "Falha no ajuste em massa");
		} finally {
			setApplying(false);
		}
	}
	async function bulkDelete() {
		if (selectedIds.length === 0) return;
		setApplying(true);
		setProgress(0);
		try {
			const { error } = await supabase.from("exercises").delete().in("id", selectedIds).not("coach_id", "is", null);
			if (error) throw error;
			toast.success(`${selectedIds.length} exercícios removidos`);
			onApplied();
		} catch (e) {
			toast.error(e?.message ?? "Falha ao excluir em massa");
		} finally {
			setApplying(false);
			setShowDeleteConfirm(false);
		}
	}
	function summary() {
		const parts = [];
		if (metMode !== "manter") {
			const labels = metValues.map((m) => METHODOLOGY_LABEL[m]).join(", ") || "—";
			parts.push(`Metodologias: ${MODE_LABEL[metMode]} (${labels})`);
		}
		if (equipMode !== "manter") {
			const labels = equipValues.join(", ") || "—";
			parts.push(`Equipamento: ${MODE_LABEL[equipMode]} (${labels})`);
		}
		if (padraoMode !== "manter") parts.push(`Padrão: ${MODE_LABEL[padraoMode]} ("${padraoValue}")`);
		if (unilateralMode !== "manter") parts.push(`Unilateral: ${unilateralMode}`);
		return parts.length > 0 ? parts.join(" · ") : "Nenhuma alteração selecionada";
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (v) => !applying && onOpenChange(v),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] w-[calc(100vw-1.5rem)] max-w-lg overflow-hidden p-0 sm:w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b border-border/60 px-5 py-4 sm:px-6 sm:py-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "text-base font-semibold leading-tight tracking-tight sm:text-lg",
								children: "Ajuste em massa"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-foreground",
										children: selectedIds.length
									}),
									" ",
									"exercício",
									selectedIds.length === 1 ? "" : "s",
									" selecionado",
									selectedIds.length === 1 ? "" : "s",
									". Escolha o modo e os valores para cada grupo."
								]
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-h-[52vh] space-y-6 overflow-y-auto px-5 py-5 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-semibold text-foreground",
										children: "Modalidades"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: metMode === "manter" ? "sem alterar" : `${metValues.length} selecionada${metValues.length === 1 ? "" : "s"}`
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeTabs, {
									value: metMode,
									onChange: setMetMode,
									disabled: applying
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-1.5",
									children: METHODS$1.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BulkChip, {
										label: METHODOLOGY_LABEL[m],
										active: metValues.includes(m),
										disabled: metMode === "manter" || applying,
										onClick: () => setMetValues((prev) => prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m])
									}, m))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-border/60" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-semibold text-foreground",
										children: "Equipamento"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: equipMode === "manter" ? "sem alterar" : `${equipValues.length} selecionado${equipValues.length === 1 ? "" : "s"}`
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeTabs, {
									value: equipMode,
									onChange: setEquipMode,
									disabled: applying
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-1.5",
									children: EQUIPAMENTOS.map((eq) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BulkChip, {
										label: eq,
										active: equipValues.includes(eq),
										disabled: equipMode === "manter" || applying,
										onClick: () => setEquipValues((prev) => prev.includes(eq) ? prev.filter((x) => x !== eq) : [...prev, eq])
									}, eq))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-semibold text-foreground",
									children: "Padrão de Movimento"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeTabs, {
									value: padraoMode,
									onChange: setPadraoMode,
									disabled: applying
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									placeholder: "Ex: squat, hinge, push...",
									value: padraoValue,
									onChange: (e) => setPadraoValue(e.target.value),
									disabled: padraoMode === "manter" || applying
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-semibold text-foreground",
								children: "Unilateral"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2",
								children: [
									"manter",
									"sim",
									"nao"
								].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: unilateralMode === m ? "default" : "outline",
									size: "sm",
									onClick: () => setUnilateralMode(m),
									className: "flex-1 capitalize",
									disabled: applying,
									children: m
								}, m))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border/60 bg-muted/40 px-3.5 py-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
								children: "Prévia das Alterações"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs leading-relaxed text-foreground/90",
								children: summary()
							})]
						}),
						applying && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
								value: progress,
								className: "h-1.5"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] text-muted-foreground",
								children: [
									"Processando... ",
									progress,
									"%"
								]
							})]
						}),
						!applying && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-2",
							children: showDeleteConfirm ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2 rounded-lg border border-destructive/50 bg-destructive/5 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium text-destructive",
									children: "Tem certeza? Isso removerá permanentemente os exercícios selecionados que foram criados por você."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "destructive",
										size: "sm",
										className: "flex-1",
										onClick: bulkDelete,
										children: "Confirmar Exclusão"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "sm",
										onClick: () => setShowDeleteConfirm(false),
										children: "Cancelar"
									})]
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								className: "w-full text-destructive hover:bg-destructive/10 hover:text-destructive",
								onClick: () => setShowDeleteConfirm(true),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-2 h-4 w-4" }), "Excluir Selecionados"]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "flex-col-reverse gap-2 border-t border-border/60 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						className: "h-9",
						onClick: () => onOpenChange(false),
						disabled: applying,
						children: "Fechar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						className: "h-9 gap-1.5",
						onClick: () => void apply(),
						disabled: !willChange || applying || selectedIds.length === 0,
						children: applying ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }), "Aplicando…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "h-3.5 w-3.5" }), "Salvar Alterações"] })
					})]
				})
			]
		})
	});
}
var METHODS = Object.keys(METHODOLOGY_LABEL);
function ExerciciosPage() {
	const { data: coach } = useCoach();
	const navigate = useNavigate();
	const [q, setQ] = (0, import_react.useState)("");
	const [debouncedQ, setDebouncedQ] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const handler = setTimeout(() => {
			setDebouncedQ(q);
		}, 300);
		return () => clearTimeout(handler);
	}, [q]);
	const [metFilter, setMetFilter] = (0, import_react.useState)("todos");
	const [equipFilter, setEquipFilter] = (0, import_react.useState)("todos");
	const [untaggedOnly, setUntaggedOnly] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [selectionMode, setSelectionMode] = (0, import_react.useState)(false);
	const [selected, setSelected] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [bulkOpen, setBulkOpen] = (0, import_react.useState)(false);
	const [selectingAll, setSelectingAll] = (0, import_react.useState)(false);
	const [viewMode, setViewMode] = (0, import_react.useState)("cards");
	const qc = useQueryClient();
	const { data: exercises = [], isPending, isFetching } = useQuery({
		queryKey: [
			"exercises",
			debouncedQ,
			metFilter,
			equipFilter,
			untaggedOnly
		],
		placeholderData: (previousData) => previousData,
		queryFn: async () => {
			let query = supabase.from("exercises").select("*, exercise_media(*)").order("nome_pt");
			if (debouncedQ.trim()) query = query.ilike("nome_pt", `%${debouncedQ.trim()}%`);
			if (metFilter !== "todos") query = query.contains("metodologias", [metFilter]);
			if (equipFilter !== "todos") query = query.contains("equipamento", [equipFilter]);
			if (untaggedOnly) query = query.filter("metodologias", "eq", "{}").filter("equipamento", "eq", "{}");
			const { data, error } = await query;
			if (error) throw error;
			return data;
		}
	});
	const { data: tagStats } = useQuery({
		queryKey: ["exercises", "tag-stats"],
		queryFn: async () => {
			const total = await supabase.from("exercises").select("id", {
				count: "exact",
				head: true
			});
			const untagged = await supabase.from("exercises").select("id", {
				count: "exact",
				head: true
			}).filter("metodologias", "eq", "{}").filter("equipamento", "eq", "{}");
			return {
				total: total.count ?? 0,
				untagged: untagged.count ?? 0
			};
		}
	});
	const equipCounts = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		for (const ex of exercises) {
			const arr = ex.equipamento ?? [];
			for (const e of arr) map.set(e, (map.get(e) ?? 0) + 1);
		}
		return map;
	}, [exercises]);
	const del = useMutation({
		mutationFn: async (id) => {
			const { error } = await supabase.from("exercises").delete().eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success("Exercício removido definitivamente");
			qc.invalidateQueries({ queryKey: ["exercises"] });
			qc.invalidateQueries({ queryKey: ["exercises", "tag-stats"] });
		},
		onError: (e) => {
			console.error("Erro ao deletar exercício:", e);
			toast.error(e.message || "Erro ao remover exercício.");
		}
	});
	const visibleIds = (0, import_react.useMemo)(() => exercises.map((ex) => ex.id), [exercises]);
	const allVisibleSelected = visibleIds.length > 0 && visibleIds.every((id) => selected.has(id));
	function toggleSelected(id) {
		setSelected((prev) => {
			const next = new Set(prev);
			if (next.has(id)) next.delete(id);
			else next.add(id);
			return next;
		});
	}
	function selectAllVisible() {
		setSelected((prev) => {
			const next = new Set(prev);
			for (const id of visibleIds) next.add(id);
			return next;
		});
	}
	async function selectAllInDatabase(opts = {}) {
		setSelectingAll(true);
		try {
			let query = supabase.from("exercises").select("id,coach_id");
			if (opts.onlyMine && coach?.id) query = query.eq("coach_id", coach.id);
			const { data, error } = await query;
			if (error) throw error;
			const ids = (data ?? []).map((r) => r.id);
			setSelected(new Set(ids));
			toast.success(opts.onlyMine ? `${ids.length} exercícios seus selecionados` : `${ids.length} exercícios selecionados`);
		} catch (e) {
			toast.error(e?.message ?? "Falha ao selecionar");
		} finally {
			setSelectingAll(false);
		}
	}
	function clearSelection() {
		setSelected(/* @__PURE__ */ new Set());
	}
	function exitSelectionMode() {
		setSelectionMode(false);
		clearSelection();
	}
	const gridColumns = (0, import_react.useMemo)(() => [
		{
			id: "nome",
			header: "Exercício",
			accessorKey: "nome_pt",
			sortable: true,
			cell: (ex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col min-w-[200px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-foreground hover:text-primary transition-colors cursor-pointer",
					onClick: (e) => {
						e.stopPropagation();
						setEditing(ex);
						setOpen(true);
					},
					children: ex.nome_pt
				}), ex.nome_en && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground italic",
					children: ex.nome_en
				})]
			})
		},
		{
			id: "metodologias",
			header: "Modalidades",
			cell: (ex) => {
				const mets = ex.metodologias ?? [];
				if (mets.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground/50",
					children: "—"
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1 max-w-[220px]",
					children: mets.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						className: "text-[10px] px-1.5 py-0",
						children: METHODOLOGY_LABEL[m] ?? m
					}, m))
				});
			}
		},
		{
			id: "equipamento",
			header: "Equipamento",
			cell: (ex) => {
				const equips = ex.equipamento ?? [];
				if (equips.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground/50",
					children: "—"
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1 max-w-[200px]",
					children: equips.map((eq) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "text-[10px] px-1.5 py-0 text-muted-foreground",
						children: eq
					}, eq))
				});
			}
		},
		{
			id: "acoes",
			header: "Ações",
			className: "text-right w-[90px]",
			cell: (ex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-end gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "icon",
					variant: "ghost",
					className: "h-8 w-8 text-muted-foreground hover:text-foreground cursor-pointer",
					onClick: (e) => {
						e.stopPropagation();
						setEditing(ex);
						setOpen(true);
					},
					title: "Editar exercício",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3.5 w-3.5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "icon",
					variant: "ghost",
					className: "h-8 w-8 text-destructive/70 hover:text-destructive hover:bg-destructive/10 cursor-pointer",
					disabled: del.isPending,
					onClick: (e) => {
						e.stopPropagation();
						if (window.confirm(`Tem certeza que deseja excluir "${ex.nome_pt}"?`)) del.mutate(ex.id);
					},
					title: "Excluir exercício",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
				})]
			})
		}
	], [del.isPending]);
	const isDuplicados = useLocation().pathname.includes("/duplicados");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl min-w-0 px-3 py-4 sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold tracking-tight sm:text-3xl break-words",
					children: "Banco de Exercícios"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground",
					children: "Acesso completo ao banco de dados pessoal de exercícios. Gerencie, edite e organize todos os movimentos utilizados na prescrição de treinos de forma independente."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex w-full sm:w-auto flex-wrap sm:flex-nowrap gap-2 items-center justify-stretch sm:justify-end",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center border rounded-lg p-0.5 bg-muted/40 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: viewMode === "cards" ? "secondary" : "ghost",
							size: "sm",
							className: "h-9 px-2.5 gap-1.5 cursor-pointer",
							onClick: () => setViewMode("cards"),
							title: "Visualização em Cards",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden md:inline text-xs",
								children: "Cards"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: viewMode === "grid" ? "secondary" : "ghost",
							size: "sm",
							className: "h-9 px-2.5 gap-1.5 cursor-pointer",
							onClick: () => setViewMode("grid"),
							title: "Visualização em Tabela (Data Grid)",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden md:inline text-xs",
								children: "Tabela"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: selectionMode ? "secondary" : "ghost",
						onClick: () => {
							if (selectionMode) exitSelectionMode();
							else setSelectionMode(true);
						},
						className: "flex-1 sm:flex-initial min-h-[40px] gap-2 cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCheckBig, { className: "h-4 w-4" }), selectionMode ? "Cancelar seleção" : "Selecionar"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => {
							navigate({ to: "/app/exercicios/duplicados" });
						},
						className: "flex-1 sm:flex-initial min-h-[40px] gap-2 cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitMerge, { className: "h-4 w-4" }), "Limpar duplicados"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => {
							setEditing(null);
							setOpen(true);
						},
						className: "w-full sm:w-auto min-h-[40px] cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " Novo exercício"]
					})
				]
			})]
		}), isDuplicados ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			tagStats && tagStats.total > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagCoverage, {
				total: tagStats.total,
				untagged: tagStats.untagged,
				active: untaggedOnly,
				onToggle: () => setUntaggedOnly((v) => !v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex flex-col gap-2.5 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Buscar por nome...",
						className: "pl-9",
						value: q,
						onChange: (e) => setQ(e.target.value)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: metFilter,
					onValueChange: (v) => setMetFilter(v),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "w-full sm:w-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "todos",
						children: "Todas as modalidades"
					}), METHODS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: m,
						children: METHODOLOGY_LABEL[m]
					}, m))] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "group",
				"aria-label": "Filtrar por equipamento",
				className: "mb-6 -mx-3 flex flex-nowrap gap-1.5 overflow-x-auto px-3 pb-1.5 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 no-scrollbar",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EquipChip, {
					label: "Todos",
					count: tagStats?.total,
					active: equipFilter === "todos",
					onClick: () => setEquipFilter("todos")
				}), EQUIPAMENTOS.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EquipChip, {
					label: e,
					count: equipCounts.get(e),
					active: equipFilter === e,
					onClick: () => setEquipFilter(equipFilter === e ? "todos" : e)
				}, e))]
			}),
			isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: [
					1,
					2,
					3,
					4,
					5,
					6
				].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "flex items-center justify-between p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-1/3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-24" })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-16" })]
				}, n))
			}) : exercises.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-12 text-center border-dashed",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, { className: "h-6 w-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 text-base font-semibold",
						children: "Nenhum exercício encontrado"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground max-w-md mx-auto",
						children: q || metFilter !== "todos" || equipFilter !== "todos" || untaggedOnly ? "Nenhum exercício corresponde aos filtros ativos. Tente limpar os filtros ou cadastrar um novo movimento." : "Seu catálogo está vazio. Cadastre seu primeiro exercício para começar a prescrever treinos."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex justify-center gap-2",
						children: q || metFilter !== "todos" || equipFilter !== "todos" || untaggedOnly ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => {
								setQ("");
								setMetFilter("todos");
								setEquipFilter("todos");
								setUntaggedOnly(false);
							},
							children: "Limpar filtros"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: () => {
								setEditing(null);
								setOpen(true);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1.5 h-4 w-4" }), " Cadastrar primeiro exercício"]
						})
					})
				]
			}) : viewMode === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: selectionMode && selected.size > 0 ? "pb-28 sm:pb-24" : "",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataGrid, {
					data: exercises,
					columns: gridColumns,
					keyExtractor: (ex) => ex.id,
					searchPlaceholder: "Buscar na tabela de exercícios...",
					searchableKeys: ["nome_pt", "nome_en"],
					selectable: selectionMode,
					selectedIds: selected,
					onSelectionChange: setSelected,
					onRowClick: (ex) => {
						if (selectionMode) toggleSelected(ex.id);
						else {
							setEditing(ex);
							setOpen(true);
						}
					}
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [selectionMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex flex-wrap items-center gap-2 rounded-lg border border-border/60 bg-muted/40 px-3 py-2 text-sm shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mr-1 font-medium text-foreground",
					children: [
						selected.size,
						" selecionado",
						selected.size === 1 ? "" : "s"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex overflow-hidden rounded-md border border-border/70 bg-background shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled: selectingAll,
						onClick: allVisibleSelected ? clearSelection : selectAllVisible,
						className: "inline-flex h-8 items-center gap-1.5 px-3 text-sm font-medium text-foreground outline-none transition-colors duration-150 hover:bg-accent focus-visible:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset disabled:cursor-not-allowed disabled:opacity-60",
						children: [selectingAll ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : allVisibleSelected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCheckBig, { className: "h-3.5 w-3.5" }), allVisibleSelected ? "Desmarcar visíveis" : "Selecionar visíveis"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: selectingAll,
							"aria-label": "Mais opções de seleção",
							className: "inline-flex h-8 items-center border-l border-border/70 px-2 text-foreground outline-none transition-colors duration-150 hover:bg-accent focus-visible:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset disabled:cursor-not-allowed disabled:opacity-60",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "start",
						className: "w-64",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, {
								className: "text-xs font-normal text-muted-foreground",
								children: "Escopo de seleção"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
								onSelect: () => selectAllInDatabase(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCheckBig, { className: "mr-2 h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Todo o banco de dados" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: "Ignora filtros e busca atual"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
								onSelect: () => selectAllInDatabase({ onlyMine: true }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, { className: "mr-2 h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Somente meus exercícios" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: "Exclui exercícios compartilhados"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
								onSelect: clearSelection,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-2 h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Limpar seleção" })]
							})
						]
					})] })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 " + (selectionMode && selected.size > 0 ? "pb-28 sm:pb-24" : ""),
				children: exercises.map((ex) => {
					const isSel = selected.has(ex.id);
					const clickable = selectionMode;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						role: clickable ? "button" : void 0,
						tabIndex: clickable ? 0 : void 0,
						onClick: clickable ? () => toggleSelected(ex.id) : void 0,
						onKeyDown: clickable ? (e) => {
							if (e.key === " " || e.key === "Enter") {
								e.preventDefault();
								toggleSelected(ex.id);
							}
						} : void 0,
						className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 p-4 transition-all duration-200 sm:flex sm:justify-between " + (clickable ? "cursor-pointer " : "") + (isSel ? "border-primary/60 bg-primary/[0.04] ring-1 ring-primary/20" : "hover:border-primary/30"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 flex-1 items-start gap-3",
							children: [selectionMode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								checked: isSel,
								onCheckedChange: () => toggleSelected(ex.id),
								onClick: (e) => e.stopPropagation(),
								className: "mt-1 shrink-0",
								"aria-label": `Selecionar ${ex.nome_pt}`
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [selectionMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate font-semibold text-foreground",
									children: ex.nome_pt
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setEditing(ex);
										setOpen(true);
									},
									className: "rounded-sm text-left font-semibold text-foreground outline-none transition-colors duration-150 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
									children: ex.nome_pt
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 flex flex-wrap gap-1",
									children: [
										(ex.equipamento ?? []).map((eq) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											className: "border-transparent bg-primary/10 text-primary text-xs hover:bg-primary/15",
											children: eq
										}, eq)),
										(ex.metodologias ?? []).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "secondary",
											className: "text-xs",
											children: METHODOLOGY_LABEL[m]
										}, m)),
										ex.padrao_movimento && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "outline",
											className: "text-xs",
											children: ex.padrao_movimento
										}),
										ex.unilateral && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "outline",
											className: "text-xs",
											children: "unilateral"
										}),
										(ex.equipamento ?? []).length === 0 && (ex.metodologias ?? []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
											variant: "outline",
											className: "gap-1 border-dashed border-warning/40 bg-warning/5 text-[10.5px] font-medium uppercase tracking-wide text-warning-foreground/80",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "h-3 w-3" }), "sem tags"]
										})
									]
								})]
							})]
						}), !selectionMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex shrink-0 gap-2 justify-self-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: (e) => {
									e.stopPropagation();
									setEditing(ex);
									setOpen(true);
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								disabled: del.isPending,
								onClick: (e) => {
									e.stopPropagation();
									if (confirm(`Remover "${ex.nome_pt}"?`)) del.mutate(ex.id);
								},
								children: del.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
							})]
						})]
					}, ex.id);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExerciseEditorDialog, {
				open,
				onOpenChange: setOpen,
				editing,
				coachId: coach?.id,
				existingExercises: exercises,
				onOpenExisting: (ex) => {
					setEditing(ex);
					setOpen(true);
				}
			}),
			selectionMode && selected.size > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto flex w-full max-w-2xl items-center gap-3 rounded-2xl border border-border/70 bg-card/95 px-4 py-3 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-card/80 animate-in fade-in slide-in-from-bottom-2 duration-200",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCheckBig, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "truncate text-sm font-semibold text-foreground",
								children: [
									selected.size,
									" exercício",
									selected.size === 1 ? "" : "s",
									" selecionado",
									selected.size === 1 ? "" : "s"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hidden text-xs text-muted-foreground sm:block",
								children: "Ajuste modalidades e equipamento em lote."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: clearSelection,
							className: "hidden sm:inline-flex",
							children: "Limpar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							className: "gap-1.5",
							onClick: () => setBulkOpen(true),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "h-3.5 w-3.5" }), "Editar em massa"]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BulkEditDialog, {
				open: bulkOpen,
				onOpenChange: setBulkOpen,
				selectedIds: Array.from(selected),
				exercises,
				coachId: coach?.id,
				onApplied: () => {
					setBulkOpen(false);
					clearSelection();
					qc.invalidateQueries({ queryKey: ["exercises"] });
				}
			})
		] })]
	});
}
function EquipChip({ label, count, active, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		"aria-pressed": active,
		className: "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background " + (active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"),
		children: [label, typeof count === "number" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "rounded-full px-1.5 py-0.5 text-[10px] leading-none " + (active ? "bg-primary-foreground/20" : "bg-muted text-muted-foreground"),
			children: count
		})]
	});
}
function TagCoverage({ total, untagged, active, onToggle }) {
	const tagged = Math.max(0, total - untagged);
	const pct = total > 0 ? Math.round(tagged / total * 100) : 100;
	const allDone = untagged === 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4 flex flex-col gap-3 rounded-xl border px-4 py-3 transition-colors duration-200 sm:flex-row sm:items-center sm:justify-between " + (active ? "border-warning/50 bg-warning/[0.06]" : allDone ? "border-border/60 bg-muted/30" : "border-border bg-card"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-colors duration-200 " + (allDone ? "bg-primary/10 text-primary" : "bg-warning/15 text-warning-foreground"),
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "h-4 w-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold leading-tight text-foreground",
					children: allDone ? "Todos os exercícios classificados" : `${untagged} de ${total} exercícios sem classificação`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-xs leading-relaxed text-muted-foreground",
					children: allDone ? "Modalidade e equipamento definidos em todo o banco." : `${pct}% já com modalidade ou equipamento. Selecione em lote para atribuir.`
				})]
			})]
		}), !allDone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			type: "button",
			size: "sm",
			variant: active ? "secondary" : "outline",
			onClick: onToggle,
			className: "shrink-0 gap-2 transition-all duration-200",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-3.5 w-3.5" }), active ? "Mostrar todos" : "Filtrar não classificados"]
		})]
	});
}
//#endregion
export { ExerciciosPage as component };
