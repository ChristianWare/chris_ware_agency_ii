import ContactForm from "@/components/ContactForm/ContactForm";
import BlogSection from "@/components/BlogSection/BlogSection";
import FinalCta from "@/components/FinalCta/FinalCta";
import styles from './ContactPage.module.css'


const ContactPage = () => {
  return (
    <div className={styles.container}>
      <ContactForm />
      <BlogSection />
      <FinalCta />
    </div>
  );
};
export default ContactPage;
