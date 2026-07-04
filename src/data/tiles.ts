import type { PhotoKey } from './images'

export type Category = {
  id: string
  name: string
  description: string
  image: PhotoKey
}

export type Collection = {
  id: string
  name: string
  tagline: string
  image: PhotoKey
}

export type TechnicalSpecs = {
  thickness: string
  waterAbsorption: string
  flexuralStrength: string
  scratchHardness: string
  peiRating?: string
  slipResistance: string
  edgeType: string
  piecesPerBox: number
  coveragePerBox: string
}

export type Product = {
  id: string
  name: string
  category: string
  type: string
  look: string
  finish: string
  size: string
  use: string
  image: PhotoKey
  mockupImage?: PhotoKey
  specs: TechnicalSpecs
  suitability: string[]
  pdfUrl?: string
}

export type BrowseGroup = {
  id: string
  label: string
  items: string[]
}

// Room / application categories inspired by leading ceramic tile brands.
export const categories: Category[] = [
  {
    id: 'bathroom',
    name: 'Bathroom Tiles',
    description: 'Anti-slip, low-porosity ceramic and vitrified tiles for calm spa-inspired bathrooms.',
    image: 'bathroom',
  },
  {
    id: 'kitchen',
    name: 'Kitchen Tiles',
    description: 'Stain-resistant wall and floor surfaces made for cooking, cleaning, and daily use.',
    image: 'kitchen',
  },
  {
    id: 'living',
    name: 'Living Room Tiles',
    description: 'Large-format marble, stone, and concrete looks for elegant living areas.',
    image: 'living',
  },
  {
    id: 'bedroom',
    name: 'Bedroom Tiles',
    description: 'Warm matte, wood, and soft-stone finishes for quiet, comfortable rooms.',
    image: 'bedroom',
  },
  {
    id: 'outdoor',
    name: 'Outdoor Tiles',
    description: 'Structured 20mm pavers and grip tiles built for patios, poolsides, and driveways.',
    image: 'patio',
  },
  {
    id: 'commercial',
    name: 'Commercial Tiles',
    description: 'Heavy-duty vitrified tiles engineered for offices, hotels, showrooms, and retail.',
    image: 'office',
  },
  {
    id: 'staircase',
    name: 'Staircase Tiles',
    description: 'Step and riser solutions with grip finishes, nosing details, and coordinated designs.',
    image: 'stairs',
  },
  {
    id: 'countertops',
    name: 'Countertop Slabs',
    description: 'Large porcelain slabs for counters, islands, vanities, tabletops, and feature walls.',
    image: 'whitemarble',
  },
  {
    id: 'elevation',
    name: 'Elevation Tiles',
    description: 'Weather-ready textured surfaces for facades, balconies, compound walls, and exteriors.',
    image: 'facade',
  },
]

// Named tile collections (product ranges).
export const collections: Collection[] = [
  { id: 'calacatta', name: 'Calacatta Royale', tagline: 'Luxury marble-inspired porcelain slabs', image: 'calacattaAmbient' },
  { id: 'terrazzo', name: 'Terrazzo Muse', tagline: 'Playful chips with a refined architectural feel', image: 'terrazzoAmbient' },
  { id: 'cemento', name: 'Cemento Loft', tagline: 'Soft concrete tones for modern minimal spaces', image: 'concreteAmbient' },
  { id: 'woodline', name: 'Woodline Reserve', tagline: 'Wood-look vitrified tiles with natural grain', image: 'woodAmbient' },
  { id: 'rockdeck', name: 'Rockdeck 20mm', tagline: 'Structured outdoor pavers for every season', image: 'slateAmbient' },
  { id: 'travertine', name: 'Travertine Classico', tagline: 'Fine vein-cut stone surfaces', image: 'travertineAmbient' },
  { id: 'carrara', name: 'Carrara Venato', tagline: 'Classic Italian marble recreation', image: 'carraraAmbient' },
  { id: 'emperador', name: 'Emperador Bronze', tagline: 'Deep bronze veins for maximum contrast', image: 'emperadorAmbient' },
]

