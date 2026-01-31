import { getAssetPath } from '../utils/paths';

export default function Install() {
  return (
    <section id="install" className="py-24 px-4 relative bg-gradient-to-br from-indigo-950/20 via-transparent to-purple-950/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Get Started
          </h2>
          <p className="text-xl text-zinc-400">
            Install Skwad and start coordinating your AI coding agents
          </p>
        </div>

        <div className="space-y-8">
          {/* Requirements */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Requirements
            </h3>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="text-indigo-400">•</span>
                macOS 26.0 (Tahoe) or later
              </li>
              <li className="flex items-center gap-2">
                <span className="text-indigo-400">•</span>
                An AI coding CLI (Claude Code, Copilot, etc.) installed in your PATH
              </li>
            </ul>
          </div>

          {/* Installation methods */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Direct Download */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800">
              <h3 className="text-xl font-bold mb-4 text-white">Download App</h3>
              <p className="text-zinc-400 mb-6">
                Download the latest version and start using Skwad
              </p>
              <a
                href={getAssetPath('Skwad.zip')}
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Skwad.zip
              </a>
              <p className="mt-4 text-xs text-zinc-500">
                Or view <a href="https://github.com/nbonamy/skwad/releases" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">all releases on GitHub</a>
              </p>
            </div>

            {/* From Source */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-bold text-white">Build from Source</h3>
                <span className="px-3 py-1 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-xs text-indigo-400 font-semibold">
                  Coming Soon
                </span>
              </div>
              <p className="text-zinc-400 mb-6">
                Clone the repo and build with Xcode
              </p>
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500" />
                  <div className="terminal-dot bg-yellow-500" />
                  <div className="terminal-dot bg-green-500" />
                </div>
                <div className="p-4 font-mono text-sm text-zinc-300 space-y-2">
                  <div>
                    <span className="text-indigo-400">$</span> git clone https://github.com/nbonamy/skwad.git
                  </div>
                  <div>
                    <span className="text-indigo-400">$</span> cd skwad
                  </div>
                  <div>
                    <span className="text-indigo-400">$</span> open Skwad.xcodeproj
                  </div>
                  <div className="text-zinc-500">
                    # Build and run (Cmd+R)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick start */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Quick Start
            </h3>
            <ol className="space-y-3 text-zinc-400">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 text-white text-sm flex items-center justify-center font-semibold">1</span>
                <span>Launch Skwad and click "New Agent"</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 text-white text-sm flex items-center justify-center font-semibold">2</span>
                <span>Name your agent and pick an avatar</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 text-white text-sm flex items-center justify-center font-semibold">3</span>
                <span>Choose a folder or git repository</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 text-white text-sm flex items-center justify-center font-semibold">4</span>
                <span>Start coding with your AI agent team!</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
