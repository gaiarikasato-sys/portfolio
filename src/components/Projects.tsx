import { useLang } from '../i18n/LanguageProvider'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const { t } = useLang()

  return (
    <section className="section wrap" id="work">
      <div className="section__mark">
        <h2>{t.work.heading}</h2>
        <span className="section__tag">{t.work.tag}</span>
      </div>
      {t.work.projects.map((project) => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </section>
  )
}
