export default function MarketInsight() {
  return (
    <section className="relative mb-8 pb-[80px] z-10">
      <img
        src="https://cdn.chemtradeasia.com/product-websites/soda-ash-dense/bg-left.webp"
        alt="Left Chemical Background"
        className="absolute left-0 -top-30 w-[40%] object-contain object-left pointer-events-none select-none"
      />
      <img
        src="https://cdn.chemtradeasia.com/product-websites/soda-ash-dense/bg-right.webp"
        alt="Right Chemical Background"
        className="absolute right-0 top-0 w-[40%] object-contain object-right pointer-events-none select-none"
      />
      <div className="relative z-10 container mx-auto">
        <h3 className="mb-8">Market Insights</h3>

        {/* Area kartu — kosong, siap diisi data dari API */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Kartu akan di-render di sini saat data tersedia */}
        </div>

        {/* Placeholder saat belum ada data */}
        <div className="text-center py-10">
          <h5 className="text-[var(--color-light-blue)]">
            Stay tune for our updated market insights
          </h5>
        </div>
      </div>

    </section>
  );
}
