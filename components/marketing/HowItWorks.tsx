'use client';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Instale a Extensão',
      description: 'Adicione VEYRA ao seu navegador com um clique. Compatível com Chrome, Edge e Firefox.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Configure seu Workflow',
      description: 'Use nosso editor visual para criar automações personalizadas, ou escolha templates prontos.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Execute e Relaxe',
      description: 'Ative sua automação e deixe a IA trabalhar por você. Monitore o progresso em tempo real.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan opacity-10 blur-3xl rounded-full" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-light opacity-10 blur-3xl rounded-full" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-dim border border-cyan-border mb-6">
            <span className="text-sm font-medium text-cyan">Como Funciona</span>
          </div>
          <h2 className="mb-4">
            Comece a automatizar em
            <span className="block text-gradient">menos de 3 minutos</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Simples, rápido e poderoso. Veja como é fácil começar
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-1/2 w-full h-px bg-gradient-to-r from-cyan-border to-border-subtle" />
              )}

              {/* Card */}
              <div className="relative p-8 rounded-2xl glass border border-border-subtle hover:border-cyan-border transition-all duration-300 hover:shadow-xl hover:shadow-cyan/10">
                {/* Step Number */}
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-gradient-cyan shadow-lg shadow-cyan/30 flex items-center justify-center text-bg-base font-bold text-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-cyan-dim border border-cyan-border flex items-center justify-center text-cyan mb-6 mt-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan/20 transition-all duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-text-primary">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-cyan text-bg-base font-semibold shadow-xl shadow-cyan/30 hover:shadow-2xl hover:shadow-cyan/40 hover:scale-105 transition-all duration-300"
          >
            Começar Agora Gratuitamente
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
