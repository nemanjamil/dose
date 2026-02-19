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

const PLACEHOLDER_IMAGE = "/images/placeholder.png";
const SUPABASE_STORAGE_URL =
  "https://uhizkbechdhzugjcokym.supabase.co/storage/v1/object/public";

interface ItemMainViewProps {
  product: {
    id: number;
    name: string;
    description: string;
    color: string;
    price: string;
    rating: string;
    volume: string;
    folder: string;
  };
}

export default function ItemMainView({ product }: ItemMainViewProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const handleImageError = (imageIndex: number) => {
    setFailedImages((prev) => new Set([...prev, imageIndex]));
  };

  const buildImageUrl = (filename: string) => {
    if (!product.folder) return PLACEHOLDER_IMAGE;
    return `${SUPABASE_STORAGE_URL}/${product.folder}/${filename}`;
  };

  // Product images from Supabase Storage
  const imageFiles = [
    "main.jpg",
    "gallery-1.jpg",
    "gallery-2.jpg",
    "gallery-3.jpg",
  ];
  const productImages = imageFiles.map((filename, index) => {
    const url = buildImageUrl(filename);
    return failedImages.has(index) ? PLACEHOLDER_IMAGE : url;
  });

  const mainImage = productImages[selectedImageIndex];
  const thumbnails = productImages.slice(0, 4);
  const rating = parseFloat(product.rating.split("/")[0]) || 4.9;
  const priceNumber = parseFloat(product.price.split(" ")[0]) || 5997;

  return (
    <div className="flex flex-col lg:flex-row lg:gap-16 items-start">
      {/* Left Side - Product Image Gallery (50%) */}
      <div
        className="w-full lg:w-1/2 flex flex-col gap-6"
        role="region"
        aria-label="Product images"
      >
        {/* Main Image */}
        <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] rounded-[20px] overflow-hidden bg-gray-100">
          <Image
            src={mainImage}
            alt={product.name}
            fill
            className="object-cover"
            priority
            onError={() => handleImageError(selectedImageIndex)}
          />
        </div>

        {/* Thumbnails */}
        <ProductImageThumbnails
          thumbnails={thumbnails}
          selectedIndex={selectedImageIndex}
          onSelectImage={setSelectedImageIndex}
        />

        {/* Expandable Sections */}
        <ExpandableSections productDescription={product.description} />
      </div>

      {/* Right Side - Product Details (50%) */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 pt-5">
        {/* Product Rating Badge */}
        {/* <ProductRatingBadge rating={rating} totalReviews={166} /> */}

        {/* Product Header Section */}
        <ProductHeader
          brand="Dose"
          title={product.name}
          description="Practical and modern thermos that keeps drinks fresh and cold for up to 24 hours, and hot and aromatic for 7 hours."
        />

        {/* Product Price */}
        <ProductPrice price={product.price} originalPrice="7.497 RSD" />

        {/* Product Features Box */}
        <ProductFeaturesBox />

        {/* Product Bundle Offer */}
        <ProductBundleOffer unitPrice={priceNumber} productImage={mainImage} />

        {/* Add to Cart Button */}
        <AddToCartButton
          productId={`product-${product.id}`}
          productName={product.name}
          price={priceNumber}
          productImage={mainImage}
          quantity={1}
        />
      </div>
    </div>
  );
}
