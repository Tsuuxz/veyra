'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/brand/Logo';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate email sending
    setTimeout(() => {
      setIsLoading(false);
      setEmailSent(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-cyan opacity-10 blur-3xl rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-light opacity-10 blur-3xl rounded-full animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(20, 222, 218, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(20, 222, 218, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Card */}
      <div className="w-full max-w-md relative z-10">
        <div className="glass-strong border border-border-medium rounded-3xl p-8 shadow-2xl">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Logo size="lg" />
          </div>

          {!emailSent ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-text-primary mb-2">
                  Esqueceu sua senha?
                </h1>
                <p className="text-text-secondary">
                  Sem problemas! Digite seu email e enviaremos instruções para redefinir sua senha.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full shadow-xl shadow-cyan/20"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-bg-base border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </div>
                  ) : (
                    'Enviar instruções'
                  )}
                </Button>
              </form>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-2xl bg-success/10 border border-success/20 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                <h2 className="text-2xl font-bold text-text-primary mb-3">
                  Email enviado!
                </h2>
                <p className="text-text-secondary mb-6">
                  Enviamos instruções para <span className="font-medium text-cyan">{email}</span>. Verifique sua caixa de entrada e spam.
                </p>

                <div className="p-4 rounded-xl bg-cyan-dim border border-cyan-border mb-6">
                  <p className="text-sm text-text-secondary">
                    Não recebeu o email? Aguarde alguns minutos ou{' '}
                    <button
                      onClick={() => setEmailSent(false)}
                      className="text-cyan hover:text-cyan-light font-medium transition-colors"
                    >
                      tente novamente
                    </button>
                  </p>
                </div>

                <Link href="/login">
                  <Button variant="outline" size="lg" className="w-full">
                    Voltar para login
                  </Button>
                </Link>
              </div>
            </>
          )}

          {/* Back to Login */}
          {!emailSent && (
            <div className="text-center mt-6">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 text-sm text-text-tertiary hover:text-text-primary transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Voltar para login
              </Link>
            </div>
          )}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-tertiary hover:text-text-primary transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Voltar para home
          </Link>
        </div>
      </div>
    </div>
  );
}
