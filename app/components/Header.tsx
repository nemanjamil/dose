'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const imgLogotype = "https://www.figma.com/api/mcp/asset/4560792d-019b-4e03-8956-2ffbec90770c";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: 'HOMEPAGE', href: '/' },
    { label: 'ABOUT US', href: '/about-us' },
    { label: 'BLOG', href: '/blog' },
    { label: 'CONTACT US', href: '/contact-us' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white z-50 shadow-sm">
      <div className="flex gap-[64px] items-center px-[32px] py-[20px] max-w-[1440px] mx-auto">
        <Link href="/" className="h-[32px] w-[97.976px] hover:opacity-80 transition-opacity">
          <img alt="Dose Logo" className="w-full h-full" src={imgLogotype} />
        </Link>

        <nav className="flex font-['Albert_Sans:Medium',sans-serif] font-medium gap-[32px] items-center text-[#9c5243] text-[12px] tracking-[-0.24px]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors hover:text-[#6c2517] ${
                isActive(item.href) ? 'text-[#6c2517] font-bold' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
