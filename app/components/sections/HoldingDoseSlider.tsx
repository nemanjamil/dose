"use client";

/**
 * HoldingDoseSlider Component
 *
 * Slider section showcasing user testimonials with holding dose product images
 * Features star ratings, testimonial text, and user photos
 *
 * Figma design: https://www.figma.com/design/I7GYdab3FirpOg941b6wTL/Dose-Web-Project?node-id=95-7&m=dev
 */

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowButtonPair } from "../buttons";
import Container from "../Container";

interface TestimonialCard {
  id: number;
  image: string;
  stars: number;
  headline: string;
  summary: string;
}

const SHADOW_VALUE = "0px_10px_24px_0px_rgba(135,84,55,0.15)";

const testimonials: TestimonialCard[] = [
  {
    id: 1,
    image: "/images/testimonials/test.png",
    stars: 5,
    headline: "Perfect for my lifestyle",
    summary: "Keep my drinks hot and cold all day. The quality is exceptional!",
  },
  {
    id: 2,
    image: "/images/testimonials/test.png",
    stars: 5,
    headline: "Best thermos ever",
    summary:
      "Keep my drinks hot and cold all day. Perfect for my busy lifestyle.",
  },
  {
    id: 3,
    image: "/images/testimonials/test.png",
    stars: 5,
    headline: "Love the design",
    summary: "Stylish and functional. Everyone asks me where I got it!",
  },
  {
    id: 4,
    image: "/images/testimonials/test.png",
    stars: 5,
    headline: "Amazing quality",
    summary: "Worth every penny. I use it every single day.",
  },
  {
    id: 5,
    image: "/images/testimonials/test.png",
    stars: 5,
    headline: "Excellent insulation",
    summary: "Keeps my coffee hot for hours. Highly recommended!",
  },
  {
    id: 6,
    image: "/images/testimonials/test.png",
    stars: 5,
    headline: "Great for travel",
    summary: "Perfect companion for road trips and outdoor activities.",
  },
  {
    id: 7,
    image: "/images/testimonials/test.png",
    stars: 5,
    headline: "Premium feel",
    summary: "Feels like a luxury product. Excellent investment.",
  },
  {
    id: 8,
    image: "/images/testimonials/test.png",
    stars: 5,
    headline: "Highly durable",
    summary: "Survived multiple drops. Built to last!",
  },
  {
    id: 9,
    image: "/images/testimonials/test.png",
    stars: 5,
    headline: "Temperature control",
    summary: "Maintains temperature perfectly throughout the day.",
  },
  {
    id: 10,
    image: "/images/testimonials/test.png",
    stars: 5,
    headline: "Beautiful colors",
    summary: "The pink color is gorgeous. Got so many compliments!",
  },
  {
    id: 11,
    image: "/images/testimonials/test.png",
    stars: 5,
    headline: "Easy to clean",
    summary: "Cleaning is effortless. No coffee stains at all.",
  },
  {
    id: 12,
    image: "/images/testimonials/test.png",
    stars: 5,
    headline: "Worth the investment",
    summary: "Best purchase I made this year. Absolutely love it!",
  },
];

export default function HoldingDoseSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  const totalSlides = testimonials.length;

  // Detect screen size and set cardsPerView
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet
      } else {
        setCardsPerView(4); // Desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevious = () => {
    setCurrentSlide((prev) =>
      prev === 0
        ? Math.max(0, totalSlides - cardsPerView)
        : Math.max(0, prev - 1)
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev + cardsPerView >= totalSlides ? 0 : prev + 1
    );
  };

  const visibleCards = testimonials.slice(
    currentSlide,
    currentSlide + cardsPerView
  );

  return (
    <section className="w-full">
      <div className={`max-w-[1440px] mx-auto`}>
        <div className="flex justify-end mb-3 lg:mb-6">
          <ArrowButtonPair
            currentSlide={currentSlide}
            totalSlides={totalSlides}
            onPrevious={handlePrevious}
            onNext={handleNext}
            layout="horizontal"
          />
        </div>
      </div>

      <Container className="lg:px-4 sm:px-8 lg:h-[650px] lg:pb-[164px] flex flex-col">
        {/* Carousel Container */}
        <div className="flex flex-col items-center gap-12 lg:gap-6 flex-1">
          {/* Testimonial Cards Grid */}
          <div
            className={`w-full grid gap-6 justify-center flex-1 ${
              cardsPerView === 1
                ? "grid-cols-1"
                : cardsPerView === 2
                ? "sm:grid-cols-2"
                : "lg:grid-cols-4"
            }`}
          >
            {visibleCards.map((testimonial, index) => (
              <div key={testimonial.id} className="flex flex-col gap-3 h-full">
                {/* Image Container */}
                <div
                  className={`relative w-full flex-1 rounded-[20px] overflow-hidden shadow-[${SHADOW_VALUE}] group`}
                >
                  <Image
                    src={testimonial.image}
                    alt="User holding DOSE thermos"
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Play Button */}
                  <button
                    className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300 cursor-pointer"
                    aria-label="Play video"
                  >
                    <div className="w-[56px] h-[56px] rounded-full bg-dose-peach hover:bg-[#FFD9C3] flex items-center justify-center transition-all duration-300 shadow-lg">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 2L5 18L16 10L5 2Z" fill="white" />
                      </svg>
                    </div>
                  </button>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <span key={i} className="text-[18px]">
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Headline */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-dose-dark text-[16px] leading-[1.5]">
                    {testimonial.headline}
                  </h3>

                  {/* Summary */}
                  <p className="font-medium text-dose-mid text-[14px] leading-[1.5]">
                    {testimonial.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
