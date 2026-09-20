import { u as createServerFn } from "./esm-BJY6H9OB.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-CHOPR5bi.mjs";
import { c as object, u as string } from "../_libs/tanstack__zod-adapter+zod.mjs";
import { t as createServerRpc } from "./server-rpc-DWINvzj2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-keys.functions-BUPrKIu2.js
var listApiKeys_createServerFn_handler = createServerRpc({
	id: "9c16a1334f173e5502a2837ee3bf6872ea4ce17caaf726fe6253f73e9026a7a4",
	name: "listApiKeys",
	filename: "src/lib/api-keys.functions.ts"
}, (opts) => listApiKeys.__executeServer(opts));
var listApiKeys = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(listApiKeys_createServerFn_handler, async ({ context }) => {
	const { resolveCoachId, adminClient } = await import("./api-keys.server-DMObTGQC.mjs");
	const coachId = await resolveCoachId(context.supabase);
	if (!coachId) return [];
	const { data, error } = await (await adminClient()).from("api_keys").select("id, nome, key_prefix, last4, created_at, last_used_at, revoked_at").eq("coach_id", coachId).order("created_at", { ascending: false });
	if (error) throw new Error(error.message);
	return data ?? [];
});
var createApiKey_createServerFn_handler = createServerRpc({
	id: "18adb0d08f035bca242326a836cf9ede60aec85479d77901068de5e252620893",
	name: "createApiKey",
	filename: "src/lib/api-keys.functions.ts"
}, (opts) => createApiKey.__executeServer(opts));
var createApiKey = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => object({ nome: string().trim().min(1).max(60).optional() }).parse(data ?? {})).handler(createApiKey_createServerFn_handler, async ({ data, context }) => {
	const { resolveCoachId, adminClient, mintKey, sha256Hex } = await import("./api-keys.server-DMObTGQC.mjs");
	const coachId = await resolveCoachId(context.supabase);
	if (!coachId) throw new Error("Treinador não encontrado para este usuário");
	const key = mintKey();
	const { data: row, error } = await (await adminClient()).from("api_keys").insert({
		coach_id: coachId,
		nome: data.nome ?? "Chave da API",
		key_hash: await sha256Hex(key),
		key_prefix: key.slice(0, 7),
		last4: key.slice(-4)
	}).select("id, nome, key_prefix, last4, created_at, last_used_at, revoked_at").single();
	if (error) throw new Error(error.message);
	return {
		key,
		row
	};
});
var revokeApiKey_createServerFn_handler = createServerRpc({
	id: "ef1b8419836a0f686f46d144e74f00f36776c58fb73f90458b37bd6ce8efe04e",
	name: "revokeApiKey",
	filename: "src/lib/api-keys.functions.ts"
}, (opts) => revokeApiKey.__executeServer(opts));
var revokeApiKey = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => object({ id: string().uuid() }).parse(data)).handler(revokeApiKey_createServerFn_handler, async ({ data, context }) => {
	const { resolveCoachId, adminClient } = await import("./api-keys.server-DMObTGQC.mjs");
	const coachId = await resolveCoachId(context.supabase);
	if (!coachId) throw new Error("Treinador não encontrado para este usuário");
	const { error } = await (await adminClient()).from("api_keys").update({ revoked_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", data.id).eq("coach_id", coachId).is("revoked_at", null);
	if (error) throw new Error(error.message);
	return { ok: true };
});
//#endregion
export { createApiKey_createServerFn_handler, listApiKeys_createServerFn_handler, revokeApiKey_createServerFn_handler };
