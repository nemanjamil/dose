"use client";

/**
 * HeroProductCard Component
 *
 * Right side product card section for HeroSection (Desktop only)
 * Displays product card with image, details, and close button
 */

import Image from "next/image";

interface HeroProductCardProps {
  productImage: string;
  productName: string;
  productColorway: string;
  productPrice: string;
}

export default function HeroProductCard({
  productImage,
  productName,
  productColorway,
  productPrice,
}: HeroProductCardProps) {
  return (
    <div className="flex flex-col gap-6 items-center p-8 relative h-full justify-center">
      <div
        className="absolute w-[400px] h-[173px] p-3 flex flex-col items-start
            top-[10px] left-[47px]
            gap-2.5 flex-shrink-0 bg-white rounded-[16px] shadow-[0px_10px_24px_0px_rgba(140,76,102,0.3)]"
      >
        {/* Product Card */}
        <div className="flex gap-[75px] items-start w-full">
          {/* Product Image and Info */}
          <div className="flex gap-6 items-center">
            {/* Product Image */}
            <div className="w-[123px] h-[149px] rounded-[8px] overflow-hidden flex-shrink-0">
              <Image
                src={productImage}
                alt={productName}
                width={123}
                height={149}
                className="object-cover"
              />
            </div>
            {/* Product Details */}
            <div className="flex flex-col gap-2 w-[118px] flex-shrink-0">
              <div className="font-bold text-[18px] text-dose-dark tracking-[-0.36px] leading-[1.5]">
                <p className="mb-0">{productName}</p>
                <p>{productColorway}</p>
              </div>
              <p className="font-medium text-[14px] text-dose-dark tracking-[-0.28px] leading-[1.5]">
                {productPrice}
              </p>
              <button className="bg-dose-peach px-6 py-1.5 rounded-[8px] font-bold text-[14px] text-dose-accent tracking-[-0.28px] leading-[1.5] whitespace-nowrap">
                Learn more
              </button>
            </div>
          </div>
          {/* Close Button */}
          <div className="w-[36px] h-[36px] flex items-center justify-center rounded-[8px] bg-[rgba(167,37,59,0.05)] flex-shrink-0">
            <span className="text-dose-accent text-[24px] font-bold">×</span>
          </div>
        </div>
      </div>
    </div>
  );
}
