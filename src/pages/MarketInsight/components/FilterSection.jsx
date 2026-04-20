import React from 'react';
import { INSIGHT_CATEGORIES } from '../../../constants/marketInsights';
import { SearchIcon, AngleDownIcon, CloseIcon } from '../../../components/icons';

export default function FilterSection({
  searchKeyword,
  setSearchKeyword,
  selectedCategories,
  toggleCategory,
  sortOrder,
  setSortOrder,
  isCategoryOpen,
  setIsCategoryOpen,
  clearFilters,
  dropdownRef
}) {
  return (
    <div className="mb-10 mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-[18px] md:text-[32px] font-semibold text-[var(--color-text-dark)]">
          Explore Market Trends and Industry Intelligence
        </h2>
        <div className="flex justify-center -mt-2.5 mb-7">
          <div className="bg-[#6f96d1] h-[5px] w-[100px] rounded-full"></div>
        </div>
        <p className="max-w-[1100px] mx-auto text-gray-500 text-[14px] leading-relaxed md:leading-normal md:text-[16px]">
          Gain a deeper understanding of the factors shaping chemical markets—from demand trends and application insights to supply movements, regulations, pricing, and market analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mt-19 pb-8">
        {/* Filter Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <label className="block text-[14px] md:text-[16px] text-[var(--color-text-dark)] mb-4">Filter by :</label>
          <button 
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="w-full bg-white px-6 py-2 md:py-3 rounded-full border-2 border-gray-200 flex justify-between items-center text-[14px] md:text-[16px] text-gray-600 hover:border-[var(--color-light-blue)] transition-all min-h-[40px] md:min-h-[50px]"
          >
            <span className="truncate">
              {selectedCategories.length > 0 ? `${selectedCategories.length} Categories` : 'Select Publication Type'}
            </span>
            <AngleDownIcon className={`w-4 h-4 text-[#354fae] transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isCategoryOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 z-50">
              <div className="space-y-2.5">
                {INSIGHT_CATEGORIES.map(cat => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 rounded border-gray-300 text-[var(--color-light-blue)] focus:ring-[var(--color-light-blue)]"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                    />
                    <span className="text-[16px] text-[var(--color-text-dark)] group-hover:text-[var(--color-text-dark)] transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <label className="block text-[14px] md:text-[16px] text-[var(--color-text-dark)] mb-4">Sort by :</label>
          <div className="relative">
            <select 
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full bg-white px-6 py-2 md:py-3 rounded-full border-2 border-gray-200 text-[14px] md:text-[16px] text-gray-600 focus:ring-0 focus:outline-none appearance-none cursor-pointer pr-12 min-h-[40px] md:min-h-[50px]"
            >
              <option value="popular">Most Popular</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
              <AngleDownIcon className="w-4 h-4 text-[#354fae]" />
            </div>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative">
          <label className="block text-[14px] md:text-[16px] text-[var(--color-text-dark)] mb-4">Search :</label>
          <div className="relative">
            <input 
              type="text"
              placeholder="Keyword"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="w-full bg-white px-5 py-2 md:py-3 rounded-full border-2 border-gray-200 text-[14px] md:text-[16px] text-gray-600 focus:ring-2 focus:ring-[var(--color-light-blue)] focus:outline-none transition-all placeholder:text-gray-400 min-h-[40px] md:min-h-[50px]"
            />
            {searchKeyword && (
              <button 
                onClick={() => setSearchKeyword('')}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 hover:text-[var(--color-header-bg)] transition-colors"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Active Filters */}
      {(selectedCategories.length > 0 || searchKeyword) && (
        <div className="flex flex-wrap items-center gap-3">
          {selectedCategories.map(cat => (
            <span key={cat} className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#fefaef] rounded-full text-[14px] text-[var(--color-text-dark)] shadow-sm">
              {cat}
              <button onClick={() => toggleCategory(cat)} className="text-[20px]">-</button>
            </span>
          ))}
          {searchKeyword && (
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-[var(--color-text-dark)] shadow-sm">
              Search: "{searchKeyword}"
              <button onClick={() => setSearchKeyword('')} className="hover:text-red-500"><CloseIcon className="w-3 h-3" /></button>
            </span>
          )}
          <button onClick={clearFilters} className="text-[14px] text-[var(--color-light-blue)]">Clear All</button>
        </div>
      )}
    </div>
  );
}
