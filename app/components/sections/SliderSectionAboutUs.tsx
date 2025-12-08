"use client";

/**
 * SliderSectionAboutUs Component
 *
 * About Us section with equal left and right columns
 * Left: Text content (heading, description)
 * Right: Image display
 */

import Image from "next/image";
import SliderTextForAboutUs from "./SliderTextForAboutUs";

export default function SliderSectionAboutUs() {
  return (
    <section
      id="SliderSectionAboutUs"
      className="w-full sm:px-8 lg:mt-0 mt-24 max-w-[1440px] lg:h-[820px] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Text Content */}
        <div className="flex flex-col justify-center items-center px-4">
          <SliderTextForAboutUs />
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full h-[620px] sm:h-[620px] lg:h-[820px] lg:mt-0 mt-12">
          {/* Mobile Image */}
          <Image
            src="/images/products/aboutUsFistSliderImageMob.png"
            alt="About Us"
            fill
            className="object-cover lg:hidden"
          />
          {/* Desktop Image */}
          <Image
            src="/images/products/aboutUsFistSliderImage.png"
            alt="About Us"
            fill
            className="object-cover hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}
