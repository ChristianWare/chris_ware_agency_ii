import AboutSection from "@/components/AboutSection/AboutSection";
import Hero from "@/components/Hero/Hero";
import Benefits from "@/components/PageSections/Benefits/Benefits";
import Services from "@/components/Services/Services";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Benefits />
      <Services />
    </div>
  );
};
export default HomePage;
