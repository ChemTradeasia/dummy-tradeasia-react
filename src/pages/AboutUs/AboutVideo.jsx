// import React from 'react';

export default function AboutVideo() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <h3 className="text-[var(--color-text-dark)] text-3xl md:text-4xl font-bold mb-6">
              We are Tradeasia
            </h3>
            <p className="text-[var(--color-gray-text)] leading-relaxed mb-8">
              Discover how Tradeasia International supports manufacturing by supplying soda ash dense with consistent quality, reliable logistics, and dependable solutions.
            </p>
            <a 
              href="https://tradeasia.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--color-light-blue)] text-white px-8 py-3 rounded-full font-medium hover:bg-[var(--color-header-bg)] transition-all"
            >
              Go To Company Website
              <span className="w-5 h-5 flex items-center justify-center">→</span>
            </a>
          </div>
          
          <div className="md:col-span-1 hidden md:block"></div>
          
          <div className="md:col-span-6">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
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
