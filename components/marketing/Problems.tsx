'use client';

import { Card } from '@/components/ui';
import { AlertCircle, Clock, Repeat, FileText, Database, Zap } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Interrupções no workflow',
    description: 'Seu fluxo de trabalho para no meio de uma ideia por limitações da ferramenta.',
  },
  {
    icon: Repeat,
    title: 'Tarefas repetitivas',
    description: 'Você repete os mesmos comandos e ações manualmente dezenas de vezes por dia.',
  },
  {
    icon: FileText,
    title: 'Prompts mal estruturados',
    description: 'Perder tempo reescrevendo prompts que poderiam ser otimizados automaticamente.',
  },
  {
    icon: AlertCircle,
    title: 'Excesso de ações manuais',
    description: 'Copiar, colar, navegar entre abas, gerenciar arquivos manualmente.',
  },
  {
    icon: Database,
    title: 'Contexto perdido',
    description: 'Dificuldade em transportar contexto entre projetos e sessões de trabalho.',
  },
  {
    icon: Zap,
    title: 'Tempo perdido',
    description: 'Minutos acumulados em micro-tarefas que deveriam ser instantâneas.',
  },
];

export function Problems() {
  return (
    <section className="py-24 bg-bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Seu fluxo não deveria parar
            <br />
            no meio de uma ideia
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Problemas reais que interrompem desenvolvedores todos os dias. VEYRA foi criada para eliminar essas fricções.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <Card
              key={problem.title}
              hover
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-500/10 text-red-500 mb-4 group-hover:scale-110 transition-transform">
                <problem.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {problem.title}
              </h3>
              
              <p className="text-sm text-text-secondary">
                {problem.description}
              </p>
            </Card>
          ))}
        </div>
        
        {/* Transformation */}
        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '600ms' }}>
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-bg-elevated border border-border-primary rounded-full">
            <span className="text-sm font-medium text-text-secondary">Problemas identificados</span>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-veyra-cyan/20 text-veyra-cyan">
              <ArrowRight className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium text-text-primary">Soluções VEYRA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}
