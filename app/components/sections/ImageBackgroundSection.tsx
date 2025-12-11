"use client";

/**
 * ImageBackgroundSection Component
 *
 * Reusable section with background image and text content
 * Separate mobile and desktop views that scale naturally
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
        className={`w-full lg:hidden flex flex-col ${addMoreCss}`}
      >
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center py-8">
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

        {/* Background Image */}
        <div
          className="relative rounded-md overflow-hidden mx-4"
          style={{ aspectRatio: "725/707" }}
        >
          {mobileImage && (
            <Image
              src={mobileImage}
              alt={heading}
              fill
              className="object-cover object-center"
            />
          )}
        </div>
      </section>

      {/* Desktop View */}
      <section className="w-full h-[650px] lg:px-4 sm:px-8 hidden lg:block">
        <Container className="h-full">
          <div className="flex flex-row gap-12 items-stretch rounded-md h-full">
            {/* Text content - positioned left or right */}
            <div
              className={`flex-1 flex flex-col gap-6 justify-center ${
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
            <div className={`flex-1 relative ${isTextLeft ? "" : "order-1"}`}>
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
