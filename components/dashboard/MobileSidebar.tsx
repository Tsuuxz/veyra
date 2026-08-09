'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Dashboard' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/projects', label: 'Projetos' },
  { href: '/skills', label: 'Skills' },
  { href: '/history', label: 'Histórico' },
  { href: '/license', label: 'Licença' },
  { href: '/billing', label: 'Cobrança' },
  { href: '/settings', label: 'Configurações' },
  { href: '/support', label: 'Suporte' },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ isOpen, onClose }: Props) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex' }}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
      />

      {/* Drawer */}
      <aside style={{
        position: 'relative',
        width: 260,
        background: '#050707',
        borderRight: '1px solid #1e2626',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflowY: 'auto',
      }}>
        {/* Header */}
        <div style={{ padding: '0 16px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #1e2626' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }} onClick={onClose}>
            <div style={{ width: 26, height: 26, borderRadius: 7, background: '#14DEDA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                <path d="M4 4 L9 14 L14 4" stroke="#050707" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{ fontWeight: 700, fontSize: 15, color: '#f0f4f4' }}>VEYRA</span>
          </Link>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4a5858', padding: 4 }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="4" x2="14" y2="14"/><line x1="14" y1="4" x2="4" y2="14"/>
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav style={{ flex: 1, padding: '12px' }}>
          {navItems.map(item => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                style={{
                  display: 'block',
                  padding: '10px 12px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: active ? 500 : 400,
                  color: active ? '#f0f4f4' : '#8a9898',
                  background: active ? '#111414' : 'transparent',
                  textDecoration: 'none',
                  marginBottom: 2,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}
