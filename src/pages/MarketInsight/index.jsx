import React, { useState, useMemo, useEffect, useRef } from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';
import { MARKET_INSIGHTS } from '../../constants/marketInsights';
import FeaturedSection from './components/FeaturedSection';
import FilterSection from './components/FilterSection';
import ArticleGrid from './components/ArticleGrid';
import NewsletterSection from './components/NewsletterSection';

/**
 * MarketInsightPage
 * A modular React version of the Market Insight page.
 * Refactored into specialized components for better maintainability.
 */
export default function MarketInsightPage() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState('newest');
  const [visibleCount, setVisibleCount] = useState(6);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter and Sort logic
  const filteredArticles = useMemo(() => {
    let result = MARKET_INSIGHTS.filter(a => !a.isTop && !a.isFeatured);

    if (searchKeyword) {
      const kw = searchKeyword.toLowerCase();
      result = result.filter(a => 
        a.title.toLowerCase().includes(kw) || 
        a.excerpt.toLowerCase().includes(kw)
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter(a => selectedCategories.includes(a.type));
    }

    if (sortOrder === 'newest') {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOrder === 'oldest') {
      result.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortOrder === 'popular') {
      result.sort((a, b) => (b.clickCount || 0) - (a.clickCount || 0));
    }

    return result;
  }, [searchKeyword, selectedCategories, sortOrder]);

  const topArticle = MARKET_INSIGHTS.find(a => a.isTop);
  const featuredArticles = MARKET_INSIGHTS.filter(a => a.isFeatured && !a.isTop).slice(0, 4);
  const displayArticles = filteredArticles.slice(0, visibleCount);

  const toggleCategory = (cat) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
    setVisibleCount(6);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchKeyword('');
    setSortOrder('newest');
  };

  return (
    <div className="flex flex-col w-full">
      <Breadcrumb items={[{ label: 'Market Insight' }]} />

      <section className="container mx-auto py-12">
        <FeaturedSection 
          topArticle={topArticle} 
          featuredArticles={featuredArticles} 
        />

        <FilterSection 
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
          selectedCategories={selectedCategories}
          toggleCategory={toggleCategory}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          isCategoryOpen={isCategoryOpen}
          setIsCategoryOpen={setIsCategoryOpen}
          clearFilters={clearFilters}
          dropdownRef={dropdownRef}
        />

        <ArticleGrid 
          displayArticles={displayArticles}
          filteredArticles={filteredArticles}
          visibleCount={visibleCount}
          setVisibleCount={setVisibleCount}
          clearFilters={clearFilters}
        />
      </section>

      <NewsletterSection />
    </div>
  );
}
