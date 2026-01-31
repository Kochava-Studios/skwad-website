export default function GitWorktreeDemo() {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500" />
        <div className="terminal-dot bg-yellow-500" />
        <div className="terminal-dot bg-green-500" />
        <span className="ml-auto text-xs text-zinc-500">New Agent</span>
      </div>
      <div className="p-6 space-y-6">
        {/* Repository Picker */}
        <div className="space-y-2">
          <div className="text-xs text-zinc-500 font-mono">REPOSITORY</div>
          <div className="bg-zinc-900 rounded-lg p-3 border border-zinc-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-xs">
                  📦
                </div>
                <span className="text-zinc-300 font-mono text-sm">skwad</span>
                <span className="text-xs text-zinc-500 px-2 py-0.5 bg-zinc-800 rounded">recent</span>
              </div>
              <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Worktree Picker */}
        <div className="space-y-2">
          <div className="text-xs text-zinc-500 font-mono">WORKTREE</div>
          <div className="space-y-2">
            <div className="bg-zinc-900 rounded-lg p-3 border border-indigo-600 border-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-zinc-200 font-mono text-sm">main</span>
                  <span className="text-xs text-zinc-500">(main)</span>
                </div>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-lg p-3 border border-zinc-800 hover:border-zinc-600 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <span className="text-zinc-300 font-mono text-sm">feature-agents</span>
                </div>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-lg p-3 border border-zinc-800 hover:border-zinc-600 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <span className="text-zinc-300 font-mono text-sm">fix-git-panel</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-zinc-900 rounded-lg p-3 border border-dashed border-zinc-700 hover:border-indigo-500 transition-colors flex items-center justify-center gap-2 text-zinc-400 hover:text-indigo-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span className="text-sm font-mono">New Worktree...</span>
            </button>
          </div>
        </div>

        {/* Selected Folder */}
        <div className="space-y-2">
          <div className="text-xs text-zinc-500 font-mono">FOLDER</div>
          <div className="bg-zinc-950 rounded p-2 border border-zinc-800">
            <div className="text-xs text-zinc-400 font-mono truncate">
              ~/src/skwad
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
