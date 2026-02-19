/**
 * ShopMainBanner Component
 *
 * Hero banner section for the shop page
 * Uses reusable HeroSection component with shop background image
 */

import HeroSection from "./HeroSection";
import HeroSectionMobileShop from "./HeroSectionMobileShop";

export default function ShopMainBanner() {
  return (
    <>
      {/* Mobile View */}
      <HeroSectionMobileShop
        backgroundImageMobile="/images/products/fourCupsMob.png"
        backgroundColor="#FEF8F4"
        badge="DOSE SHOP"
        heading="Shop now"
        description="Explore our collections and products and choose the one that fits the best with your lifestyle"
        features={[]}
        centerImage=""
        productLabel=""
        textColor="dark"
        aspectRatio="366/750"
      />

      {/* Desktop View */}
      <div className="hidden lg:block">
        <HeroSection
          backgroundImage="/images/products/ShopMainImageBanner.jpg"
          backgroundColor="#FEF8F4"
          badge="DOSE SHOP"
          heading="Shop now"
          description="Explore our collections and products and choose the one that fits the best with your lifestyle"
          features={[]}
          productImage="/images/products/malaSlikaHeader.png"
          productName="Featured Product"
          productColorway="All Colors"
          productPrice="Od 2999 RSD"
          productLabel="Explore All Products"
          textColor="dark"
          centerImage="/images/products/designTwoCups.png"
          showProductCard={false}
          showFeatures={true}
          textPosition="right"
          containerHeight={450}
        />
      </div>
    </>
  );
}
