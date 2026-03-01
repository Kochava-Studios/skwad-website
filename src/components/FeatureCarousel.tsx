import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import GitWorktreeDemo from './GitWorktreeDemo';
import GitStatusDemo from './GitStatusDemo';
import SpeedFeatureVisual from './SpeedFeatureVisual';
import AutopilotDemo from './AutopilotDemo';
import FileFinderDemo from './FileFinderDemo';
import ArtifactsDemo from './ArtifactsDemo';

interface Slide {
  subtitle: string;
  title: string;
  description: string;
  features: string[];
  visual: React.ReactNode;
  highlight?: boolean;
}

function AgentCommVisual() {
  return (
    <div className="terminal-window p-8">
      <div className="space-y-4 font-mono text-sm">
        <div className="flex items-center gap-2">
          <span className="text-indigo-400">Agent-1</span>
          <span className="text-zinc-600">&rsaquo;</span>
          <span className="text-zinc-400">Working on feature implementation...</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-purple-400">Agent-2</span>
          <span className="text-zinc-600">&rsaquo;</span>
          <span className="text-zinc-400">Running tests in parallel...</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-emerald-400">Agent-3</span>
          <span className="text-zinc-600">&rsaquo;</span>
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
  );
}

const slides: Slide[] = [
  {
    subtitle: 'The Game Changer',
    title: 'Agent-to-Agent Communication',
    description: 'The main differentiator of Skwad is its built-in MCP server that enables true collaboration. Agents can discover each other, send messages, broadcast updates, and coordinate complex tasks without your intervention.',
    features: [
      'Agents auto-register when they start up',
      'Send direct messages or broadcast to all agents',
      'Automatic notifications when agents become idle',
      'Real coordination, not just parallel execution',
    ],
    visual: <AgentCommVisual />,
    highlight: true,
  },
  {
    subtitle: 'Powerful Integration',
    title: 'Git Worktrees Made Easy',
    description: 'Skwad\'s git integration goes beyond basic version control. Create isolated development environments with worktrees, manage multiple features simultaneously, and keep your agents working in perfect parallel.',
    features: [
      'Quick access to recent repositories',
      'Automatic worktree discovery and listing',
      'Create new worktrees directly from the UI',
      'Each agent works in its own isolated branch',
      'No context switching between features',
    ],
    visual: <GitWorktreeDemo />,
  },
  {
    subtitle: 'Rich Output',
    title: 'Artifacts',
    description: 'Agents can display rich content directly in Skwad. Review markdown documents with an approve/comment workflow, or visualize architecture with Mermaid diagrams—flowcharts, state diagrams, sequence diagrams, and more.',
    features: [
      'Markdown preview with full dark mode rendering',
      'Two-phase review workflow: view then comment',
      'Mermaid diagrams rendered natively in a panel',
      'Supports flowcharts, state, sequence, class, and ER diagrams',
    ],
    visual: <ArtifactsDemo />,
  },
  {
    subtitle: 'Quick Navigation',
    title: 'File Finder',
    description: 'Hit ⇧⌘F to find any file and inject its path straight into your coding agent. Pointing agents to the right content is faster than ever.',
    features: [
      'Fuzzy search across the entire project',
      'Inject file paths directly into the agent terminal',
      'Keyboard-driven — never leave your flow',
      'Works from any agent\'s working directory',
    ],
    visual: <FileFinderDemo />,
  },
  {
    subtitle: 'Smart Automation',
    title: 'Autopilot',
    description: 'Let Skwad intelligently handle agent messages. An LLM classifies each output as completed, binary (yes/no), or open-ended—and takes the right action automatically so you stay in flow.',
    features: [
      'Tri-classification of agent messages via LLM',
      'Auto-continue on completed tasks',
      'Auto-accept binary prompts like permission requests',
      'Asks you only when your input truly matters',
    ],
    visual: <AutopilotDemo />,
  },
  {
    subtitle: 'Version Control',
    title: 'Git Integration Built In',
    description: 'Stay in your flow with a powerful git panel that brings version control directly into Skwad. View changes, stage files, review diffs, and commit—all without leaving your workspace or switching context.',
    features: [
      'Visual git status panel showing all changes at a glance',
      'Syntax-highlighted diffs for easy code review',
      'One-click stage and unstage for individual files',
      'Commit directly from the app with full history',
      'Auto-refresh on file changes with FSEvents monitoring',
    ],
    visual: <GitStatusDemo />,
  },
  {
    subtitle: 'Native Performance',
    title: 'Built for Speed',
    description: 'Skwad leverages GPU-accelerated Ghostty terminals and native SwiftUI for a fluid experience that keeps up with your workflow. Switch between agents instantly, terminals stay alive and preserve state.',
    features: [
      'GPU-accelerated Ghostty terminal by default',
      'SwiftTerm fallback for compatibility',
      'Respects your ~/.config/ghostty/config for styling',
      'Activity detection shows when agents are working or idle',
      'All terminals kept alive in memory—no state loss when switching',
    ],
    visual: <SpeedFeatureVisual />,
  },
];

export default function FeatureCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 8000, stopOnInteraction: true, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect) };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => {
    emblaApi?.scrollTo(index);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Features In Depth
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Explore what makes Skwad the ultimate AI coding companion
          </p>
        </div>

        <div className="flex gap-8">
          {/* Left side navigation */}
          <div className="hidden md:flex flex-col gap-1 flex-shrink-0 w-56 pt-4">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  selectedIndex === index
                    ? 'bg-indigo-600/10 border border-indigo-500/20'
                    : 'hover:bg-zinc-800/50 border border-transparent'
                }`}
              >
                <div className={`text-sm font-medium transition-colors ${
                  selectedIndex === index ? 'text-indigo-400' : 'text-zinc-500 hover:text-zinc-300'
                }`}>
                  {slide.title}
                </div>
                <div className={`text-xs mt-0.5 transition-colors ${
                  selectedIndex === index ? 'text-zinc-400' : 'text-zinc-700'
                }`}>
                  {slide.subtitle}
                </div>
              </button>
            ))}
          </div>

          {/* Carousel */}
          <div className="flex-1 min-w-0 relative">
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {slides.map((slide, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      {/* Content */}
                      <div>
                        <div className="inline-block px-4 py-2 bg-indigo-600/10 rounded-full text-indigo-400 text-sm font-semibold mb-4 border border-indigo-500/20">
                          {slide.subtitle}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                          {slide.title}
                        </h3>
                        <p className="text-lg text-zinc-400 mb-8">
                          {slide.description}
                        </p>
                        <ul className="space-y-3">
                          {slide.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-zinc-300 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Visual */}
                      <div>
                        {slide.visual}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile-only dot indicators */}
            <div className="flex md:hidden justify-center gap-2 mt-8">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`transition-all duration-300 rounded-full ${
                    selectedIndex === index
                      ? 'w-8 h-2.5 bg-indigo-500'
                      : 'w-2.5 h-2.5 bg-zinc-700 hover:bg-zinc-600'
                  }`}
                  aria-label={`Go to ${slide.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
