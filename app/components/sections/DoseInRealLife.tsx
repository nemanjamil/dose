/**
 * DoseInRealLife Component
 *
 * Section showcasing real-life moments with DOSE products
 * Features title and description content
 *
 * Figma design: https://www.figma.com/design/I7GYdab3FirpOg941b6wTL/Dose-Web-Project?node-id=95-15&m=dev
 */

import Container from "../Container";

export default function DoseInRealLife() {
  return (
    <section className="w-full py-16 px-4 sm:px-8">
      <Container>
        {/* Centered Text Content */}
        <div className="flex flex-col gap-6 items-center text-center mb-8 max-w-[675px] mx-auto">
          <h2 className="font-bold text-dose-dark text-[32px] sm:text-[48px] lg:text-[56px] tracking-[-0.64px] sm:tracking-[-0.96px] lg:tracking-[-1.12px] leading-[1.2]">
            DOSE u stvarnom životu
          </h2>
          <p className="font-medium text-dose-mid text-[14px] sm:text-[16px] lg:text-[18px] tracking-[-0.28px] sm:tracking-[-0.32px] lg:tracking-[-0.36px] leading-[1.5]">
            Zavirite u trenutke naših korisnica, njihove navike, pokrete i
            svakodnevicu sa DOSE-om. Jer inspiracija dolazi iz onog što je
            stvarno.
          </p>
        </div>
      </Container>
    </section>
  );
}
