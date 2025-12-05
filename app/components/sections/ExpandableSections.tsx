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
  sections?: Section[];
}

const defaultSections: Section[] = [
  {
    title: "Image Description",
    content:
      "This is a high-quality product image showing the thermos from multiple angles. The image demonstrates the premium design, color options, and functional features of our DOSE thermos collection. Perfect for viewing product details before purchase.",
  },
  {
    title: "Sastav",
    content:
      "Premium food-grade stainless steel 18/8, double-wall insulated construction, BPA-free materials, rubber base for stability, leak-proof sealing system, ergonomic grip design.",
  },
  {
    title: "Nacin Upotrebe",
    content:
      "Pour hot or cold beverages into the thermos. Ensure the lid is tightly sealed before use. For best insulation, fill with hot beverages first to preheat the container. Avoid placing in dishwasher. Hand wash with warm water and mild soap. Store with lid open to prevent odors.",
  },
];

export default function ExpandableSections({
  sections = defaultSections,
}: ExpandableSectionsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-[12px]">
      {sections.map((section, index) => (
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
