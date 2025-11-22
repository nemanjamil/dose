"use client";

import { useRouter } from "next/navigation";
import SliderSectionAboutUs from "../../components/sections/SliderSectionAboutUs";
import SectionForRightAndLeftImageAndText from "../../components/sections/SectionForRightAndLeftImageAndText";
import RoundedBanner from "../../components/sections/RoundedBanner";
import HoldingDoseSlider from "@/app/components/sections/HoldingDoseSlider";

export default function AboutUsPage() {
  const router = useRouter();
  return (
    <div className="relative w-full" data-name="About US Desktop">
      <SliderSectionAboutUs />

      <SectionForRightAndLeftImageAndText
        image="/images/products/aboutUSimage_1.png"
        imageAlt="About Us Section"
        heading="Više od proizvoda. Način života"
        description="Verujemo da kvalitetan dizajn ne mora da bude komplikovan. Naši proizvodi spajaju čistu liniju, praktične detalje i dugotrajne materijale – za one koji cene jednostavnost i izdržljivost."
        imagePosition="left"
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

      <SectionForRightAndLeftImageAndText
        image="/images/sections/AboutUsFourImages.png"
        imageAlt="About Us Section"
        heading="Za nas, hidratacija nije samo navika."
        description="DOSE je tu da te prati na svakom koraku – od jutarnjeg treninga do putovanja, od posla do prirode. Jer lepota je u svakodnevnim trenucima koje učinimo svesnim."
        imagePosition="right"
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

      <RoundedBanner />

      <HoldingDoseSlider />

      <GreenBanner />
    </div>
  );
}
