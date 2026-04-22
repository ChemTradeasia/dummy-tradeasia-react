import React, { useMemo } from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';
import { MARKET_INSIGHTS } from '../../constants/marketInsights';
import SEO from '../../components/SEO';
import NewsletterSection from './components/NewsletterSection';
import SectionHeader from './components/SectionHeader';
import SidebarItem from './components/SidebarItem';
import ArticleCard from './components/ArticleCard';

export default function MarketInsightDetailPage({ params }) {
  const { slug } = params || {};

  const article = useMemo(() => {
    return MARKET_INSIGHTS.find(a => a.slug === slug);
  }, [slug]);

  const popularInsights = useMemo(() => {
    return [...MARKET_INSIGHTS]
      .sort((a, b) => (b.clickCount || 0) - (a.clickCount || 0))
      .slice(0, 5);
  }, [slug]);

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return MARKET_INSIGHTS
      .filter(item => item.id !== article.id && item.type === article.type)
      .slice(0, 3);
  }, [article, slug]);

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
    <div className="flex flex-col w-full pb-0">
      <SEO meta={{
        title: `${article.title} | Market Insight`,
        description: article.excerpt,
      }} />

      <Breadcrumb items={[
        { label: 'Market Insight', href: '/market-insights' },
        { label: article.title }
      ]} />

      <div className="mt-[80px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 border-b-2 border-gray-200">
            {/* Main Content (Left) */}
            <div className="md:col-span-8">
              <div className="left-sect">
                <p className="tag-insg text-[var(--color-light-blue)] text-[16px] flex items-center gap-1 mb-5">
                  {article.type}
                  <span className="text-[var(--color-light-blue)]">|</span>
                  <span className="text-[var(--color-light-blue)]">{new Date(article.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                </p>

                <h1 className="title-text text-[32px] md:text-[44px] text-[var(--color-text-dark)] leading-normal mb-2">
                  {article.title}
                </h1>

                <div className="mb-8 overflow-hidden">
                  <img
                    src={article.image}
                    alt={`Article Banner of ${article.title}`}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {article.blog_table_of_content && (
                  <div className="mb-10">
                    <h4 className="text-[20px] font-semibold text-[var(--color-text-dark)] mb-3">
                      Table of Content
                    </h4>

                    <div
                      className="
                        prose prose-sm max-w-none space-y-3
                        [&_ul]:list-disc
                        [&_ul]:pl-7.5
                        [&_ol]:list-decimal
                        [&_ol]:pl-6
                        [&_li]:text-[var(--color-light-blue)]
                        [&_p]:text-[var(--color-light-blue)]
                        [&_p]:font-medium
                      "
                      dangerouslySetInnerHTML={{ __html: article.blog_table_of_content }}
                    />
                  </div>
                )}

                <div className="relative">
                  <div
                    className="
                      prose prose-lg max-w-none text-gray-700 leading-relaxed
                      [&_h2]:text-[20px] [&_h2]:font-semibold [&_h2]:text-[var(--color-text-dark)] [&_h2]:mb-1
                      [&_h3]:text-[20px] [&_h3]:font-semibold [&_h3]:mt-8 [&_h2]:leading-[32px] [&_h3]:leading-[32px]
                      prose-p:mb-10
                    "
                    dangerouslySetInnerHTML={{ __html: article.blog_text || article.excerpt }}
                  />

                  {/* Pricing Indices Call to Action (Laravel parity) */}
                  {article.type === 'Pricing Indices' && (
                    <div className="reading-lock mt-12 p-10 bg-gray-50 border-2 border-dashed border-gray-200 text-center rounded-xl">
                      <div className="login-card">
                        <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-2">Continue reading this article</h3>
                        <p className="text-gray-500 mb-6">To view and access the complete article, you are required to sign in to your account first.</p>
                        <button className="px-10 py-3 bg-[var(--color-light-blue)] text-white font-bold rounded-full hover:bg-[var(--color-text-dark)] transition-all">
                          Sign In
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Search Tags Container */}
                {article.tags && (
                  <div className="bg-[#fefaef] mt-10 px-5 py-7">
                    <div className="">
                      <h3 className="text-[20px] font-semibold text-[var(--color-text-dark)] mb-4">Tags</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {article.tags.map(tag => (
                        <a
                          key={tag}
                          href={`/search-result?tab=marketInsight&result_search=${tag.toLowerCase().replace(/\s+/g, '-')}`}
                          className="px-4 py-1.5 bg-white border border-[var(--color-light-blue)] text-[var(--color-light-blue)] text-[16px] rounded-full hover:bg-[var(--color-light-blue)] hover:text-white transition-all"
                        >
                          {tag}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Social Share Section */}
                <div className="mt-8 mb-20 flex flex-col md:flex-row items-center gap-2">
                  <div className="">
                    <h4 className="text-[20px] font-semibold text-[var(--color-text-dark)]">Share This Post:</h4>
                  </div>
                  <div className="flex gap-3">
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="nofollow noopener" className="group w-11 h-11 bg-[var(--color-light-blue)] border-2 border-[var(--color-light-blue)] flex items-center justify-center rounded-full hover:bg-white transition-all">
                      <svg width="20" height="20" viewBox="0 0 1792 1792" className="fill-white group-hover:fill-[var(--color-light-blue)] transition-colors"><path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z" /></svg>
                    </a>
                    <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(article.title + ' ' + window.location.href)}`} target="_blank" rel="nofollow noopener" className="group w-11 h-11 bg-[var(--color-light-blue)] border-2 border-[var(--color-light-blue)] flex items-center justify-center rounded-full hover:bg-white transition-all">
                      <svg width="24" height="24" viewBox="0 0 1792 1792" className="fill-white group-hover:fill-[var(--color-light-blue)] transition-colors"><path d="M1113 974q13 0 97.5 44t89.5 53q2 5 2 15 0 33-17 76-16 39-71 65.5t-102 26.5q-57 0-190-62-98-45-170-118t-148-185q-72-107-71-194v-8q3-91 74-158 24-22 52-22 6 0 18 1.5t19 1.5q19 0 26.5 6.5t15.5 27.5q8 20 33 88t25 75q0 21-34.5 57.5t-34.5 46.5q0 7 5 15 34 73 102 137 56 53 151 101 12 7 22 7 15 0 54-48.5t52-48.5zm-203 530q127 0 243.5-50t200.5-134 134-200.5 50-243.5-50-243.5-134-200.5-200.5-134-243.5-50-243.5 50-200.5 134-134 200.5-50 243.5q0 203 120 368l-79 233 242-77q158 104 345 104zm0-1382q153 0 292.5 60t240.5 161 161 240.5 60 292.5-60 292.5-161 240.5-240.5 161-292.5 60q-195 0-365-94l-417 134 136-405q-108-178-108-389 0-153 60-292.5t161-240.5 240.5-161 292.5-60z" /></svg>
                    </a>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="nofollow noopener" className="group w-11 h-11 bg-[var(--color-light-blue)] border-2 border-[var(--color-light-blue)] flex items-center justify-center rounded-full hover:bg-white transition-all">
                      <svg width="20" height="20" viewBox="0 0 1792 1792" className="fill-white group-hover:fill-[var(--color-light-blue)] transition-colors"><path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z" /></svg>
                    </a>
                    <button onClick={handleCopyLink} className="group w-11 h-11 bg-[var(--color-light-blue)] border-2 border-[var(--color-light-blue)] flex items-center justify-center rounded-full hover:bg-white transition-all">
                      <svg width="20" height="20" viewBox="0 0 1792 1792" className="fill-white group-hover:fill-[var(--color-light-blue)] transition-colors"><path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5-3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204-84l208 208q84 84 84 204z" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar (Right) */}
            <div className="md:col-span-4 flex flex-col pt-10 md:pt-0">
              <div className="sticky top-27.5 bg-white">
                <SectionHeader 
                  title={article.type === 'Pricing Indices' ? 'Explore Popular Pricing Indices' : 'Most Popular Insights'} 
                />
                <div className="flex flex-col">
                  {popularInsights.map((pop, index) => (
                    <SidebarItem 
                      key={pop.id} 
                      article={pop} 
                      showBorder={index !== popularInsights.length - 1} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED INSIGHTS SECTION */}
        {relatedArticles.length > 0 && (
          <div className="bg-gray-50/50 py-20 border-t border-gray-100">
            <div className="container mx-auto">
              <SectionHeader title={`Related ${article.type}`} className="mb-10" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map(rel => (
                  <ArticleCard key={rel.id} article={rel} />
                ))}
              </div>
            </div>
          </div>
        )}

        <NewsletterSection />
      </div>
    </div>
  );
}
