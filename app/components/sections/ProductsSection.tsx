const imgFrame =
  "/images/products/frame.svg";

export function ProductsSection() {
  return (
    <section id="products" className="py-[164px] px-[32px] w-full bg-white">
      <div className="max-w-[1376px] mx-auto flex flex-col gap-[24px] items-center">
        <div className="flex flex-col gap-[16px] items-center justify-center max-w-[675px]">
          <div className="bg-[rgba(194,53,93,0.2)] flex gap-[12px] items-center px-[24px] py-[12px] rounded-[99px]">
            <p className="font-semibold font-semibold text-[#c2355d] text-[16px] tracking-[-0.32px]">
              14+ colors available
            </p>
          </div>
          <p className="font-bold font-bold text-dose-dark text-[56px] tracking-[-1.12px] text-center">
            Hydrate in Style. Choose. Your Dose Flask.
          </p>
          <button className="bg-dose-accent flex gap-[24px] items-center pl-[8px] pr-[24px] py-[8px] rounded-[20px] shadow-[0px_10px_24px_0px_rgba(135,84,55,0.3)] hover:opacity-90 transition-opacity cursor-pointer">
            <div className="bg-dose-peach flex gap-[10px] items-center justify-center px-[11px] py-[10px] rounded-[14px] size-[46px]">
              <img alt="Shop icon" className="w-full h-full" src={imgFrame} />
            </div>
            <p className="font-bold font-bold text-dose-light text-[16px] tracking-[-0.32px] uppercase">
              visit shop
            </p>
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] w-full mt-[48px]">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex flex-col gap-[24px]">
              <div className="rounded-[20px] h-[480px] flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <p className="text-dose-accent font-bold text-lg">
                    Product #{item}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <div className="flex gap-[4px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="font-bold font-bold text-dose-dark text-[24px]">
                  Summer Peach
                </p>
                <div className="bg-dose-peach flex gap-[10px] h-[46px] items-center justify-center px-[12px] py-[10px] rounded-[14px]">
                  <p className="font-bold font-bold text-dose-dark text-[18px] tracking-[-0.36px]">
                    5.997 RSD
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
