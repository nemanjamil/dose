import { SliderSection } from "../../components/sections/Slider";
import DoseInRealLife from "../../components/sections/DoseInRealLife";
import HoldingDoseSlider from "../../components/sections/HoldingDoseSlider";

/**
 * Home Page (/ route)
 *
 * Main landing page for the Dose website.
 * Displays the hero slider and multiple content sections showcasing
 * the brand, design philosophy, and products.
 */
export default function HomePage() {
  return (
    <div className="relative w-full" data-name="Homepage Desktop">
      {/* Slider Section */}
      <SliderSection />

      {/* Section: Featured Product - Based on Figma node-id 95-15 */}
      <DoseInRealLife />

      <HoldingDoseSlider />
    </div>
  );
}
