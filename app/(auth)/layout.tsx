import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', background: '#050707', display: 'flex', flexDirection: 'column' }}>
      {/* Top bar */}
      <div style={{
        borderBottom: '1px solid #1e2626',
        padding: '0 24px',
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <div style={{ width: 28, height: 28, borderRadius: 7, background: '#14DEDA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
              <path d="M4 4 L9 14 L14 4" stroke="#050707" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: 15, color: '#f0f4f4' }}>VEYRA</span>
        </Link>
        <Link href="/" style={{ fontSize: 13, color: '#4a5858', textDecoration: 'none' }}>
          ← Voltar ao site
        </Link>
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 24px' }}>
        {children}
      </div>
    </div>
  );
}
