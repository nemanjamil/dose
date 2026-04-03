import Link from "next/link";

export default function OrderConfirmationPage() {
  return (
    <div className="w-full flex items-center justify-center px-4 py-32 bg-dose-light">
      <div className="bg-white rounded-[20px] p-8 sm:p-12 max-w-[560px] w-full flex flex-col items-center gap-6 text-center shadow-[0px_10px_40px_0px_rgba(108,37,23,0.08)]">
        {/* Checkmark Icon */}
        <div className="w-[72px] h-[72px] rounded-full bg-dose-peach flex items-center justify-center flex-shrink-0">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 18L14 25L29 11"
              stroke="#6C2517"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-dose-dark">Porudžbina primljena!</h2>
          <p className="font-medium text-dose-mid">
            Hvala vam na porudžbini. Poslali smo vam potvrdu na email adresu.
            Naš tim će vas uskoro kontaktirati radi potvrde dostave.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-dose-accent/10" />

        {/* Info */}
        <p className="font-medium text-dose-mid text-small">
          Način plaćanja:{" "}
          <span className="font-bold text-dose-dark">Pouzećem</span>
        </p>

        {/* Back to shop button */}
        <Link
          href="/shop"
          className="bg-dose-accent flex gap-4 items-center pl-2 pr-6 py-2 rounded-lg shadow-[0px_10px_24px_0px_rgba(135,84,55,0.3)] hover:opacity-90 transition-opacity active:scale-95"
        >
          <div className="bg-dose-peach flex items-center justify-center rounded-md size-[46px] flex-shrink-0">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9H21L19 19H5L3 9Z"
                stroke="#6C2517"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M3 9L5 3H19L21 9"
                stroke="#6C2517"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="22" r="1" fill="#6C2517" />
              <circle cx="15" cy="22" r="1" fill="#6C2517" />
            </svg>
          </div>
          <p className="font-bold text-dose-light text-[16px] tracking-[-0.32px] uppercase whitespace-nowrap">
            Nastavi kupovinu
          </p>
        </Link>
      </div>
    </div>
  );
}
