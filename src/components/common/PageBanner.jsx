import React from 'react';

export default function PageBanner({ 
  title, 
  backgroundImage, 
  bgClass = "bg-cover bg-center" 
}) {
  return (
    <div 
      className={`relative w-full py-20 md:py-33 sm:py-28 ${bgClass}`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#354fae] via-[#123c6980] to-transparent md:w-full" />
      <div className="container relative z-10">
        <h1 className="text-white text-[30px] md:text-[50px] sm:text-[30px] font-semibold">{title}</h1>
      </div>
    </div>
  );
}
