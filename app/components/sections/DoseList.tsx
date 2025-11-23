"use client";

/**
 * DoseList Component
 *
 * Product showcase displaying 4 DOSE products in a grid
 * Each card features product image, rating, name, and price
 * Based on Figma design: https://www.figma.com/design/I7GYdab3FirpOg941b6wTL/Dose-Web-Project?node-id=95-186
 */

import Link from "next/link";
import Image from "next/image";
import Container from "../Container";

export default function DoseList() {
  const doseProducts = [
    {
      id: 1,
      name: "Summer Peach",
      price: "5.997 RSD",
      rating: "4.9/5.0",
      image: "/images/products/DoseHome1.png",
    },
    {
      id: 2,
      name: "Ocean Blue",
      price: "5.997 RSD",
      rating: "4.8/5.0",
      image: "/images/products/DoseHome2.png",
    },
    {
      id: 3,
      name: "Forest Green",
      price: "5.997 RSD",
      rating: "4.9/5.0",
      image: "/images/products/DoseHome3.png",
    },
    {
      id: 4,
      name: "Midnight Black",
      price: "5.997 RSD",
      rating: "4.7/5.0",
      image: "/images/products/DoseHome4.png",
    },
  ];

  return (
    <div className="lg:py-16 py-4 px-4 sm:px-8">
      <Container>
        {/* Centered Text Content */}
        <div className="flex flex-col gap-4 items-center text-center mb-16 max-w-[675px] mx-auto">
          <h2 className="font-bold text-dose-dark text-[40px] sm:text-[56px] tracking-[-0.64px] sm:tracking-[-1.12px] leading-[1.2]">
            DOSE Collection
          </h2>
          <p className="font-medium text-dose-mid text-[16px] sm:text-[18px] tracking-[-0.32px] sm:tracking-[-0.36px] leading-[1.5]">
            Discover the perfect DOSE for your lifestyle
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {doseProducts.map((product, index) => (
            <Link
              key={product.id}
              href={`/shop/${product.id}`}
              className={`flex flex-col gap-6 cursor-pointer hover:opacity-90 transition-opacity ${
                index >= 2 ? "hidden lg:flex" : ""
              }`}
            >
              {/* Product Card with Image and Rating */}
              <div className="relative w-full h-[480px] rounded-[20px] overflow-hidden bg-dose-light">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />

                {/* Rating Badge */}
                <div className="absolute top-4 left-4 z-10 bg-white/20 backdrop-blur-sm flex gap-1.5 items-center justify-center px-4 py-2 rounded-[99px]">
                  <span className="text-white font-bold text-[16px] leading-[1.5]">
                    ⭐ {product.rating}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-dose-dark text-[24px] tracking-[-0.36px] leading-[1.5]">
                  {product.name}
                </h3>
                <div className="bg-dose-peach px-3 py-2.5 rounded-[14px] w-fit">
                  <p className="font-bold text-dose-dark text-[18px] tracking-[-0.36px] leading-[1.5]">
                    {product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
