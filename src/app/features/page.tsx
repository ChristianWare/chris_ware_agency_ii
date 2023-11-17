import PageIntro from "@/components/PageIntro/PageIntro";
import Img from "../../../public/images/img1.png";
import Faq from "@/components/Faq/Faq";
import ContactForm from "@/components/ContactForm/ContactForm";
import BlogSection from "@/components/BlogSection/BlogSection";
import FinalCta from "@/components/FinalCta/FinalCta";
import Browser from "../../../public/icons/browser.png";
import AdminFeatures from "@/components/AdminFeatures/AdminFeatures";
import UserFeatures from "@/components/UserFeatures/UserFeatures";
import Services from "@/components/Services/Services";

const FeaturesPage = () => {
  return (
    <>
      <PageIntro
        labelText='features of each site'
        heading='Direct Booking Websites'
        highlight='in more detail'
        copy='I’m Chris Ware, the owner and creative force behind The Chris Ware Agency. My journey in the world of web development began during my college years, where I discovered my passion for crafting digital experiences. Over the past decade and a half, I’ve honed my skills and transformed that passion into a thriving career.'
        src={Img}
        labelText2='CONVENIENT & STICKY SERVICES'
        heading2='Diversify revenue with convenient services that keep customers coming back'
        copy2='Diversify your digital services to cross-sell and upsell valuable ‘sticky services’ like top-ups, data bundles and bill payments – to  increase both customer volume and frequency.'
        src2={Browser}
      />
      <Services />
      <AdminFeatures />
      <UserFeatures />
      <Faq />
      <ContactForm />
      <BlogSection />
    </>
  );
};
export default FeaturesPage;
