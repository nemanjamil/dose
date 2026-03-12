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
          // Extract volume number, handling comma decimals (e.g., "0,88 L" -> 0.88)
          const volumeMatch = item.volume.match(/[\d.,]+/);
          if (!volumeMatch) return false;
          const itemVolume = parseFloat(volumeMatch[0].replace(",", "."));
          const filterVolume = parseFloat(currentFilter.value || "0");
          return itemVolume === filterVolume;
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
