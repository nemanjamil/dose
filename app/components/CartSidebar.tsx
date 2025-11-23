"use client";

/**
 * CartSidebar Component
 * Reusable cart sidebar for both mobile and desktop views
 * Displays cart items from CartContext
 */

import Link from "next/link";
import Image from "next/image";
import IconButton from "./IconButton";
import { useCart } from "@/app/contexts/CartContext";
import { formatPrice } from "@/app/utils/priceUtils";

const imgLogotype = "/images/brand/logotype.svg";
const imgCheckoutIcon = "/images/icons/cartIcon.svg";
const defaultProductImage = "/images/products/item_peach.png";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, getTotalPrice, removeItem, updateQuantity } = useCart();
  const total = getTotalPrice();

  return (
    <>
      {/* Cart Sidebar Overlay - Click to Close */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 z-30" onClick={onClose}></div>
      )}

      {/* Cart Sidebar - Slide from Right */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-3/4 md:w-1/3 bg-white z-40 transform transition-transform duration-300 ease-in-out overflow-hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cart Header with Logo and Close Button */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-dose-mid/30">
          {/* Logo */}
          <Link
            href="/"
            className="h-[32px] w-[97.976px] hover:opacity-80 transition-opacity relative"
          >
            <Image
              alt="Dose Logo"
              src={imgLogotype}
              fill
              className="object-contain"
            />
          </Link>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
            aria-label="Close cart"
          >
            <span className="text-dose-dark text-[24px] font-bold">×</span>
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex flex-col h-full">
          {/* Scrollable Content Area */}
          <div className="flex flex-col gap-4 px-4 py-6 flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <p className="text-dose-mid text-[16px]">
                Your shopping cart is empty...
              </p>
            ) : (
              <div className="flex flex-col gap-4">
                {items.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="border-b border-dose-mid/20 pb-4"
                  >
                    {/* Product with Image and Details */}
                    <div className="flex gap-3 mb-3">
                      {/* Product Image */}
                      <div className="w-[80px] h-[80px] flex-shrink-0 rounded-[8px] overflow-hidden bg-dose-light">
                        <Image
                          src={item.image || defaultProductImage}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 flex flex-col gap-2">
                        <div>
                          <h3 className="font-bold text-dose-dark text-[14px] mb-1">
                            {item.name}
                          </h3>
                          <p className="text-dose-accent font-bold text-[14px]">
                            {formatPrice(item.price)}
                          </p>
                        </div>

                        {/* Quantity Controls and Remove */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-6 h-6 flex items-center justify-center border border-dose-mid/30 rounded hover:bg-dose-light transition-colors"
                          >
                            −
                          </button>
                          <span className="text-dose-dark font-medium text-[14px] w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-6 h-6 flex items-center justify-center border border-dose-mid/30 rounded hover:bg-dose-light transition-colors"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="ml-auto text-dose-accent hover:text-dose-dark text-[12px] underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sticky Checkout Section */}
          <div className="border-t border-dose-mid/30 px-4 py-6 flex flex-col gap-4 bg-white">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <p className="font-medium text-dose-accent text-[18px] tracking-[-0.36px]">
                SUBTOTAL
              </p>
              <div className="bg-dose-accent/10 rounded-[8px] px-[12px] py-[6px]">
                <p className="font-bold text-dose-accent text-[18px] tracking-[-0.36px]">
                  {formatPrice(total)}
                </p>
              </div>
            </div>

            {/* Shipping Info */}
            <p className="font-medium text-dose-accent text-[16px] tracking-[-0.32px] leading-[1.5]">
              Shipping, taxes, and discount codes calculated at checkout.
            </p>

            {/* Checkout Button */}
            {items.length > 0 ? (
              <IconButton
                href="/cart"
                label="Check out"
                icon={imgCheckoutIcon}
                iconAlt="Checkout"
                onClick={onClose}
              />
            ) : (
              <button
                disabled
                className="relative bg-dose-accent text-white py-[16px] px-[24px] rounded-[14px] font-bold w-full flex items-center justify-center uppercase btn-disabled"
                style={{ fontSize: "var(--font-size-p-regular)" }}
              >
                <div className="absolute left-[8px] bg-dose-peach rounded-[12px] w-[36px] h-[36px] flex items-center justify-center">
                  <div className="relative w-[18px] h-[18px]">
                    <Image
                      src={imgCheckoutIcon}
                      alt="Checkout"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <span>Check out</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
