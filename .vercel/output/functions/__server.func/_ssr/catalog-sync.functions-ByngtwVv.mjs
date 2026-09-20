import { n as ENABLED_FORMATS, t as BLOCK_FORMAT_LABEL } from "./methodology-DF-HMT6m.mjs";
import { u as createServerFn } from "./esm-BJY6H9OB.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-CHOPR5bi.mjs";
import { c as object, i as any, o as boolean, u as string } from "../_libs/tanstack__zod-adapter+zod.mjs";
import { t as createServerRpc } from "./server-rpc-DWINvzj2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-sync.functions-ByngtwVv.js
var FORMAT_DEF_SCHEMA = object({
	id: string(),
	base_format: string(),
	label: string(),
	description: string().nullable().optional(),
	default_config: any().optional(),
	is_active: boolean().optional(),
	is_builtin: boolean().optional(),
	metadata: any().optional()
});
var SET_TYPE_DEF_SCHEMA = object({
	id: string(),
	label: string(),
	fields: any().optional(),
	is_active: boolean().optional(),
	is_builtin: boolean().optional()
});
var listFormatDefinitions_createServerFn_handler = createServerRpc({
	id: "66d858e6d0a500e7dc19516d33472e0129983db3750a1b83a92ef7c669155b31",
	name: "listFormatDefinitions",
	filename: "src/lib/catalog-sync.functions.ts"
}, (opts) => listFormatDefinitions.__executeServer(opts));
var listFormatDefinitions = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(listFormatDefinitions_createServerFn_handler, async ({ context }) => {
	const { data, error } = await context.supabase.from("format_definitions").select("*").order("label");
	if (error) throw new Error(error.message);
	return data;
});
var upsertFormatDefinition_createServerFn_handler = createServerRpc({
	id: "6a23b8b6228d14ef9ee5a07c274cdf30264a412108236db5f0420bb998232c79",
	name: "upsertFormatDefinition",
	filename: "src/lib/catalog-sync.functions.ts"
}, (opts) => upsertFormatDefinition.__executeServer(opts));
var upsertFormatDefinition = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((raw) => FORMAT_DEF_SCHEMA.parse(raw)).handler(upsertFormatDefinition_createServerFn_handler, async ({ data, context }) => {
	const typed = data;
	const { data: coach } = await context.supabase.from("coaches").select("id").maybeSingle();
	const payload = {
		id: typed.id,
		base_format: typed.base_format,
		label: typed.label,
		description: typed.description || null,
		default_config: typed.default_config ?? {},
		is_active: typed.is_active ?? true,
		is_builtin: typed.is_builtin ?? false,
		metadata: typed.metadata ?? {},
		coach_id: coach?.id
	};
	const { error } = await context.supabase.from("format_definitions").upsert(payload);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var deleteFormatDefinition_createServerFn_handler = createServerRpc({
	id: "892e5387eb0d57941cf34326841974c157c5acf8e63367ffdb0b69dfeca89e8e",
	name: "deleteFormatDefinition",
	filename: "src/lib/catalog-sync.functions.ts"
}, (opts) => deleteFormatDefinition.__executeServer(opts));
var deleteFormatDefinition = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((raw) => object({ id: string() }).parse(raw)).handler(deleteFormatDefinition_createServerFn_handler, async ({ data, context }) => {
	const typed = data;
	const { error } = await context.supabase.from("format_definitions").delete().eq("id", typed.id);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var listSetTypeDefinitions_createServerFn_handler = createServerRpc({
	id: "cb25141a0480b8c293e43f6ec6adb54379e95eaab9dc62437f29ebfa055c09a2",
	name: "listSetTypeDefinitions",
	filename: "src/lib/catalog-sync.functions.ts"
}, (opts) => listSetTypeDefinitions.__executeServer(opts));
var listSetTypeDefinitions = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(listSetTypeDefinitions_createServerFn_handler, async ({ context }) => {
	const { data, error } = await context.supabase.from("set_type_definitions").select("*").order("label");
	if (error) throw new Error(error.message);
	return data;
});
var upsertSetTypeDefinition_createServerFn_handler = createServerRpc({
	id: "59dd96729cf06a2ae69e74d57e8779920a7c8c90ab653d8ba50ecd6daeb7ed51",
	name: "upsertSetTypeDefinition",
	filename: "src/lib/catalog-sync.functions.ts"
}, (opts) => upsertSetTypeDefinition.__executeServer(opts));
var upsertSetTypeDefinition = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((raw) => SET_TYPE_DEF_SCHEMA.parse(raw)).handler(upsertSetTypeDefinition_createServerFn_handler, async ({ data, context }) => {
	const typed = data;
	const { data: coach } = await context.supabase.from("coaches").select("id").maybeSingle();
	const { error } = await context.supabase.from("set_type_definitions").upsert({
		id: typed.id,
		label: typed.label,
		fields: typed.fields ?? [],
		is_active: typed.is_active ?? true,
		is_builtin: typed.is_builtin ?? false,
		coach_id: coach?.id
	});
	if (error) throw new Error(error.message);
	return { ok: true };
});
var deleteSetTypeDefinition_createServerFn_handler = createServerRpc({
	id: "448ba401e7145552f7e934befdfa7ca0ff720a64d74e5a81f9e00767c05878aa",
	name: "deleteSetTypeDefinition",
	filename: "src/lib/catalog-sync.functions.ts"
}, (opts) => deleteSetTypeDefinition.__executeServer(opts));
var deleteSetTypeDefinition = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((raw) => object({ id: string() }).parse(raw)).handler(deleteSetTypeDefinition_createServerFn_handler, async ({ data, context }) => {
	const typed = data;
	const { error } = await context.supabase.from("set_type_definitions").delete().eq("id", typed.id);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var getAvailableBlockFormats_createServerFn_handler = createServerRpc({
	id: "6b77bf5136b1dba2cdb594fb46244d3794b026f98181cfb235f6096173df5f3b",
	name: "getAvailableBlockFormats",
	filename: "src/lib/catalog-sync.functions.ts"
}, (opts) => getAvailableBlockFormats.__executeServer(opts));
var getAvailableBlockFormats = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(getAvailableBlockFormats_createServerFn_handler, async ({ context }) => {
	const { data: coach } = await context.supabase.from("coaches").select("id").maybeSingle();
	const { data: definitions, error } = await context.supabase.from("format_definitions").select("*").eq("is_active", true).or(`coach_id.is.null,coach_id.eq.${coach?.id}`);
	if (error) throw new Error(error.message);
	const builtins = ENABLED_FORMATS.map((f) => {
		const def = definitions?.find((d) => d.id === `builtin:${f}`);
		return {
			id: `builtin:${f}`,
			base: f,
			label: def?.label || BLOCK_FORMAT_LABEL[f],
			description: def?.description || "",
			defaults: def?.default_config || {},
			builtin: true
		};
	});
	const custom = (definitions || []).filter((d) => !d.is_builtin).map((d) => ({
		id: d.id,
		base: d.base_format,
		label: d.label,
		description: d.description || "",
		defaults: d.default_config || {},
		builtin: false
	}));
	return [...builtins, ...custom];
});
//#endregion
export { deleteFormatDefinition_createServerFn_handler, deleteSetTypeDefinition_createServerFn_handler, getAvailableBlockFormats_createServerFn_handler, listFormatDefinitions_createServerFn_handler, listSetTypeDefinitions_createServerFn_handler, upsertFormatDefinition_createServerFn_handler, upsertSetTypeDefinition_createServerFn_handler };
