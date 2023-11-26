import { preHero } from "@/lib/data";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./PreHero.module.css";
import Image from "next/image";
import Label from "../Label/Label";

const PreHero = () => {
  return (
    // <div className={styles.bg}>
    //   <div className={styles.layoutWrapper}>
    //     <div className={styles.contentPadding}>
    //       <div className={styles.content}>
    //         {preHero.map((x, index) => (
    //           <div key={index} className={styles.container}>
    //             <div className={styles.iconContainer}>
    //               <Image
    //                 src={x.icon}
    //                 alt='icon'
    //                 width={40}
    //                 height={40}
    //                 className={styles.icon}
    //               />
    //             </div>
    //             <h2 className={styles.feature}>{x.feature}</h2>
    //             <p className={styles.desc}>{x.desc}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.contentTop}>
          <div className={styles.left}>
            <Label text='core principles and beliefs' />
            <h2 className={styles.heading}>Our Values</h2>
          </div>
          <div className={styles.right}>
            <p className={styles.topCopy}>
              Our values act as a set of guiding principles and fundamental
              beliefs that influence the behaviors we demonstrate, which shape
              the decisions we collectively make as a team.
            </p>
          </div>
        </div>
        <div className={styles.contentBottom}>
          {preHero.map((x, index) => (
            <div key={index} className={styles.box}>
              <Image
                src={x.icon}
                alt='icon'
                width={40}
                height={40}
                className={styles.icon}
              />
              <h3 className={styles.value}>{x.feature}</h3>
              <p className={styles.description}>{x.desc}</p>
            </div>
          ))}
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default PreHero;
