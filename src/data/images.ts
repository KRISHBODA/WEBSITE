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
  
  // Luxury Close-ups / Textures
  calacattaCloseup: '1618221224222-71a2c99b98a8',
  concreteCloseup: '1600585154340-be6161a56a0c',
  woodCloseup: '1615800098779-1be32e60cca3',
  terrazzoCloseup: '1618220179428-22790b461013',
  slateCloseup: '1504198453319-5ce911baf5ef',
  travertineCloseup: '1600607687920-4e2a09cf159e',
  carraraCloseup: '1618221381711-42ca8ab6e908',
  emperadorCloseup: '1600585154340-be6161a56a0b',
  
  // Room Ambient Mockups
  calacattaAmbient: '1600210492493-0946911123ea',
  concreteAmbient: '1584622650111-993a426fbf0a',
  woodAmbient: '1616594039964-ae9021a400a0',
  terrazzoAmbient: '1615873968403-89e068629265',
  slateAmbient: '1600585152220-90363fe7e115',
  travertineAmbient: '1600607687939-ce8a6c25118c',
  carraraAmbient: '1620626011761-996317b8d101',
  emperadorAmbient: '1618219908412-a29a1bb7b86e',
} as const

export type PhotoKey = keyof typeof photoIds

// Build a responsive Unsplash URL for a given photo key.
export function photo(key: PhotoKey, width = 800): string {
  return `https://images.unsplash.com/photo-${photoIds[key]}?auto=format&fit=crop&q=72&w=${width}`
}
