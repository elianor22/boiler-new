export type NavItem = {
  title: string;
  href?: string;
  children?: NavItem[];
};

export const NAV_ITEMS: NavItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Product',
    children: [
      {
        title: 'Product 1',
        href: '/products',
      },
      {
        title: 'Partners',
        href: '/partners',
      },
    ],
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'About',
    href: '/about',
  },
  { title: 'Not Found', href: '/not-found' },
];
