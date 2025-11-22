"use client";

/**
 * CenteredText Component
 *
 * Section with centered text content
 * Displays heading text centered at 50% width
 */

import Container from "../Container";

export default function CenteredText() {
  return (
    <section className="w-full py-16 px-4 sm:px-8">
      <Container>
        <div className="flex justify-center">
          <div className="w-[40%] flex items-center justify-center">
            <h2 className="font-bold text-dose-dark text-[40px] sm:text-[56px] tracking-[-0.64px] sm:tracking-[-1.12px] leading-[1.2] text-center">
              What our customers have to say
            </h2>
          </div>
        </div>
      </Container>
    </section>
  );
}
