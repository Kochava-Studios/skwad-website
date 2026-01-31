import { useEffect, useState } from 'react';

interface TerminalLine {
  text: string;
  color?: string;
  delay?: number;
}

interface AnimatedTerminalProps {
  lines: TerminalLine[];
  speed?: number;
}

export default function AnimatedTerminal({ lines, speed = 50 }: AnimatedTerminalProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>('');
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
        setVisibleLines(visibleLines + 1);
        setCurrentText('');
      }, lineDelay);
      return () => clearTimeout(timeout);
    }
  }, [visibleLines, currentText, lines, speed]);

  // Reset animation when it completes
  useEffect(() => {
    if (isComplete) {
      const timeout = setTimeout(() => {
        setVisibleLines(0);
        setCurrentText('');
        setIsComplete(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [isComplete]);

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500" />
        <div className="terminal-dot bg-yellow-500" />
        <div className="terminal-dot bg-green-500" />
        <span className="ml-auto text-xs text-zinc-500">Agent-1</span>
      </div>
      <div className="p-6 font-mono text-sm h-[240px] flex flex-col">
        <div className="flex-1">
          {lines.slice(0, visibleLines).map((line, index) => (
            <div key={index} className={line.color || 'text-zinc-300'}>
              {line.text}
            </div>
          ))}
          {visibleLines < lines.length && (
            <div className={(lines[visibleLines].color || 'text-zinc-300')}>
              {currentText}
              <span className="inline-block w-2 h-4 bg-indigo-500 ml-1 animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
