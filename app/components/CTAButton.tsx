/**
 * CTAButton Component
 *
 * Reusable call-to-action button with icon and text
 * Supports responsive sizing and customizable icon/label
 */

import Image from "next/image";

interface CTAButtonProps {
  label?: string;
  onClick?: () => void;
  iconSrc?: string;
  iconAlt?: string;
  className?: string;
}

export default function CTAButton({
  label = "Shop now",
  onClick,
  iconSrc = "/images/products/frame.svg",
  iconAlt = "Shop icon",
  className = "",
}: CTAButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-dose-accent flex gap-[16px] sm:gap-[24px] items-center pl-[8px] pr-[16px] sm:pr-[24px] py-[8px] rounded-[20px] shadow-[0px_10px_24px_0px_rgba(135,84,55,0.3)] hover:opacity-90 transition-opacity active:scale-95 w-auto justify-start cursor-pointer ${className}`}
    >
      <div className="bg-dose-peach flex gap-[10px] items-center justify-center px-[8px] sm:px-[11px] py-[8px] sm:py-[10px] rounded-[14px] size-[40px] sm:size-[46px] flex-shrink-0">
        <div className="relative size-[20px] sm:size-[24px]">
          <Image
            alt={iconAlt}
            src={iconSrc}
            fill
            className="object-contain"
          />
        </div>
      </div>
      <p className="font-bold text-dose-light text-[14px] sm:text-[16px] tracking-[-0.28px] sm:tracking-[-0.32px] uppercase whitespace-nowrap">
        {label}
      </p>
    </button>
  );
}
