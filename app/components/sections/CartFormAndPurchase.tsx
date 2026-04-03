"use client";

/**
 * CartFormAndPurchase Component
 * Cart page with 50/50 layout
 * Left: Delivery form and payment form (white background)
 * Right: Order Summary
 */

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCart } from "@/app/contexts/CartContext";
import { formatPrice } from "@/app/utils/priceUtils";
import DeliveryForm, { DeliveryFormData } from "./DeliveryForm";
import SecurePaymentsBadge from "./SecurePaymentsBadge";
import CTAButton from "@/app/components/CTAButton";
import { sendOrderEmail } from "@/app/lib/actions/sendOrderEmail";

const defaultProductImage = "/images/products/item_peach.png";

export default function CartFormAndPurchase() {
  const { items, getTotalPrice, clearCart } = useCart();
  const total = getTotalPrice();
  const router = useRouter();

  const [deliveryData, setDeliveryData] = useState<DeliveryFormData | null>(
    null
  );
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [payOnDelivery, setPayOnDelivery] = useState(true);

  const handleDeliverySubmit = (formData: DeliveryFormData) => {
    setDeliveryData(formData);
    console.log("Delivery form submitted:", formData);
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
      if (!deliveryData.firstName || deliveryData.firstName.trim() === "") {
        validationErrors.push("Unesite vaše ime.");
      }
      if (!deliveryData.lastName || deliveryData.lastName.trim() === "") {
        validationErrors.push("Unesite vaše prezime.");
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

    setErrors(validationErrors);
    return validationErrors.length === 0;
  };

  const handleSecurePayment = async () => {
    if (!validateAllForms()) return;

    setIsSubmitting(true);
    setErrors([]);

    const result = await sendOrderEmail({
      delivery: deliveryData!,
      items: items.map((item) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total,
    });

    setIsSubmitting(false);

    if (result.success) {
      clearCart();
      router.push("/order-confirmation");
    } else {
      setErrors([result.error || "Greška pri slanju porudžbine. Pokušajte ponovo."]);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-[64px]">
      {/* Left Side - Delivery and Payment Forms (50%) */}
      <div className="w-full lg:w-1/2 flex flex-col gap-[24px]   bg-white rounded-[20px] p-[32px]">
        <DeliveryForm onSubmit={handleDeliverySubmit} onChange={setDeliveryData} />

        {/* Payment disabled - always pay on delivery */}

        {/* Error Messages */}
        {errors.length > 0 && (
          <div className="bg-dose-accent/10 border border-dose-accent/30 rounded-[8px] p-[16px]">
            <h3 className="font-bold text-dose-accent text-small mb-[12px]">
              Molimo ispravite sledeće greške:
            </h3>
            <ul className="flex flex-col gap-[8px]">
              {errors.map((error, index) => (
                <li key={index} className="text-dose-accent text-extra-small">
                  • {error}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Success Message */}
        {successMessage && (
          <div className="bg-dose-light border border-dose-accent/20 rounded-[8px] p-[16px]">
            <p className="font-medium text-dose-dark text-small">{successMessage}</p>
          </div>
        )}

        <CTAButton
          label={isSubmitting ? "Slanje..." : payOnDelivery ? "Završi porudžbinu" : "Sigurno plaćanje"}
          iconSrc="/images/icons/purchaseIcon.svg"
          iconAlt={payOnDelivery ? "Ikonica kvačice" : "Ikonica katanca"}
          onClick={handleSecurePayment}
          disabled={isSubmitting}
        />
      </div>

      {/* Right Side - Order Summary (50%) */}
      <div className="w-full lg:w-1/2">
        <div className="rounded-[20px] p-[32px] sticky top-[100px]">
          {/* Cart Items List */}
          {items.length === 0 ? (
            <p className="text-dose-mid text-h6 mb-[24px]">
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
                        <h3 className="font-bold text-dose-dark text-small mb-1">
                          {item.name}
                        </h3>
                        <p className="text-dose-accent font-bold text-small">
                          {formatPrice(item.price)}
                        </p>
                      </div>

                      {/* Quantity and Total */}
                      <div className="flex items-center justify-between text-extra-small">
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
                <p className="font-medium text-dose-accent text-h6">
                  UKUPNO
                </p>
                <div className="bg-dose-accent/10 rounded-[8px] px-[12px] py-[6px]">
                  <p className="font-bold text-dose-accent text-h6">
                    {formatPrice(total)}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Secure Payments Badge */}
          <SecurePaymentsBadge
            title="Sigurno plaćanje"
            description="Koristimo 100% sigurne načine plaćanja kako bismo vam pružili jednostavno i bezbedno iskustvo."
            iconSrc="/images/icons/Secure.svg"
            iconAlt="Sigurno plaćanje"
          />

          <SecurePaymentsBadge
            title="Garancija povrata novca 30 dana"
            description="Vratite proizvod u roku od 30 dana i dobijte povrat celokupnog iznosa."
            iconSrc="/images/icons/badge.svg"
            iconAlt="Garancija povrata novca 30 dana"
          />
        </div>
      </div>
    </div>
  );
}
