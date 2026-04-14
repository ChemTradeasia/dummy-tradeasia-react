// import React from 'react';
import { AngleRightIcon } from '../../components/icons';

export default function AboutVideo() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <h3 className="text-[var(--color-text-dark)] text-[18px] md:text-[44px] leading-[32px] md:leading-[66px] font-semibold mb-[20px]">
              We are Tradeasia
            </h3>
            <p className="text-[var(--color-gray-text)] text-[14px] md:text-[16px] leading-[25px] md:leading-[29px] mb-[20px]">
              Discover how Tradeasia International supports manufacturing by supplying soda ash dense with consistent quality, reliable logistics, and dependable solutions.
            </p>
            <a 
              href="https://tradeasia.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[14px] md:text-[16px] leading-[25px] md:leading-[29px] gap-2 bg-[var(--color-light-blue)] border-2 border-[var(--color-light-blue)] text-white md:px-8 md:py-3 px-4 py-1 rounded-full font-medium hover:bg-white hover:text-[var(--color-light-blue)] transition-all group"
            >
              Go To Company Website
              <AngleRightIcon className="w-5 h-5" stroke="currentColor" />
            </a>
          </div>
          
          <div className="md:col-span-1 hidden md:block"></div>
          
          <div className="md:col-span-6">
            <div className="relative aspect-video overflow-hidden">
              <iframe 
                src="https://www.youtube.com/embed/wVjiIWLGdJ8?si=Zfrgq2PVsfD0J7Ug" 
                title="Tradeasia Intro Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
