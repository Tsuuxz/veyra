'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'Como funciona a instalação?',
    answer: 'A instalação é extremamente simples. Baixe o arquivo da extensão, instale no seu navegador Chromium e faça login com sua conta VEYRA. Todo o processo leva menos de 60 segundos.',
  },
  {
    question: 'VEYRA funciona em qual navegador?',
    answer: 'VEYRA é compatível com todos os navegadores baseados em Chromium: Chrome, Edge, Brave, Opera, Vivaldi e outros. Versão mínima: Chromium 90+.',
  },
  {
    question: 'Preciso de conhecimento técnico para usar?',
    answer: 'Não. A interface foi projetada para ser intuitiva e funcionar imediatamente após a instalação. Se você já usa ferramentas de IA para desenvolvimento, vai se sentir em casa.',
  },
  {
    question: 'Como funciona o sistema de licenças?',
    answer: 'Cada licença permite uso em até 3 dispositivos simultâneos. Você pode gerenciar e desconectar dispositivos a qualquer momento pelo dashboard.',
  },
  {
    question: 'Posso usar offline?',
    answer: 'VEYRA requer conexão com internet para comunicação com APIs de IA e sincronização de dados. Algumas funcionalidades básicas funcionam offline.',
  },
  {
    question: 'Há garantia de reembolso?',
    answer: 'Sim. Oferecemos 7 dias de garantia incondicional. Se não ficar satisfeito, devolvemos 100% do valor pago, sem perguntas.',
  },
  {
    question: 'Como recebo atualizações?',
    answer: 'Todas as atualizações são automáticas e silenciosas. Você sempre terá a versão mais recente sem precisar fazer nada.',
  },
  {
    question: 'Qual o suporte oferecido?',
    answer: 'Oferecemos suporte via WhatsApp, email e sistema de tickets. Tempo médio de resposta: 4 horas em dias úteis.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-border-primary last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-medium text-text-primary group-hover:text-veyra-cyan transition-colors">
          {question}
        </span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-text-tertiary transition-transform flex-shrink-0 ml-4',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      
      {isOpen && (
        <div className="pb-5 animate-slide-down">
          <p className="text-text-secondary leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-bg-secondary">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-lg text-text-secondary">
              Respostas diretas para as dúvidas mais comuns sobre VEYRA
            </p>
          </div>
          
          <div className="bg-bg-elevated border border-border-primary rounded-2xl p-6 md:p-8 animate-fade-in">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
          
          <div className="mt-12 text-center animate-slide-up" style={{ animationDelay: '200ms' }}>
            <p className="text-text-secondary mb-4">
              Não encontrou sua resposta?
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-veyra-cyan hover:text-veyra-cyan-light font-medium transition-colors"
            >
              Fale conosco no WhatsApp
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
