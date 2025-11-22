"use client";

/**
 * BuyYourDoseToday Component
 *
 * Section with two rows - first row features a background image, second row has text content
 * Both rows are centered
 */

import Image from "next/image";
import Container from "../Container";
import { ColorSwatch } from "./Slider";
import CTAButton from "../CTAButton";

export default function BuyYourDoseToday() {
  const handleShopClick = () => {
    window.location.href = "/shop";
  };

  return (
    <section className="w-full py-16 px-4 sm:px-8">
      <Container>
        <div className="flex flex-col gap-8 items-center">
          {/* First Row - Background Image */}
          <div className="relative w-[80%] h-[400px] rounded-[32px] overflow-hidden">
            <Image
              src="/images/sections/grupnaSlika.png"
              alt="Group image"
              fill
              className="object-cover"
            />
          </div>

          {/* Second Row - Text Content */}
          <div className="flex flex-col gap-6 items-center text-center max-w-[600px]">
            {/* Item 1 - ColorSwatch */}
            <ColorSwatch />

            <div className="flex flex-col items-center gap-3">
              <h2 className="text-dose-dark font-bold text-[56px] tracking-[-0.48px] text-center">
                Kupi svoj Dose danas!
              </h2>

              <p className="text-dose-dark">
                Poseti shop, istrazi ponudu i pronadji svoj Dose termos koji se
                idealno uklopa uz tvoj stil zivota.
              </p>
            </div>

            <CTAButton onClick={handleShopClick} />
          </div>
        </div>
      </Container>
    </section>
  );
}
