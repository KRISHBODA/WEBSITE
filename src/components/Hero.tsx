import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { photo, type PhotoKey } from '../data/images'
import { paths } from '../routes/paths'

type Slide = {
  id: string
  eyebrow: string
  title: string
  subtitle: string
  image: PhotoKey
  to: string
}

const slides: Slide[] = [
  {
    id: 'marmo',
    eyebrow: 'Marmo Collection',
    title: 'Shaping dreams into living spaces',
    subtitle:
      'Large-format marble-effect porcelain that brings timeless elegance to every room.',
    image: 'living',
    to: paths.collections,
  },
  {
    id: 'terrazzo',
    eyebrow: 'Terrazzo Revival',
    title: 'Where craft meets character',
    subtitle:
      'Recycled aggregate surfaces with rich texture, designed for statement floors and walls.',
    image: 'interior',
    to: paths.collections,
  },
  {
    id: 'stonewood',
    eyebrow: 'Stonewood Range',
    title: 'Beauty that lasts beyond seasons',
    subtitle:
      'Warm wood-effect and natural stone tiles engineered for indoor and outdoor living.',
    image: 'bedroom',
    to: paths.products,
  },
]

const SLIDE_MS = 5500

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, SLIDE_MS)
    return () => window.clearInterval(timer)
  }, [])

  const active = slides[index]

  return (
    <section className="hero">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`hero__slide ${i === index ? 'is-active' : ''}`}
          style={{ backgroundImage: `url(${photo(slide.image, 1800)})` }}
          aria-hidden="true"
        />
      ))}
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__inner">
        <span className="hero__eyebrow">{active.eyebrow}</span>
        <h1 className="hero__title">{active.title}</h1>
        <p className="hero__subtitle">{active.subtitle}</p>
        <div className="hero__actions">
          <Link to={active.to} className="btn btn--primary btn--lg">
            Explore Range
          </Link>
          <Link to={paths.contact} className="btn btn--ghost btn--lg">
            Book a Consultation
          </Link>
        </div>

        <div className="hero__dots" role="tablist" aria-label="Hero slides">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={slide.eyebrow}
              className={`hero__dot ${i === index ? 'is-active' : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
