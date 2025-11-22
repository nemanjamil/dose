/**
 * ShopMainBanner Component
 *
 * Hero banner section for the shop page
 * Uses reusable HeroSection component with shop background image
 */

import HeroSection from "./HeroSection";

export default function ShopMainBanner() {
  return (
    <HeroSection
      backgroundImage="/images/sections/shopBanner.png"
      backgroundColor="#FEF8F4"
      badge="DOSE SHOP"
      heading="Shop now"
      description="Explore our collections and products and choose the one that fits the best with your lifestyle"
      features={["Premium Quality", "Free Shipping", "Easy Returns"]}
      productImage="/images/products/malaSlikaHeader.png"
      productName="Featured Product"
      productColorway="All Colors"
      productPrice="Starting at $35"
      productLabel="Explore All Products"
      textColor="dark"
      centerImage="/images/products/designTwoCups.png"
      showProductCard={false}
      showFeatures={true}
      textPosition="right"
    />
  );
}
