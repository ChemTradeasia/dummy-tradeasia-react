import React from 'react';

export default function SupportCard({ title, href, icon, blurIcon }) {
  return (
    <div className="relative flex-col bg-white shadow-md px-8 py-10">
      <div className="absolute top-0 right-0 pointer-events-none select-none">
        {blurIcon}
      </div>

      <div className="relative z-10 mb-5 flex items-center justify-center w-[60px] h-[60px] shrink-0">
        {icon}
      </div>
      <h4 className="relative z-10 text-[24px] font-medium text-[var(--color-text-dark)] mb-6 leading-snug">
        {title}
      </h4>

      <a
        href={href}
        className="relative z-10 mt-auto inline-block bg-[var(--color-light-blue)] border-2 border-[var(--color-light-blue)] text-white font-medium text-base rounded-full px-5 py-2.5 hover:bg-white hover:text-[var(--color-light-blue)] transition-all"
      >
        See Details
      </a>
    </div>
  );
}
