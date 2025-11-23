"use client";

/**
 * TopBar Component
 * Top bar with social icons and Shop Now button
 * Shows cart item notification badge
 */

import { useCart } from "@/app/contexts/CartContext";

const imgFacebook = "/images/icons/social-1.svg";
const imgInstagram = "/images/icons/social-2.svg";
const imgShopIcon = "/images/icons/social-3.svg";

interface TopBarProps {
  onShopNowClick?: () => void;
}

export default function TopBar({ onShopNowClick }: TopBarProps) {
  const { items } = useCart();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
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
      <button
        onClick={onShopNowClick}
        className="bg-white box-border flex flex-col gap-[10px] items-start pl-[8px] pr-[24px] py-[8px] rounded-[20px] shadow-[0px_10px_24px_0px_rgba(160,157,151,0.3)] hover:shadow-[0px_12px_32px_0px_rgba(160,157,151,0.4)] transition-shadow active:scale-95 cursor-pointer"
      >
        <div className="flex gap-[24px] items-center">
          <div className="relative flex gap-[10px] items-center justify-center px-[11px] py-[10px] rounded-[14px] size-[46px] flex-shrink-0 bg-dose-peach">
            {/* Notification Badge */}
            {totalItems > 0 && (
              <div className="absolute -top-2 -right-2 bg-dose-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-[12px] font-bold">
                {totalItems}
              </div>
            )}
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
      </button>
    </>
  );
}
