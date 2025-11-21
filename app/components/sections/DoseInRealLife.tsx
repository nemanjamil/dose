"use client";

/**
 * DoseInRealLife Component
 *
 * Carousel section showcasing real-life moments with DOSE products
 * Features title, description, carousel navigation controls, and vertical carousel controls in bottom-right corner
 *
 * Figma design: https://www.figma.com/design/I7GYdab3FirpOg941b6wTL/Dose-Web-Project?node-id=95-15&m=dev
 */

import { useState } from "react";
import { ArrowButtonPair } from "../buttons";

export default function DoseInRealLife() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 12;

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
  };

  return (
    <div className="py-[48px] sm:py-[64px] px-[16px] sm:px-[32px] relative">
      <div className="max-w-[1440px] mx-auto px-[16px] sm:px-[32px] relative">
        {/* Centered Text Content */}
        <div className="flex flex-col gap-[16px] items-center text-center mb-[32px] sm:mb-[48px] max-w-[675px] mx-auto">
          <h2 className="font-bold text-dose-dark text-[32px] sm:text-[48px] lg:text-[56px] tracking-[-0.64px] sm:tracking-[-0.96px] lg:tracking-[-1.12px] leading-[1.2]">
            DOSE u stvarnom životu
          </h2>
          <p className="font-medium text-dose-mid text-[14px] sm:text-[16px] lg:text-[18px] tracking-[-0.28px] sm:tracking-[-0.32px] lg:tracking-[-0.36px] leading-[1.5]">
            Zavirite u trenutke naših korisnica, njihove navike, pokrete i
            svakodnevicu sa DOSE-om. Jer inspiracija dolazi iz onog što je
            stvarno.
          </p>
        </div>
      </div>
    </div>
  );
}
