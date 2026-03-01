export default function ArtifactsDemo() {
  return (
    <div className="space-y-3">
      {/* Markdown preview */}
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-dot bg-red-500" />
          <div className="terminal-dot bg-yellow-500" />
          <div className="terminal-dot bg-green-500" />
          <span className="ml-auto text-xs text-zinc-500">plan.md</span>
        </div>
        <div className="p-4 text-sm space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 text-xs font-mono rounded bg-indigo-900/50 text-indigo-400 border border-indigo-800/50">REVIEW</span>
            <span className="text-xs text-zinc-500">Displayed by Claude</span>
          </div>
          <h3 className="text-lg font-bold text-white">Implementation Plan</h3>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span className="text-zinc-400 line-through">Set up database schema</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span className="text-zinc-400 line-through">Create API endpoints</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-indigo-400">→</span>
              <span className="text-white">Add authentication layer</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-600">○</span>
              <span className="text-zinc-500">Write integration tests</span>
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="px-3 py-1.5 bg-emerald-600/20 text-emerald-400 rounded text-xs font-medium border border-emerald-800/30">
              Approve
            </button>
            <button className="px-3 py-1.5 bg-zinc-800 text-zinc-400 rounded text-xs font-medium border border-zinc-700">
              Comment
            </button>
          </div>
        </div>
      </div>

      {/* Mermaid diagram */}
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-dot bg-red-500" />
          <div className="terminal-dot bg-yellow-500" />
          <div className="terminal-dot bg-green-500" />
          <span className="ml-auto text-xs text-zinc-500">Diagram</span>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 text-xs font-mono rounded bg-purple-900/50 text-purple-400 border border-purple-800/50">MERMAID</span>
          </div>
          {/* Simplified flowchart visualization */}
          <div className="flex flex-col items-center gap-2">
            <div className="px-4 py-2 rounded-lg bg-indigo-900/30 border border-indigo-500/30 text-xs font-mono text-indigo-300">
              Request
            </div>
            <svg className="w-4 h-5 text-zinc-600" viewBox="0 0 16 20">
              <path d="M8 0v16M4 12l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="px-3 py-1.5 rounded bg-emerald-900/30 border border-emerald-500/30 text-xs font-mono text-emerald-300">
                  Auth
                </div>
                <svg className="w-4 h-5 text-zinc-600" viewBox="0 0 16 20">
                  <path d="M8 0v16M4 12l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <div className="px-3 py-1.5 rounded bg-emerald-900/30 border border-emerald-500/30 text-xs font-mono text-emerald-300">
                  Handler
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="px-3 py-1.5 rounded bg-amber-900/30 border border-amber-500/30 text-xs font-mono text-amber-300">
                  Cache
                </div>
                <svg className="w-4 h-5 text-zinc-600" viewBox="0 0 16 20">
                  <path d="M8 0v16M4 12l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <div className="px-3 py-1.5 rounded bg-amber-900/30 border border-amber-500/30 text-xs font-mono text-amber-300">
                  Database
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="h-px w-8 bg-zinc-700" />
              <svg className="w-4 h-5 text-zinc-600" viewBox="0 0 16 20">
                <path d="M8 0v16M4 12l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <div className="h-px w-8 bg-zinc-700" />
            </div>
            <div className="px-4 py-2 rounded-lg bg-purple-900/30 border border-purple-500/30 text-xs font-mono text-purple-300">
              Response
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
