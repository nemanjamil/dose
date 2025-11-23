/**
 * ProductImageThumbnails Component
 *
 * Displays thumbnail images for product gallery
 * Allows selection of different product images
 */

import Image from "next/image";

interface ProductImageThumbnailsProps {
  thumbnails: string[];
  selectedIndex: number;
  onSelectImage: (index: number) => void;
}

export default function ProductImageThumbnails({
  thumbnails,
  selectedIndex,
  onSelectImage,
}: ProductImageThumbnailsProps) {
  return (
    <div className="flex gap-[12px] justify-between">
      {thumbnails.map((image, index) => (
        <button
          key={index}
          onClick={() => onSelectImage(index)}
          className={`relative flex-1 w-full h-[100px] sm:h-[120px] rounded-[12px] overflow-hidden border-2 transition-all ${
            selectedIndex === index
              ? "border-dose-accent"
              : "border-transparent hover:border-dose-mid"
          }`}
        >
          <Image
            src={image}
            alt={`Product thumbnail ${index + 1}`}
            fill
            className="object-contain"
          />
        </button>
      ))}
    </div>
  );
}
