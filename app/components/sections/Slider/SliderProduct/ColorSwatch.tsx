/**
 * ColorSwatch Component
 * Color swatches display with "14+ colors available" text
 */

const imgColors = "https://www.figma.com/api/mcp/asset/47fac91e-e324-4692-b9db-769533b6e2e6";

export default function ColorSwatch() {
  return (
    <div className="absolute left-[32px] top-[643px] flex gap-[12px] items-center">
      <div className="h-[24px] w-[104px] relative">
        <img
          alt="Color swatches"
          className="w-full h-full"
          src={imgColors}
        />
      </div>
      <p className="font-['Albert_Sans:Medium',sans-serif] font-medium text-[#a7253b] text-[18px] tracking-[-0.36px]">
        14+ colors available
      </p>
    </div>
  );
}
