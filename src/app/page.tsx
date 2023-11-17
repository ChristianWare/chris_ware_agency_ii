import AboutSection from "@/components/AboutSection/AboutSection";
import BlogSection from "@/components/BlogSection/BlogSection";
import ContactForm from "@/components/ContactForm/ContactForm";
import Faq from "@/components/Faq/Faq";
import FinalCta from "@/components/FinalCta/FinalCta";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Benefits from "@/components/PageSections/Benefits/Benefits";
import Portfolio from "@/components/Portfolio/Portfolio";
import Pricing from "@/components/Pricing/Pricing";
import Services from "@/components/Services/Services";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Services />
      <Benefits />
      <HowItWorks />
      <Pricing />
      {/* <Portfolio /> */}
      <Faq />
      <BlogSection />
      <ContactForm />
      {/* <FinalCta /> */}
    </div>
  );
};
export default HomePage;
