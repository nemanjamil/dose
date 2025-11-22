"use client";

import SliderText from "./SliderText";
import SliderProduct from "./SliderProduct/SliderProduct";

/**
 * SliderSection Component
 *
 * Main slider/hero section composed of two subcomponents:
 * - SliderText: Title, description, CTA button
 * - SliderProduct: Product image with badges and indicators
 *
 * This section is designed to be responsive and mobile-first.
 */

export default function SliderSection() {
  return (
    <div className="relative w-full pt-[32px] sm:pt-[47px] md:pt-[60px] lg:pt-[0px]">
      <div className="max-w-[1440px] mx-auto px-[16px] sm:px-[32px]">
        {/* Flex container for text and product parts */}
        <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[64px] items-center lg:items-stretch">
          {/* Text Content - Title, Description, Button - 50% on desktop */}
          <div className="w-full lg:w-1/2 flex items-center lg:pl-[147px] lg:mt-8 mt-16">
            <SliderText />
          </div>

          {/* Product Image - Placeholder with badges - 50% on desktop */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:mt-8">
            <SliderProduct />
          </div>
        </div>
      </div>
    </div>
  );
}
