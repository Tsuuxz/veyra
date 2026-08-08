'use client';

import { Download, LogIn, Rocket } from 'lucide-react';
import { Card } from '@/components/ui';

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Instale',
    description: 'Instalação em 60 segundos. Sem configurações complexas, sem dependências.',
  },
  {
    number: '02',
    icon: LogIn,
    title: 'Entre na sua conta',
    description: 'Faça login com seu email e ative sua licença instantaneamente.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Ative e trabalhe',
    description: 'VEYRA está pronta. Comece a construir com produtividade maximizada.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Simples. Direto. Funcional.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Três passos e você está pronto para trabalhar sem limites.
          </p>
        </div>
        
        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Line */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-border-primary" />
            
            <div className="grid grid-cols-3 gap-8 relative">
              {steps.map((step, index) => (
                <div 
                  key={step.number}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Card padding="lg" className="relative">
                    {/* Number badge */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-veyra-cyan text-text-inverse text-lg font-bold shadow-lg">
                      {step.number}
                    </div>
                    
                    <div className="pt-8 text-center">
                      <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-veyra-cyan/10 text-veyra-cyan mx-auto mb-6">
                        <step.icon className="w-8 h-8" />
                      </div>
                      
                      <h3 className="text-xl font-semibold text-text-primary mb-3">
                        {step.title}
                      </h3>
                      
                      <p className="text-text-secondary">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Vertical line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border-primary -z-10" />
              )}
              
              <div className="flex gap-6">
                {/* Number */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-veyra-cyan text-text-inverse text-lg font-bold shadow-lg">
                  {step.number}
                </div>
                
                {/* Content */}
                <Card padding="lg" className="flex-1">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-veyra-cyan/10 text-veyra-cyan mb-4">
                    <step.icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-text-secondary">
                    {step.description}
                  </p>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
