const fs = require('fs');
const content = fs.readFileSync('.gemini/antigravity/brain/b6ae9e52-c3fc-40f4-b222-ab3441d5bfb4/scratch/raw.html', 'utf8');

const items = [];
const itemRegex = /<div class="col-md-6 col-xs-12 col-lg-4 mb-5">([\s\S]*?)<\/div>\s*(?=<div class="col-md-6|<div class="row"|$)/g;

let match;
while ((match = itemRegex.exec(content)) !== null) {
    let block = match[1];

    const blurSvgMatch = block.match(/<div class="img-cs-blur">\s*(<svg[\s\S]*?<\/svg>)\s*<\/div>/);
    const clearSvgMatch = block.match(/<div class="img-cs">\s*(<svg[\s\S]*?<\/svg>)\s*<\/div>/);
    const titleMatch = block.match(/<h4>([^<]+)<\/h4>/);
    const linkMatch = block.match(/<a href="([^"]+)"[^>]*>([^<]+)<\/a>/);

    if (blurSvgMatch && clearSvgMatch && titleMatch && linkMatch) {
        // format SVGs
        let blurSvg = blurSvgMatch[1].replace(/class="/g, 'className="').replace(/clip-path/g, 'clipPath').replace(/fill-opacity/g, 'fillOpacity');
        let clearSvg = clearSvgMatch[1].replace(/class="/g, 'className="').replace(/clip-path/g, 'clipPath').replace(/fill-opacity/g, 'fillOpacity');
        
        let link = linkMatch[1];
        // convert to relative if absolute
        if (link.startsWith('http')) {
            const url = new URL(link);
            link = url.pathname;
        }

        items.push({
            title: titleMatch[1].trim(),
            link: link,
            blurIcon: blurSvg,
            clearIcon: clearSvg,
            text: linkMatch[2].replace(/\n/g, '').replace(/\s+/g, ' ').trim()
        });
    }
}

// Generate the final component code
let code = `import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline'; // Or use an inline SVG

const SUPPORT_CATEGORIES = [
`;

for (const item of items) {
    code += `  {
    title: "${item.title}",
    link: "${item.link}",
    text: "${item.text}",
    blurIcon: (
      ${item.blurIcon}
    ),
    clearIcon: (
      ${item.clearIcon}
    )
  },
`;
}

code += `];

export default function SupportCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SUPPORT_CATEGORIES.map((category, index) => (
        <div 
          key={index}
          className="relative bg-white p-8 rounded-xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group overflow-hidden flex flex-col items-center text-center"
        >
          {/* Background Blurred Icon */}
          <div className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            {category.blurIcon}
          </div>

          {/* Main Icon */}
          <div className="mb-5 relative z-10 text-[var(--color-primary)]">
            {category.clearIcon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4 relative z-10 group-hover:text-[var(--color-primary)] transition-colors">
            {category.title}
          </h3>

          {/* Link */}
          <a 
            href={category.link}
            className="mt-auto inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--color-primary)] hover:text-blue-800 transition-colors relative z-10"
          >
            {category.text}
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
}
`;

fs.writeFileSync('.gemini/antigravity/brain/b6ae9e52-c3fc-40f4-b222-ab3441d5bfb4/scratch/SupportCategories.jsx', code);
console.log("Success");
