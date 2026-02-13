import { useEffect, useState } from 'react';

const agentLines = [
  { text: '> Reading src/auth/login.ts...', color: 'text-indigo-400', delay: 800 },
  { text: '> Found 2 issues in authentication flow', color: 'text-zinc-300', delay: 600 },
  { text: '✓ Fixed token refresh logic', color: 'text-emerald-400', delay: 300 },
  { text: '✓ Added session expiry handling', color: 'text-emerald-400', delay: 300 },
  { text: '> Writing src/auth/login.ts...', color: 'text-indigo-400', delay: 500 },
  { text: '✓ Changes saved', color: 'text-emerald-400', delay: 200 },
];

const companionLines = [
  { text: '$ npm test -- --watch', color: 'text-zinc-500', delay: 1200 },
  { text: '', color: 'text-zinc-600', delay: 200 },
  { text: ' RUNS  src/auth/login.test.ts', color: 'text-yellow-400', delay: 800 },
  { text: '', color: 'text-zinc-600', delay: 100 },
  { text: ' PASS  src/auth/login.test.ts', color: 'text-emerald-400', delay: 400 },
  { text: '  ✓ authenticates with valid credentials (12ms)', color: 'text-zinc-400', delay: 100 },
  { text: '  ✓ rejects expired tokens (8ms)', color: 'text-zinc-400', delay: 100 },
  { text: '  ✓ refreshes token on 401 (15ms)', color: 'text-zinc-400', delay: 100 },
  { text: '  ✓ handles session expiry (6ms)', color: 'text-zinc-400', delay: 100 },
  { text: '', color: 'text-zinc-600', delay: 100 },
  { text: 'Tests:  4 passed, 4 total', color: 'text-emerald-400', delay: 200 },
  { text: 'Time:   0.847s', color: 'text-zinc-500', delay: 100 },
];

function useTypingAnimation(lines: typeof agentLines, speed: number) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (visibleLines >= lines.length) {
      setIsComplete(true);
      return;
    }

    const currentLine = lines[visibleLines];
    const lineDelay = currentLine.delay || 0;

    if (currentText.length < currentLine.text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentLine.text.slice(0, currentText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setVisibleLines(v => v + 1);
        setCurrentText('');
      }, lineDelay);
      return () => clearTimeout(timeout);
    }
  }, [visibleLines, currentText, lines, speed]);

  useEffect(() => {
    if (isComplete) {
      const timeout = setTimeout(() => {
        setVisibleLines(0);
        setCurrentText('');
        setIsComplete(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [isComplete]);

  return { visibleLines, currentText, isComplete };
}

function MiniTerminal({
  title,
  icon,
  lines,
  speed,
  statusColor,
  statusLabel,
  isCompanion = false,
}: {
  title: string;
  icon: string;
  lines: typeof agentLines;
  speed: number;
  statusColor: string;
  statusLabel: string;
  isCompanion?: boolean;
}) {
  const { visibleLines, currentText } = useTypingAnimation(lines, speed);

  return (
    <div className={`flex-1 min-w-0 ${isCompanion ? 'border-l border-zinc-800' : ''}`}>
      {/* Agent tab bar */}
      <div className="bg-zinc-950 px-3 py-2 flex items-center gap-2 border-b border-zinc-800">
        <span className="text-sm">{icon}</span>
        <span className="text-xs text-zinc-300 font-medium truncate">{title}</span>
        <div className={`w-1.5 h-1.5 rounded-full ${statusColor} ml-1`} />
        <span className="text-[10px] text-zinc-600 ml-auto">{statusLabel}</span>
      </div>

      {/* Terminal content */}
      <div className="p-3 font-mono text-xs h-[200px] overflow-hidden">
        {lines.slice(0, visibleLines).map((line, index) => (
          <div key={index} className={`${line.color || 'text-zinc-300'} leading-relaxed`}>
            {line.text || '\u00A0'}
          </div>
        ))}
        {visibleLines < lines.length && (
          <div className={lines[visibleLines].color || 'text-zinc-300'}>
            {currentText}
            <span className="inline-block w-1.5 h-3 bg-indigo-500 ml-0.5 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function CompanionDemo() {
  return (
    <div className="bg-[#0d1117] rounded-xl overflow-hidden border border-zinc-800 shadow-2xl">
      {/* Window chrome */}
      <div className="bg-zinc-950 px-4 py-2.5 flex items-center gap-2 border-b border-zinc-800">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-auto text-xs text-zinc-600">Skwad</span>
      </div>

      <div className="flex">
        {/* Mini sidebar */}
        <div className="w-[52px] bg-zinc-950/80 border-r border-zinc-800 py-3 flex flex-col items-center gap-1">
          {/* Owner agent */}
          <div className="relative">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-sm">
              🤖
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-zinc-950" />
          </div>
          {/* Companion - indented with connector line */}
          <div className="relative pl-1">
            <div className="absolute left-1.5 -top-1 w-px h-2 bg-zinc-700" />
            <div className="w-6 h-6 rounded-md bg-zinc-700/50 border border-zinc-600/40 flex items-center justify-center text-[10px]">
              ⬛
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border-2 border-zinc-950" />
          </div>

          {/* Separator */}
          <div className="w-6 border-t border-zinc-800 my-2" />

          {/* Another agent */}
          <div className="relative opacity-40">
            <div className="w-8 h-8 rounded-lg bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-sm">
              🧪
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-zinc-600 border-2 border-zinc-950" />
          </div>
        </div>

        {/* Split terminal view */}
        <div className="flex flex-1 min-w-0">
          <MiniTerminal
            title="Claude"
            icon="🤖"
            lines={agentLines}
            speed={8}
            statusColor="bg-emerald-500"
            statusLabel="working"
          />
          <MiniTerminal
            title="Tests"
            icon="⬛"
            lines={companionLines}
            speed={6}
            statusColor="bg-emerald-500"
            statusLabel="companion"
            isCompanion={true}
          />
        </div>
      </div>
    </div>
  );
}
