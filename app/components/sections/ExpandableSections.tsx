/**
 * ExpandableSections Component
 *
 * Displays multiple expandable sections with titles and content
 * Used for product details like Image Description, Composition, Usage Instructions
 */

import { useState } from "react";

interface Section {
  title: string;
  content: string;
}

interface ExpandableSectionsProps {
  productDescription?: string;
  sections?: Section[];
}

const staticSections: Section[] = [
  {
    title: "Specifikacija",
    content:
      "Vrhunski nerđajući čelik 18/8, izolovana konstrukcija sa dvostrukim zidom, materijali bez BPA, gumena osnova stabilnosti, sistem zaptivke otporan na curenje, ergonomski dizajn rukohvata.",
  },
  {
    title: "Oržavanje",
    content:
      "Za optimalno održavanje i dugotrajnu upotrebu, termos perite blagim deterdžentom te ga nakon toga detaljno isperite pod mlazom tekuće vode.",
  },
];

export default function ExpandableSections({
  productDescription,
  sections,
}: ExpandableSectionsProps) {
  const defaultSections: Section[] = [
    ...(productDescription
      ? [{ title: "Opis Proizvoda", content: productDescription }]
      : []),
    ...staticSections,
  ];

  const displaySections = sections ?? defaultSections;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-[12px]">
      {displaySections.map((section, index) => (
        <div
          key={index}
          className="w-full border border-dose-accent/20 rounded-[12px] overflow-hidden"
        >
          <button
            onClick={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
            className="w-full flex items-center justify-between px-4 py-4 bg-dose-light hover:bg-dose-light/80 transition-colors"
          >
            <span className="text-dose-dark font-bold text-[16px]">
              {section.title}
            </span>
            <span className="text-dose-dark text-[20px] font-bold">
              {expandedIndex === index ? "−" : "+"}
            </span>
          </button>

          {/* Expandable Content */}
          {expandedIndex === index && (
            <div className="px-4 py-4 border-t border-dose-light">
              <p className="text-dose-mid font-medium text-[14px] sm:text-[16px] leading-[1.6]">
                {section.content}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
