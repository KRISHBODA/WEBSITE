const faqs = [
  {
    question: 'Which tiles are best for bathrooms?',
    answer:
      'Use low-porosity ceramic or vitrified tiles with matt, satin, or structured anti-slip finishes for wet areas.',
  },
  {
    question: 'Can large-format tiles be used on walls?',
    answer:
      'Yes. Large porcelain slabs are excellent for feature walls, bathrooms, kitchens, counters, and seamless luxury spaces.',
  },
  {
    question: 'What should I choose for outdoor areas?',
    answer:
      'Select 20mm pavers or structured grip tiles with UV, frost, and stain resistance for patios, terraces, poolsides, and driveways.',
  },
  {
    question: 'Do you provide samples and design guidance?',
    answer:
      'Yes. The enquiry flow is designed for sample requests, showroom appointments, product guidance, and project consultation.',
  },
]

export default function Faq() {
  return (
    <section className="section faq">
      <div className="container faq__inner">
        <div className="faq__intro">
          <span className="eyebrow">Help Center</span>
          <h2 className="section__title">Questions before choosing tiles?</h2>
          <p>
            Add practical guidance here so visitors can understand finishes,
            applications, sizes, maintenance, and showroom support.
          </p>
        </div>
        <div className="faq__list">
          {faqs.map((faq) => (
            <article key={faq.question} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
