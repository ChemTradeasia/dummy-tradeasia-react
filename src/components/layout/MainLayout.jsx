import Header from './Header';
import Footer from './Footer';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col relative w-full pt-[80px] lg:pt-[84.469px] md:pt-[80px] sm:pt-[80px] z-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}
