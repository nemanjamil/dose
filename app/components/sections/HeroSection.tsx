"use client";

/**
 * HeroSection Component
 *
 * Reusable hero section for dark and light themed content
 * Features left side text content and right side product card
 * Configurable for different text colors, backgrounds, and content
 */

import Image from "next/image";
import Container from "../Container";

interface HeroSectionProps {
  backgroundImage: string;
  badge: string;
  heading: string;
  description: string;
  features: string[];
  productImage: string;
  productName: string;
  productColorway: string;
  productPrice: string;
  productLabel: string;
  textColor: "light" | "dark";
}

export default function HeroSection({
  backgroundImage,
  badge,
  heading,
  description,
  features,
  productImage,
  productName,
  productColorway,
  productPrice,
  productLabel,
  textColor,
}: HeroSectionProps) {
  const isDarkText = textColor === "dark";
  const badgeBgClass = isDarkText ? "bg-dose-light" : "bg-white/20 backdrop-blur-sm";
  const badgeTextClass = isDarkText ? "text-dose-dark" : "text-white";
  const headingTextClass = isDarkText ? "text-dose-dark" : "text-white";
  const descriptionTextClass = isDarkText ? "text-dose-mid" : "text-white/90";
  const featureBgClass = isDarkText ? "bg-dose-light" : "bg-white/20 backdrop-blur-sm";
  const featureTextClass = isDarkText ? "text-dose-dark" : "text-white";
  const productLabelBgClass = isDarkText ? "bg-dose-light" : "bg-white/20 backdrop-blur-sm";
  const productLabelTextClass = isDarkText ? "text-dose-dark" : "text-white";

  return (
    <section className="w-full sm:px-8">
      <Container className="px-8 pt-16 bg-cover bg-center">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-[32px] h-[650px]"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          {/* Left Side - Text Content */}
          <div className="relative flex flex-col gap-8 rounded-[16px] justify-center items-center h-full w-full">
            <div className="left-[117px] top-[100px] max-w-[400px] flex flex-col items-center justify-center">
              {/* Badge */}
              <div className={`w-fit ${badgeBgClass} rounded-[99px] px-6 py-3 self-start`}>
                <span className={`${badgeTextClass} font-medium text-[14px]`}>
                  {badge}
                </span>
              </div>

              {/* Heading */}
              <div className="flex flex-col gap-4 text-left">
                <h2 className={`${headingTextClass} font-bold text-[40px] sm:text-[56px] leading-[1.2] tracking-[-1.12px]`}>
                  {heading}
                </h2>

                {/* Description */}
                <p className={`${descriptionTextClass} font-medium text-[16px] sm:text-[18px] leading-[1.5] tracking-[-0.36px]`}>
                  {description}
                </p>
              </div>

              {/* Feature Badges */}
              <div className="flex gap-3 flex-wrap justify-left mt-8 self-start">
                {features.map((feature, index) => (
                  <div key={index} className={`${featureBgClass} rounded-[99px] px-6 py-3`}>
                    <span className={`${featureTextClass} font-medium text-[16px]`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Product Card */}
          <div className="flex flex-col gap-6 items-center p-8 relative h-full">
            <div
              className="absolute w-[400px] h-[173px] p-3 flex flex-col items-start
            top-[273px] left-[47px]
            gap-2.5 flex-shrink-0 bg-white rounded-[16px] shadow-[0px_10px_24px_0px_rgba(140,76,102,0.3)]"
            >
              {/* Product Card */}
              <div className="flex gap-[75px] items-start w-full">
                {/* Product Image and Info */}
                <div className="flex gap-6 items-center">
                  {/* Product Image */}
                  <div className="w-[123px] h-[149px] rounded-[8px] overflow-hidden flex-shrink-0">
                    <Image
                      src={productImage}
                      alt={productName}
                      width={123}
                      height={149}
                      className="object-cover"
                    />
                  </div>
                  {/* Product Details */}
                  <div className="flex flex-col gap-2 w-[118px] flex-shrink-0">
                    <div className="font-bold text-[18px] text-dose-dark tracking-[-0.36px] leading-[1.5]">
                      <p className="mb-0">{productName}</p>
                      <p>{productColorway}</p>
                    </div>
                    <p className="font-medium text-[14px] text-dose-dark tracking-[-0.28px] leading-[1.5]">
                      {productPrice}
                    </p>
                    <button className="bg-dose-peach px-6 py-1.5 rounded-[8px] font-bold text-[14px] text-dose-accent tracking-[-0.28px] leading-[1.5] whitespace-nowrap">
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
            <div className={`${productLabelBgClass} rounded-[99px] px-4 py-2 absolute bottom-[80px] right-[154px]`}>
              <span className={`${productLabelTextClass} font-medium text-[14px]`}>
                {productLabel}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
