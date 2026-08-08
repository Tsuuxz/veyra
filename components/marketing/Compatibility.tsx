'use client';

const browsers = [
  { name: 'Google Chrome', abbr: 'Chr' },
  { name: 'Microsoft Edge', abbr: 'Edge' },
  { name: 'Brave', abbr: 'Bra' },
  { name: 'Opera', abbr: 'Ope' },
  { name: 'Chromium', abbr: 'Chr' },
  { name: 'Vivaldi', abbr: 'Viv' },
];

export function Compatibility() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F2F2F2] mb-4">
            Roda em qualquer navegador moderno
          </h2>
          <p className="text-lg text-[#A0A0A0] mb-12">
            Compatível com todos os navegadores baseados em Chromium 90+.
            Instale uma vez, use em qualquer dispositivo.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {browsers.map((b, i) => (
              <div
                key={b.name}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#111111] border border-white/[0.07] hover:border-[#F5C842]/25 transition-colors animate-scale-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#F5C842]/10 flex items-center justify-center text-[#F5C842] text-xs font-bold">
                  {b.abbr.slice(0, 1)}
                </div>
                <span className="text-sm font-medium text-[#F2F2F2]">{b.name}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-[#606060]">
            Também funciona no Android e iOS via navegadores Chromium mobile
          </p>
        </div>
      </div>
    </section>
  );
}
