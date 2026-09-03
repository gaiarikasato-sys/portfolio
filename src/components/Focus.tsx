import { useLang } from '../i18n/LanguageProvider'

export default function Focus() {
  const { t } = useLang()

  return (
    <section className="section wrap" id="about">
      <div className="section__mark">
        <span className="section__tag">{t.about.tag}</span>
      </div>
      <div className="focus__grid">
        <div>
          {t.about.ledes.map((lede, i) => (
            <p className="focus__lede" key={i}>
              {lede}
            </p>
          ))}
        </div>
        <ul className="focus__list">
          {t.about.points.map((point) => (
            <li key={point.title}>
              <strong>{point.title}</strong>
              {point.body}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
