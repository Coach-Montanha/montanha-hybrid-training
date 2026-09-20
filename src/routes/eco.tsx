import React from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import {
  Sparkles,
  Zap,
  Layers,
  Database,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Bot,
  Activity,
  Award,
  Flame,
  FileText,
  DollarSign,
  MessageSquare,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Route = createFileRoute('/eco')({
  component: EcoPage,
});

const ECOSYSTEM_APPS = [
  {
    id: 'sistema-hibrido',
    name: 'Montanha Hybrid Training',
    tag: 'Plataforma Atual',
    category: 'Treinamento & Periodização',
    color: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300',
    icon: Flame,
    url: '/app',
    isLocal: true,
    description: 'Plataforma de alta performance para atletas híbridos, endurance, musculação, LPO e periodização com IA.'
  },
  {
    id: 'eduflow-finance',
    name: 'Montanha Personal Studio',
    tag: 'EduFlow Finance',
    category: 'Finanças & Gestão de Studio',
    color: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
    icon: DollarSign,
    url: 'http://localhost:5173/eco',
    isLocal: false,
    description: 'Gestão financeira, controle de alunos, cobrança automática e contratos para personal trainers.'
  },
  {
    id: 'smart-language',
    name: 'Montanha Language AI',
    tag: 'Smart Language',
    category: 'Idiomas & Imersão com IA',
    color: 'border-indigo-500/40 bg-indigo-500/10 text-indigo-300',
    icon: Globe,
    url: 'http://localhost:5174/eco',
    isLocal: false,
    description: 'Tutor de idiomas inteligente com IA, microtreinos de 5 minutos e fluência acelerada.'
  },
  {
    id: 'construtor-pdf',
    name: 'Montanha PDF Studio',
    tag: 'Editorial & PDFs',
    category: 'Diagramação Editorial',
    color: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
    icon: FileText,
    url: 'http://localhost:5175/eco',
    isLocal: false,
    description: 'Gerador e diagramador de fichas de treino, relatórios e e-books com padrão editorial suíço.'
  },
  {
    id: 'whatsapp-lovable',
    name: 'Montanha WhatsApp Automation',
    tag: 'SaaS WhatsApp',
    category: 'Automação & CRM',
    color: 'border-purple-500/40 bg-purple-500/10 text-purple-300',
    icon: MessageSquare,
    url: 'http://localhost:3000/#/eco',
    isLocal: false,
    description: 'Disparos inteligentes de WhatsApp, notificações de treinos e CRM integrado multi-tenant.'
  }
];

function EcoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40 p-6 md:p-10 shadow-2xl backdrop-blur-xl">
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="border-cyan-500/50 bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-wider px-3 py-1">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
              Ecossistema Montanha Hub
            </Badge>
            <Badge variant="outline" className="border-purple-500/50 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-wider px-3 py-1">
              <Zap className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
              Ruflo Eco Engine v2.5
            </Badge>
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Hub do Ecossistema <span className="text-cyan-400">Montanha</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed">
            Painel unificado do ecossistema de 5 aplicativos. Alterne instantaneamente entre os módulos,
            monitore a eficiência da economia de tokens do motor Ruflo e acesse ferramentas de alta performance.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-bold shadow-lg">
              <Link to="/create">
                <Sparkles className="w-4 h-4 mr-2" />
                Estúdio de Criação com IA
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-cyan-500/40 hover:bg-cyan-500/10 text-cyan-300 font-bold">
              <Link to="/boost">
                <Zap className="w-4 h-4 mr-2" />
                Acelerador de Performance
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-purple-500/40 hover:bg-purple-500/10 text-purple-300 font-bold">
              <Link to="/master-admin">
                <ShieldCheck className="w-4 h-4 mr-2" />
                Painel Master SuperAdmin
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Ruflo Eco Engine KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-5 border-cyan-500/20 bg-card/60 backdrop-blur-md space-y-2">
          <div className="flex justify-between items-center text-muted-foreground">
            <span className="text-xs font-bold uppercase tracking-wider">Economia de Tokens</span>
            <Zap className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-3xl font-black text-cyan-400">84.7%</div>
          <p className="text-xs text-muted-foreground">Redução estimada de custos com Ruflo /eco</p>
        </Card>

        <Card className="p-5 border-purple-500/20 bg-card/60 backdrop-blur-md space-y-2">
          <div className="flex justify-between items-center text-muted-foreground">
            <span className="text-xs font-bold uppercase tracking-wider">Cache Semântico Local</span>
            <Database className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-3xl font-black text-purple-400">0 Tokens</div>
          <p className="text-xs text-muted-foreground">Consultas repetidas servidas com latência zero</p>
        </Card>

        <Card className="p-5 border-emerald-500/20 bg-card/60 backdrop-blur-md space-y-2">
          <div className="flex justify-between items-center text-muted-foreground">
            <span className="text-xs font-bold uppercase tracking-wider">Compressão de Contexto</span>
            <Layers className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-black text-emerald-400">Ativa</div>
          <p className="text-xs text-muted-foreground">Context Pruning preservando intenção do atleta</p>
        </Card>

        <Card className="p-5 border-amber-500/20 bg-card/60 backdrop-blur-md space-y-2">
          <div className="flex justify-between items-center text-muted-foreground">
            <span className="text-xs font-bold uppercase tracking-wider">Nível de Modelo Dinâmico</span>
            <Bot className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-3xl font-black text-amber-400">Flash 2.5</div>
          <p className="text-xs text-muted-foreground">Roteamento automático por complexidade de treino</p>
        </Card>
      </div>

      {/* 5 Apps of the Ecosystem */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
              <Globe className="w-6 h-6 text-cyan-400" />
              Aplicativos do Ecossistema Montanha
            </h2>
            <p className="text-xs text-muted-foreground">
              Conectividade total entre treinamento, finanças, idiomas, editorial e comunicação.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ECOSYSTEM_APPS.map((app) => {
            const Icon = app.icon;
            return (
              <Card
                key={app.id}
                className={`p-6 border transition-all duration-200 hover:shadow-xl hover:border-cyan-500/50 bg-card/70 backdrop-blur-md flex flex-col justify-between space-y-4 ${
                  app.isLocal ? 'ring-2 ring-cyan-500/30' : ''
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${app.color}`}>
                        {app.tag}
                      </span>
                      {app.isLocal && (
                        <span className="text-[10px] font-bold text-cyan-400">App Local</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-base text-white">{app.name}</h3>
                    <p className="text-xs font-semibold text-muted-foreground">{app.category}</p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {app.description}
                  </p>
                </div>

                <div className="pt-2">
                  {app.isLocal ? (
                    <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold">
                      <Link to={app.url}>
                        Acessar Aplicativo <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 font-bold"
                    >
                      <a href={app.url} target="_blank" rel="noopener noreferrer">
                        Abrir Módulo <ExternalLink className="w-4 h-4 ml-1.5" />
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EcoPage;
