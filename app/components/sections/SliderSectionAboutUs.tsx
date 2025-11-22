"use client";

/**
 * SliderSectionAboutUs Component
 *
 * About Us section with equal left and right columns
 * Left: Text content (heading, description)
 * Right: Image display
 */

import Image from "next/image";
import Container from "../Container";
import SliderTextForAboutUs from "./SliderTextForAboutUs";

export default function SliderSectionAboutUs() {
  return (
    <section className="w-full px-4 sm:px-8">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="flex flex-col gap-8 justify-center items-center h-full pt-24">
            <SliderTextForAboutUs />
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full h-[400px] sm:h-[500px]">
            <Image
              src="/images/products/aboutUsFistSliderImage.png"
              alt="About Us"
              fill
              className="object-cover rounded-[20px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
