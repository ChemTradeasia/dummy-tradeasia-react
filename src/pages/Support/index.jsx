import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumb from '../../components/common/Breadcrumb';
import PageBanner from '../../components/common/PageBanner';
import SupportCard from './components/SupportCard';
import PopularQuestions from './components/PopularQuestions';
import CtaSection from './components/CtaSection';
import {
  OrdersIcon, OrdersBlurIcon,
  ProductSupportIcon, ProductSupportBlurIcon,
  BillPaymentIcon, BillPaymentBlurIcon,
  ReturnIssuesIcon, ReturnIssuesBlurIcon,
  EmergencyContactIcon, EmergencyContactBlurIcon,
  SampleRequestsIcon, SampleRequestsBlurIcon,
  ProductDocumentsIcon, ProductDocumentsBlurIcon,
  NewCustomerIcon, NewCustomerBlurIcon,
  ShippingHandlingIcon, ShippingHandlingBlurIcon,
  AccountInfoIcon, AccountInfoBlurIcon,
} from '../../components/icons/Support';

// ─── Category cards data ──────────────────────────────────────────────────────
const supportCategories = [
  {
    title: 'Orders',
    href: '/customer-support/order-questions',
    icon: <OrdersIcon />,
    blurIcon: <OrdersBlurIcon />,
  },
  {
    title: 'Product Support',
    href: '/customer-support/product-support-questions',
    icon: <ProductSupportIcon />,
    blurIcon: <ProductSupportBlurIcon />,
  },
  {
    title: 'Bill Payment',
    href: '/customer-support/bill-payment-questions',
    icon: <BillPaymentIcon />,
    blurIcon: <BillPaymentBlurIcon />,
  },
  {
    title: 'Return & Issues',
    href: '/customer-support/returns-issues-questions',
    icon: <ReturnIssuesIcon />,
    blurIcon: <ReturnIssuesBlurIcon />,
  },
  {
    title: 'Emergency Contact',
    href: '/customer-support/emergency-contact-questions',
    icon: <EmergencyContactIcon />,
    blurIcon: <EmergencyContactBlurIcon />,
  },
  {
    title: 'Sample Requests',
    href: '/customer-support/sample-requests-questions',
    icon: <SampleRequestsIcon />,
    blurIcon: <SampleRequestsBlurIcon />,
  },
  {
    title: 'Product Documents',
    href: '/customer-support/product-documents-questions',
    icon: <ProductDocumentsIcon />,
    blurIcon: <ProductDocumentsBlurIcon />,
  },
  {
    title: 'New Customer',
    href: '/customer-support/new-customer-questions',
    icon: <NewCustomerIcon />,
    blurIcon: <NewCustomerBlurIcon />,
  },
  {
    title: 'Shipping & Handling',
    href: '/customer-support/shipping-handling-questions',
    icon: <ShippingHandlingIcon />,
    blurIcon: <ShippingHandlingBlurIcon />,
  },
  {
    title: 'Account Information',
    href: '/customer-support/account-information-questions',
    icon: <AccountInfoIcon />,
    blurIcon: <AccountInfoBlurIcon />,
  },
];

// ─── FAQ data ─────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: 'How do I place an order with Tradeasia?',
    answer: `To place an order, customers must first log in or have an active Tradeasia account. Once logged in, you can submit a Request for Quotation (RFQ) through the Contact Us page. After the quotation is confirmed, our sales team will assist you with the order process. For account or login assistance, please contact us at <a href="mailto:cs@tradeasia.com" class="text-[#354fae] underline">cs@tradeasia.com</a> or via <a href="https://wa.me/6281519664683" class="text-[#354fae] underline">WhatsApp</a>.`,
  },
  {
    question: 'How can I track my order?',
    answer: `Once your order is shipped, we'll send you a confirmation email with a Bill of Lading, tracking number, and shipment details. If you need further assistance, feel free to reach out to us at <a href="https://wa.me/6281519664683" class="text-[#354fae] underline">(+62) 815-1966-4683</a> or email <a href="mailto:cs@tradeasia.com" class="text-[#354fae] underline">cs@tradeasia.com</a>.`,
  },
  {
    question: 'How do I pay my invoice?',
    answer: `Tradeasia supports several payment options including Letter of Credit, Telegraphic Transfer and Documentary Collection through bank. If you have questions about how your payment method is set up or need assistance with invoicing procedures, please get in touch with our Credit Team at <a href="https://wa.me/6281519664683" class="text-[#354fae] underline">(+62) 815-1966-4683</a> or <a href="mailto:cs@tradeasia.com" class="text-[#354fae] underline">cs@tradeasia.com</a>.`,
  },
  {
    question: 'How do I submit a help request?',
    answer: `You can contact us at <a href="https://wa.me/6281519664683" class="text-[#354fae] underline">(+62) 815-1966-4683</a> or <a href="mailto:cs@tradeasia.com" class="text-[#354fae] underline">cs@tradeasia.com</a>.`,
  },
  {
    question: 'How do I get the Certificate of Analysis (COA) for my order?',
    answer: `A Certificate of Analysis (COA) is provided with every shipment. We can also email the COA automatically once your order has shipped. Let your representative or support specialist know if you'd like to enable this service.`,
  },
  {
    question: 'How can I request a new quote?',
    answer: `You can request a quote by chatting live with our Sales Team during regular business hours or you can submit your request using our online inquiry form.`,
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SupportPage() {
  return (
    <div className="flex flex-col w-full">
      <SEO meta={{
        title: 'Customer Support | Tradeasia International',
        description: 'Welcome to Tradeasia International Customer Support. How can we help you?',
        keywords: 'customer support, faq, help center, tradeasia',
      }} />

      <PageBanner
        title="Customer Support"
        backgroundImage="https://cdn.chemtradeasia.com/product-websites/banner/customer-support-bn.webp"
      />
      <Breadcrumb items={[{ label: 'Customer Support' }]} />

      {/* ── Category Cards ──────────────────────────────────────────── */}
      <section className="py-15">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[32px] lg:text-[44px] font-semibold text-[var(--color-text-dark)] lg:mb-3">
              Here to Help You Find What You Need
            </h2>
            <p className="text-[16px] text-[var(--color-gray-text)] max-w-[500px] lg:max-w-[800px] mx-auto">
              Find answers to the most relevant questions across various key areas of our services.
              Whether you're a new customer or an existing customer, the information provided is
              designed to guide you through essential processes and provide the support you need.
            </p>
          </div>

          <div className="flex flex-wrap xl:mx-16">
            {supportCategories.map((cat) => (
              <div key={cat.title} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10">
                <SupportCard
                  title={cat.title}
                  href={cat.href}
                  icon={cat.icon}
                  blurIcon={cat.blurIcon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Most Popular Questions ──────────────────────────────────── */}
      <PopularQuestions
        title="Most Popular Questions"
        description="Here are the top questions users frequently ask. Find clear and concise answers to help you navigate our products, services, and processes with ease."
        items={faqItems}
      />

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <CtaSection
        title="Need More Help?"
        description="We're ready to support you with accurate information and fast responses tailored to your needs."
        buttonText="Contact Us"
        buttonHref="/contact-us"
      />
    </div>
  );
}
