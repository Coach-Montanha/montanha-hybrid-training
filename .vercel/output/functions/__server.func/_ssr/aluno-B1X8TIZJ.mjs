import { t as supabase } from "./client-BxRH54s6.mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-CCQEfgNs.mjs";
import { K as Mountain, Kt as ChevronRight, Q as LogOut } from "../_libs/lucide-react.mjs";
import { i as useQueryClient, n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { S as useNavigate, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Card } from "./card-Bav9nr75.mjs";
import { t as InstallAppButton } from "./InstallAppButton-DY-mnlM3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/aluno-B1X8TIZJ.js
var import_jsx_runtime = require_jsx_runtime();
function AlunoHome() {
	const navigate = useNavigate();
	const qc = useQueryClient();
	const { data: sessions = [] } = useQuery({
		queryKey: ["aluno-sessions"],
		queryFn: async () => {
			const { data, error } = await supabase.from("sessions").select("id, titulo, numero_dia, data, status, program_weeks(numero_semana, programs(titulo, metodologia))").order("data", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	async function signOut() {
		await qc.cancelQueries();
		qc.clear();
		await supabase.auth.signOut();
		navigate({
			to: "/auth",
			replace: true
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-3xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mountain, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-sm sm:text-base",
						children: "Meus treinos"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallAppButton, { size: "sm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: signOut,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-1.5 h-4 w-4" }), " Sair"]
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto max-w-3xl p-6",
			children: sessions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "p-12 text-center text-muted-foreground",
				children: "Nenhum treino liberado ainda."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: sessions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/aluno/sessao/$id",
					params: { id: s.id },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "flex items-center justify-between p-4 hover:border-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-muted-foreground",
							children: [
								s.program_weeks?.programs?.titulo ?? "Sessão",
								" · Semana ",
								s.program_weeks?.numero_semana,
								" · Dia ",
								s.numero_dia,
								" · ",
								s.data ?? "sem data"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-lg font-semibold",
							children: s.titulo ?? "Treino"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5 text-muted-foreground" })]
					})
				}, s.id))
			})
		})]
	});
}
//#endregion
export { AlunoHome as component };
