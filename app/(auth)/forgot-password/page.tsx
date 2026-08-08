'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button, Input } from '@/components/ui';
import Link from 'next/link';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ForgotPasswordPage() {
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email) { setError('Email obrigatório'); return; }
    if (!/\S+@\S+\.\S+/.test(email)) { setError('Email inválido'); return; }

    setSubmitting(true);
    const result = await forgotPassword(email);
    setSubmitting(false);
    if (result.success) setSuccess(true);
    else setError(result.error || 'Erro ao enviar email');
  };

  if (success) {
    return (
      <div className="space-y-6 animate-fade-in text-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-green-500/10 text-green-400 mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-[#F2F2F2] mb-2">Email enviado!</h1>
          <p className="text-sm text-[#606060] max-w-sm mx-auto">
            Enviamos um link para{' '}
            <span className="text-[#F2F2F2] font-medium">{email}</span>.
            Verifique sua caixa de entrada e spam.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <Link
            href="/login"
            className="block w-full py-3 rounded-xl bg-[#F5C842] text-[#0A0A0A] text-sm font-bold text-center hover:bg-[#F7D46A] transition-colors"
          >
            Voltar para o login
          </Link>
          <button
            onClick={() => { setSuccess(false); setEmail(''); }}
            className="text-sm text-[#606060] hover:text-[#A0A0A0] transition-colors"
          >
            Reenviar email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-7 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-[#F2F2F2] mb-1">Recuperar senha</h1>
        <p className="text-sm text-[#606060]">
          Informe seu email e enviamos um link de recuperação
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3.5 rounded-xl bg-red-500/[0.08] border border-red-500/20 text-sm text-red-400">
            {error}
          </div>
        )}

        <Input
          label="Email"
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          leftIcon={<Mail className="w-4 h-4" />}
          disabled={submitting}
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full !bg-[#F5C842] !text-[#0A0A0A] hover:!bg-[#F7D46A] font-bold"
          isLoading={submitting}
          rightIcon={!submitting ? <ArrowRight className="w-5 h-5" /> : undefined}
        >
          Enviar link de recuperação
        </Button>
      </form>

      <p className="text-center text-sm text-[#606060]">
        Lembrou a senha?{' '}
        <Link href="/login" className="text-[#F5C842] hover:text-[#F7D46A] font-medium transition-colors">
          Fazer login
        </Link>
      </p>

      <p className="text-center">
        <Link href="/" className="text-xs text-[#606060] hover:text-[#A0A0A0] transition-colors">
          ← Voltar ao início
        </Link>
      </p>
    </div>
  );
}
