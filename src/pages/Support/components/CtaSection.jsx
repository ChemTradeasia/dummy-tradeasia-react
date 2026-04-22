import React from 'react';

export default function CtaSection({
  title = 'Need More Help?',
  description = "We're ready to support you with accurate information and fast responses tailored to your needs.",
  buttonText = 'Contact Us',
  buttonHref = '/contact-us',
  bgImage = 'https://cdn.chemtradeasia.com/chemtradeasia-new/image-customer-support/bg-cta.webp',
}) {
  return (
    <section className="pt-10 pb-25">
      <div className="container">
        {/* Banner wrapper */}
        <div
          className="relative overflow-hidden flex items-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg,#354fae,#354fae7a 56%,#354fae00)' }}
          />

          {/* Content */}
          <div className="relative z-10 px-12.5 pt-14 pb-16 ">
            <h3 className="text-[32px] lg:text-[44px] font-semibold text-white mb-3 leading-tight">
              {title}
            </h3>
            <p className="text-[16px] text-white leading-relaxed mb-8.5">
              {description}
            </p>
            <a
              href={buttonHref}
              className="bg-white text-[var(--color-light-blue)] border-2 border-[var(--color-light-blue)] font-medium text-base rounded-full px-[25px] py-[11px] cursor-pointer hover:bg-[var(--color-light-blue)] hover:text-white hover:border-[var(--color-light-blue)] transition-all"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
