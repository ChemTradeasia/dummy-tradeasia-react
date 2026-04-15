import { useState} from 'react';
import SEO from '../../components/SEO';
import Breadcrumb from '../../components/common/Breadcrumb';
import PageBanner from '../../components/common/PageBanner';
import AboutOverview from './AboutOverview';
import VisionMission from './VisionMission';
import AboutValues from './AboutValues';
import WhyChooseUs from './WhyChooseUs';
import AboutVideo from './AboutVideo';

export default function AboutUsPage() {
  // Local state for future API integration (e.g. /api/about)
  const [data, setData] = useState(null);

  return (
    <div className="flex flex-col w-full">
      {/* Dynamic SEO tags — Use title from Laravel if data is null */}
      <SEO meta={data?.meta || { 
        title: "About Us | Tradeasia International - Connected Globally",
        description: "Tradeasia International is a global trading firm and a top distributor dealing with chemical commodities.",
        keywords: "about tradeasia, chemical distributor, supply chain solutions"
      }} />

      <PageBanner 
        title="About Us" 
        backgroundImage="https://cdn.chemtradeasia.com/product-websites/banner/about-us-bn.webp" 
      />
      <Breadcrumb items={[{ label: 'About Us' }]} />
      
      <AboutOverview />
      <VisionMission />
      <AboutValues />
      <WhyChooseUs />
      <AboutVideo />
    </div>
  );
}
