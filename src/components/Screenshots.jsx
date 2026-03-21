const screenshots = [
  {
    src: '/screenshots/groove-library.png',
    caption: 'Browse the Groove Library',
    description: 'Filter by genre and add grooves to your practice list',
  },
  {
    src: '/screenshots/practice-list.png',
    caption: 'Your Practice List',
    description: 'Build a focused session from grooves you want to master',
  },
  {
    src: '/screenshots/notation-view.png',
    caption: 'Visual Notation Playback',
    description: 'Follow along with real-time animated drum notation',
  },
]

function PhoneFrame({ src, caption, description }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="iphone-frame"
        style={{ width: '220px', height: '476px' }}
      >
        {/* Notch */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
          style={{
            width: '100px',
            height: '28px',
            background: '#111',
            borderRadius: '0 0 18px 18px',
          }}
        />
        {/* Screen content */}
        <div className="w-full h-full bg-black flex items-center justify-center overflow-hidden">
          <img
            src={src}
            alt={caption}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Show a placeholder if the screenshot hasn't been added yet
              e.target.parentElement.innerHTML = `
                <div style="
                  display:flex;
                  flex-direction:column;
                  align-items:center;
                  justify-content:center;
                  width:100%;
                  height:100%;
                  background:#111;
                  color:#555;
                  font-size:12px;
                  text-align:center;
                  padding:20px;
                  gap:8px;
                ">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#444" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <span>Add screenshot to<br/>public/screenshots/</span>
                </div>
              `
            }}
          />
        </div>
      </div>
      <div className="text-center max-w-[200px]">
        <p className="font-semibold text-white text-sm">{caption}</p>
        <p className="text-muted text-xs mt-1 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function Screenshots() {
  return (
    <section className="py-24 px-6 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0d0d0d, #111)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">See it in action</h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Everything you need to make your drum practice more structured, focused, and fun.
          </p>
        </div>

        {/* Desktop: side by side */}
        <div className="hidden md:flex items-start justify-center gap-8 lg:gap-12">
          {screenshots.map((s) => (
            <PhoneFrame key={s.src} {...s} />
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory">
          {screenshots.map((s) => (
            <div key={s.src} className="flex-shrink-0 snap-center">
              <PhoneFrame {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
