import Button from "../Button/Button";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./FinalCta.module.css";

const FinalCta = () => {
  return (
    <section className={styles.container}>
      <div className={styles.layoutWrapper}>
        <div className={styles.content}>
          <div className={styles.bottom}>
            <SectionHeading
              headingText='Ready to experience your own direct booking website?'
              copyText='Reach out today to learn how you can get more bookings with your own personalized direct booking website for your vacation rental property.'
            />
            <div className={styles.btnContainer}>
              <Button text='Contact us' btnType='primary' href='/' />
              <Button text='Request demo' btnType='secondary' href='/' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FinalCta;
