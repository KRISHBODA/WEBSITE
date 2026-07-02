type Milestone = {
  year: string
  title: string
  text: string
}

const milestones: Milestone[] = [
  {
    year: '1998',
    title: 'The first showroom',
    text: 'Terra opens its doors with a single curated collection of imported tiles.',
  },
  {
    year: '2006',
    title: 'Our own kilns',
    text: 'We begin manufacturing porcelain in-house, controlling quality end to end.',
  },
  {
    year: '2014',
    title: 'Large-format era',
    text: 'Launch of slabs up to 1200×2400mm, redefining seamless surfaces.',
  },
  {
    year: '2021',
    title: 'Sustainable production',
    text: 'Solar-powered facilities and recycled-content collections introduced.',
  },
  {
    year: '2026',
    title: 'Flagship experience studio',
    text: 'Full-room installations let clients walk on every surface before they buy.',
  },
]

export default function Journey() {
  return (
    <section className="section journey">
      <div className="container">
        <div className="section__intro">
          <span className="eyebrow">Our Journey</span>
          <h2 className="section__title">A journey of growth</h2>
        </div>
        <ol className="timeline">
          {milestones.map((item) => (
            <li key={item.year} className="timeline__item">
              <span className="timeline__year">{item.year}</span>
              <div className="timeline__card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
