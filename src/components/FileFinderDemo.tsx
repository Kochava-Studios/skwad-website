export default function FileFinderDemo() {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500" />
        <div className="terminal-dot bg-yellow-500" />
        <div className="terminal-dot bg-green-500" />
        <span className="ml-auto text-xs text-zinc-500">File Finder</span>
      </div>
      <div className="p-5">
        {/* Search input */}
        <div className="bg-zinc-900 rounded-lg border border-indigo-500/50 p-3 mb-4 flex items-center gap-3">
          <svg className="w-4 h-4 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-zinc-300 font-mono text-sm">agent<span className="animate-pulse">|</span></span>
          <span className="ml-auto text-xs text-zinc-600 font-mono">⇧⌘F</span>
        </div>

        {/* Results */}
        <div className="space-y-1">
          <div className="flex items-center gap-3 py-2.5 px-3 rounded-lg bg-indigo-600/10 border border-indigo-500/20">
            <svg className="w-4 h-4 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-mono text-white">
                <span className="text-indigo-400">Agent</span>Manager.swift
              </div>
              <div className="text-xs text-zinc-600 font-mono truncate">Sources/Skwad/Agents/</div>
            </div>
            <span className="text-xs text-zinc-600 font-mono">⏎</span>
          </div>

          <div className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-zinc-900 transition-colors">
            <svg className="w-4 h-4 text-zinc-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-mono text-zinc-300">
                <span className="text-indigo-400">Agent</span>View.swift
              </div>
              <div className="text-xs text-zinc-600 font-mono truncate">Sources/Skwad/Views/</div>
            </div>
          </div>

          <div className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-zinc-900 transition-colors">
            <svg className="w-4 h-4 text-zinc-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-mono text-zinc-300">
                <span className="text-indigo-400">Agent</span>Config.swift
              </div>
              <div className="text-xs text-zinc-600 font-mono truncate">Sources/Skwad/Models/</div>
            </div>
          </div>

          <div className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-zinc-900 transition-colors">
            <svg className="w-4 h-4 text-zinc-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-mono text-zinc-300">
                <span className="text-indigo-400">Agent</span>Protocol.swift
              </div>
              <div className="text-xs text-zinc-600 font-mono truncate">Sources/Skwad/Protocols/</div>
            </div>
          </div>

          <div className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-zinc-900 transition-colors">
            <svg className="w-4 h-4 text-zinc-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-mono text-zinc-300">
                <span className="text-indigo-400">Agent</span>Sidebar.swift
              </div>
              <div className="text-xs text-zinc-600 font-mono truncate">Sources/Skwad/Views/Sidebar/</div>
            </div>
          </div>
        </div>

        {/* Footer hint */}
        <div className="mt-4 flex items-center justify-between text-xs text-zinc-600 font-mono px-1">
          <span>5 results</span>
          <div className="flex items-center gap-3">
            <span>↑↓ navigate</span>
            <span>⏎ open</span>
            <span>esc close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
