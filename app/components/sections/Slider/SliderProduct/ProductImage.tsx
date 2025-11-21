/**
 * ProductImage Component
 * Main product image display
 */

import Image from "next/image";

const imgSubtract = "/images/products/subtract.png";

export default function ProductImage() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Image
        alt="Dose Thermos Product"
        src={imgSubtract}
        fill
        priority
        className="object-cover"
      />
    </div>
  );
}
