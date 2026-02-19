/**
 * DesignTellsForItSelf Component
 *
 * Hero section showcasing the design philosophy of DOSE thermoses
 * Uses reusable HeroSection component with design background image
 * Fetches product data from Supabase database
 *
 * Figma design: https://www.figma.com/design/I7GYdab3FirpOg941b6wTL/Dose-Web-Project?node-id=95-33&m=dev
 */

import { getProductById } from "@/utils/supabase/server";
import { getProductImageUrl } from "@/utils/supabase/storage";
import HeroSection from "./HeroSection";
import HeroSectionMobile from "./HeroSectionMobile";

interface DesignTellsForItselfProps {
  productId?: string;
}

export default async function DesignTellsForItSelf({
  productId = "1",
}: DesignTellsForItselfProps) {
  // Fetch product data from database
  const product = await getProductById(productId);

  console.log("DesignTellsForItSelf - productId:", productId);
  console.log("DesignTellsForItSelf - product:", product);

  if (!product) {
    console.error(`Product with ID "${productId}" not found in database`);
    return null;
  }

  // Build image URL from Supabase storage
  const productImage = getProductImageUrl(product.folder);

  return (
    <section id="DesignTellsForItSelf">
      {/* Mobile View */}
      <HeroSectionMobile
        backgroundImageMobile="/images/products/designMob.png"
        backgroundColor="#1a1a1a"
        heading="Dizajn koji govori sam za sebe."
        description="Sveden, ali izražajan. DOSE termosi nastaju sa idejom da spoje estetiku i svrhu. Mat završnica, ergonomska ručka, preklopni poklopac i boje koje izražavaju tvoj karakter. Savršen balans između lepote i praktičnosti.
Jer stil nije samo ono što nosimo, već ono što biramo svakog dana."
        features={["NO PLASTIC", "STAINLESS STEEL"]}
        centerImage=""
        productLabel=""
        textColor="light"
        aspectRatio="366/903"
      />

      {/* Desktop View */}
      <section className="w-full lg:px-4 sm:px-8 hidden lg:block">
        <div className="rounded-md overflow-hidden">
          <HeroSection
            backgroundImage="/images/products/design.png"
            backgroundColor="#1a1a1a"
            badge="DOSE"
            heading="Dizajn koji govori sam za sebe."
            description="Sveden, ali izražajan. DOSE termosi nastaju sa idejom da spoje estetiku i svrhu. Mat završnica, ergonomska ručka, preklopni poklopac i boje koje izražavaju tvoj karakter. Savršen balans između lepote i praktičnosti. Jer stil nije samo ono što nosimo, već ono što biramo svakog dana."
            features={["NO PLASTIC", "STAINLESS STEEL"]}
            productImage={productImage}
            productName={product.name}
            productColorway={""}
            productPrice={`${product.price} RSD`}
            productLabel={product.name}
            textColor="light"
            centerImage="/images/products/designCup.png"
            showProductCard={true}
            showFeatures={true}
            textPosition="left"
          />
        </div>
      </section>
    </section>
  );
}
