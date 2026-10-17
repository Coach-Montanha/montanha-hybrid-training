import { createFileRoute } from "@tanstack/react-router";
import mfitExercisesData from "@/data/mfit-exercises.json";

export const Route = createFileRoute("/api/public/exercises")({
  server: {
    handlers: {
      OPTIONS: async () => {
        const { preflight } = await import("@/lib/public-api.server");
        return preflight();
      },
      GET: async ({ request }) => {
        const { requireApiKey, json, errorResponse } = await import("@/lib/public-api.server");
        try {
          await requireApiKey(request);
          const rawLimit = new URL(request.url).searchParams.get("limit");
          const limit = rawLimit ? Math.min(Math.max(Number(rawLimit) || 50, 1), 500) : 250;

          const mfitExercises = (mfitExercisesData as any[]).map((ex, idx) => ({
            id: `mfit-${idx + 1}`,
            name: ex.name,
            muscle_group: ex.muscle_group,
            description: ex.description,
            equipment: [ex.muscle_group],
            instructions: ex.description,
            media: {
              video: ex.media_type === "video" ? ex.media_url : null,
              image: ex.media_type === "image" ? ex.media_url : ex.thumbnail_url || null,
            },
            thumbnail_url: ex.thumbnail_url,
            video_url: ex.media_type === "video" ? ex.media_url : null,
          }));

          let dbExercises: any[] = [];
          try {
            const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
            const { data } = await supabaseAdmin
              .from("exercises")
              .select("id, nome_pt, nome_en, grupos_musculares, equipamento, exercise_media(*)")
              .limit(limit);

            if (data && data.length > 0) {
              dbExercises = data.map((d: any) => ({
                id: d.id,
                name: d.nome_pt || d.nome_en,
                name_en: d.nome_en,
                muscle_group: Array.isArray(d.grupos_musculares) ? d.grupos_musculares[0] : d.grupos_musculares,
                equipment: Array.isArray(d.equipamento) ? d.equipamento : [d.equipamento].filter(Boolean),
                media: {
                  video: d.exercise_media?.find?.((m: any) => m.media_type === "video")?.url || null,
                  image: d.exercise_media?.find?.((m: any) => m.media_type === "image")?.url || null
                }
              }));
            }
          } catch {
            // Em caso de falha de conexão com banco, mantém acervo estruturado mfitExercises
          }

          const combined = [...mfitExercises];
          for (const dbEx of dbExercises) {
            if (!combined.some(c => c.name.toLowerCase() === dbEx.name.toLowerCase())) {
              combined.push(dbEx);
            }
          }

          return json({
            data: combined,
            total: combined.length
          });
        } catch (error) {
          return errorResponse(error);
        }
      }
    }
  }
});
