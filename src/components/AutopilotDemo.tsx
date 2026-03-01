export default function AutopilotDemo() {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500" />
        <div className="terminal-dot bg-yellow-500" />
        <div className="terminal-dot bg-green-500" />
        <span className="ml-auto text-xs text-zinc-500">Autopilot</span>
      </div>
      <div className="p-5 space-y-4">
        {/* Classification header */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono text-zinc-500">MONITORING AGENT OUTPUT</span>
        </div>

        {/* Completed message */}
        <div className="bg-zinc-900 rounded-lg p-3 border border-zinc-800">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-900/50 text-emerald-400 border border-emerald-800/50">COMPLETED</span>
              <span className="text-xs text-zinc-500">2s ago</span>
            </div>
            <span className="text-xs text-zinc-600 font-mono">auto: notify</span>
          </div>
          <div className="text-sm text-zinc-300 font-mono">Task finished. All 12 tests passing.</div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Desktop notification sent
          </div>
        </div>

        {/* Binary question */}
        <div className="bg-zinc-900 rounded-lg p-3 border border-indigo-500/30">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-900/50 text-indigo-400 border border-indigo-800/50">YES / NO</span>
              <span className="text-xs text-zinc-500">just now</span>
            </div>
            <span className="text-xs text-zinc-600 font-mono">auto: accept</span>
          </div>
          <div className="text-sm text-zinc-300 font-mono">Allow Read access to src/index.ts?</div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-indigo-400">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Auto-accepted
          </div>
        </div>

        {/* Open-ended question */}
        <div className="bg-zinc-900 rounded-lg p-3 border border-amber-500/30">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-900/50 text-amber-400 border border-amber-800/50">OPEN</span>
              <span className="text-xs text-zinc-500">just now</span>
            </div>
            <span className="text-xs text-zinc-600 font-mono">auto: ask user</span>
          </div>
          <div className="text-sm text-zinc-300 font-mono">Which auth strategy: JWT or sessions?</div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-amber-400">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            Waiting for your input
          </div>
        </div>
      </div>
    </div>
  );
}
