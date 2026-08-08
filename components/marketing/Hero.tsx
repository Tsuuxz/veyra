'use client';

import Link from 'next/link';
import { ArrowRight, Zap, MonitorSmartphone, RefreshCw, Headphones, ShieldCheck } from 'lucide-react';

const badges = [
  { icon: Zap, label: 'Instalação em 60s' },
  { icon: MonitorSmartphone, label: 'Todos Chromium' },
  { icon: RefreshCw, label: 'Auto-update' },
  { icon: Headphones, label: 'Suporte humano' },
  { icon: ShieldCheck, label: '7 dias de garantia' },
];

const stats = [
  { value: '60s', label: 'Setup' },
  { value: '0', label: 'Créditos extras' },
  { value: '12+', label: 'Ferramentas' },
  { value: '100%', label: 'Satisfação' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* BG glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#F5C842]/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F5C842]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10 py-16">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">

          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F5C842]/30 bg-[#F5C842]/[0.08] text-[#F5C842] text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F5C842] animate-pulse" />
            VEYRA • Extensão para Lovable
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F2F2F2] leading-[1.08] tracking-tight mb-6">
            Construa no Lovable
            <br />
            <span className="text-gradient">em modo turbo</span>
          </h1>

          <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto mb-10 leading-relaxed">
            Prompts ilimitados, rewrite cirúrgico, ações rápidas e controle total —
            sem queimar nenhum crédito. Por R$ 5,99 o teste.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#F5C842] text-[#0A0A0A] font-bold text-lg hover:bg-[#F7D46A] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Começar agora
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/[0.1] text-[#A0A0A0] font-medium text-lg hover:border-white/[0.2] hover:text-[#F2F2F2] transition-all"
            >
              Ver como funciona
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06] mb-14">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#0A0A0A] py-6 px-4 text-center">
                <p className="text-3xl font-bold text-[#F5C842] mb-1">{s.value}</p>
                <p className="text-sm text-[#606060]">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6">
            {badges.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-sm text-[#606060]">
                <b.icon className="w-4 h-4 text-[#F5C842]" />
                {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* UI preview card */}
        <div className="mt-20 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '300ms' }}>
          <div className="relative rounded-2xl border border-white/[0.08] bg-[#111111] p-1 shadow-2xl glow-brand">
            {/* Titlebar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-[#606060] font-mono">VEYRA Extension — Lovable</span>
              <span className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Ativo
              </span>
            </div>

            <div className="p-6 grid md:grid-cols-2 gap-4">
              {/* Left: info */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#191919] border border-white/[0.06]">
                  <p className="text-xs text-[#606060] mb-1">Plano atual</p>
                  <p className="font-semibold text-[#F5C842]">VEYRA Pro</p>
                </div>
                <div className="p-4 rounded-xl bg-[#191919] border border-white/[0.06]">
                  <p className="text-xs text-[#606060] mb-1">Licença</p>
                  <p className="font-semibold text-[#F2F2F2]">Ativa • 2 dispositivos</p>
                </div>
                <div className="p-4 rounded-xl bg-[#191919] border border-white/[0.06]">
                  <p className="text-xs text-[#606060] mb-1">Versão</p>
                  <p className="font-semibold text-[#F2F2F2]">v2.1.0 — Atualizado</p>
                </div>
              </div>

              {/* Right: quick actions */}
              <div className="p-4 rounded-xl bg-[#191919] border border-white/[0.06]">
                <p className="text-xs font-semibold text-[#606060] mb-3 uppercase tracking-wider">Ações rápidas</p>
                <div className="grid grid-cols-2 gap-2">
                  {['Optimize', 'Rewrite', 'Download', 'New Project', 'History', 'Attach'].map((a) => (
                    <button
                      key={a}
                      className="py-2.5 px-3 rounded-lg bg-[#222222] border border-white/[0.06] text-xs font-medium text-[#A0A0A0] hover:border-[#F5C842]/30 hover:text-[#F2F2F2] transition-all"
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
