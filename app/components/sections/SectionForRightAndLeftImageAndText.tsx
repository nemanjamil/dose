"use client";

/**
 * SectionForRightAndLeftImageAndText Component
 *
 * Reusable section with image and text in 50/50 layout
 * Can be configured to have image on left or right
 */

import Image from "next/image";
import Container from "../Container";

interface Button {
  label: string;
  onClick?: () => void;
  href?: string;
  icon?: string;
}

interface SectionForRightAndLeftImageAndTextProps {
  image: string;
  imageAlt: string;
  heading: string;
  description: string;
  imagePosition?: "left" | "right";
  buttons?: Button[];
}

export default function SectionForRightAndLeftImageAndText({
  image,
  imageAlt,
  heading,
  description,
  imagePosition = "left",
  buttons,
}: SectionForRightAndLeftImageAndTextProps) {
  const isImageLeft = imagePosition === "left";

  const imageContent = (
    <div className="relative w-full h-[400px] sm:h-[500px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover rounded-[20px]"
      />
    </div>
  );

  const textContent = (
    <div
      className={`flex flex-col gap-6 text-center ${
        isImageLeft ? "lg:text-right" : "lg:text-left"
      }`}
    >
      <h2 className="text-dose-dark">
        {heading}
      </h2>
      <p className="text-p-responsive text-dose-mid">{description}</p>
      {buttons && buttons.length > 0 && (
        <div
          className={`flex flex-col sm:flex-row gap-4 pt-4 items-center sm:items-start ${
            isImageLeft ? "sm:justify-end" : "sm:justify-start"
          }`}
        >
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              className="w-fit bg-dose-accent/20 text-dose-accent font-bold py-3 px-8 rounded-[20px] hover:bg-dose-accent/30 transition-colors flex items-center gap-2 uppercase"
            >
              {button.icon && (
                <img alt="" className="w-[20px] h-[20px]" src={button.icon} />
              )}
              {button.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section className="w-full px-4 sm:px-8 my-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:px-16">
          {isImageLeft ? (
            <>
              {imageContent}
              <div className="flex flex-col justify-center items-center h-full">
                {textContent}
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col justify-center items-center h-full">
                {textContent}
              </div>
              {imageContent}
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
