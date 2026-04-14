export default function HeroBanner() {
  return (
    <section className="relative w-full pt-[95px] pb-[180px] sm:pt-[50px] sm:pb-[100px] md:pt-[95px] md:pb-[180px] overflow-hidden">
      <img
        src="https://cdn.chemtradeasia.com/product-websites/soda-ash-dense/home-bn.webp"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover scale-200 object-[70%_center]"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#354fae] via-[#123c6980] to-transparent md:w-full" />

      <div className="relative z-10 container mx-auto h-full flex items-center px-4">
        <div className="w-full md:w-7/12 py-0 sm:py-8 md:py-0">
          <div>
            <h1 className="text-white text-[32px] font-semibold leading-tight md:text-[50px] md:leading-normal">
              Reliable Global Supplier of Soda Ash Dense
            </h1>
            <p className="text-white mt-3 mb-5 text-[14px] leading-[24px] md:text-[16px] md:leading-[29px] md:mt-[10px] md:mb-[20px]">
              Access premium-quality soda ash dense with reliable sourcing, expert guidance, and dedicated service across industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
