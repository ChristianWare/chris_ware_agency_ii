import ContactForm from "@/components/ContactForm/ContactForm";
import BlogSection from "@/components/BlogSection/BlogSection";
import FinalCta from "@/components/FinalCta/FinalCta";
import styles from "./ContactPage.module.css";
import ContactHero from "@/components/ContactHero/ContactHero";
import Faq from "@/components/Faq/Faq";
import PageIntro from "@/components/PageIntro/PageIntro";

const ContactPage = () => {
  return (
    <>
      <PageIntro
        labelText='Contact us'
        heading='Here when you need us.'
        highlight='Contact us today'
        copy='Whether you&#39;re a prospective client or have questions about
                our services, reaching out is simple and quick. We&#39;re ready
                to assist you to ensuring a seamless and personalized experience
                as you take the next step in transforming your vacation rental
                business.'
      />
      <Faq />
      <ContactForm />
      <FinalCta />
    </>
  );
};
export default ContactPage;
