import Image from "next/image";
import BlogPreview from "../BlogPreview/BlogPreview";
import Button from "../Button/Button";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./BlogSection.module.css";
import Megaphone from "../../../public/icons/megaphone.png";


const BlogSection = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.mainContent}>
          <div className={styles.top}>
            <div className={styles.logoImageContainer}>
              <Image src={Megaphone} alt='logo' fill className={styles.logo} />
            </div>
            <h2 className={styles.heading}>
              our <span className={styles.highlight}>insights</span>
            </h2>
            <p className={styles.copy}>
              Explore our blog for the latest updates, travel tips, and industry
              insights to enhance your black car service experience.
            </p>
          </div>
          <div className={styles.content}>
            {/* {blogData.map((x: BlogData, index: number) => ( */}
            <BlogPreview />
            <BlogPreview />
            <BlogPreview />
            {/* ))} */}
          </div>
          {/* <div className={styles.btnContainer}>
            {pathname !== "/blog" && (
              <Button href='/blog' text='See all Articles' btnType='tertiary' />
            )}
          </div> */}
        </div>
        <div className={styles.btnContainer}>
          <Button href='/about' text='All blogs' btnType='primary' />
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default BlogSection;
