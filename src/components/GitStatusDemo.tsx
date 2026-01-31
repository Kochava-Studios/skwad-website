export default function GitStatusDemo() {
  return (
    <div className="bg-[#1a2332] rounded-xl overflow-hidden border border-zinc-800 shadow-2xl">
      {/* Header */}
      <div className="bg-[#0d1520] px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">Git Status</h3>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium flex items-center gap-2 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Commit
          </button>
          <button className="p-2 text-zinc-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <button className="p-2 text-zinc-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6 max-h-[500px] overflow-y-auto">
        {/* Branch */}
        <div className="flex items-center gap-2 text-zinc-300">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="font-mono">main</span>
        </div>

        {/* Staged Changes */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-zinc-400 font-medium">Staged Changes</span>
              <span className="text-zinc-600 text-sm">(1)</span>
            </div>
            <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
              Unstage All
            </button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3 py-2 px-3 rounded bg-[#0d1520] hover:bg-[#1a2332] cursor-pointer">
              <span className="text-emerald-500 font-mono text-sm font-semibold">M</span>
              <span className="text-white font-mono text-sm flex-1">astro.config.mjs</span>
            </div>
          </div>
        </div>

        {/* Changes */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-zinc-400 font-medium">Changes</span>
              <span className="text-zinc-600 text-sm">(5)</span>
            </div>
            <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
              Stage All
            </button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3 py-2 px-3 rounded bg-[#0d1520] hover:bg-[#1a2332] cursor-pointer group">
              <span className="text-orange-500 font-mono text-sm font-semibold">M</span>
              <span className="text-white font-mono text-sm flex-1">package.json</span>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1 text-zinc-400 hover:text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Diff Preview */}
        <div className="border-t border-zinc-800 pt-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white font-mono text-sm font-semibold">astro.config.mjs</span>
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="text-emerald-500">+12</span>
              <span className="text-red-500">-1</span>
            </div>
          </div>
          <div className="bg-[#0d1520] rounded p-4 font-mono text-xs overflow-x-auto">
            <div className="text-indigo-400 mb-2">@@ -1,5 +1,16 @@</div>
            <div className="text-zinc-500">1  1  // @ts-check</div>
            <div className="text-zinc-500">2  2  import {'{'} defineConfig {'}'} from 'astro/config';</div>
            <div className="text-zinc-500">3  3</div>
            <div className="bg-emerald-950/30 text-emerald-400">   4  +import react from '@astrojs/react';</div>
            <div className="bg-emerald-950/30 text-emerald-400">   5  +import tailwindcss from '@tailwindcss/vite';</div>
            <div className="bg-emerald-950/30 text-emerald-400">   6  +</div>
            <div className="text-zinc-500">4  7  // https://astro.build/config</div>
            <div className="bg-red-950/30 text-red-400">5     -export default defineConfig({'{}'});</div>
            <div className="bg-emerald-950/30 text-emerald-400">   8  +export default defineConfig({'{'}</div>
            <div className="bg-emerald-950/30 text-emerald-400">   9  +  site: 'https://bonamy.fr',</div>
            <div className="bg-emerald-950/30 text-emerald-400">  10  +  base: '/skwad',</div>
            <div className="bg-emerald-950/30 text-emerald-400">  11  +  integrations: [react()],</div>
            <div className="bg-emerald-950/30 text-emerald-400">  12  +</div>
            <div className="bg-emerald-950/30 text-emerald-400">  13  +  vite: {'{'}</div>
            <div className="bg-emerald-950/30 text-emerald-400">  14  +    plugins: [tailwindcss()]</div>
            <div className="bg-emerald-950/30 text-emerald-400">  15  +  {'}'}</div>
            <div className="bg-emerald-950/30 text-emerald-400">  16  +{'}'});</div>
          </div>
        </div>
      </div>
    </div>
  );
}
