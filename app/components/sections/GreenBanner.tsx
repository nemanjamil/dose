"use client";

/**
 * GreenBanner Component
 *
 * Wrapper section for HeroSection with green forest background
 * Used on About Us page to showcase sustainability message
 * Desktop: HeroSection | Mobile: HeroSectionMobile (1100px height)
 */

import HeroSection from "./HeroSection";
import HeroSectionMobile from "./HeroSectionMobile";

export default function GreenBanner() {
  return (
    <>
      {/* Mobile View - 1100px height */}
      <HeroSectionMobile
        backgroundImageMobile="/images/products/greenForestMobile.png"
        backgroundColor="#2D5016"
        heading="Priroda je naš inspirator."
        description="Svaki Dose termos je kreat sa svešću o životnoj sredini. Koristi se trajni materijal, minimalan packaging, i maksimalnu brigu o planeti."
        features={["Eco-Friendly", "Sustainable", "Premium Quality"]}
        centerImage=""
        productLabel=""
        textColor="light"
        aspectRatio="366/900"
      />

      {/* Desktop View */}
      <section
        id="GreenBannerWeb"
        className="w-full lg:px-4 sm:px-8 hidden lg:block"
      >
        <div className="rounded-md overflow-hidden">
          <HeroSection
            backgroundImage="/images/products/greenForest.png"
            backgroundColor="#2D5016"
            badge="Održivo"
            heading="Priroda je naš inspirator."
            description="Svaki Dose termos je kreat sa svešću o životnoj sredini. Koristi se trajni materijal, minimalan packaging, i maksimalnu brigu o planeti."
            features={["Eco-Friendly", "Sustainable", "Premium Quality"]}
            showFeatures={false}
            productImage="/images/products/handHoldingDose1.png"
            productName="Dose Max"
            productColorway="Forest Green"
            productPrice="$89.99"
            productLabel="Eco Edition"
            textColor="light"
            centerImage=""
            showProductCard={false}
            textPosition="right"
          />
        </div>
      </section>
    </>
  );
}
