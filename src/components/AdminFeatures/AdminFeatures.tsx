import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./AdminFeatures.module.css";
import Image from "next/image";
import { adminData } from "@/lib/data";

const AdminFeatures = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>Admin Access</h2>
            <p className={styles.topText}>
              Our process is structured so that you get the most added value for
              the least amount of time.
            </p>
          </div>
          <div className={styles.right}>
            {adminData.map((x, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.box}>
                  <div className={styles.boxLeft}>
                    <div className={styles.number}>
                      <Image
                        src={x.icon}
                        alt='icon'
                        width={50}
                        height={50}
                        className={styles.icon}
                      />
                    </div>
                  </div>
                  <div className={styles.boxRight}>
                    <h3 className={styles.processName}>{x.category}</h3>
                    {x.tasks.map((y, i) => (
                      <p key={i} className={styles.task}>
                        {y.task}
                      </p>
                    ))}
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

