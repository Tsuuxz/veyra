'use client';

import { Sparkles, RefreshCw, Zap, Paperclip, Mic, BookOpen, History, MousePointerClick, Download, FolderKanban, RefreshCcw, Settings } from 'lucide-react';

const features = [
  { icon: Sparkles, title: 'AI Prompt Optimizer', description: 'Melhora seus prompts automaticamente para resultados superiores.' },
  { icon: RefreshCw, title: 'Rewrite Cirúrgico', description: 'Reescreve comandos mantendo intenção e otimizando clareza.' },
  { icon: Zap, title: 'Direct Prompt', description: 'Envio rápido pelo painel lateral sem interrupções no fluxo.' },
  { icon: Paperclip, title: 'Attachments', description: 'Adicione imagens, docs e arquivos diretamente aos prompts.' },
  { icon: Mic, title: 'Voice to Text', description: 'Transforme voz em prompt de forma instantânea e precisa.' },
  { icon: BookOpen, title: 'Skills', description: 'Biblioteca de especialistas e instruções reutilizáveis.' },
  { icon: History, title: 'Prompt History', description: 'Histórico completo com busca e reutilização rápida.' },
  { icon: MousePointerClick, title: 'Quick Actions', description: 'Ações frequentes em um clique para eliminar passos extras.' },
  { icon: Download, title: 'Project Download', description: 'Download de projetos completos com um clique.' },
  { icon: FolderKanban, title: 'Project Management', description: 'Gerenciamento simplificado de múltiplos projetos.' },
  { icon: RefreshCcw, title: 'Auto Updates', description: 'Atualizações silenciosas para sempre ter a melhor versão.' },
  { icon: Settings, title: 'Extension Control', description: 'Status e configurações centralizadas com controle total.' },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-4">
            12 ferramentas pensadas
            <br className="hidden md:block" />
            para dev real
          </h2>
          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            Cada função nasceu de um problema real. Mais entrega, menos fricção.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl bg-[#111111] border border-white/[0.06] hover:border-[#F5C842]/25 hover:-translate-y-1 transition-all duration-200 group animate-slide-up"
              style={{ animationDelay: `${i * 45}ms` }}
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#F5C842]/10 text-[#F5C842] mb-4 group-hover:scale-110 transition-transform">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold text-[#F2F2F2] mb-1.5">{f.title}</h3>
              <p className="text-sm text-[#A0A0A0] leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
