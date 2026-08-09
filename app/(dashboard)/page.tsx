'use client';
'use client';

import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';

export default function DashboardPage() {
  const { profile } = useAuth();
  const name = profile?.name?.split(' ')[0] || 'Usuário';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f0f4f4', marginBottom: 6 }}>
            Olá, {name}
          </h2>
          <p style={{ fontSize: 14, color: '#4a5858' }}>Bem-vindo ao painel VEYRA</p>
        </div>
        <Link
          href="/downloads"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#14DEDA', color: '#050707',
            padding: '10px 18px', borderRadius: 10,
            fontWeight: 600, fontSize: 14, textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <path d="M8 2v8M5 7l3 3 3-3M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Download VEYRA
        </Link>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
        {[
          { label: 'Plano', value: 'Free', sub: 'Upgrade disponível', color: '#14DEDA' },
          { label: 'Licença', value: 'Ativa', sub: 'Válida', color: '#22c55e' },
          { label: 'Dispositivos', value: '1 / 3', sub: 'Slots usados', color: '#8a9898' },
          { label: 'Versão', value: 'v2.1.0', sub: 'Atualizada', color: '#8a9898' },
        ].map((s, i) => (
          <div key={i} style={{
            background: '#0d0f0f',
            border: '1px solid #1e2626',
            borderRadius: 12,
            padding: '20px 20px',
          }}>
            <div style={{ fontSize: 12, color: '#4a5858', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
              {s.label}
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: s.color, letterSpacing: '-0.02em', marginBottom: 4 }}>
              {s.value}
            </div>
            <div style={{ fontSize: 12, color: '#4a5858' }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Extension status card */}
      <div style={{
        background: '#0d0f0f',
        border: '1px solid rgba(20,222,218,0.15)',
        borderRadius: 16,
        padding: '28px 28px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#f0f4f4', marginBottom: 4 }}>
              Extensão VEYRA
            </div>
            <div style={{ fontSize: 13, color: '#4a5858' }}>Instalada e funcionando</div>
          </div>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 12, fontWeight: 600, color: '#22c55e',
            background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)',
            borderRadius: 999, padding: '4px 12px',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            Online
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 8, marginBottom: 20 }}>
          {[
            { k: 'Status', v: 'Ativa' },
            { k: 'Versão', v: 'v2.1.0' },
            { k: 'Dispositivos', v: '1 / 3' },
            { k: 'Última sync', v: 'Agora' },
          ].map(({ k, v }) => (
            <div key={k} style={{
              background: '#050707', border: '1px solid #1e2626',
              borderRadius: 8, padding: '12px 14px',
            }}>
              <div style={{ fontSize: 11, color: '#4a5858', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>{k}</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#f0f4f4' }}>{v}</div>
            </div>
          ))}
        </div>

        <Link
          href="/downloads"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: 13, fontWeight: 600, color: '#14DEDA',
            textDecoration: 'none',
            border: '1px solid rgba(20,222,218,0.25)',
            borderRadius: 8, padding: '8px 14px',
            transition: 'background 0.15s',
          }}
        >
          Baixar versão mais recente
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

      {/* Bottom 2-col */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>

        {/* Quick actions */}
        <div style={{ background: '#0d0f0f', border: '1px solid #1e2626', borderRadius: 16, padding: '24px' }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#f0f4f4', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Ações rápidas
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {[
              { label: 'Baixar VEYRA', href: '/downloads', desc: 'Versão mais recente' },
              { label: 'Ver licença', href: '/license', desc: 'Gerenciar dispositivos' },
              { label: 'Novo projeto', href: '/projects', desc: 'Criar automação' },
              { label: 'Ir para Skills', href: '/skills', desc: 'Biblioteca de prompts' },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '10px 12px', borderRadius: 8,
                  textDecoration: 'none', transition: 'background 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#111414')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: '#f0f4f4' }}>{a.label}</div>
                  <div style={{ fontSize: 12, color: '#4a5858' }}>{a.desc}</div>
                </div>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="#4a5858" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Activity */}
        <div style={{ background: '#0d0f0f', border: '1px solid #1e2626', borderRadius: 16, padding: '24px' }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#f0f4f4', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Atividade recente
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { label: 'Licença ativada', time: 'Há 2 horas', dot: '#14DEDA' },
              { label: 'VEYRA v2.1.0 instalado', time: 'Há 1 dia', dot: '#22c55e' },
              { label: 'Projeto criado', time: 'Há 3 dias', dot: '#8a9898' },
              { label: 'Conta criada', time: 'Há 5 dias', dot: '#8a9898' },
            ].map((item, i, arr) => (
              <div
                key={i}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 0',
                  borderBottom: i < arr.length - 1 ? '1px solid #1e2626' : 'none',
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.dot, flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, color: '#f0f4f4', fontWeight: 500 }}>{item.label}</div>
                  <div style={{ fontSize: 12, color: '#4a5858', marginTop: 2 }}>{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
