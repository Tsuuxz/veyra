'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button, Input, Checkbox } from '@/components/ui';
import Link from 'next/link';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const errs: Record<string, string> = {};
    if (!form.email) errs.email = 'Email obrigatório';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Email inválido';
    if (!form.password) errs.password = 'Senha obrigatória';
    else if (form.password.length < 6) errs.password = 'Mínimo 6 caracteres';
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSubmitting(true);
    const result = await login(form.email, form.password);
    setSubmitting(false);
    if (!result.success) setErrors({ form: result.error || 'Erro ao fazer login' });
  };

  return (
    <div className="space-y-7 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-[#F2F2F2] mb-1">Bem-vindo de volta</h1>
        <p className="text-sm text-[#606060]">Entre com sua conta para continuar</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {errors.form && (
          <div className="p-3.5 rounded-xl bg-red-500/[0.08] border border-red-500/20 text-sm text-red-400">
            {errors.form}
          </div>
        )}

        <Input
          label="Email"
          type="email"
          placeholder="seu@email.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          error={errors.email}
          leftIcon={<Mail className="w-4 h-4" />}
          disabled={submitting}
        />

        <Input
          label="Senha"
          type="password"
          placeholder="••••••••"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          error={errors.password}
          leftIcon={<Lock className="w-4 h-4" />}
          disabled={submitting}
        />

        <div className="flex items-center justify-between pt-1">
          <Checkbox
            label="Lembrar de mim"
            checked={form.remember}
            onChange={(e) => setForm({ ...form, remember: e.target.checked })}
            disabled={submitting}
          />
          <Link href="/forgot-password" className="text-sm text-[#F5C842] hover:text-[#F7D46A] transition-colors">
            Esqueceu a senha?
          </Link>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full !bg-[#F5C842] !text-[#0A0A0A] hover:!bg-[#F7D46A] font-bold"
          isLoading={submitting}
          rightIcon={!submitting ? <ArrowRight className="w-5 h-5" /> : undefined}
        >
          Entrar
        </Button>
      </form>

      <p className="text-center text-sm text-[#606060]">
        Não tem conta?{' '}
        <Link href="/register" className="text-[#F5C842] hover:text-[#F7D46A] font-medium transition-colors">
          Criar conta grátis
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
