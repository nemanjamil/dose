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
      <h1 className="text-dose-dark text-center md:text-left max-w-[400px] sm:max-w-[500px]">
        {title}
      </h1>

      {/* Description */}
      <p className="text-p-responsive lg:px-0 px-10 text-dose-mid text-center md:text-left max-w-[400px] sm:max-w-[500px] whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
