'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  { q: 'Como funciona a instalação?', a: 'Baixe o arquivo da extensão, instale no navegador Chromium e faça login. Todo o processo leva menos de 60 segundos, sem configurações complexas.' },
  { q: 'VEYRA funciona em qual navegador?', a: 'Compatível com todos os navegadores baseados em Chromium: Chrome, Edge, Brave, Opera, Vivaldi e outros (versão mínima Chromium 90+).' },
  { q: 'Preciso de conhecimento técnico?', a: 'Não. A interface é intuitiva e funciona imediatamente após instalação. Se você já usa o Lovable, vai se sentir em casa.' },
  { q: 'Como funciona o sistema de licenças?', a: 'Cada licença permite uso em até 3 dispositivos simultâneos. Você gerencia e desconecta dispositivos a qualquer momento pelo dashboard.' },
  { q: 'Há garantia de reembolso?', a: 'Sim. 7 dias de garantia incondicional. Se não ficar satisfeito, devolvemos 100% do valor pago, sem perguntas, sem burocracia.' },
  { q: 'Como recebo atualizações?', a: 'Todas as atualizações são automáticas e silenciosas. Você sempre tem a versão mais recente sem fazer nada.' },
  { q: 'Qual o suporte oferecido?', a: 'Suporte via WhatsApp com atendimento humano. Tempo médio de resposta: menos de 4 horas em dias úteis.' },
  { q: 'Funciona no Android e iOS?', a: 'Sim, funciona em navegadores Chromium móveis. A experiência é otimizada para desktop, mas é plenamente funcional no mobile.' },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.07] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group gap-4"
      >
        <span className="text-sm font-medium text-[#F2F2F2] group-hover:text-[#F5C842] transition-colors leading-snug">
          {q}
        </span>
        <ChevronDown className={cn('w-4 h-4 text-[#606060] flex-shrink-0 transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <p className="pb-5 text-sm text-[#A0A0A0] leading-relaxed animate-slide-down">
          {a}
        </p>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-14 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-4">
            Dúvidas direto ao ponto
          </h2>
          <p className="text-lg text-[#A0A0A0]">
            8 respostas para você decidir agora.
          </p>
        </div>

        <div className="rounded-2xl bg-[#111111] border border-white/[0.07] px-6 md:px-8 animate-fade-in">
          {faqs.map((faq) => <Item key={faq.q} {...faq} />)}
        </div>

        <div className="mt-10 text-center animate-slide-up" style={{ animationDelay: '200ms' }}>
          <p className="text-[#606060] text-sm mb-3">Não encontrou sua resposta?</p>
          <a href="#" className="inline-flex items-center gap-2 text-[#F5C842] font-medium text-sm hover:text-[#F7D46A] transition-colors">
            Falar no WhatsApp
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
