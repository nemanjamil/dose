"use client";

/**
 * DesignTellsForItSelf Component
 *
 * Hero section showcasing the design philosophy of DOSE thermoses
 * Features left side text content and right side product image
 *
 * Figma design: https://www.figma.com/design/I7GYdab3FirpOg941b6wTL/Dose-Web-Project?node-id=95-33&m=dev
 */

import Image from "next/image";

export default function DesignTellsForItSelf() {
  return (
    <section className="w-full sm:px-[var(--spacing-32)]">
      <div className="max-w-[1440px] mx-auto px-[var(--spacing-32)] pt-[var(--spacing-64)]  bg-cover bg-center">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-center rounded-[32px] h-[650px]"
          style={{
            backgroundImage: "url(/images/products/design.png)",
          }}
        >
          {/* Left Side - Text Content */}
          <div className="relative flex flex-col gap-[32px] rounded-[16px] justify-center items-center h-full w-full">
            <div className="left-[117px] top-[100px] max-w-[400px] flex flex-col items-center justify-center">
              {/* Dose Badge */}
              <div className="w-fit bg-white/20 backdrop-blur-sm rounded-[99px] px-[24px] py-[12px] self-start">
                <span className="text-white font-medium text-[14px]">DOSE</span>
              </div>

              {/* Heading */}
              <div className="flex flex-col gap-[16px] text-left">
                <h2 className="text-white font-bold text-[40px] sm:text-[56px] leading-[1.2] tracking-[-1.12px]">
                  Dizajn koji govori sam za sebe.
                </h2>

                {/* Description */}
                <p className="text-white/90 font-medium text-[16px] sm:text-[18px] leading-[1.5] tracking-[-0.36px]">
                  Sveden, ali izražajan. DOSE termosi nastaju sa idejom da spoje
                  estetiku i svrhu. Mat završnica, ergonomska ručka, preklopni
                  poklopac i boje koje izražavaju tvoj karakter. Savršen balans
                  između lepote i praktičnosti. Jer stil nije samo ono što
                  nosimo, već ono što biramo svakog dana.
                </p>
              </div>

              {/* Feature Badges */}
              <div className="flex gap-[12px] flex-wrap justify-left mt-8 self-start">
                <div className="bg-white/20 backdrop-blur-sm rounded-[99px] px-[24px] py-[12px]">
                  <span className="text-white font-medium text-[16px]">
                    NO PLASTIC
                  </span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-[99px] px-[24px] py-[12px]">
                  <span className="text-white font-medium text-[16px]">
                    STAINLESS STEEL
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image Content */}
          <div className="flex flex-col gap-[24px] items-center p-[var(--spacing-32)] relative h-full">
            <div
              className="absolute w-[400px] h-[173px] p-[12px] flex flex-col items-start 
            top-[273px] left-[47px]
            gap-[10px] flex-shrink-0 bg-white rounded-[16px] shadow-[0px_10px_24px_0px_rgba(140,76,102,0.3)]"
            >
              {/* Product Card */}
              <div className="flex gap-[75px] items-start w-full">
                {/* Product Image and Info */}
                <div className="flex gap-[24px] items-center">
                  {/* Product Image */}
                  <div className="w-[123px] h-[149px] rounded-[8px] overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/products/malaSlikaHeader.png"
                      alt="Product"
                      width={123}
                      height={149}
                      className="object-cover"
                    />
                  </div>
                  {/* Product Details */}
                  <div className="flex flex-col gap-[8px] w-[118px] flex-shrink-0">
                    <div className="font-bold text-[18px] text-dose-dark tracking-[-0.36px] leading-[1.5]">
                      <p className="mb-0">Product name</p>
                      <p>Colorway</p>
                    </div>
                    <p className="font-medium text-[14px] text-dose-dark tracking-[-0.28px] leading-[1.5]">
                      price $35
                    </p>
                    <button className="bg-dose-peach px-[24px] py-[6px] rounded-[8px] font-bold text-[14px] text-dose-accent tracking-[-0.28px] leading-[1.5] whitespace-nowrap">
                      Learn more
                    </button>
                  </div>
                </div>
                {/* Close Button */}
                <div className="w-[36px] h-[36px] flex items-center justify-center rounded-[8px] bg-[rgba(167,37,59,0.05)] flex-shrink-0">
                  <span className="text-dose-accent text-[24px] font-bold">
                    ×
                  </span>
                </div>
              </div>
            </div>
            {/* Product Label */}
            <div className="bg-white/20 backdrop-blur-sm rounded-[99px] px-[16px] py-[8px] absolute bottom-[80px] right-[154px]">
              <span className="text-white font-medium text-[14px]">
                Mini 0,6 L Traveler Bottle
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
