/**
 * HomeBanner Component
 *
 * Hero banner section showcasing DOSE brand
 * Uses reusable HeroSection component with TwoBottlesBackground image
 */

import HeroSection from "./HeroSection";

export default function HomeBanner() {
  return (
    <HeroSection
      backgroundImage="/images/sections/TwoBottlesBackground.png"
      badge="DOSE"
      heading="Premium Hydration Bottles"
      description="Experience the perfect blend of style and functionality. DOSE bottles keep your beverages at the ideal temperature while making a statement about your personal style."
      features={["NO PLASTIC", "STAINLESS STEEL"]}
      productImage="/images/products/malaSlikaHeader.png"
      productName="Product name"
      productColorway="Colorway"
      productPrice="price $35"
      productLabel="Mini 0,6 L Traveler Bottle"
      textColor="dark"
      centerImage="/images/products/designCup.png"
    />
  );
}
