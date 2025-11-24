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
    <div className="relative w-full lg:px-0 px-3">
      <Image
        src={image}
        alt={imageAlt}
        width={600}
        height={500}
        className="object-cover rounded-lg w-full h-auto"
      />
    </div>
  );

  const textContent = (
    <div
      className={`flex flex-col gap-6 text-center ${
        isImageLeft ? "lg:text-right" : "lg:text-left"
      }`}
    >
      <h2 className="text-dose-dark">{heading}</h2>
      <p className="text-p-responsive text-dose-mid lg:mx-0 mx-5">
        {description}
      </p>
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
              className="w-fit bg-dose-accent/20 text-dose-accent font-bold py-3 px-8 rounded-lg hover:bg-dose-accent/30 transition-colors flex items-center gap-2 uppercase"
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
    <section className="w-full lg:px-0 sm:px-8">
      <Container className="lg:h-[650px] lg:mt-[164px] mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch min-h-[400px] sm:min-h-[500px] lg:min-h-[650px] lg:px-16">
          {isImageLeft ? (
            <>
              <div className="order-2 lg:order-1">{imageContent}</div>
              <div className="order-1 lg:order-2 flex flex-col justify-center items-center h-full px-3 lg:px-0">
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
