/**
 * ProductFeaturesBox Component
 *
 * Displays product features in a 3-column grid
 * Features include SVG icons and labels
 */

import Image from "next/image";

interface Feature {
  icon: string;
  label: string;
}

interface ProductFeaturesBoxProps {
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  { icon: "/images/icons/bpa-free.svg", label: "Bez BPA" },
  { icon: "/images/icons/leak-proof.svg", label: "Ne propušta" },
  { icon: "/images/icons/miniBoxes.svg", label: "18/8 nerđajući čelik" },
  { icon: "/images/icons/rubberBase.svg", label: "Gumena osnova" },
  { icon: "/images/icons/24h-cold.svg", label: "24h hladna voda" },
  { icon: "/images/icons/cupHolderFriendly.svg", label: "Staje u držač čaša" },
];

export default function ProductFeaturesBox({
  features = defaultFeatures,
}: ProductFeaturesBoxProps) {
  return (
    <div className="bg-dose-peach rounded-[20px] px-[24px] py-[32px]">
      <div className="grid grid-cols-3 gap-[24px]">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-row items-center gap-[12px]">
            <div className="relative shrink-0 icon-small-responsive">
              <Image
                src={feature.icon}
                alt={feature.label}
                fill
                className="object-contain"
              />
            </div>
            <p className="font-medium text-dose-dark leading-[1.4] text-small-responsive">
              {feature.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
