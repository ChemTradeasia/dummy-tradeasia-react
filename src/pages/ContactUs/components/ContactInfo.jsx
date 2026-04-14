import React from 'react';
import { EmailIcon, WhatsAppIcon } from '../../../components/icons';

/**
 * ContactInfo
 * Displays the contact details and interactive cards for reaching out.
 */
export default function ContactInfo() {
  const handleWhatsAppClick = () => {
    // Standard WhatsApp link with a default message
    window.open('https://wa.me/6562276365?text=Hello%20Tradeasia%20International,%20I%20would%20like%20to%20inquire%20about...', '_blank');
  };

  return (
    <div className="flex flex-col space-y-8">
      {/* Header Section */}
      <div className="space-y-4">
        <h2 className="text-[#354FAE] text-3xl font-bold leading-tight">
          Let's Get In Touch
        </h2>
        <p className="text-[#4A4A4A] text-[16px] leading-relaxed">
          The Chemical and Commodity Supply Chain is dynamic, complex, and evolving. Please feel free to reach out to us for any inquiries.
        </p>
      </div>

      {/* Address Section */}
      <div className="pt-4 border-t border-gray-200">
        <h3 className="text-[#354FAE] text-xl font-semibold mb-2">Tradeasia International Pte. Ltd</h3>
        <address className="not-italic text-[#4A4A4A] text-[16px] leading-[1.8]">
          Keck Seng Tower<br />
          133 Cecil Street #12-03<br />
          Singapore, Republic of Singapore, 069535
        </address>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 gap-4 pt-4">
        {/* Email Card */}
        <div className="flex items-center p-5 bg-white border-2 border-[#E5E7E9] rounded-2xl shadow-sm transition-all hover:shadow-md group">
          <div className="flex-shrink-0">
            <EmailIcon className="w-12 h-12" />
          </div>
          <div className="ml-5">
            <h5 className="text-[#354FAE] text-[14px] font-medium uppercase tracking-wider">Email Us</h5>
            <a 
              href="mailto:contact@chemtradeasia.com" 
              className="text-[#0A205C] text-[18px] font-semibold hover:text-[#354FAE] transition-colors"
            >
              contact@chemtradeasia.com
            </a>
          </div>
        </div>

        {/* WhatsApp Card */}
        <div 
          onClick={handleWhatsAppClick}
          className="flex items-center p-5 bg-white border-2 border-[#E5E7E9] rounded-2xl shadow-sm cursor-pointer transition-all hover:shadow-md group"
        >
          <div className="flex-shrink-0">
            <WhatsAppIcon className="w-12 h-12" />
          </div>
          <div className="ml-5">
            <h5 className="text-[#4CAF50] text-[14px] font-medium uppercase tracking-wider">WhatsApp</h5>
            <span className="text-[#0A205C] text-[18px] font-semibold group-hover:text-[#4CAF50] transition-colors">
              Chat with our team
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
