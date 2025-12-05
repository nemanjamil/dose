"use client";

/**
 * BuyYourDoseToday Component
 *
 * Section with two rows - first row features a background image, second row has text content
 * Both rows are centered
 */

import { useRouter } from "next/navigation";
import Image from "next/image";
import Container from "../Container";
import { ColorSwatch } from "./Slider";
import CTAButton from "../CTAButton";

export default function BuyYourDoseToday() {
  const router = useRouter();

  const handleShopClick = () => {
    router.push("/shop");
  };

  return (
    <section id="BuyYourDoseToday" className="w-full lg:px-0 sm:px-8">
      <div className="max-w-[1440px] lg:h-[825px] mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* First Row - Background Image */}
          {/* Mobile Image */}
          <div className="relative w-[100%] h-[775px] rounded-[32px] overflow-hidden mx-auto lg:hidden">
            <Image
              src="/images/products/hubImagesMob.png"
              alt="Group image"
              fill
              className="object-cover"
            />
          </div>

          {/* Desktop Image */}
          <div className="relative w-full lg:h-[575px] h-[575px] rounded-[32px] overflow-hidden mx-auto hidden lg:block">
            <Image
              src="/images/sections/grupnaSlika.png"
              alt="Group image"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <ColorSwatch />
            </div>
          </div>

          {/* Second Row - Text Content */}
          <div className="flex flex-col gap-6 items-center text-center max-w-[600px]">
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-dose-dark text-center">
                Kupi svoj Dose danas!
              </h1>

              <p className="text-dose-dark font-medium text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.5]">
                Istrazi ponudu i pronadji svoj Dose termos koji se idealno
                uklopa uz tvoj stil zivota.
              </p>
            </div>

            <CTAButton onClick={handleShopClick} />
          </div>
        </div>
      </div>
    </section>
  );
}
