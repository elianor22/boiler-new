type NavItem = {
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
      { title: 'Manajemen', href: '/pofile/management' },
      { title: 'Reansuransi', href: '/pofile/reinsurance' },
      { title: 'Penghargaan', href: '/pofile/awards' },
    ],
  },
  {
    title: 'Layanan',
    children: [
      { title: 'Prosedur Klaim', href: '/services/claim-procedure' },
      { title: 'Layanan Polis', href: '/services/policy-services' },
      { title: 'Layanan Premi', href: '/services/premium-services' },
      { title: 'Layanan Pengaduan', href: '/services/complaint-services' },
      { title: 'Kantor Pemasaran', href: '/services/marketing-services' },
      {
        title: 'Rumah Sakit Rekanan',
        href: '/services/recreational-hospitality',
      },
    ],
  },
  {
    title: 'Kanal Distribusi',
    children: [
      {
        title: 'Agency',
        href: '/distribution/agency',
      },
      {
        title: 'Employee Benefit',
        href: '/distribution/employee-benefit',
      },
      {
        title: 'Bancasurance',
        href: '/distribution/bancasurance',
      },
      {
        title: 'Retail Insurance',
        href: '/distribution/retail-insurance',
      },
    ],
  },
  {
    title: 'Unduh',
    children: [
      {
        title: 'Formulir',
        href: '/download/form',
      },
      {
        title: 'Laporan Keuangan',
        href: '/download/financial-report',
      },
      {
        title: 'Laporan Keberlanjutan',
        href: '/download/progress-report',
      },
    ],
  },
  {
    title: 'NAV',
    href: '/nav',
  },
  {
    title: 'Berita',
    href: '/news',
  },
  {
    title: 'Karir',
    href: '/career',
  },
  {
    title: 'Whistleblowing',
    href: '/whistleblowing',
  },
  {
    title: 'DPLK',
    href: '/dplk',
  },
];
