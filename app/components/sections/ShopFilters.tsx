"use client";

/**
 * ShopFilters Component
 *
 * Filter buttons for shop items with active/inactive states
 * Based on Figma design: Active (solid accent) and Inactive (transparent accent)
 */

import { useState } from "react";

export interface FilterOption {
  id: string;
  label: string;
  type: "all" | "volume" | "color" | "price";
  value?: string;
}

interface ShopFiltersProps {
  onFilterChange: (filter: FilterOption) => void;
}

export default function ShopFilters({ onFilterChange }: ShopFiltersProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filters: FilterOption[] = [
    { id: "all", label: "Svi proizvodi", type: "all" },
    { id: "volume-small", label: "Max 0,5 L", type: "volume", value: "0.5" },
    { id: "volume-medium", label: "Max 1,2 L", type: "volume", value: "1.2" },
    { id: "volume-large", label: "Max 2 L", type: "volume", value: "2" },
    { id: "price-low", label: "Do 3000 RSD", type: "price", value: "3000" },
    { id: "price-mid", label: "3000-5000 RSD", type: "price", value: "5000" },
    { id: "price-high", label: "Preko 5000 RSD", type: "price", value: "5001" },
  ];

  const handleFilterClick = (filter: FilterOption) => {
    setActiveFilter(filter.id);
    onFilterChange(filter);
  };

  return (
    <div className="w-full flex justify-center px-4 py-8">
      <div className="flex flex-wrap gap-3 justify-center max-w-[1200px]">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.id;

          return (
            <button
              key={filter.id}
              onClick={() => handleFilterClick(filter)}
              className={`
                flex items-center justify-center
                px-6 py-3
                rounded-[99px]
                font-medium text-[16px] uppercase
                tracking-[-0.32px]
                leading-[1.5]
                transition-all duration-200
                ${
                  isActive
                    ? "bg-dose-accent text-white"
                    : "bg-dose-accent/20 text-dose-accent hover:bg-dose-accent/30"
                }
              `}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
