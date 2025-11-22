/**
 * SlideIndicators Component
 * Vertical slide indicators (01, 02, 03) with click handlers
 */

interface SlideIndicatorsProps {
  currentSlide: number;
  onSlideChange: (slide: number) => void;
}

export default function SlideIndicators({ currentSlide, onSlideChange }: SlideIndicatorsProps) {
  const slides = [
    { number: "01", index: 0 },
    { number: "02", index: 1 },
    { number: "03", index: 2 },
  ];

  return (
    <div className="absolute right-[16px] bottom-[16px] flex h-[166px] w-[62px] items-center justify-center">
      <div className="rotate-90">
        <div className="bg-[rgba(255,255,255,0.4)] box-border flex gap-[6px] items-start p-[8px] rounded-[99px] shadow-[0px_10px_24px_0px_rgba(160,157,151,0.3)]">
          {slides.map((slide) => (
            <div key={slide.index} className="flex gap-[24px] items-center">
              <button
                onClick={() => onSlideChange(slide.index)}
                className={`flex gap-[10px] items-center justify-center px-[11px] py-[10px] rounded-[99px] size-[46px] flex-shrink-0 transition-all duration-300 cursor-pointer ${
                  currentSlide === slide.index
                    ? "bg-white"
                    : "bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.6)]"
                }`}
                aria-label={`Go to slide ${slide.number}`}
              >
                <div className="flex h-[25px] w-[30px] items-center justify-center">
                  <div className="-rotate-90">
                    <p
                      className={`font-semibold text-[20px] tracking-[-0.4px] ${
                        currentSlide === slide.index
                          ? "text-dose-accent"
                          : "text-[rgba(167,37,59,0.4)]"
                      }`}
                    >
                      {slide.number}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
