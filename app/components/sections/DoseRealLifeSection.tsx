export function DoseRealLifeSection() {
  return (
    <section id="real-life" className="py-[164px] px-[32px] w-full bg-white">
      <div className="max-w-[1376px] mx-auto flex flex-col gap-[24px] items-center">
        <div className="flex flex-col gap-[24px] items-center w-full">
          <div className="flex flex-col gap-[16px] items-center justify-center w-full max-w-[675px]">
            <p className="font-['Albert_Sans:Bold',sans-serif] font-bold text-[#6c2517] text-[56px] tracking-[-1.12px] text-center">
              DOSE u stvarnom životu
            </p>
            <p className="font-['Albert_Sans:Medium',sans-serif] font-medium text-[#9c5243] text-[18px] tracking-[-0.36px] text-center leading-[1.5]">
              Zavirite u trenutke naših korisnica, njihove navike, pokrete i svakodnevicu sa DOSE-om. Jer inspiracija dolazi iz onog što je stvarno.
            </p>
          </div>
        </div>

        {/* Carousel or gallery will go here */}
        <div className="w-full h-[450px] bg-[#fef8f4] rounded-[20px] flex items-center justify-center">
          <p className="text-[#9c5243] font-medium">User showcase carousel coming soon...</p>
        </div>
      </div>
    </section>
  );
}
