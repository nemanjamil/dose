"use client";

/**
 * SliderText Component
 *
 * Text content part of the slider with:
 * - Multi-line title
 * - Description paragraph
 * - CTA button
 *
 * Responsive design for mobile, tablet, and desktop views.
 */

import { useRouter } from "next/navigation";
import CTAButton from "@/app/components/CTAButton";

const title = "Termos koji ti treba. Svaki dan.";
const description =
  "Dose nije samo termos. To je navika, stil i briga o sebi, u pokretu. Svaki gutljaj, sigurnost i stil uvek sa tobom.";

export default function SliderText() {
  const router = useRouter();

  const handleShopClick = () => {
    router.push("/shop");
  };
  return (
    <div className="flex flex-col gap-[24px] sm:gap-[32px] items-center md:items-start w-full lg:w-auto">
      {/* Title */}
      <div className="flex flex-col gap-3 sm:gap-4 items-center md:items-start w-full ">
        <h1 className="font-bold text-dose-dark lg:text-left text-center lg:pr-32">
          {title}
        </h1>

        {/* Description */}
        <p className="font-medium text-dose-mid text-[18px] tracking-[-0.28px] sm:tracking-[-0.32px] md:tracking-[-0.36px] leading-[1.5] max-w-[280px] sm:max-w-[355px] text-center md:text-left">
          {description}
        </p>
      </div>

      {/* CTA Button */}
      <CTAButton
        label="Shop now"
        iconSrc="/images/products/frame.svg"
        iconAlt="Shop icon"
        onClick={handleShopClick}
      />
    </div>
  );
}
