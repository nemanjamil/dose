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
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  postalCode: string;
  city: string;
  phone: string;
  textOptIn: boolean;
}

interface DeliveryFormProps {
  onSubmit?: (formData: DeliveryFormData) => void;
  onChange?: (formData: DeliveryFormData) => void;
}

export default function DeliveryForm({ onSubmit, onChange }: DeliveryFormProps) {
  const [formData, setFormData] = useState<DeliveryFormData>({
    email: "",
    emailOptIn: false,
    country: "Serbia",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    postalCode: "",
    city: "",
    phone: "",
    textOptIn: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const updated = {
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    };
    setFormData(updated);
    if (onChange) onChange(updated);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="w-full">
      <h5 className="font-bold text-dose-dark mb-4">
        Dostava
      </h5>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Email Input */}
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full h-[50px] px-2 py-4 border border-dose-accent/20 rounded-sm text-dose-mid text-small placeholder:text-dose-mid/60 focus:outline-none focus:border-dose-accent transition-colors"
          style={{ backgroundColor: "#ffffff" }}
        />

        {/* Email Opt-in Checkbox */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="emailOptIn"
            checked={formData.emailOptIn}
            onChange={handleInputChange}
            className="w-[18px] h-[18px] border border-dose-accent/20 rounded cursor-pointer"
          />
          <span className="text-dose-mid font-medium text-small">
            Pošaljite mi vesti i ponude na email
          </span>
        </label>

        {/* Country Dropdown */}
        <div className="flex flex-col gap-1">
          <label className="text-dose-mid/60 text-extra-small font-medium">
            Zemlja
          </label>
          <select
            name="country"
            autoComplete="country-name"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full h-[50px] px-2 py-4 border border-dose-accent/20 rounded-sm text-dose-mid font-medium text-small focus:outline-none focus:border-dose-accent transition-colors"
            style={{ backgroundColor: "#ffffff" }}
          >
            <option value="Serbia">Srbija</option>
            <option value="Croatia">Hrvatska</option>
            <option value="Bosnia">Bosna i Hercegovina</option>
          </select>
        </div>

        {/* First Name and Last Name - Side by Side */}
        <div className="flex gap-4">
          <input
            type="text"
            name="firstName"
            autoComplete="given-name"
            placeholder="Ime"
            value={formData.firstName}
            onChange={handleInputChange}
            className="flex-1 h-[50px] px-2 py-4 border border-dose-accent/20 rounded-sm text-dose-mid text-small placeholder:text-dose-mid/60 focus:outline-none focus:border-dose-accent transition-colors"
            style={{ backgroundColor: "#ffffff" }}
          />
          <input
            type="text"
            name="lastName"
            autoComplete="family-name"
            placeholder="Prezime"
            value={formData.lastName}
            onChange={handleInputChange}
            className="flex-1 h-[50px] px-2 py-4 border border-dose-accent/20 rounded-sm text-dose-mid text-small placeholder:text-dose-mid/60 focus:outline-none focus:border-dose-accent transition-colors"
            style={{ backgroundColor: "#ffffff" }}
          />
        </div>

        {/* Address Input */}
        <input
          type="text"
          name="address"
          autoComplete="address-line1"
          placeholder="Adresa"
          value={formData.address}
          onChange={handleInputChange}
          className="w-full h-[50px] px-2 py-4 border border-dose-accent/20 rounded-sm text-dose-mid text-small placeholder:text-dose-mid/60 focus:outline-none focus:border-dose-accent transition-colors"
          style={{ backgroundColor: "#ffffff" }}
        />

        {/* Apartment Input */}
        <input
          type="text"
          name="apartment"
          autoComplete="address-line2"
          placeholder="Stan, sprat, itd."
          value={formData.apartment}
          onChange={handleInputChange}
          className="w-full h-[50px] px-2 py-4 border border-dose-accent/20 rounded-sm text-dose-mid text-small placeholder:text-dose-mid/60 focus:outline-none focus:border-dose-accent transition-colors"
          style={{ backgroundColor: "#ffffff" }}
        />

        {/* Postal Code and City - Side by Side */}
        <div className="flex gap-4">
          <input
            type="text"
            name="postalCode"
            autoComplete="postal-code"
            placeholder="Poštanski broj"
            value={formData.postalCode}
            onChange={handleInputChange}
            className="flex-1 h-[50px] px-2 py-4 border border-dose-accent/20 rounded-sm text-dose-mid text-small placeholder:text-dose-mid/60 focus:outline-none focus:border-dose-accent transition-colors"
            style={{ backgroundColor: "#ffffff" }}
          />
          <input
            type="text"
            name="city"
            autoComplete="address-level2"
            placeholder="Grad"
            value={formData.city}
            onChange={handleInputChange}
            className="flex-1 h-[50px] px-2 py-4 border border-dose-accent/20 rounded-sm text-dose-mid text-small placeholder:text-dose-mid/60 focus:outline-none focus:border-dose-accent transition-colors"
            style={{ backgroundColor: "#ffffff" }}
          />
        </div>

        {/* Phone Input */}
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="Telefon"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full h-[50px] px-2 py-4 border border-dose-accent/20 rounded-sm text-dose-mid text-small placeholder:text-dose-mid/60 focus:outline-none focus:border-dose-accent transition-colors"
          style={{ backgroundColor: "#ffffff" }}
        />
      </form>
    </div>
  );
}
