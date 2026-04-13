export default function About() {
  return (
    <section className="my-[80px] mx-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* col-md-4 */}
          <div className="md:col-span-4">
            <h5 className="text-[var(--color-light-blue)] font-semibold text-2xl">Who Are We?</h5>
            <h2 className="text-[44px] font-semibold">About Tradeasia</h2>
          </div>

          {/* col-md-8 */}
          <div className="md:col-span-8">
            <p className="leading-[29px]">
              Tradeasia International Pte. Ltd. always had a strong bond with basic industrial
              chemicals and its trading, but when it comes to Soda Ash Dense the strength of the
              bond reaches another level. We have a strong network with Asia Pacific, European Union
              and Middle East. We provide our customers not only quality product but also extended
              supply management service, product sourcing and price negotiating power.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}