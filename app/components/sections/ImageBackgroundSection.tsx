"use client";

/**
 * ImageBackgroundSection Component
 *
 * Reusable section with background image and text content
 * Separate mobile (750px) and desktop (650px) views
 * Text can be positioned left or right on desktop
 */

import Image from "next/image";
import ActionButtons from "../ActionButtons";
import Container from "../Container";

interface Button {
  label: string;
  onClick?: () => void;
  href?: string;
  icon?: string;
}

interface ImageBackgroundSectionProps {
  backgroundImage: string;
  backgroundImageMob?: string;
  heading: string;
  description: string;
  buttons?: Button[];
  textPosition?: "left" | "right";
  mobileHeight?: number;
  desktopHeight?: number;
  addMoreCss?: string;
  actionButtonsMobileViewPresented?: boolean;
}

export default function ImageBackgroundSection({
  backgroundImage,
  backgroundImageMob,
  heading,
  description,
  buttons,
  textPosition = "left",
  mobileHeight = 750,
  desktopHeight = 650,
  addMoreCss = "",
  actionButtonsMobileViewPresented = true,
}: ImageBackgroundSectionProps) {
  const isTextLeft = textPosition === "left";
  const mobileImage = backgroundImageMob;

  return (
    <>
      {/* Mobile View */}
      <section
        id="MobileViewSectionAbout"
        className={`w-full lg:hidden flex   justify-center ${addMoreCss}`}
        style={{
          width: "366px",
          height: `${mobileHeight}px`,
          backgroundImage: `url(${mobileImage})`,
          backgroundSize: "100% auto",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-start items-center rounded-md">
          <div className="flex flex-col gap-2 text-center max-w-[90%]">
            <h2 className="text-dose-dark"> {heading}</h2>
            <p className="text-p-responsive text-dose-mid">{description}</p>
            {actionButtonsMobileViewPresented &&
              buttons &&
              buttons.length > 0 && (
                <ActionButtons buttons={buttons} alignment="center" />
              )}
          </div>
        </div>
      </section>

      {/* Desktop View */}
      <section className="w-full lg:px-4 sm:px-8 hidden lg:block">
        <Container>
          <div
            className="flex flex-row gap-12 items-center rounded-md"
            style={{
              height: `${desktopHeight}px`,
            }}
          >
            {/* Text content - positioned left or right */}
            <div
              className={`flex-1 flex flex-col gap-6 ${
                isTextLeft ? "text-left pl-12" : "text-right pr-12 order-2"
              }`}
            >
              <h2 className="text-dose-dark">{heading}</h2>
              <p className="text-p-responsive text-dose-mid">{description}</p>
              {buttons && buttons.length > 0 && (
                <ActionButtons
                  buttons={buttons}
                  alignment={isTextLeft ? "start" : "end"}
                />
              )}
            </div>

            {/* Image */}
            <div
              className={`flex-1 relative h-full ${
                isTextLeft ? "" : "order-1"
              }`}
            >
              <Image
                src={backgroundImage}
                alt={heading}
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
