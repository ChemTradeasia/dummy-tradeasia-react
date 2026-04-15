import { EmailIcon, PhoneIcon } from '../../../components/icons';

export default function LocationCard({ location }) {
  return (
    <div 
      id={`loc-${location.slug}`}
      className="flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
    >
      <div className="bg-[#354fae] p-1 text-center min-h-[90px] flex items-center justify-center">
        <a 
          href={location.website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-90 transition-opacity"
        >
          <h5 className="text-white text-lg md:text-[24px]  font-semibold m-0 lg:leading-[36px]">
            {location.city}, {location.country}
          </h5>
        </a>
      </div>

      <div className="p-5 flex flex-col">
        <div className="lg:mb-6 mb-4">
          <a 
            href={location.maps} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--color-gray-text)] text-base leading-relaxed hover:text-[var(--color-light-blue)] transition-colors block"
          >
            <p className="m-0">{location.address1}</p>
            <p className="m-0">{location.address2}</p>
            <p className="m-0">{location.address3}</p>
          </a>
        </div>

        <div className="space-y-4 mt-auto">
          {/* Email */}
          <div className="flex items-start md:gap-2 lg:gap-4">
            <div className="flex-shrink-0">
              <EmailIcon className="w-11.5 h-11.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[var(--color-text-dark)] font-semibold text-sm md:text-[16px]">Email Address</span>
              <a 
                href={`mailto:${location.email}`} 
                className="text-[var(--color-gray-text)] hover:text-[var(--color-light-blue)] transition-colors break-all"
              >
                {location.email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <PhoneIcon className="w-12 h-12" />
            </div>
            <div className="flex flex-col">
              <span className="text-[var(--color-text-dark)] font-semibold text-sm md:text-[16px]">Phone Number</span>
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                <a 
                  href={`tel:${location.tel1}`} 
                  className="text-[var(--color-gray-text)] hover:text-[var(--color-light-blue)] transition-colors whitespace-nowrap"
                >
                  {location.phone1}
                </a>
                {location.phone2 && (
                  <>
                    <span className="text-gray-300">/</span>
                    <a 
                      href={`tel:${location.tel2}`} 
                      className="text-[var(--color-gray-text)] hover:text-[var(--color-light-blue)] transition-colors whitespace-nowrap"
                    >
                      {location.phone2}
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