export const products: Product[] = [
  {
    id: 'calacatta-gold',
    name: 'Calacatta Gold Slabs',
    category: 'living',
    type: 'Porcelain Slab',
    look: 'Marble',
    finish: 'Polished',
    size: '1200x2400 mm',
    use: 'Premium living rooms, main lobby flooring, feature cladding',
    image: 'calacattaCloseup',
    mockupImage: 'calacattaAmbient',
    specs: {
      thickness: '15 mm',
      waterAbsorption: '< 0.05%',
      flexuralStrength: 'Min. 45 N/mm²',
      scratchHardness: '6 Mohs',
      peiRating: 'Class IV',
      slipResistance: 'R9',
      edgeType: 'Rectified Precision',
      piecesPerBox: 1,
      coveragePerBox: '2.88 sq. m. (31.0 sq. ft.)',
    },
    suitability: ['Floor', 'Wall', 'Indoor', 'Commercial'],
    pdfUrl: '/catalogues/calacatta_series.pdf',
  },
  {
    id: 'bianco-statue',
    name: 'Bianco Statua Classic',
    category: 'living',
    type: 'Color Body Porcelain',
    look: 'Marble',
    finish: 'Glossy',
    size: '800x1600 mm',
    use: 'High-end bedrooms, dining halls, premium apartments',
    image: 'carraraCloseup',
    mockupImage: 'carraraAmbient',
    specs: {
      thickness: '9.5 mm',
      waterAbsorption: '< 0.08%',
      flexuralStrength: 'Min. 38 N/mm²',
      scratchHardness: '5 Mohs',
      peiRating: 'Class IV',
      slipResistance: 'R9',
      edgeType: 'Rectified',
      piecesPerBox: 2,
      coveragePerBox: '2.56 sq. m. (27.5 sq. ft.)',
    },
    suitability: ['Floor', 'Wall', 'Indoor'],
    pdfUrl: '/catalogues/marmi_series.pdf',
  },
  {
    id: 'cemento-ash',
    name: 'Cemento Ash Planks',
    category: 'bathroom',
    type: 'Color Body Porcelain',
    look: 'Concrete',
    finish: 'Ultra Matt',
    size: '600x1200 mm',
    use: 'Restroom walls, kitchen backsplashes, minimal retail cafes',
    image: 'concreteCloseup',
    mockupImage: 'concreteAmbient',
    specs: {
      thickness: '9.0 mm',
      waterAbsorption: '< 0.1%',
      flexuralStrength: 'Min. 35 N/mm²',
      scratchHardness: '7 Mohs',
      slipResistance: 'R10',
      edgeType: 'Rectified',
      piecesPerBox: 2,
      coveragePerBox: '1.44 sq. m. (15.5 sq. ft.)',
    },
    suitability: ['Floor', 'Wall', 'Indoor', 'Outdoor'],
    pdfUrl: '/catalogues/cemento_loft.pdf',
  },
  {
    id: 'oakline-natural',
    name: 'Oakline Natural Planks',
    category: 'bedroom',
    type: 'Full Body Vitrified',
    look: 'Wood',
    finish: 'Rustic Matt',
    size: '200x1200 mm',
    use: 'Cozy bedrooms, covered balconies, home offices, warm library zones',
    image: 'woodCloseup',
    mockupImage: 'woodAmbient',
    specs: {
      thickness: '9.5 mm',
      waterAbsorption: '< 0.1%',
      flexuralStrength: 'Min. 40 N/mm²',
      scratchHardness: '6 Mohs',
      slipResistance: 'R10',
      edgeType: 'Rectified / Interlocking',
      piecesPerBox: 6,
      coveragePerBox: '1.44 sq. m. (15.5 sq. ft.)',
    },
    suitability: ['Floor', 'Wall', 'Indoor', 'Outdoor'],
    pdfUrl: '/catalogues/woodline_planks.pdf',
  },
  {
    id: 'terrazzo-ivory',
    name: 'Terrazzo Ivory Decor',
    category: 'kitchen',
    type: 'Ceramic Wall Tile',
    look: 'Terrazzo',
    finish: 'Satin',
    size: '600x600 mm',
    use: 'Kitchen splashbacks, custom feature walls, powder rooms',
    image: 'terrazzoCloseup',
    mockupImage: 'terrazzoAmbient',
    specs: {
      thickness: '9.0 mm',
      waterAbsorption: '< 0.1%',
      flexuralStrength: 'Min. 35 N/mm²',
      scratchHardness: '6 Mohs',
      peiRating: 'Class III',
      slipResistance: 'R9',
      edgeType: 'Rectified',
      piecesPerBox: 4,
      coveragePerBox: '1.44 sq. m. (15.5 sq. ft.)',
    },
    suitability: ['Wall', 'Indoor'],
    pdfUrl: '/catalogues/terrazzo_muse.pdf',
  },
  {
    id: 'rockdeck-sand',
    name: 'Rockdeck Sand Paver',
    category: 'outdoor',
    type: 'Full Body Vitrified',
    look: 'Slate',
    finish: 'Structured Grip',
    size: '600x600 mm',
    use: 'Uncovered patios, swimming pool edges, garden pathways, driveways',
    image: 'slateCloseup',
    mockupImage: 'slateAmbient',
    specs: {
      thickness: '20.0 mm',
      waterAbsorption: '< 0.05%',
      flexuralStrength: 'Min. 50 N/mm²',
      scratchHardness: '8 Mohs',
      slipResistance: 'R11 / Anti-slip',
      edgeType: 'Structured / Calibrated',
      piecesPerBox: 2,
      coveragePerBox: '0.72 sq. m. (7.75 sq. ft.)',
    },
    suitability: ['Floor', 'Outdoor', 'Heavy Traffic'],
    pdfUrl: '/catalogues/rockdeck_pavers.pdf',
  },
  {
    id: 'travertine-beige',
    name: 'Travertine Classico Beige',
    category: 'commercial',
    type: 'Porcelain Slab',
    look: 'Stone',
    finish: 'Carving',
    size: '1200x1200 mm',
    use: 'Hotel receptions, corporate office facades, high-end patios',
    image: 'travertineCloseup',
    mockupImage: 'travertineAmbient',
    specs: {
      thickness: '10.5 mm',
      waterAbsorption: '< 0.05%',
      flexuralStrength: 'Min. 42 N/mm²',
      scratchHardness: '6 Mohs',
      peiRating: 'Class IV',
      slipResistance: 'R10',
      edgeType: 'Rectified',
      piecesPerBox: 2,
      coveragePerBox: '2.88 sq. m. (31.0 sq. ft.)',
    },
    suitability: ['Floor', 'Wall', 'Indoor', 'Outdoor', 'Commercial'],
    pdfUrl: '/catalogues/travertine_series.pdf',
  },
  {
    id: 'emperador-dark',
    name: 'Emperador Bronze Dark',
    category: 'commercial',
    type: 'Color Body Porcelain',
    look: 'Marble',
    finish: 'High Gloss',
    size: '800x1600 mm',
    use: 'Luxury bathroom walls, salon lobby counters, feature panels',
    image: 'emperadorCloseup',
    mockupImage: 'emperadorAmbient',
    specs: {
      thickness: '9.5 mm',
      waterAbsorption: '< 0.08%',
      flexuralStrength: 'Min. 38 N/mm²',
      scratchHardness: '5 Mohs',
      peiRating: 'Class III',
      slipResistance: 'R9',
      edgeType: 'Rectified',
      piecesPerBox: 2,
      coveragePerBox: '2.56 sq. m. (27.5 sq. ft.)',
    },
    suitability: ['Floor', 'Wall', 'Indoor', 'Commercial'],
    pdfUrl: '/catalogues/emperador_bronze.pdf',
  },
]

