import { useState } from 'react';
import {
  SearchIcon, GlobeIcon, HamburgerIcon, CloseIcon,
  AngleDownIcon, AngleRightIcon, AngleLeftIcon,
} from '../icons';
import { NAV_LINKS } from '../../constants/navigation';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [sidebarView, setSidebarView] = useState('main');

  const user = null;

  // Auto-close sidebar saat viewport menjadi desktop
  useMediaQuery('(min-width: 1024px)') && isMobileMenuOpen && (
    setIsMobileMenuOpen(false) || setSidebarView('main')
  );

  const companyNav = NAV_LINKS.find((n) => n.type === 'dropdown');

  return (
    <header className="fixed w-full z-50 bg-[var(--color-header-bg)]">
      {/* Search Overlay Dropdown */}
      <div
        className={`absolute top-20 left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          isSearchOpen ? 'h-88 opacity-100 py-20' : 'h-0 opacity-0 py-0'
        }`}
      >
        <div className="container mx-auto flex flex-col items-center relative">
          <h4 className="text-[32px] font-semibold text-[var(--color-text-dark)] text-center mb-0">
            What Are You Looking For?
          </h4>
          <div className="bg-[var(--color-light-blue)] h-1.5 w-24 rounded-full mx-auto"></div>

          <div className="flex justify-center w-full relative mt-12">
            <div className="relative w-full max-w-[64%] flex items-center border-2 border-gray-300 rounded-full px-4 py-3 bg-white">
              <SearchIcon className="w-6 h-6 stroke-[3px] text-[var(--color-text-dark)] flex-shrink-0 mr-3" />
              <input
                type="text"
                placeholder="Find your product by name"
                className="w-full border-none outline-none text-base text-[var(--color-text-dark)] bg-transparent focus:ring-0 placeholder-[var(--color-gray-text)]"
              />
            </div>
          </div>

          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute right-0 top-0 text-gray-500 hover:text-red-500 w-8 h-8"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full">
        <div className="container mx-auto grid grid-cols-12 items-center">

          {/* Left: Logo + Mobile Hamburger */}
          <div className="col-span-6 lg:col-span-2 flex items-center gap-3">
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <HamburgerIcon />
            </button>
            <a href="/" className="flex-shrink-0 py-3 flex items-center">
              <img
                src="https://cdn.chemtradeasia.com/chemtradeasia-new/tradeasia-logo-white.webp"
                alt="Tradeasia International"
                className="w-[163px] h-auto"
              />
            </a>
          </div>

          {/* Center: Desktop Nav */}
          <nav className="hidden xl:gap-[31px] md:gap-4 lg:flex items-center gap-8 list-none px-1 m-0 col-span-6 sm:gap-3">
            {NAV_LINKS.map((item) => {
              if (item.type === 'dropdown') {
                return (
                  <div
                    key={item.label}
                    className="relative group h-20 flex items-center"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="text-white font-medium text-base leading-7 flex items-center cursor-pointer hover:text-white">
                      {item.label} <AngleDownIcon className="w-5 h-5 xl:ml-[7px] md:ml-[3px]" />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-20.5 p-2 left-0 bg-white shadow-xl min-w-[200px] flex flex-col z-50 transition-all rounded">
                        {item.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-[var(--color-text-dark)] font-medium hover:bg-[var(--color-hover-bg)]"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  className="text-white font-medium text-base leading-7 hover:text-white flex items-center h-20"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right: Search, Globe, Sign In, Contact */}
          <div className="col-span-6 lg:col-span-4 flex items-center justify-end xl:gap-5 lg:gap-2.5 md:gap-5 h-20 sm:gap-5">
            <div className="flex items-center border-r-2 border-white xl:pr-5 lg:pr-2.5 md:pr-5 sm:pr-5">
              <button className="text-white hover:opacity-80" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <SearchIcon className="w-6 h-6 cursor-pointer" />
              </button>
            </div>
            <button className="text-white hover:opacity-80 flex items-center">
              <GlobeIcon className="w-6 h-6 cursor-pointer" />
            </button>
            {user ? (
              <div className="hidden lg:flex flex-col items-end text-white">
                <span className="font-medium text-base text-white">Profile</span>
              </div>
            ) : (
              <a
                href="/login"
                className="hidden lg:block whitespace-nowrap bg-white border-2 border-[var(--color-light-blue)] text-[var(--color-light-blue)] font-medium text-base rounded-full px-[25px] py-[11px] cursor-pointer hover:bg-[var(--color-light-blue)] hover:text-white transition-all"
              >
                Sign In
              </a>
            )}
            <button className="hidden lg:block whitespace-nowrap bg-[var(--color-light-blue)] border-2 border-[var(--color-light-blue)] text-white font-normal text-base rounded-full px-[25px] py-[11px] cursor-pointer hover:bg-white hover:text-[var(--color-light-blue)] transition-all">
              Contact Us
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/30"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative w-[80vw] max-w-[80vw] bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-300 z-50">

            {/* Sidebar Header */}
            <div className="flex justify-between items-center px-10 pt-4 pb-2 bg-[var(--color-header-bg)] mb-[25px]">
              <img
                src="https://cdn.chemtradeasia.com/chemtradeasia-new/tradeasia-logo-white.webp"
                alt="Tradeasia International"
                className="w-[140px] h-[50px]"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-red-500 cursor-pointer mr-2"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Sidebar Body */}
            <div className="flex-1 overflow-y-auto">
              {sidebarView === 'main' && (
                <ul className="flex flex-col px-[40px] list-none m-0">
                  {NAV_LINKS.map((item) => {
                    if (item.type === 'dropdown') {
                      return (
                        <li key={item.label} className="p-0">
                          <button
                            onClick={() => setSidebarView(item.label)}
                            className="w-full flex justify-between items-center py-[15px] border-b-[1px] border-gray-200 text-[var(--color-text-dark)] font-medium text-base hover:bg-gray-50 cursor-pointer"
                          >
                            {item.label} <AngleRightIcon className="w-5 h-5 ml-2 font-bold" />
                          </button>
                        </li>
                      );
                    }
                    return (
                      <li key={item.label} className="p-0">
                        <a
                          href={item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noreferrer' : undefined}
                          className="block py-[15px] border-b-[1px] border-gray-200 text-[var(--color-text-dark)] font-medium text-base hover:bg-gray-50"
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}

              {/* Dropdown Sub-menu Views */}
              {NAV_LINKS.filter((n) => n.type === 'dropdown').map((item) =>
                sidebarView === item.label ? (
                  <div key={item.label} className="flex flex-col">
                    <button
                      onClick={() => setSidebarView('main')}
                      className="flex items-center gap-2 bg-gray-100 px-6 py-4 text-base font-semibold text-[var(--color-text-dark)] border-b border-gray-200 hover:bg-gray-200 w-full text-left"
                    >
                      <AngleLeftIcon /> Back
                    </button>
                    <ul className="flex flex-col p-0 m-0 list-none">
                      {item.children.map((child) => (
                        <li key={child.href} className="p-0">
                          <a
                            href={child.href}
                            className="block px-6 py-4 border-b border-gray-100 text-[var(--color-text-dark)] font-medium hover:bg-gray-50"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null
              )}
            </div>

            {/* Sidebar Footer */}
            <div className="px-[40px] flex pb-5 gap-2">
              {!user && (
                <a
                  href="/login"
                  className="flex justify-center items-center w-full bg-white border-2 border-[var(--color-light-blue)] text-[var(--color-light-blue)] font-medium text-base rounded-full px-6 py-2.5 hover:bg-[var(--color-light-blue)] hover:text-white transition-all text-center"
                >
                  Sign In
                </a>
              )}
              <button className="w-full bg-[var(--color-light-blue)] border-2 border-[var(--color-light-blue)] text-white font-medium text-base rounded-full px-6 py-2.5 cursor-pointer hover:bg-white hover:text-[var(--color-light-blue)] transition-all">
                Contact Us
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
