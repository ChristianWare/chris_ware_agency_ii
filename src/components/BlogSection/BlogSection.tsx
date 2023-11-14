import BlogPreview from "../BlogPreview/BlogPreview";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./BlogSection.module.css";

const BlogSection = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.mainContent}>
          <div className={styles.top}>
            <h2 className={styles.heading}>our insights</h2>
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
            <BlogPreview />
            {/* ))} */}
          </div>
          {/* <div className={styles.btnContainer}>
            {pathname !== "/blog" && (
              <Button href='/blog' text='See all Articles' btnType='tertiary' />
            )}
          </div> */}
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default BlogSection;
