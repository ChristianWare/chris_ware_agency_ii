import Button from "../Button/Button";
import CircleImage from "../Image/CircleImage/CircleImage";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./FinalCta.module.css";

const FinalCta = () => {
  return (
    <section className={styles.container}>
      <div className={styles.layoutWrapper}>
        <div className={styles.content}>
            <div className={styles.bottom}>
              <SectionHeading
                headingText='Final CTA Here'
                copyText='Like what you see?  Reach out today to learn how you can get more bookings with your own personalized direct booking website for your vacation rental website.'
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
