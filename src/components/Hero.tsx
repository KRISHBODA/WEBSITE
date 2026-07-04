import { useEffect, useState } from 'react'
import { photo, type PhotoKey } from '../data/images'

type Slide = {
  id: string
  title: string
  subtitle: string
  image: PhotoKey
}

const slides: Slide[] = [
  {
    id: 'marmo',
    title: 'Shaping dreams into living spaces',
    subtitle:
      'Large-format marble-effect porcelain that brings timeless elegance to every room.',
    image: 'living',
  },
  {
    id: 'terrazzo',
    title: 'Where craft meets character',
    subtitle:
      'Recycled aggregate surfaces with rich texture, designed for statement floors and walls.',
    image: 'interior',
  },
  {
    id: 'stonewood',
    title: 'Beauty that lasts beyond seasons',
    subtitle:
      'Warm wood-effect and natural stone tiles engineered for indoor and outdoor living.',
    image: 'bedroom',
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
  }, [index])

  const active = slides[index]

  const handlePrev = () => {
    setIndex((current) => (current - 1 + slides.length) % slides.length)
  }

  const handleNext = () => {
    setIndex((current) => (current + 1) % slides.length)
  }

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
        <h1 className="hero__title">{active.title}</h1>
        <p className="hero__subtitle">{active.subtitle}</p>
      </div>

      <button
        className="hero__nav hero__nav--prev"
        onClick={handlePrev}
        aria-label="Previous slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        className="hero__nav hero__nav--next"
        onClick={handleNext}
        aria-label="Next slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </section>
  )
}
