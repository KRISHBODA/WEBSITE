import { photo, type PhotoKey } from '../data/images'

type Feature = {
  title: string
  text: string
}

type Block = {
  id: string
  eyebrow: string
  title: string
  intro: string
  image: PhotoKey
  features: Feature[]
  reversed?: boolean
}

const blocks: Block[] = [
  {
    id: 'porcelain',
    eyebrow: 'Signature Range',
    title: 'The Porcelain Collection',
    intro:
      'Dense, low-porosity porcelain that mirrors natural marble and stone, with the durability modern spaces demand.',
    image: 'whitemarble',
    features: [
      { title: 'Through-body strength', text: 'Colour and pattern run full depth, so wear never shows.' },
      { title: 'Rectified edges', text: 'Precision-cut for slim, seamless grout lines.' },
      { title: 'Five finishes', text: 'Matte, polished, textured, satin, and structured.' },
      { title: 'Book-matched slabs', text: 'Continuous veining across large-format panels.' },
    ],
  },
  {
    id: 'stone',
    eyebrow: 'Natural Selection',
    title: 'Natural Stone & Terrazzo',
    intro:
      'Ethically sourced marble, travertine, and terrazzo — each piece unique, each surface timeless.',
    image: 'terrazzo',
    features: [
      { title: 'Hand-selected blocks', text: 'Sorted for consistent tone and character.' },
      { title: 'Sealed & ready', text: 'Pre-treated for stain resistance and longevity.' },
      { title: 'Custom cut', text: 'Made-to-measure formats for bespoke projects.' },
      { title: 'Terrazzo revival', text: 'Recycled aggregate blends in modern palettes.' },
    ],
    reversed: true,
  },
]

export default function Showcase() {
  return (
    <section className="section showcase">
      <div className="container">
        {blocks.map((block) => (
          <div
            key={block.id}
            className={`showcase__block ${block.reversed ? 'showcase__block--reversed' : ''}`}
          >
            <div className="showcase__media">
              <img src={photo(block.image, 900)} alt={block.title} loading="lazy" />
            </div>
            <div className="showcase__content">
              <span className="eyebrow">{block.eyebrow}</span>
              <h3 className="showcase__title">{block.title}</h3>
              <p className="showcase__intro">{block.intro}</p>
              <div className="showcase__features">
                {block.features.map((feature) => (
                  <div key={feature.title} className="mini-card">
                    <h4>{feature.title}</h4>
                    <p>{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
