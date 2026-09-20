import { t as supabase } from "./client-BxRH54s6.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-coach-B0Sg5_sT.js
function useCoach() {
	return useQuery({
		queryKey: ["coach", "me"],
		queryFn: async () => {
			const { data: u } = await supabase.auth.getUser();
			if (!u.user) return null;
			const { data, error } = await supabase.from("coaches").select("*").eq("auth_user_id", u.user.id).maybeSingle();
			if (error) throw error;
			return data;
		}
	});
}
//#endregion
export { useCoach as t };
