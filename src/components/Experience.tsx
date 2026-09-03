import { useLang } from '../i18n/LanguageProvider'

export default function Experience() {
  const { t } = useLang()

  return (
    <section className="section wrap" id="experience">
      <div className="section__mark">
        <h2>{t.experience.heading}</h2>
        <span className="section__tag">{t.experience.tag}</span>
      </div>
      <div className="timeline">
        {t.experience.entries.map((entry) => (
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
