import { SliderSection } from "../../components/sections/Slider";
import DoseInRealLife from "../../components/sections/DoseInRealLife";
import DesignTellsForItSelf from "../../components/sections/DesignTellsForItSelf";
import HoldingDoseSlider from "../../components/sections/HoldingDoseSlider";
import HidrateInStyle from "../../components/sections/HidrateInStyle";
import DoseList from "../../components/sections/DoseList";
import BottlePageBrakePoint from "../../components/sections/BottlePageBrakePoint";

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

      {/* Section: Testimonials - Holding Dose Slider */}
      <HoldingDoseSlider />

      {/* Section: Design Philosophy - Based on Figma node-id 95-33 */}
      <DesignTellsForItSelf />

      <HidrateInStyle />

      <DoseList />

      <BottlePageBrakePoint />
    </div>
  );
}
