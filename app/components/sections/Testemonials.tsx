"use client";

/**
 * Testemonials Component
 *
 * Section displaying customer testimonials
 * Features testimonial cards with ratings, text, customer photo, and name
 * Based on Figma design: https://www.figma.com/design/I7GYdab3FirpOg941b6wTL/Dose-Web-Project?node-id=100-514
 */

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
  return (
    <section className="w-full py-16 px-4 sm:px-8">
      <Container className="overflow-hidden">
        {/* Grid with 4 columns - automatically creates rows for 8 elements */}
        <div className="grid grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col gap-4 p-8 bg-white rounded-[16px] shadow-[0px_10px_24px_0px_rgba(135,84,55,0.1)]"
            >
              {/* Testimonial Text */}
              <p className="font-medium text-dose-mid text-[16px] sm:text-[18px] leading-[1.5] opacity-80">
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

                {/* Rating Stars */}
                <div className="flex gap-1 flex-shrink-0">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[18px]">
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
