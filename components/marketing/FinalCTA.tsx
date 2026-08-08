'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-[#F5C842]/20 bg-[#F5C842]/[0.03] p-12 md:p-16 text-center animate-slide-up">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#F5C842]/[0.06] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-5">
              Bora destravar o seu
              <br />
              próximo projeto?
            </h2>
            <p className="text-lg text-[#A0A0A0] mb-10">
              Milhares de devs e founders já trocaram horas de fricção por minutos de entrega.
              Falta só você.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#F5C842] text-[#0A0A0A] font-bold text-lg hover:bg-[#F7D46A] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Começar agora
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/[0.1] text-[#A0A0A0] font-medium text-lg hover:border-white/[0.2] hover:text-[#F2F2F2] transition-all"
              >
                Falar no WhatsApp
              </a>
            </div>

            <p className="mt-8 text-sm text-[#606060]">
              Pagamento único · 7 dias de garantia · Instalação em 60 segundos · Sem renovação automática
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
