import { EmailIcon} from '../../../components/icons';

export default function ContactInfo() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/6562276365?text=Hello%20Tradeasia%20International,%20I%20would%20like%20to%20inquire%20about...', '_blank');
  };

  return (
    <div className="flex flex-col space-y-4 lg:ml-20">
      {/* Header Section */}
      <div className="space-y-4">
        <h2 className="text-[var(--color-text-dark)] text-[36px] font-semibold leading-tight">
          Let's get in touch
        </h2>
        <p className="text-[var(--color-gray-text)] text-[18px] leading-relaxed">
          Feel free to drop us a message by filling in the form. Our representative shall contact you in due course.
        </p>
      </div>

      {/* Address Section */}
      <div className="">
        <h3 className="text-[var(--color-text-dark)] text-[18px] font-semibold leading-normal">Tradeasia International Pte. Ltd</h3>
        <address className="not-italic text-[var(--color-gray-text)] text-[18px] leading-[1.8]">
          Keck Seng Tower<br />
          133 Cecil Street #12-03<br />
          Singapore, Republic of Singapore
        </address>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 gap-4 pt-4">
        {/* Email Card */}
        <div className="flex items-center px-5 py-7 bg-white border-2 border-[var(--color-light-blue)] transition-all hover:shadow-md group">
          <div className="flex-shrink-0">
            <EmailIcon className="w-12 h-12" />
          </div>
          <div className="ml-5">
            <h5 className="text-[var(--color-text-dark)] text-[16px] font-semibold leading-normal">Email Address</h5>
            <a 
              href="mailto:contact@chemtradeasia.com" 
              className="text-[var(--color-gray-text)] text-[16px] font-normal hover:text-[#354FAE] transition-colors"
            >
              contact@chemtradeasia.com
            </a>
          </div>
        </div>

        {/* WhatsApp Card */}
        <a 
          href="https://wa.me/6562276365?text=Hello%20Tradeasia%20International,%20I%20would%20like%20to%20inquire%20about..."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-5 py-6 bg-white border-2 border-[var(--color-light-blue)] transition-all hover:shadow-md group cursor-pointer"
        >
          <div className="flex-shrink-0">
            <img 
              src="https://chemtradea.chemtradeasia.com/chemtradeasia-new/icon/wa-contact.webp" 
              alt="Whatsapp" 
              loading="lazy" 
              className="w-16 h-16 object-contain"
            />
          </div>
          <div className="ml-1.5">
            <span className="text-[var(--color-text-dark)] text-[16px] font-semibold group-hover:text-[#4CAF50] transition-colors">
              Contact Us on Whatsapp
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
