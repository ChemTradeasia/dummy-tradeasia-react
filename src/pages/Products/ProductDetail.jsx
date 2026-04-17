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
            </div>
          </div>
        </div>
        {/* Social Share Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 pt-10 border-t border-gray-100">
          <span className="text-xl font-semibold text-[var(--color-text-dark)]">Share This Product:</span>
          <div className="flex flex-wrap gap-3">
            {/* Facebook */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="nofollow noopener"
              className="w-10 h-10 bg-[var(--color-light-blue)] border-2 border-[var(--color-light-blue)] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[var(--color-light-blue)] transition-all"
              title="Share on Facebook"
            >
              <svg width="18" height="18" viewBox="0 0 1792 1792" fill="currentColor">
                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${product.name} | Tradeasia - ${typeof window !== 'undefined' ? window.location.href : ''}`)}`}
              target="_blank"
              rel="nofollow noopener"
              className="w-10 h-10 bg-[var(--color-light-blue)] border-2 border-[var(--color-light-blue)] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[var(--color-light-blue)] transition-all"
              title="Share on WhatsApp"
            >
              <svg width="22" height="22" viewBox="0 0 1792 1792" fill="currentColor">
                <path d="M1113 974q13 0 97.5 44t89.5 53q2 5 2 15 0 33-17 76-16 39-71 65.5t-102 26.5q-57 0-190-62-98-45-170-118t-148-185q-72-107-71-194v-8q3-91 74-158 24-22 52-22 6 0 18 1.5t19 1.5q19 0 26.5 6.5t15.5 27.5q8 20 33 88t25 75q0 21-34.5 57.5t-34.5 46.5q0 7 5 15 34 73 102 137 56 53 151 101 12 7 22 7 15 0 54-48.5t52-48.5zm-203 530q127 0 243.5-50t200.5-134 134-200.5 50-243.5-50-243.5-134-200.5-200.5-134-243.5-50-243.5 50-200.5 134-134 200.5-50 243.5q0 203 120 368l-79 233 242-77q158 104 345 104zm0-1382q153 0 292.5 60t240.5 161 161 240.5 60 292.5-60 292.5-161 240.5-240.5 161-292.5 60q-195 0-365-94l-417 134 136-405q-108-178-108-389 0-153 60-292.5t161-240.5 240.5-161 292.5-60z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="nofollow noopener"
              className="w-10 h-10 bg-[var(--color-light-blue)] border-2 border-[var(--color-light-blue)] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[var(--color-light-blue)] transition-all"
              title="Share on LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 1792 1792" fill="currentColor">
                <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z" />
              </svg>
            </a>

            {/* Copy Link */}
            <button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }}
              className="w-10 h-10 bg-[var(--color-light-blue)] border-2 border-[var(--color-light-blue)] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[var(--color-light-blue)] transition-all cursor-pointer"
              title="Copy Product Link"
            >
              <svg width="18" height="18" viewBox="0 0 1792 1792" fill="currentColor">
                <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z" />
              </svg>
            </button>
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
