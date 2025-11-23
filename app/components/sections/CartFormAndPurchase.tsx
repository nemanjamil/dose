"use client";

/**
 * CartFormAndPurchase Component
 * Cart page with 50/50 layout
 * Left: Delivery form (white background)
 * Right: Reserved for future use
 */

import { useCart } from "@/app/contexts/CartContext";
import { formatPrice } from "@/app/utils/priceUtils";
import DeliveryForm, { DeliveryFormData } from "./DeliveryForm";

export default function CartFormAndPurchase() {
  const { items, getTotalPrice } = useCart();
  const total = getTotalPrice();

  const handleDeliverySubmit = (formData: DeliveryFormData) => {
    console.log("Delivery form submitted:", formData);
    // TODO: Handle form submission (send to backend, process payment, etc.)
  };

  return (
    <div className="flex flex-col lg:flex-row gap-[64px]">
      {/* Left Side - Delivery Form (50%) */}
      <div className="w-full lg:w-1/2">
        <DeliveryForm onSubmit={handleDeliverySubmit} />
      </div>

      {/* Right Side - Order Summary (50%) */}
      <div className="w-full lg:w-1/2">
        <div className="bg-white rounded-[20px] p-[32px] sticky top-[100px]">
          <h2 className="font-bold text-dose-dark text-[28px] tracking-[-0.56px] mb-[24px]">
            Order Summary
          </h2>

          {/* Cart Items List */}
          <div className="flex flex-col gap-[16px] mb-[24px]">
            {items.length === 0 ? (
              <p className="text-dose-mid text-[16px]">Your cart is empty</p>
            ) : (
              items.map((item) => (
                <div key={`${item.id}-summary`} className="flex justify-between items-center pb-[16px] border-b border-dose-mid/20">
                  <div className="flex-1">
                    <h3 className="font-bold text-dose-dark text-[14px] mb-[4px]">
                      {item.name}
                    </h3>
                    <p className="text-dose-mid text-[14px]">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-dose-accent text-[14px]">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Totals Section */}
          {items.length > 0 && (
            <div className="flex flex-col gap-[12px] py-[24px] border-t border-dose-mid/20">
              <div className="flex justify-between">
                <span className="text-dose-mid text-[16px]">Subtotal:</span>
                <span className="font-bold text-dose-dark text-[16px]">
                  {formatPrice(total)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-dose-mid text-[16px]">Shipping:</span>
                <span className="font-bold text-dose-dark text-[16px]">FREE</span>
              </div>
              <div className="flex justify-between pt-[12px] border-t border-dose-mid/20">
                <span className="font-bold text-dose-dark text-[18px]">Total:</span>
                <span className="font-bold text-dose-accent text-[18px]">
                  {formatPrice(total)}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
