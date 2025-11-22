"use client";

/**
 * HeroSection Component
 *
 * Reusable hero section for dark and light themed content
 * Features left side text content and right side product card
 * Configurable for different text colors, backgrounds, and content
 *
 * All 16 props available:
 * 1. backgroundImage (optional) - Background image URL
 * 2. backgroundColor (optional) - Fallback background color
 * 3. badge (required) - Small badge text
 * 4. heading (required) - Main heading text
 * 5. description (required) - Description paragraph
 * 6. features (required) - Array of feature strings
 * 7. productImage (required) - Product image URL
 * 8. productName (required) - Product name
 * 9. productColorway (required) - Product color variant
 * 10. productPrice (required) - Product price
 * 11. productLabel (required) - Mobile product label
 * 12. textColor (required) - "light" | "dark" for text styling
 * 13. centerImage (optional) - Mobile center image URL
 * 14. showProductCard (optional) - Show product card on desktop (default: true)
 * 15. showFeatures (optional) - Show feature badges (default: true)
 * 16. textPosition (optional) - "left" | "right" text position (default: "left")
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
  textPosition?: "left" | "right";
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
  textPosition = "left",
}: HeroSectionProps) {
  const isDarkText = textColor === "dark";
  const isTextLeft = textPosition === "left";
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
          className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center rounded-md min-h-[500px] lg:h-[650px] bg-cover bg-left bg-no-repeat"
          style={
            backgroundImage
              ? { backgroundImage: `url(${backgroundImage})` }
              : { backgroundColor: backgroundColor || "#FEF8F4" }
          }
        >
          {/* Text Content */}
          <div
            className={`relative flex flex-col gap-8 rounded-md justify-center items-center h-full w-full px-5 ${
              !isTextLeft ? "lg:order-2" : ""
            }`}
          >
            <div className="left-[117px] top-[100px] max-w-[400px]  gap-8 flex flex-col items-center justify-center mt-5 lg:mt-0">
              {/* Badge */}
              <div
                className={`w-fit ${badgeBgClass} rounded-[99px] px-6 py-3 self-center lg:self-start`}
              >
                <span className={`${badgeTextClass} font-medium text-[14px]`}>
                  {badge}
                </span>
              </div>

              {/* Heading */}
              <div className="flex flex-col gap-4 text-center lg:text-left">
                <h2 className={`${headingTextClass}`}>{heading}</h2>

                {/* Description */}
                <p className={`${descriptionTextClass} text-p-responsive`}>
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

          {/* Product Card / Mobile Image */}
          <div className={isTextLeft ? "flex-1 h-full relative" : "lg:order-1"}>
            {/* Mobile View */}
            <div className="lg:hidden flex flex-col gap-6 items-center relative h-full justify-center">
              {/* Mobile View - Center Image Only */}
              {centerImage && (
                <div className="relative w-[300px] h-auto">
                  <Image
                    src={centerImage}
                    alt="Featured product"
                    width={300}
                    height={400}
                    className="object-contain"
                  />
                </div>
              )}
              {/* Mobile Product Label */}
              <div
                className={`${productLabelBgClass} rounded-[99px] px-4 py-2 absolute bottom-[5%]`}
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
              <HeroProductCard
                productImage={productImage}
                productName={productName}
                productColorway={productColorway}
                productPrice={productPrice}
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
