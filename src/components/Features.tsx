const features = [
  {
    icon: '🎯',
    title: 'Feels like a control room',
    description: 'Your agents are always visible, always alive, always ready. No more hunting through tabs.',
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
    icon: '📄',
    title: 'Artifacts',
    description: 'Agents display markdown documents and Mermaid diagrams in rich preview panels you can review and comment.',
  },
  {
    icon: '🎭',
    title: 'Personas',
    description: 'Give agents personalities from legendary engineers—or create your own—to shape their coding style.',
  },
  {
    icon: '🪑',
    title: 'The Bench',
    description: 'Save your favorite agent configurations and deploy them instantly via drag-and-drop into any workspace.',
  },
  {
    icon: '🤖',
    title: 'Autopilot',
    description: 'LLM-powered message classification auto-handles agent prompts so you only intervene when it matters.',
  },
  {
    icon: '🎙️',
    title: 'Voice input',
    description: 'Talk to your agents with built-in speech-to-text. Perfect for hands-free coding sessions.',
  },
  {
    icon: '🔔',
    title: 'Never miss a prompt',
    description: 'Skwad detects when Claude needs your input and notifies you with a visual indicator and desktop notification.',
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
