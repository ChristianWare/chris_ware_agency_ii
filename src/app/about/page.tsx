import CompHist from "@/components/CompHist/CompHist";
import Img from "../../../public/images/img2.png";
import PageIntro from "@/components/PageIntro/PageIntro";
import BlogSection from "@/components/BlogSection/BlogSection";
import ContactForm from "@/components/ContactForm/ContactForm";
import Faq from "@/components/Faq/Faq";
import Owner from "@/components/Owner/Owner";
import Values from "@/components/Values/Values";
import TechStack from "@/components/TechStack/TechStack";
import House from "../../../public/icons/house.png";

const AboutPage = () => {
  return (
    <>
      <PageIntro
        labelText='get to know us'
        heading='The Story Behind the'
        highlight='Chris Ware Agency'
        copy="We're on a mission to redefine the vacation rental experience by empowering property owners to seize control of their bookings. Discover the narrative behind our commitment to personalized, direct booking websites and join us in transforming the way you connect with your guests."
        
      />
      <CompHist />
      <Owner />
      <Values />
      <TechStack />
      <Faq />
      <ContactForm />
      {/* <BlogSection /> */}
    </>
  );
};
export default AboutPage;
