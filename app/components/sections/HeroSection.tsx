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
import HeroProductCard from "./HeroProductCard";

interface HeroSectionProps {
  backgroundImage?: string;
  backgroundColor?: string;
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
  centerImage?: string;
  showProductCard?: boolean;
  showFeatures?: boolean;
}

export default function HeroSection({
  backgroundImage,
  backgroundColor,
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
  centerImage,
  showProductCard = true,
  showFeatures = true,
}: HeroSectionProps) {
  const isDarkText = textColor === "dark";
  const badgeBgClass = isDarkText
    ? "bg-dose-light"
    : "bg-white/20 backdrop-blur-sm";
  const badgeTextClass = isDarkText ? "text-dose-dark" : "text-white";
  const headingTextClass = isDarkText ? "text-dose-dark" : "text-white";
  const descriptionTextClass = isDarkText ? "text-dose-mid" : "text-white/90";
  const featureBgClass = isDarkText
    ? "bg-dose-light"
    : "bg-white/20 backdrop-blur-sm";
  const featureTextClass = isDarkText ? "text-dose-dark" : "text-white";
  const productLabelBgClass = isDarkText
    ? "bg-dose-light"
    : "bg-white/20 backdrop-blur-sm";
  const productLabelTextClass = isDarkText ? "text-dose-dark" : "text-white";

  return (
    <section className="w-full sm:px-8">
      <Container className="lg:px-8 px-4 pt-16 bg-cover bg-center">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center rounded-[32px] lg:h-[650px] bg-cover bg-left bg-no-repeat"
          style={
            backgroundImage
              ? { backgroundImage: `url(${backgroundImage})` }
              : { backgroundColor: backgroundColor || "#FEF8F4" }
          }
        >
          {/* Left Side - Text Content */}
          <div className="relative flex flex-col gap-8 rounded-[16px] justify-center items-center h-full w-full px-5">
            <div className="left-[117px] top-[100px] max-w-[400px] flex flex-col items-center justify-center mt-5 lg:mt-0">
              {/* Badge */}
              <div
                className={`w-fit ${badgeBgClass} rounded-[99px] px-6 py-3 self-start`}
              >
                <span className={`${badgeTextClass} font-medium text-[14px]`}>
                  {badge}
                </span>
              </div>

              {/* Heading */}
              <div className="flex flex-col gap-4 text-center lg:text-left">
                <h2
                  className={`${headingTextClass} font-bold text-[40px] sm:text-[56px] leading-[1.2] tracking-[-1.12px]`}
                >
                  {heading}
                </h2>

                {/* Description */}
                <p
                  className={`${descriptionTextClass} font-medium text-[16px] sm:text-[18px] leading-[1.5] tracking-[-0.36px]`}
                >
                  {description}
                </p>
              </div>

              {/* Feature Badges */}
              {showFeatures && (
                <div className="flex gap-3 flex-wrap lg:justify-left justify-center mt-8 self-start">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`${featureBgClass} rounded-[99px] px-6 py-3`}
                    >
                      <span
                        className={`${featureTextClass} font-medium text-[16px]`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Product Card / Mobile Image */}
          <div>
            {/* Mobile View */}
            <div className="lg:hidden flex flex-col gap-6 items-center relative h-full justify-center">
              {/* Mobile View - Center Image Only */}
              {centerImage && (
                <div className="relative w-[300px] h-[400px]">
                  <Image
                    src={centerImage}
                    alt="Featured product"
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              {/* Mobile Product Label */}
              <div
                className={`${productLabelBgClass} rounded-[99px] px-4 py-2 absolute bottom-[20%]`}
              >
                <span
                  className={`${productLabelTextClass} font-medium text-[14px] `}
                >
                  {productLabel}
                </span>
              </div>
            </div>

            {/* Desktop View - HeroProductCard */}
            {showProductCard && (
              <div className="hidden lg:block">
                <HeroProductCard
                  productImage={productImage}
                  productName={productName}
                  productColorway={productColorway}
                  productPrice={productPrice}
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
