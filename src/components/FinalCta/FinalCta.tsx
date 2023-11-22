import Button from "../Button/Button";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./FinalCta.module.css";

const FinalCta = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.layoutWrapper}>
          <div className={styles.content}>
            <div className={styles.bottom}>
              <div className={styles.left}>
                <h2 className={styles.heading}>
                  Your rental property deserves more than just a listing. It
                  deserves a spotlight.
                </h2>
                <p className={styles.topText}>
                  Here are some commonly asked questions and their answers
                  below. If you don&#39;t see your questions here, call us any
                  time.
                </p>
              </div>
              <div className={styles.right}>
                <ContactForm />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};
export default FinalCta;
