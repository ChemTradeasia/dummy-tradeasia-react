import React, { useMemo } from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';
import { MARKET_INSIGHTS } from '../../constants/marketInsights';
import SEO from '../../components/SEO';

/**
 * MarketInsightDetailPage
 * Displays the full content of a market insight article.
 */
export default function MarketInsightDetailPage({ params }) {
  const { slug } = params || {};

  const article = useMemo(() => {
    return MARKET_INSIGHTS.find(a => a.slug === slug);
  }, [slug]);

  const popularInsights = useMemo(() => {
    return MARKET_INSIGHTS
      .filter(a => a.slug !== slug)
      .sort((a, b) => (b.clickCount || 0) - (a.clickCount || 0))
      .slice(0, 5);
  }, [slug]);

  if (!article) {
    return (
      <div className="container mx-auto py-32 text-center text-2xl font-bold">
        Article not found
      </div>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="flex flex-col w-full pb-20">
      <SEO meta={{
        title: `${article.title} | Market Insight`,
        description: article.excerpt,
      }} />

      <Breadcrumb items={[
        { label: 'Market Insight', href: '/market-insights' },
        { label: article.title }
      ]} />

      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content (Left) */}
          <div className="lg:col-span-8">
            <div className="flex flex-col">
              <p className="text-[var(--color-light-blue)] text-[16px] font-medium flex items-center gap-3 mb-4">
                {article.type}
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">{new Date(article.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
              </p>
              
              <h1 className="text-[32px] md:text-[42px] font-bold text-[var(--color-text-dark)] leading-[1.2] mb-8">
                {article.title}
              </h1>

              <div className="w-full mb-10 overflow-hidden shadow-lg border border-gray-100">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Table of Contents */}
              <div className="bg-[#fefaef] p-8 mb-10 border border-gray-100">
                <h4 className="text-[18px] font-bold text-[var(--color-text-dark)] mb-4 uppercase tracking-wider">Table of Content</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[16px] text-gray-700 hover:text-[var(--color-light-blue)] cursor-pointer transition-colors">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span> Introduction
                  </li>
                  <li className="flex items-center gap-3 text-[16px] text-gray-700 hover:text-[var(--color-light-blue)] cursor-pointer transition-colors">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span> Understanding the Product
                  </li>
                  <li className="flex items-center gap-3 text-[16px] text-gray-700 hover:text-[var(--color-light-blue)] cursor-pointer transition-colors">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span> Market Analysis
                  </li>
                  <li className="flex items-center gap-3 text-[16px] text-gray-700 hover:text-[var(--color-light-blue)] cursor-pointer transition-colors">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span> Conclusion
                  </li>
                </ul>
              </div>

              {/* Content Text */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed content-text">
                <p className="text-[18px] leading-8 mb-8">
                  {article.excerpt}
                </p>
                <div className="space-y-6">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <h2 className="text-2xl font-bold text-[var(--color-text-dark)] pt-6">Market Trends and Industrial Growth</h2>
                  <p>
                    The chemical landscape in Asia is undergoing a significant transformation. As industries move towards 
                    digitalization and green energy, the demand for foundational chemicals like Soda Ash Dense continues to rise.
                  </p>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </div>

              {/* Tags */}
              {article.tags && (
                <div className="mt-16 pt-8 border-t border-gray-100">
                  <h3 className="text-[18px] font-bold text-[var(--color-text-dark)] mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-3">
                    {article.tags.map(tag => (
                      <a 
                        key={tag} 
                        href={`/search-result?tab=marketInsight&result_search=${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        className="px-5 py-2 bg-gray-100 hover:bg-[var(--color-light-blue)] hover:text-white text-gray-600 text-[14px] font-medium transition-all"
                      >
                        {tag}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Social Share */}
              <div className="mt-12 mb-20">
                <h4 className="text-[18px] font-bold text-[var(--color-text-dark)] mb-6">Share This Post:</h4>
                <div className="flex gap-3">
                  {/* FB */}
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-[var(--color-header-bg)] flex items-center justify-center rounded-sm hover:opacity-80 transition-opacity">
                    <svg width="20" height="20" viewBox="0 0 1792 1792" fill="white"><path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"/></svg>
                  </a>
                  {/* WA */}
                  <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(article.title + ' ' + window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-[var(--color-header-bg)] flex items-center justify-center rounded-sm hover:opacity-80 transition-opacity">
                    <svg width="24" height="24" viewBox="0 0 1792 1792" fill="white"><path d="M1113 974q13 0 97.5 44t89.5 53q2 5 2 15 0 33-17 76-16 39-71 65.5t-102 26.5q-57 0-190-62-98-45-170-118t-148-185q-72-107-71-194v-8q3-91 74-158 24-22 52-22 6 0 18 1.5t19 1.5q19 0 26.5 6.5t15.5 27.5q8 20 33 88t25 75q0 21-34.5 57.5t-34.5 46.5q0 7 5 15 34 73 102 137 56 53 151 101 12 7 22 7 15 0 54-48.5t52-48.5zm-203 530q127 0 243.5-50t200.5-134 134-200.5 50-243.5-50-243.5-134-200.5-200.5-134-243.5-50-243.5 50-200.5 134-134 200.5-50 243.5q0 203 120 368l-79 233 242-77q158 104 345 104zm0-1382q153 0 292.5 60t240.5 161 161 240.5 60 292.5-60 292.5-161 240.5-240.5 161-292.5 60q-195 0-365-94l-417 134 136-405q-108-178-108-389 0-153 60-292.5t161-240.5 240.5-161 292.5-60z"/></svg>
                  </a>
                  {/* LinkedIn */}
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-[var(--color-header-bg)] flex items-center justify-center rounded-sm hover:opacity-80 transition-opacity">
                    <svg width="20" height="20" viewBox="0 0 1792 1792" fill="white"><path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"/></svg>
                  </a>
                  {/* Copy */}
                  <button onClick={handleCopyLink} className="w-11 h-11 bg-[var(--color-header-bg)] flex items-center justify-center rounded-sm hover:opacity-80 transition-opacity">
                    <svg width="20" height="20" viewBox="0 0 1792 1792" fill="white"><path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar (Right) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="sticky top-24">
              <h3 className="text-[20px] font-bold text-[var(--color-text-dark)] mb-6 pb-2 border-b-2 border-[var(--color-light-blue)] inline-block">
                Most Popular Insights
              </h3>
              <div className="space-y-8">
                {popularInsights.map(pop => (
                  <a key={pop.id} href={`/market-insights/${pop.slug}`} className="group flex flex-col">
                    <span className="text-[12px] font-bold text-[var(--color-light-blue)] uppercase tracking-wider mb-2">
                      {pop.type}
                    </span>
                    <h4 className="text-[16px] font-bold text-[var(--color-text-dark)] group-hover:text-[var(--color-light-blue)] transition-colors line-clamp-2 leading-snug">
                      {pop.title}
                    </h4>
                    <p className="text-[13px] text-gray-400 mt-2">
                      {new Date(pop.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
                    </p>
                    <div className="w-full h-px bg-gray-100 mt-6 group-last:hidden"></div>
                  </a>
                ))}
              </div>

              {/* Newsletter / Banner Placeholder in Sidebar if needed */}
              <div className="mt-12 p-8 bg-[var(--color-header-bg)] rounded-sm text-center">
                <h4 className="text-white text-lg font-bold mb-4">Stay Ahead with Market Insights</h4>
                <p className="text-gray-300 text-sm mb-6">Get the latest chemical trends delivered to your inbox.</p>
                <a href="#newsletter" className="block w-full py-3 bg-[var(--color-light-blue)] text-white font-bold rounded-full hover:bg-white hover:text-[var(--color-light-blue)] transition-all">
                  Subscribe Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
