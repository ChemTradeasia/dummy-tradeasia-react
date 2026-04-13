import React from 'react';
import { VisionIcon, MissionIcon } from '../../components/icons/AboutUs';

export default function VisionMission() {
  return (
    <section className="py-16 bg-[#f8faff]">
      <div className="container text-center">
        <h2 className="text-[var(--color-text-dark)] text-3xl md:text-4xl font-bold mb-12">Vision & Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="text-[var(--color-header-bg)] mb-6">
              <VisionIcon className="w-16 h-16" />
            </div>
            <h3 className="text-[var(--color-text-dark)] text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-[var(--color-gray-text)] leading-relaxed max-w-sm">
              To be a reliable and trustworthy partner in the global supply chain of raw materials
            </p>
          </div>
          
          {/* Mission */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="text-[var(--color-header-bg)] mb-6">
              <MissionIcon className="w-16 h-16" />
            </div>
            <h3 className="text-[var(--color-text-dark)] text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-[var(--color-gray-text)] leading-relaxed max-w-sm">
              To supply good quality products and services delivered using effective Supply Chain Solutions while providing profitable and sustainable growth to all our stakeholders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
