import React from 'react';
import { AngleRightIcon } from '../../../components/icons';

export default function ArticleGrid({
  displayArticles,
  filteredArticles,
  visibleCount,
  setVisibleCount,
  clearFilters
}) {
  return (
    <>
      {displayArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayArticles.map(article => (
            <a key={article.id} href={`/market-insights/${article.slug}`} className="group flex flex-col bg-white rounded-none border border-gray-200 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-2xl transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-5 md:p-7.5 md:pb-10 flex flex-col h-full">
                <div className="mb-2.5">
                  <span className="px-3 py-1.5 border border-[var(--color-light-blue)] text-[var(--color-light-blue)] text-[14px] md:text-[16px] font-medium rounded-full inline-block">
                    {article.type}
                  </span>
                </div>
                
                <h3 className="text-[14px] md:text-[16px] font-semibold text-[var(--color-text-dark)] mb-2.5 leading-relaxed">
                  {article.title}
                </h3>
                
                <p className="text-gray-500 text-[14px] md:text-[16px] line-clamp-3 mb-1.5 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="mt-auto flex items-center gap-2.5 text-[14px] text-gray-500">
                  <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-[40px] border-2 border-dashed border-gray-200">
          <h3 className="text-xl font-bold text-gray-400">No articles found matching your criteria.</h3>
          <button onClick={clearFilters} className="text-[var(--color-light-blue)] font-bold mt-4 hover:underline">Reset all filters</button>
        </div>
      )}

      {/* LOAD MORE */}
      {filteredArticles.length > visibleCount && (
        <div className="mt-20 flex justify-center">
          <button 
            onClick={() => setVisibleCount(prev => prev + 6)}
            className="px-12 py-4 bg-[var(--color-light-blue)] text-white font-bold rounded-full hover:bg-[var(--color-text-dark)] transition-all shadow-lg hover:shadow-[var(--color-light-blue)]/30 transform hover:-translate-y-1"
          >
            Load More Insights
          </button>
        </div>
      )}
    </>
  );
}
