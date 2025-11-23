"use client";

/**
 * IconButton Component
 * Reusable button/link component with icon, text
 * Icon displayed in peach box on the left side
 */

import Link from "next/link";
import Image from "next/image";

interface IconButtonProps {
  label: string;
  icon: string;
  iconAlt: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function IconButton({
  label,
  icon,
  iconAlt,
  href,
  onClick,
  disabled = false,
  className = "",
}: IconButtonProps) {
  const baseClassName = `relative bg-dose-accent text-white py-[16px] px-[24px] rounded-[14px] font-bold w-full flex items-center justify-center uppercase btn-interactive ${className}`;
  const disabledClassName = disabled ? "btn-disabled" : "";
  const finalClassName = `${baseClassName} ${disabledClassName}`;

  const content = (
    <>
      <div className="absolute left-[8px] bg-dose-peach rounded-[12px] w-[36px] h-[36px] flex items-center justify-center">
        <div className="relative w-[18px] h-[18px]">
          <Image
            src={icon}
            alt={iconAlt}
            fill
            className="object-contain"
          />
        </div>
      </div>
      <span>{label}</span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={finalClassName}
        style={{ fontSize: "var(--font-size-p-regular)" }}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={finalClassName}
      style={{ fontSize: "var(--font-size-p-regular)" }}
    >
      {content}
    </button>
  );
}
