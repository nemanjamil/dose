/**
 * ProductPrice Component
 *
 * Displays product price with optional original price
 */

interface ProductPriceProps {
  price: string;
  originalPrice?: string;
}

export default function ProductPrice({
  price,
  originalPrice,
}: ProductPriceProps) {
  return (
    <div className="flex items-baseline gap-[12px]">
      <span
        className="font-bold text-dose-accent tracking-[-0.48px] leading-normal"
        style={{ fontSize: "var(--font-size-h4)" }}
      >
        {price}
      </span>
      {originalPrice && (
        <span className="font-medium text-dose-mid text-[16px] line-through">
          {originalPrice}
        </span>
      )}
    </div>
  );
}
