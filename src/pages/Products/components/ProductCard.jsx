export default function ProductCard({ product }) {
  return (
    <div className="bg-white border border-gray-200 flex flex-col transition-all duration-300 hover:-translate-y-4 hover:shadow-lg group h-full">
      {/* Product Image */}
      <a href={`/products/${product.slug}`} className="block relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-[180px] object-cover transition-transform duration-500"
          loading="lazy"
        />
      </a>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow">
        <a href={`/products/${product.slug}`} className="flex-grow">
          <h6 className="text-[var(--color-text-dark)] font-semibold text-sm md:text-[16px] lg:text-[16px] mb-3 line-clamp-2 transition-colors text-left">
            {product.name}
          </h6>

          <div className="space-y-2 mb-6 text-left">
            <div className="text-sm md:text-[14px] lg:text-[16px] text-[var(--color-grey-text)]">
              <span className="w-28 flex-shrink-0">CAS Number : &nbsp; </span>
              <span className="font-semibold">{product.cas}</span>
            </div>
            <div className="text-sm lg:text-[16px] text-[var(--color-grey-text)]">
              <span className="w-28 flex-shrink-0">HS Code : &nbsp; </span>
              <span className="font-semibold">{product.hsCode}</span>
            </div>
          </div>
        </a>

        {/* Action Button */}
        <a 
          href={`/contact-us?form_chosen=Request for Quotation&product_name_buying=${encodeURIComponent(product.name)}`}
          className="w-full bg-white text-[14px] md:text-[16px] border-2 border-[var(--color-light-blue)] text-[var(--color-light-blue)] font-medium py-2 sm:py-2.5 rounded-full text-center hover:bg-[var(--color-light-blue)] hover:text-white transition-all duration-300"
        >
          Inquire Now
        </a>
      </div>
    </div>
  );
}
