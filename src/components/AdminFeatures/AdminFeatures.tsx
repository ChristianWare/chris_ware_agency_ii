import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./AdminFeatures.module.css";
import Image from "next/image";
import Img from "../../../public/images/img1.png";
import { adminData } from "@/lib/data";

const AdminFeatures = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            <span className={styles.highlight}>Administrative</span> access
            includes:
          </h2>
          <div className={styles.mapBox}>
            {adminData.map((x, index) => (
              <div key={index} className={styles.cardContainer}>
                <div className={styles.card}>
                  <div className={styles.left}>
                    <h3 className={styles.category}>{x.category}</h3>
                    {x.tasks.map((y, i) => (
                      <p key={i} className={styles.task}>
                        {y.task}
                      </p>
                    ))}
                  </div>
                  <div className={styles.right}>
                    <div className={styles.imgContainer}>
                      <Image src={Img} alt='logo' fill className={styles.img} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default AdminFeatures;
