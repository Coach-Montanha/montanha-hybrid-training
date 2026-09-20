import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BxRH54s6.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-CCQEfgNs.mjs";
import { t as Input } from "./input-DoD5W07l.mjs";
import { t as Label } from "./label-B1jF9p8Y.mjs";
import { S as useNavigate, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Card } from "./card-Bav9nr75.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth.primeiro-acesso-DUQqwz9j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PrimeiroAcesso() {
	const navigate = useNavigate();
	const [step, setStep] = (0, import_react.useState)("login");
	const [email, setEmail] = (0, import_react.useState)("");
	const [tempPw, setTempPw] = (0, import_react.useState)("");
	const [newPw, setNewPw] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	async function loginTemp(e) {
		e.preventDefault();
		setLoading(true);
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password: tempPw
		});
		setLoading(false);
		if (error) return toast.error(error.message);
		setStep("nova");
	}
	async function trocar(e) {
		e.preventDefault();
		setLoading(true);
		const { error } = await supabase.auth.updateUser({ password: newPw });
		if (error) {
			setLoading(false);
			return toast.error(error.message);
		}
		const { data: u } = await supabase.auth.getUser();
		if (u.user) await supabase.from("students").update({
			auth_user_id: u.user.id,
			senha_temporaria: false,
			status: "ativo"
		}).eq("email", u.user.email);
		setLoading(false);
		toast.success("Senha atualizada!");
		navigate({ to: "/aluno" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full max-w-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-xl font-bold",
						children: "Primeiro acesso do aluno"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: step === "login" ? "Use o e-mail e a senha temporária que seu treinador enviou." : "Defina sua nova senha."
					}),
					step === "login" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: loginTemp,
						className: "mt-6 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "pa-email",
								children: "E-mail"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "pa-email",
								type: "email",
								required: true,
								value: email,
								onChange: (e) => setEmail(e.target.value)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "pa-tp",
								children: "Senha temporária"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "pa-tp",
								type: "password",
								required: true,
								value: tempPw,
								onChange: (e) => setTempPw(e.target.value)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "w-full",
								type: "submit",
								disabled: loading,
								children: "Continuar"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: trocar,
						className: "mt-6 space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "pa-np",
							children: "Nova senha"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "pa-np",
							type: "password",
							minLength: 8,
							required: true,
							value: newPw,
							onChange: (e) => setNewPw(e.target.value)
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "w-full",
							type: "submit",
							disabled: loading,
							children: "Salvar"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-center text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/auth",
							className: "text-primary underline",
							children: "Voltar"
						})
					})
				]
			})
		})
	});
}
//#endregion
export { PrimeiroAcesso as component };
