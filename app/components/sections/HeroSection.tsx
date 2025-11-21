const imgSubtract = "https://www.figma.com/api/mcp/asset/66ea92ee-1af4-422e-ba74-bfa50c815049";
const imgFrame = "https://www.figma.com/api/mcp/asset/bf583040-90f1-4369-8cb9-89263ce253d9";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/c0963124-1ed6-4854-b1bc-349a33e47003";
const imgFrame2 = "https://www.figma.com/api/mcp/asset/3b1e6a59-c1ff-4855-b7ff-d59da94a72e7";
const imgSeedling1 = "https://www.figma.com/api/mcp/asset/5347a9c0-4cf6-4bf8-bb02-db34f1eae15c";

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full max-w-[1440px] mx-auto h-[732px] flex items-center bg-[#fef8f4]">
      {/* Left Content */}
      <div className="flex flex-col gap-[32px] items-start pl-[149px] pt-[187px] w-[355px]">
        <div className="flex flex-col gap-[16px] items-start">
          <div className="font-['Albert_Sans:Bold',sans-serif] font-bold text-[#6c2517] text-[56px] tracking-[-1.12px]">
            <p className="mb-0">Termos</p>
            <p className="mb-0">koji ti treba.</p>
            <p>Svaki dan.</p>
          </div>
          <p className="font-['Albert_Sans:Medium',sans-serif] font-medium text-[#9c5243] text-[18px] tracking-[-0.36px] leading-[1.5]">
            Dose nije samo termos. To je navika, stil i briga o sebi, u pokretu. Svaki gutljaj, sigurnost i stil uvek sa tobom.
          </p>
        </div>

        {/* CTA Button */}
        <button className="bg-[#a7253b] flex gap-[24px] items-center pl-[8px] pr-[24px] py-[8px] rounded-[20px] shadow-[0px_10px_24px_0px_rgba(135,84,55,0.3)] hover:opacity-90 transition-opacity cursor-pointer">
          <div className="bg-[#ffe3d3] flex gap-[10px] items-center justify-center px-[11px] py-[10px] rounded-[14px] size-[46px]">
            <div className="relative size-[24px]">
              <img alt="Shop icon" className="w-full h-full" src={imgFrame} />
            </div>
          </div>
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold text-[#fef8f4] text-[16px] tracking-[-0.32px] uppercase">
            Shop now
          </p>
        </button>
      </div>

      {/* Right Image Hero */}
      <div className="absolute right-0 top-[32px] h-[700px] w-[676px] shadow-[0px_20px_48px_0px_rgba(135,84,55,0.15)]">
        <img alt="Dose Thermos Hero" className="w-full h-full object-cover" src={imgSubtract} />

        {/* Feature Badges */}
        <div className="absolute bottom-[138px] left-[242px] bg-[rgba(255,255,255,0.4)] flex gap-[12px] items-center pl-[8px] pr-[24px] py-[8px] rounded-[99px] shadow-[0px_10px_24px_0px_rgba(160,157,151,0.3)]">
          <div className="bg-[#fff8f4] flex gap-[10px] items-center justify-center px-[11px] py-[10px] rounded-[99px] size-[46px]">
            <div className="relative size-[24px]">
              <img alt="" className="w-full h-full" src={imgFrame1} />
            </div>
          </div>
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold text-[#a7253b] text-[18px] tracking-[-0.36px]">
            24h cold water
          </p>
        </div>

        <div className="absolute top-[257px] right-[247px] bg-[rgba(255,255,255,0.4)] flex gap-[12px] items-center pl-[8px] pr-[24px] py-[8px] rounded-[99px] shadow-[0px_10px_24px_0px_rgba(160,157,151,0.3)]">
          <div className="bg-[#fff8f4] flex gap-[10px] items-center justify-center px-[11px] py-[10px] rounded-[99px] size-[46px]">
            <div className="relative size-[24px]">
              <img alt="" className="w-full h-full" src={imgFrame2} />
            </div>
          </div>
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold text-[#a7253b] text-[18px] tracking-[-0.36px]">
            Leak proof
          </p>
        </div>

        <div className="absolute top-[206px] left-[77px] bg-[rgba(255,255,255,0.4)] flex gap-[12px] items-center pl-[8px] pr-[24px] py-[8px] rounded-[99px] shadow-[0px_10px_24px_0px_rgba(160,157,151,0.3)]">
          <div className="bg-[#fff8f4] flex gap-[10px] items-center justify-center px-[11px] py-[10px] rounded-[99px] size-[46px]">
            <div className="relative size-[24px]">
              <img alt="" className="w-full h-full" src={imgSeedling1} />
            </div>
          </div>
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold text-[#a7253b] text-[18px] tracking-[-0.36px]">
            BPA Free
          </p>
        </div>

        {/* Colors Available Badge */}
        <div className="absolute bottom-[57px] left-[32px] flex gap-[12px] items-center">
          <div className="h-[24px] w-[104px]">
            {/* Color dots placeholder */}
          </div>
          <p className="font-['Albert_Sans:Medium',sans-serif] font-medium text-[#a7253b] text-[18px] tracking-[-0.36px]">
            14+ colors available
          </p>
        </div>
      </div>
    </section>
  );
}
