import { useLang } from '../i18n/LanguageProvider'

export default function Skills() {
  const { t } = useLang()

  return (
    <section className="section wrap" id="skills">
      <div className="section__mark">
        <h2>{t.skills.heading}</h2>
        <span className="section__tag">{t.skills.tag}</span>
      </div>
      <div className="skills__grid">
        {t.skills.groups.map((group) => (
          <div key={group.label}>
            <div className="skills__group-label">{group.label}</div>
            <div className="skills__chips">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
