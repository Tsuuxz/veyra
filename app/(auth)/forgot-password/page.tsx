'use client';

import { useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) { setError(error.message); setLoading(false); return; }
    setSent(true);
    setLoading(false);
  };

  if (sent) {
    return (
      <div style={{ width: '100%', maxWidth: 400, textAlign: 'center' }}>
        <div style={{
          width: 48, height: 48, borderRadius: 12,
          background: 'rgba(20,222,218,0.08)', border: '1px solid rgba(20,222,218,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 24px',
        }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M3 8l8 6 8-6" stroke="#14DEDA" strokeWidth="1.5" strokeLinecap="round"/>
            <rect x="2" y="5" width="18" height="13" rx="2" stroke="#14DEDA" strokeWidth="1.5"/>
          </svg>
        </div>
        <h2 style={{ color: '#f0f4f4', marginBottom: 12, fontSize: '1.5rem' }}>E-mail enviado</h2>
        <p style={{ fontSize: 14, color: '#8a9898', lineHeight: 1.7, marginBottom: 28 }}>
          Enviamos o link para <strong style={{ color: '#f0f4f4' }}>{email}</strong>. Verifique sua caixa de entrada.
        </p>
        <Link href="/login" className="btn btn-outline" style={{ display: 'inline-flex', justifyContent: 'center', minWidth: 160 }}>
          Voltar ao login
        </Link>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', maxWidth: 400 }}>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#f0f4f4', marginBottom: 8 }}>Esqueceu a senha?</h1>
        <p style={{ fontSize: 14, color: '#8a9898' }}>Digite seu e-mail para receber o link de redefinição.</p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          <label style={labelStyle}>E-mail</label>
          <input
            type="email" required value={email} onChange={e => setEmail(e.target.value)}
            placeholder="seu@email.com"
            style={inputStyle}
            onFocus={e => (e.currentTarget.style.borderColor = 'rgba(20,222,218,0.4)')}
            onBlur={e => (e.currentTarget.style.borderColor = '#1e2626')}
          />
        </div>

        {error && (
          <p style={{ fontSize: 13, color: '#ef4444', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 8, padding: '10px 14px' }}>
            {error}
          </p>
        )}

        <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
          {loading ? 'Enviando...' : 'Enviar link'}
        </button>
      </form>

      <p style={{ marginTop: 24, fontSize: 14, color: '#4a5858', textAlign: 'center' }}>
        Lembrou?{' '}
        <Link href="/login" style={{ color: '#14DEDA', textDecoration: 'none', fontWeight: 500 }}>Entrar</Link>
      </p>
    </div>
  );
}

const labelStyle: React.CSSProperties = { display: 'block', fontSize: 13, fontWeight: 500, color: '#8a9898', marginBottom: 6 };
const inputStyle: React.CSSProperties = {
  width: '100%', height: 44, padding: '0 14px',
  background: '#0d0f0f', border: '1px solid #1e2626', borderRadius: 10,
  color: '#f0f4f4', fontSize: 14, outline: 'none', transition: 'border-color 0.15s',
};
