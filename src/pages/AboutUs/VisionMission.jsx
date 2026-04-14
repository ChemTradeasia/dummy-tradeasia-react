import React from 'react';
import { VisionIcon, MissionIcon } from '../../components/icons/AboutUs';

export default function VisionMission() {
  return (
    <section className="sm:py-16 md:py-16">
      <div className="container text-center">
        <h2 className="text-[var(--color-text-dark)] text-[22px] sm:text-[44px] md:text-[44px] font-semibold mb-2 sm:mb-14 md:mb-14">Vision & Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-8 md:gap-8 bg-[#fefaef] sm:py-12 md:py-12">
          {/* Vision */}
          <div className="md:p-10 rounded-2xl flex flex-col items-center md:justify-start">
            <div className="text-[var(--color-text-dark)] sm:mb-6 md:mb-6">
              <VisionIcon className="w-10 h-10 sm:w-15 sm:h-15 md:w-15 md:h-15" />
            </div>
            <h3 className="text-[var(--color-text-dark)] text-[22px] lg:text-[44px] md:text-[32px] font-semibold">Our Vision</h3>
            <p className="text-[var(--color-gray-text)] leading-relaxed max-w-md text-[14px] lg:text-[16px] md:text-[16px]">
              To be a reliable and trustworthy partner in the global supply chain of raw materials
            </p>
          </div>
          
          {/* Mission */}
          <div className="p-10 rounded-2xl flex flex-col items-center">
            <div className="text-[var(--color-text-dark)] mb-6">
              <MissionIcon className="w-10 h-10 sm:w-15 sm:h-15 md:w-15 md:h-15" />
            </div>
            <h3 className="text-[var(--color-text-dark)] text-[22px] lg:text-[44px] md:text-[32px] font-semibold">Our Mission</h3>
            <p className="text-[var(--color-gray-text)] md:leading-relaxed max-w-md text-[14px] lg:text-[16px] md:text-[16px]">
              To supply good quality products and services delivered using effective Supply Chain Solutions while providing profitable and sustainable growth to all our stakeholders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
