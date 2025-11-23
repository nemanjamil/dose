/**
 * AddToCartButton Component
 *
 * Add to cart button with cart icon and price
 * Displays on product detail pages
 */

import Image from "next/image";

const cartIcon = "/images/icons/cartIcon.svg";

interface AddToCartButtonProps {
  price: string;
  label?: string;
  onClick?: () => void;
}

export default function AddToCartButton({
  price,
  label = "DODAJ U KORPU",
  onClick,
}: AddToCartButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative w-full bg-dose-accent rounded-[20px] shadow-[0px_10px_24px_0px_rgba(135,84,55,0.3)] py-[24px] px-[32px] flex items-center justify-center gap-[16px]"
    >
      {/* Cart Icon Badge */}
      <div className="absolute left-[8px] bg-dose-peach rounded-[12px] w-[60px] h-[60px] flex items-center justify-center shrink-0">
        <div className="relative w-[32px] h-[32px]">
          <Image src={cartIcon} alt="Cart" fill className="object-contain" />
        </div>
      </div>

      {/* Text and Price */}
      <p className="font-bold text-dose-light lg:text-p-regular text-p-small tracking-[-0.4px] leading-[1.5] uppercase">
        {label} {price}
      </p>
    </button>
  );
}
