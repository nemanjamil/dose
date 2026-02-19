"use client";

/**
 * PhoneAndEmail Component
 *
 * Contact information section with phone and email details
 * Background color: dose-peach (#FFE3D3)
 * Figma design: https://www.figma.com/design/I7GYdab3FirpOg941b6wTL/Dose-Web-Project?node-id=287-12413&m=dev
 */

import Image from "next/image";
import Container from "../Container";

const imgEmail = "/images/icons/email.svg";
const imgPhone = "/images/icons/phone.svg";

export default function PhoneAndEmail() {
  return (
    <section className="w-full mt-10">
      <div className="bg-dose-peach min-h-[40px] sm:h-[40px] py-2 sm:py-0 px-4 sm:px-0 flex items-center justify-center">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-[35px] items-center">
          {/* Email */}
          <div className="flex gap-2 sm:gap-3 items-center">
            <div className="relative shrink-0 size-[16px] sm:size-[20px]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgEmail}
              />
            </div>
            <p className="font-medium text-dose-mid text-[10px] sm:text-[12px] text-center tracking-[-0.24px] uppercase whitespace-nowrap">
              Email support: orders@dose.rs
            </p>
          </div>

          {/* Phone */}
          <div className="flex gap-2 sm:gap-3 items-center">
            <div className="relative shrink-0 size-[16px] sm:size-[20px]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgPhone}
              />
            </div>
            <p className="font-medium text-dose-mid text-[10px] sm:text-[12px] text-center tracking-[-0.24px] uppercase whitespace-nowrap">
              Phone number: +381 66 500 500
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
