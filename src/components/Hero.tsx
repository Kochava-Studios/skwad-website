import { getAssetPath } from '../utils/paths';
import ScreenshotLightbox from './ScreenshotLightbox';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-4 py-12 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-black to-purple-950/20" />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 items-center">
          {/* Left: Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Logo & Title */}
            <div className="flex items-center gap-4 opacity-0 animate-fade-in-up">
              <img
                src={getAssetPath('images/skwad-icon.png')}
                alt="Skwad"
                className="w-20 h-20 rounded-2xl shadow-2xl"
              />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                Skwad
              </h1>
            </div>

            {/* Tagline */}
            <div className="opacity-0 animate-fade-in-up delay-100">
              <p className="text-3xl md:text-4xl font-bold text-white mb-4">
                Multiple AI agents, really working together
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
                A macOS app that runs a whole team of AI coding agents—each in its own embedded terminal—and lets them <span className="text-indigo-400 font-semibold">coordinate work themselves</span> so you can get real, parallel progress without tab chaos.
              </p>
            </div>

            {/* CTA Button */}
            <div className="opacity-0 animate-fade-in-up delay-200">
              <a
                href={getAssetPath('Skwad.zip')}
                download
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-indigo-500/50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download for macOS
              </a>
              <p className="mt-4 text-sm text-zinc-500">
                macOS 26.0+ • Free & Open Source
              </p>
            </div>
          </div>

          {/* Right: Screenshot */}
          <div className="opacity-0 animate-fade-in-up delay-300">
            <ScreenshotLightbox />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up delay-500 z-20">
        <div className="flex flex-col items-center gap-2 text-zinc-600">
          <span className="text-sm uppercase tracking-wider">Scroll</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
