import React, { useMemo, useRef } from 'react';
import SEO from '../../components/SEO';
import Breadcrumb from '../../components/common/Breadcrumb';
import ProductCard from './components/ProductCard';
import { PRODUCTS } from '../../constants/products';
import { AngleRightIcon, AngleLeftIcon } from '../../components/icons';

/**
 * ProductDetailPage
 * Displays exhaustive information about a specific product.
 */
export default function ProductDetailPage({ params }) {
  const { slug } = params || {};
  const scrollContainerRef = useRef(null);

  const product = useMemo(() => {
    return PRODUCTS.find(p => p.slug === slug);
  }, [slug]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto py-32 text-center text-2xl font-bold">
        Product not found
      </div>
    );
  }

  // Find related products (exclude current)
  const relatedProducts = [
    ...PRODUCTS.filter(p => p.id !== product.id),
    ...PRODUCTS.filter(p => p.id !== product.id), // Duplicate for scroller demo
  ];

  return (
    <div className="flex flex-col w-full pb-20">
      <SEO meta={{ 
        title: `${product.name} | Tradeasia International`,
        description: `Learn more about ${product.name}. CAS Number: ${product.cas}, HS Code: ${product.hsCode}. We provide global supply chain solutions for ${product.name}.`,
        keywords: `${product.name}, chemical specs, ${product.cas}, chemical supplier`
      }} />

      {/* Breadcrumb Section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <Breadcrumb items={[
          { label: 'Products', path: '/products' },
          { label: product.name }
        ]} />
      </div>

      <section className="container mx-auto px-4 mt-12">
        {/* Main Title */}
        <h1 className="text-[#17234d] text-3xl md:text-4xl font-bold mb-8">{product.name}</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT COLUMN: MAIN CONTENT */}
          <div className="flex-grow lg:w-[65%]">
            
            {/* Top Specs Card */}
            <div className="bg-[#fefaef] p-6 md:p-10 flex flex-col md:flex-row gap-10 items-start">
              <div className="w-full md:w-[40%] flex-shrink-0 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto object-contain aspect-square"
                />
              </div>
              
              <div className="w-full md:w-[60%] overflow-x-auto">
                <h4 className="text-[#17234d] text-xl font-bold mb-6 text-left">Product Information</h4>
                <table className="w-full border-separate border-spacing-y-3">
                  <tbody className="text-sm text-[#5d5d5d]">
                    <tr>
                      <td className="w-40 font-medium text-left">IUPAC Name</td>
                      <td className="font-semibold text-[#17234d] text-left">: {product.iupac}</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-left">CAS Number</td>
                      <td className="font-semibold text-[#17234d] text-left">: {product.cas}</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-left">HS Code</td>
                      <td className="font-semibold text-[#17234d] text-left">: {product.hsCode}</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-left">Formula</td>
                      <td className="font-semibold text-[#17234d] flex gap-1 text-left">: <span dangerouslySetInnerHTML={{ __html: product.formula }} /></td>
                    </tr>
                    <tr>
                      <td className="font-medium text-left">Appearance</td>
                      <td className="font-semibold text-[#17234d] text-left">: {product.appearance}</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-left">Common Names</td>
                      <td className="font-semibold text-[#17234d] text-left">: {product.commonNames}</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-left">Packaging</td>
                      <td className="font-semibold text-[#17234d] text-left">: {product.packaging}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Description & Application */}
            <div className="mt-12 space-y-12">
              <div className="prose prose-blue max-w-none text-[#5d5d5d] leading-relaxed">
                <h2 className="text-[#17234d] text-2xl font-bold mb-4 border-b-2 border-[#17234d] pb-2 inline-block">
                  Description
                </h2>
                <div dangerouslySetInnerHTML={{ __html: product.description }} className="text-left" />
              </div>

              <div className="prose prose-blue max-w-none text-[#5d5d5d] leading-relaxed">
                <h2 className="text-[#17234d] text-2xl font-bold mb-4 border-b-2 border-[#17234d] pb-2 inline-block">
                  Product Application
                </h2>
                <div dangerouslySetInnerHTML={{ __html: product.application }} className="text-left" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: STICKY SIDEBAR */}
          <div className="lg:w-[35%]">
            <div className="sticky top-28 space-y-8">
              
              {/* Technical Documents */}
              <div className="bg-white border-2 border-[var(--color-light-blue)] rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-[var(--color-light-blue)] px-6 py-4">
                  <h4 className="text-white font-bold text-lg text-left">Technical Documents</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-[#fefaef] text-[#17234d] font-bold">
                      <tr>
                        <td className="px-6 py-4 text-left">Type</td>
                        <td className="px-6 py-4 text-left">Grade</td>
                        <td className="px-6 py-4 text-left">Origin</td>
                        <td className="px-6 py-4"></td>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {product.technicalDocuments.map((doc, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold text-left">{doc.type}</td>
                          <td className="px-6 py-4 text-left">{doc.grade}</td>
                          <td className="px-6 py-4 text-left">{doc.origin}</td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-[var(--color-light-blue)] hover:scale-110 transition-transform cursor-pointer">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Inquiry CTA Card */}
              <div className="bg-[#fefaef] p-8 rounded-2xl border border-[#ece4d0] shadow-sm">
                <h5 className="text-[#17234d] text-xl font-bold mb-3 text-left">Interested?</h5>
                <p className="text-[#5d5d5d] text-sm leading-relaxed mb-6 text-left">
                  Please feel free to reach out to us for any inquiries. Our team will get back to you shortly.
                </p>
                <a 
                  href={`/contact-us?form_chosen=Request for Quotation&product_name_buying=${encodeURIComponent(product.name)}`}
                  className="w-full block bg-[var(--color-light-blue)] text-white font-bold py-4 rounded-full text-center hover:bg-[#2A3E8A] transition-all shadow-lg shadow-[#354FAE]/20"
                >
                  Inquire Now
                </a>
              </div>

              {/* Social Share Placeholder */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-[#17234d]">Share:</span>
                <div className="flex gap-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 bg-[#354FAE] rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-[#354FAE] border-2 border-[#354FAE] transition-all">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                      </svg>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS SLIDER */}
        <div className="mt-24 relative">
          <div className="flex justify-between items-end mb-8">
            <h3 className="text-[#17234d] text-2xl font-bold">Explore More Products</h3>
            <div className="flex gap-2">
              <button 
                onClick={() => scroll('left')}
                className="w-10 h-10 border-2 border-[var(--color-light-blue)] text-[var(--color-light-blue)] rounded-full flex items-center justify-center hover:bg-[var(--color-light-blue)] hover:text-white transition-all cursor-pointer"
              >
                <AngleLeftIcon className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-10 h-10 border-2 border-[var(--color-light-blue)] text-[var(--color-light-blue)] rounded-full flex items-center justify-center hover:bg-[var(--color-light-blue)] hover:text-white transition-all cursor-pointer"
              >
                <AngleRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {relatedProducts.map((p, idx) => (
              <div key={`${p.id}-${idx}`} className="w-[280px] flex-shrink-0 snap-start">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
