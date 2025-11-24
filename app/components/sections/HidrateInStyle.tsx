"use client";

/**
 * HidrateInStyle Component
 *
 * Section showcasing the hydration and style of DOSE thermoses
 */

import { ColorSwatch } from "../sections/Slider/SliderProduct";
import CTAButton from "../CTAButton";
import Container from "../Container";

export default function HidrateInStyle() {
  const handleShopClick = () => {
    window.location.href = "/shop";
  };

  return (
    <section className="w-full px-4 sm:px-8">
      <Container>
        <div className="flex flex-col gap-16 lg:mt-0 mt-24">
          <div className="flex justify-center flex-col items-center gap-1">
            {/* Item 1 - ColorSwatch */}
            <ColorSwatch />

            <div className="flex flex-col items-center gap-3">
              <h1 className="text-dose-dark text-center">
                Hydrate in Style. Choose. Your Dose Flask.
              </h1>
              <div className="w-fit">
                <CTAButton onClick={handleShopClick} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
