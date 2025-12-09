/**
 * ProductBundleOffer Component
 *
 * Displays bundle offers with 3 product cards
 * Each card has image, offer text, and pricing information
 */

import Image from "next/image";

interface BundleCard {
  image: string;
  imageAlt: string;
  buyText: string;
  saveText: string;
  price: string;
  originalPrice: string;
}

interface ProductBundleOfferProps {
  cards?: BundleCard[];
}

const defaultCards: BundleCard[] = [
  {
    image: "/images/products/item_peach.png",
    imageAlt: "Bundle Product 1",
    buyText: "Buy One",
    saveText: "You save 39%",
    price: "5.997 RSD",
    originalPrice: "9.997 RSD",
  },
  {
    image: "/images/products/item_peach.png",
    imageAlt: "Bundle Product 2",
    buyText: "Buy Two",
    saveText: "You save 45%",
    price: "11.994 RSD",
    originalPrice: "21.994 RSD",
  },
  {
    image: "/images/products/item_peach.png",
    imageAlt: "Bundle Product 3",
    buyText: "Buy Three",
    saveText: "You save 50%",
    price: "17.991 RSD",
    originalPrice: "35.991 RSD",
  },
];

export default function ProductBundleOffer({
  cards = defaultCards,
}: ProductBundleOfferProps) {
  return (
    <div className="flex flex-col gap-[24px]">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-row gap-[16px] border border-[#1A5946] rounded-[20px] p-[16px]"
        >
          {/* Product Image - 3 columns */}
          <div className="relative w-[75px] h-[75px] rounded-[16px] overflow-hidden bg-gray-100 shrink-0">
            <Image
              src={card.image}
              alt={card.imageAlt}
              fill
              className="object-cover"
            />
          </div>

          {/* Offer Text Section - 6 columns */}
          <div className="flex flex-col gap-[8px] w-6/12 justify-center">
            <p className="font-bold text-dose-dark text-[16px] leading-[1.5]">
              {card.buyText}
            </p>
            <p className="font-medium text-dose-accent text-[14px] leading-[1.5]">
              {card.saveText}
            </p>
          </div>

          {/* Price Section - 3 columns */}
          <div className="flex flex-col gap-[4px] w-3/12 justify-center items-end shrink-0">
            <span className="font-bold text-dose-dark text-[18px] tracking-[-0.36px] leading-normal">
              {card.price}
            </span>
            <span className="font-medium text-dose-mid text-[14px] line-through leading-[1.5]">
              {card.originalPrice}
            </span>
          </div>
        </div>
      ))}

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
