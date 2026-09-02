import { timeline } from '../data/experience'

export default function Experience() {
  return (
    <section className="section wrap" id="experience">
      <div className="section__mark">
        <h2>Full history</h2>
        <span className="section__tag">2013 — 2026</span>
      </div>
      <div className="timeline">
        {timeline.map((entry) => (
          <div
            className={`timeline__row${entry.featured ? ' timeline__row--featured' : ''}`}
            key={entry.title}
          >
            <div className="timeline__period">{entry.period}</div>
            <div>
              <div className="timeline__title">{entry.title}</div>
              <p className="timeline__desc">{entry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
