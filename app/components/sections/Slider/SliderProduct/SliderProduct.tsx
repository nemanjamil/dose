/**
 * SliderProduct Component
 *
 * Product image part of the slider with subcomponents:
 * - ProductImage: Main product image
 * - FeatureBadge: Feature badges (BPA Free, Leak proof, 24h cold water)
 * - ColorSwatch: Color options display
 * - SlideIndicators: Slide navigation (01, 02, 03)
 * - TopBar: Social icons and Shop Now button
 *
 * Figma design: https://www.figma.com/design/I7GYdab3FirpOg941b6wTL/Dose-Web-Project?node-id=95-3
 */

import ProductImage from './ProductImage';
import FeatureBadge from './FeatureBadge';
import ColorSwatch from './ColorSwatch';
import SlideIndicators from './SlideIndicators';
import TopBar from './TopBar';

// Feature badge icons - local images
const iconBPAFree = "/images/icons/bpa-free.svg";
const iconLeakProof = "/images/icons/leak-proof.svg";
const icon24hCold = "/images/icons/24h-cold.svg";

export default function SliderProduct() {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] shadow-[0px_20px_48px_0px_rgba(135,84,55,0.15)] rounded-[12px] sm:rounded-[16px] overflow-hidden bg-gray-100">
      {/* Product Image */}
      <ProductImage />

      {/* Feature Badges */}
      <FeatureBadge icon={iconBPAFree} label="BPA Free" position="top-left" />
      <FeatureBadge icon={iconLeakProof} label="Leak proof" position="top-right" />
      <FeatureBadge icon={icon24hCold} label="24h cold water" position="bottom-left" />

      {/* Color Swatches */}
      <ColorSwatch />

      {/* Slide Indicators */}
      <SlideIndicators />

      {/* Top Bar - Social Icons and Shop Button */}
      <TopBar />
    </div>
  );
}
