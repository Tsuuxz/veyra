'use client';

export default function Problems() {
  const problems = [
    {
      problem: 'Perder horas copiando dados manualmente',
      solution: 'Extraia automaticamente em segundos'
    },
    {
      problem: 'Tarefas repetitivas todos os dias',
      solution: 'Automatize uma vez, execute infinitamente'
    },
    {
      problem: 'Erros humanos em processos manuais',
      solution: 'Precisão de 99.9% com IA'
    },
    {
      problem: 'Ferramentas complicadas e caras',
      solution: 'Interface intuitiva, preço justo'
    }
  ];

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-dim border border-cyan-border mb-6">
              <span className="text-sm font-medium text-cyan">Problemas Resolvidos</span>
            </div>
            
            <h2 className="mb-6">
              Chega de perder tempo com
              <span className="block text-gradient">tarefas repetitivas</span>
            </h2>
            
            <p className="text-lg text-text-secondary mb-8">
              Desenvolvemos VEYRA para resolver os problemas reais que profissionais enfrentam diariamente.
            </p>

            {/* Problems List */}
            <div className="space-y-4">
              {problems.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl glass border border-border-subtle hover:border-cyan-border transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-dim border border-cyan-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="text-text-tertiary line-through text-sm mb-1">
                        {item.problem}
                      </div>
                      <div className="text-text-primary font-medium">
                        {item.solution}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Central Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-cyan opacity-20 blur-3xl animate-pulse" />
              </div>

              {/* Floating Cards */}
              <div className="absolute inset-0">
                {[
                  { delay: '0s', position: 'top-0 left-0' },
                  { delay: '0.5s', position: 'top-0 right-0' },
                  { delay: '1s', position: 'bottom-0 left-0' },
                  { delay: '1.5s', position: 'bottom-0 right-0' }
                ].map((card, index) => (
                  <div
                    key={index}
                    className={`absolute ${card.position} w-32 h-32 lg:w-40 lg:h-40 rounded-2xl glass-strong border border-cyan-border p-4 animate-pulse`}
                    style={{ animationDelay: card.delay, animationDuration: '3s' }}
                  >
                    <div className="w-full h-full rounded-lg bg-gradient-to-br from-cyan-dim to-transparent opacity-50" />
                  </div>
                ))}
              </div>

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-cyan shadow-2xl shadow-cyan/30 flex items-center justify-center">
                  <svg className="w-10 h-10 text-bg-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
