export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Zhangs',
  description: 'just a desc',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'tsi',
      href: '/tsi',
    },
  ],
  links: {
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn/ui',
    docs: 'https://ui.shadcn.com',
  },
}
