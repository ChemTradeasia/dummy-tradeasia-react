import SEO from '../../components/SEO';
import Breadcrumb from '../../components/common/Breadcrumb';
import PageBanner from '../../components/common/PageBanner';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

/**
 * ContactUsPage
 * Migration of the Laravel Contact Us page featuring a dynamic form and office information.
 */
export default function ContactUsPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      <SEO meta={{ 
        title: "Contact Us | Tradeasia International - Connected Globally",
        description: "Get in touch with Tradeasia International for global chemical supply chain solutions. Reach us via our inquiry form, email, or WhatsApp.",
        keywords: "contact tradeasia, chemical inquiry, RFQ, global chemical supplier"
      }} />

      <PageBanner 
        title="Contact Us" 
        backgroundImage="https://cdn.chemtradeasia.com/product-websites/banner/contact-us-bn.webp" 
      />
      
      <div className="hidden md:block">
        <Breadcrumb items={[{ label: 'Contact Us' }]} />
      </div>

      <section className="container mx-auto mt-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-13.5">
          <div className="w-full lg:w-[60%]">
            <ContactForm />
          </div>
          <div className="w-full lg:w-[40%]">
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  );
}
