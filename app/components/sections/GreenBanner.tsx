"use client";

/**
 * GreenBanner Component
 *
 * Wrapper section for HeroSection with green forest background
 * Used on About Us page to showcase sustainability message
 */

import HeroSection from "./HeroSection";

export default function GreenBanner() {
  return (
    <section className="w-full lg:px-4 sm:px-8 my-16">
      <div className="rounded-md overflow-hidden">
        <HeroSection
          backgroundImage="/images/products/greenForest.png"
          backgroundColor="#2D5016"
          badge="Održivo"
          heading="Priroda je naš inspirator."
          description="Svaki Dose termos je kreat sa svešću o životnoj sredini. Koristi se trajni materijal, minimalan packaging, i maksimalnu brigu o planeti."
          features={["Eco-Friendly", "Sustainable", "Premium Quality"]}
          showFeatures={false}
          productImage="/images/products/handHoldingDose.png"
          productName="Dose Max"
          productColorway="Forest Green"
          productPrice="$89.99"
          productLabel="Eco Edition"
          textColor="light"
          centerImage="/images/products/handHoldingDose.png"
          showProductCard={false}
          textPosition="right"
        />
      </div>
    </section>
  );
}
