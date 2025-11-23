import CartFormAndPurchase from "@/app/components/sections/CartFormAndPurchase";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-dose-light">
      <div className="w-full max-w-[1440px] mx-auto px-[16px] sm:px-[32px] py-[64px] sm:py-[96px]">
        <h1 className="font-bold text-dose-dark text-[32px] sm:text-[40px] tracking-[-0.64px] mb-[48px]">
          Korpa (Shopping Cart)
        </h1>
        <CartFormAndPurchase />
      </div>
    </div>
  );
}
