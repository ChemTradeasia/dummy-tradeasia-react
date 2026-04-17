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
    <div className="flex flex-col w-full">
      <SEO meta={{
        title: `${product.name} | Tradeasia International`,
        description: `Learn more about ${product.name}. CAS Number: ${product.cas}, HS Code: ${product.hsCode}. We provide global supply chain solutions for ${product.name}.`,
        keywords: `${product.name}, chemical specs, ${product.cas}, chemical supplier`
      }} />

      {/* Breadcrumb Section */}
      <Breadcrumb items={[
        { label: 'Products', href: '/products' },
        { label: product.name }
      ]} />

      <section className="container mx-auto mt-11.5">
        {/* Main Title */}
        <h1 className="text-[var(--color-text-dark)] text-3xl md:text-[44px] lg:text-[50px] font-semibold mb-9">{product.name}</h1>

        <div className="bg-[#fefaef] -mx-[12px] px-6 md:px-7.5 md:py-8 flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-[400px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-contain aspect-square"
            />
          </div>

          <div className="w-full md:w-[60%] overflow-x-auto">
            <h4 className="text-[var(--color-text-dark)] md:text-[32px] font-semibold mb-2.5 text-left">Basic Information</h4>
            <table className="w-full border-separate border-spacing-y-4.5">
              <tbody className="text-sm text-[var(--color-grey-text)]">
                <tr>
                  <td className="w-40 font-normal text-left">IUPAC Name</td>
                  <td className="font-semibold text-[var(--color-grey-text)] text-left">: {product.iupac}</td>
                </tr>
                <tr>
                  <td className="font-normal text-left">CAS Number</td>
                  <td className="font-semibold text-[var(--color-grey-text)] text-left">: {product.cas}</td>
                </tr>
                <tr>
                  <td className="font-normal text-left">HS Code</td>
                  <td className="font-semibold text-[var(--color-grey-text)] text-left">: {product.hsCode}</td>
                </tr>
                <tr>
                  <td className="font-normal text-left">Formula</td>
                  <td className="font-semibold text-[var(--color-grey-text)] flex gap-1 text-left">: <span dangerouslySetInnerHTML={{ __html: product.formula }} /></td>
                </tr>
                <tr>
                  <td className="font-normal text-left">Appearance</td>
                  <td className="font-semibold text-[var(--color-grey-text)] text-left">: {product.appearance}</td>
                </tr>
                <tr>
                  <td className="font-normal text-left">Common Names</td>
                  <td className="font-semibold text-[var(--color-grey-text)] text-left">: {product.commonNames}</td>
                </tr>
                <tr>
                  <td className="font-normal text-left">Packaging</td>
                  <td className="font-semibold text-[var(--color-grey-text)] text-left">: {product.packaging}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-13">
          {/* LEFT COLUMN: MAIN CONTENT */}
          <div className="w-full lg:col-span-6 custom-fs-heading mt-5">

            {/* Top Specs Card */}


            {/* Description & Application */}
            <div className="space-y-12">
              <div className="prose prose-blue max-w-none text-[#5d5d5d] leading-relaxed">
                <h4 className="text-[var(--color-text-dark)] text-xl md:text-[32px] font-semibold mt-10 mb-4">
                  Product Description
                </h4>
                <div dangerouslySetInnerHTML={{ __html: product.description }} className="text-left" />
              </div>

              <div className="prose prose-blue max-w-none text-[#5d5d5d] leading-relaxed">
                <h2 className="text-[var(--color-text-dark)] text-xl md:text-[32px] font-semibold mt-10 mb-4">
                  Product Application
                </h2>
                <div dangerouslySetInnerHTML={{ __html: product.application }} className="text-left" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: STICKY SIDEBAR */}
          <div className="hidden lg:block lg:col-span-1"></div>
          <div className="w-full lg:col-span-6">
            <div className="sticky top-28 space-y-8">

              {/* Technical Documents */}
              <h4 className="text-[var(--color-text-dark)] text-xl md:text-[32px] font-semibold mt-10 mb-4">Technical Documents</h4>

              <div className="bg-white overflow-hidden">



                <div className="overflow-x-auto">
                  <table className="w-full text-md">
                    <thead className="bg-[#fefaef] text-[var(--color-text-dark)] font-semibold">
                      <tr>
                        <td className="px-5 py-3 text-left">Type</td>
                        <td className="px-5 py-3 text-left">Grade</td>
                        <td className="px-5 py-3 text-left">Origin</td>
                        <td className="px-5 py-3"></td>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border border-t-0 border-gray-200">
                      {product.technicalDocuments.map((doc, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="px-5 py-3 font-normal text-[var(--color-text-dark)] text-left">{doc.type}</td>
                          <td className="px-5 py-3 font-normal text-[var(--color-text-dark)] text-left">{doc.grade}</td>
                          <td className="px-5 py-3 font-normal text-[var(--color-text-dark)] text-left">{doc.origin}</td>
                          <td className="px-5 py-3 text-right">
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
              <div className="bg-[#fefaef] p-8 ">
                <h5 className="text-[var(--color-text-dark)] text-xl font-semibold mb-2 text-left">Interested in this product?</h5>
                <p className="text-[#5d5d5d] text-sm leading-relaxed mb-6 text-left">
                  For more detailed information including pricing, customization, and shipping:
                </p>
                <a
                  href={`/contact-us?form_chosen=Request for Quotation&product_name_buying=${encodeURIComponent(product.name)}`}
                  className="w-full block bg-[var(--color-light-blue)] border-2 border-[var(--color-light-blue)] text-white font-normal py-2 md:py-3 rounded-full text-center hover:bg-white hover:text-[var(--color-light-blue)] transition-all"
                >
                  Inquire Now
                </a>
              </div>

              {/* Social Share Placeholder */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-[var(--color-text-dark)]">Share:</span>
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

        

      </section>
      {/* RELATED PRODUCTS SLIDER */}
      <div className="bg-[#fefaef] py-10 mt-24 ">
        <div className="relative container">
          <div className="flex justify-between items-end mb-8">
            <h3 className="text-[var(--color-text-dark)] text-[24px] font-semi  bold">Explore More Products</h3>
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
              <div key={`${p.id}-${idx}`} className="w-[351px] md:w-[348px] lg:w-[324px] flex-shrink-0 snap-start">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
        
    </div>
  );
}
