import { useState, useMemo } from 'react'
import PageHero from '../components/PageHero'
import { photo } from '../data/images'
import { collections, type Collection } from '../data/tiles'

// Localized mock metadata for catalog files (sizes, finishes, catalog PDF weight, thickness)
const catalogueDetails: Record<
  string,
  { category: string; fileSize: string; thickness: string; description: string; sizes: string[] }
> = {
  calacatta: {
    category: 'SLAB TILES',
    fileSize: '4.8 MB',
    thickness: '15 MM / 10.5 MM',
    description:
      'Continuous large-format porcelain slabs replicate fine Calacatta marble veins. Contains structural indices, water absorption certifications, and high-gloss edge polishing templates.',
    sizes: ['1200x2400 mm', '1200x1200 mm'],
  },
  terrazzo: {
    category: 'DIGITAL FULL BODY TILES',
    fileSize: '2.5 MB',
    thickness: '9.0 MM',
    description:
      'High-definition glazed terrazzo motifs with customized color chips. Includes abrasion resistance ratings (PEI III), slip resistance curves (R9), and kitchen wall layouts.',
    sizes: ['600x600 mm'],
  },
  cemento: {
    category: 'COLOR BODY TILES',
    fileSize: '3.1 MB',
    thickness: '9.0 MM',
    description:
      'Contemporary industrial concrete planks with colored clay bases. Contains details on flexural strength, breaking load, and restoration recommendations.',
    sizes: ['600x1200 mm'],
  },
  woodline: {
    category: 'FULL BODY TILES',
    fileSize: '3.6 MB',
    thickness: '9.5 MM',
    description:
      'Organic hardwood plank recreations featuring high-fidelity wood textures. Lists scratch hardness coefficients, joint-width guidelines, and bedroom installation layouts.',
    sizes: ['200x1200 mm'],
  },
  rockdeck: {
    category: 'FULL BODY TILES',
    fileSize: '5.2 MB',
    thickness: '20.0 MM',
    description:
      'Heavy-duty 20mm structured vitrified tiles engineered for load-bearing driveways, garden pathways, and poolsides. Details high-grip parameters (R11) and subbase preparations.',
    sizes: ['600x600 mm'],
  },
  travertine: {
    category: 'SLAB TILES',
    fileSize: '4.2 MB',
    thickness: '10.5 MM',
    description:
      'Fine vein-cut Italian travertine duplicates utilizing carved glaze finishes. Lists nominal coverage parameters, chemical resistance logs, and facade cladding structures.',
    sizes: ['1200x1200 mm'],
  },
  carrara: {
    category: 'SLAB TILES',
    fileSize: '3.9 MB',
    thickness: '9.5 MM',
    description:
      'Classic Carrara marble recreation in high-sheen polished formats. Details water absorption ratings (< 0.05%), rectified edge tolerances, and dining room mockups.',
    sizes: ['800x1600 mm'],
  },
  emperador: {
    category: 'COLOR BODY TILES',
    fileSize: '3.4 MB',
    thickness: '9.5 MM',
    description:
      'Deep bronze marble vein configurations with mirror gloss polishes. Includes safety guidelines, floor washing instructions, and corporate lobby designs.',
    sizes: ['800x1600 mm'],
  },
}

const categories = [
  { id: 'all', label: 'All Catalogues' },
  { id: 'slabs', label: 'Slab Tiles' },
  { id: 'fullbody', label: 'Full Body Tiles' },
  { id: 'colorbody', label: 'Color Body Tiles' },
  { id: 'digital', label: 'Digital / Decor Tiles' },
]

type SortOption = 'name-asc' | 'name-desc' | 'size-asc' | 'size-desc'

