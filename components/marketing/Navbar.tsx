'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: scrolled ? '1px solid #1e2626' : '1px solid transparent',
        backgroundColor: scrolled ? 'rgba(5,7,7,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', height: 64, gap: 32 }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', flexShrink: 0 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: '#14DEDA',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 4 L9 14 L14 4" stroke="#050707" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: 17, color: '#f0f4f4', letterSpacing: '-0.02em' }}>VEYRA</span>
        </Link>

        {/* Nav links — desktop */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4, flex: 1 }} className="hide-mobile">
          {[
            { label: 'Recursos', href: '#features' },
            { label: 'Como funciona', href: '#how' },
            { label: 'Preços', href: '#pricing' },
            { label: 'FAQ', href: '#faq' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{
              padding: '6px 12px',
              fontSize: 14,
              fontWeight: 500,
              color: '#8a9898',
              textDecoration: 'none',
              borderRadius: 8,
              transition: 'color 0.15s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f0f4f4')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8a9898')}
            >{l.label}</Link>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto' }} className="hide-mobile">
          <Link href="/login" className="btn btn-ghost btn-sm">Entrar</Link>
          <Link href="/register" className="btn btn-primary btn-sm">Começar grátis</Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            marginLeft: 'auto',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            color: '#f0f4f4',
          }}
          aria-label="Menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="4" x2="16" y2="16"/><line x1="16" y1="4" x2="4" y2="16"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="17" y2="6"/><line x1="3" y1="10" x2="17" y2="10"/><line x1="3" y1="14" x2="17" y2="14"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          borderTop: '1px solid #1e2626',
          backgroundColor: '#050707',
          padding: '16px 24px 24px',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 16 }}>
            {[
              { label: 'Recursos', href: '#features' },
              { label: 'Como funciona', href: '#how' },
              { label: 'Preços', href: '#pricing' },
              { label: 'FAQ', href: '#faq' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{ padding: '10px 0', fontSize: 15, fontWeight: 500, color: '#8a9898', textDecoration: 'none' }}
              >{l.label}</Link>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Link href="/login" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Entrar</Link>
            <Link href="/register" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Começar grátis</Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
