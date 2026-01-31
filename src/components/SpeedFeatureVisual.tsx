import AnimatedTerminal from './AnimatedTerminal';

export default function SpeedFeatureVisual() {
  return (
    <AnimatedTerminal
      speed={5}
      lines={[
        { text: '> Analyzing codebase structure...', color: 'text-indigo-400', delay: 1000 },
        { text: '> Found 3 API endpoints to update', color: 'text-zinc-300', delay: 500 },
        { text: '✓ Updated user authentication endpoint', color: 'text-emerald-400', delay: 250 },
        { text: '✓ Refactored validation logic', color: 'text-emerald-400', delay: 250 },
        { text: '✓ Added error handling', color: 'text-emerald-400', delay: 250 },
        { text: '> Running tests...', color: 'text-indigo-400', delay: 1000 },
        { text: '✓ All 47 tests passing', color: 'text-emerald-400', delay: 250 },
        { text: '⚡ Ready to commit', color: 'text-yellow-400', delay: 100 }
      ]}
    />
  );
}
