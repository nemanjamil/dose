"use client";

/**
 * HidrateInStyle Component
 *
 * Section showcasing the hydration and style of DOSE thermoses
 */

import { ColorSwatch } from "../sections/Slider/SliderProduct";
import CTAButton from "../CTAButton";

export default function HidrateInStyle() {
  const handleShopClick = () => {
    window.location.href = "/shop";
  };

  return (
    <section className="w-full py-[var(--spacing-64)] px-[16px] sm:px-[var(--spacing-32)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[var(--spacing-64)]">
          <div className="flex justify-center flex-col items-center gap-[4px]">
            {/* Item 1 - ColorSwatch */}
            <ColorSwatch />

            <div className="flex flex-col items-center gap-[12px]">
              <h2 className="text-dose-dark font-bold text-[56px] tracking-[-0.48px] text-center">
                Hydrate in Style. Choose. Your Dose Flask.
              </h2>
            </div>

            <CTAButton onClick={handleShopClick} />
          </div>
        </div>
      </div>
    </section>
  );
}
