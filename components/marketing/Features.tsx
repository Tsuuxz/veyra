'use client';

const features = [
  {
    icon: '⚡',
    title: 'Automação inteligente',
    desc: 'IA que aprende seus padrões e executa tarefas repetitivas com precisão, sem intervenção manual.',
  },
  {
    icon: '📊',
    title: 'Extração de dados',
    desc: 'Coleta dados de qualquer site em segundos. Exporta em CSV, JSON ou planilha com um clique.',
  },
  {
    icon: '🕐',
    title: 'Agendamento',
    desc: 'Programe tarefas para rodar automaticamente em horários definidos, todos os dias.',
  },
  {
    icon: '🔒',
    title: 'Privacidade total',
    desc: 'Tudo processa localmente no seu navegador. Seus dados nunca saem da sua máquina.',
  },
  {
    icon: '🎨',
    title: 'Sem código',
    desc: 'Editor visual drag-and-drop para criar automações complexas sem escrever uma linha sequer.',
  },
  {
    icon: '📈',
    title: 'Relatórios em tempo real',
    desc: 'Dashboard completo com logs, métricas e status de cada automação executada.',
  },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: '100px 0', borderTop: '1px solid #1e2626' }}>
      <div className="container">

        {/* Header */}
        <div style={{ maxWidth: 560, marginBottom: 64 }}>
          <span className="badge" style={{ marginBottom: 16 }}>Recursos</span>
          <h2 style={{ color: '#f0f4f4', marginBottom: 16 }}>
            Tudo que você precisa para parar de perder tempo
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7 }}>
            Um conjunto completo de ferramentas para automatizar qualquer fluxo de trabalho no navegador.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 1,
          border: '1px solid #1e2626',
          borderRadius: 16,
          overflow: 'hidden',
        }}>
          {features.map((f, i) => (
            <div key={i} style={{
              padding: '32px 28px',
              background: '#0d0f0f',
              borderRight: '1px solid #1e2626',
              borderBottom: '1px solid #1e2626',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = '#111414'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = '#0d0f0f'; }}
            >
              <div style={{ fontSize: 28, marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{ color: '#f0f4f4', marginBottom: 10, fontSize: '1.05rem' }}>{f.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: '#8a9898' }}>{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
