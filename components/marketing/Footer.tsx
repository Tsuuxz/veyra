'use client';

import Link from 'next/link';

const cols = [
  {
    title: 'Produto',
    links: [
      { label: 'Recursos', href: '#features' },
      { label: 'Como funciona', href: '#how' },
      { label: 'Preços', href: '#pricing' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contato', href: '/contact' },
    ],
  },
  {
    title: 'Suporte',
    links: [
      { label: 'Documentação', href: '/docs' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Status', href: '/status' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidade', href: '/privacy' },
      { label: 'Termos', href: '/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #1e2626' }}>
      <div className="container" style={{ padding: '64px 24px 40px' }}>

        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr repeat(4, auto)',
          gap: 48,
          marginBottom: 64,
        }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', marginBottom: 16 }}>
              <div style={{ width: 28, height: 28, borderRadius: 7, background: '#14DEDA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                  <path d="M4 4 L9 14 L14 4" stroke="#050707" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span style={{ fontWeight: 700, fontSize: 15, color: '#f0f4f4' }}>VEYRA</span>
            </Link>
            <p style={{ fontSize: 13, color: '#4a5858', lineHeight: 1.7, maxWidth: 220 }}>
              Automatize qualquer tarefa no navegador com inteligência artificial.
            </p>
          </div>

          {/* Columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#4a5858', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 16 }}>
                {col.title}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} style={{ fontSize: 14, color: '#8a9898', textDecoration: 'none', transition: 'color 0.15s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#f0f4f4')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#8a9898')}
                    >{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div style={{
          borderTop: '1px solid #1e2626',
          paddingTop: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{ fontSize: 13, color: '#4a5858' }}>
            © {new Date().getFullYear()} VEYRA. Todos os direitos reservados.
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            {['Privacidade', 'Termos'].map(l => (
              <Link key={l} href={`/${l.toLowerCase()}`} style={{ fontSize: 13, color: '#4a5858', textDecoration: 'none' }}>{l}</Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
