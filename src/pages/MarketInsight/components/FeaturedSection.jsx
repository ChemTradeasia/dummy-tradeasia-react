import React from 'react';
import SectionHeader from './SectionHeader';
import SidebarItem from './SidebarItem';

export default function FeaturedSection({ topArticle, featuredArticles }) {
  if (!topArticle) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
      {/* Top Article */}
      <div className="md:col-span-8">
        <a href={`/market-insights/${topArticle.slug}`} className="group block">
          <div className="relative aspect-[16/9] overflow-hidden mb-6">
            <img 
              src={topArticle.image} 
              alt={topArticle.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="sm:text-sm text-md text-[var(--color-light-blue)] mb-1">
              {topArticle.type}
            </span>
            <h1 className="text-[24px] md:text-[44px] text-[var(--color-text-dark)] mb-2 leading-normal">
              {topArticle.title}
            </h1>
            <div className="flex items-center gap-2 text-sm text-[var(--color-grey-text)] font-normal">
              <svg className="w-5 h-5 text-[var(--color-grey-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(topArticle.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
            </div>
          </div>
        </a>
      </div>

      {/* Featured List */}
      <div className="md:col-span-4 flex flex-col pt-4 sm:pt-0">
        <SectionHeader title="Featured" className="mt-5 md:mt-0" />
        <div className="flex flex-col">
          {featuredArticles.map((article) => (
            <SidebarItem key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
