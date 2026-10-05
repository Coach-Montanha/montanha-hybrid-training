import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mountain, LogOut, ChevronRight, Dumbbell } from "lucide-react";
import { InstallAppButton } from "@/components/pwa/InstallAppButton";

export const Route = createFileRoute("/_authenticated/aluno")({
  component: AlunoHome,
});

function AlunoHome() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const { data: sessions = [] } = useQuery({
    queryKey: ["aluno-sessions"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("sessions")
        .select("id, titulo, numero_dia, data, status, program_weeks(numero_semana, programs(titulo, metodologia))")
        .order("data", { ascending: false });
      if (error) throw error;
      return data as any[];
    },
  });

  async function signOut() {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/50 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4 gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <Mountain className="h-5 w-5 text-primary" />
            <span className="font-semibold text-sm sm:text-base">Meus treinos</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Button asChild variant="outline" size="sm" className="gap-1.5 border-primary/40 text-primary hover:bg-primary/10">
              <Link to="/app">
                <Dumbbell className="h-4 w-4" /> Painel do Treinador
              </Link>
            </Button>
            <InstallAppButton size="sm" />
            <Button variant="ghost" size="sm" onClick={signOut}>
              <LogOut className="mr-1.5 h-4 w-4" /> Sair
            </Button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-3xl p-6">
        {sessions.length === 0 ? (
          <Card className="p-8 sm:p-12 text-center space-y-4 border-dashed">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Dumbbell className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-foreground">Nenhum treino liberado ainda para este perfil de aluno</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-md mx-auto">
                Se você é o treinador ou administrador da plataforma, acesse o painel de prescrição, exercícios e gestão de atletas abaixo:
              </p>
            </div>
            <div className="pt-2">
              <Button asChild className="gap-2 font-bold shadow-md">
                <Link to="/app">
                  <Dumbbell className="h-4 w-4" /> Acessar Painel do Treinador (/app)
                </Link>
              </Button>
            </div>
          </Card>
        ) : (
          <div className="space-y-3">
            {sessions.map((s: any) => (
              <Link key={s.id} to="/aluno/sessao/$id" params={{ id: s.id }}>
                <Card className="flex items-center justify-between p-4 hover:border-primary">
                  <div>
                    <div className="text-xs text-muted-foreground">
                      {s.program_weeks?.programs?.titulo ?? "Sessão"} · Semana {s.program_weeks?.numero_semana} · Dia {s.numero_dia} · {s.data ?? "sem data"}
                    </div>
                    <div className="mt-1 text-lg font-semibold">
                      {s.titulo ?? "Treino"}
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </Card>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}