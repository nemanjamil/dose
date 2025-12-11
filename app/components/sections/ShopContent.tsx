"use client";

/**
 * ShopContent Component
 *
 * Client component that handles filtering logic for shop items
 * Wraps ShopFilters and ShopItemsList
 */

import { useState, useMemo } from "react";
import ShopFilters, { FilterOption } from "./ShopFilters";
import ShopItemsList, { ShopItem } from "./ShopItemsList";

interface ShopContentProps {
  items: ShopItem[];
}

export default function ShopContent({ items }: ShopContentProps) {
  const [currentFilter, setCurrentFilter] = useState<FilterOption>({
    id: "all",
    label: "Svi proizvodi",
    type: "all",
  });

  // Filter items based on selected filter
  const filteredItems = useMemo(() => {
    if (currentFilter.type === "all") {
      return items;
    }

    return items.filter((item) => {
      switch (currentFilter.type) {
        case "volume": {
          // Extract volume number (e.g., "1.2L" -> 1.2)
          const volumeMatch = item.volume.match(/[\d.]+/);
          if (!volumeMatch) return false;
          const itemVolume = parseFloat(volumeMatch[0]);
          const filterVolume = parseFloat(currentFilter.value || "0");
          return itemVolume <= filterVolume;
        }

        case "price": {
          // Extract price number (e.g., "3500 RSD" -> 3500)
          const priceMatch = item.price.match(/[\d,]+/);
          if (!priceMatch) return false;
          const itemPrice = parseFloat(priceMatch[0].replace(",", ""));
          const filterPrice = parseFloat(currentFilter.value || "0");

          // Handle different price ranges
          if (currentFilter.id === "price-low") {
            return itemPrice <= filterPrice;
          } else if (currentFilter.id === "price-mid") {
            return itemPrice >= 3000 && itemPrice <= filterPrice;
          } else if (currentFilter.id === "price-high") {
            return itemPrice > 5000;
          }
          return false;
        }

        case "color":
          return item.color
            .toLowerCase()
            .includes((currentFilter.value || "").toLowerCase());

        default:
          return true;
      }
    });
  }, [items, currentFilter]);

  const handleFilterChange = (filter: FilterOption) => {
    setCurrentFilter(filter);
  };

  return (
    <>
      <ShopFilters onFilterChange={handleFilterChange} />
      <ShopItemsList items={filteredItems} />
    </>
  );
}
