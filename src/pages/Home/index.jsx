import { useState, useEffect } from 'react';
import { fetchApi } from '../../services/api';
import SEO from '../../components/SEO';
import HeroBanner from './HeroBanner';
import FeatureCards from './FeatureCards';
import About from './About';
import TopProduct from './TopProduct';
import ManufacturingProcess from './ManufacturingProcess';
import ProductApplications from './ProductApplications';
import SupplyChain from './SupplyChain';
import MarketInsight from './MarketInsight';

export default function HomePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHomepageData = async () => {
      try {
        const response = await fetchApi('/home/activities');
        if (response.success) {
          setData(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch homepage data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadHomepageData();
  }, []);

  return (
    <>
      {/* Dynamic SEO tags based on API Response */}
      {data?.meta && <SEO meta={data.meta} />}
      
      <HeroBanner />
      <FeatureCards />
      <About />
      <TopProduct />
      <ManufacturingProcess />
      <ProductApplications />
      <SupplyChain />
      
      {/* Passing latest_market_insights downwards for future use */}
      <MarketInsight data={data?.latest_market_insights || []} />
    </>
  );
}
