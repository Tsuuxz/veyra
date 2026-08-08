'use client';

import { Clock, Repeat, FileText, AlertCircle, Database, Zap } from 'lucide-react';

const problems = [
  { icon: Clock, title: 'Workflow interrompido', description: 'Seu fluxo para no meio de uma ideia por limitações da ferramenta.' },
  { icon: Repeat, title: 'Tarefas repetitivas', description: 'Você repete os mesmos comandos manualmente dezenas de vezes por dia.' },
  { icon: FileText, title: 'Prompts mal estruturados', description: 'Perde tempo reescrevendo prompts que poderiam ser otimizados automaticamente.' },
  { icon: AlertCircle, title: 'Excesso de ações manuais', description: 'Copiar, colar, navegar entre abas, gerenciar arquivos sem parar.' },
  { icon: Database, title: 'Contexto perdido', description: 'Dificuldade em transportar contexto entre projetos e sessões.' },
  { icon: Zap, title: 'Créditos queimados', description: 'Minutos acumulados em micro-tarefas que consomem seus créditos à toa.' },
];

export function Problems() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-4">
            Seu fluxo não deveria parar
            <br className="hidden md:block" />
            no meio de uma ideia
          </h2>
          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            Problemas reais que travam devs todo dia. A VEYRA elimina cada um deles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.06] hover:border-white/[0.12] transition-all animate-slide-up group"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-red-500/10 text-red-400 mb-4 group-hover:scale-110 transition-transform">
                <p.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#F2F2F2] mb-2">{p.title}</h3>
              <p className="text-sm text-[#A0A0A0] leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        {/* Arrow */}
        <div className="mt-14 flex justify-center animate-slide-up" style={{ animationDelay: '500ms' }}>
          <div className="flex items-center gap-4 px-6 py-3 rounded-full border border-white/[0.08] bg-[#0A0A0A] text-sm">
            <span className="text-[#606060]">Todos esses problemas</span>
            <svg className="w-5 h-5 text-[#F5C842]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span className="font-semibold text-[#F5C842]">Resolvidos pela VEYRA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
