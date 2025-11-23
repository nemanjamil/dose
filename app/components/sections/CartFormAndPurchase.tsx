"use client";

/**
 * CartFormAndPurchase Component
 * Cart page with 50/50 layout
 * Left: Delivery form and payment form (white background)
 * Right: Order Summary
 */

import { useState } from "react";
import { useCart } from "@/app/contexts/CartContext";
import { formatPrice } from "@/app/utils/priceUtils";
import DeliveryForm, { DeliveryFormData } from "./DeliveryForm";
import PaymentForm, { PaymentFormData } from "./PaymentForm";
import CTAButton from "@/app/components/CTAButton";

export default function CartFormAndPurchase() {
  const { items, getTotalPrice } = useCart();
  const total = getTotalPrice();

  const [deliveryData, setDeliveryData] = useState<DeliveryFormData | null>(null);
  const [paymentData, setPaymentData] = useState<PaymentFormData | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [payOnDelivery, setPayOnDelivery] = useState(false);

  const handleDeliverySubmit = (formData: DeliveryFormData) => {
    setDeliveryData(formData);
    console.log("Delivery form submitted:", formData);
  };

  const handlePaymentSubmit = (formData: PaymentFormData) => {
    setPaymentData(formData);
    console.log("Payment form submitted:", formData);
  };

  const validateAllForms = (): boolean => {
    const validationErrors: string[] = [];

    // Validate cart
    if (items.length === 0) {
      validationErrors.push("Your cart is empty. Please add items before proceeding.");
    }

    // Validate delivery form
    if (!deliveryData) {
      validationErrors.push("Please fill in the delivery information.");
    } else {
      if (!deliveryData.email || !deliveryData.email.includes("@")) {
        validationErrors.push("Please enter a valid email address.");
      }
      if (!deliveryData.fullName || deliveryData.fullName.trim() === "") {
        validationErrors.push("Please enter your full name.");
      }
      if (!deliveryData.address || deliveryData.address.trim() === "") {
        validationErrors.push("Please enter your address.");
      }
      if (!deliveryData.postalCode || deliveryData.postalCode.trim() === "") {
        validationErrors.push("Please enter your postal code.");
      }
      if (!deliveryData.city || deliveryData.city.trim() === "") {
        validationErrors.push("Please enter your city.");
      }
      if (!deliveryData.phone || deliveryData.phone.trim() === "") {
        validationErrors.push("Please enter your phone number.");
      }
    }

    // Validate payment form only if not paying on delivery
    if (!payOnDelivery) {
      if (!paymentData) {
        validationErrors.push("Please fill in the payment information.");
      } else {
        if (!paymentData.cardNumber || paymentData.cardNumber.trim() === "") {
          validationErrors.push("Please enter your card number.");
        }
        if (!paymentData.expirationDate || paymentData.expirationDate.trim() === "") {
          validationErrors.push("Please enter your card expiration date.");
        }
        if (!paymentData.securityCode || paymentData.securityCode.trim() === "") {
          validationErrors.push("Please enter your security code.");
        }
        if (!paymentData.nameOnCard || paymentData.nameOnCard.trim() === "") {
          validationErrors.push("Please enter the name on your card.");
        }
      }
    }

    setErrors(validationErrors);
    return validationErrors.length === 0;
  };

  const handleSecurePayment = () => {
    if (validateAllForms()) {
      console.log("All validations passed. Processing order...");
      console.log("Delivery Data:", deliveryData);
      if (!payOnDelivery) {
        console.log("Payment Data:", paymentData);
        console.log("Payment Method: Card");
      } else {
        console.log("Payment Method: Pay on Delivery");
      }
      // TODO: Process payment/order with valid data
    } else {
      console.log("Validation failed. Please check all fields.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-[64px]">
      {/* Left Side - Delivery and Payment Forms (50%) */}
      <div className="w-full lg:w-1/2 flex flex-col gap-[24px]   bg-white rounded-[20px] p-[32px]">
        <DeliveryForm onSubmit={handleDeliverySubmit} />

        {/* Pay on Delivery Checkbox */}
        <label className="flex items-center gap-[10px] cursor-pointer">
          <div className="relative w-[18px] h-[18px] flex-shrink-0">
            <input
              type="checkbox"
              checked={payOnDelivery}
              onChange={(e) => setPayOnDelivery(e.target.checked)}
              className="absolute opacity-0 w-full h-full cursor-pointer"
            />
            <div
              className={`absolute inset-0 border border-dose-accent/20 rounded cursor-pointer flex items-center justify-center ${
                payOnDelivery ? "bg-dose-accent" : "bg-white"
              }`}
            >
              {payOnDelivery && (
                <svg
                  className="w-[10px] h-[10px] text-white"
                  viewBox="0 0 10 10"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.5 2L3.75 7.5L1.5 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          </div>
          <span className="font-medium text-dose-mid text-[14px] tracking-[-0.28px]">
            Plaćanje pouzećem
          </span>
        </label>

        {/* Payment Form - Only show if not paying on delivery */}
        {!payOnDelivery && <PaymentForm onSubmit={handlePaymentSubmit} />}

        {/* Error Messages */}
        {errors.length > 0 && (
          <div className="bg-dose-accent/10 border border-dose-accent/30 rounded-[8px] p-[16px]">
            <h3 className="font-bold text-dose-accent text-[14px] mb-[12px] tracking-[-0.28px]">
              Please fix the following errors:
            </h3>
            <ul className="flex flex-col gap-[8px]">
              {errors.map((error, index) => (
                <li key={index} className="text-dose-accent text-[13px] tracking-[-0.26px]">
                  • {error}
                </li>
              ))}
            </ul>
          </div>
        )}

        <CTAButton
          label={payOnDelivery ? "Complete order" : "Secure my payment"}
          iconSrc="/images/icons/purchaseIcon.svg"
          iconAlt={payOnDelivery ? "Checkmark icon" : "Lock icon"}
          onClick={handleSecurePayment}
        />
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
                <div
                  key={`${item.id}-summary`}
                  className="flex justify-between items-center pb-[16px] border-b border-dose-mid/20"
                >
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
                <span className="font-bold text-dose-dark text-[16px]">
                  FREE
                </span>
              </div>
              <div className="flex justify-between pt-[12px] border-t border-dose-mid/20">
                <span className="font-bold text-dose-dark text-[18px]">
                  Total:
                </span>
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
