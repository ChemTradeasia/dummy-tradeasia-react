import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumb from '../../components/common/Breadcrumb';
import PageBanner from '../../components/common/PageBanner';

// ─── FAQ data ─────────────────────────────────────────────────────────────────
const faqCategories = [
  {
    category: 'Orders',
    items: [
      {
        question: 'How do I place an order with Tradeasia?',
        answer: `To place an order, customers must first log in or have an active Tradeasia account. Once logged in, you can submit a Request for Quotation (RFQ) through the Contact Us page. After the quotation is confirmed, our sales team will assist you with the order process. For account or login assistance, please contact us at <a href="mailto:cs@tradeasia.com" class="text-[#354fae] underline">cs@tradeasia.com</a> or via <a href="https://wa.me/6281519664683" class="text-[#354fae] underline">WhatsApp</a>.`,
      },
      {
        question: 'How can I track my order?',
        answer: `Once your order is shipped, we'll send you a confirmation email with a Bill of Lading, tracking number, and shipment details. If you need further assistance, feel free to reach out to us at <a href="https://wa.me/6281519664683" class="text-[#354fae] underline">(+62) 815-1966-4683</a> or email <a href="mailto:cs@tradeasia.com" class="text-[#354fae] underline">cs@tradeasia.com</a>.`,
      },
      {
        question: 'Can I modify or cancel my order after it has been placed?',
        answer: `Order modifications or cancellations may be possible depending on the stage of fulfillment. Please contact our sales team immediately at <a href="mailto:cs@tradeasia.com" class="text-[#354fae] underline">cs@tradeasia.com</a> or <a href="https://wa.me/6281519664683" class="text-[#354fae] underline">(+62) 815-1966-4683</a> to request changes.`,
      },
    ],
  },
  {
    category: 'Payments',
    items: [
      {
        question: 'How do I pay my invoice?',
        answer: `Tradeasia supports several payment options including Letter of Credit, Telegraphic Transfer and Documentary Collection through bank. If you have questions about how your payment method is set up or need assistance with invoicing procedures, please get in touch with our Credit Team at <a href="https://wa.me/6281519664683" class="text-[#354fae] underline">(+62) 815-1966-4683</a> or <a href="mailto:cs@tradeasia.com" class="text-[#354fae] underline">cs@tradeasia.com</a>.`,
      },
      {
        question: 'What currencies does Tradeasia accept?',
        answer: `Tradeasia primarily transacts in USD. Please contact our Finance Team at <a href="mailto:cs@tradeasia.com" class="text-[#354fae] underline">cs@tradeasia.com</a> for specific currency arrangements.`,
      },
    ],
  },
  {
    category: 'Shipping & Delivery',
    items: [
      {
        question: 'What shipping methods does Tradeasia use?',
        answer: `We ship via sea freight (FCL/LCL), air freight, and land transport depending on the product and destination. Our logistics team will advise the best option for your order.`,
      },
      {
        question: 'How do I get the Certificate of Analysis (COA) for my order?',
        answer: `A Certificate of Analysis (COA) is provided with every shipment. We can also email the COA automatically once your order has shipped. Let your representative or support specialist know if you'd like to enable this service.`,
      },
    ],
  },
  {
    category: 'Account & Support',
    items: [
      {
        question: 'How do I submit a help request?',
        answer: `You can contact us at <a href="https://wa.me/6281519664683" class="text-[#354fae] underline">(+62) 815-1966-4683</a> or <a href="mailto:cs@tradeasia.com" class="text-[#354fae] underline">cs@tradeasia.com</a>.`,
      },
      {
        question: 'How can I request a new quote?',
        answer: `You can request a quote by chatting live with our Sales Team during regular business hours or you can submit your request using our online inquiry form.`,
      },
      {
        question: 'How do I create a Tradeasia account?',
        answer: `To create an account, visit our website and click on the Register button. Fill in your company details and submit. Our team will review and activate your account within 1–2 business days.`,
      },
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function FaqPage() {
  return (
    <div className="flex flex-col w-full">
      <SEO meta={{
        title: 'FAQ | Tradeasia International',
        description: 'Find answers to the most frequently asked questions about Tradeasia products, orders, payments, and shipping.',
        keywords: 'faq, frequently asked questions, tradeasia, help, support',
      }} />

      <PageBanner
        title="Frequently Asked Questions"
        backgroundImage="https://cdn.chemtradeasia.com/product-websites/banner/faq-bn.webp"
      />
      <Breadcrumb items={[{ label: 'FAQ' }]} />

    </div>
  );
}
