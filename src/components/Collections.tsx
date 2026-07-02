import { useState } from 'react'
import { Link } from 'react-router-dom'
import { photo, type PhotoKey } from '../data/images'
import { paths } from '../routes/paths'

type Collection = {
  id: string
  name: string
  heading: string
  description: string
  image: PhotoKey
  points: string[]
}

const collections: Collection[] = [
  {
    id: 'floor',
    name: 'Floor Tiles',
    heading: 'Floors built to endure',
    description:
      'High-strength porcelain and vitrified tiles engineered for heavy footfall, with slip-resistant finishes for homes, retail, and hospitality.',
    image: 'tilefloor',
    points: ['Scratch & stain resistant', 'Anti-slip R10 finishes', 'Large-format up to 1200×2400mm'],
  },
  {
    id: 'wall',
    name: 'Wall Tiles',
    heading: 'Walls with character',
    description:
      'From matte concrete looks to glossy subway classics, our wall collections add texture and depth to kitchens, bathrooms, and living spaces.',
    image: 'kitchen',
    points: ['Glazed & textured surfaces', 'Décor and feature panels', 'Lightweight, easy to fit'],
  },
  {
    id: 'outdoor',
    name: 'Outdoor Pavers',
    heading: 'Surfaces for the outdoors',
    description:
      '20mm structural pavers built to withstand weather, frost, and time — perfect for patios, driveways, and poolsides.',
    image: 'patio',
    points: ['Frost & UV resistant', '20mm structural strength', 'Coordinated indoor pairings'],
  },
  {
    id: 'mosaic',
    name: 'Mosaic & Décor',
    heading: 'The finishing detail',
    description:
      'Handcrafted mosaics, terrazzo, and decorative accents that turn a surface into a statement.',
    image: 'luxe',
    points: ['Glass, stone & metal blends', 'Custom pattern service', 'Backsplash & feature ready'],
  },
]

export default function Collections() {
  const [active, setActive] = useState(collections[0].id)
  const current = collections.find((c) => c.id === active) ?? collections[0]

  return (
    <section className="section collections">
      <div className="container">
        <div className="section__intro">
          <span className="eyebrow">Core Collections</span>
          <h2 className="section__title">Surfaces for every space</h2>
        </div>

        <div className="collections__layout">
          <ul className="collections__tabs" role="tablist">
            {collections.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={c.id === active}
                  className={`collections__tab ${c.id === active ? 'is-active' : ''}`}
                  onClick={() => setActive(c.id)}
                >
                  {c.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="collections__panel" role="tabpanel">
            <div className="collections__media">
              <img src={photo(current.image, 900)} alt={current.name} />
            </div>
            <div className="collections__content">
              <h3>{current.heading}</h3>
              <p>{current.description}</p>
              <ul className="collections__points">
                {current.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link to={paths.contact} className="btn btn--primary">
                Enquire about {current.name}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
