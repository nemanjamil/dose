"use client";

import { useCart } from "@/app/contexts/CartContext";

export default function CartToast() {
  const { toast } = useCart();

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        toast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-dose-dark text-white px-5 py-3 rounded-[12px] shadow-[0px_10px_32px_0px_rgba(108,37,23,0.25)] flex items-center gap-3 whitespace-nowrap">
        <div className="w-5 h-5 rounded-full bg-dose-peach flex items-center justify-center flex-shrink-0">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M1.5 5L3.5 7.5L8.5 2.5"
              stroke="#6C2517"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="font-medium text-[14px]">{toast}</p>
      </div>
    </div>
  );
}
