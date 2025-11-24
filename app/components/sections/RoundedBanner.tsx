"use client";

/**
 * RoundedBanner Component
 *
 * Wrapper section for HeroSection with rounded corners
 * Used on About Us page to showcase featured content
 */

import HeroSection from "./HeroSection";
import HeroSectionMobile from "./HeroSectionMobile";

export default function RoundedBanner() {
  return (
    <>
      {/* Mobile View */}
      <HeroSectionMobile
        backgroundImageMobile="/images/products/twoHandsRoseCupMob.jpg"
        backgroundColor="#E6E6E8"
        heading="Manje žurbe. Više svesti."
        description="Naš pristup nije sezonski trend – već dosledan izbor kvaliteta i pažnje. Verujemo da pravi luksuz danas znači birati promišljeno."
        features={["BPA Free", "Stainless Steel"]}
        centerImage=""
        productLabel="Limited Edition"
        textColor="dark"
      />

      {/* Desktop View */}
      <section className="w-full lg:px-4 sm:px-8 lg:my-0 my-16 hidden lg:block">
        <div className="rounded-md overflow-hidden">
          <HeroSection
            backgroundImage="/images/products/twoHandsRoseCup.jpg"
            backgroundColor="#E6E6E8"
            badge="Dostupno sada"
            heading="Manje žurbe. Više svesti."
            description="Naš pristup nije sezonski trend – već dosledan izbor kvaliteta i pažnje. Verujemo da pravi luksuz danas znači birati promišljeno, živeti odgovorno i uživati u jednostavnosti."
            features={["BPA Free", "Stainless Steel", "Premium Design"]}
            showFeatures={false}
            productImage="/images/products/handHoldingDose.png"
            productName="Dose Max"
            productColorway="Midnight Black"
            productPrice="$89.99"
            productLabel="Limited Edition"
            textColor="dark"
            centerImage="/images/products/handHoldingDose.png"
            showProductCard={false}
            textPosition="left"
          />
        </div>
      </section>
    </>
  );
}
