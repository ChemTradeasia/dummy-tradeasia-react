/**
 * Navigation configuration.
 * Edit file ini untuk mengubah menu navigasi — tidak perlu sentuh Header.jsx.
 */
export const NAV_LINKS = [
  {
    label: 'Company',
    type: 'dropdown',
    children: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Our Location', href: '/our-location' },
    ],
  },
  { label: 'Products', href: '/products', type: 'link' },
  { label: 'Market Insights', href: '/market-insights', type: 'link' },
  {
    label: 'Career',
    href: 'https://career.chemtradeasia.com/',
    type: 'link',
    external: true,
  },
];
