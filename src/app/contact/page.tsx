import BlogSection from "@/components/BlogSection/BlogSection";
import FinalCta from "@/components/FinalCta/FinalCta";
import Faq from "@/components/Faq/Faq";
import PageIntro from "@/components/PageIntro/PageIntro";
import Img from '../../../public/images/img4.png'

const ContactPage = () => {
  return (
    <>
      <PageIntro
        labelText='Contact us'
        heading='Get your Direct Booking Website Today'
        copy='Whether you&#39;re a prospective client or have questions about
                our services, reaching out is simple and quick. We&#39;re ready
                to assist you to ensuring a seamless and personalized experience
                as you take the next step in transforming your vacation rental
                business.'
        src={Img}
      />
      <Faq />
      <FinalCta />
    </>
  );
};
export default ContactPage;
