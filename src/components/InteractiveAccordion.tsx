import { useState } from 'react'
import { Link } from 'react-router-dom'
import { photo } from '../data/images'
import { collections } from '../data/tiles'
import { paths } from '../routes/paths'

export default function InteractiveAccordion() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Use the first 5 collections for the accordion
  const accordionItems = collections.slice(0, 5)

  return (
    <section className="section interactive-accordion">
      <div className="container">
        <div className="section__intro">
          <span className="eyebrow">Signature Design Slabs</span>
          <h2 className="section__title">Curated Premium Collections</h2>
          <p className="section__subtitle">
            Hover or tap to reveal premium architectural tiles designed to inspire luxury-level living and commercial spaces.
          </p>
        </div>

        <div className="interactive-accordion__wrapper">
          {/* Left Side: Interactive Accordion List */}
          <div className="interactive-accordion__list" role="tablist" aria-orientation="vertical">
            {accordionItems.map((item, idx) => {
              const isActive = idx === activeIndex
              return (
                <div
                  key={item.id}
                  className={`interactive-accordion__item ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveIndex(idx)
                    }
                  }}
                >
                  <div className="interactive-accordion__header">
                    <span className="interactive-accordion__number">0{idx + 1}</span>
                    <h3 className="interactive-accordion__name">{item.name}</h3>
                  </div>

                  <div className="interactive-accordion__content">
                    <div className="interactive-accordion__content-inner">
                      <p className="interactive-accordion__tagline">{item.tagline}</p>
                      <p className="interactive-accordion__description">
                        Engineered with advanced vitrification, high scratch resistance, and zero-maintenance finishes, this collection provides perfect continuity of surface and texture.
                      </p>
                      <Link
                        to={`${paths.collections}?collection=${item.id}`}
                        className="interactive-accordion__link"
                      >
                        Explore Collection <span className="arrow">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Side: Media Box */}
          <div className="interactive-accordion__media">
            {accordionItems.map((item, idx) => {
              const isActive = idx === activeIndex
              return (
                <div
                  key={item.id}
                  className={`interactive-accordion__image-wrapper ${isActive ? 'is-active' : ''}`}
                >
                  <img
                    src={photo(item.image, 1000)}
                    alt={item.name}
                    className="interactive-accordion__img"
                    loading="lazy"
                  />
                  <div className="interactive-accordion__overlay" />
                  <div className="interactive-accordion__badge">
                    <span className="eyebrow eyebrow--light">{item.name}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
