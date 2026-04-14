// import React from 'react';

export default function AboutOverview() {
  return (
    <section className="py-10 sm:py-20 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-16 gap-10 items-start">
          <div className="md:col-span-6">
            <a 
              href="https://cdn.chemtradeasia.com/uploads/Tradeasia%20Advantage%20Profile%20(1).pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block overflow-hidden"
            >
              <img 
                src="https://cdn.chemtradeasia.com/chemtradeasia-new/singapore/about-img.webp" 
                alt="Tradeasia Company Profile" 
                className="w-full h-auto"
              />
            </a>
          </div>
          <div className="md:col-span-10">
            <div className="lg:pl-12">
              <h5 className="text-[var(--color-light-blue)] font-semibold text-lg text-[18px] md:text-[24px] mb-2">Who Are We?</h5>
              <h2 className="text-[var(--color-text-dark)] lg:text-[44px] md:text-[32px] font-semibold text-[22px] lg:leading-[66px] md:leadeing-[45px] leading-[40px] mb-[20px]">
                Your Trusted Global Partner for Chemical Solutions
              </h2>
              <div className="text-[var(--color-gray-text)] space-y-4">
                <p className="text-[14px] md:text-[16px] leading-[25px]">
                  Established in 2004, Tradeasia International is a global trading firm and a top soda ash dense distributor dealing with chemical commodities providing our consumers and partners alike with extended supply chain management service, product sourcing, price negotiation as well as quality control.
                </p>
                <p className="text-[14px] md:text-[16px] leading-[25px]">
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
