import React from 'react';

export default function AboutBanner() {
  return (
    <div 
      className="relative w-full py-20 md:py-33 sm:py-28 bg-cover bg-center"
      style={{ backgroundImage: "url('https://cdn.chemtradeasia.com/product-websites/banner/about-us-bn.webp')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#354fae] via-[#123c6980] to-transparent md:w-full" />
      <div className="container relative z-10">
        <h1 className="text-white text-[30px] md:text-[50px] sm:text-[30px] font-semibold">About Us</h1>
      </div>
    </div>
  );
}
