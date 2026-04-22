import React from 'react';

export default function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`shadow-md mb-10 transition-colors duration-300 ${isOpen ? 'bg-[#fefaef]' : 'bg-white'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-8 px-10 text-left group"
      >
        <span className="text-[15px] font-semibold text-[var(--color-text-dark)] group-hover:text-[#354fae] transition-colors pr-4">
          {question}
        </span>
        <svg
          width="24" height="24" viewBox="0 0 24 24" fill="none"
          className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15.991C12.2509 15.991 12.5018 15.8952 12.6931 15.704L18.7128 9.68426C19.0957 9.30133 19.0957 8.68048 18.7128 8.2977C18.33 7.91493 17.7093 7.91493 17.3263 8.2977L12 13.6243L6.67371 8.29789C6.29078 7.91511 5.67011 7.91511 5.28737 8.29789C4.90425 8.68066 4.90425 9.30152 5.28737 9.68445L11.307 15.7042C11.4983 15.8954 11.7492 15.991 12 15.991Z"
            fill="#0A205C"
          />
        </svg>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? '500px' : '0px' }}
      >
        <div
          className="pb-5 px-10 text-[16px] text-[var(--color-gray-text)] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </div>
  );
}
