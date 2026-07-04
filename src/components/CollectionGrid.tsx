import { Link } from 'react-router-dom'
import { collections } from '../data/tiles'
import { photo } from '../data/images'
import { paths } from '../routes/paths'

export default function CollectionGrid() {
  return (
    <section className="section collection-grid">
      <div className="container">
        <div className="section__intro">
          <span className="eyebrow">Collections</span>
          <h2 className="section__title">Explore our tile collections</h2>
          <p className="section__subtitle">
            A curated selection of stylish, innovative tile designs crafted to elevate
            every space with the latest trends.
          </p>
        </div>

        <div className="collection-grid__grid">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`${paths.collections}?collection=${collection.id}`}
              className="collection-tile"
            >
              <img
                className="collection-tile__media"
                src={photo(collection.image, 700)}
                alt={collection.name}
                loading="lazy"
              />
              <span className="collection-tile__overlay">
                <span className="collection-tile__name">{collection.name}</span>
                <span className="collection-tile__tagline">{collection.tagline}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
