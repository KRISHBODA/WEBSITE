import { Link } from 'react-router-dom'
import { photo, type PhotoKey } from '../data/images'
import { paths } from '../routes/paths'

type Highlight = {
  date: string
  tag: string
  title: string
  image: PhotoKey
}

const highlights: Highlight[] = [
  {
    date: '28 Apr 2026',
    tag: 'New Arrival',
    title:
      'Introducing Marmo Bianco — large-format marble-effect porcelain in five finishes.',
    image: 'marble',
  },
  {
    date: '09 Apr 2026',
    tag: 'Showroom',
    title:
      'Terra opens its flagship experience studio with full-room tile installations.',
    image: 'interior',
  },
  {
    date: '07 Mar 2026',
    tag: 'Sustainability',
    title:
      'Our new recycled-content collection cuts production emissions by 40 percent.',
    image: 'concrete',
  },
  {
    date: '02 Mar 2026',
    tag: 'Award',
    title:
      'Terra wins Surface Design of the Year for the Terrazzo Revival range.',
    image: 'terrazzo',
  },
]

export default function Highlights() {
  return (
    <section className="section highlights">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Latest News &amp; Highlights</h2>
          <Link to={paths.collections} className="section__link">
            View all
          </Link>
        </div>
        <div className="highlights__grid">
          {highlights.map((item) => (
            <article key={item.title} className="highlight-card">
              <div className="highlight-card__media">
                <img src={photo(item.image, 600)} alt="" loading="lazy" />
                <span className="highlight-card__tag">{item.tag}</span>
              </div>
              <div className="highlight-card__body">
                <time className="highlight-card__date">{item.date}</time>
                <p className="highlight-card__title">{item.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
