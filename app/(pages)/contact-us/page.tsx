import CenteredText from "@/app/components/sections/CenteredText";
import ContactFormSection from "../../components/sections/ContactFormSection";
import Testemonials from "@/app/components/sections/Testemonials";
import BuyYourDoseToday from "@/app/components/sections/BuyYourDoseToday";
import PhoneAndEmail from "@/app/components/sections/PhoneAndEmail";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] space-y-22 mx-auto px-0 sm:px-8 py-16 sm:py-24">
        <PhoneAndEmail />
        <ContactFormSection />
        <CenteredText />
        <Testemonials />
        <BuyYourDoseToday />
      </div>
    </div>
  );
}
