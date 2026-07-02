const testimonials = [
  {
    quote:
      'The product presentation made it easy to shortlist slabs, finishes, and sizes before visiting the studio.',
    name: 'Nisha Shah',
    role: 'Interior Designer',
  },
  {
    quote:
      'We could compare bathroom, kitchen, and outdoor tiles in one place. The room-based browsing feels very premium.',
    name: 'Rohan Patel',
    role: 'Homeowner',
  },
  {
    quote:
      'The collections, product specs, and enquiry flow are exactly what a project buyer needs for faster decisions.',
    name: 'Ar. Dev Mehta',
    role: 'Architect',
  },
]

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section__head">
          <div>
            <span className="eyebrow">Client Voices</span>
            <h2 className="section__title">Built for confident selection</h2>
          </div>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <figure key={item.name} className="testimonial-card">
              <blockquote>“{item.quote}”</blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
