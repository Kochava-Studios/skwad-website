const features = [
  {
    icon: '🎯',
    title: 'Feels like a control room',
    description: 'Your agents are always visible, always alive, always ready. No more hunting through tabs.',
  },
  {
    icon: '⚡',
    title: 'Fast, native, fluid',
    description: 'GPU-accelerated Ghostty terminals and a SwiftUI interface that keeps up with your workflow.',
  },
  {
    icon: '🤝',
    title: 'Actually collaborative',
    description: 'Built-in MCP server lets agents coordinate work themselves and hand off tasks seamlessly.',
  },
  {
    icon: '🔀',
    title: 'Git without context switching',
    description: 'View diffs, stage files, commit changes, and manage worktrees—all without leaving the app.',
  },
  {
    icon: '🎨',
    title: 'Customizable setup',
    description: 'Name your agents, assign emoji or image avatars, customize colors, and arrange your workspace.',
  },
  {
    icon: '⚙️',
    title: 'Powerful worktree support',
    description: 'Create agents from existing worktrees or spin up new ones for isolated feature development.',
  },
];

export default function Features() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Why Skwad
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Everything you need to run a productive team of AI coding agents
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800 hover:border-indigo-500/50 transition-all hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
