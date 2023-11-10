import LayoutWrapper from "@/components/Layout/LayoutWrapper";
import styles from "./Benefits.module.css";
import ContentPadding from "@/components/Layout/ContentPadding/ContentPadding";

const Benefits = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.top}>
          <h2>The benefits of a direct booking website</h2>
          <p>
            Having a direct booking website for your vacation rental property
            instead of relying solely on Airbnb and VRBO (Vacation Rental By
            Owner) can offer several benefits. Here are some of the advantages
            of having your own booking website: - 18px
          </p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.b1}>two mapped stats here</div>
          <div className={styles.b2}>circle</div>
          <div className={styles.b3}>two mapped stats here</div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};

export default Benefits;
