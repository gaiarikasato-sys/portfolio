import { featuredProjects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section className="section wrap" id="work">
      <div className="section__mark">
        <h2>Recent work</h2>
        <span className="section__tag">2024 — 2026</span>
      </div>
      {featuredProjects.map((project) => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </section>
  )
}
