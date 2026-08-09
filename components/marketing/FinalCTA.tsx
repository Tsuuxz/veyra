'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan opacity-20 blur-3xl rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-light opacity-15 blur-3xl rounded-full animate-pulse" style={{ animationDuration: '6s' }} />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="relative p-12 lg:p-16 rounded-3xl glass-strong border border-cyan-border overflow-hidden">
            {/* Animated Border Glow */}
            <div className="absolute inset-0 opacity-50">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan to-transparent animate-shimmer" />
            </div>

            {/* Content */}
            <div className="relative text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-dim border border-cyan-border mb-6">
                <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                <span className="text-sm font-medium text-text-primary">
                  Junte-se a 50.000+ usuários
                </span>
              </div>

              {/* Heading */}
              <h2 className="mb-6">
                Pronto para
                <span className="block text-gradient">10x sua produtividade?</span>
              </h2>

              {/* Description */}
              <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10">
                Comece gratuitamente hoje. Sem cartão de crédito. Cancele quando quiser.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <Link href="/register">
                  <Button
                    variant="primary"
                    size="lg"
                    className="shadow-2xl shadow-cyan/40 hover:shadow-cyan/50 hover:scale-105 transition-all duration-300"
                  >
                    Começar Gratuitamente
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Button>
                </Link>
                <Link href="/docs">
                  <Button variant="ghost" size="lg">
                    Ver Documentação
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-tertiary">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sem cartão de crédito</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>14 dias grátis no Pro</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cancele quando quiser</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-cyan opacity-10 blur-2xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-light opacity-10 blur-2xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
