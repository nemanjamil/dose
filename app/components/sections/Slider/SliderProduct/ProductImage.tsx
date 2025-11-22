/**
 * ProductImage Component
 * Main product image display
 */

import Image from "next/image";

interface ProductImageProps {
  src?: string;
}

export default function ProductImage({ src = "/images/products/subtract.png" }: ProductImageProps) {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Image
        alt="Dose Thermos Product"
        src={src}
        fill
        priority
        className="object-cover"
      />
    </div>
  );
}
