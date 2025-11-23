"use client";

/**
 * CartFormAndPurchase Component
 * Cart page with 50/50 layout
 * Left: Delivery form and payment form (white background)
 * Right: Order Summary
 */

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/contexts/CartContext";
import { formatPrice } from "@/app/utils/priceUtils";
import DeliveryForm, { DeliveryFormData } from "./DeliveryForm";
import PaymentForm, { PaymentFormData } from "./PaymentForm";
import SecurePaymentsBadge from "./SecurePaymentsBadge";
import CTAButton from "@/app/components/CTAButton";

const defaultProductImage = "/images/products/item_peach.png";

export default function CartFormAndPurchase() {
  const { items, getTotalPrice } = useCart();
  const total = getTotalPrice();

  const [deliveryData, setDeliveryData] = useState<DeliveryFormData | null>(
    null
  );
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
      validationErrors.push(
        "Your cart is empty. Please add items before proceeding."
      );
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
        if (
          !paymentData.expirationDate ||
          paymentData.expirationDate.trim() === ""
        ) {
          validationErrors.push("Please enter your card expiration date.");
        }
        if (
          !paymentData.securityCode ||
          paymentData.securityCode.trim() === ""
        ) {
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
                  <path
                    d="M8.5 2L3.75 7.5L1.5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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
                <li
                  key={index}
                  className="text-dose-accent text-[13px] tracking-[-0.26px]"
                >
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
          {/* Cart Items List */}
          {items.length === 0 ? (
            <p className="text-dose-mid text-[16px] mb-[24px]">
              Your cart is empty
            </p>
          ) : (
            <div className="flex flex-col gap-[16px] mb-[24px]">
              {items.map((item, index) => (
                <div
                  key={`${item.id}-summary-${index}`}
                  className="border-b border-dose-mid/20 pb-4"
                >
                  {/* Product with Image and Details */}
                  <div className="flex gap-3">
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

                      {/* Quantity and Total */}
                      <div className="flex items-center justify-between text-[13px]">
                        <span className="text-dose-mid">
                          Qty:{" "}
                          <span className="font-bold text-dose-dark">
                            {item.quantity}
                          </span>
                        </span>
                        <span className="font-bold text-dose-accent">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Totals Section */}
          {items.length > 0 && (
            <div className="flex flex-col gap-4 py-[24px] border-dose-mid/20">
              {/* Subtotal */}
              <div className="flex items-center justify-between">
                <p className="font-medium text-dose-accent text-[16px] tracking-[-0.32px]">
                  TOTAL
                </p>
                <div className="bg-dose-accent/10 rounded-[8px] px-[12px] py-[6px]">
                  <p className="font-bold text-dose-accent text-[16px] tracking-[-0.32px]">
                    {formatPrice(total)}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Secure Payments Badge */}
          <SecurePaymentsBadge
            title="Secure Payments"
            description="We use 100% secure payments to provide you with a simple and safe experience."
            iconSrc="/images/icons/Secure.svg"
            iconAlt="Secure payments"
          />

          <SecurePaymentsBadge
            title="30-Day Money Back Guarantee"
            description="Return your item within 30 days for a full refund"
            iconSrc="/images/icons/badge.svg"
            iconAlt="30-Day Money Back Guarantee"
          />
        </div>
      </div>
    </div>
  );
}
