import { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { photo } from '../data/images'
import { collections } from '../data/tiles'
import { paths } from '../routes/paths'

// Custom Metadata for Category, Thickness, Sizes, Finishes in each collection
const collectionMeta: Record<
  string,
  { category: string; thickness: string; sizes: string[]; finishes: string[]; pdfUrl: string }
> = {
  calacatta: {
    category: 'Slab Tiles',
    thickness: '15 MM',
    sizes: ['1200x2400 mm'],
    finishes: ['Polished'],
    pdfUrl: '/catalogues/calacatta_royale.pdf',
  },
  terrazzo: {
    category: 'Digital Full Body Tiles',
    thickness: '9.0 MM',
    sizes: ['600x600 mm'],
    finishes: ['Satin'],
    pdfUrl: '/catalogues/terrazzo_muse.pdf',
  },
  cemento: {
    category: 'Color Body Tiles',
    thickness: '9.0 MM',
    sizes: ['600x1200 mm'],
    finishes: ['Ultra Matt'],
    pdfUrl: '/catalogues/cemento_loft.pdf',
  },
  woodline: {
    category: 'Full Body Tiles',
    thickness: '9.5 MM',
    sizes: ['200x1200 mm'],
    finishes: ['Rustic Matt'],
    pdfUrl: '/catalogues/woodline_reserve.pdf',
  },
  rockdeck: {
    category: 'Full Body Tiles',
    thickness: '20.0 MM',
    sizes: ['600x600 mm'],
    finishes: ['Structured Grip'],
    pdfUrl: '/catalogues/rockdeck_pavers.pdf',
  },
  travertine: {
    category: 'Slab Tiles',
    thickness: '10.5 MM',
    sizes: ['1200x1200 mm'],
    finishes: ['Carving'],
    pdfUrl: '/catalogues/travertine_classico.pdf',
  },
  carrara: {
    category: 'Slab Tiles',
    thickness: '9.5 MM',
    sizes: ['800x1600 mm'],
    finishes: ['Glossy'],
    pdfUrl: '/catalogues/carrara_venato.pdf',
  },
  emperador: {
    category: 'Color Body Tiles',
    thickness: '9.5 MM',
    sizes: ['800x1600 mm'],
    finishes: ['High Gloss'],
    pdfUrl: '/catalogues/emperador_bronze.pdf',
  },
}

// Side menu items
const filterCategories = [
  'Full Body Tiles',
  'Digital Full Body Tiles',
  'Slab Tiles',
  'Technical Porcelain Tiles',
  'Color Body Tiles',
]

const filterThicknesses = [
  '9.0 MM',
  '9.5 MM',
  '10.5 MM',
  '15 MM',
  '20 MM',
]

const filterSizes = [
  '200x1200 mm',
  '600x600 mm',
  '600x1200 mm',
  '800x1600 mm',
  '1200x1200 mm',
  '1200x2400 mm',
]

export default function CollectionsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [activeThickness, setActiveThickness] = useState<string | null>(null)
  const [activeSize, setActiveSize] = useState<string | null>(null)

  // Parse URL search parameters on load
  const activeCollection = searchParams.get('collection')
  const activeFinish = searchParams.get('finish')

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) setActiveCategory(category)

    const thickness = searchParams.get('thickness')
    if (thickness) setActiveThickness(thickness)

    const size = searchParams.get('size')
    if (size) setActiveSize(size)
  }, [searchParams])

  // Filter collections list based on selected sidebar options
  const filteredCollections = useMemo(() => {
    return collections.filter((c) => {
      const meta = collectionMeta[c.id]
      if (!meta) return false

      // Match Collection ID query
      if (activeCollection && c.id !== activeCollection) {
        return false
      }

      // Match Finish query
      if (activeFinish && !meta.finishes.includes(activeFinish)) {
        return false
      }

      // Match Category
      if (activeCategory && meta.category !== activeCategory) {
        return false
      }

      // Match Thickness (loose comparison for "15 MM" vs "15.0 MM")
      if (activeThickness) {
        const thicknessNum = parseFloat(activeThickness)
        const metaThicknessNum = parseFloat(meta.thickness)
        if (thicknessNum !== metaThicknessNum) {
          return false
        }
      }

      // Match Size
      if (activeSize && !meta.sizes.includes(activeSize)) {
        return false
      }

      return true
    })
  }, [activeCategory, activeThickness, activeSize, activeCollection, activeFinish])

  const clearAllFilters = () => {
    setActiveCategory(null)
    setActiveThickness(null)
    setActiveSize(null)
    setSearchParams({})
  }

  return (
    <>
      <PageHero
        eyebrow="Our Collections"
        title="Collection"
        subtitle="Explore our comprehensive ranges classified by technical types, nominal thicknesses, and dimensions."
      />

      <section className="collections-layout">
        <div className="container">
          <div className="collections-layout__grid-wrap">
            
            {/* Left Sidebar Filter Section */}
            <aside className="collections-layout__sidebar">
              <div className="collections-layout__sidebar-header">
                <h2>Available Collection</h2>
                {(activeCategory || activeThickness || activeSize) && (
                  <button type="button" className="clear-filters-btn" onClick={clearAllFilters}>
                    Clear Filters
                  </button>
                )}
              </div>

              {/* 1. Category filter list */}
              <div className="sidebar-filter-group">
                <h3>Category</h3>
                <ul>
                  {filterCategories.map((cat) => (
                    <li key={cat}>
                      <button
                        type="button"
                        className={`filter-link ${activeCategory === cat ? 'is-active' : ''}`}
                        onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                      >
                        <span className="arrow">→</span>
                        <span className="label-text">{cat}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2. Thickness filter list */}
              <div className="sidebar-filter-group">
                <h3>Thickness</h3>
                <ul>
                  {filterThicknesses.map((thick) => (
                    <li key={thick}>
                      <button
                        type="button"
                        className={`filter-link ${activeThickness === thick ? 'is-active' : ''}`}
                        onClick={() => setActiveThickness(activeThickness === thick ? null : thick)}
                      >
                        <span className="arrow">→</span>
                        <span className="label-text">{thick}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Size filter list */}
              <div className="sidebar-filter-group">
                <h3>Size</h3>
                <ul>
                  {filterSizes.map((sz) => (
                    <li key={sz}>
                      <button
                        type="button"
                        className={`filter-link ${activeSize === sz ? 'is-active' : ''}`}
                        onClick={() => setActiveSize(activeSize === sz ? null : sz)}
                      >
                        <span className="arrow">→</span>
                        <span className="label-text">{sz}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Right Column Collections Grid */}
            <main className="collections-layout__main">
              {filteredCollections.length > 0 ? (
                <div className="collections-grid-view">
                  {filteredCollections.map((collection) => {
                    const meta = collectionMeta[collection.id]
                    return (
                      <Link
                        key={collection.id}
                        to={`${paths.collections}?collection=${collection.id}`}
                        className="collections-grid-card"
                      >
                        <div className="card-media">
                          <img
                            src={photo(collection.image, 800)}
                            alt={collection.name}
                            loading="lazy"
                          />
                        </div>
                        <div className="card-body">
                          <h3>{collection.name}</h3>
                          
                          {/* Circle orange/gold View More arrow action */}
                          <div className="view-more-action">
                            <span className="circle-arrow">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                              </svg>
                            </span>
                            <span className="text">View More</span>
                          </div>

                          {meta && (
                            <div className="card-spec-tags">
                              <span>{meta.category}</span>
                              <span>{meta.thickness}</span>
                              <span>{meta.sizes[0]}</span>
                            </div>
                          )}
                        </div>
                      </Link>
                    )
                  })}
                </div>
              ) : (
                <div className="collections-empty-panel glass-dark">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                  <h3>No collections found</h3>
                  <p>Try resetting the category, thickness, or size sidebar selectors to see all products ranges.</p>
                  <button type="button" className="btn btn--secondary" onClick={clearAllFilters}>
                    Reset Filters
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </>
  )
}
