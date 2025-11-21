"use client";

/**
 * ArrowButtonPair Component
 *
 * Carousel controls with left arrow, slide counter, and right arrow
 * Reusable across pages for carousel navigation
 * Design: https://www.figma.com/design/I7GYdab3FirpOg941b6wTL/Dose-Web-Project?node-id=59-464&m=dev
 */

interface ArrowButtonPairProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  layout?: "horizontal" | "vertical";
  variant?: "default" | "compact";
}

export default function ArrowButtonPair({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  layout = "horizontal",
  variant = "default",
}: ArrowButtonPairProps) {
  const isVertical = layout === "vertical";

  const containerClass = isVertical
    ? "flex flex-col gap-[var(--spacing-24)] items-center"
    : "flex gap-[var(--spacing-24)] items-center";

  const counterPadding =
    variant === "compact"
      ? "px-[var(--spacing-12)] py-[var(--spacing-8)]"
      : "px-[var(--spacing-16)] py-[var(--spacing-8)]";
  const counterTextSize =
    variant === "compact" ? "text-[14px]" : "text-[16px] sm:text-[18px]";
  const counterTracking =
    variant === "compact"
      ? "tracking-[-0.28px]"
      : "tracking-[-0.32px] sm:tracking-[-0.36px]";

  return (
    <div className="bg-white rounded-[99px] px-[var(--spacing-8)] py-[var(--spacing-8)] shadow-[0px_10px_24px_0px_rgba(135,84,55,0.3)]">
      <div className={containerClass}>
        {/* Left Arrow Button */}
        <button
          onClick={onPrevious}
          aria-label="Previous slide"
          className="bg-dose-peach hover:bg-[#ffd4b8] transition-colors flex gap-[var(--spacing-8)] items-center justify-center px-[var(--spacing-12)] py-[var(--spacing-8)] rounded-[99px] size-[46px] flex-shrink-0"
        >
          <svg
            className="w-[24px] h-[24px] text-dose-dark"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Slide Counter */}
        <div
          className={`bg-dose-peach ${counterPadding} rounded-[99px] flex items-center justify-center ${
            isVertical ? "min-w-[80px] h-[49px]" : "min-w-[80px]"
          }`}
        >
          <p
            className={`font-bold text-dose-accent ${counterTextSize} ${counterTracking}`}
          >
            {String(currentSlide).padStart(2, "0")} /{" "}
            {String(totalSlides).padStart(2, "0")}
          </p>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={onNext}
          aria-label="Next slide"
          className="bg-dose-peach hover:bg-[#ffd4b8] transition-colors flex gap-[var(--spacing-8)] items-center justify-center px-[var(--spacing-12)] py-[var(--spacing-8)] rounded-[99px] size-[46px] flex-shrink-0"
        >
          <svg
            className="w-[24px] h-[24px] text-dose-dark"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
}
