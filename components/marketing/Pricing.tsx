'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '0',
      period: 'para sempre',
      description: 'Perfeito para começar e testar',
      features: [
        '10 automações por mês',
        '1 projeto ativo',
        'Suporte por email',
        'Acesso à comunidade',
        'Templates básicos'
      ],
      cta: 'Começar Grátis',
      href: '/register',
      highlighted: false
    },
    {
      name: 'Pro',
      price: '29',
      period: '/mês',
      description: 'Para profissionais produtivos',
      features: [
        'Automações ilimitadas',
        'Projetos ilimitados',
        'Suporte prioritário',
        'Agendamento avançado',
        'Webhooks e API',
        'Exportação de dados',
        'Todos os templates'
      ],
      cta: 'Começar Teste Grátis',
      href: '/register?plan=pro',
      highlighted: true,
      badge: 'Mais Popular'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Para equipes e empresas',
      features: [
        'Tudo do Pro +',
        'SSO e SAML',
        'Gerenciamento de equipe',
        'Suporte dedicado 24/7',
        'SLA garantido',
        'Onboarding personalizado',
        'Integração customizada'
      ],
      cta: 'Falar com Vendas',
      href: '/contact',
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border-medium to-transparent" />
      
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-dim border border-cyan-border mb-6">
            <span className="text-sm font-medium text-cyan">Preços</span>
          </div>
          <h2 className="mb-4">
            Planos para todos
            <span className="block text-gradient">os tamanhos</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Comece grátis, sem cartão de crédito. Upgrade quando precisar.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                plan.highlighted
                  ? 'glass-strong border-cyan shadow-2xl shadow-cyan/20 scale-105 md:scale-110'
                  : 'glass border-border-subtle hover:border-cyan-border hover:shadow-lg hover:shadow-cyan/10'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1.5 rounded-full bg-gradient-cyan text-bg-base text-sm font-semibold shadow-lg shadow-cyan/30">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-text-tertiary">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  {plan.price === 'Custom' ? (
                    <span className="text-4xl font-bold text-text-primary">
                      {plan.price}
                    </span>
                  ) : (
                    <>
                      <span className="text-2xl font-semibold text-text-secondary">R$</span>
                      <span className="text-5xl font-bold text-text-primary">
                        {plan.price}
                      </span>
                      <span className="text-text-tertiary">{plan.period}</span>
                    </>
                  )}
                </div>
              </div>

              {/* CTA Button */}
              <Link href={plan.href} className="block mb-8">
                <Button
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  size="lg"
                  className={`w-full ${
                    plan.highlighted
                      ? 'shadow-xl shadow-cyan/30 hover:shadow-2xl hover:shadow-cyan/40'
                      : ''
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-dim border border-cyan-border flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3 h-3 text-cyan"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-text-secondary">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Link */}
        <div className="text-center mt-16">
          <p className="text-text-tertiary mb-4">
            Dúvidas sobre os planos?
          </p>
          <a
            href="#faq"
            className="inline-flex items-center gap-2 text-cyan hover:text-cyan-light transition-colors duration-200 font-medium"
          >
            Ver Perguntas Frequentes
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
