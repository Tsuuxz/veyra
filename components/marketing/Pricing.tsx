'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';

const plans = [
  {
    id: 'trial',
    name: 'Trial',
    price: 5.99,
    period: '3 dias',
    badge: null,
    highlight: false,
    features: [
      'Acesso completo por 3 dias',
      '1 dispositivo',
      'Todos os recursos',
      'Suporte básico',
    ],
  },
  {
    id: 'pro',
    name: 'VEYRA Pro',
    price: 49.90,
    period: 'por mês',
    badge: 'MAIS POPULAR',
    highlight: true,
    features: [
      'Acesso completo ilimitado',
      '3 dispositivos',
      'Todos os recursos',
      'Atualizações inclusas',
      'Suporte prioritário',
      'Skills personalizadas',
    ],
  },
  {
    id: 'lifetime',
    name: 'Lifetime',
    price: 299.90,
    period: 'pagamento único',
    badge: 'MELHOR VALOR',
    highlight: false,
    features: [
      'Acesso vitalício',
      '3 dispositivos',
      'Todos os recursos',
      'Todas as atualizações',
      'Suporte VIP',
      'Skills personalizadas',
      'Acesso antecipado a novidades',
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#111111]">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-4">
            Pague uma vez,
            <br />
            construa sem teto
          </h2>
          <p className="text-lg text-[#A0A0A0] max-w-xl mx-auto">
            Sem assinaturas escondidas. Pagamento único. Cancelamento em 1 clique.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              className={`relative p-8 rounded-2xl border transition-all duration-200 animate-scale-in flex flex-col ${
                plan.highlight
                  ? 'border-[#F5C842]/50 bg-[#F5C842]/[0.04] shadow-[0_0_60px_rgba(245,200,66,0.08)]'
                  : 'border-white/[0.08] bg-[#0A0A0A] hover:border-white/[0.14]'
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${
                  plan.highlight
                    ? 'bg-[#F5C842] text-[#0A0A0A]'
                    : 'bg-[#222222] border border-white/[0.1] text-[#A0A0A0]'
                }`}>
                  {plan.badge}
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <p className="text-sm font-medium text-[#A0A0A0] mb-2">{plan.name}</p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-[#F2F2F2]">
                    R$ {plan.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <p className="text-sm text-[#606060] mt-1">{plan.period}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full mt-0.5 ${
                      plan.highlight ? 'bg-[#F5C842]/20 text-[#F5C842]' : 'bg-white/[0.06] text-[#A0A0A0]'
                    }`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm text-[#A0A0A0]">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/register"
                className={`block w-full py-3.5 rounded-xl text-center font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  plan.highlight
                    ? 'bg-[#F5C842] text-[#0A0A0A] hover:bg-[#F7D46A]'
                    : 'bg-[#191919] border border-white/[0.1] text-[#F2F2F2] hover:border-white/[0.2]'
                }`}
              >
                Começar agora
              </Link>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-14 flex justify-center animate-slide-up" style={{ animationDelay: '300ms' }}>
          <div className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-[#0A0A0A] border border-white/[0.07]">
            <span className="text-4xl">🛡️</span>
            <div>
              <p className="font-semibold text-[#F2F2F2]">7 dias de garantia incondicional</p>
              <p className="text-sm text-[#A0A0A0]">Não gostou? Devolvemos 100% sem perguntas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
