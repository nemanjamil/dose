import BottlePageBrakePoint from "@/app/components/sections/BottlePageBrakePoint";
import ItemMainView from "../../../components/sections/ItemMainView";
import Testemonials from "@/app/components/sections/Testemonials";
import DoseList from "@/app/components/sections/DoseList";
import { createClient } from "@/utils/supabase/server";

interface ShopProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ShopProductPage({
  params,
}: ShopProductPageProps) {
  const { id } = await params;
  console.log(`🔍 Loading product with ID: ${id}`);

  const supabase = await createClient();

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", parseInt(id))
    .single();

  console.log(`📊 Product Fetch:`);
  console.log(`   - ID: ${id}`);
  console.log(`   - Found: ${!!product}`);
  console.log(`   - Error: ${error?.message || "none"}`);
  console.log(`   - Data:`, product);

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dose-dark mb-4">Product not found</h1>
          <p className="text-dose-mid">The product you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }

  // Transform Supabase product to component format
  const shopProduct = {
    id: product.id,
    name: product.name || "",
    color: product.color || "",
    price: `${product.price} RSD`,
    rating: product.rating || "0/5.0",
    volume: product.volume || "",
    folder: product.folder || "",
  };

  console.log(`✨ Transformed product:`, shopProduct);

  return (
    <div className="min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 sm:py-24">
        <ItemMainView product={shopProduct} />
        <BottlePageBrakePoint />
        <Testemonials />
        <DoseList />
      </div>
    </div>
  );
}
