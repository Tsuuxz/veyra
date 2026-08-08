'use client';

import { Button, Badge } from '@/components/ui';
import { ArrowRight, Play, Zap, MonitorSmartphone, RefreshCw, Headphones, Download } from 'lucide-react';
import Link from 'next/link';

const trustBadges = [
  { icon: Zap, label: 'Instalação rápida' },
  { icon: MonitorSmartphone, label: 'Chromium compatible' },
  { icon: RefreshCw, label: 'Atualizações automáticas' },
  { icon: Headphones, label: 'Suporte' },
  { icon: Download, label: 'Acesso imediato' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary to-bg-primary" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-veyra-cyan/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Badge */}
            <Badge variant="outline" size="md" className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-veyra-cyan animate-pulse" />
              VEYRA • AI Development Suite
            </Badge>
            
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight">
                Construa mais.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-text-secondary">
                  Espere menos.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-text-secondary max-w-xl">
                VEYRA adiciona uma camada avançada de produtividade ao seu workflow de desenvolvimento com IA. 
                Prompts otimizados, ações rápidas e controle total.
              </p>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Começar agora
                </Button>
              </Link>
              <Button variant="ghost" size="lg" leftIcon={<Play className="w-5 h-5" />}>
                Ver como funciona
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-bg-elevated text-text-secondary">
                    <badge.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-text-secondary">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Demo */}
          <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-veyra-cyan/20 blur-3xl rounded-3xl" />
              
              {/* Demo Card */}
              <div className="relative bg-bg-elevated border border-border-primary rounded-2xl p-8 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <Badge variant="success" size="sm">VEYRA Active</Badge>
                </div>
                
                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      VEYRA
                    </h3>
                    <p className="text-sm text-text-secondary">
                      Projeto ativo: Landing Page Premium
                    </p>
                  </div>
                  
                  {/* Input */}
                  <div className="bg-bg-tertiary border border-border-primary rounded-lg p-4">
                    <p className="text-sm text-text-secondary mb-3">
                      What do you want to build?
                    </p>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 bg-bg-elevated border border-border-primary rounded-md text-xs text-text-primary hover:border-border-focus transition-colors">
                        Optimize
                      </button>
                      <button className="px-3 py-1.5 bg-bg-elevated border border-border-primary rounded-md text-xs text-text-primary hover:border-border-focus transition-colors">
                        Rewrite
                      </button>
                      <button className="px-3 py-1.5 bg-bg-elevated border border-border-primary rounded-md text-xs text-text-primary hover:border-border-focus transition-colors">
                        Attach
                      </button>
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div>
                    <p className="text-xs font-medium text-text-tertiary mb-3">QUICK ACTIONS</p>
                    <div className="grid grid-cols-2 gap-2">
                      {['New Project', 'Download', 'Remove Branding', 'History'].map((action) => (
                        <button
                          key={action}
                          className="px-4 py-2 bg-bg-tertiary border border-border-primary rounded-lg text-xs font-medium text-text-primary hover:border-border-focus transition-all"
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
