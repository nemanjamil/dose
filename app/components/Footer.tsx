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
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
  ];

  return (
    <footer className="w-full bg-dose-light rounded-t-[32px] overflow-hidden shadow-[0px_20px_48px_0px_rgba(135,84,55,0.1)]">
      <div className="max-w-[1440px] mx-auto px-[16px] sm:px-[32px] lg:px-[64px] pt-[64px] relative min-h-[550px]">
        {/* Row 1 - Navigation Links + Product Card */}
        <div className="flex flex-col lg:flex-row gap-[48px] lg:gap-[64px] mb-[0px]">
          {/* Left Section - Navigation Links */}
          <div className="flex flex-col flex-1">
            {/* Row 1 - Navigation Columns */}
            <div className="flex flex-col sm:flex-row gap-[48px] sm:gap-[112px]">
              {/* Quick Links */}
              <div className="flex flex-col gap-[24px]">
                <h3 className="font-bold text-dose-dark text-[16px] tracking-[-0.32px] uppercase">
                  Brzi Linkovi
                </h3>
                <nav className="flex flex-col gap-[24px]">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="font-medium text-dose-mid text-[14px] hover:text-dose-dark transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Shop Links */}
              <div className="flex flex-col gap-[24px]">
                <h3 className="font-bold text-dose-dark text-[16px] tracking-[-0.32px] uppercase">
                  Shop
                </h3>
                <nav className="flex flex-col gap-[24px]">
                  {shopLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="font-medium text-dose-mid text-[14px] hover:text-dose-dark transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Legal Links */}
              <div className="flex flex-col gap-[24px]">
                <h3 className="font-bold text-dose-dark text-[16px] tracking-[-0.32px] uppercase">
                  Legal
                </h3>
                <nav className="flex flex-col gap-[24px]">
                  {legalLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="font-medium text-dose-mid text-[14px] hover:text-dose-dark transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Social Links */}
              <div className="flex flex-col gap-[24px]">
                <h3 className="font-bold text-dose-dark text-[16px] tracking-[-0.32px] uppercase">
                  Zaprati Nas
                </h3>
                <div className="flex flex-col gap-[12px]">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="bg-white px-[16px] py-[6px] rounded-[8px] h-[44px] flex items-center gap-[10px] hover:shadow-[0px_10px_24px_0px_rgba(135,84,55,0.15)] transition-shadow"
                    >
                      <span className="text-[14px]">
                        {link.label === "Facebook" ? "f" : "📷"}
                      </span>
                      <span className="font-medium text-dose-mid text-[14px]">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2 - Additional Content */}
            <div className="flex justify-left mt-8">
              <p className="font-medium text-dose-mid/60 text-[12px] tracking-[-0.24px]">
                @ Dose 2025. All rights reserved. Design by Growww.
              </p>
            </div>
          </div>

          {/* Right Section - Product Card */}
          <div className="flex-shrink-0 w-full sm:w-[304px]">
            <div className="bg-dose-accent rounded-[16px] overflow-hidden p-[24px] flex flex-col gap-[24px] h-full">
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

              {/* CTA Button */}
              <CTAButton
                onClick={() => (window.location.href = "/shop")}
                label="Shop Now"
                className="w-full"
              />

              {/* Product Image */}
              <div className="relative w-full h-[200px] -mb-[12px]">
                <Image
                  src="/images/products/footerImage.png"
                  alt="Featured Product"
                  fill
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
