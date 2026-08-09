'use client';

import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';

export default function DashboardPage() {
  const { profile } = useAuth();
  const firstName = profile?.name?.split(' ')[0] || 'Usuário';

  const stats = [
    { 
      label: 'Plano Atual', 
      value: 'VEYRA Pro', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: 'text-cyan',
      bg: 'bg-cyan-dim'
    },
    { 
      label: 'Licença', 
      value: 'Ativa', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'text-success',
      bg: 'bg-success/10'
    },
    { 
      label: 'Dispositivos', 
      value: '1 / 3', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'text-info',
      bg: 'bg-info/10'
    },
    { 
      label: 'Projetos', 
      value: '12', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      ),
      color: 'text-warning',
      bg: 'bg-warning/10'
    }
  ];

  const quickActions = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      label: 'Download VEYRA',
      desc: 'Baixar versão mais recente',
      href: '/downloads',
      color: 'text-info',
      bg: 'bg-info/10'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      label: 'Ver Licença',
      desc: 'Gerenciar dispositivos',
      href: '/license',
      color: 'text-cyan',
      bg: 'bg-cyan-dim'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      ),
      label: 'Novo Projeto',
      desc: 'Criar projeto',
      href: '/projects',
      color: 'text-warning',
      bg: 'bg-warning/10'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      label: 'Skills',
      desc: 'Biblioteca de prompts',
      href: '/skills',
      color: 'text-success',
      bg: 'bg-success/10'
    }
  ];

  const activity = [
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      label: 'Licença ativada',
      time: 'Há 2 horas',
      dot: 'bg-cyan'
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      label: 'VEYRA v2.1.0 baixado',
      time: 'Há 1 dia',
      dot: 'bg-info'
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      ),
      label: 'Projeto criado',
      time: 'Há 2 dias',
      dot: 'bg-warning'
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Pagamento confirmado',
      time: 'Há 5 dias',
      dot: 'bg-success'
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-3xl font-bold text-text-primary mb-2">
            Olá, {firstName} 👋
          </h2>
          <p className="text-text-secondary">
            Bem-vindo ao seu painel VEYRA
          </p>
        </div>
        <Link
          href="/downloads"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-cyan text-bg-base text-sm font-semibold shadow-lg shadow-cyan/20 hover:shadow-xl hover:shadow-cyan/30 hover:scale-105 transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download VEYRA
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl glass border border-border-subtle hover:border-cyan-border transition-all duration-300 group"
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${stat.bg} ${stat.color} border border-current/20 group-hover:scale-110 transition-transform duration-300`}>
              {stat.icon}
            </div>
            <p className="text-sm text-text-tertiary mb-1">
              {stat.label}
            </p>
            <p className="text-2xl font-bold text-text-primary">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* VEYRA Status Card */}
      <div className="p-6 lg:p-8 rounded-3xl glass-strong border border-cyan-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan opacity-10 blur-3xl pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Sua Extensão VEYRA
              </h3>
              <p className="text-text-secondary">
                Instalada e funcionando perfeitamente
              </p>
            </div>
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20 text-success text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Ativo
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Status', value: 'Ativa' },
              { label: 'Versão', value: 'v2.1.0' },
              { label: 'Devices', value: '1 / 3' },
              { label: 'Última sync', value: 'Agora' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-bg-base border border-border-subtle"
              >
                <p className="text-xs text-text-tertiary mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-text-primary">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/downloads"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-cyan text-bg-base text-sm font-semibold shadow-lg shadow-cyan/20 hover:shadow-xl hover:shadow-cyan/30 hover:scale-105 transition-all duration-200"
          >
            Baixar versão mais recente
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="p-6 rounded-2xl glass border border-border-subtle">
          <h3 className="text-lg font-semibold text-text-primary mb-5">
            Ações rápidas
          </h3>
          <div className="space-y-2">
            {quickActions.map((action, idx) => (
              <Link
                key={idx}
                href={action.href}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-cyan-border transition-all duration-200 group"
              >
                <div className={`w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0 ${action.bg} ${action.color} border border-current/20 group-hover:scale-110 transition-transform duration-200`}>
                  {action.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text-primary">
                    {action.label}
                  </p>
                  <p className="text-xs text-text-tertiary">
                    {action.desc}
                  </p>
                </div>
                <svg className="w-5 h-5 text-text-tertiary group-hover:text-cyan transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="p-6 rounded-2xl glass border border-border-subtle">
          <h3 className="text-lg font-semibold text-text-primary mb-5">
            Atividade recente
          </h3>
          <div className="space-y-4">
            {activity.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-bg-elevated border border-border-subtle text-text-tertiary flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-text-primary">
                    {item.label}
                  </p>
                  <p className="text-xs text-text-tertiary flex items-center gap-1.5 mt-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item.time}
                  </p>
                </div>
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.dot}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
