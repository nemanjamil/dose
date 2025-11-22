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
    <section className="w-full py-16 px-4 sm:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-16">
          <div className="flex justify-center flex-col items-center gap-1">
            {/* Item 1 - ColorSwatch */}
            <ColorSwatch />

            <div className="flex flex-col items-center gap-3">
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