// Browse tiles by finish / size / color
export const browseGroups: BrowseGroup[] = [
  {
    id: 'finishes',
    label: 'Finishes',
    items: [
      'Polished',
      'Glossy',
      'High Gloss',
      'Matt',
      'Ultra Matt',
      'Rustic Matt',
      'Satin',
      'Carving',
      'Structured Grip',
    ],
  },
  {
    id: 'sizes',
    label: 'Sizes',
    items: [
      '200x1200 mm',
      '600x600 mm',
      '600x1200 mm',
      '1200x1200 mm',
      '800x1600 mm',
      '1200x2400 mm',
    ],
  },
  {
    id: 'colors',
    label: 'Colors',
    items: ['White', 'Ivory', 'Beige', 'Grey', 'Ash', 'Natural', 'Sand', 'Dark'],
  },
]

export type Stat = {
  value: string
  label: string
  detail: string
}

export const companyStats: Stat[] = [
  { value: '36 MSM', label: 'Production Capacity', detail: 'Annual tile production capacity across vitrified and ceramic ranges.' },
  { value: '2,800+', label: 'Tile Designs', detail: 'Curated options across wall, floor, slab, decor, and outdoor tiles.' },
  { value: '05', label: 'Plants', detail: 'Modern manufacturing facilities with automated sorting and quality control.' },
  { value: '320+', label: 'Dealer Network', detail: 'Partner stores, studios, and project counters across key markets.' },
]
