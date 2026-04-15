import { useState } from 'react';
import { LOCATIONS } from '../../../constants/locations';
import { EmailIcon, PhoneIcon, AngleDownIcon } from '../../../components/icons';


export default function LocationSelectorMobile() {
  const [selectedSlug, setSelectedSlug] = useState(LOCATIONS[0].slug);
  
  const currentLocation = LOCATIONS.find(loc => loc.slug === selectedSlug) || LOCATIONS[0];

  return (
    <div className="md:hidden space-y-4">
      {/* Dropdown Selector */}
      <div className="relative">
        <select 
          value={selectedSlug}
          onChange={(e) => setSelectedSlug(e.target.value)}
          className="w-full bg-[var(--color-header-bg)] text-white text-[14px] font-medium px-4 py-3 rounded-full appearance-none outline-none focus:ring-2 focus:ring-[var(--color-light-blue)] cursor-pointer"
        >
          {LOCATIONS.map(loc => (
            <option key={loc.id} value={loc.slug} className="bg-white text-[var(--color-text-dark)]">
              {loc.country}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
          <AngleDownIcon className="w-5 h-5" />
        </div>
      </div>

      {/* Selected Location Card */}
      <article className="bg-white border-2 border-[#e5e7e9] p-7 space-y-1">
        <div className="">
          <h6 className="text-[var(--color-text-dark)] text-[14px] font-semibold m-0">
            {currentLocation.city}, {currentLocation.country}
          </h6>
        </div>

        {/* Address Lines */}
        <div className="space-y-0 mb-5">
          <p className="text-[var(--color-text-dark)] text-[14px] m-0">{currentLocation.address1}</p>
          <p className="text-[var(--color-text-dark)] text-[14px] m-0">{currentLocation.address2}</p>
          <p className="text-[var(--color-text-dark)] text-[14px] m-0">{currentLocation.address3}</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <EmailIcon className="w-12 h-12" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[var(--color-text-dark)] font-semibold text-[14px]">Email Address</span>
              <a 
                href={`mailto:${currentLocation.email}`} 
                className="text-[var(--color-text-dark)] text-[14px] break-all"
              >
                {currentLocation.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <PhoneIcon className="w-12 h-12" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[var(--color-text-dark)] font-semibold text-[14px]">Phone Number</span>
              <a 
                href={`tel:${currentLocation.tel1}`} 
                className="text-[var(--color-text-dark)] text-[14px]"
              >
                {currentLocation.phone1}
              </a>
              {currentLocation.phone2 && (
                <a 
                  href={`tel:${currentLocation.tel2}`} 
                  className="text-[var(--color-text-dark)] text-[14px]"
                >
                  {currentLocation.phone2}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Map View */}
        <div className="aspect-video w-full border-2 mt-5 border-[#e5e7e9]">
          <iframe 
            src={currentLocation.maps} 
            title={`Map of ${currentLocation.city}`}
            width="100%" 
            height="100%" 
            frameBorder="0" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="block"
          ></iframe>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <a 
            href={currentLocation.website}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#6f96d1] text text-white text-center py-3 rounded-full font-semibold border-2 border-[#6f96d1] hover:bg-white hover:text-[#6f96d1] transition-all"
          >
            See Locations
          </a>
        </div>
      </article>
    </div>
  );
}
