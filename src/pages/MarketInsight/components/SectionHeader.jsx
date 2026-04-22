import React from 'react';

export default function SectionHeader({ title, className = "" }) {
  return (
    <div className={`flex items-center mb-6 ${className}`}>
      <div className="w-[6px] h-12 bg-[var(--color-light-blue)] rounded-full mr-3.5"></div>
      <h3 className="text-[24px] md:text-[32px] font-semibold text-[var(--color-text-dark)] leading-none">
        {title}
      </h3>
    </div>
  );
}
