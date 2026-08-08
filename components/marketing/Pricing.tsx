'use client';

import { Card, Button, Badge } from '@/components/ui';
import { Check } from 'lucide-react';
import Link from 'next/link';

// Este componente será atualizado para buscar planos do banco de dados
// Por enquanto, usando dados estáticos para estrutura

const plans = [
  {
    id: 'trial',
    name: 'Trial',
    price: 5.99,
    duration: '3 dias',
    badge: null,
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
    duration: 'mensal',
    badge: 'MAIS POPULAR',
    recommended: true,
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
    duration: 'único',
    badge: 'MELHOR VALOR',
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
    <section id="pricing" className="py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Pague uma vez,
            <br />
            construa sem teto
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Escolha o plano ideal para seu ritmo de trabalho. Sem assinaturas escondidas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.id}
              padding="lg"
              className={cn(
                'relative animate-scale-in',
                plan.recommended && 'border-veyra-cyan shadow-xl shadow-veyra-cyan/10'
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              {plan.badge && (
                <Badge 
                  variant="outline" 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-bg-primary border-veyra-cyan text-veyra-cyan"
                >
                  {plan.badge}
                </Badge>
              )}
              
              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold text-text-primary">
                    R$ {plan.price.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-text-secondary">
                    / {plan.duration}
                  </span>
                </div>
              </div>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-veyra-cyan/20 text-veyra-cyan">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <Link href="/register" className="block">
                <Button
                  variant={plan.recommended ? 'primary' : 'secondary'}
                  size="lg"
                  className="w-full"
                >
                  Começar agora
                </Button>
              </Link>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-slide-up" style={{ animationDelay: '300ms' }}>
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-bg-elevated border border-border-primary rounded-2xl">
            <div className="text-4xl">🛡️</div>
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-1">
                7 dias de garantia incondicional
              </h4>
              <p className="text-sm text-text-secondary">
                Use a VEYRA sem risco. Se não gostar, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
