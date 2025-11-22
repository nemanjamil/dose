"use client";

/**
 * RoundedBanner Component
 *
 * Wrapper section for HeroSection with rounded corners
 * Used on About Us page to showcase featured content
 */

import HeroSection from "./HeroSection";

export default function RoundedBanner() {
  return (
    <section className="w-full lg:px-4 sm:px-8 my-16">
      <div className="rounded-[32px] overflow-hidden">
        <HeroSection
          backgroundImage="/images/sections/TwoBottlesBackground.png"
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
        />
      </div>
    </section>
  );
}
