'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Recursos', href: '#features' },
  { label: 'Como funciona', href: '#how-it-works' },
  { label: 'Planos', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/[0.07]'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo size="md" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#A0A0A0] hover:text-[#F2F2F2] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-[#A0A0A0] hover:text-[#F2F2F2] transition-colors"
            >
              Entrar
            </Link>
            <Link
              href="/register"
              className="px-5 py-2 rounded-lg bg-[#F5C842] text-[#0A0A0A] text-sm font-bold hover:bg-[#F7D46A] transition-colors"
            >
              Começar agora
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-[#A0A0A0] hover:text-[#F2F2F2] hover:bg-white/[0.06] transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#111111] border-t border-white/[0.07] animate-slide-down">
          <div className="container mx-auto py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 px-3 rounded-lg text-sm font-medium text-[#A0A0A0] hover:text-[#F2F2F2] hover:bg-white/[0.04] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-white/[0.07]">
              <Link href="/login" className="py-3 text-center text-sm font-medium text-[#A0A0A0] hover:text-[#F2F2F2]">
                Entrar
              </Link>
              <Link
                href="/register"
                className="py-3 rounded-lg bg-[#F5C842] text-center text-sm font-bold text-[#0A0A0A] hover:bg-[#F7D46A] transition-colors"
              >
                Começar agora
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
