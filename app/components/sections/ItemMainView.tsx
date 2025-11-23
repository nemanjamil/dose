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
import ProductBundleOffer from "./ProductBundleOffer";
import AddToCartButton from "./AddToCartButton";
import ExpandableSections from "./ExpandableSections";
import ProductImageThumbnails from "./ProductImageThumbnails";

export default function ItemMainView() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
        <ProductImageThumbnails
          thumbnails={thumbnails}
          selectedIndex={selectedImageIndex}
          onSelectImage={setSelectedImageIndex}
        />

        {/* Expandable Sections */}
        <ExpandableSections />
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

        {/* Product Bundle Offer */}
        <ProductBundleOffer />

        {/* Add to Cart Button */}
        <AddToCartButton price="4.580.00 RSD" />
      </div>
    </div>
  );
}
