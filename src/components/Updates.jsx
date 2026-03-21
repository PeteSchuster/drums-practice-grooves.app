import updates from '../data/updates.json'

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function Updates() {
  const sorted = [...updates].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <section className="py-24 px-6" style={{ background: '#0d0d0d' }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What's New</h2>
          <p className="text-muted text-lg">
            Staying in the groove — here's what's been added and improved.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {sorted.map((update, i) => (
            <div
              key={update.version}
              className="rounded-2xl p-6"
              style={{
                background: '#1a1a1a',
                border: '1px solid #2a2a2a',
                borderLeft: i === 0 ? '3px solid #e07b00' : '1px solid #2a2a2a',
              }}
            >
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  {i === 0 && (
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: 'rgba(224,123,0,0.15)', color: '#e07b00' }}
                    >
                      Latest
                    </span>
                  )}
                  <span className="font-bold text-lg">v{update.version}</span>
                </div>
                <span className="text-muted text-sm">{formatDate(update.date)}</span>
              </div>

              <ul className="space-y-2">
                {update.notes.map((note, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-muted">
                    <span
                      className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{ background: '#e07b00' }}
                    />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
