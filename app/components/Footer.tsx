'use client';

import Link from 'next/link';

const imgLogotype = "https://www.figma.com/api/mcp/asset/4560792d-019b-4e03-8956-2ffbec90770c";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about-us' },
    { label: 'SHOP', href: '/shop' },
    { label: 'BLOG', href: '/blog' },
    { label: 'CONTACT', href: '/contact-us' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Returns', href: '#' },
    { label: 'Shipping', href: '#' },
  ];

  const socialLinks = [
    { label: 'Facebook', href: '#', icon: '👍' },
    { label: 'Instagram', href: '#', icon: '📸' },
    { label: 'Twitter', href: '#', icon: '𝕏' },
  ];

  return (
    <footer className="bg-[#6c2517] text-white w-full">
      <div className="max-w-[1440px] mx-auto px-[16px] sm:px-[32px] py-[48px] sm:py-[64px]">
        {/* Top Section - Logo and Description */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px] sm:gap-[48px] mb-[48px] sm:mb-[64px] pb-[32px] sm:pb-[48px] border-b border-[rgba(255,255,255,0.1)]">
          {/* Logo and Brand */}
          <div className="flex flex-col gap-[16px] col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="h-[32px] w-[97.976px] hover:opacity-80 transition-opacity">
              <img alt="Dose Logo" className="w-full h-full" src={imgLogotype} />
            </Link>
            <p className="font-['Albert_Sans:Medium',sans-serif] font-medium text-[#fef8f4] text-[14px] sm:text-[16px] tracking-[-0.28px] sm:tracking-[-0.32px] leading-[1.5] max-w-[280px]">
              Premium thermoses designed for your active lifestyle. Stay hydrated, stay stylish.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-[12px] col-span-1">
            <h3 className="font-['Albert_Sans:Bold',sans-serif] font-bold text-[14px] sm:text-[16px] tracking-[-0.28px] sm:tracking-[-0.32px] uppercase text-[#ffe3d3]">
              Navigation
            </h3>
            <nav className="flex flex-col gap-[8px]">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-['Albert_Sans:Medium',sans-serif] font-medium text-[14px] tracking-[-0.28px] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-[12px] col-span-1">
            <h3 className="font-['Albert_Sans:Bold',sans-serif] font-bold text-[14px] sm:text-[16px] tracking-[-0.28px] sm:tracking-[-0.32px] uppercase text-[#ffe3d3]">
              Legal
            </h3>
            <nav className="flex flex-col gap-[8px]">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-['Albert_Sans:Medium',sans-serif] font-medium text-[14px] tracking-[-0.28px] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-[12px] col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="font-['Albert_Sans:Bold',sans-serif] font-bold text-[14px] sm:text-[16px] tracking-[-0.28px] sm:tracking-[-0.32px] uppercase text-[#ffe3d3]">
              Follow Us
            </h3>
            <div className="flex gap-[16px]">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-label={link.label}
                  className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors text-[18px]"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[24px] items-center sm:justify-between text-center sm:text-left">
          <p className="font-['Albert_Sans:Medium',sans-serif] font-medium text-[12px] sm:text-[14px] tracking-[-0.24px] sm:tracking-[-0.28px] text-[rgba(255,255,255,0.6)]">
            © {currentYear} Dose. All rights reserved.
          </p>
          <p className="font-['Albert_Sans:Medium',sans-serif] font-medium text-[12px] sm:text-[14px] tracking-[-0.24px] sm:tracking-[-0.28px] text-[rgba(255,255,255,0.6)]">
            Crafted with care for your active lifestyle.
          </p>
        </div>
      </div>
    </footer>
  );
}
