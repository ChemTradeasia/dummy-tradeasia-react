import React from 'react';
import { AngleRightIcon } from '../../components/icons/AboutUs';

export default function Breadcrumb({ items = [] }) {
  return (
    <div className="hidden md:block bg-[#fefaef] py-3 border-b border-gray-100">
      <div className="container">
        <nav className="flex items-center gap-2 text-sm font-medium">
          <a href="/" className="text-[var(--color-text-dark)] transition-colors">Home</a>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span><AngleRightIcon /></span>
              {item.href ? (
                <a href={item.href} className="text-[var(--color-text-dark)] hover:text-[var(--color-light-blue)] transition-colors">
                  {item.label}
                </a>
              ) : (
                <span className="text-[var(--color-gray-text)]">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
}
