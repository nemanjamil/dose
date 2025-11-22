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

const imgFrame = "/images/products/frame.svg";

const title = "Termos koji ti treba. Svaki dan.";
const description =
  'Dose nije samo termos. To je navika, stil i briga o sebi, u pokretu. Svaki gutljaj, sigurnost i stil uvek sa tobom.';

export default function SliderText() {
  const router = useRouter();

  const handleShopClick = () => {
    router.push("/shop");
  };
  return (
    <div className="flex flex-col gap-[24px] sm:gap-[32px] items-center md:items-start w-full lg:w-auto">
      {/* Title */}
      <div className="flex flex-col gap-[12px] sm:gap-[16px] items-center md:items-start w-full">
        <h2 className="font-bold text-dose-dark text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] tracking-[-0.64px] sm:tracking-[-0.8px] md:tracking-[-0.96px] lg:tracking-[-1.12px] leading-[1.2] max-w-[300px] sm:max-w-[355px] text-center md:text-left">
          {title}
        </h2>

        {/* Description */}
        <p className="font-medium text-dose-mid text-[14px] sm:text-[16px] md:text-[18px] tracking-[-0.28px] sm:tracking-[-0.32px] md:tracking-[-0.36px] leading-[1.5] max-w-[280px] sm:max-w-[355px] text-center md:text-left">
          {description}
        </p>
      </div>

      {/* CTA Button */}
      <button
        onClick={handleShopClick}
        className="bg-dose-accent flex gap-[16px] sm:gap-[24px] items-center pl-[8px] pr-[16px] sm:pr-[24px] py-[8px] rounded-[20px] shadow-[0px_10px_24px_0px_rgba(135,84,55,0.3)] hover:opacity-90 transition-opacity active:scale-95 w-auto"
      >
        <div className="bg-dose-peach flex gap-[10px] items-center justify-center px-[8px] sm:px-[11px] py-[8px] sm:py-[10px] rounded-[14px] size-[40px] sm:size-[46px] flex-shrink-0">
          <div className="relative size-[20px] sm:size-[24px]">
            <img alt="Shop icon" className="w-full h-full" src={imgFrame} />
          </div>
        </div>
        <p className="font-bold text-dose-light text-[14px] sm:text-[16px] tracking-[-0.28px] sm:tracking-[-0.32px] uppercase whitespace-nowrap">
          Shop now
        </p>
      </button>
    </div>
  );
}
