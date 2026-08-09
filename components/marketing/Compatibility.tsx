'use client';

export default function Compatibility() {
  const browsers = [
    {
      name: 'Google Chrome',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728z" />
        </svg>
      ),
      status: 'Disponível'
    },
    {
      name: 'Microsoft Edge',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.86 7.85c-.77-2.6-2.25-4.65-4.2-5.85a9.9 9.9 0 0 0-5.16-1.4c-3.06 0-5.76 1.38-7.5 3.55C3.84 5.5 3 7.4 3 9.5c0 1.95.54 3.75 1.5 5.25.96 1.5 2.25 2.7 3.75 3.45 1.5.75 3.15 1.2 4.95 1.2 2.1 0 4.05-.6 5.7-1.65 1.65-1.05 2.85-2.55 3.6-4.35.45-1.05.6-2.1.6-3.15 0-1.35-.3-2.55-.75-3.6zm-9.36 12c-2.7 0-5.1-1.35-6.6-3.45-.75-1.05-1.2-2.25-1.2-3.6 0-1.8.75-3.45 1.95-4.65 1.2-1.2 2.85-1.95 4.65-1.95 1.5 0 2.85.45 3.9 1.2 1.05.75 1.8 1.8 2.25 3 .15.45.3.9.3 1.35 0 .45-.15.9-.3 1.35-.45 1.2-1.2 2.25-2.25 3-1.05.75-2.4 1.2-3.9 1.2z" />
        </svg>
      ),
      status: 'Disponível'
    },
    {
      name: 'Mozilla Firefox',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 15.734c-.547.547-1.328.86-2.14.86-.813 0-1.594-.313-2.14-.86l-1.614-1.613-1.614 1.614c-.547.546-1.328.859-2.14.859-.813 0-1.594-.313-2.14-.86-.547-.546-.86-1.327-.86-2.14 0-.812.313-1.593.86-2.14l1.614-1.613L6.106 8.227c-.547-.547-.86-1.328-.86-2.14 0-.813.313-1.594.86-2.14.546-.547 1.327-.86 2.14-.86.812 0 1.593.313 2.14.86l1.614 1.613 1.614-1.614c.546-.546 1.327-.859 2.14-.859.812 0 1.593.313 2.14.86.546.546.859 1.327.859 2.14 0 .812-.313 1.593-.86 2.14l-1.613 1.613 1.614 1.614c.546.547.859 1.328.859 2.14 0 .813-.313 1.594-.86 2.14z" />
        </svg>
      ),
      status: 'Em breve'
    },
    {
      name: 'Safari',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 10c0 2.757-2.243 5-5 5s-5-2.243-5-5 2.243-5 5-5 5 2.243 5 5zm-2 0c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3 3-1.346 3-3z" />
        </svg>
      ),
      status: 'Em breve'
    }
  ];

  const platforms = [
    { name: 'Windows', icon: '🪟' },
    { name: 'macOS', icon: '🍎' },
    { name: 'Linux', icon: '🐧' }
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-bg-surface">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(20, 222, 218, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(20, 222, 218, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-dim border border-cyan-border mb-6">
            <span className="text-sm font-medium text-cyan">Compatibilidade</span>
          </div>
          <h2 className="mb-4">
            Funciona onde
            <span className="block text-gradient">você trabalha</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Compatível com os principais navegadores e sistemas operacionais
          </p>
        </div>

        {/* Browsers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {browsers.map((browser, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl glass border border-border-subtle hover:border-cyan-border transition-all duration-300 hover:shadow-lg hover:shadow-cyan/10 group"
            >
              <div className="text-cyan mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {browser.icon}
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2 text-center">
                {browser.name}
              </h3>
              <div className="flex items-center justify-center gap-2">
                {browser.status === 'Disponível' ? (
                  <>
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="text-sm text-success font-medium">{browser.status}</span>
                  </>
                ) : (
                  <>
                    <div className="w-2 h-2 rounded-full bg-warning" />
                    <span className="text-sm text-warning font-medium">{browser.status}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Platforms */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-text-primary">
            Sistemas Operacionais
          </h3>
          <div className="grid grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="p-6 rounded-xl glass border border-border-subtle hover:border-cyan-border transition-all duration-300 text-center group"
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {platform.icon}
                </div>
                <div className="text-sm font-medium text-text-secondary">
                  {platform.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-text-tertiary">
            Requisitos mínimos: 4GB RAM, 100MB de espaço em disco
          </p>
        </div>
      </div>
    </section>
  );
}
