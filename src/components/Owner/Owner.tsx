import CircleImage from "../Image/CircleImage/CircleImage";
import ImageGrid from "../Image/ImageGrid/ImageGrid";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./Owner.module.css";

const Owner = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.left}>
            {/* <ImageGrid /> */}
            <CircleImage />
          </div>
          <div className={styles.right}>
            <h2 className={styles.heading}>
              About <span className={styles.highlight}>Chris Ware</span>
            </h2>
            <div className={styles.container}>
              <h3 className={styles.title}>Founder, CEO</h3>
              <p className={styles.copy}>
                Our journey began with a simple mission - to make document
                legalization accessibl e and effortless for all. A group of
                legal enthusiasts saw the difficulties people faced with the
                notary process and decided to do something about it. They
                envisioned a service that would bring the notary to the client,
                irrespective of location, ensuring comfort and convenience.
              </p>
              <br />
              <p className={styles.copy}>
                Our journey began with a simple mission - to make document
                legalization accessibl e and effortless for all. A group of
                legal enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default Owner;
