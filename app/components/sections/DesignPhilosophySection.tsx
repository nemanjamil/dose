const imgLogotype = "/images/brand/logotype.svg";

export function DesignPhilosophySection() {
  return (
    <section id="design" className="py-[164px] px-[32px] w-full bg-white">
      <div className="max-w-[1376px] mx-auto h-[650px] relative rounded-[32px] overflow-hidden bg-gradient-to-r from-[#1a4d5c] to-[#2d6b7a]">
        <div className="relative z-10 flex flex-col gap-[32px] items-start pl-[117px] pt-[115px] w-[559px]">
          <div className="flex flex-col gap-[16px] items-start">
            <div className="bg-[rgba(255,255,255,0.2)] flex gap-[10px] h-[48px] items-center justify-center px-[24px] py-[12px] rounded-[99px]">
              <div className="h-[24px] w-[73.482px]">
                <img alt="Dose Logo" className="w-full h-full" src={imgLogotype} />
              </div>
            </div>
            <p className="font-bold font-bold text-white text-[56px] tracking-[-1.12px]">
              Dizajn koji govori sam za sebe.
            </p>
            <p className="font-medium font-medium text-white text-[18px] tracking-[-0.36px] leading-[1.5]">
              Sveden, ali izražajan. DOSE termosi nastaju sa idejom da spoje estetiku i svrhu. Mat završnica, ergonomska ručka, preklopni poklopac i boje koje izražavaju tvoj karakter.
            </p>
          </div>
          <div className="flex gap-[12px] items-start">
            <div className="bg-[rgba(255,255,255,0.2)] flex gap-[10px] h-[40px] items-center justify-center px-[24px] py-[12px] rounded-[99px]">
              <p className="font-medium font-medium text-white text-[16px] tracking-[-0.32px]">
                NO PLASTIC
              </p>
            </div>
            <div className="bg-[rgba(255,255,255,0.2)] flex gap-[10px] h-[40px] items-center justify-center px-[24px] py-[12px] rounded-[99px]">
              <p className="font-medium font-medium text-white text-[16px] tracking-[-0.32px]">
                STAINLESS STEEL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
