import ShopMainBanner from "../../components/sections/ShopMainBanner";
import ShopItemsList, {
  ShopItem,
} from "../../components/sections/ShopItemsList";
import { createClient } from "@/utils/supabase/server";

interface SupabaseProduct {
  id: number;
  name: string | null;
  color: string | null;
  price: number | null;
  rating: string | null;
  volume: string | null;
  folder: string | null;
  created_at: string;
}

export default async function ShopPage() {
  console.log("🔍 ShopPage loading...");

  let supabase;
  try {
    console.log("📡 Creating Supabase client...");
    supabase = await createClient();
    console.log("✅ Supabase client created successfully");
  } catch (err) {
    console.error("❌ Error creating Supabase client:", err);
    return <div>Error connecting to database</div>;
  }

  console.log("📨 Fetching products from Supabase...");

  // First, check table structure
  const { data: tableCheck, error: structError } = await supabase
    .from("products")
    .select("*")
    .limit(1);

  console.log("📋 Table Check:");
  console.log("   - Can access table: ", !structError);
  console.log("   - Structure error: ", structError);

  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: true });

  console.log("📊 Supabase Response:");
  console.log("   - Data:", products);
  console.log("   - Error:", error);
  console.log("   - Product Count:", products?.length || 0);

  if (products && products.length > 0) {
    console.log("   - First product sample:", products[0]);
  }

  // Transform Supabase data to ShopItem format
  const shopItems: ShopItem[] = ((products as SupabaseProduct[]) || [])
    .filter(
      (product) =>
        product.name &&
        product.color &&
        product.price &&
        product.rating &&
        product.volume
    )
    .map((product) => {
      return {
        id: product.id,
        name: product.name || "",
        color: product.color || "",
        price: `${product.price} RSD`,
        rating: product.rating || "0/5.0",
        volume: product.volume || "",
        folder: product.folder || "",
      };
    });

  console.log("✨ Transformed items:", shopItems.length);

  if (error) {
    console.error("❌ Error fetching products:", error);
  }

  return (
    <div className="relative w-full" data-name="Shop Desktop">
      <div className="lg:mt-8 mt-24">
        <ShopMainBanner />
      </div>
      <ShopItemsList items={shopItems} />
      <div className="lg:mt-24"></div>
    </div>
  );
}
