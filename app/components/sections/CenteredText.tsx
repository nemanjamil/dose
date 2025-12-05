/**
 * CenteredText Component
 *
 * Section with centered text content
 * Displays heading text centered with responsive width
 */

import Container from "../Container";

export default function CenteredText() {
  return (
    <section id="CenteredText" className="w-full px-4 sm:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center gap-[24px]">
          {/* Rating Badge */}
          <div className="bg-dose-accent/20 rounded-[99px] px-[24px] py-[12px] flex items-center gap-[12px] w-fit">
            <span className="text-dose-accent text-[18px]">⭐</span>
            <p className="font-medium text-dose-accent text-[16px] tracking-[-0.32px] leading-[1.5]">
              650+ 5 star rating reviews
            </p>
          </div>

          {/* Centered Heading */}
          <div className="w-full sm:w-[80%] lg:w-[60%] max-w-[600px] flex items-center justify-center">
            <h2 className="font-bold text-dose-dark text-center">
              What our customers have to say
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
