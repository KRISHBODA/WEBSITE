import { useEffect, useState, useRef } from 'react'
import { photo, type PhotoKey } from '../data/images'

type Slide = {
  id: string
  eyebrow: string
  title: string
  subtitle: string
  image: PhotoKey
}

const slides: Slide[] = [
  {
    id: 'marmo',
    eyebrow: 'Signature Slab Series',
    title: 'Shaping dreams into living spaces',
    subtitle:
      'Large-format marble-effect porcelain slabs that bring timeless Italian elegance to premium residential and commercial spaces.',
    image: 'calacattaAmbient',
  },
  {
    id: 'terrazzo',
    eyebrow: 'Architectural Quartz',
    title: 'Where craft meets character',
    subtitle:
      'Eco-refined terrazzo and aggregate surfaces with rich physical texture, crafted for bold floors and custom statement walls.',
    image: 'terrazzoAmbient',
  },
  {
    id: 'stonewood',
    eyebrow: 'Earthy Collection',
    title: 'Surfaces that outlast seasons',
    subtitle:
      'Vitrified oak planks and structured volcanic stone textures engineered to bring natural warmth to indoor and outdoor living.',
    image: 'woodAmbient',
  },
]

const SLIDE_MS = 6000

export default function Hero() {
  const [index, setIndex] = useState(0)
  const timerRef = useRef<number | null>(null)

  const resetTimer = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current)
    }
    timerRef.current = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, SLIDE_MS)
  }

  useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [index])

  const handlePrev = () => {
    setIndex((current) => (current - 1 + slides.length) % slides.length)
  }

  const handleNext = () => {
    setIndex((current) => (current + 1) % slides.length)
  }



  const active = slides[index]

  const renderAnimatedTitle = (text: string) => {
    return text.split(' ').map((word, i) => (
      <span key={`${word}-${i}`} className="hero__word-wrap">
        <span
          className="hero__word animate-word"
          style={{ animationDelay: `${i * 90}ms` }}
        >
          {word}
        </span>
        {i < text.split(' ').length - 1 && ' '}
      </span>
    ))
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
        
        {/* We key the title so that the word animations re-trigger on slide change */}
        <h1 className="hero__title" key={`title-${index}`}>
          {renderAnimatedTitle(active.title)}
        </h1>
        
        <p className="hero__subtitle" key={`subtitle-${index}`}>
          {active.subtitle}
        </p>
      </div>

      <button
        type="button"
        className="hero__nav hero__nav--prev"
        onClick={handlePrev}
        aria-label="Previous slide"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        type="button"
        className="hero__nav hero__nav--next"
        onClick={handleNext}
        aria-label="Next slide"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </section>
  )
}
