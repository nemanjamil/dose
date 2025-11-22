/**
 * DesignTellsForItSelf Component
 *
 * Hero section showcasing the design philosophy of DOSE thermoses
 * Uses reusable HeroSection component with design background image
 *
 * Figma design: https://www.figma.com/design/I7GYdab3FirpOg941b6wTL/Dose-Web-Project?node-id=95-33&m=dev
 */

import HeroSection from "./HeroSection";

export default function DesignTellsForItSelf() {
  return (
    <HeroSection
      backgroundImage="/images/products/design.png"
      badge="DOSE"
      heading="Dizajn koji govori sam za sebe."
      description="Sveden, ali izražajan. DOSE termosi nastaju sa idejom da spoje estetiku i svrhu. Mat završnica, ergonomska ručka, preklopni poklopac i boje koje izražavaju tvoj karakter. Savršen balans između lepote i praktičnosti. Jer stil nije samo ono što nosimo, već ono što biramo svakog dana."
      features={["NO PLASTIC", "STAINLESS STEEL"]}
      productImage="/images/products/malaSlikaHeader.png"
      productName="Product name"
      productColorway="Colorway"
      productPrice="price $35"
      productLabel="Mini 0,6 L Traveler Bottle"
      textColor="light"
    />
  );
}
