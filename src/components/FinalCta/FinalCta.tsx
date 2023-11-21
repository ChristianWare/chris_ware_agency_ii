import Button from "../Button/Button";
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
              <SectionHeading
                headingText='Your rental property deserves more than
                just a listing. It deserves a spotlight.'
                copyText='Reach out today to learn how you can get more bookings with your own personalized direct booking website for your vacation rental property.'
              />
              <div className={styles.btnContainer}>
                {/* <Button text='Contact us' btnType='tertiary' href='/' /> */}
                <Button text='Contact Us' btnType='primary' href='/' />
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
