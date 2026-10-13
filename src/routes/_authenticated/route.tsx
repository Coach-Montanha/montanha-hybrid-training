import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { getImpersonatedSession } from "@/components/ImpersonationBanner";

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

      const imp = getImpersonatedSession();
      if (imp?.targetEmail) {
        return {
          user: {
            id: imp.targetUserId || `support_${imp.targetEmail}`,
            email: imp.targetEmail,
            user_metadata: { name: imp.targetEmail.split("@")[0] }
          } as any
        };
      }
    }

    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) throw redirect({ to: "/auth" });
    return { user: data.user };
  },
  component: () => <Outlet />,
});