// Curated Unsplash photo IDs for interiors, tiles, and materials.
// Swap these for your own product photography when ready.
export const photoIds = {
  living: '1600607687939-ce8a6c25118c',
  bathroom: '1620626011761-996317b8d101',
  kitchen: '1584622650111-993a426fbf0a',
  bedroom: '1616594039964-ae9021a400a0',
  patio: '1600585152220-90363fe7e115',
  office: '1497366216548-37526070297c',
  stairs: '1600566752355-35792bedcfea',
  concrete: '1517581177682-a085bb7ffb15',
  wood: '1550985616-10810253b84d',
  terrazzo: '1615873968403-89e068629265',
  interior: '1600210492493-0946911123ea',
  marble: '1618221195710-dd6b41faaea6',
  whitemarble: '1615800098779-1be32e60cca3',
  tilefloor: '1615529328331-f8917597711f',
  facade: '1487958449943-2429e8be8625',
  luxe: '1618219908412-a29a1bb7b86e',
} as const

export type PhotoKey = keyof typeof photoIds

// Build a responsive Unsplash URL for a given photo key.
export function photo(key: PhotoKey, width = 800): string {
  return `https://images.unsplash.com/photo-${photoIds[key]}?auto=format&fit=crop&q=72&w=${width}`
}
