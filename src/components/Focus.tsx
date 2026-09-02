export default function Focus() {
  return (
    <section className="section wrap" id="about">
      <div className="section__mark">
        <span className="section__tag">about</span>
      </div>
      <div className="focus__grid">
        <div>
          <p className="focus__lede">
            I spent my first decade mostly on the frontend of large manufacturer and government
            systems, which is where I got comfortable with HTML5, CSS3, JavaScript and jQuery
            under real production constraints.
          </p>
          <p className="focus__lede">
            The last few years have pulled me further up the stack — TypeScript, React, Next.js,
            and increasingly the server side, from Node and Python APIs to database and interface
            design. I grew up partly in the Philippines, so I work comfortably in English and
            Japanese, and I'm used to being the person who reports progress clearly and keeps a
            team's expectations aligned.
          </p>
        </div>
        <ul className="focus__list">
          <li>
            <strong>Interfaces with hard constraints</strong>
            Canvas, PDF and map-based tools where correctness and performance both matter.
          </li>
          <li>
            <strong>Type-safe frontends</strong>
            TypeScript across React and Next.js codebases, built to hold up as they grow.
          </li>
          <li>
            <strong>Full-stack when it's needed</strong>
            Comfortable owning an API or a data model, not just the screen in front of it.
          </li>
          <li>
            <strong>Clear communication</strong>
            Regular reporting and documentation as a habit, not an afterthought.
          </li>
        </ul>
      </div>
    </section>
  )
}
