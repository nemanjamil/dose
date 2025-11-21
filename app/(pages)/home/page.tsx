import { SliderSection } from "../../components/sections/Slider";
import DoseInRealLife from "../../components/sections/DoseInRealLife";

const imgFrame =
  "/images/products/frame.svg";
const imgLogotype =
  "/images/brand/logotype.svg";

/**
 * Home Page (/ route)
 *
 * Main landing page for the Dose website.
 * Displays the hero slider and multiple content sections showcasing
 * the brand, design philosophy, and products.
 */
export default function HomePage() {
  return (
    <div className="relative w-full" data-name="Homepage Desktop">
      {/* Slider Section */}
      <SliderSection />

      {/* Section: Featured Product - Based on Figma node-id 95-15 */}
      <DoseInRealLife />

      {/* Section: Testimonials */}
      <div className="py-[164px] px-[32px] w-full">
        <div className="max-w-[1376px] mx-auto flex flex-col gap-[24px] items-center">
          <div className="flex flex-col gap-[16px] items-center justify-center max-w-[675px]">
            <p className="font-bold font-bold text-dose-dark text-[56px] tracking-[-1.12px] text-center">
              What our customers have to say.
            </p>
          </div>
          <div className="text-center py-[40px]">
            <p className="font-medium font-medium text-dose-mid text-[18px]">
              Customer testimonials coming soon...
            </p>
          </div>
        </div>
      </div>

      {/* Section: Product Showcase */}
      <div className="py-[164px] px-[32px] w-full">
        <div className="max-w-[1376px] mx-auto flex flex-col gap-[24px] items-center">
          <div className="flex flex-col gap-[16px] items-center justify-center max-w-[675px]">
            <p className="font-bold font-bold text-dose-dark text-[56px] tracking-[-1.12px] text-center">
              Hydrate in Style. Choose. Your Dose Flask.
            </p>
            <button className="bg-dose-accent flex gap-[24px] items-center pl-[8px] pr-[24px] py-[8px] rounded-[20px] shadow-[0px_10px_24px_0px_rgba(135,84,55,0.3)] hover:opacity-90 transition-opacity">
              <div className="bg-dose-peach flex gap-[10px] items-center justify-center px-[11px] py-[10px] rounded-[14px] size-[46px]">
                <img alt="" className="w-full h-full" src={imgFrame} />
              </div>
              <p className="font-bold font-bold text-dose-light text-[16px] tracking-[-0.32px] uppercase">
                visit shop
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Section: Two Formats */}
      <div className="py-[164px] px-[32px] w-full">
        <div className="max-w-[1376px] mx-auto h-[650px] relative rounded-[32px] overflow-hidden bg-gradient-to-r from-purple-900 to-purple-800">
          <div className="relative z-10 flex flex-col gap-[32px] items-start pl-[117px] pt-[120px] w-[559px]">
            <div className="flex flex-col gap-[16px] items-start leading-[0]">
              <div className="font-bold font-bold text-dose-dark text-[56px] tracking-[-1.12px]">
                <p className="mb-0 text-white">Dva formata.</p>
                <p className="text-white">Jedan ritam.</p>
              </div>
              <p className="font-medium font-medium text-white text-[18px] tracking-[-0.36px] leading-[1.5]">
                Za duže dane bez prekida ili za svaki korak u danu. Obe verzije
                dolaze sa čvrstom ručkom, preklopnim poklopcem sa slamkom.
              </p>
            </div>
            <div className="flex gap-[12px] items-start">
              <div className="bg-[rgba(108,37,23,0.05)] flex gap-[10px] h-[40px] items-center justify-center px-[24px] py-[12px] rounded-[99px] text-white">
                <p className="font-medium font-medium text-[16px] tracking-[-0.32px]">
                  MAX 1.2 L
                </p>
              </div>
              <div className="bg-[rgba(108,37,23,0.05)] flex gap-[10px] h-[40px] items-center justify-center px-[24px] py-[12px] rounded-[99px] text-white">
                <p className="font-medium font-medium text-[16px] tracking-[-0.32px]">
                  TRAVEL SIZE 0.88 L
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="py-[96px] px-[32px] w-full">
        <div className="max-w-[1376px] mx-auto flex flex-col gap-[24px] items-center text-center">
          <p className="font-bold font-bold text-dose-dark text-[56px] tracking-[-1.12px]">
            Ready to find your Dose?
          </p>
          <button className="bg-dose-accent flex gap-[24px] items-center pl-[8px] pr-[24px] py-[8px] rounded-[20px] shadow-[0px_10px_24px_0px_rgba(135,84,55,0.3)] hover:opacity-90 transition-opacity">
            <div className="bg-dose-peach flex gap-[10px] items-center justify-center px-[11px] py-[10px] rounded-[14px] size-[46px]">
              <img alt="" className="w-full h-full" src={imgFrame} />
            </div>
            <p className="font-bold font-bold text-dose-light text-[16px] tracking-[-0.32px] uppercase">
              Shop now
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
