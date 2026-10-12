import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const titles = {
  '/': 'ShopSphere | Modern Storefront',
  '/shop': 'Catalog | ShopSphere',
  '/orders': 'Order History | ShopSphere',
  '/cart': 'Shopping Cart | ShopSphere',
  '/faq': 'FAQs | ShopSphere',
  '/shipping': 'Shipping & Returns | ShopSphere',
  '/privacy': 'Privacy Policy | ShopSphere',
  '/terms': 'Terms of Service | ShopSphere',
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll position
    window.scrollTo(0, 0);

    // Update browser tab title dynamically
    document.title = titles[pathname] || 'ShopSphere';
  }, [pathname]);

  return null;
}