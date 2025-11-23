"use client";

/**
 * AddToCartButton Component
 *
 * Add to cart button with cart icon and price
 * Displays on product detail pages
 * Integrates with cart context to add items to cart
 */

import Image from "next/image";
import { useCart } from "@/app/contexts/CartContext";
import { formatPrice } from "@/app/utils/priceUtils";

const cartIcon = "/images/icons/cartIcon.svg";

interface AddToCartButtonProps {
  productId: string;
  productName: string;
  price: number;
  productImage?: string;
  currency?: string;
  quantity?: number;
  label?: string;
  onClick?: () => void;
}

export default function AddToCartButton({
  productId,
  productName,
  price,
  productImage,
  quantity = 1,
  label = "DODAJ U KORPU",
  onClick,
}: AddToCartButtonProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: productId,
      name: productName,
      price, // Already numeric
      quantity,
      image: productImage,
    });

    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="relative w-full bg-dose-accent rounded-[20px] shadow-[0px_10px_24px_0px_rgba(135,84,55,0.3)] py-[24px] px-[32px] flex items-center justify-center gap-[16px] btn-interactive"
    >
      {/* Cart Icon Badge */}
      <div className="absolute left-[8px] bg-dose-peach rounded-[12px] w-[60px] h-[60px] flex items-center justify-center shrink-0 pointer-events-none">
        <div className="relative w-[32px] h-[32px]">
          <Image src={cartIcon} alt="Cart" fill className="object-contain" />
        </div>
      </div>

      {/* Text and Price */}
      <p className="font-bold text-dose-light lg:text-p-regular text-p-small tracking-[-0.4px] leading-[1.5] uppercase">
        {label} {formatPrice(price)}
      </p>
    </button>
  );
}
