import React from 'react';

export default function SidebarItem({ article, showBorder = true }) {
  if (!article) return null;

  return (
    <div className={`group ${showBorder ? 'border-b-2 border-gray-100' : ''}`}>
      <a href={`/market-insights/${article.slug}`} className="block py-5 hover:opacity-80 transition-opacity">
        <span className="text-[14px] md:text-[16px] font-normal text-[var(--color-light-blue)] block mb-2">
          {article.type}
        </span>
        <h4 className="text-[18px] md:text-[20px] font-semibold text-[var(--color-text-dark)] mb-2 leading-[1.6] group-hover:text-[var(--color-light-blue)] transition-colors line-clamp-2">
          {article.title}
        </h4>
        <div className="flex items-center gap-2 text-[14px] text-gray-500">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{new Date(article.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
        </div>
      </a>
    </div>
  );
}
