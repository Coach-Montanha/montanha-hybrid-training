import React from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { Wand2, Sparkles, Calendar, Layers, ArrowLeft, ArrowRight, Activity, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GerarPanel } from './_authenticated/app.gerar';

export const Route = createFileRoute('/create')({
  component: CreateStudioPage,
});

function CreateStudioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40 p-6 md:p-10 shadow-2xl backdrop-blur-xl">
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="border-cyan-500/50 bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-wider px-3 py-1">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
              Estúdio de Criação com IA
            </Badge>
            <Badge variant="outline" className="border-purple-500/50 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-wider px-3 py-1">
              <Wand2 className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
              Periodização Inteligente
            </Badge>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                Criação de <span className="text-cyan-400">Treinos &amp; Periodização</span>
              </h1>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed mt-1">
                Gere prescrições de alta performance com IA: Endurance, Musculação, LPO, Kettlebell Sport e Treinos Híbridos completos.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button asChild variant="outline" className="border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-xs font-bold">
                <Link to="/eco">
                  <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
                  Hub Ecossistema
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-cyan-500/40 hover:bg-cyan-500/10 text-cyan-300 text-xs font-bold">
                <Link to="/boost">
                  <Activity className="w-3.5 h-3.5 mr-1.5" />
                  Acelerador
                </Link>
              </Button>
              <Button asChild className="bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold">
                <Link to="/app/programas">
                  Ver Programas <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded GerarPanel */}
      <div className="bg-card/70 border border-slate-800 rounded-2xl p-4 md:p-8 shadow-xl backdrop-blur-md">
        <GerarPanel showHeader={false} />
      </div>
    </div>
  );
}

export default CreateStudioPage;
