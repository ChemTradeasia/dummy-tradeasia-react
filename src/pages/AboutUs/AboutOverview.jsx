import React from 'react';

export default function AboutOverview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <a 
              href="https://cdn.chemtradeasia.com/uploads/Tradeasia%20Advantage%20Profile%20(1).pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img 
                src="https://cdn.chemtradeasia.com/chemtradeasia-new/singapore/about-img.webp" 
                alt="Tradeasia Company Profile" 
                className="w-full h-auto"
              />
            </a>
          </div>
          <div className="md:col-span-7">
            <div className="max-w-xl">
              <h5 className="text-[var(--color-light-blue)] font-semibold text-lg md:text-xl mb-2">Who Are We?</h5>
              <h2 className="text-[var(--color-text-dark)] text-3xl md:text-4xl font-bold leading-tight mb-6">
                Your Trusted Global Partner for Chemical Solutions
              </h2>
              <div className="text-[var(--color-gray-text)] leading-relaxed space-y-4">
                <p>
                  Established in 2004, Tradeasia International is a global trading firm and a top soda ash dense distributor dealing with chemical commodities providing our consumers and partners alike with extended supply chain management service, product sourcing, price negotiation as well as quality control.
                </p>
                <p>
                  The Tradeasia International is headquartered in Singapore which provides for a solid financial hub as well as excellent connectivity to the emerging regional markets and soda ash dense distribution. Our locally staffed offices in China, India and Indonesia provides for a streamlined procurement service and with plans to open more local offices around Asia Pacific, your procurement needs with us will be further eased.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
