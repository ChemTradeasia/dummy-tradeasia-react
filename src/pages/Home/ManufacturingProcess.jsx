export default function ManufacturingProcess() {
  return (
    <section className="py-[80px]">
      <div className="container mx-auto">
        <h5 className="text-[var(--color-light-blue)] font-semibold text-[18px] text-center md:mb-5 md:text-[24px] sm:text-[18px] sm:mb-0">
          Manufacturing Process
        </h5>
        <h3 className="font-semibold text-[18px] text-center md:text-[24px] sm:text-[18px] md:text-[44px]">
          How Soda Ash Dense Is Made
        </h3>
        <img
          src="https://cdn.chemtradeasia.com/product-websites/soda-ash-dense/manufacturing-process.webp"
          alt="Manufacturing Process"
          className="w-full mt-12.5 mb-10"
        />
        <p className="text-center leading-[25px] sm:leading-[29px] md:leading-[29px] text-[14px] md:text-[16px] sm:text-[14px]">
          Soda ash dense is manufactured through a series of controlled chemical processes that
          ensure high purity and consistent product quality. The process begins with purifying raw
          brine to remove impurities that may disrupt chemical reactions. The purified brine is then
          saturated with ammonia gas, preparing it for the carbonation stage where carbon dioxide is
          introduced to form sodium bicarbonate crystals. These crystals are separated and heated to
          convert them into sodium carbonate. Finally, ammonia is recovered and recycled back into
          the production cycle, improving efficiency and reducing waste.
        </p>
      </div>
    </section>
  );
}
