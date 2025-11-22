/**
 * ShopItemsList Component
 *
 * Grid display of shop items
 * 4 columns on desktop, 2 on tablet, 1 on mobile
 */

import Link from "next/link";
import Image from "next/image";

interface ShopItem {
  id: number;
  name: string;
  color: string;
  price: string;
  rating: string;
  volume: string;
  image: string;
}

const shopItems: ShopItem[] = [
  {
    id: 1,
    name: "Dose Traveler Max",
    color: "Kelly Green",
    price: "5.997 RSD",
    rating: "4.9/5.0",
    volume: "0,6 L",
    image: "/images/products/malaSlikaHeader.png",
  },
  {
    id: 2,
    name: "Dose Regular",
    color: "Midnight Black",
    price: "4.997 RSD",
    rating: "4.8/5.0",
    volume: "0,88 L",
    image: "/images/products/malaSlikaHeader.png",
  },
  {
    id: 3,
    name: "Dose Mini",
    color: "Sunset Orange",
    price: "3.997 RSD",
    rating: "4.7/5.0",
    volume: "0,35 L",
    image: "/images/products/malaSlikaHeader.png",
  },
  {
    id: 4,
    name: "Dose Pro Max",
    color: "Pearl White",
    price: "6.997 RSD",
    rating: "5.0/5.0",
    volume: "1,2 L",
    image: "/images/products/malaSlikaHeader.png",
  },
  {
    id: 5,
    name: "Dose Classic",
    color: "Rose Pink",
    price: "4.497 RSD",
    rating: "4.9/5.0",
    volume: "0,75 L",
    image: "/images/products/malaSlikaHeader.png",
  },
  {
    id: 6,
    name: "Dose Lite",
    color: "Sky Blue",
    price: "3.497 RSD",
    rating: "4.6/5.0",
    volume: "0,5 L",
    image: "/images/products/malaSlikaHeader.png",
  },
  {
    id: 7,
    name: "Dose Premium",
    color: "Midnight Blue",
    price: "7.497 RSD",
    rating: "5.0/5.0",
    volume: "1,5 L",
    image: "/images/products/malaSlikaHeader.png",
  },
  {
    id: 8,
    name: "Dose Compact",
    color: "Forest Green",
    price: "2.997 RSD",
    rating: "4.5/5.0",
    volume: "0,3 L",
    image: "/images/products/malaSlikaHeader.png",
  },
];

export default function ShopItemsList() {
  return (
    <section className="w-full lg:px-8 py-[64px]">
      <div className="max-w-[1440px] mx-auto lg:px-8 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {shopItems.map((item) => (
            <Link
              key={item.id}
              href={`/shop/${item.id}`}
              className="flex flex-col gap-[24px] cursor-pointer hover:opacity-90 transition-opacity"
            >
              {/* Product Image Container */}
              <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-[20px] overflow-hidden bg-gray-100 group">
                <Image
                  src={item.image}
                  alt={`${item.name} ${item.color}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />

                {/* Badges */}
                <div className="absolute top-0 left-0 right-0 p-4 flex items-start justify-between">
                  {/* Rating Badge */}
                  <div className="bg-white/20 backdrop-blur-sm rounded-[99px] px-4 py-2 flex items-center gap-2">
                    <span className="text-white text-[14px] font-bold">⭐</span>
                    <span className="text-white text-[14px] font-bold">
                      {item.rating}
                    </span>
                  </div>

                  {/* Volume Badge */}
                  <div className="bg-white rounded-[99px] px-4 py-2">
                    <span className="text-dose-accent text-[14px] font-bold">
                      {item.volume}
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col gap-[8px]">
                {/* Product Name and Color */}
                <div className="flex flex-col gap-0">
                  <h3 className="text-dose-dark text-[20px] font-bold leading-[1.2]">
                    {item.name}
                  </h3>
                  <p className="text-dose-dark text-[16px] font-bold leading-[1.2]">
                    {item.color}
                  </p>
                </div>

                {/* Price Button */}
                <button className="bg-dose-peach rounded-[14px] px-3 py-2.5 h-[46px] flex items-center justify-center w-fit hover:opacity-90 transition-opacity">
                  <span className="text-dose-dark text-[16px] font-bold tracking-[-0.32px]">
                    {item.price}
                  </span>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
