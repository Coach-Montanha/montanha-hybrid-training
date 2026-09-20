import React, { useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import {
  Zap,
  Flame,
  Activity,
  Timer,
  Gauge,
  Calculator,
  ArrowRight,
  Sparkles,
  TrendingUp,
  HeartPulse,
  Dumbbell,
  CheckCircle2,
  Copy
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export const Route = createFileRoute('/boost')({
  component: BoostPage,
});

const QUICK_WORKOUTS = [
  {
    title: 'EMOM 20 Turbo — KB & Peso Corporal',
    type: 'EMOM',
    duration: '20 min',
    intensity: 'Alta',
    description: 'Minuto 1: 15 KB Swings (24/16kg); Minuto 2: 12 Burpees; Minuto 3: 15 Goblet Squats; Minuto 4: Descanso ativo.',
    color: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300'
  },
  {
    title: 'Tabata 4x4 — Queima & Potência',
    type: 'Tabata',
    duration: '16 min',
    intensity: 'Máxima',
    description: '20s estímulo / 10s repouso: 1. Thrusters; 2. Remo/Bike Sprint; 3. Flexões Explosivas; 4. Hollow Rock.',
    color: 'border-purple-500/40 bg-purple-500/10 text-purple-300'
  },
  {
    title: 'Intervalado VAM 30/30 — Corrida',
    type: 'Endurance',
    duration: '25 min',
    intensity: 'VAM 105%',
    description: '10 min aquecimento Z2 + 10x (30s @ 105% VAM / 30s trote Z1) + 5 min desaquecimento.',
    color: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
  },
  {
    title: 'Complex Barbell — Carga & Força Rápida',
    type: 'LPO / Força',
    duration: '20 min',
    intensity: 'Submáxima',
    description: '5 séries sem largar a barra: 3 Deadlifts + 3 Hang Power Cleans + 3 Front Squats + 3 Push Presses.',
    color: 'border-amber-500/40 bg-amber-500/10 text-amber-300'
  }
];

function BoostPage() {
  // Calculadora 1RM
  const [weight, setWeight] = useState<number>(100);
  const [reps, setReps] = useState<number>(5);
  
  // Calculadora VAM
  const [distanciaMetros, setDistanciaMetros] = useState<number>(1500);
  const [tempoMinutos, setTempoMinutos] = useState<number>(5.5);

  const oneRmEpley = Math.round(weight * (1 + reps / 30));
  const oneRmBrzycki = Math.round(weight * (36 / (37 - reps)));

  const vamKmh = ((distanciaMetros / (tempoMinutos * 60)) * 3.6).toFixed(1);
  const vamPaceMinSec = () => {
    const vam = Number(vamKmh);
    if (!vam || vam <= 0) return '0:00';
    const paceSecondsTotal = 3600 / vam;
    const min = Math.floor(paceSecondsTotal / 60);
    const sec = Math.round(paceSecondsTotal % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec} /km`;
  };

  const copyWorkout = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Treino copiado para a área de transferência!');
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40 p-6 md:p-10 shadow-2xl backdrop-blur-xl">
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="border-cyan-500/50 bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-wider px-3 py-1">
              <Zap className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
              Acelerador de Performance
            </Badge>
            <Badge variant="outline" className="border-purple-500/50 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-wider px-3 py-1">
              <Flame className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
              Treinos Express &amp; Métricas Avançadas
            </Badge>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                Performance <span className="text-cyan-400">Booster</span>
              </h1>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed mt-1">
                Acelere os resultados dos seus atletas com treinos rápidos de alta densidade,
                cálculo preciso de 1RM, zonas de VAM e otimização por IA.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button asChild variant="outline" className="border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-xs font-bold">
                <Link to="/eco">Hub Ecossistema</Link>
              </Button>
              <Button asChild className="bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold">
                <Link to="/create">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                  Criar Programa Completo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Workouts Section */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
            <Timer className="w-6 h-6 text-cyan-400" />
            Treinos Rápidos Express (15 a 25 Minutos)
          </h2>
          <p className="text-xs text-muted-foreground">
            Prescrições ultrarrápidas de alta densidade para quando o tempo do atleta é escasso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {QUICK_WORKOUTS.map((workout, idx) => (
            <Card key={idx} className="p-6 border-slate-800 bg-card/70 backdrop-blur-md space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex justify-between items-start gap-2">
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${workout.color}`}>
                    {workout.type} • {workout.duration}
                  </span>
                  <Badge variant="outline" className="text-[10px] border-slate-700 text-slate-300">
                    Intensidade: {workout.intensity}
                  </Badge>
                </div>

                <h3 className="font-extrabold text-base text-white">{workout.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-mono bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  {workout.description}
                </p>
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  onClick={() => copyWorkout(`${workout.title}\n${workout.description}`)}
                  variant="outline"
                  size="sm"
                  className="w-full text-xs font-bold border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/10"
                >
                  <Copy className="w-3.5 h-3.5 mr-1.5" />
                  Copiar Treino
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Calculators Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1RM Calculator */}
        <Card className="p-6 border-slate-800 bg-card/70 backdrop-blur-md space-y-5">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <Dumbbell className="w-5 h-5 text-cyan-400" />
            <div>
              <h3 className="font-extrabold text-base text-white">Estimador de 1RM com IA</h3>
              <p className="text-xs text-muted-foreground">Previsão precisa de carga máxima sem teste exaustivo</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="space-y-1.5">
              <Label htmlFor="weight" className="text-xs font-bold">Carga Levantada (kg)</Label>
              <Input
                id="weight"
                type="number"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="bg-slate-900 border-slate-800 font-mono font-bold"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="reps" className="text-xs font-bold">Repetições Executadas</Label>
              <Input
                id="reps"
                type="number"
                min={1}
                max={15}
                value={reps}
                onChange={(e) => setReps(Number(e.target.value))}
                className="bg-slate-900 border-slate-800 font-mono font-bold"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-slate-950/80 p-3.5 rounded-xl border border-cyan-500/30 text-center">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-bold">1RM (Epley)</span>
              <span className="text-2xl font-black text-cyan-400 font-mono">{oneRmEpley} kg</span>
            </div>
            <div className="bg-slate-950/80 p-3.5 rounded-xl border border-purple-500/30 text-center">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-bold">1RM (Brzycki)</span>
              <span className="text-2xl font-black text-purple-400 font-mono">{oneRmBrzycki} kg</span>
            </div>
          </div>

          {/* Percentages Bar */}
          <div className="space-y-2 pt-1 border-t border-slate-800/80 text-xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Zonas de Intensidade de Carga:</span>
            <div className="grid grid-cols-4 gap-1.5 font-mono text-center text-[11px]">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span className="block text-[9px] text-muted-foreground">70%</span>
                <span className="font-bold text-slate-200">{Math.round(oneRmEpley * 0.7)}kg</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span className="block text-[9px] text-muted-foreground">80%</span>
                <span className="font-bold text-slate-200">{Math.round(oneRmEpley * 0.8)}kg</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span className="block text-[9px] text-muted-foreground">85%</span>
                <span className="font-bold text-cyan-300">{Math.round(oneRmEpley * 0.85)}kg</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span className="block text-[9px] text-muted-foreground">90%</span>
                <span className="font-bold text-purple-300">{Math.round(oneRmEpley * 0.9)}kg</span>
              </div>
            </div>
          </div>
        </Card>

        {/* VAM Calculator */}
        <Card className="p-6 border-slate-800 bg-card/70 backdrop-blur-md space-y-5">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <HeartPulse className="w-5 h-5 text-emerald-400" />
            <div>
              <h3 className="font-extrabold text-base text-white">Calculadora VAM &amp; Zonas Aeróbicas</h3>
              <p className="text-xs text-muted-foreground">Velocidade Aeróbica Máxima para Endurance e Corrida</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="space-y-1.5">
              <Label htmlFor="dist" className="text-xs font-bold">Distância do Teste (m)</Label>
              <Input
                id="dist"
                type="number"
                value={distanciaMetros}
                onChange={(e) => setDistanciaMetros(Number(e.target.value))}
                className="bg-slate-900 border-slate-800 font-mono font-bold"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="tempo" className="text-xs font-bold">Tempo (Minutos)</Label>
              <Input
                id="tempo"
                type="number"
                step="0.1"
                value={tempoMinutos}
                onChange={(e) => setTempoMinutos(Number(e.target.value))}
                className="bg-slate-900 border-slate-800 font-mono font-bold"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-slate-950/80 p-3.5 rounded-xl border border-emerald-500/30 text-center">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-bold">VAM Estimada</span>
              <span className="text-2xl font-black text-emerald-400 font-mono">{vamKmh} km/h</span>
            </div>
            <div className="bg-slate-950/80 p-3.5 rounded-xl border border-cyan-500/30 text-center">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-bold">Pace Médio VAM</span>
              <span className="text-2xl font-black text-cyan-400 font-mono">{vamPaceMinSec()}</span>
            </div>
          </div>

          {/* Zones Bar */}
          <div className="space-y-2 pt-1 border-t border-slate-800/80 text-xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Zonas de Treino por VAM:</span>
            <div className="grid grid-cols-3 gap-1.5 font-mono text-center text-[11px]">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span className="block text-[9px] text-emerald-400">Z2 (65-75%)</span>
                <span className="font-bold text-slate-200">{(Number(vamKmh) * 0.7).toFixed(1)} km/h</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span className="block text-[9px] text-amber-400">Z3 Limiar (80-88%)</span>
                <span className="font-bold text-slate-200">{(Number(vamKmh) * 0.84).toFixed(1)} km/h</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span className="block text-[9px] text-red-400">Z5 VO2max (95-105%)</span>
                <span className="font-bold text-cyan-300">{(Number(vamKmh) * 1.0).toFixed(1)} km/h</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default BoostPage;
