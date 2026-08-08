'use client';

import { Button } from '@/components/ui';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function FinalCTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-bg-elevated to-bg-tertiary border border-border-primary p-12 md:p-16">
          {/* Glow effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-veyra-cyan/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Bora destravar o seu
              <br />
              próximo projeto?
            </h2>
            
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Milhares de desenvolvedores e founders já trocaram horas de fricção por minutos de entrega. 
              Falta só você.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Começar agora
                </Button>
              </Link>
              <a href="#">
                <Button variant="ghost" size="lg">
                  Falar no WhatsApp
                </Button>
              </a>
            </div>
            
            <p className="mt-6 text-sm text-text-tertiary">
              7 dias de garantia • Instalação em 60 segundos • Suporte incluso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
