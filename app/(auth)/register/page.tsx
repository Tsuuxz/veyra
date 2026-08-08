'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button, Input, Checkbox } from '@/components/ui';
import Link from 'next/link';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function RegisterPage() {
  const { register } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '', terms: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const errs: Record<string, string> = {};
    if (!form.name || form.name.length < 3) errs.name = 'Nome deve ter mínimo 3 caracteres';
    if (!form.email) errs.email = 'Email obrigatório';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Email inválido';
    if (!form.password || form.password.length < 6) errs.password = 'Mínimo 6 caracteres';
    if (form.password !== form.confirm) errs.confirm = 'Senhas não coincidem';
    if (!form.terms) errs.terms = 'Aceite os termos para continuar';
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSubmitting(true);
    const result = await register(form.name, form.email, form.password);
    setSubmitting(false);
    if (!result.success) setErrors({ form: result.error || 'Erro ao criar conta' });
  };

  return (
    <div className="space-y-7 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-[#F2F2F2] mb-1">Criar sua conta</h1>
        <p className="text-sm text-[#606060]">Comece a usar VEYRA hoje mesmo</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {errors.form && (
          <div className="p-3.5 rounded-xl bg-red-500/[0.08] border border-red-500/20 text-sm text-red-400">
            {errors.form}
          </div>
        )}

        <Input
          label="Nome completo"
          type="text"
          placeholder="Seu nome"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          error={errors.name}
          leftIcon={<User className="w-4 h-4" />}
          disabled={submitting}
        />

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
          helperText="Mínimo 6 caracteres"
          disabled={submitting}
        />

        <Input
          label="Confirmar senha"
          type="password"
          placeholder="••••••••"
          value={form.confirm}
          onChange={(e) => setForm({ ...form, confirm: e.target.value })}
          error={errors.confirm}
          leftIcon={<Lock className="w-4 h-4" />}
          disabled={submitting}
        />

        <div>
          <div className="flex items-start gap-3">
            <Checkbox
              checked={form.terms}
              onChange={(e) => setForm({ ...form, terms: e.target.checked })}
              disabled={submitting}
            />
            <span className="text-sm text-[#A0A0A0] leading-snug">
              Aceito os{' '}
              <Link href="#" className="text-[#F5C842] hover:text-[#F7D46A]">termos de uso</Link>
              {' '}e{' '}
              <Link href="#" className="text-[#F5C842] hover:text-[#F7D46A]">política de privacidade</Link>
            </span>
          </div>
          {errors.terms && <p className="mt-1.5 text-xs text-red-400">{errors.terms}</p>}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full !bg-[#F5C842] !text-[#0A0A0A] hover:!bg-[#F7D46A] font-bold"
          isLoading={submitting}
          rightIcon={!submitting ? <ArrowRight className="w-5 h-5" /> : undefined}
        >
          Criar conta
        </Button>
      </form>

      <p className="text-center text-sm text-[#606060]">
        Já tem conta?{' '}
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
