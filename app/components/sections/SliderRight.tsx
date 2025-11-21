/**
 * SliderRight Component
 *
 * Right side of the slider with:
 * - Product image (placeholder with green background for now)
 * - Feature badges
 * - Color swatches
 * - Slide indicators
 *
 * TODO: Replace green background with actual product image from public/images/slider/
 */

export default function SliderRight() {
  return (
    <div className="relative w-full lg:w-auto h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex-shrink-0">
      {/* Green placeholder background */}
      <div className="absolute inset-0 shadow-[0px_20px_48px_0px_rgba(135,84,55,0.15)] rounded-[12px] sm:rounded-[16px] overflow-hidden bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center">
        <div className="text-center text-white">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold text-[24px] sm:text-[32px]">
            Product Image
          </p>
          <p className="font-['Albert_Sans:Medium',sans-serif] font-medium text-[14px] sm:text-[16px] mt-[8px]">
            Placeholder - Add image from Figma
          </p>
          <p className="font-['Albert_Sans:Medium',sans-serif] font-medium text-[12px] sm:text-[14px] mt-[12px] opacity-80">
            Save to: public/images/slider/thermos-main.jpg
          </p>
        </div>

        {/* Feature Badges - Placeholder */}
        <div className="absolute top-[20px] left-[12px] sm:left-[24px] bg-white px-[12px] py-[8px] rounded-[99px] shadow-md">
          <p className="font-['Albert_Sans:Medium',sans-serif] font-medium text-[12px] sm:text-[14px] text-[#a7253b]">
            Badges will appear here
          </p>
        </div>

        {/* Slide Indicators - Placeholder */}
        <div className="absolute right-[16px] md:right-[32px] top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-[8px]">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`flex items-center justify-center rounded-[99px] size-[40px] sm:size-[46px] font-['Albert_Sans:SemiBold',sans-serif] font-semibold text-[16px] sm:text-[20px] tracking-[-0.32px] sm:tracking-[-0.4px] ${
                num === 1 ? 'bg-white text-[#a7253b]' : 'bg-[rgba(255,255,255,0.4)] text-[rgba(167,37,59,0.4)]'
              }`}
            >
              {String(num).padStart(2, '0')}
            </div>
          ))}
        </div>

        {/* Colors Available - Placeholder */}
        <div className="absolute bottom-[12px] sm:bottom-[32px] left-[12px] sm:left-[32px] flex gap-[8px] sm:gap-[12px] items-center">
          <div className="h-[20px] sm:h-[24px] w-[80px] sm:w-[104px]">
            <div className="flex gap-[4px] h-full">
              <div className="w-[16px] sm:w-[20px] h-full rounded-full bg-[#ff69a0]" />
              <div className="w-[16px] sm:w-[20px] h-full rounded-full bg-[#ff8c88]" />
              <div className="w-[16px] sm:w-[20px] h-full rounded-full bg-[#a7253b]" />
              <div className="w-[16px] sm:w-[20px] h-full rounded-full bg-[#2c5aa0]" />
            </div>
          </div>
          <p className="font-['Albert_Sans:Medium',sans-serif] font-medium text-white text-[13px] sm:text-[16px] md:text-[18px] tracking-[-0.26px] sm:tracking-[-0.32px] md:tracking-[-0.36px] whitespace-nowrap">
            14+ colors
          </p>
        </div>
      </div>
    </div>
  );
}
