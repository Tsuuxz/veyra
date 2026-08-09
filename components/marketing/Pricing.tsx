import Link from 'next/link';

const plans = [
  {
    name: 'Free',
    price: 'R$ 0',
    period: 'para sempre',
    desc: 'Para explorar e testar',
    cta: 'Criar conta grátis',
    href: '/register',
    highlighted: false,
    features: [
      '10 execuções por mês',
      '1 automação ativa',
      'Exportação básica',
      'Suporte por e-mail',
    ],
  },
  {
    name: 'Pro',
    price: 'R$ 29',
    period: '/mês',
    desc: 'Para uso profissional',
    cta: 'Começar 14 dias grátis',
    href: '/register?plan=pro',
    highlighted: true,
    features: [
      'Execuções ilimitadas',
      'Automações ilimitadas',
      'Agendamento avançado',
      'API + Webhooks',
      'Exportação completa',
      'Suporte prioritário',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    period: '',
    desc: 'Para times e empresas',
    cta: 'Falar com vendas',
    href: '/contact',
    highlighted: false,
    features: [
      'Tudo do Pro',
      'SSO / SAML',
      'Gestão de equipe',
      'SLA garantido',
      'Suporte dedicado 24/7',
      'Onboarding personalizado',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: '100px 0', borderTop: '1px solid #1e2626' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="badge" style={{ marginBottom: 16 }}>Preços</span>
          <h2 style={{ color: '#f0f4f4', marginBottom: 16 }}>Simples e transparente</h2>
          <p style={{ fontSize: 16, lineHeight: 1.7 }}>
            Comece grátis. Sem cartão de crédito. Cancele quando quiser.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 16,
          alignItems: 'start',
        }}>
          {plans.map((p, i) => (
            <div key={i} style={{
              border: p.highlighted ? '1px solid rgba(20,222,218,0.4)' : '1px solid #1e2626',
              borderRadius: 16,
              padding: '32px 28px',
              background: p.highlighted ? 'rgba(20,222,218,0.04)' : '#0d0f0f',
              position: 'relative',
            }}>
              {/* Popular badge */}
              {p.highlighted && (
                <div style={{
                  position: 'absolute',
                  top: -12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#14DEDA',
                  color: '#050707',
                  fontSize: 11,
                  fontWeight: 700,
                  padding: '4px 14px',
                  borderRadius: 999,
                  letterSpacing: '0.05em',
                  whiteSpace: 'nowrap',
                }}>MAIS POPULAR</div>
              )}

              {/* Plan name & desc */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#8a9898', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{p.name}</div>
                <div style={{ fontSize: 13, color: '#4a5858' }}>{p.desc}</div>
              </div>

              {/* Price */}
              <div style={{ marginBottom: 28 }}>
                <span style={{ fontSize: 36, fontWeight: 700, color: '#f0f4f4', letterSpacing: '-0.03em' }}>{p.price}</span>
                {p.period && <span style={{ fontSize: 14, color: '#4a5858', marginLeft: 4 }}>{p.period}</span>}
              </div>

              {/* CTA */}
              <Link href={p.href} className={`btn ${p.highlighted ? 'btn-primary' : 'btn-outline'}`}
                style={{ width: '100%', justifyContent: 'center', marginBottom: 28 }}>
                {p.cta}
              </Link>

              {/* Divider */}
              <div className="divider" style={{ marginBottom: 24 }} />

              {/* Features */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {p.features.map((f, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#8a9898' }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7l3 3 6-6" stroke="#14DEDA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
