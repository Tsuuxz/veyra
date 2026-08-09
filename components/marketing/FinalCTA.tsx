import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section style={{ padding: '100px 0', borderTop: '1px solid #1e2626' }}>
      <div className="container">
        <div style={{
          border: '1px solid rgba(20,222,218,0.2)',
          borderRadius: 24,
          padding: '72px 48px',
          textAlign: 'center',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(20,222,218,0.06) 0%, transparent 60%)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <h2 style={{ color: '#f0f4f4', marginBottom: 16, maxWidth: 520, margin: '0 auto 16px' }}>
            Pronto para recuperar seu tempo?
          </h2>
          <p style={{ fontSize: 16, color: '#8a9898', maxWidth: 400, margin: '0 auto 40px', lineHeight: 1.7 }}>
            Comece grátis hoje. Configure sua primeira automação em menos de 5 minutos.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/register" className="btn btn-primary btn-lg">
              Criar conta grátis
            </Link>
            <Link href="/docs" className="btn btn-outline btn-lg">
              Ver documentação
            </Link>
          </div>
          <p style={{ marginTop: 28, fontSize: 13, color: '#4a5858' }}>
            Sem cartão de crédito · 14 dias grátis no Pro · Cancele quando quiser
          </p>
        </div>
      </div>
    </section>
  );
}
