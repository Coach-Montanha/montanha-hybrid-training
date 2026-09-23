import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    if (typeof window !== "undefined") {
      const trialUser = localStorage.getItem("sistema_hibrido_trial_user");
      if (trialUser) {
        try {
          const parsed = JSON.parse(trialUser);
          if (parsed && parsed.email) {
            return {
              user: {
                id: parsed.id || `trial_${parsed.email}`,
                email: parsed.email,
                user_metadata: { name: parsed.name || parsed.email.split("@")[0] }
              } as any
            };
          }
        } catch {}
      }

      const impersonate = localStorage.getItem("edufinance.impersonate");
      if (impersonate) {
        try {
          const parsed = JSON.parse(impersonate);
          if (parsed && parsed.targetEmail) {
            return {
              user: {
                id: parsed.targetUserId || `support_${parsed.targetEmail}`,
                email: parsed.targetEmail,
                user_metadata: { name: parsed.targetEmail.split("@")[0] }
              } as any
            };
          }
        } catch {}
      }
    }

    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) throw redirect({ to: "/auth" });
    return { user: data.user };
  },
  component: () => <Outlet />,
});