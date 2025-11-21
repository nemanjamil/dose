"use client";

/**
 * DoseList Component
 *
 * Section displaying a list of DOSE products with features and benefits
 */

export default function DoseList() {
  const doseProducts = [
    {
      id: 1,
      name: "Mini Dose",
      volume: "0.6L",
      description: "Perfect for daily commutes and on-the-go hydration",
      features: ["Lightweight", "Portable", "24h cold"],
    },
    {
      id: 2,
      name: "Standard Dose",
      volume: "1.0L",
      description: "Ideal for work, gym, and outdoor activities",
      features: ["Versatile", "Durable", "12h hot"],
    },
    {
      id: 3,
      name: "XL Dose",
      volume: "1.5L",
      description: "Great for sports, hiking, and family use",
      features: ["Large capacity", "Rugged", "24h cold"],
    },
  ];

  return (
    <section className="w-full py-[var(--spacing-64)] px-[16px] sm:px-[var(--spacing-32)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[var(--spacing-64)]">
          {/* Heading */}
          <div className="flex justify-center">
            <div className="w-[675px] flex flex-col items-center gap-[16px]">
              <h2 className="text-dose-dark font-bold text-[40px] sm:text-[56px] leading-[1.2] tracking-[-1.12px] text-center">
                Our Dose Collection
              </h2>
              <p className="text-dose-mid font-medium text-[16px] sm:text-[18px] leading-[1.5] tracking-[-0.36px] text-center">
                Choose the perfect size for your lifestyle
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px]">
            {doseProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col gap-[24px] p-[var(--spacing-32)] rounded-[16px] bg-dose-light"
              >
                {/* Product Header */}
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-dose-dark font-bold text-[24px] tracking-[-0.48px]">
                    {product.name}
                  </h3>
                  <p className="text-dose-mid font-medium text-[18px] tracking-[-0.36px]">
                    {product.volume}
                  </p>
                </div>

                {/* Description */}
                <p className="text-dose-mid font-medium text-[16px] tracking-[-0.32px] leading-[1.5]">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-col gap-[12px]">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-[12px]">
                      <div className="w-[8px] h-[8px] rounded-full bg-dose-accent flex-shrink-0"></div>
                      <span className="text-dose-dark font-medium text-[14px]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
