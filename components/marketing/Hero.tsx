'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(20, 222, 218, 0.4) 0%, transparent 70%)',
            animationDuration: '8s'
          }}
        />
        <div
          className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(85, 243, 236, 0.3) 0%, transparent 70%)',
            animationDuration: '10s'
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div
            className={`flex justify-center mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-border bg-cyan-dim">
              <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              <span className="text-sm font-medium text-text-primary">
                Automatização Inteligente com IA
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-center mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="block text-text-primary text-balance">
              Automatize Tarefas com
            </span>
            <span className="block text-gradient font-extrabold">
              Inteligência Artificial
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-xl text-text-secondary text-center max-w-3xl mx-auto mb-12 text-balance transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            VEYRA é a extensão de IA que revoluciona seu fluxo de trabalho no navegador. 
            Automatize tarefas repetitivas, extraia dados e aumente sua produtividade em até 10x.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap items-center justify-center gap-4 mb-16 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <Link href="/register">
              <Button 
                variant="primary" 
                size="lg"
                className="shadow-xl shadow-cyan/30 hover:shadow-2xl hover:shadow-cyan/40 transition-all duration-300"
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
              <Button variant="outline" size="lg">
                Ver Documentação
              </Button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div
            className={`grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {[
              { value: '50K+', label: 'Usuários Ativos' },
              { value: '1M+', label: 'Tarefas Automatizadas' },
              { value: '99.9%', label: 'Uptime' }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl glass border border-border-subtle hover:border-cyan-border transition-all duration-300 group"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-text-tertiary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(20, 222, 218, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(20, 222, 218, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-cyan-border flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-cyan animate-pulse" />
        </div>
      </div>
    </section>
  );
}
