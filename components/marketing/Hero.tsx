import Link from 'next/link';

export default function Hero() {
  return (
    <section style={{
      paddingTop: 160,
      paddingBottom: 120,
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle radial glow — just one, centered */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 600,
        height: 400,
        background: 'radial-gradient(ellipse, rgba(20,222,218,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        {/* Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
          <span className="badge">
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#14DEDA', display: 'inline-block' }} />
            Extensão de IA para o navegador
          </span>
        </div>

        {/* Headline */}
        <h1 style={{ color: '#f0f4f4', marginBottom: 24, maxWidth: 760, margin: '0 auto 24px' }}>
          Automatize qualquer tarefa{' '}
          <span style={{ color: '#14DEDA' }}>no navegador</span>
        </h1>

        {/* Subheadline */}
        <p style={{
          fontSize: 18,
          color: '#8a9898',
          maxWidth: 520,
          margin: '0 auto 48px',
          lineHeight: 1.7,
        }}>
          VEYRA usa IA para executar tarefas repetitivas por você — extração de dados,
          preenchimento de formulários, agendamentos — sem escrever código.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/register" className="btn btn-primary btn-lg">
            Começar gratuitamente
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link href="#how" className="btn btn-outline btn-lg">Ver como funciona</Link>
        </div>

        {/* Social proof */}
        <p style={{ marginTop: 48, fontSize: 13, color: '#4a5858' }}>
          Usado por <span style={{ color: '#8a9898' }}>+50.000 profissionais</span> em todo o mundo
        </p>

        {/* Stats row */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 0,
          marginTop: 64,
          borderTop: '1px solid #1e2626',
          borderBottom: '1px solid #1e2626',
        }}>
          {[
            { value: '50K+', label: 'Usuários ativos' },
            { value: '1M+', label: 'Tarefas executadas' },
            { value: '99.9%', label: 'Uptime' },
            { value: '< 60s', label: 'Para instalar' },
          ].map((s, i) => (
            <div key={i} style={{
              flex: 1,
              padding: '32px 24px',
              borderRight: i < 3 ? '1px solid #1e2626' : 'none',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#f0f4f4', letterSpacing: '-0.03em' }}>{s.value}</div>
              <div style={{ fontSize: 13, color: '#4a5858', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
