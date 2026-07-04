import { Link } from 'react-router-dom'
import { categories } from '../data/tiles'
import { photo } from '../data/images'
import { paths } from '../routes/paths'

export default function Categories() {
  return (
    <section className="section categories">
      <div className="container">
        <div className="section__intro">
          <span className="eyebrow">Applications</span>
          <h2 className="section__title">Find Tiles by Category</h2>
          <p className="section__subtitle">
            Premium wall and floor tiles for every room, combining advanced technology
            with elegant, easy-to-maintain designs.
          </p>
        </div>

        <div className="categories__grid">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={paths.collections}
              className="category-card"
            >
              <span className="category-card__media">
                <img
                  className="category-card__img"
                  src={photo(category.image, 700)}
                  alt={category.name}
                  loading="lazy"
                />
              </span>
              <span className="category-card__body">
                <span className="category-card__name">{category.name}</span>
                <span className="category-card__text">{category.description}</span>
                <span className="category-card__link">Explore →</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
