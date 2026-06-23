"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Services", href: "/services" },
    { name: "Why Choose Us", href: "/why-choose-us" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#032031]/95 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo and Brand */}
        <Link 
          href="/" 
          onClick={handleHomeClick}
          className="flex items-center space-x-3 group relative z-10"
        >
          <div className="relative h-16 w-[45px] overflow-hidden group-hover:scale-105 transition-all duration-300">
            <img
              src="/logo1.png"
              alt="Fortress ASR Security Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-tight text-white leading-tight group-hover:text-zinc-100 transition-colors uppercase">
              Fortress Asr
            </span>
            <span className="text-[10px] font-bold text-amber-500 tracking-[0.25em] uppercase leading-none mt-0.5">
              Security
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={item.href === "/" ? handleHomeClick : undefined}
                className={`relative py-2 text-xs tracking-widest transition-all duration-200 uppercase text-white ${
                  isActive
                    ? "font-black"
                    : "font-semibold hover:scale-105"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden relative z-10">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2.5 text-white hover:bg-white/10 focus:outline-none transition-all duration-200"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6 rotate-90 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div 
          className="md:hidden absolute top-20 left-0 w-full bg-[#032031] border-b border-white/10 shadow-2xl animate-fade-in z-50" 
          id="mobile-menu"
        >
          <div className="space-y-1 px-4 pb-6 pt-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href === "/") {
                      handleHomeClick(e);
                    } else {
                      setIsOpen(false);
                    }
                  }}
                  className={`block rounded-lg py-3.5 px-2 text-sm tracking-widest uppercase transition-all duration-200 text-white ${
                    isActive
                      ? "font-black"
                      : "font-semibold hover:translate-x-1"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
