"use client";

/**
 * BottlePageBrakePoint Component
 *
 * Transition/break point section between homepage and bottle showcase
 * Creates visual separation with a full-width divider line and featured bottle image
 */

import Image from "next/image";
import Container from "../Container";

export default function BottlePageBrakePoint() {
  return (
    <section className="w-full lg:py-12 py-4 ls:px-4">
      <Container>
        {/* Divider Line with Bottle Image */}
        <div className="relative flex items-center justify-center my-4">
          {/* Line with Gradient Shadow - Limited to container width */}
          <div className="absolute top-1/2 w-full h-0.5 bg-gray-100"></div>
          <div className="absolute top-[calc(50%+2px)] w-full h-12 bg-gradient-to-b from-gray-300/30 via-gray-300/10 to-transparent pointer-events-none"></div>

          {/* Bottle Image - Centered */}
          <div className="relative z-10 bg-dose-light p-4 rounded-full">
            <Image
              src="/images/brand/microBottle.png"
              alt="Micro Bottle"
              width={100}
              height={140}
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
