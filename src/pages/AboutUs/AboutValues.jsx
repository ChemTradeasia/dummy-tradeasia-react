import React from 'react';
import { 
  ValueIcon1, ValueIcon2, ValueIcon3, 
  ValueIcon4, ValueIcon5, ValueIcon6 
} from '../../components/icons/AboutUs';

const APP_VALUES = [
  {
    id: 1,
    title: 'Trust',
    desc: 'Build strong relations with all stakeholders - customers, employees, and our business partners based on commitment and trust.',
    Icon: ValueIcon1
  },
  {
    id: 2,
    title: 'Integrity',
    desc: 'We do business honestly in accordance to our values.',
    Icon: ValueIcon2
  },
  {
    id: 3,
    title: 'Commitment',
    desc: 'We are accountable for our duties with high professionalism to all our stakeholders.',
    Icon: ValueIcon3
  },
  {
    id: 4,
    title: 'Sustainability',
    desc: 'We commit to perform our business duties with the utmost commitment to the environment and the world.',
    Icon: ValueIcon4
  },
  {
    id: 5,
    title: 'Entrepreneurship',
    desc: 'Act with entrepreneurship to grow together with all our stakeholders - customers, employees and business partners.',
    Icon: ValueIcon5
  },
  {
    id: 6,
    title: 'Partnership',
    desc: 'Treasure teamwork and develop strong cooperation to create excellent solutions for all our customers and business partners.',
    Icon: ValueIcon6
  }
];

export default function AboutValues() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-[var(--color-text-dark)] text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
        
        {/* Large Value Illustration */}
        <div className="flex justify-center mb-16">
          <img 
            src="https://cdn.chemtradeasia.com/product-websites/soda-ash-dense/our-value.webp" 
            alt="Tradeasia Core Values Diagram" 
            className="max-w-full md:max-w-3xl h-auto"
          />
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {APP_VALUES.map((val) => (
            <div key={val.id} className="text-center md:text-left">
              <div className="inline-block md:block mb-4 text-[var(--color-header-bg)]">
                <val.Icon className="w-16 h-16 mx-auto md:mx-0" />
              </div>
              <h5 className="text-[var(--color-text-dark)] text-xl font-bold mb-3">{val.title}</h5>
              <p className="text-[var(--color-gray-text)] leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
