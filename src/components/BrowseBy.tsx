import { useState } from 'react'
import { Link } from 'react-router-dom'
import { browseGroups } from '../data/tiles'
import { paths } from '../routes/paths'

export default function BrowseBy() {
  const [active, setActive] = useState(browseGroups[0].id)
  const current = browseGroups.find((g) => g.id === active) ?? browseGroups[0]

  return (
    <section className="section browse">
      <div className="container">
        <div className="section__intro">
          <span className="eyebrow">Browse Tiles By</span>
          <h2 className="section__title">Filter by style, size &amp; finish</h2>
          <p className="section__subtitle">
            Discover our diverse range of tiles, categorised to suit every design vision.
          </p>
        </div>

        <div className="browse__tabs" role="tablist">
          {browseGroups.map((group) => (
            <button
              key={group.id}
              type="button"
              role="tab"
              aria-selected={group.id === active}
              className={`browse__tab ${group.id === active ? 'is-active' : ''}`}
              onClick={() => setActive(group.id)}
            >
              {group.label}
            </button>
          ))}
        </div>

        <div className="browse__items">
          {current.items.map((item) => {
            let queryParam = ''
            if (current.id === 'finishes') queryParam = `finish=${encodeURIComponent(item)}`
            if (current.id === 'sizes') queryParam = `size=${encodeURIComponent(item)}`
            if (current.id === 'colors') queryParam = `color=${encodeURIComponent(item)}`

            return (
              <Link
                key={item}
                to={`${paths.collections}?${queryParam}`}
                className="browse__chip"
              >
                {item}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
