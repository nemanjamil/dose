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
  { icon: "/images/icons/bpa-free.svg", label: "BPA-free" },
  { icon: "/images/icons/leak-proof.svg", label: "Leak proof" },
  { icon: "/images/icons/miniBoxes.svg", label: "18/8 Stainless Steel" },
  { icon: "/images/icons/rubberBase.svg", label: "Rubber base" },
  { icon: "/images/icons/24h-cold.svg", label: "24h cold water" },
  { icon: "/images/icons/cupHolderFriendly.svg", label: "Cup Holder Friendly" },
];

export default function ProductFeaturesBox({
  features = defaultFeatures,
}: ProductFeaturesBoxProps) {
  return (
    <div className="bg-dose-peach rounded-[20px] px-[24px] py-[32px]">
      <div className="grid grid-cols-3 gap-[24px]">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-row items-center gap-[12px]">
            <div className="relative w-[40px] h-[40px] shrink-0">
              <Image
                src={feature.icon}
                alt={feature.label}
                fill
                className="object-contain"
              />
            </div>
            <p className="font-medium text-dose-dark text-[14px] leading-[1.4]">
              {feature.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
