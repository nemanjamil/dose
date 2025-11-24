"use client";

/**
 * Testemonials Component
 *
 * Section displaying customer testimonials
 * Mobile: Single card with swipe navigation
 * Desktop: 4-column grid with all testimonials
 * Features testimonial cards with ratings, text, customer photo, and name
 * Based on Figma design: https://www.figma.com/design/I7GYdab3FirpOg941b6wTL/Dose-Web-Project?node-id=100-514
 */

import { useState, useRef } from "react";
import Container from "../Container";
import Image from "next/image";

interface TestimonialCard {
  id: number;
  name: string;
  surname: string;
  text: string;
  rating: number;
  image: string;
}

const testimonials: TestimonialCard[] = [
  {
    id: 1,
    name: "Ana",
    surname: "Marković",
    text: "Savršeno drži temperaturu i izgleda fenomenalno, koristim ga svakog dana u kancelariji.",
    rating: 5,
    image: "/images/testimonials/test.png",
  },
  {
    id: 2,
    name: "Marko",
    surname: "Nikolić",
    text: "Odličan kvalitet i dizajn. DOSE termos je postala moja omljena stvar za putovanja.",
    rating: 5,
    image: "/images/testimonials/test.png",
  },
  {
    id: 3,
    name: "Jelena",
    surname: "Jovanović",
    text: "Preporučujem svima. Izdržljiv, lep i funkcionalan. Vredi svaki dinar!",
    rating: 5,
    image: "/images/testimonials/test.png",
  },
  {
    id: 4,
    name: "Petar",
    surname: "Petrović",
    text: "Elegantno i funkciono. Baš ono što sam tražio. Toplo preporučujem!",
    rating: 5,
    image: "/images/testimonials/test.png",
  },
  {
    id: 5,
    name: "Ivana",
    surname: "Ristić",
    text: "Sjajni dizajn i odličan kvalitet. DOSE je postao deo moje svakodnevne rutine.",
    rating: 5,
    image: "/images/testimonials/test.png",
  },
  {
    id: 6,
    name: "Stefan",
    surname: "Stanković",
    text: "Apsolutno preporučujem svima. Najbolji termos koji sam ikada posedovao!",
    rating: 5,
    image: "/images/testimonials/test.png",
  },
  {
    id: 7,
    name: "Milica",
    surname: "Milinović",
    text: "Savršen za kancelariju i putovanja. Izdržljiv i lep. Sreća od njega!",
    rating: 5,
    image: "/images/testimonials/test.png",
  },
  {
    id: 8,
    name: "Nikola",
    surname: "Nikolić",
    text: "Kvalitet koji se oseti od prvog korišćenja. Topla preporuka za sve!",
    rating: 5,
    image: "/images/testimonials/test.png",
  },
];

export default function Testemonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    } else if (isRightSwipe) {
      setCurrentSlide(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
    }
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section className="w-full lg:py-0 py-4 lg:px-0 px-4 ">
      <Container className="lg:h-[650px] lg:mt-[80px]">
        {/* Mobile View - Single Card with Swipe */}
        <div
          className="lg:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex flex-col gap-4 p-8 bg-white rounded-[16px] shadow-[0px_10px_24px_0px_rgba(135,84,55,0.1)] lg:min-h-[400px]">
            {/* Testimonial Text */}
            <p className="font-medium text-dose-mid text-p-small leading-[1.5] opacity-80">
              {currentTestimonial.text}
            </p>

            {/* Customer Info and Rating */}
            <div className="flex lg:gap-4 items-center lg:mt-auto">
              {/* Avatar */}
              <div className="w-11 h-11 rounded-[12px] overflow-hidden bg-white/10 flex-shrink-0 mr-5">
                <Image
                  src={currentTestimonial.image}
                  alt={`${currentTestimonial.name} ${currentTestimonial.surname}`}
                  width={44}
                  height={44}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Name */}
              <h4 className="font-bold text-dose-dark text-[12px] leading-[1.5] flex-1">
                {currentTestimonial.name} {currentTestimonial.surname}
              </h4>

              {/* Rating Stars */}
              <div className="flex gap-1 flex-shrink-0">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[14px]">
                    ⭐
                  </span>
                ))}
              </div>
            </div>

            {/* Slide Indicator */}
            <div className="flex gap-2 justify-center mt-4">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? "w-8 bg-dose-accent"
                      : "w-2 bg-dose-light"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View - Grid with 3 columns, 2 rows */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.slice(0, 6).map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col gap-4 p-8 bg-white rounded-[16px] shadow-[0px_10px_24px_0px_rgba(135,84,55,0.1)]"
            >
              {/* Testimonial Text */}
              <p className="font-medium text-dose-mid text-p-small leading-[1.5] opacity-80">
                {testimonial.text}
              </p>

              {/* Customer Info and Rating */}
              <div className="flex gap-4 items-center">
                {/* Avatar */}
                <div className="w-11 h-11 rounded-[12px] overflow-hidden bg-white/10 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} ${testimonial.surname}`}
                    width={44}
                    height={44}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Name */}
                <h4 className="font-bold text-dose-dark text-[16px] leading-[1.5] flex-1">
                  {testimonial.name} {testimonial.surname}
                </h4>
              </div>
              {/* Rating Stars */}
              <div className="flex gap-1 flex-shrink-0">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[18px]">
                    ⭐
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
