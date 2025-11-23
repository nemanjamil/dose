"use client";

/**
 * DeliveryForm Component
 * Checkout delivery form with customer information
 * Includes email, address, phone, and opt-in preferences
 */

import { useState } from "react";

export interface DeliveryFormData {
  email: string;
  emailOptIn: boolean;
  country: string;
  fullName: string;
  address: string;
  apartment: string;
  postalCode: string;
  city: string;
  phone: string;
  textOptIn: boolean;
}

interface DeliveryFormProps {
  onSubmit?: (formData: DeliveryFormData) => void;
}

export default function DeliveryForm({ onSubmit }: DeliveryFormProps) {
  const [formData, setFormData] = useState<DeliveryFormData>({
    email: "",
    emailOptIn: false,
    country: "Serbia",
    fullName: "",
    address: "",
    apartment: "",
    postalCode: "",
    city: "",
    phone: "",
    textOptIn: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="w-full bg-white rounded-[20px] p-[32px]">
      <h2 className="font-bold text-dose-dark text-[20px] tracking-[-0.4px] mb-[16px]">
        Delivery
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">
        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full h-[50px] px-[10px] py-[16px] border border-dose-accent/20 rounded-[8px] text-dose-mid placeholder:text-dose-mid/60 focus:outline-none focus:border-dose-accent transition-colors"
          style={{ backgroundColor: "#ffffff" }}
        />

        {/* Email Opt-in Checkbox */}
        <label className="flex items-center gap-[10px] cursor-pointer">
          <input
            type="checkbox"
            name="emailOptIn"
            checked={formData.emailOptIn}
            onChange={handleInputChange}
            className="w-[18px] h-[18px] border border-dose-accent/20 rounded cursor-pointer"
          />
          <span className="text-dose-mid font-medium text-[14px] tracking-[-0.28px]">
            Email me with news and offers
          </span>
        </label>

        {/* Country Dropdown */}
        <div className="flex flex-col gap-[2px]">
          <label className="text-dose-mid/60 text-[12px] tracking-[-0.24px] font-medium">
            Country
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full h-[50px] px-[10px] py-[16px] border border-dose-accent/20 rounded-[8px] text-dose-mid font-medium text-[14px] tracking-[-0.28px] focus:outline-none focus:border-dose-accent transition-colors"
            style={{ backgroundColor: "#ffffff" }}
          >
            <option value="Serbia">Serbia</option>
            <option value="Croatia">Croatia</option>
            <option value="Bosnia">Bosnia</option>
          </select>
        </div>

        {/* Full Name Input */}
        <div className="flex flex-col gap-[2px]">
          <label className="text-dose-mid/60 text-[12px] tracking-[-0.24px] font-medium">
            Full name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Nemanja Stojanovic"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full h-[50px] px-[10px] py-[16px] border border-dose-accent/20 rounded-[8px] text-dose-mid placeholder:text-dose-mid/60 focus:outline-none focus:border-dose-accent transition-colors"
            style={{ backgroundColor: "#ffffff" }}
          />
        </div>

        {/* Address Input */}
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
          className="w-full h-[50px] px-[10px] py-[16px] border border-dose-accent/20 rounded-[8px] text-dose-mid placeholder:text-dose-mid/60 focus:outline-none focus:border-dose-accent transition-colors"
          style={{ backgroundColor: "#ffffff" }}
        />

        {/* Apartment Input */}
        <input
          type="text"
          name="apartment"
          placeholder="Apartment, suite, etc"
          value={formData.apartment}
          onChange={handleInputChange}
          className="w-full h-[50px] px-[10px] py-[16px] border border-dose-accent/20 rounded-[8px] text-dose-mid placeholder:text-dose-mid/60 focus:outline-none focus:border-dose-accent transition-colors"
          style={{ backgroundColor: "#ffffff" }}
        />

        {/* Postal Code and City - Side by Side */}
        <div className="flex gap-[16px]">
          <input
            type="text"
            name="postalCode"
            placeholder="Postal code"
            value={formData.postalCode}
            onChange={handleInputChange}
            className="flex-1 h-[50px] px-[10px] py-[16px] border border-dose-accent/20 rounded-[8px] text-dose-mid placeholder:text-dose-mid/60 focus:outline-none focus:border-dose-accent transition-colors"
            style={{ backgroundColor: "#ffffff" }}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
            className="flex-1 h-[50px] px-[10px] py-[16px] border border-dose-accent/20 rounded-[8px] text-dose-mid placeholder:text-dose-mid/60 focus:outline-none focus:border-dose-accent transition-colors"
            style={{ backgroundColor: "#ffffff" }}
          />
        </div>

        {/* Phone Input */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full h-[50px] px-[10px] py-[16px] border border-dose-accent/20 rounded-[8px] text-dose-mid placeholder:text-dose-mid/60 focus:outline-none focus:border-dose-accent transition-colors"
          style={{ backgroundColor: "#ffffff" }}
        />

        {/* Text Opt-in Checkbox */}
        <label className="flex items-center gap-[10px] cursor-pointer">
          <input
            type="checkbox"
            name="textOptIn"
            checked={formData.textOptIn}
            onChange={handleInputChange}
            className="w-[18px] h-[18px] border border-dose-accent/20 rounded cursor-pointer"
          />
          <span className="text-dose-mid font-medium text-[14px] tracking-[-0.28px]">
            Text me with news and offers
          </span>
        </label>
      </form>
    </div>
  );
}
