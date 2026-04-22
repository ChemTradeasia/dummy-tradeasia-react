import React, { useState, useEffect } from 'react';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/Home';
import AboutUsPage from './pages/AboutUs';
import ProductsPage from './pages/Products';
import ProductDetailPage from './pages/Products/ProductDetail';
import OurLocationPage from './pages/OurLocation';
import ContactUsPage from './pages/ContactUs';
import MarketInsightPage from './pages/MarketInsight';
import MarketInsightDetailPage from './pages/MarketInsight/MarketInsightDetail';
import SupportPage from './pages/Support';
import FaqPage from './pages/Faq';

/**
 * Custom Route Matcher
 * Parses paths like /products/:slug and returns params.
 */
function matchRoute(routePath, currentPath) {
  const routeParts = routePath.split('/').filter(Boolean);
  const currentParts = currentPath.split('/').filter(Boolean);

  if (routeParts.length !== currentParts.length) return null;

  const params = {};
  for (let i = 0; i < routeParts.length; i++) {
    if (routeParts[i].startsWith(':')) {
      params[routeParts[i].slice(1)] = currentParts[i];
    } else if (routeParts[i] !== currentParts[i]) {
      return null;
    }
  }
  return params;
}

/**
 * Route configuration.
 */
const ROUTES = [
  { path: '/', component: <HomePage /> },
  { path: '/about-us', component: <AboutUsPage /> },
  { path: '/products', component: <ProductsPage /> },
  { path: '/products/:slug', component: <ProductDetailPage /> },
  { path: '/our-location', component: <OurLocationPage /> },
  { path: '/contact-us', component: <ContactUsPage /> },
  { path: '/market-insights', component: <MarketInsightPage /> },
  { path: '/market-insights/:slug', component: <MarketInsightDetailPage /> },
  { path: '/customer-support', component: <SupportPage /> },
  { path: '/faq', component: <FaqPage /> },
];

function NotFoundPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold text-[var(--color-text-dark)] mb-4">404</h1>
        <p className="text-gray-600 text-xl mb-8">Halaman tidak ditemukan.</p>
        <a
          href="/"
          className="inline-block bg-[var(--color-light-blue)] text-white font-medium rounded-full px-8 py-3 hover:opacity-90 transition-all"
        >
          Kembali ke Beranda
        </a>
      </div>
    </section>
  );
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Find matching route and extract params
  let matchedParams = {};
  const matchedRoute = ROUTES.find((route) => {
    const params = matchRoute(route.path, currentPath);
    if (params) {
      matchedParams = params;
      return true;
    }
    return false;
  });

  const pageContent = matchedRoute
    ? React.cloneElement(matchedRoute.component, { params: matchedParams })
    : <NotFoundPage />;

  return (
    <MainLayout>
      {pageContent}
    </MainLayout>
  );
}
