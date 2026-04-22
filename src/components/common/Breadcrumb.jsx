import React from 'react';
import { AngleRightIcon } from '../icons';

export default function Breadcrumb({ items = [] }) {
  return (
    <div className="hidden md:block bg-[#fefaef] py-3">
      <div className="container">
        <nav className="flex items-center gap-2 text-sm font-medium">
          <a href="/" className="text-[var(--color-text-dark)] transition-colors">Home</a>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-[var(--color-text-dark)]">
                <AngleRightIcon className="w-4 h-4" />
              </span>
              {item.href ? (
                <a href={item.href} className="text-[var(--color-text-dark)] transition-colors">
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
