import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section className="section wrap" id="skills">
      <div className="section__mark">
        <h2>Tools & stack</h2>
        <span className="section__tag">by category</span>
      </div>
      <div className="skills__grid">
        {skillGroups.map((group) => (
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
