/**
 * ProductBundleOffer Component
 *
 * Displays bundle offers with 3 product cards
 * Each card has image, offer text, and pricing information
 */

import Image from "next/image";

interface BundleOffer {
  quantity: number;
  label: string;
  discount: number; // percentage e.g. 0.45 = 45%
}

interface ProductBundleOfferProps {
  unitPrice: number;
  productImage?: string;
}

const bundleOffers: BundleOffer[] = [
  { quantity: 2, label: "Kupi Dva", discount: 0.2 },
  { quantity: 3, label: "Kupi Tri", discount: 0.25 },
];

function formatPrice(price: number): string {
  return price.toLocaleString("en-US") + " RSD";
}

export default function ProductBundleOffer({
  unitPrice,
  productImage = "/images/products/item_peach.png",
}: ProductBundleOfferProps) {
  return (
    <div className="flex flex-col gap-[24px]">
      {bundleOffers.map((offer) => {
        const originalTotal = unitPrice * offer.quantity;
        const discountedTotal = Math.round(
          originalTotal * (1 - offer.discount),
        );
        const savePercent = Math.round(offer.discount * 100);

        return (
          <div
            key={offer.quantity}
            className="flex flex-row gap-[16px] border border-[#1A5946] rounded-[20px] p-[16px]"
          >
            {/* Product Image */}
            <div className="relative w-[75px] h-[75px] rounded-[16px] overflow-hidden bg-gray-100 shrink-0">
              <Image
                src={productImage}
                alt={`Bundle of ${offer.quantity}`}
                fill
                className="object-cover"
              />
            </div>

            {/* Offer Text Section */}
            <div className="flex flex-col gap-[8px] w-6/12 justify-center">
              <p className="font-bold text-dose-dark text-[16px] leading-[1.5]">
                {offer.label}
              </p>
              <p className="font-medium text-dose-accent text-[14px] leading-[1.5]">
                uštedi {savePercent}%
              </p>
            </div>

            {/* Price Section */}
            <div className="flex flex-col gap-[4px] w-3/12 justify-center items-end shrink-0">
              <span className="font-bold text-dose-dark text-[18px] tracking-[-0.36px] leading-normal">
                {formatPrice(discountedTotal)}
              </span>
              <span className="font-medium text-dose-mid text-[14px] line-through leading-[1.5]">
                {formatPrice(originalTotal)}
              </span>
            </div>
          </div>
        );
      })}

      {/* Delivery Info Box */}
      <div className="bg-dose-peach rounded-[12px] px-[24px] py-[16px]">
        <div className="flex items-center justify-center gap-[12px]">
          <div className="relative w-[24px] h-[24px] shrink-0">
            <Image
              src="/images/icons/clock.svg"
              alt="Clock"
              fill
              className="object-contain"
            />
          </div>
          <p className="font-bold text-dose-dark lg:text-p-regular text-p-xs  leading-normal">
            PORUCI DANAS I OCEKUJ DOSTAVU U NAREDNIH 48 SATI
          </p>
        </div>
      </div>
    </div>
  );
}
