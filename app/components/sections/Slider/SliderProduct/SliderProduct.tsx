"use client";

/**
 * SliderProduct Component
 *
 * Product image part of the slider with subcomponents:
 * - ProductImage: Main product image
 * - FeatureBadge: Feature badges (dynamic based on slide)
 * - ColorSwatch: Color options display
 * - SlideIndicators: Slide navigation (01, 02, 03)
 * - TopBar: Social icons and Shop Now button
 *
 * Figma design: https://www.figma.com/design/I7GYdab3FirpOg941b6wTL/Dose-Web-Project?node-id=95-3
 */

import { useState } from "react";
import ProductImage from "./ProductImage";
import FeatureBadge from "./FeatureBadge";
import ColorSwatch from "./ColorSwatch";
import SlideIndicators from "./SlideIndicators";
import TopBar from "./TopBar";

// Feature badge icons - local images
const iconBPAFree = "/images/icons/bpa-free.svg";
const iconLeakProof = "/images/icons/leak-proof.svg";
const icon24hCold = "/images/icons/24h-cold.svg";
const rubberBase = "/images/icons/rubberBase.svg";
const cupHolderFrinedly = "/images/icons/cupHolderFriendly.svg";

// Type for feature position
type FeaturePosition = "top-left" | "top-right" | "bottom-left";

interface Feature {
  icon: string;
  label: string;
  position: FeaturePosition;
}

interface Slide {
  id: number;
  image: string;
  features: Feature[];
}

// Product slides data
const slides: Slide[] = [
  {
    id: 1,
    image: "/images/products/subtract.png",
    features: [
      { icon: iconBPAFree, label: "BPA Free", position: "top-left" },
      { icon: iconLeakProof, label: "Leak proof", position: "top-right" },
      { icon: icon24hCold, label: "24h cold water", position: "bottom-left" },
    ],
  },
  {
    id: 2,
    image: "/images/products/slider2.png",
    features: [
      {
        icon: cupHolderFrinedly,
        label: "Cup Holder Friendly",
        position: "top-left",
      },
      { icon: rubberBase, label: "Rubber base", position: "top-right" },
    ],
  },
  {
    id: 3,
    image: "/images/products/slider3.png",
    features: [
      {
        icon: iconBPAFree,
        label: "Food Grade Stainless",
        position: "top-left",
      },
      { icon: icon24hCold, label: "24h cold water", position: "top-right" },
      { icon: iconLeakProof, label: "Durable Design", position: "bottom-left" },
    ],
  },
];

export default function SliderProduct() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] shadow-[0px_20px_48px_0px_rgba(135,84,55,0.15)] rounded-[12px] sm:rounded-[16px] overflow-hidden bg-gray-100">
      {/* Product Image */}
      <ProductImage src={slide.image} />

      {/* Feature Badges */}
      {slide.features.map((feature, index) => (
        <FeatureBadge
          key={index}
          icon={feature.icon}
          label={feature.label}
          position={feature.position}
        />
      ))}

      {/* Color Swatches */}
      <div className="absolute left-[32px] bottom-[32px]">
        <ColorSwatch />
      </div>

      {/* Slide Indicators */}
      <SlideIndicators
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
      />

      {/* Top Bar - Social Icons and Shop Button (Desktop only) */}
      <div className="absolute hidden md:flex right-[0] top-[0px] gap-[16px] items-center">
        <TopBar />
      </div>
    </div>
  );
}
