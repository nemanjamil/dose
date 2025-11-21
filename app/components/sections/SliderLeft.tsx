/**
 * SliderLeft Component
 *
 * Left side of the slider with:
 * - Title (multi-line)
 * - Description text
 * - CTA button
 */

import CTAButton from "../CTAButton";

interface SliderLeftProps {
  title: string[];
  description: string;
  onShopClick?: () => void;
}

export default function SliderLeft({
  title,
  description,
  onShopClick,
}: SliderLeftProps) {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 items-start w-full lg:w-auto">
      {/* Title */}
      <div className="flex flex-col gap-3 sm:gap-4 items-start w-full">
        <h1 className="font-bold text-dose-dark text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] tracking-[-0.64px] sm:tracking-[-0.8px] md:tracking-[-0.96px] lg:tracking-[-1.12px] leading-tight max-w-[300px] sm:max-w-[355px]">
          {title.map((line, idx) => (
            <p key={idx} className="mb-0">
              {line}
            </p>
          ))}
        </h1>

        {/* Description */}
        <p className="font-medium text-dose-mid text-[14px] sm:text-[16px] md:text-[18px] tracking-[-0.28px] sm:tracking-[-0.32px] md:tracking-[-0.36px] leading-normal max-w-[280px] sm:max-w-[355px]">
          {description}
        </p>
      </div>

      {/* CTA Button */}
      <CTAButton onClick={onShopClick} />
    </div>
  );
}
