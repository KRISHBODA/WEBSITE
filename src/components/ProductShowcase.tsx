import { photo } from '../data/images'
import { products } from '../data/tiles'

type ProductShowcaseProps = {
  limit?: number
}

export default function ProductShowcase({ limit }: ProductShowcaseProps) {
  const visibleProducts = limit ? products.slice(0, limit) : products

  return (
    <section className="section product-showcase">
      <div className="container">
        <div className="section__intro">
          <span className="eyebrow">Featured Products</span>
          <h2 className="section__title">Explore best-selling tile surfaces</h2>
          <p className="section__subtitle">
            A practical preview of premium ceramic, vitrified, porcelain, wall,
            outdoor, and elevation tiles for real homes and projects.
          </p>
        </div>

        <div className="product-showcase__grid">
          {visibleProducts.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-card__media">
                <img src={photo(product.image, 700)} alt={product.name} loading="lazy" />
                <span>{product.category}</span>
              </div>
              <div className="product-card__body">
                <h3>{product.name}</h3>
                <dl className="product-card__specs">
                  <div>
                    <dt>Finish</dt>
                    <dd>{product.finish}</dd>
                  </div>
                  <div>
                    <dt>Size</dt>
                    <dd>{product.size}</dd>
                  </div>
                  <div>
                    <dt>Best For</dt>
                    <dd>{product.use}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
