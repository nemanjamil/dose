/**
 * HomeBanner Component
 *
 * Hero banner section showcasing DOSE brand
 * Uses reusable HeroSection component with TwoBottlesBackground image
 * Fetches product data from Supabase database for product 2
 */

import { getProductById } from "@/utils/supabase/server";
import { getProductImageUrl } from "@/utils/supabase/storage";
import HeroSection from "./HeroSection";
import HeroSectionMobile from "./HeroSectionMobile";

export default async function HomeBanner() {
  // Fetch product data from database
  const product = await getProductById("2");

  if (!product) {
    return null;
  }

  // Build image URL from Supabase storage, fallback to placeholder
  const productImage = product.folder
    ? getProductImageUrl(product.folder)
    : "/images/placeholder.png";

  return (
    <>
      {/* Mobile View */}
      <HeroSectionMobile
        backgroundImageMobile="/images/products/twoCupsMobile.png"
        backgroundColor="#FEF8F4"
        heading="Dva formata. Jedan ritam."
        description="Za duže dane bez prekida ili za svaki korak u danu. Obe verzije dolaze sa čvrstom ručkom, preklopnim poklopcem sa slamkom, ne propuštaju, bezbedne su za upotrebu i staju u držače u kolima."
        features={["NO PLASTIC", "STAINLESS STEEL"]}
        centerImage=""
        productLabel={product.name}
        textColor="dark"
      />

      {/* Desktop View */}
      <section className="w-full lg:px-4 sm:px-8 hidden lg:block my-16">
        <div className="rounded-md overflow-hidden">
          <HeroSection
            backgroundImage="/images/sections/TwoBottlesBackground.png"
            backgroundColor="#FEF8F4"
            badge="DOSE"
            heading="Dva formata. Jedan ritam."
            description="Za duže dane bez prekida ili za svaki korak u danu. Obe verzije dolaze sa čvrstom ručkom, preklopnim poklopcem sa slamkom, ne propuštaju, bezbedne su za upotrebu i staju u držače u kolima."
            features={["NO PLASTIC", "STAINLESS STEEL"]}
            productImage={productImage}
            productName={product.name}
            productColorway=""
            productPrice={`$${product.price}`}
            productLabel={product.name}
            textColor="dark"
            centerImage="/images/products/designTwoCups.png"
            showProductCard={true}
            showFeatures={true}
            textPosition="left"
          />
        </div>
      </section>
    </>
  );
}
