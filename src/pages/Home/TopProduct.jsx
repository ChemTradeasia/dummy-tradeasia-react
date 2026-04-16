export default function TopProduct() {
  return (
    <section className="container mx-auto">
      <div className="p-[20px] md:p-[50px] md:pt-[45px] sm:p-[20px] bg-[#fefaef]">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-13 items-center">
            
            <div className="md:col-span-6">
              <img
                src="https://cdn.chemtradeasia.com/product-websites/soda-ash-dense/top-prodcut-img.webp"
                alt="Soda Ash Dense Top Product Image"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-7 md:pl-25 ml-0 sm:pl-0 sm:ml-0 sm:mt-5">
              <h5 className="text-[var(--color-light-blue)] font-semibold text-[24px] md:text-[24px] sm:text-[18px]">Our Products</h5>
              <h3 className="text-[18px] md:text-[44px] font-semibold leading-[32px] sm:leading-normal sm:text-[18px]">
                Product Range of Soda Ash Dense
              </h3>
              <p className="leading-[26px] md:leading-[29px] text-[14px] mb-6 sm:text-[16px] sm:leading-[25px]">
                Tradeasia offers premium-grade soda ash dense suitable for diversified applications
                across detergent manufacturing, glass production, chemical processing, and
                pharmaceutical industries. Our soda ash dense meets stringent international quality
                standards, with consistent purity levels and reliable particle size distribution.
              </p>
              <a
                href="/products"
                className="inline-block px-5 py-2 text-[14px] mt-4 bg-[var(--color-light-blue)] border-2 border-[var(--color-light-blue)] text-white font-medium sm:px-5 sm:py-2.5 rounded-full md:px-7 md:py-3 md:text-[16px] hover:bg-white hover:text-[var(--color-light-blue)] transition-all active:scale-[0.95] shadow-lg shadow-[var(--color-light-blue)]/20"
              >
                Explore Our Product
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
