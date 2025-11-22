"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";

const imgLogotype = "/images/brand/logotype.svg";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "HOMEPAGE", href: "/" },
    { label: "ABOUT US", href: "/about-us" },
    { label: "BLOG", href: "/blog" },
    { label: "CONTACT US", href: "/contact-us" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="absolute top-0 left-0 right-0 w-full bg-transparent z-50">
      <div className="flex gap-[64px] items-center justify-between px-4 sm:px-8 py-5 max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="h-[32px] w-[97.976px] hover:opacity-80 transition-opacity flex-shrink-0"
        >
          <img alt="Dose Logo" className="w-full h-full" src={imgLogotype} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex font-medium gap-[32px] items-center text-dose-mid text-[16px] tracking-[-0.24px] flex-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors hover:text-dose-dark ${
                isActive(item.href) ? "text-dose-dark font-bold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu - Basket and Hamburger */}
        <div className="md:hidden flex gap-4 items-center">
          {/* Basket Icon */}
          <button
            onClick={() => router.push("/cart")}
            className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
            aria-label="Shopping cart"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 2L7 6H3V8H4.2L6 20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20L19.8 8H21V6H17L15 2H9ZM9 9H11V18H9V9ZM13 9H15V18H13V9Z"
                fill="#6C2517"
              />
            </svg>
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-6 h-6 flex flex-col items-center justify-center gap-1.5 hover:opacity-70 transition-opacity"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <span className="w-5 h-0.5 bg-dose-dark block"></span>
            <span className="w-5 h-0.5 bg-dose-dark block"></span>
            <span className="w-5 h-0.5 bg-dose-dark block"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Click to Close */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 md:hidden z-30"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Dropdown - Slide from Right */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 md:hidden bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header with Logo and Close Button */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-dose-mid/30">
          {/* Logo */}
          <Link
            href="/"
            className="h-[32px] w-[97.976px] hover:opacity-80 transition-opacity"
          >
            <img alt="Dose Logo" className="w-full h-full" src={imgLogotype} />
          </Link>

          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
            aria-label="Close menu"
          >
            <span className="text-dose-dark text-[24px] font-bold">×</span>
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-4 px-4 py-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`transition-colors text-[18px] font-medium ${
                isActive(item.href)
                  ? "text-dose-accent font-bold"
                  : "text-dose-dark hover:text-dose-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
