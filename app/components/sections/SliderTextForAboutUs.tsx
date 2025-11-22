"use client";

/**
 * SliderTextForAboutUs Component
 *
 * Text content for About Us section
 * Features heading and descriptive paragraphs
 */

export default function SliderTextForAboutUs() {
  const title = "Tvoja doza svakodnevne inspiracije.";
  const description = `DOSE je nastao iz jednostavne ideje – da svakodnevni predmeti mogu imati dublji smisao.

Naša misija je da spojimo funkcionalnost, estetiku i svesnost u proizvodima koji prate tvoj ritam dana – bilo da si u pokretu, na poslu ili u trenutku mira kod kuće.`;

  return (
    <div className="flex flex-col gap-6 items-center md:items-start w-full lg:w-[70%]">
      {/* Title */}
      <h1 className="font-bold text-dose-dark text-[32px] sm:text-[40px] md:text-[48px] tracking-[-0.64px] sm:tracking-[-0.8px] md:tracking-[-0.96px] leading-[1.2] text-center md:text-left max-w-[400px] sm:max-w-[500px]">
        {title}
      </h1>

      {/* Description */}
      <p className="font-medium text-dose-mid text-[14px] sm:text-[16px] md:text-[18px] tracking-[-0.28px] sm:tracking-[-0.32px] md:tracking-[-0.36px] leading-[1.5] text-center md:text-left max-w-[400px] sm:max-w-[500px] whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
