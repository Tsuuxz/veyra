'use client';

import { Card } from '@/components/ui';
import { 
  Sparkles, RefreshCw, Zap, Paperclip, Mic, BookOpen, 
  History, MousePointerClick, Download, FolderKanban, 
  RefreshCcw, Settings 
} from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI Prompt Optimizer',
    description: 'Melhora automaticamente seus prompts antes do envio para resultados superiores.',
  },
  {
    icon: RefreshCw,
    title: 'Rewrite',
    description: 'Reescreve comandos mantendo a intenção, otimizando clareza e precisão.',
  },
  {
    icon: Zap,
    title: 'Direct Prompt',
    description: 'Envio rápido e direto pelo painel lateral sem interrupções.',
  },
  {
    icon: Paperclip,
    title: 'Attachments',
    description: 'Adicione imagens, documentos e arquivos diretamente aos seus prompts.',
  },
  {
    icon: Mic,
    title: 'Voice to Text',
    description: 'Transforme sua voz em prompt de forma instantânea e precisa.',
  },
  {
    icon: BookOpen,
    title: 'Skills',
    description: 'Biblioteca de instruções e especialistas reutilizáveis para produtividade.',
  },
  {
    icon: History,
    title: 'Prompt History',
    description: 'Histórico completo de prompts com busca e reutilização rápida.',
  },
  {
    icon: MousePointerClick,
    title: 'Quick Actions',
    description: 'Ações frequentes em um clique para eliminar passos desnecessários.',
  },
  {
    icon: Download,
    title: 'Project Download',
    description: 'Download fácil e rápido de projetos completos com um clique.',
  },
  {
    icon: FolderKanban,
    title: 'Project Management',
    description: 'Gerenciamento simplificado de múltiplos projetos em um só lugar.',
  },
  {
    icon: RefreshCcw,
    title: 'Auto Updates',
    description: 'Atualizações automáticas e silenciosas para sempre ter a melhor versão.',
  },
  {
    icon: Settings,
    title: 'Extension Control',
    description: 'Status e configurações centralizadas com controle total.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Recursos pensados para
            <br />
            desenvolvedores reais
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Cada função nasceu de um problema real. Você só colhe o resultado: mais entrega, menos fricção.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              hover
              padding="md"
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-veyra-cyan/10 text-veyra-cyan mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-base font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
