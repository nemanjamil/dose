import CartFormAndPurchase from "@/app/components/sections/CartFormAndPurchase";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-dose-light">
      <div className="w-full max-w-[1440px] mx-auto px-[16px] sm:px-[32px] py-[64px] sm:py-[96px]">
        <CartFormAndPurchase />
      </div>
    </div>
  );
}
