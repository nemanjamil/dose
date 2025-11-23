"use client";

/**
 * PaymentForm Component
 * Checkout payment form with credit card information
 * Includes card number, expiration date, security code, and billing address checkbox
 */

import { useState } from "react";
import Image from "next/image";

const cardLockIcon = "/images/icons/cardLock.svg";
const infoIcon = "/images/icons/info.svg";
const checkmarkIcon = "/images/icons/checkmark.svg";

export interface PaymentFormData {
  cardNumber: string;
  expirationDate: string;
  securityCode: string;
  nameOnCard: string;
  useBillingAddress: boolean;
}

interface PaymentFormProps {
  onSubmit?: (formData: PaymentFormData) => void;
}

export default function PaymentForm({ onSubmit }: PaymentFormProps) {
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
    nameOnCard: "",
    useBillingAddress: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col gap-[6px] mb-[16px]">
        <h2 className="font-bold text-dose-dark text-[20px] tracking-[-0.4px]">
          Payment
        </h2>
        <p className="font-medium text-dose-mid text-[12px] tracking-[-0.24px]">
          All transactions are secure and encrypted.
        </p>
      </div>

      {/* Payment Method Selection */}
      <div className="flex gap-[10px] items-center mb-[16px]">
        <div className="flex gap-[12px] items-center">
          <div className="w-[20px] h-[20px] flex-shrink-0 relative">
            <Image
              src="/images/icons/paymentCart.svg"
              alt="Payment card"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-medium text-dose-accent text-[14px] tracking-[-0.28px]">
            Credit or debit card
          </span>
        </div>
        {/* Payment card logos */}
        <div className="ml-auto flex gap-[8px] items-center">
          <span className="text-[10px] font-bold text-blue-600">VISA</span>
          <span className="text-[10px] font-bold text-blue-700">AMEX</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">
        {/* Card Number Input */}
        <div className="flex items-center border border-dose-accent/20 rounded-[8px] h-[50px] px-[10px] py-[16px] bg-white">
          <input
            type="text"
            name="cardNumber"
            placeholder="Card number"
            value={formData.cardNumber}
            onChange={handleInputChange}
            className="flex-1 bg-transparent text-dose-mid placeholder:text-dose-mid/60 focus:outline-none text-[14px]"
          />
          <div className="w-[20px] h-[20px] flex-shrink-0">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="4"
                width="14"
                height="12"
                rx="2"
                stroke="#9C5243"
                strokeWidth="1.5"
              />
              <path
                d="M7 10V12C7 12.55 7.45 13 8 13C8.55 13 9 12.55 9 12V10"
                stroke="#9C5243"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>

        {/* Expiration Date and Security Code - Side by Side */}
        <div className="flex gap-[12px]">
          <input
            type="text"
            name="expirationDate"
            placeholder="Expiration date (MM/YY)"
            value={formData.expirationDate}
            onChange={handleInputChange}
            className="flex-1 h-[50px] px-[10px] py-[16px] border border-dose-accent/20 rounded-[8px] text-dose-mid placeholder:text-dose-mid/60 focus:outline-none focus:border-dose-accent transition-colors text-[14px]"
            style={{ backgroundColor: "#ffffff" }}
          />
          <div className="flex-1 flex items-center border border-dose-accent/20 rounded-[8px] h-[50px] px-[10px] py-[16px] bg-white">
            <input
              type="text"
              name="securityCode"
              placeholder="Security code"
              value={formData.securityCode}
              onChange={handleInputChange}
              className="flex-1 bg-transparent text-dose-mid placeholder:text-dose-mid/60 focus:outline-none text-[14px]"
            />
            <div className="w-[20px] h-[20px] flex-shrink-0 flex items-center justify-center">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="8.5"
                  stroke="#9C5243"
                  strokeWidth="1.5"
                />
                <text
                  x="10"
                  y="12"
                  textAnchor="middle"
                  fill="#9C5243"
                  fontSize="10"
                  fontWeight="bold"
                >
                  ?
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Name on Card Input */}
        <input
          type="text"
          name="nameOnCard"
          placeholder="Name on card"
          value={formData.nameOnCard}
          onChange={handleInputChange}
          className="w-full h-[50px] px-[10px] py-[16px] border border-dose-accent/20 rounded-[8px] text-dose-mid placeholder:text-dose-mid/60 focus:outline-none focus:border-dose-accent transition-colors text-[14px]"
          style={{ backgroundColor: "#ffffff" }}
        />

        {/* Use Shipping Address as Billing Address Checkbox */}
        <label className="flex items-center gap-[10px] cursor-pointer">
          <div className="relative w-[18px] h-[18px] flex-shrink-0">
            <input
              type="checkbox"
              name="useBillingAddress"
              checked={formData.useBillingAddress}
              onChange={handleInputChange}
              className="absolute opacity-0 w-full h-full cursor-pointer"
            />
            <div
              className={`absolute inset-0 border border-dose-accent/20 rounded cursor-pointer flex items-center justify-center ${
                formData.useBillingAddress ? "bg-dose-accent" : "bg-white"
              }`}
            >
              {formData.useBillingAddress && (
                <svg
                  className="w-[10px] h-[10px] text-white"
                  viewBox="0 0 10 10"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5 2L3.75 7.5L1.5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
          <span className="font-medium text-dose-mid text-[14px] tracking-[-0.28px]">
            Use shipping address as billing address
          </span>
        </label>
      </form>
    </div>
  );
}
