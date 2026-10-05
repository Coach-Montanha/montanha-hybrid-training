import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function useCoach() {
  return useQuery({
    queryKey: ["coach", "me"],
    queryFn: async () => {
      const { data: u } = await supabase.auth.getUser();
      if (!u.user) return null;
      let { data, error } = await supabase
        .from("coaches")
        .select("*")
        .eq("auth_user_id", u.user.id)
        .maybeSingle();
      if (error) throw error;

      // Se o usuário logado não possui perfil de coach registrado, auto-provisiona
      if (!data && u.user.email) {
        const nome =
          u.user.user_metadata?.nome ||
          u.user.user_metadata?.name ||
          u.user.email.split("@")[0] ||
          "Coach Montanha";
        const { data: created, error: createErr } = await supabase
          .from("coaches")
          .insert({
            auth_user_id: u.user.id,
            nome,
            email: u.user.email,
          })
          .select()
          .maybeSingle();

        if (!createErr && created) {
          data = created;
        }
      }

      return data;
    },
  });
}