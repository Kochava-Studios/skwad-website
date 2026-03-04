import { useEffect, useState } from 'react';

const benchConfigs = [
  { name: 'Frontend Team', icon: '🎨', agents: ['Claude', 'Copilot'], color: 'indigo' },
  { name: 'Backend API', icon: '⚙️', agents: ['Claude', 'Claude'], color: 'emerald' },
  { name: 'Full Stack', icon: '🚀', agents: ['Claude', 'Copilot', 'Gemini'], color: 'purple' },
];

const workspaces = ['Workspace 1', 'Workspace 2'];

export default function BenchDemo() {
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [deployed, setDeployed] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((s) => {
        if (s === 0) { setDragIndex(0); setDeployed(false); return 1; }
        if (s === 1) { setDeployed(true); return 2; }
        if (s === 2) { setDragIndex(null); setDeployed(false); return 3; }
        return 0;
      });
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="terminal-window p-6">
      {/* Bench */}
      <div className="mb-4">
        <div className="text-xs text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-2">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Bench
        </div>
        <div className="space-y-2">
          {benchConfigs.map((config, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg border transition-all duration-500 ${
                dragIndex === i
                  ? deployed
                    ? 'border-emerald-500/40 bg-emerald-950/20 scale-95 opacity-60'
                    : 'border-indigo-500/40 bg-indigo-950/20 scale-105 shadow-lg shadow-indigo-500/10'
                  : 'border-zinc-800 bg-zinc-900/50'
              }`}
            >
              <span className="text-lg">{config.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-zinc-300 font-medium">{config.name}</div>
                <div className="text-xs text-zinc-600">{config.agents.join(' + ')}</div>
              </div>
              {dragIndex === i && !deployed && (
                <svg className="w-4 h-4 text-indigo-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              )}
              {dragIndex === i && deployed && (
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Drop target */}
      <div className={`mt-4 p-3 rounded-lg border-2 border-dashed transition-all duration-500 ${
        dragIndex !== null && !deployed
          ? 'border-indigo-500/50 bg-indigo-950/10'
          : deployed
            ? 'border-emerald-500/30 bg-emerald-950/10'
            : 'border-zinc-800 bg-zinc-900/30'
      }`}>
        <div className="text-xs text-zinc-500 mb-2">{workspaces[0]}</div>
        {deployed ? (
          <div className="flex gap-2">
            {benchConfigs[0].agents.map((agent, i) => (
              <div key={i} className="flex items-center gap-1.5 px-2 py-1 bg-emerald-950/30 border border-emerald-500/20 rounded text-xs text-emerald-400 animate-fade-in">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                {agent}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-xs text-zinc-700 italic">Drop a config to deploy...</div>
        )}
      </div>
    </div>
  );
}
