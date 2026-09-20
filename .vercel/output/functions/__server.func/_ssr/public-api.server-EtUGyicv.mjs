//#region node_modules/.nitro/vite/services/ssr/assets/public-api.server-EtUGyicv.js
var PUBLIC_API_CORS = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type, x-api-key",
	"Access-Control-Max-Age": "86400"
};
function json(data, status = 200) {
	return new Response(JSON.stringify(data), {
		status,
		headers: {
			"Content-Type": "application/json",
			...PUBLIC_API_CORS
		}
	});
}
function preflight() {
	return new Response(null, {
		status: 204,
		headers: PUBLIC_API_CORS
	});
}
var ApiError = class extends Error {
	status;
	constructor(status, message) {
		super(message);
		this.status = status;
	}
};
/**
* Valida o header `x-api-key` contra as chaves geradas no app (tabela api_keys)
* e, como fallback, contra o secret PUBLIC_API_KEY. Devolve o coach a que a
* chave dá acesso. Lança ApiError(401) quando inválida.
*/
async function requireApiKey(request) {
	const provided = request.headers.get("x-api-key");
	if (!provided) throw new ApiError(401, "Unauthorized");
	const { sha256Hex } = await import("./api-keys.server-DMObTGQC.mjs");
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	const { data } = await supabaseAdmin.from("api_keys").select("id, coach_id").eq("key_hash", await sha256Hex(provided)).is("revoked_at", null).maybeSingle();
	if (data) {
		await supabaseAdmin.from("api_keys").update({ last_used_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", data.id);
		return { coachId: data.coach_id };
	}
	const expected = process.env.PUBLIC_API_KEY;
	const envCoachId = process.env.PUBLIC_API_COACH_ID;
	if (expected && envCoachId && provided === expected) return { coachId: envCoachId };
	throw new ApiError(401, "Unauthorized");
}
function errorResponse(error) {
	if (error instanceof ApiError) return json({ error: error.message }, error.status);
	console.error("[public-api]", error);
	return json({ error: "Internal error" }, 500);
}
//#endregion
export { ApiError, errorResponse, json, preflight, requireApiKey };
