import { u as createServerFn } from "./esm-BJY6H9OB.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-CHOPR5bi.mjs";
import { t as createServerRpc } from "./server-rpc-DWINvzj2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/diagnostico.functions-BDyYDcTv.js
var getDiagnosticInfo_createServerFn_handler = createServerRpc({
	id: "4931dcaf93ae0ff03d38ab8f0f1b8250aedd2193978a79f487c004f47e323b76",
	name: "getDiagnosticInfo",
	filename: "src/lib/diagnostico.functions.ts"
}, (opts) => getDiagnosticInfo.__executeServer(opts));
var getDiagnosticInfo = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(getDiagnosticInfo_createServerFn_handler, async ({ context }) => {
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	const { userId } = context;
	try {
		const { data: coachId } = await supabaseAdmin.rpc("auth_coach_id_for_user", { _user_id: userId });
		const [{ count: mediaCount }, { count: jobsCount }, { count: itemsCount }, { count: exercisesCount }] = await Promise.all([
			supabaseAdmin.from("exercise_media").select("*", {
				count: "exact",
				head: true
			}),
			supabaseAdmin.from("media_correlation_jobs").select("*", {
				count: "exact",
				head: true
			}).eq("coach_id", coachId || userId),
			supabaseAdmin.from("media_correlation_items").select("*", {
				count: "exact",
				head: true
			}),
			supabaseAdmin.from("exercises").select("*", {
				count: "exact",
				head: true
			}).or(`coach_id.eq.${coachId},coach_id.is.null`)
		]);
		const { data: lastJob } = await supabaseAdmin.from("media_correlation_jobs").select("id, status, created_at, stats").eq("coach_id", coachId || userId).order("created_at", { ascending: false }).limit(1).maybeSingle();
		return {
			success: true,
			env: {
				projectRef: (process.env.VITE_SUPABASE_URL || "unknown").split(".")[0].replace("https://", ""),
				bucket: "exercise-media",
				buildId: process.env.VITE_BUILD_ID || "dev"
			},
			auth: {
				userId,
				coachId
			},
			database: {
				exercise_media: mediaCount || 0,
				correlation_jobs: jobsCount || 0,
				correlation_items: itemsCount || 0,
				exercises: exercisesCount || 0
			},
			lastJob
		};
	} catch (error) {
		console.error("[diagnostico] Error:", error);
		return {
			success: false,
			error: error.message
		};
	}
});
//#endregion
export { getDiagnosticInfo_createServerFn_handler };
