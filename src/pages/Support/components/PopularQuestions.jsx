import React, { useState } from 'react';
import FaqItem from './FaqItem';

export default function PopularQuestions({ title, description, items = [] }) {
  const [openFaq, setOpenFaq] = useState(null);

  const handleToggle = (idx) =>
    setOpenFaq((prev) => (prev === idx ? null : idx));

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-wrap -mx-4 items-start">

          {/* Left column — heading + description (5/12) — sticky */}
          <div className="w-full md:w-5/12 px-4 mb-10 md:mb-0 md:sticky md:top-24">
            <div className="pr-0 md:pr-8">
              <h3 className="text-[28px] lg:text-[44px] font-semibold text-[var(--color-text-dark)] mb-4 leading-normal">
                {title}
              </h3>
              <p className="text-[16px] text-[var(--color-gray-text)] leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Spacer (1/12) */}
          <div className="hidden md:block md:w-1/12" />

          {/* Right column — accordion list (6/12) */}
          <div className="w-full md:w-6/12 px-4">
            {items.map((item, idx) => (
              <FaqItem
                key={idx}
                question={item.question}
                answer={item.answer}
                isOpen={openFaq === idx}
                onToggle={() => handleToggle(idx)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
