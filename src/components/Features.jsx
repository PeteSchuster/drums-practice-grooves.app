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
    description: '24 curated grooves across rock, funk, punk and jazz — from basic beats to ghost-note workouts and snare fills.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
      </svg>
    ),
    title: 'Practice List',
    description: 'Build a focused session from the grooves you want to work on, and track what you have already practised.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="10 8 16 12 10 16 10 8"/>
      </svg>
    ),
    title: 'Play All',
    description: 'Run your whole list end to end as one session — move on after a set number of repeats, or after a set number of minutes.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M3 18a9 9 0 0118 0"/>
        <line x1="12" y1="18" x2="17" y2="11"/>
        <circle cx="12" cy="18" r="1.5"/>
      </svg>
    ),
    title: 'Speed Trainer',
    description: 'Play a groove a few times, let the app nudge the tempo up, repeat — how a drummer actually uses a metronome.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <rect x="3" y="4" width="18" height="7" rx="1.5"/>
        <path d="M6 20l4-6"/>
        <path d="M18 20l-4-6"/>
        <line x1="9" y1="20" x2="15" y2="20"/>
      </svg>
    ),
    title: 'Three Ways to Follow',
    description: 'Read it as a step grid, as real drum notation, or as a scrolling note highway that shows what is coming next.',
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
    title: 'Six Drum Kits',
    description: 'Standard, Room, Power, Electronic, Jazz and Brush — pick the kit that matches what you are playing.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <polyline points="17 1 21 5 17 9"/>
        <path d="M3 11V9a4 4 0 014-4h14"/>
        <polyline points="7 23 3 19 7 15"/>
        <path d="M21 13v2a4 4 0 01-4 4H3"/>
      </svg>
    ),
    title: 'Working Tempo & Loop',
    description: 'Every groove remembers the BPM you practise it at, with tempo and loop controls right on the transport bar.',
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
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M8 4v10.5a2.5 2.5 0 11-2-2.45"/>
        <path d="M16 9.5V20a2.5 2.5 0 11-2-2.45"/>
        <line x1="8" y1="7" x2="16" y2="12.5"/>
      </svg>
    ),
    title: 'Any Time Signature',
    description: '4/4, 6/8 and 12/8 grooves are all first-class, with beat grouping and beaming that follow the meter.',
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
