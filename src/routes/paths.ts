export const paths = {
  home: '/',
  collections: '/collections',
  catalogue: '/catalogue',
  about: '/about',
  contact: '/contact',
} as const

export type AppPath = (typeof paths)[keyof typeof paths]
