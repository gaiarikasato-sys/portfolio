import { useLang } from '../i18n/LanguageProvider'

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="hero wrap">
      <p className="hero__eyebrow">
        {t.hero.eyebrowRole} <span>/</span> {t.hero.eyebrowLocation}
      </p>
      <h1>{t.hero.heading}</h1>
      <p className="hero__lede">{t.hero.lede}</p>
      <div className="hero__stats">
        {t.hero.stats.map((stat) => (
          <div className="hero__stat" key={stat.label}>
            <b>{stat.value}</b>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
