import { useState } from 'react';
import SEO from '../../components/SEO';
import PageBanner from '../../components/common/PageBanner';
import Breadcrumb from '../../components/common/Breadcrumb';
import ProductCard from './components/ProductCard';
import { PRODUCTS } from '../../constants/products';

export default function ProductsPage() {
  const [displayCount, setDisplayCount] = useState(8);
  const totalProducts = PRODUCTS.length;

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 4);
  };

  const visibleProducts = PRODUCTS.slice(0, displayCount);

  return (
    <div className="flex flex-col w-full pb-20">
      <SEO meta={{ 
        title: "Products | Tradeasia International - Global Chemical Distributor",
        description: "Explore our wide range of high-quality chemical products. We provide supply chain solutions for chemicals across various industries.",
        keywords: "chemical products, soda ash, caustic soda, chemical distributor, tradeasia products"
      }} />

      <PageBanner 
        title="Product Catalog" 
        backgroundImage="https://cdn.chemtradeasia.com/product-websites/banner/product-bn.webp" 
      />
      
      <Breadcrumb items={[{ label: 'All Products' }]} />

      <section className="container mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-6 gap-10">
          {visibleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {displayCount < totalProducts && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={handleLoadMore}
              className="px-10 py-3.5 bg-[var(--color-light-blue)] text-white font-bold rounded-full shadow-lg shadow-[#354FAE]/20 hover:bg-[#2A3E8A] transition-all transform active:scale-95"
            >
              Load More Products
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
