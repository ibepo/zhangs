export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'wukong',
  description: 'just a desc',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'daisy',
      href: '/daisy',
    },
    {
      title: 'case',
      href: '/case',
    },
  ],
  links: {
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn/ui',
    docs: 'https://ui.shadcn.com',
  },
}
