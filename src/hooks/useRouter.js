import { useState, useEffect, useCallback } from 'react';

/**
 * Simple client-side router — pure React, tanpa library eksternal.
 * Menggunakan History API (pushState) agar URL berubah saat navigasi.
 *
 * Cara pakai:
 *   const { currentPath, navigate } = useRouter();
 *   navigate('/products');
 */
export function useRouter() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((path) => {
    if (path === currentPath) return;
    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath]);

  return { currentPath, navigate };
}
