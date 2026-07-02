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

export type Product = {
  id: string
  name: string
  category: string
  finish: string
  size: string
  use: string
  image: PhotoKey
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
  { id: 'calacatta', name: 'Calacatta Royale', tagline: 'Luxury marble-inspired porcelain slabs', image: 'marble' },
  { id: 'terrazo', name: 'Terrazzo Muse', tagline: 'Playful chips with a refined architectural feel', image: 'terrazzo' },
  { id: 'cemento', name: 'Cemento Loft', tagline: 'Soft concrete tones for modern minimal spaces', image: 'concrete' },
  { id: 'woodline', name: 'Woodline Reserve', tagline: 'Wood-look vitrified tiles with natural grain', image: 'wood' },
  { id: 'pristine', name: 'Pristine Gloss', tagline: 'High-gloss vitrified surfaces for bright interiors', image: 'tilefloor' },
  { id: 'rockdeck', name: 'Rockdeck 20mm', tagline: 'Structured outdoor pavers for every season', image: 'patio' },
  { id: 'artisan', name: 'Artisan Decor', tagline: 'Feature walls, backsplashes, and decorative accents', image: 'luxe' },
  { id: 'grande', name: 'Grande Max', tagline: 'Large-format slabs for seamless luxury spaces', image: 'whitemarble' },
]

export const products: Product[] = [
  {
    id: 'calacatta-gold',
    name: 'Calacatta Gold',
    category: 'Porcelain Slab',
    finish: 'Polished',
    size: '1200x2400 mm',
    use: 'Living rooms, lobbies, feature walls',
    image: 'marble',
  },
  {
    id: 'bianco-statue',
    name: 'Bianco Statua',
    category: 'Vitrified Floor Tile',
    finish: 'Glossy',
    size: '800x1600 mm',
    use: 'Bedrooms, halls, premium apartments',
    image: 'whitemarble',
  },
  {
    id: 'cemento-ash',
    name: 'Cemento Ash',
    category: 'Concrete Look Tile',
    finish: 'Ultra Matt',
    size: '600x1200 mm',
    use: 'Bathrooms, cafes, modern interiors',
    image: 'concrete',
  },
  {
    id: 'oakline-natural',
    name: 'Oakline Natural',
    category: 'Wood Look Tile',
    finish: 'Rustic Matt',
    size: '200x1200 mm',
    use: 'Bedrooms, balconies, warm interiors',
    image: 'wood',
  },
  {
    id: 'terrazzo-ivory',
    name: 'Terrazzo Ivory',
    category: 'Decor Tile',
    finish: 'Satin',
    size: '600x600 mm',
    use: 'Kitchens, powder rooms, retail walls',
    image: 'terrazzo',
  },
  {
    id: 'rockdeck-sand',
    name: 'Rockdeck Sand',
    category: 'Outdoor Paver',
    finish: 'Structured Grip',
    size: '600x600 mm / 20 mm',
    use: 'Patios, poolsides, terraces, driveways',
    image: 'patio',
  },
  {
    id: 'metro-cream',
    name: 'Metro Cream',
    category: 'Wall Tile',
    finish: 'Glossy',
    size: '300x600 mm',
    use: 'Kitchen backsplashes and bathroom walls',
    image: 'kitchen',
  },
  {
    id: 'facade-rust',
    name: 'Facade Rust',
    category: 'Elevation Tile',
    finish: 'Textured',
    size: '300x450 mm',
    use: 'Exterior walls, balconies, compound walls',
    image: 'facade',
  },
]

// Browse tiles by finish / size / color
export const browseGroups: BrowseGroup[] = [
  {
    id: 'finishes',
    label: 'Finishes',
    items: [
      'Matt',
      'Glossy',
      'High Gloss',
      'Polished',
      'Carving',
      'Sugar',
      'Rustic',
      'Structured Grip',
      'Satin',
      'Ultra Matt',
    ],
  },
  {
    id: 'sizes',
    label: 'Sizes',
    items: [
      '300×450 mm',
      '300×600 mm',
      '600×600 mm',
      '600×1200 mm',
      '800×1600 mm',
      '1200×1200 mm',
      '1200×1800 mm',
      '1200×2400 mm',
      '1600×3200 mm',
    ],
  },
  {
    id: 'colors',
    label: 'Colors',
    items: ['Ivory', 'Beige', 'Taupe', 'Grey', 'Charcoal', 'Black', 'Terracotta', 'Brown', 'Gold', 'Sage', 'Blue', 'White'],
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
