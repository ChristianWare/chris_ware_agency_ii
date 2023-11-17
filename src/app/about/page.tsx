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
        heading='About the'
        highlight='Chris Ware Agency'
        copy='I’m Chris Ware, the owner and creative force behind The Chris Ware Agency. My journey in the world of web development began during my college years, where I discovered my passion for crafting digital experiences. Over the past decade and a half, I’ve honed my skills and transformed that passion into a thriving career.'
        src={Img}
        labelText2='CONVENIENT & STICKY SERVICES'
        heading2='Diversify revenue with convenient services that keep customers coming back'
        copy2='Diversify your digital services to cross-sell and upsell valuable ‘sticky services’ like top-ups, data bundles and bill payments – to  increase both customer volume and frequency.'
        src2={House}
      />
      <CompHist />
      <Owner />
      <Values />
      <TechStack />
      <Faq />
      <ContactForm />
      <BlogSection />
    </>
  );
};
export default AboutPage;
