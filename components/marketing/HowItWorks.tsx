import Link from 'next/link';

const steps = [
  {
    n: '01',
    title: 'Instale em 60 segundos',
    desc: 'Adicione VEYRA ao Chrome ou Edge pela loja oficial. Nenhuma configuração adicional necessária.',
  },
  {
    n: '02',
    title: 'Grave ou crie uma automação',
    desc: 'Use o gravador para capturar suas ações, ou monte do zero com o editor visual sem código.',
  },
  {
    n: '03',
    title: 'Execute e monitore',
    desc: 'Ative manualmente ou agende para rodar automaticamente. Acompanhe cada execução no dashboard.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" style={{ padding: '100px 0', borderTop: '1px solid #1e2626' }}>
      <div className="container">

        {/* Header */}
        <div style={{ maxWidth: 560, marginBottom: 64 }}>
          <span className="badge" style={{ marginBottom: 16 }}>Como funciona</span>
          <h2 style={{ color: '#f0f4f4', marginBottom: 16 }}>
            Do zero à automação em menos de 3 minutos
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7 }}>
            Simples o suficiente para qualquer pessoa. Poderoso o suficiente para qualquer tarefa.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: 40,
              padding: '40px 0',
              borderTop: i === 0 ? '1px solid #1e2626' : 'none',
              borderBottom: '1px solid #1e2626',
              alignItems: 'flex-start',
            }}>
              {/* Number */}
              <div style={{
                flexShrink: 0,
                fontSize: 13,
                fontWeight: 700,
                color: '#14DEDA',
                letterSpacing: '0.05em',
                width: 32,
                paddingTop: 4,
              }}>{s.n}</div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <h3 style={{ color: '#f0f4f4', marginBottom: 10, fontSize: '1.1rem' }}>{s.title}</h3>
                <p style={{ fontSize: 15, color: '#8a9898', lineHeight: 1.7, maxWidth: 560 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 48 }}>
          <Link href="/register" className="btn btn-primary">
            Instalar agora — é grátis
          </Link>
        </div>

      </div>
    </section>
  );
}
