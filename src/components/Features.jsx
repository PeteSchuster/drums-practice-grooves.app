const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M9 19V6l12-3v13"/>
        <circle cx="6" cy="19" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>
    ),
    title: 'Groove Library',
    description: 'Browse a curated collection of drum grooves organized by genre — Funk, Rock, Punk, and more.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
      </svg>
    ),
    title: 'Practice List',
    description: 'Curate your own practice session by adding the grooves you want to focus on today.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    ),
    title: 'Visual Playback',
    description: 'Follow along with animated drum notation that highlights each note as it plays in real time.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <ellipse cx="12" cy="17" rx="9" ry="3"/>
        <path d="M3 17V7a9 3 0 0118 0v10"/>
        <path d="M12 14v-3"/>
        <path d="M3 7a9 3 0 0018 0"/>
      </svg>
    ),
    title: 'Multiple Drum Kits',
    description: 'Choose from several built-in drum kits to hear playback that matches your style and sound.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <line x1="12" y1="5" x2="12" y2="19"/>
        <polyline points="19 12 12 5 5 12"/>
      </svg>
    ),
    title: 'Tempo Control',
    description: 'Dial in exactly the BPM you need to practice slowly and build up speed with confidence.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M18 8h1a4 4 0 010 8h-1"/>
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/>
        <line x1="10" y1="1" x2="10" y2="4"/>
        <line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    title: 'Count-in & Metronome',
    description: 'Stay in the pocket with a built-in count-in and metronome to keep your timing tight.',
  },
]

export default function Features() {
  return (
    <section className="py-24 px-6" style={{ background: '#111' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything you need to practice</h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Built for drummers who want to practice smarter, not just harder.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card rounded-2xl p-6"
              style={{
                background: '#1a1a1a',
                border: '1px solid #2a2a2a',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(224,123,0,0.12)', color: '#e07b00' }}
              >
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
