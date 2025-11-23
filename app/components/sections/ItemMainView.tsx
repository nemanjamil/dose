"use client";

/**
 * ItemMainView Component
 *
 * Main product view for shop item page
 * Left side: Product image gallery with thumbnails and expandable description
 * Right side: Product details
 */

import { useState } from "react";
import Image from "next/image";
import ProductHeader from "./ProductHeader";
import ProductRatingBadge from "./ProductRatingBadge";
import ProductPrice from "./ProductPrice";
import ProductFeaturesBox from "./ProductFeaturesBox";

export default function ItemMainView() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("0.6 L");
  const [selectedColor, setSelectedColor] = useState("#2D5016");
  const [quantity, setQuantity] = useState(1);

  // Sample product images
  const productImages = [
    "/images/products/item_peach.png",
    "/images/products/item_peach.png",
    "/images/products/item_peach.png",
    "/images/products/item_peach.png",
  ];

  const mainImage = productImages[selectedImageIndex];
  const thumbnails = productImages.slice(0, 4);

  return (
    <div className="flex flex-col lg:flex-row gap-[64px] items-start">
      {/* Left Side - Product Image Gallery (50%) */}
      <div className="w-full lg:w-1/2 flex flex-col gap-[24px] p-5">
        {/* Main Image */}
        <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] rounded-[20px] overflow-hidden bg-gray-100">
          <Image
            src={mainImage}
            alt="Product main image"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 justify-between">
          {thumbnails.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-[12px] overflow-hidden border-2 transition-all ${
                selectedImageIndex === index
                  ? "border-dose-accent"
                  : "border-transparent hover:border-dose-mid"
              }`}
            >
              <Image
                src={image}
                alt={`Product thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Image Description - Expandable */}
        <div className="w-full border border-dose-accent/20 rounded-[12px] overflow-hidden">
          <button
            onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
            className="w-full flex items-center justify-between px-4 py-4 bg-dose-light hover:bg-dose-light/80 transition-colors"
          >
            <span className="text-dose-dark font-bold text-[16px]">
              Image Description
            </span>
            <span className="text-dose-dark text-[20px] font-bold">
              {isDescriptionOpen ? "−" : "+"}
            </span>
          </button>

          {/* Expandable Content */}
          {isDescriptionOpen && (
            <div className="px-4 py-4 bg-white border-t border-dose-light">
              <p className="text-dose-mid font-medium text-[14px] sm:text-[16px] leading-[1.6]">
                This is a high-quality product image showing the thermos from
                multiple angles. The image demonstrates the premium design,
                color options, and functional features of our DOSE thermos
                collection. Perfect for viewing product details before purchase.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right Side - Product Details (50%) */}
      <div className="w-full lg:w-1/2 flex flex-col gap-[24px] pt-5">
        {/* Product Rating Badge */}
        <ProductRatingBadge rating={4.9} totalReviews={166} />

        {/* Product Header Section */}
        <ProductHeader
          brand="Dose"
          title="Summer Peach Traveler Max 1.2 L"
          description="Practical and modern thermos that keeps drinks fresh and cold for up to 24 hours, and hot and aromatic for 7 hours."
        />

        {/* Product Price */}
        <ProductPrice price="5.997 RSD" originalPrice="7.497 RSD" />

        {/* Product Features Box */}
        <ProductFeaturesBox />
      </div>
    </div>
  );
}
