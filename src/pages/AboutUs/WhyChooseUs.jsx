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
    <section className="py-16 md:py-24 bg-[var(--color-hover-bg)]">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <h5 className="text-[var(--color-light-blue)] font-semibold text-lg md:text-xl mb-2">Why Choose Us?</h5>
          <h3 className="text-[var(--color-text-dark)] text-3xl md:text-4xl font-bold leading-tight">
            The Prime Choice for Your Chemical Solutions
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="mb-6 text-[var(--color-header-bg)]">
                <item.Icon className="w-14 h-14" />
              </div>
              <h5 className="text-[var(--color-text-dark)] text-xl font-bold mb-4">{item.title}</h5>
              <p className="text-[var(--color-gray-text)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
