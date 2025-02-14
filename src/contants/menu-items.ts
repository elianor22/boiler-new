export type NavItem = {
  title: string;
  href?: string;
  children?: NavItem[];
};

export const NAV_ITEMS: NavItem[] = [
  {
    title: 'Profile',
    children: [
      { title: 'Tentang Kami', href: '/pofile/about' },
      { title: 'Visi Dan Misi', href: '/pofile/vision' },
    ],
  },
  {
    title: 'Layanan',
    children: [{ title: 'Layanan User', href: '/services/user-services' }],
  },
  {
    title: 'Karir',
    href: '/career',
  },
  {
    title: 'Tentang',
    href: '/about',
  },
];
