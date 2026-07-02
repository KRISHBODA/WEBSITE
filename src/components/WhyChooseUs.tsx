const features = [
  {
    title: 'Curated for Indian homes',
    text: 'Tile ranges are grouped by room, finish, size, and style so customers can quickly find surfaces for bathrooms, kitchens, living rooms, elevations, and outdoor spaces.',
  },
  {
    title: 'Premium manufacturing',
    text: 'Demo content highlights vitrified strength, rectified edges, large formats, low water absorption, and consistent shade variation like a professional tile catalog.',
  },
  {
    title: 'Design studio support',
    text: 'Customers can book consultations, request samples, and discuss layouts, grout combinations, and product pairings before selecting final tiles.',
  },
  {
    title: 'Project-ready collections',
    text: 'The site presents complete surface families for floors, walls, facades, countertops, commercial projects, and outdoor paving.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section why-us">
      <div className="container why-us__inner">
        <div className="why-us__content">
          <span className="eyebrow">Why Terra</span>
          <h2 className="section__title">Designed like a premium tile experience studio</h2>
          <p>
            Inspired by leading ceramic brands, this demo gives customers a guided
            journey from room inspiration to product selection, collection browsing,
            consultation, and enquiry.
          </p>
        </div>
        <div className="why-us__grid">
          {features.map((feature, index) => (
            <article key={feature.title} className="why-card">
              <span className="why-card__number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
