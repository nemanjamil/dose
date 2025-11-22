/**
 * CenteredText Component
 *
 * Section with centered text content
 * Displays heading text centered with responsive width
 */

import Container from "../Container";

export default function CenteredText() {
  return (
    <section className="w-full py-16 px-4 sm:px-8">
      <Container>
        <div className="flex justify-center">
          <div className="w-full sm:w-[80%] lg:w-[60%] max-w-[600px] flex items-center justify-center">
            <h2 className="font-bold text-dose-dark text-[32px] sm:text-[40px] lg:text-[56px] tracking-[-0.64px] sm:tracking-[-0.96px] lg:tracking-[-1.12px] leading-[1.2] text-center">
              What our customers have to say
            </h2>
          </div>
        </div>
      </Container>
    </section>
  );
}
