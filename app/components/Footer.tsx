"use client";

/**
 * Footer Component
 *
 * Main footer with navigation, links, and product showcase
 * Based on Figma design: https://www.figma.com/design/I7GYdab3FirpOg941b6wTL/Dose-Web-Project?node-id=111-1211
 */

import Link from "next/link";
import Image from "next/image";
import CTAButton from "./CTAButton";

const imgLogotype = "/images/brand/Logotype_white.svg";

export default function Footer() {
  const quickLinks = [
    { label: "Pocetna", href: "/" },
    { label: "O nama", href: "/about-us" },
    { label: "Blog", href: "/blog" },
  ];

  const shopLinks = [
    { label: "Dose Max 1,2 L", href: "/shop" },
    { label: "Dose Regular 0,88L", href: "/shop" },
    { label: "Shop all", href: "/shop" },
  ];

  const legalLinks = [
    { label: "Politika privatnosti", href: "#" },
    { label: "Uslovi koriscenja", href: "#" },
    { label: "Politika povrata", href: "#" },
  ];

  const socialLinks = [
    { label: "Facebook", href: "#", icon: "/images/brand/facebookIcon.svg" },
    { label: "Instagram", href: "#", icon: "/images/brand/InstagramIcon.svg" },
  ];

  return (
    <footer className="w-full bg-dose-light rounded-t-[32px] overflow-hidden shadow-[0px_20px_48px_0px_rgba(135,84,55,0.1)]">
      <div className="max-w-[1440px] mx-auto px-[16px] sm:px-[32px] lg:px-[64px] pt-[64px] relative lg:min-h-[570px] flex flex-col">
        {/* Row 1 - Navigation Links + Product Card */}
        <div className="flex flex-col lg:flex-row gap-[48px] lg:gap-[64px] mb-[0px] items-center lg:items-stretch flex-1">
          {/* Left Section - Navigation Links */}
          <div className="flex flex-col flex-1 w-full sm:w-auto">
            {/* Row 1 - Navigation Columns */}
            <div className="flex flex-col sm:flex-row gap-[48px] sm:gap-[112px] text-center sm:text-left justify-center sm:justify-start">
              {/* Quick Links */}
              <div className="flex flex-col gap-[24px] items-center sm:items-start">
                <h6 className="text-dose-dark uppercase">Brzi Linkovi</h6>
                <nav className="flex flex-col gap-[24px]">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="font-normal text-dose-mid text-p-small hover:text-dose-dark transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Shop Links */}
              <div className="flex flex-col gap-[24px] items-center sm:items-start">
                <h6 className="text-dose-dark uppercase">Shop</h6>
                <nav className="flex flex-col gap-[24px]">
                  {shopLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="font-medium text-dose-mid text-p-small hover:text-dose-dark transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Legal Links */}
              <div className="flex flex-col gap-[24px] items-center sm:items-start">
                <h6 className="text-dose-dark uppercase">Legal</h6>
                <nav className="flex flex-col gap-[24px]">
                  {legalLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="font-medium text-dose-mid text-p-small hover:text-dose-dark transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Social Links */}
              <div className="flex flex-col gap-[24px] items-center sm:items-start">
                <h6 className="text-dose-dark uppercase">Zaprati Nas</h6>
                <div className="flex flex-col gap-[12px] items-center sm:items-start">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="bg-white px-[16px] py-[6px] rounded-[8px] h-[44px] flex items-center gap-[10px] hover:shadow-[0px_10px_24px_0px_rgba(135,84,55,0.15)] transition-shadow"
                    >
                      <img
                        alt={link.label}
                        className="w-[18px] h-[18px]"
                        src={link.icon}
                      />
                      <span className="font-medium text-dose-mid text-p-small">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2 - Additional Content */}
            <div className="flex justify-center sm:justify-left mt-8">
              <p className="font-medium text-dose-mid/60 text-[12px] tracking-[-0.24px]">
                @ Dose 2025. All rights reserved. Design by Growww.
              </p>
            </div>
          </div>

          {/* Right Section - Product Card */}
          <div className="sm:w-[304px]">
            <div className="bg-dose-accent relative rounded-t-[16px] overflow-hidden p-[24px] flex flex-col gap-[24px] h-full">
              {/* Logo */}
              <Link
                href="/"
                className="h-[32px] w-[97.976px] hover:opacity-80 transition-opacity"
              >
                <img
                  alt="Dose Logo"
                  className="w-full h-full"
                  src={imgLogotype}
                />
              </Link>

              {/* Description */}
              <p className="font-medium text-dose-light text-[14px] tracking-[-0.28px] leading-[1.5]">
                Poseti shop, istrazi ponudu i pronadji svoj Dose termos koji se
                idealno uklopa uz tvoj stil zivota.
              </p>

              {/* Product Image */}
              <div className="w-full flex justify-center mt-auto absolute bottom-0">
                <Image
                  src="/images/products/footerImage.png"
                  alt="Featured Product"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 - Copyright */}

        {/* Large Letters - Positioned Below Copyright */}
        <div className="absolute left-[70px] bottom-[0px] flex gap-5">
          <img
            src="/images/brand/d.svg"
            alt="D"
            className="w-[207px] h-auto opacity-60"
          />
          <img
            src="/images/brand/o.svg"
            alt="O"
            className="w-[207px] h-auto opacity-60"
          />
          <img
            src="/images/brand/s.svg"
            alt="S"
            className="w-[161px] h-auto opacity-60"
          />
          <img
            src="/images/brand/e.svg"
            alt="E"
            className="w-[207px] h-auto opacity-60"
          />
        </div>
      </div>
    </footer>
  );
}
