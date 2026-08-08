'use client';

import { Download, LogIn, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Instale a extensão',
    description: 'Baixe o arquivo, instale no seu navegador Chromium. Sem configurações complexas, sem dependências.',
    detail: 'Instalação em 60 segundos',
  },
  {
    number: '02',
    icon: LogIn,
    title: 'Entre com sua conta',
    description: 'Faça login com email e senha e ative sua licença instantaneamente no painel.',
    detail: 'Ativação automática',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Trabalhe em modo turbo',
    description: 'VEYRA está pronta. Comece a construir com produtividade no triplo da velocidade.',
    detail: 'Resultado imediato',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#111111]">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-4">
            Simples. Direto. Funcional.
          </h2>
          <p className="text-lg text-[#A0A0A0] max-w-xl mx-auto">
            Três passos e você está construindo sem limites.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.666%+2rem)] right-[calc(16.666%+2rem)] h-px bg-white/[0.07]" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative animate-slide-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* Number circle */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F5C842] text-[#0A0A0A] text-sm font-bold mb-6 mx-auto lg:mx-0 relative z-10">
                  {step.number}
                </div>

                <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.07]">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F5C842]/10 text-[#F5C842] mb-5">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F2F2F2] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed mb-4">{step.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5C842]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5C842]" />
                    {step.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
