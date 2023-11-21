import PageIntro from "@/components/PageIntro/PageIntro";
import Img from "../../../public/images/img6.png";
import Faq from "@/components/Faq/Faq";
import ContactForm from "@/components/ContactForm/ContactForm";
import BlogSection from "@/components/BlogSection/BlogSection";
import Browser from "../../../public/icons/browser.png";
import AdminFeatures from "@/components/AdminFeatures/AdminFeatures";
import UserFeatures from "@/components/UserFeatures/UserFeatures";
import Services from "@/components/Services/Services";
import FinalCta from "@/components/FinalCta/FinalCta";

const FeaturesPage = () => {
  return (
    <>
      <PageIntro
        labelText='features of each site'
        heading='Direct Booking Websites'
        highlight='in more detail'
        copy="Discover the transformative features of CWA's direct booking websites. For administrators, our streamlined dashboard offers effortless management and valuable insights. Users enjoy a seamless booking experience with secure payments and real-time availability updates, ensuring your vacation rental stands out in the market."
      />
      <Services />
      <AdminFeatures />
      <UserFeatures />
      <Faq />
      <ContactForm />
      {/* <BlogSection /> */}
      <FinalCta />
    </>
  );
};
export default FeaturesPage;
