"use client";

/**
 * HeroSectionMobile Component
 *
 * Mobile-only version of HeroSection with 1100px height
 * Used for mobile banner displays with different layout than desktop
 */

import Image from "next/image";
import Container from "../Container";

interface HeroSectionMobileProps {
  backgroundImageMobile?: string;
  backgroundColor?: string;
  badge?: string;
  heading: string;
  description: string;
  features: string[];
  productImage?: string;
  centerImage?: string;
  productLabel?: string;
  textColor: "light" | "dark";
}

export default function HeroSectionMobile({
  backgroundImageMobile,
  backgroundColor,
  badge,
  heading,
  description,
  features,
  centerImage,
  productLabel,
  textColor,
}: HeroSectionMobileProps) {
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
    <section className="w-full px-4 sm:px-8 lg:hidden">
      <Container>
        <div
          className="flex flex-col rounded-md pt-5"
          style={
            backgroundImageMobile
              ? {
                  backgroundImage: `url(${backgroundImageMobile})`,
                  backgroundSize: "100% auto",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                }
              : { backgroundColor: backgroundColor || "#FEF8F4" }
          }
        >
          {/* First Section: Text Content */}
          <div className="FirstSection flex flex-col justify-start items-center h-[418px]">
            <div className="flex flex-col text-center w-[85%] gap-4">
              {/* Badge */}
              {badge && (
                <div
                  className={`w-fit ${badgeBgClass} rounded-[99px] px-6 self-center`}
                >
                  <span className={`${badgeTextClass} font-medium text-[14px]`}>
                    {badge}
                  </span>
                </div>
              )}

              {/* Heading */}
              <h2 className={`${headingTextClass}`}>{heading}</h2>

              {/* Description */}
              <p className={`${descriptionTextClass} text-p-responsive `}>
                {description}
              </p>

              {/* Feature Badges */}
              {features && features.length > 0 && (
                <div className="flex gap-2 flex-wrap justify-center">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`${featureBgClass} rounded-[99px] px-4 py-2`}
                    >
                      <span
                        className={`${featureTextClass} font-medium text-[12px]`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Center Image */}
            {centerImage && (
              <div className="relative w-[280px] h-auto mt-4">
                <Image
                  src={centerImage}
                  alt="Featured product"
                  width={280}
                  height={400}
                  className="object-contain"
                />
              </div>
            )}
          </div>

          {/* Second Section: Product Label */}
          <div className="SecondSection flex items-center justify-center h-[370px]">
            {productLabel && (
              <div
                className={`${productLabelBgClass} rounded-[99px] px-4 py-2`}
              >
                <span
                  className={`${productLabelTextClass} font-medium text-[14px]`}
                >
                  {productLabel}
                </span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