// Sub-component to track loading state for each row
function CatalogueRow({ collection }: { collection: Collection }) {
  const details = catalogueDetails[collection.id] || {
    category: 'TILES',
    fileSize: '3.0 MB',
    thickness: '9.5 MM',
    description: 'Tile specification brochure.',
    sizes: ['600x600 mm'],
  }

  const [progress, setProgress] = useState(0)
  const [downloading, setDownloading] = useState(false)
  const [completed, setCompleted] = useState(false)

  const handleDownload = () => {
    if (downloading || completed) return
    setDownloading(true)
    setProgress(15)

    const interval = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          window.clearInterval(interval)
          setDownloading(false)
          setCompleted(true)
          return 100
        }
        return prev + 15
      })
    }, 150)
  }

  return (
    <article className="catalogue-row-card">
      <div className="catalogue-row-card__image-container">
        <img src={photo(collection.image, 500)} alt={collection.name} loading="lazy" />
      </div>

      <div className="catalogue-row-card__info">
        <span className="catalogue-row-card__category">{details.category}</span>
        <h3 className="catalogue-row-card__title">
          {collection.name} Technical Specifications Brochure
        </h3>
        <p className="catalogue-row-card__desc">{details.description}</p>
        
        <div className="catalogue-row-card__meta">
          <span>Dimensions: {details.sizes.join(', ')}</span>
          <span className="bullet">•</span>
          <span>Thickness: {details.thickness}</span>
          <span className="bullet">•</span>
          <span>Format: PDF ({details.fileSize})</span>
        </div>
      </div>

      <div className="catalogue-row-card__actions">
        {/* Custom outlined download button matching screenshot */}
        <div className="download-wrapper">
          <button
            type="button"
            className={`btn-download-pdf ${downloading ? 'is-loading' : ''} ${completed ? 'is-complete' : ''}`}
            onClick={handleDownload}
            disabled={downloading}
          >
            {downloading ? (
              <span>Downloading {progress}%</span>
            ) : completed ? (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Downloaded</span>
              </>
            ) : (
              <>
                <span>Download PDF</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </>
            )}
          </button>
          
          {downloading && (
            <div className="download-loader-bar">
              <div className="fill" style={{ width: `${progress}%` }} />
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default function CataloguePage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState<SortOption>('name-asc')

  // Filter list based on sidebar pills
  const filteredCatalogues = useMemo(() => {
    return collections.filter((c) => {
      const details = catalogueDetails[c.id]
      if (!details) return false

      if (activeCategory === 'all') return true
      if (activeCategory === 'slabs' && details.category === 'SLAB TILES') return true
      if (activeCategory === 'fullbody' && details.category === 'FULL BODY TILES') return true
      if (activeCategory === 'colorbody' && details.category === 'COLOR BODY TILES') return true
      if (activeCategory === 'digital' && details.category === 'DIGITAL FULL BODY TILES') return true

      return false
    })
  }, [activeCategory])

  // Sort list based on top right dropdown select
  const sortedCatalogues = useMemo(() => {
    const list = [...filteredCatalogues]
    list.sort((a, b) => {
      const detailsA = catalogueDetails[a.id]
      const detailsB = catalogueDetails[b.id]

      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name)
      }
      if (sortBy === 'name-desc') {
        return b.name.localeCompare(a.name)
      }
      if (sortBy === 'size-asc') {
        const sizeA = parseFloat(detailsA?.fileSize || '0')
        const sizeB = parseFloat(detailsB?.fileSize || '0')
        return sizeA - sizeB
      }
      if (sortBy === 'size-desc') {
        const sizeA = parseFloat(detailsA?.fileSize || '0')
        const sizeB = parseFloat(detailsB?.fileSize || '0')
        return sizeB - sizeA
      }
      return 0
    })
    return list
  }, [filteredCatalogues, sortBy])

  return (
    <>
      <PageHero
        eyebrow="Technical Resources"
        title="Insights, Discoveries, and Evolution in Surfaces"
        subtitle="Access and download full product specification catalogues, safety parameters, and installation blueprints."
      />

      <section className="catalogue-layout">
        <div className="container">
          <div className="catalogue-layout__grid">
            
            {/* Left Sidebar Filter Section (Pill Buttons) */}
            <aside className="catalogue-layout__sidebar">
              <div className="sidebar-title">FILTERS</div>
              <div className="filter-pill-stack">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`filter-pill ${activeCategory === cat.id ? 'is-active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </aside>

            {/* Right Column Listings Container */}
            <main className="catalogue-layout__main">
              {/* Sort selector bar */}
              <div className="catalogue-layout__sort-bar">
                <span className="count-label">
                  Showing <strong>{sortedCatalogues.length}</strong> catalogs
                </span>
                
                <div className="sort-dropdown-container">
                  <label htmlFor="sort-catalogue">Sort by:</label>
                  <select
                    id="sort-catalogue"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                  >
                    <option value="name-asc">Name (A - Z)</option>
                    <option value="name-desc">Name (Z - A)</option>
                    <option value="size-asc">File Size (Small to Large)</option>
                    <option value="size-desc">File Size (Large to Small)</option>
                  </select>
                </div>
              </div>

              {/* Listings grid list */}
              <div className="catalogue-layout__list">
                {sortedCatalogues.length > 0 ? (
                  sortedCatalogues.map((collection) => (
                    <CatalogueRow key={collection.id} collection={collection} />
                  ))
                ) : (
                  <div className="catalogue-empty glass-dark">
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                      <line x1="9" y1="22" x2="9" y2="16" />
                      <line x1="15" y1="22" x2="15" y2="16" />
                    </svg>
                    <h3>No technical catalogs found</h3>
                    <p>Select another category filter option on the left to browse available spec sheets.</p>
                    <button type="button" className="btn btn--secondary" onClick={() => setActiveCategory('all')}>
                      Reset Filters
                    </button>
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  )
}
