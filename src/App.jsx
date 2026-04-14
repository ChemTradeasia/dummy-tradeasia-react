import { useState, useEffect } from 'react';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/Home';
import AboutUsPage from './pages/AboutUs';
import ProductsPage from './pages/Products';
import OurLocationPage from './pages/OurLocation';
import ContactUsPage from './pages/ContactUs';

/**
 * Route configuration.
 * Tambahkan halaman baru di sini — cukup daftarkan path dan component-nya.
 */
const ROUTES = [
  { path: '/',           component: <HomePage /> },
  { path: '/about-us',   component: <AboutUsPage /> },
  { path: '/products',   component: <ProductsPage /> },
  { path: '/our-location', component: <OurLocationPage /> },
  { path: '/contact-us',   component: <ContactUsPage /> },
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

  const route = ROUTES.find((r) => r.path === currentPath);
  const pageContent = route ? route.component : <NotFoundPage />;

  return (
    <MainLayout>
      {pageContent}
    </MainLayout>
  );
}
