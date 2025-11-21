/**
 * SliderLeft Component
 *
 * Left side of the slider with:
 * - Title (multi-line)
 * - Description text
 * - CTA button
 */

interface SliderLeftProps {
  title: string[];
  description: string;
  onShopClick?: () => void;
}

const imgFrame = "/images/products/frame.svg";

export default function SliderLeft({
  title,
  description,
  onShopClick,
}: SliderLeftProps) {
  return (
    <div className="flex flex-col gap-[24px] sm:gap-[32px] items-start w-full lg:w-auto">
      {/* Title */}
      <div className="flex flex-col gap-[12px] sm:gap-[16px] items-start w-full">
        <h1 className="font-bold font-bold text-dose-dark text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] tracking-[-0.64px] sm:tracking-[-0.8px] md:tracking-[-0.96px] lg:tracking-[-1.12px] leading-[1.2] max-w-[300px] sm:max-w-[355px]">
          {title.map((line, idx) => (
            <p key={idx} className="mb-0">
              {line}
            </p>
          ))}
        </h1>

        {/* Description */}
        <p className="font-medium font-medium text-dose-mid text-[14px] sm:text-[16px] md:text-[18px] tracking-[-0.28px] sm:tracking-[-0.32px] md:tracking-[-0.36px] leading-[1.5] max-w-[280px] sm:max-w-[355px]">
          {description}
        </p>
      </div>

      {/* CTA Button */}
      <button
        onClick={onShopClick}
        className="bg-dose-accent flex gap-[16px] sm:gap-[24px] items-center pl-[8px] pr-[16px] sm:pr-[24px] py-[8px] rounded-[20px] shadow-[0px_10px_24px_0px_rgba(135,84,55,0.3)] hover:opacity-90 transition-opacity active:scale-95 w-full sm:w-auto justify-center sm:justify-start"
      >
        <div className="bg-dose-peach flex gap-[10px] items-center justify-center px-[8px] sm:px-[11px] py-[8px] sm:py-[10px] rounded-[14px] size-[40px] sm:size-[46px] flex-shrink-0">
          <div className="relative size-[20px] sm:size-[24px]">
            <img alt="Shop icon" className="w-full h-full" src={imgFrame} />
          </div>
        </div>
        <p className="font-bold font-bold text-dose-light text-[14px] sm:text-[16px] tracking-[-0.28px] sm:tracking-[-0.32px] uppercase whitespace-nowrap">
          Shop now
        </p>
      </button>
    </div>
  );
}
