import { photo, type PhotoKey } from '../data/images'

type GalleryItem = {
  title: string
  label: string
  image: PhotoKey
}

const gallery: GalleryItem[] = [
  { title: 'Marble living room', label: 'Large-format slabs', image: 'living' },
  { title: 'Spa bathroom', label: 'Anti-slip porcelain', image: 'bathroom' },
  { title: 'Modern kitchen', label: 'Wall and floor tiles', image: 'kitchen' },
  { title: 'Outdoor terrace', label: '20mm pavers', image: 'patio' },
  { title: 'Warm bedroom', label: 'Wood-look vitrified', image: 'bedroom' },
  { title: 'Designer facade', label: 'Elevation tiles', image: 'facade' },
]

export default function InspirationGallery() {
  return (
    <section className="section inspiration">
      <div className="container">
        <div className="section__intro">
          <span className="eyebrow">Inspiration</span>
          <h2 className="section__title">See tiles inside real spaces</h2>
          <p className="section__subtitle">
            Use this section like a visual showroom: room scenes, application ideas,
            and material stories help customers imagine the final space.
          </p>
        </div>

        <div className="inspiration__grid">
          {gallery.map((item, index) => (
            <article
              key={item.title}
              className={`inspiration-card ${index === 0 || index === 3 ? 'inspiration-card--large' : ''}`}
            >
              <img src={photo(item.image, 900)} alt={item.title} loading="lazy" />
              <div className="inspiration-card__overlay">
                <span>{item.label}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
