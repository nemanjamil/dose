"use client";

import { useRouter } from "next/navigation";
import SliderSectionAboutUs from "../../components/sections/SliderSectionAboutUs";
import ImageBackgroundSection from "../../components/sections/ImageBackgroundSection";
import RoundedBanner from "../../components/sections/RoundedBanner";
import HoldingDoseSlider from "@/app/components/sections/HoldingDoseSlider";
import GreenBanner from "../../components/sections/GreenBanner";
import BuyYourDoseToday from "@/app/components/sections/BuyYourDoseToday";

export default function AboutUsPage() {
  const router = useRouter();
  return (
    <div
      className="relative w-full lg:space-y-32 space-y-16 lg:mb-24 mb-5"
      data-name="About US Desktop"
    >
      <SliderSectionAboutUs />

      <ImageBackgroundSection
        backgroundImage="/images/sections/AboutUsFourImages.png"
        backgroundImageMob="/images/products/greenCup750.png"
        heading="Za nas, hidratacija nije samo navika."
        description="DOSE je tu da te prati na svakom koraku – od jutarnjeg treninga do putovanja, od posla do prirode. Jer lepota je u svakodnevnim trenucima koje učinimo svesnim."
        textPosition="right"
        addMoreCss=""
        actionButtonsMobileViewPresented={true}
        buttons={[
          {
            label: "Otkrij kolekciju",
            onClick: () => router.push("/shop"),
            icon: "/images/icons/bpa-free.svg",
          },
          {
            label: "Kontaktiraj nas",
            onClick: () => router.push("/contact-us"),
            icon: "/images/icons/miniBoxes.svg",
          },
        ]}
      />

      <ImageBackgroundSection
        backgroundImage="/images/products/aboutUSimage.png"
        backgroundImageMob="/images/products/fourImagesMob.png"
        heading="Više od proizvoda. Način života"
        description="Verujemo da kvalitetan dizajn ne mora da bude komplikovan. Naši proizvodi spajaju čistu liniju, praktične detalje i dugotrajne materijale – za one koji cene jednostavnost i izdržljivost."
        textPosition="left"
        actionButtonsMobileViewPresented={false}
        buttons={[
          {
            label: "stainless steel",
            onClick: () => router.push("/shop"),
            icon: "/images/icons/bpa-free.svg",
          },
          {
            label: "bpa free",
            onClick: () => router.push("/contact-us"),
            icon: "/images/icons/miniBoxes.svg",
          },
        ]}
      />

      <RoundedBanner />

      <HoldingDoseSlider />

      <GreenBanner />

      <BuyYourDoseToday />
    </div>
  );
}
