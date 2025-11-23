/**
 * ProductHeader Component
 *
 * Displays product brand, title, and description
 */

interface ProductHeaderProps {
  brand: string;
  title: string;
  description: string;
}

export default function ProductHeader({
  brand,
  title,
  description,
}: ProductHeaderProps) {
  return (
    <div className="flex flex-col gap-[12px]">
      <p className="font-medium text-dose-mid text-[18px] tracking-[-0.36px]">
        {brand}
      </p>
      <h1 className="font-bold text-dose-dark text-[32px] tracking-[-0.64px] leading-normal">
        {title}
      </h1>
      <p className="font-medium text-dose-mid text-[18px] tracking-[-0.36px] leading-[1.5]">
        {description}
      </p>
    </div>
  );
}
