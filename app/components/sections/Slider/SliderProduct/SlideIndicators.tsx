/**
 * SlideIndicators Component
 * Vertical slide indicators (01, 02, 03)
 */

export default function SlideIndicators() {
  return (
    <div className="absolute right-[16px] bottom-[16px] flex h-[166px] w-[62px] items-center justify-center">
      <div className="rotate-90">
        <div className="bg-[rgba(255,255,255,0.4)] box-border flex gap-[6px] items-start p-[8px] rounded-[99px] shadow-[0px_10px_24px_0px_rgba(160,157,151,0.3)]">
          {/* Slide 01 */}
          <div className="flex gap-[24px] items-center">
            <div className="bg-white flex gap-[10px] items-center justify-center px-[11px] py-[10px] rounded-[99px] size-[46px] flex-shrink-0">
              <div className="flex h-[19px] w-[26px] items-center justify-center">
                <div className="-rotate-90">
                  <p className="font-semibold font-semibold text-dose-accent text-[20px] tracking-[-0.4px]">
                    01
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 02 */}
          <div className="flex gap-[24px] items-center">
            <div className="bg-[rgba(255,255,255,0.4)] flex gap-[10px] items-center justify-center px-[11px] py-[10px] rounded-[99px] size-[46px] flex-shrink-0">
              <div className="flex h-[25px] w-[30px] items-center justify-center">
                <div className="-rotate-90">
                  <p className="font-semibold font-semibold text-[rgba(167,37,59,0.4)] text-[20px] tracking-[-0.4px]">
                    02
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 03 */}
          <div className="flex gap-[24px] items-center">
            <div className="bg-[rgba(255,255,255,0.4)] flex gap-[10px] items-center justify-center px-[11px] py-[10px] rounded-[99px] size-[46px] flex-shrink-0">
              <div className="flex h-[25px] w-[30px] items-center justify-center">
                <div className="-rotate-90">
                  <p className="font-semibold font-semibold text-[rgba(167,37,59,0.4)] text-[20px] tracking-[-0.4px]">
                    03
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
