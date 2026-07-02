import { companyStats } from '../data/tiles'

export default function Stats() {
  return (
    <section className="section stats-band">
      <div className="container">
        <div className="section__intro">
          <span className="eyebrow">Our Scale</span>
          <h2 className="section__title">A trusted name in ceramic tiles</h2>
          <p className="section__subtitle">
            Three decades of manufacturing excellence — trusted by architects,
            builders, and homeowners across the country.
          </p>
        </div>

        <div className="stats-band__grid">
          {companyStats.map((stat) => (
            <div key={stat.label} className="stats-band__item">
              <span className="stats-band__value">{stat.value}</span>
              <span className="stats-band__label">{stat.label}</span>
              <span className="stats-band__detail">{stat.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
