import React from 'react';
import { WhyChoose1, WhyChoose2, WhyChoose3 } from '../../components/icons/AboutUs';

const WHY_ITEMS = [
  {
    id: 1,
    title: 'Broad Product Portfolio',
    desc: 'We provide a wide selection of high-quality chemical products to meet your raw material needs. With diverse of products available.',
    Icon: WhyChoose1
  },
  {
    id: 2,
    title: 'Network of Local Offices',
    desc: 'With extensive global coverage and experienced local teams, we deliver soda ash dense and other chemicals efficiently and provide fast, reliable support for your operations.',
    Icon: WhyChoose2
  },
  {
    id: 3,
    title: 'Streamlined Process',
    desc: 'As an integrated supply chain company, we give you our best service and help you track your products until they reach you.',
    Icon: WhyChoose3
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-1 md:py-2">
      <div className="container">
        <div className="bg-[var(--color-hover-bg)] p-[30px] md:p-[50px]">
          <div className="mb-[40px] mx-auto text-center">
            <h5 className="text-[var(--color-light-blue)] font-semibold text-[18px] md:text-[24px] leading-[32px] md:leading-[36px]">Why Choose Us?</h5>
            <h3 className="text-[var(--color-text-dark)] text-[18px] md:text-[44px] leading-[32px] md:leading-[66px]">
              The Prime Choice for Your Chemical Solutions
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHY_ITEMS.map((item) => (
              <div 
                key={item.id} 
                className="bg-white p-8 text-center  transition-all group"
              >
                <div className="text-[var(--color-light-blue)] inline-block">
                  <item.Icon className="w-14 h-14" />
                </div>
                <h5 className="text-[var(--color-light-blue)] text-[18px] md:text-[24px] leading-[32px] md:leading-[36px] font-semibold mt-[20px] mb-[4px]">{item.title}</h5>
                <p className="text-[var(--color-gray-text)] text-[14px] md:text-[16px] leading-[25px] md:leading-[29px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
