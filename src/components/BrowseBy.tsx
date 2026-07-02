import { useState } from 'react'
import { browseGroups } from '../data/tiles'

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
          {current.items.map((item) => (
            <span key={item} className="browse__chip">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
