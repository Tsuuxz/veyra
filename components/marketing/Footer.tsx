'use client';

import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';

const links = {
  Produto: [
    { label: 'Recursos', href: '#features' },
    { label: 'Como funciona', href: '#how-it-works' },
    { label: 'Planos', href: '#pricing' },
  ],
  Suporte: [
    { label: 'FAQ', href: '#faq' },
    { label: 'WhatsApp', href: '#' },
    { label: 'Status', href: '#' },
  ],
  Legal: [
    { label: 'Privacidade', href: '#' },
    { label: 'Termos de uso', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.07]">
      <div className="container mx-auto py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Logo size="md" className="mb-4" />
            <p className="text-sm text-[#606060] max-w-xs leading-relaxed">
              Extensão para Lovable que turboalimenta seu workflow de desenvolvimento com IA.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-xs font-semibold text-[#F2F2F2] uppercase tracking-wider mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-[#606060] hover:text-[#A0A0A0] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#606060]">
            © {new Date().getFullYear()} VEYRA. Todos os direitos reservados.
          </p>
          <Link
            href="/register"
            className="px-5 py-2 rounded-lg bg-[#F5C842] text-[#0A0A0A] text-sm font-bold hover:bg-[#F7D46A] transition-colors"
          >
            Começar agora →
          </Link>
        </div>
      </div>
    </footer>
  );
}
