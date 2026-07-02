type Stat = {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: '25+', label: 'Years of craft' },
  { value: '1,200+', label: 'Tile designs' },
  { value: '40+', label: 'Showrooms' },
  { value: '2M+', label: 'Sq. ft. installed' },
]

export default function About() {
  return (
    <section className="section about">
      <div className="container about__inner">
        <div className="about__intro">
          <span className="eyebrow">Our Story</span>
          <h2 className="section__title">Where craftsmanship begins</h2>
          <p className="about__lead">
            For over two decades, Terra has partnered with architects, designers, and
            homeowners to bring lasting beauty to their spaces. Every tile is chosen for
            its quality, character, and the story it helps tell.
          </p>
        </div>

        <figure className="about__quote">
          <blockquote>
            “A surface is more than a finish — it is the foundation of how a space feels.
            We craft tiles that people live on, gather around, and remember.”
          </blockquote>
          <figcaption>
            <span className="about__name">Aarav Mehta</span>
            <span className="about__role">Founder &amp; Creative Director</span>
          </figcaption>
        </figure>

        <div className="about__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="stat">
              <span className="stat__value">{stat.value}</span>
              <span className="stat__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
