import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const titles = {
  '/': 'SuvoraNova | Modern Storefront',
  '/shop': 'Catalog | SuvoraNova',
  '/orders': 'Order History | SuvoraNova',
  '/cart': 'Shopping Cart | SuvoraNova',
  '/faq': 'FAQs | SuvoraNova',
  '/shipping': 'Shipping & Returns | SuvoraNova',
  '/privacy': 'Privacy Policy | SuvoraNova',
  '/terms': 'Terms of Service | SuvoraNova',
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll position
    window.scrollTo(0, 0);

    // Update browser tab title dynamically
    document.title = titles[pathname] || 'SuvoraNova';
  }, [pathname]);

  return null;
}