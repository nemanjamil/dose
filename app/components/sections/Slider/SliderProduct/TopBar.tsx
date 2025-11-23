"use client";

/**
 * TopBar Component
 * Top bar with social icons and Shop Now button
 */

import Link from "next/link";

const imgFacebook = "/images/icons/social-1.svg";
const imgInstagram = "/images/icons/social-2.svg";
const imgShopIcon = "/images/icons/social-3.svg";

export default function TopBar() {
  return (
    <>
      {/* Facebook Icon */}
      <div className="relative size-[40px]">
        <img alt="Facebook" className="w-full h-full" src={imgFacebook} />
      </div>

      {/* Instagram Icon */}
      <div className="relative size-[40px]">
        <img alt="Instagram" className="w-full h-full" src={imgInstagram} />
      </div>

      {/* Shop Now Button */}
      <Link
        href="/cart"
        className="bg-white box-border flex flex-col gap-[10px] items-start pl-[8px] pr-[24px] py-[8px] rounded-[20px] shadow-[0px_10px_24px_0px_rgba(160,157,151,0.3)] hover:shadow-[0px_12px_32px_0px_rgba(160,157,151,0.4)] transition-shadow active:scale-95"
      >
        <div className="flex gap-[24px] items-center">
          <div className="bg-dose-peach flex gap-[10px] items-center justify-center px-[11px] py-[10px] rounded-[14px] size-[46px] flex-shrink-0">
            <div className="relative size-[24px]">
              <img
                alt="Shop icon"
                className="w-full h-full"
                src={imgShopIcon}
              />
            </div>
          </div>
          <p className="font-bold text-dose-accent text-[16px] tracking-[-0.32px] uppercase">
            Shop now
          </p>
        </div>
      </Link>
    </>
  );
}
