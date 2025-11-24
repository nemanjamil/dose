import CenteredText from "@/app/components/sections/CenteredText";
import ContactFormSection from "../../components/sections/ContactFormSection";
import Testemonials from "@/app/components/sections/Testemonials";
import BuyYourDoseToday from "@/app/components/sections/BuyYourDoseToday";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-[16px] sm:px-[32px] py-[64px] sm:py-[96px]">
        <div className="py-10">
          <ContactFormSection />
        </div>
        <CenteredText />

        <Testemonials />
        <div className="lg:mt-0 mt-24"></div>
        <BuyYourDoseToday />
      </div>
    </div>
  );
}
