import { getAssetPath } from '../utils/paths';

const agents = [
  { name: 'Claude Code', icon: 'images/agents/claude.png', description: 'Anthropic\'s official AI coding assistant' },
  { name: 'OpenCode', icon: 'images/agents/opencode.png', description: 'Open source coding assistant' },
  { name: 'OpenAI Codex', icon: 'images/agents/openai.png', description: 'Powerful code generation from OpenAI' },
  { name: 'Google Gemini', icon: 'images/agents/gemini.png', description: 'Advanced AI from Google' },
  { name: 'GitHub Copilot', icon: 'images/agents/copilot.png', description: 'AI pair programmer from GitHub' },
  { name: 'Custom', icon: null, description: 'Use your own agent command' },
];

export default function SupportedAgents() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Works with Your Favorite Agents
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Skwad supports all major AI coding agents out of the box. Mix and match to build your perfect team.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {agents.map((agent, index) => (
            <div
              key={agent.name}
              className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800 hover:border-indigo-500/50 transition-all hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center gap-4">
                {agent.icon ? (
                  <div className="w-16 h-16 rounded-xl bg-zinc-800/50 p-3 flex items-center justify-center group-hover:bg-zinc-700/50 transition-colors">
                    <img
                      src={getAssetPath(agent.icon)}
                      alt={agent.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-xl bg-zinc-800/50 p-3 flex items-center justify-center group-hover:bg-zinc-700/50 transition-colors">
                    <svg className="w-full h-full text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-white mb-1">{agent.name}</h3>
                  <p className="text-xs text-zinc-500">{agent.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
