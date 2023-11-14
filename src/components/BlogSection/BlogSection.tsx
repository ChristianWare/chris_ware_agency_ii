import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./BlogSection.module.css";

const BlogSection = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div>
          <h2>Our Blog</h2>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default BlogSection;
