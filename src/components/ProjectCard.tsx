import type { Project } from '../i18n/types'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project">
      <div className="project__head">
        <div>
          <div className="project__period">{project.period}</div>
          <div className="project__sector">{project.sector}</div>
        </div>
        {project.duration ? <div className="project__duration">{project.duration}</div> : null}
      </div>

      <h3>{project.title}</h3>
      <div className="project__role">{project.role}</div>
      <p className="project__summary">{project.summary}</p>

      <ul className="project__highlights">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="project__stack">
        {project.stack.map((tech) => (
          <span className="chip" key={tech}>
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}
