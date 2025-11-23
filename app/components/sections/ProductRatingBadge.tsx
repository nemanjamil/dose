/**
 * ProductRatingBadge Component
 *
 * Displays product rating and review count in a pill-shaped badge
 * Used on product detail pages
 */

interface ProductRatingBadgeProps {
  rating: number;
  totalReviews: number;
}

export default function ProductRatingBadge({
  rating,
  totalReviews,
}: ProductRatingBadgeProps) {
  return (
    <div className="bg-dose-accent/20 rounded-[99px] px-[24px] py-[12px] flex items-center gap-[10px] w-fit">
      <div className="flex items-center gap-[8px]">
        <span className="text-[18px]">⭐</span>
        <p className="font-medium text-dose-accent text-[16px] tracking-[-0.32px] leading-[1.5]">
          Rated {rating} / 5.0 | {totalReviews} Reviews
        </p>
      </div>
    </div>
  );
}
