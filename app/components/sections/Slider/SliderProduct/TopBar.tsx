/**
 * TopBar Component
 * Top bar with social icons and Shop Now button
 */

const imgFacebook =
  "https://www.figma.com/api/mcp/asset/5015dc98-6955-48fe-ac12-dac1c1b89dcd";
const imgInstagram =
  "https://www.figma.com/api/mcp/asset/6de0a337-1660-4c73-8fb0-ee51c69689d9";
const imgShopIcon =
  "https://www.figma.com/api/mcp/asset/759f0462-4809-42eb-a5fd-eea23413b947";

export default function TopBar() {
  return (
    <div className="absolute right-[0] top-[0px] flex gap-[16px] items-center">
      {/* Facebook Icon */}
      <div className="relative size-[40px]">
        <img alt="Facebook" className="w-full h-full" src={imgFacebook} />
      </div>

      {/* Instagram Icon */}
      <div className="relative size-[40px]">
        <img alt="Instagram" className="w-full h-full" src={imgInstagram} />
      </div>

      {/* Shop Now Button */}
      <button className="bg-white box-border flex flex-col gap-[10px] items-start pl-[8px] pr-[24px] py-[8px] rounded-[20px] shadow-[0px_10px_24px_0px_rgba(160,157,151,0.3)] hover:shadow-[0px_12px_32px_0px_rgba(160,157,151,0.4)] transition-shadow active:scale-95">
        <div className="flex gap-[24px] items-center">
          <div className="bg-[#ffe3d3] flex gap-[10px] items-center justify-center px-[11px] py-[10px] rounded-[14px] size-[46px] flex-shrink-0">
            <div className="relative size-[24px]">
              <img
                alt="Shop icon"
                className="w-full h-full"
                src={imgShopIcon}
              />
            </div>
          </div>
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold text-[#a7253b] text-[16px] tracking-[-0.32px] uppercase">
            Shop now
          </p>
        </div>
      </button>
    </div>
  );
}
