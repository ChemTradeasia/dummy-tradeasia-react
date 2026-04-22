import React from 'react';
import { AngleRightIcon } from '../../../components/icons';
import ArticleCard from './ArticleCard';

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
            <ArticleCard key={article.id} article={article} />
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
