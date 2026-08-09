'use client';

import { useState } from 'react';

const items = [
  { q: 'O que é VEYRA?', a: 'VEYRA é uma extensão de navegador com IA que automatiza tarefas repetitivas na web — extração de dados, preenchimento de formulários, navegação automatizada — sem precisar escrever código.' },
  { q: 'Preciso saber programar?', a: 'Não. O editor visual permite criar automações complexas com cliques e arraste. Para usuários avançados, também oferecemos API e scripts customizados.' },
  { q: 'Meus dados estão seguros?', a: 'Sim. Todo o processamento acontece localmente no seu navegador. Nenhum dado sensível é enviado para nossos servidores. Somos compatíveis com LGPD e GDPR.' },
  { q: 'VEYRA funciona em qual navegador?', a: 'Chrome e Edge já estão disponíveis. Firefox e Safari estão em desenvolvimento e serão lançados em breve.' },
  { q: 'Posso cancelar quando quiser?', a: 'Sim. Cancele a qualquer momento sem multa. O acesso continua até o fim do período pago.' },
  { q: 'Tem período de teste?', a: 'O plano Free é gratuito para sempre. O Pro tem 14 dias de teste sem necessidade de cartão de crédito.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: '100px 0', borderTop: '1px solid #1e2626' }}>
      <div className="container">

        {/* Header */}
        <div style={{ maxWidth: 560, marginBottom: 56 }}>
          <span className="badge" style={{ marginBottom: 16 }}>FAQ</span>
          <h2 style={{ color: '#f0f4f4' }}>Dúvidas frequentes</h2>
        </div>

        {/* Items */}
        <div style={{ maxWidth: 680 }}>
          {items.map((item, i) => (
            <div key={i} style={{ borderBottom: '1px solid #1e2626' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: 16,
                }}
              >
                <span style={{ fontSize: 15, fontWeight: 500, color: '#f0f4f4' }}>{item.q}</span>
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  style={{ flexShrink: 0, transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
                >
                  <path d="M3 6l5 5 5-5" stroke="#4a5858" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {open === i && (
                <p style={{ fontSize: 14, color: '#8a9898', lineHeight: 1.7, paddingBottom: 20, marginTop: -4 }}>
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
