const APP_STORE_URL = 'https://apps.apple.com/us/app/drums-practice-grooves/id6760619314'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated drum grid background */}
      <div className="absolute inset-0 drum-grid-bg" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(224,123,0,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto fade-up">
        {/* App icon */}
        <div className="flex justify-center mb-8">
          <img
            src="/app-icon.png"
            alt="Drums: Practice Grooves app icon"
            className="w-24 h-24 rounded-2xl shadow-2xl"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        </div>

        {/* Badge */}
        <div className="inline-block mb-4">
          <span
            className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ background: 'rgba(224,123,0,0.15)', color: '#e07b00', border: '1px solid rgba(224,123,0,0.3)' }}
          >
            Free iOS App
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight">
          Drums:{' '}
          <span style={{ color: '#e07b00' }}>Practice</span>
          <br />
          Grooves
        </h1>

        <p className="text-lg sm:text-xl text-muted mb-10 max-w-xl mx-auto leading-relaxed">
          Build your practice, one groove at a time. Browse curated drum grooves,
          build your personal practice list, and play along with visual notation
          and real audio playback.
        </p>

        {/* App Store CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="app-store-badge"
            aria-label="Download Drums: Practice Grooves on the App Store"
          >
            {/* Apple logo SVG */}
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-xs leading-tight" style={{ color: '#555' }}>Download on the</div>
              <div className="text-base font-bold leading-tight">App Store</div>
            </div>
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex justify-center">
          <div
            className="flex flex-col items-center gap-2 text-muted text-sm"
            style={{ opacity: 0.5 }}
          >
            <span>Scroll to explore</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animation: 'bounce 1.5s infinite' }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  )
}
