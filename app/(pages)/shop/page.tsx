"use client";

import ShopMainBanner from "../../components/sections/ShopMainBanner";
import ShopItemsList from "../../components/sections/ShopItemsList";

export default function ShopPage() {
  return (
    <div className="relative w-full" data-name="Shop Desktop">
      <div className="mt-10">
        <ShopMainBanner />
      </div>
      <ShopItemsList />
    </div>
  );
}
