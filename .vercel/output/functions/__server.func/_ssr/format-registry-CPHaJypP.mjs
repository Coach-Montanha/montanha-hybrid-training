import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as ENABLED_FORMATS, t as BLOCK_FORMAT_LABEL } from "./methodology-DF-HMT6m.mjs";
import { n as useServerFn } from "./ssr-rpc-DsWtVjPG.mjs";
import { i as upsertFormatDefinition, n as deleteFormatDefinition, r as listFormatDefinitions } from "./set-type-registry-BN6pSciu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/format-registry-CPHaJypP.js
function useFormatRegistry() {
	const queryClient = useQueryClient();
	const listFn = useServerFn(listFormatDefinitions);
	const upsertFn = useServerFn(upsertFormatDefinition);
	const deleteFn = useServerFn(deleteFormatDefinition);
	const { data: definitions = [] } = useQuery({
		queryKey: ["format-definitions"],
		queryFn: () => listFn()
	});
	const upsertMutation = useMutation({
		mutationFn: (data) => upsertFn({ data }),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["format-definitions"] })
	});
	const deleteMutation = useMutation({
		mutationFn: (id) => deleteFn({ data: { id } }),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["format-definitions"] })
	});
	const builtins = ENABLED_FORMATS.map((f) => {
		const def = definitions.find((d) => d.id === `builtin:${f}`);
		return {
			id: `builtin:${f}`,
			label: def?.label ?? BLOCK_FORMAT_LABEL[f],
			base: def?.base_format ?? f,
			set_type_id: def?.metadata?.set_type_id ?? getDefaultSetTypeForFormat(f),
			enabled_fields: def?.metadata?.enabled_fields ?? void 0,
			field_labels: def?.metadata?.field_labels ?? void 0,
			description: def?.description ?? void 0,
			defaults: def?.default_config ?? void 0,
			builtin: true
		};
	});
	const custom = definitions.filter((d) => !d.is_builtin).map((d) => ({
		id: d.id,
		label: d.label,
		base: d.base_format,
		set_type_id: d.metadata?.set_type_id ?? "reps_carga",
		enabled_fields: d.metadata?.enabled_fields ?? void 0,
		field_labels: d.metadata?.field_labels ?? void 0,
		description: d.description ?? void 0,
		defaults: d.default_config ?? void 0,
		builtin: false
	}));
	return {
		presets: [...builtins, ...custom].filter((p) => {
			const def = definitions.find((d) => d.id === p.id);
			return def ? def.is_active : true;
		}),
		builtins,
		isLoading: false,
		renameBuiltin(base, label) {
			upsertMutation.mutate({
				id: `builtin:${base}`,
				base_format: base,
				label,
				is_builtin: true,
				is_active: true
			});
		},
		describeBuiltin(base, description) {
			const def = definitions.find((d) => d.id === `builtin:${base}`);
			upsertMutation.mutate({
				id: `builtin:${base}`,
				base_format: base,
				label: def?.label ?? BLOCK_FORMAT_LABEL[base],
				description,
				is_builtin: true,
				is_active: true
			});
		},
		setBuiltinDefaults(base, defaults) {
			const def = definitions.find((d) => d.id === `builtin:${base}`);
			upsertMutation.mutate({
				id: `builtin:${base}`,
				base_format: base,
				label: def?.label ?? BLOCK_FORMAT_LABEL[base],
				default_config: defaults,
				is_builtin: true,
				is_active: true
			});
		},
		/** Salva um formato padrão em uma única operação — nome, estrutura, descrição e valores padrão. */
		saveBuiltin(id, patch) {
			const def = definitions.find((d) => d.id === id);
			upsertMutation.mutate({
				id,
				base_format: patch.base,
				label: patch.label,
				description: patch.description ?? null,
				default_config: patch.defaults ?? {},
				metadata: {
					...def?.metadata || {},
					set_type_id: patch.set_type_id,
					enabled_fields: patch.enabled_fields,
					field_labels: patch.field_labels
				},
				is_active: def?.is_active ?? true,
				is_builtin: true
			});
		},
		resetBuiltin(base) {
			deleteMutation.mutate(`builtin:${base}`);
		},
		removePreset(id) {
			if (id.startsWith("builtin:")) {
				const base = id.replace("builtin:", "");
				const def = definitions.find((d) => d.id === id);
				upsertMutation.mutate({
					id,
					base_format: base,
					label: def?.label ?? BLOCK_FORMAT_LABEL[base],
					is_active: false,
					is_builtin: true
				});
			} else deleteMutation.mutate(id);
		},
		toggleBuiltin(base, visible) {
			const id = `builtin:${base}`;
			const def = definitions.find((d) => d.id === id);
			upsertMutation.mutate({
				id,
				base_format: base,
				label: def?.label ?? BLOCK_FORMAT_LABEL[base],
				is_active: visible,
				is_builtin: true
			});
		},
		async addCustom(preset) {
			const id = `custom:${Date.now().toString(36)}`;
			await upsertMutation.mutateAsync({
				id,
				base_format: preset.base,
				label: preset.label,
				description: preset.description,
				default_config: preset.defaults,
				metadata: {
					set_type_id: preset.set_type_id,
					enabled_fields: preset.enabled_fields,
					field_labels: preset.field_labels
				},
				is_builtin: false,
				is_active: true
			});
			return id;
		},
		updateCustom(id, patch) {
			const def = definitions.find((d) => d.id === id);
			if (!def) return;
			upsertMutation.mutate({
				...def,
				base_format: patch.base ?? def.base_format,
				label: patch.label ?? def.label,
				description: patch.description ?? def.description,
				default_config: patch.defaults ?? def.default_config,
				metadata: {
					...def.metadata || {},
					set_type_id: patch.set_type_id ?? def.metadata?.set_type_id,
					enabled_fields: patch.enabled_fields ?? def.metadata?.enabled_fields,
					field_labels: patch.field_labels ?? def.metadata?.field_labels
				}
			});
		},
		async duplicatePreset(source) {
			const id = `custom:${Date.now().toString(36)}`;
			await upsertMutation.mutateAsync({
				id,
				base_format: source.base,
				label: `${source.label} (cópia)`,
				description: source.description,
				default_config: source.defaults,
				is_builtin: false,
				is_active: true
			});
			return id;
		},
		reorderPresets(activeId, overId) {}
	};
}
function getDefaultSetTypeForFormat(format) {
	switch (format) {
		case "mobilidade":
		case "preparacao_movimento": return "reps_tempo";
		case "series_tempo": return "reps_tempo";
		case "forca_tecnica_pct": return "reps_carga";
		case "corrida": return "corrida";
		default: return "reps_carga";
	}
}
//#endregion
export { useFormatRegistry as t };
