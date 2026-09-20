import { t as supabase } from "./client-BxRH54s6.mjs";
import { c as createMiddleware, d as createStart } from "./esm-BJY6H9OB.mjs";
import { t as renderErrorPage } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/start-JdpyZMnd.js
var attachSupabaseAuth = createMiddleware({ type: "function" }).client(async ({ next }) => {
	const { data } = await supabase.auth.getSession();
	const token = data.session?.access_token;
	return next({ headers: token ? { Authorization: `Bearer ${token}` } : {} });
});
var errorMiddleware = createMiddleware().server(async ({ next }) => {
	try {
		return await next();
	} catch (error) {
		if (error != null && typeof error === "object" && "statusCode" in error) throw error;
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
});
var startInstance = createStart(() => ({
	functionMiddleware: [attachSupabaseAuth],
	requestMiddleware: [errorMiddleware]
}));
//#endregion
export { startInstance };
