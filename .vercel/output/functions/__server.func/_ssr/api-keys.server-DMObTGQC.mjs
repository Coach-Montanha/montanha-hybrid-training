//#region node_modules/.nitro/vite/services/ssr/assets/api-keys.server-DMObTGQC.js
async function adminClient() {
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	return supabaseAdmin;
}
/** Resolve o coach do usuário autenticado usando o client com RLS do próprio usuário. */
async function resolveCoachId(supabase) {
	const { data, error } = await supabase.rpc("auth_coach_id");
	if (error) throw new Error(error.message);
	return data ?? null;
}
/** Gera uma chave de 256 bits (equivalente a `openssl rand -hex 32`) com prefixo legível. */
function mintKey() {
	const bytes = new Uint8Array(32);
	crypto.getRandomValues(bytes);
	return `chm_sk_${Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("")}`;
}
async function sha256Hex(value) {
	const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
	return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}
//#endregion
export { adminClient, mintKey, resolveCoachId, sha256Hex };
