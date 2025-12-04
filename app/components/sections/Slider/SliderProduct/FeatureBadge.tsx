"use client";

/**
 * FeatureBadge Component
 * Individual feature badge with icon and text
 * Responsive positioning using percentages for mobile and desktop
 */

import { useState, useEffect } from "react";

interface FeatureBadgeProps {
  icon: string;
  label: string;
  position: "top-left" | "top-right" | "bottom-left";
}

export default function FeatureBadge({
  icon,
  label,
  position,
}: FeatureBadgeProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    // Listen for resize
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Hide top-right badge on mobile
  if (isMobile && position === "top-right") {
    return null;
  }

  // Responsive positioning using percentages
  // Mobile: moved 10% to top
  // Desktop: original positioning
  const positionStyles = {
    "top-left": {
      top: isMobile ? "2%" : "29%",
      left: isMobile ? "2%" : "11%",
    },
    "top-right": {
      top: isMobile ? "37%" : "37%",
      right: isMobile ? "37%" : "11%",
    },
    "bottom-left": {
      top: isMobile ? "80%" : "77%",
      left: isMobile ? "5%" : "35%",
    },
  };

  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.4)] box-border flex flex-col gap-[10px] 
      items-start pl-[8px] pr-[24px] py-[8px] rounded-[99px] shadow-[0px_10px_24px_0px_rgba(160,157,151,0.3)]"
      style={positionStyles[position]}
    >
      <div className="flex gap-[12px] items-center">
        <div className="bg-dose-light flex gap-[10px] items-center px-[11px] py-[10px] rounded-[99px] size-[46px] flex-shrink-0">
          <div className="relative size-[24px]">
            <img alt="" className="w-full h-full" src={icon} />
          </div>
        </div>
        <p className="font-bold text-dose-accent text-[18px] tracking-[-0.36px]">
          {label}
        </p>
      </div>
    </div>
  );
}
