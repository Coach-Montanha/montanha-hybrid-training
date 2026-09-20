import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { u as createServerFn } from "./esm-BJY6H9OB.mjs";
import { n as useServerFn, t as createSsrRpc } from "./ssr-rpc-DsWtVjPG.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-CHOPR5bi.mjs";
import { c as object, i as any, o as boolean, u as string } from "../_libs/tanstack__zod-adapter+zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/set-type-registry-BN6pSciu.js
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
var listFormatDefinitions = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("66d858e6d0a500e7dc19516d33472e0129983db3750a1b83a92ef7c669155b31"));
var upsertFormatDefinition = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((raw) => FORMAT_DEF_SCHEMA.parse(raw)).handler(createSsrRpc("6a23b8b6228d14ef9ee5a07c274cdf30264a412108236db5f0420bb998232c79"));
var deleteFormatDefinition = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((raw) => object({ id: string() }).parse(raw)).handler(createSsrRpc("892e5387eb0d57941cf34326841974c157c5acf8e63367ffdb0b69dfeca89e8e"));
var listSetTypeDefinitions = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("cb25141a0480b8c293e43f6ec6adb54379e95eaab9dc62437f29ebfa055c09a2"));
var upsertSetTypeDefinition = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((raw) => SET_TYPE_DEF_SCHEMA.parse(raw)).handler(createSsrRpc("59dd96729cf06a2ae69e74d57e8779920a7c8c90ab653d8ba50ecd6daeb7ed51"));
var deleteSetTypeDefinition = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((raw) => object({ id: string() }).parse(raw)).handler(createSsrRpc("448ba401e7145552f7e934befdfa7ca0ff720a64d74e5a81f9e00767c05878aa"));
createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("6b77bf5136b1dba2cdb594fb46244d3794b026f98181cfb235f6096173df5f3b"));
var BUILTIN_SET_TYPES = [
	{
		id: "reps_carga",
		label: "Repetições e carga",
		builtin: true,
		fields: [
			{
				key: "serie_rep",
				label: "Série/rep",
				placeholder: "3x15"
			},
			{
				key: "carga",
				label: "Carga (kg)",
				placeholder: "0"
			},
			{
				key: "intervalo_seg",
				label: "Intervalo (s)",
				placeholder: "60"
			}
		]
	},
	{
		id: "reps_carga_tempo",
		label: "Repetições, carga e tempo",
		builtin: true,
		fields: [
			{
				key: "serie_rep",
				label: "Série/rep",
				placeholder: "3x15"
			},
			{
				key: "carga",
				label: "Carga (kg)",
				placeholder: "0"
			},
			{
				key: "tempo_seg",
				label: "Tempo (s)",
				placeholder: "30"
			},
			{
				key: "intervalo_seg",
				label: "Intervalo (s)",
				placeholder: "60"
			}
		]
	},
	{
		id: "reps_tempo",
		label: "Repetições e tempo",
		builtin: true,
		fields: [
			{
				key: "serie_rep",
				label: "Série/rep",
				placeholder: "3x15"
			},
			{
				key: "tempo_seg",
				label: "Tempo (s)",
				placeholder: "30"
			},
			{
				key: "intervalo_seg",
				label: "Intervalo (s)",
				placeholder: "60"
			}
		]
	},
	{
		id: "tempo_inclinacao",
		label: "Tempo e inclinação",
		builtin: true,
		fields: [
			{
				key: "tempo_seg",
				label: "Tempo (s)",
				placeholder: "60"
			},
			{
				key: "inclinacao_pct",
				label: "Inclinação (%)",
				placeholder: "5"
			},
			{
				key: "intervalo_seg",
				label: "Intervalo (s)",
				placeholder: "60"
			}
		]
	},
	{
		id: "corrida",
		label: "Corrida",
		builtin: true,
		fields: [
			{
				key: "distancia",
				label: "Distância",
				placeholder: "1 km"
			},
			{
				key: "ritmo",
				label: "Ritmo (min/km)",
				placeholder: "5:30"
			},
			{
				key: "intervalo_seg",
				label: "Intervalo (s)",
				placeholder: "120"
			}
		]
	},
	{
		id: "cadencia",
		label: "Cadência",
		builtin: true,
		fields: [
			{
				key: "serie_rep",
				label: "Série/rep",
				placeholder: "3x8"
			},
			{
				key: "cadencia",
				label: "Cadência",
				placeholder: "3-1-2-0"
			},
			{
				key: "intervalo_seg",
				label: "Intervalo (s)",
				placeholder: "60"
			}
		]
	},
	{
		id: "observacoes",
		label: "Observações",
		builtin: true,
		fields: [{
			key: "obs",
			label: "Observações",
			placeholder: "Ex: foco na descida",
			wide: true
		}]
	}
];
function useSetTypeRegistry() {
	const queryClient = useQueryClient();
	const listFn = useServerFn(listSetTypeDefinitions);
	const upsertFn = useServerFn(upsertSetTypeDefinition);
	const deleteFn = useServerFn(deleteSetTypeDefinition);
	const { data: definitions = [] } = useQuery({
		queryKey: ["set-type-definitions"],
		queryFn: () => listFn()
	});
	const upsertMutation = useMutation({
		mutationFn: (data) => upsertFn({ data }),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["set-type-definitions"] })
	});
	const deleteMutation = useMutation({
		mutationFn: (id) => deleteFn({ data: { id } }),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["set-type-definitions"] })
	});
	const custom = definitions.filter((d) => !d.is_builtin).map((d) => ({
		id: d.id,
		label: d.label,
		fields: d.fields,
		builtin: false
	}));
	return {
		presets: [...BUILTIN_SET_TYPES, ...custom].filter((p) => {
			const def = definitions.find((d) => d.id === p.id);
			return def ? def.is_active : true;
		}),
		addCustom: (preset) => {
			const id = `custom:${Date.now().toString(36)}`;
			upsertMutation.mutate({
				id,
				label: preset.label,
				fields: preset.fields,
				is_builtin: false,
				is_active: true
			});
			return id;
		},
		updateCustom: (id, patch) => {
			const def = definitions.find((d) => d.id === id);
			if (!def) return;
			upsertMutation.mutate({
				...def,
				label: patch.label ?? def.label,
				fields: patch.fields ?? def.fields
			});
		},
		removePreset: (id) => {
			if (id.startsWith("builtin:")) {
				const def = definitions.find((d) => d.id === id);
				upsertMutation.mutate({
					id,
					label: def?.label ?? id,
					is_active: false,
					is_builtin: true
				});
			} else deleteMutation.mutate(id);
		}
	};
}
//#endregion
export { useSetTypeRegistry as a, upsertFormatDefinition as i, deleteFormatDefinition as n, listFormatDefinitions as r, BUILTIN_SET_TYPES as t };
