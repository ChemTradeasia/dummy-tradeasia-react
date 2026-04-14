import React from 'react';
import SEO from '../../components/SEO';
import PageBanner from '../../components/common/PageBanner';
import Breadcrumb from '../../components/common/Breadcrumb';
import LocationMap from './components/LocationMap';
import LocationCard from './components/LocationCard';
import LocationSelectorMobile from './components/LocationSelectorMobile';
import { LOCATIONS } from '../../constants/locations';

export default function OurLocationPage() {
  return (
    <div className="flex flex-col w-full pb-16 md:pb-24">
      {/* Dynamic SEO tags */}
      <SEO meta={{ 
        title: "Our Location | Tradeasia International - Connected Globally",
        description: "Explore Tradeasia International's global presence. Find our offices in Singapore, Indonesia, China, and across the globe.",
        keywords: "tradeasia locations, global offices, chemical distribution network, Singapore office, Indonesia office"
      }} />

      {/* Hero Banner */}
      <PageBanner 
        title="Our Location" 
        backgroundImage="https://cdn.chemtradeasia.com/product-websites/banner/our-location-bn.webp" 
      />

      {/* Breadcrumb Path */}
      <Breadcrumb items={[{ label: 'Our Location' }]} />

      <main className="container pt-12 md:pt-20">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[var(--color-text-dark)] text-[22px] md:text-[44px] font-semibold leading-tight max-w-[800px] mx-auto">
            Tradeasia Is Available Practically Throughout The World
          </h2>
        </div>

        {/* --- Desktop View --- */}
        <section className="hidden md:block">
          <LocationMap />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {LOCATIONS.map((loc) => (
              <LocationCard key={loc.id} location={loc} />
            ))}
          </div>
        </section>

        {/* --- Mobile View --- */}
        <section className="md:hidden">
          <div className="mb-8">
            <img 
              src="https://cdn.chemtradeasia.com/product-websites/soda-ash-dense/our-loc-map-mobile.webp" 
              alt="Globe Map Mobile"
              className="w-full h-auto rounded-xl shadow-sm"
            />
          </div>
          
          <LocationSelectorMobile />
        </section>
      </main>
    </div>
  );
}
