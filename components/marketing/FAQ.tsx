'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'O que é VEYRA?',
      answer: 'VEYRA é uma extensão de navegador alimentada por IA que automatiza tarefas repetitivas na web. Extraia dados, preencha formulários, agende ações e muito mais sem escrever código.'
    },
    {
      question: 'Preciso saber programar?',
      answer: 'Não! VEYRA foi projetado para ser usado por qualquer pessoa. Nosso editor visual permite criar automações complexas com cliques. Para usuários avançados, também oferecemos API e webhooks.'
    },
    {
      question: 'Meus dados estão seguros?',
      answer: 'Sim. Seus dados são processados localmente no navegador e criptografados de ponta a ponta. Nunca armazenamos credenciais ou dados sensíveis. Somos compatíveis com LGPD e GDPR.'
    },
    {
      question: 'Posso cancelar a qualquer momento?',
      answer: 'Sim, você pode cancelar seu plano a qualquer momento sem taxas. Seu acesso continuará até o fim do período pago. Não fazemos cobranças automáticas sem aviso prévio.'
    },
    {
      question: 'Qual a diferença entre os planos?',
      answer: 'O plano Free é perfeito para testar com 10 automações/mês. O Pro oferece automações ilimitadas, agendamento e API. O Enterprise adiciona suporte dedicado, SSO e gerenciamento de equipe.'
    },
    {
      question: 'Tem período de teste?',
      answer: 'Sim! O plano Pro tem 14 dias de teste grátis, sem cartão de crédito. Você pode testar todos os recursos premium antes de decidir.'
    },
    {
      question: 'VEYRA funciona em qualquer site?',
      answer: 'VEYRA funciona na maioria dos sites públicos. Alguns sites com proteções anti-bot avançadas podem ter limitações. Entre em contato se tiver dúvidas sobre um site específico.'
    },
    {
      question: 'Como funciona o suporte?',
      answer: 'Free: suporte por email em até 48h. Pro: suporte prioritário em até 12h. Enterprise: suporte dedicado 24/7 com SLA garantido e canal direto no Slack.'
    }
  ];

  return (
    <section id="faq" className="py-24 lg:py-32 relative overflow-hidden bg-bg-surface">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-dim border border-cyan-border mb-6">
            <span className="text-sm font-medium text-cyan">FAQ</span>
          </div>
          <h2 className="mb-4">
            Perguntas
            <span className="block text-gradient">Frequentes</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Tudo o que você precisa saber sobre VEYRA
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass border border-border-subtle hover:border-cyan-border rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-white/[0.02] transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-text-primary">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-dim border border-cyan-border flex items-center justify-center text-cyan transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-text-secondary leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-text-tertiary mb-4">
            Ainda tem dúvidas?
          </p>
          <a
            href="/support"
            className="inline-flex items-center gap-2 text-cyan hover:text-cyan-light transition-colors duration-200 font-medium"
          >
            Entre em contato
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
