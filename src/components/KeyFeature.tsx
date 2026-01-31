interface KeyFeatureProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image?: string;
  visual?: React.ReactNode;
  reverse?: boolean;
  highlight?: boolean;
}

export default function KeyFeature({
  title,
  subtitle,
  description,
  features,
  image,
  visual,
  reverse = false,
  highlight = false
}: KeyFeatureProps) {
  return (
    <section className={`py-24 px-4 relative ${highlight ? 'bg-gradient-to-br from-indigo-950/10 via-transparent to-purple-950/10' : ''}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}>
          {/* Content */}
          <div className={reverse ? 'md:col-start-2' : ''}>
            <div className="inline-block px-4 py-2 bg-indigo-600/10 rounded-full text-indigo-400 text-sm font-semibold mb-4 border border-indigo-500/20">
              {subtitle}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="text-xl text-zinc-400 mb-8">
              {description}
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className={reverse ? 'md:col-start-1 md:row-start-1' : ''}>
            {visual ? (
              visual
            ) : image ? (
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500" />
                  <div className="terminal-dot bg-yellow-500" />
                  <div className="terminal-dot bg-green-500" />
                  <span className="ml-auto text-xs text-zinc-500">Skwad</span>
                </div>
                <div className="p-6">
                  <img src={image} alt={title} className="w-full rounded" />
                </div>
              </div>
            ) : (
              <div className="terminal-window p-8">
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-400">Agent-1</span>
                    <span className="text-zinc-600">›</span>
                    <span className="text-zinc-400">Working on feature implementation...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">Agent-2</span>
                    <span className="text-zinc-600">›</span>
                    <span className="text-zinc-400">Running tests in parallel...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">Agent-3</span>
                    <span className="text-zinc-600">›</span>
                    <span className="text-zinc-400">Reviewing code changes...</span>
                  </div>
                  <div className="mt-6 p-4 bg-indigo-950/30 border border-indigo-500/30 rounded">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      <div className="text-xs text-zinc-400">
                        <span className="text-indigo-400">Agent-1</span> to <span className="text-purple-400">Agent-2</span>: Feature ready for testing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
