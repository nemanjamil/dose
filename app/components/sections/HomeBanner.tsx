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
    <HeroSection
      backgroundImage="/images/sections/TwoBottlesBackground.png"
      backgroundColor="#FEF8F4"
      badge="DOSE"
      heading="Premium Hydration Bottles"
      description="Experience the perfect blend of style and functionality. DOSE bottles keep your beverages at the ideal temperature while making a statement about your personal style."
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
  );
}
