/**
 * ContactFormSection Component
 *
 * Contact form section with image on left and form with heading on right
 */

"use client";

import { useState } from "react";
import Image from "next/image";
import ProductHeader from "./ProductHeader";

const sendMessageIcon = "/images/icons/sendMessage.svg";

interface ContactFormSectionProps {
  image?: string;
  imageAlt?: string;
}

export default function ContactFormSection({
  image = "/images/products/item_peach.png",
  imageAlt = "Contact us",
}: ContactFormSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // You can replace this with your actual API endpoint
      console.log("Form data submitted:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitMessage("Poruka je uspešno poslata! Hvala na kontaktu.");
      setFormData({ name: "", email: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000);
    } catch (error) {
      setSubmitMessage("Greška pri slanju poruke. Pokušajte ponovo.");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex flex-col lg:flex-row gap-[64px] items-start">
      {/* Right Side - Form Content (Full width on mobile, 50% on desktop) */}
      <div className="w-full lg:w-1/2 flex flex-col gap-[32px] lg:order-2">
        {/* Header Section */}
        <ProductHeader
          brand="Dose"
          title="Kontaktirajte nas"
          description="Kontaktirajte nas putem kontakt forme i nas tim ce odgovoriti u roku od 24 casa."
        />

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
          <div>
            <label className="block text-dose-dark font-bold text-[14px] mb-[8px]">
              Ime
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Unesite vase ime"
              required
              className="w-full px-[16px] py-[12px] border border-dose-accent/20 rounded-[12px] text-dose-dark placeholder:text-dose-mid/50 focus:outline-none focus:border-dose-accent transition-colors"
              style={{ backgroundColor: "#ffffff" }}
            />
          </div>

          <div>
            <label className="block text-dose-dark font-bold text-[14px] mb-[8px]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Unesite vasu email adresu"
              required
              className="w-full px-[16px] py-[12px] border border-dose-accent/20 rounded-[12px] text-dose-dark placeholder:text-dose-mid/50 focus:outline-none focus:border-dose-accent transition-colors"
              style={{ backgroundColor: "#ffffff" }}
            />
          </div>

          <div>
            <label className="block text-dose-dark font-bold text-[14px] mb-[8px]">
              Poruka
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Unesite vasu poruku"
              rows={5}
              required
              className="w-full px-[16px] py-[12px] border border-dose-accent/20 rounded-[12px] text-dose-dark placeholder:text-dose-mid/50 focus:outline-none focus:border-dose-accent transition-colors resize-none"
              style={{ backgroundColor: "#ffffff" }}
            />
          </div>

          {submitMessage && (
            <div
              className={`px-[16px] py-[12px] rounded-[12px] text-center font-medium ${
                submitMessage.includes("uspešno")
                  ? "bg-dose-light text-dose-dark"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {submitMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="relative bg-dose-accent text-white py-[16px] px-[24px] rounded-[14px] font-bold w-full flex items-center justify-center uppercase btn-interactive disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontSize: "var(--font-size-p-regular)" }}
          >
            <div className="absolute left-[8px] bg-dose-peach rounded-[12px] w-[48px] h-[48px] flex items-center justify-center">
              <div className="relative w-[24px] h-[24px]">
                <Image
                  src={sendMessageIcon}
                  alt="Send"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <span>{isSubmitting ? "Slanje..." : "Posalji poruku"}</span>
          </button>
        </form>
      </div>

      {/* Left Side - Image (Shows below form on mobile, beside on desktop) */}
      <div className="w-full lg:w-1/2 lg:order-1">
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-[20px] overflow-hidden bg-gray-100">
          <Image src={image} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
