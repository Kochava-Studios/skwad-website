import { useEffect, useState } from 'react';

const personas = [
  {
    name: 'Kent Beck',
    style: 'TDD Purist',
    icon: '🧪',
    color: 'emerald',
    snippet: [
      { text: '// Write the test first', color: 'text-emerald-400' },
      { text: 'it("should validate email", () => {', color: 'text-zinc-300' },
      { text: '  expect(validate("a@b.c")).toBe(true)', color: 'text-zinc-400' },
      { text: '})', color: 'text-zinc-300' },
    ],
  },
  {
    name: 'John Carmack',
    style: 'Performance First',
    icon: '🔥',
    color: 'amber',
    snippet: [
      { text: '// Inline for hot path', color: 'text-amber-400' },
      { text: 'const len = arr.length', color: 'text-zinc-300' },
      { text: 'for (let i = 0; i < len; ++i) {', color: 'text-zinc-300' },
      { text: '  result += arr[i]', color: 'text-zinc-400' },
    ],
  },
  {
    name: 'Custom',
    style: 'Your Rules',
    icon: '✨',
    color: 'purple',
    snippet: [
      { text: '// Always use Result types', color: 'text-purple-400' },
      { text: 'type Result<T> = ', color: 'text-zinc-300' },
      { text: '  | { ok: true; value: T }', color: 'text-zinc-300' },
      { text: '  | { ok: false; error: Error }', color: 'text-zinc-400' },
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  emerald: { bg: 'bg-emerald-950/20', border: 'border-emerald-500/30', text: 'text-emerald-400', dot: 'bg-emerald-400' },
  amber: { bg: 'bg-amber-950/20', border: 'border-amber-500/30', text: 'text-amber-400', dot: 'bg-amber-400' },
  purple: { bg: 'bg-purple-950/20', border: 'border-purple-500/30', text: 'text-purple-400', dot: 'bg-purple-400' },
};

export default function PersonasDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setActiveIndex((i) => (i + 1) % personas.length);
        setTransitioning(false);
      }, 300);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const active = personas[activeIndex];
  const colors = colorMap[active.color];

  return (
    <div className="terminal-window p-6">
      {/* Persona selector */}
      <div className="flex gap-2 mb-4">
        {personas.map((p, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-300 cursor-default ${
              i === activeIndex
                ? `${colorMap[p.color].bg} ${colorMap[p.color].border}`
                : 'border-zinc-800 bg-zinc-900/50 opacity-50'
            }`}
          >
            <span className="text-sm">{p.icon}</span>
            <span className={`text-xs font-medium ${i === activeIndex ? colorMap[p.color].text : 'text-zinc-500'}`}>
              {p.name}
            </span>
          </div>
        ))}
      </div>

      {/* Agent with persona */}
      <div className={`p-4 rounded-lg border transition-all duration-300 ${colors.bg} ${colors.border}`}>
        <div className="flex items-center gap-2 mb-3">
          <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
          <span className="text-sm text-zinc-300 font-medium">Claude</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
            {active.style}
          </span>
        </div>

        {/* Code output */}
        <div className={`font-mono text-xs space-y-1 transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
          {active.snippet.map((line, i) => (
            <div key={i} className={line.color}>{line.text}</div>
          ))}
        </div>
      </div>

      {/* Hint */}
      <div className="mt-3 text-xs text-zinc-600 text-center">
        Persona shapes coding style, patterns, and priorities
      </div>
    </div>
  );
}
