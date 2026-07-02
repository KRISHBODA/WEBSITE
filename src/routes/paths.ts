export const paths = {
  home: '/',
  products: '/products',
  collections: '/collections',
  about: '/about',
  contact: '/contact',
} as const

export type AppPath = (typeof paths)[keyof typeof paths]
