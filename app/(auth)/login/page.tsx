'use client';

import { useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) { setError(error.message); setLoading(false); return; }
    router.push('/');
  };

  return (
    <div style={{ width: '100%', maxWidth: 400 }}>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#f0f4f4', marginBottom: 8 }}>Entrar na conta</h1>
        <p style={{ fontSize: 14, color: '#8a9898' }}>Bem-vindo de volta.</p>
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
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <label style={labelStyle}>Senha</label>
            <Link href="/forgot-password" style={{ fontSize: 13, color: '#14DEDA', textDecoration: 'none' }}>Esqueceu?</Link>
          </div>
          <input
            type="password" required value={password} onChange={e => setPassword(e.target.value)}
            placeholder="••••••••"
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

        <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}>
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>

      <p style={{ marginTop: 24, fontSize: 14, color: '#4a5858', textAlign: 'center' }}>
        Não tem conta?{' '}
        <Link href="/register" style={{ color: '#14DEDA', textDecoration: 'none', fontWeight: 500 }}>Criar conta grátis</Link>
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
