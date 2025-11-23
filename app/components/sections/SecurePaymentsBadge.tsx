"use client";

/**
 * SecurePaymentsBadge Component
 * Reusable badge displaying secure payments information
 * Shows icon, title, and description
 */

import Image from "next/image";

interface SecurePaymentsBadgeProps {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
}

export default function SecurePaymentsBadge({
  title,
  description,
  iconSrc,
  iconAlt,
}: SecurePaymentsBadgeProps) {
  return (
    <div className="flex gap-[24px] items-center bg-white rounded-[8px] p-[16px] border border-dose-accent/10 mb-3">
      {/* Icon */}
      <div className="w-[32px] h-[32px] flex-shrink-0 relative">
        <Image src={iconSrc} alt={iconAlt} fill className="object-contain" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[4px]">
        <h3 className="font-bold text-dose-accent text-p-small">{title}</h3>
        <p className="font-medium text-dose-accent/60 text-extra-small leading-[1.5]">
          {description}
        </p>
      </div>
    </div>
  );
}
