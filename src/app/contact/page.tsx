import PageIntro from "@/components/PageIntro/PageIntro";
import Img from "../../../public/images/img1.png";
import Faq from "@/components/Faq/Faq";
import ContactForm from "@/components/ContactForm/ContactForm";
import BlogSection from "@/components/BlogSection/BlogSection";
import FinalCta from "@/components/FinalCta/FinalCta";

const ContactPage = () => {
  return (
    <>
      <PageIntro
        heading='how you can'
        highlight='Contact us'
        copy='I’m Chris Ware, the owner and creative force behind The Chris Ware Agency. My journey in the world of web development began during my college years, where I discovered my passion for crafting digital experiences. Over the past decade and a half, I’ve honed my skills and transformed that passion into a thriving career.'
        src={Img}
      />

      <Faq />
      <ContactForm />
      <BlogSection />
      <FinalCta />
    </>
  );
};
export default ContactPage;
