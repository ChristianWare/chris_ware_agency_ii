import ContactForm from "@/components/ContactForm/ContactForm";
import BlogSection from "@/components/BlogSection/BlogSection";
import FinalCta from "@/components/FinalCta/FinalCta";
import styles from './ContactPage.module.css'
import ContactHero from "@/components/ContactHero/ContactHero";
import Faq from "@/components/Faq/Faq";


const ContactPage = () => {
  return (
    <div className={styles.container}>
      <ContactHero />
      <ContactForm />
      <BlogSection />
    </div>
  );
};
export default ContactPage;
