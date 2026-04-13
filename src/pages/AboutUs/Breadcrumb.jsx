import React from 'react';

export default function Breadcrumb({ items = [] }) {
  return (
    <div className="bg-[#f8f9fa] py-3 border-b border-gray-100">
      <div className="container">
        <nav className="flex items-center gap-2 text-sm text-[var(--color-gray-text)]">
          <a href="/" className="hover:text-[var(--color-light-blue)] transition-colors">Home</a>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-gray-400">&gt;</span>
              {item.href ? (
                <a href={item.href} className="hover:text-[var(--color-light-blue)] transition-colors">
                  {item.label}
                </a>
              ) : (
                <span className="font-medium text-[var(--color-text-dark)]">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
}
