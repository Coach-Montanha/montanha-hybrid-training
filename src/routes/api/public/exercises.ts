import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/exercises")({
  server: {
    handlers: {
      OPTIONS: async () => {
        const { preflight } = await import("@/lib/public-api.server");
        return preflight();
      },
      GET: async ({ request }) => {
        const { json, errorResponse } = await import("@/lib/public-api.server");
        try {
          const rawLimit = new URL(request.url).searchParams.get("limit");
          const limit = rawLimit ? Math.min(Math.max(Number(rawLimit) || 50, 1), 200) : 100;

          const mfitExercises = [
            {
              id: "mfit-ex-1",
              name: "Abdominal Canivete",
              muscle_group: "Core",
              description: "Abdominal Canivete no solo para fortalecimento de retos e flexores do quadril.",
              equipment: ["Solo", "Musculação"],
              instructions: "Flexão simultânea de tronco e quadris mantendo controle lombo-pélvico."
            },
            {
              id: "mfit-ex-2",
              name: "Abdominal Canivete Alternado",
              muscle_group: "Core",
              description: "Variação unilateral alternada do abdominal canivete com foco em oblíquos.",
              equipment: ["Solo", "Musculação"],
              instructions: "Toque alternado de mão na perna oposta mantendo estabilidade do tronco."
            },
            {
              id: "mfit-ex-3",
              name: "Abdominal com Rodinha Solo com Apoio",
              muscle_group: "Core",
              description: "Abdominal com roda de exercícios no solo com apoio de joelhos. Ênfase em anti-extensão lombar.",
              equipment: ["Roda de Abdominal", "Solo"],
              instructions: "Projeção anterior controlada mantendo ativação do core sem colapso lombar."
            },
            {
              id: "mfit-ex-4",
              name: "Mobilidade Torácica IV",
              muscle_group: "Mobilidade",
              description: "Trabalho de rotação e extensão torácica para liberação articular da cintura escapular.",
              equipment: ["Solo"],
              instructions: "Mobilização articular com foco na respiração e amplitude torácica."
            },
            {
              id: "mfit-ex-5",
              name: "Barra Horizontal no Smith",
              muscle_group: "Costas",
              description: "Puxada horizontal invertida na barra do Smith com apoio dos calcanhares no solo.",
              equipment: ["Smith Machine"],
              instructions: "Puxada mantendo tronco alinhado em prancha estrita até a barra tocar o peito."
            },
            {
              id: "mfit-ex-6",
              name: "Agachamento Livre",
              muscle_group: "Pernas",
              description: "Padrão fundamental de agachamento joelho-dominante com peso corporal ou sobrecarga.",
              equipment: ["Livre", "Barra"],
              instructions: "Flexão de joelhos e quadris mantendo calcanhares fixos e coluna neutra."
            },
            {
              id: "mfit-ex-7",
              name: "Agachamento Goblet com Kettlebell",
              muscle_group: "Pernas",
              description: "Agachamento frontal segurando kettlebell junto ao peito.",
              equipment: ["Kettlebell"],
              instructions: "Kettlebell junto ao esterno, descida profunda mantendo alinhamento do tronco."
            },
            {
              id: "mfit-ex-8",
              name: "Elevação de Pernas (S)",
              muscle_group: "Core",
              description: "Elevação de pernas suspensa ou solo para ativação de infra-abdominal e flexores.",
              equipment: ["Barra Fixa / Solo"],
              instructions: "Elevação controlada sem oscilação ou compensação lombar."
            },
            {
              id: "mfit-ex-9",
              name: "Carregamento Unilateral de Kettlebell",
              muscle_group: "Core",
              description: "Suitcase carry / caminhada unilateral com kettlebell para anti-flexão lateral do core.",
              equipment: ["Kettlebell"],
              instructions: "Caminhada em linha reta resistindo à inclinação do peso contralateral."
            },
            {
              id: "mfit-ex-10",
              name: "Agachamento Frontal Smith",
              muscle_group: "Pernas",
              description: "Agachamento frontal guiado no Smith. Séries de referência: Pirâmide 1x12 (leve) + 1x10 (moderada) + 1x8 (pesada), intervalo 60s.",
              equipment: ["Smith Machine"],
              media: {
                video: "https://vd.mfitpersonal.com.br/331/mp4/331.mp4"
              },
              instructions: "Barra apoiada sobre a linha clavicular anterior / deltóides anteriores com descida guiada."
            },
            {
              id: "mfit-ex-11",
              name: "Cardio (Bicicleta/Esteira/Escada/Elíptico)",
              muscle_group: "Cardio",
              description: "7 a 10 minutos de deslocamento contínuo em ergômetros.",
              equipment: ["Cardio", "Ergômetro"],
              instructions: "Ritmo constante aeróbico para condicionamento e aquecimento metabólico."
            },
            {
              id: "mfit-ex-12",
              name: "Cadeira Flexora",
              muscle_group: "Pernas",
              description: "Flexão de joelhos sentada. Prescrição de referência: 2x15 pesadas, carga ~50kg, intervalo 60s.",
              equipment: ["Máquina"],
              instructions: "Flexão completa de pernas mantendo quadril firme no assento."
            },
            {
              id: "mfit-ex-13",
              name: "Abdução de Quadril Máquina",
              muscle_group: "Glúteos",
              description: "Afastamento de pernas na cadeira abdutora com foco no glúteo médio. Prescrição: 2x35, carga ~100kg, intervalo 60s.",
              equipment: ["Máquina"],
              instructions: "Abertura máxima com 1 segundo de isometria no pico de contração."
            },
            {
              id: "mfit-ex-14",
              name: "Peck Deck",
              muscle_group: "Peito",
              description: "Voador peitoral na máquina para isolamento de peitoral maior. Prescrição: 2x12, carga ~35kg, intervalo 60s.",
              equipment: ["Máquina"],
              instructions: "Adução horizontal dos braços mantendo escápulas aduzidas."
            },
            {
              id: "mfit-ex-15",
              name: "Remada Baixa Supinada",
              muscle_group: "Costas",
              description: "Puxada no cabo baixo com pegada supinada para latíssimo do dorso e romboides. Prescrição: 2x12, carga ~6 placas, intervalo 60s.",
              equipment: ["Cabo / Polia"],
              instructions: "Puxada rente ao abdômen com ativação escapular completa."
            }
          ];

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
