import PageIntro from "@/components/PageIntro/PageIntro";
import Faq from "@/components/Faq/Faq";
import BlogSection from "@/components/BlogSection/BlogSection";
import AdminFeatures from "@/components/AdminFeatures/AdminFeatures";
import UserFeatures from "@/components/UserFeatures/UserFeatures";
import Services from "@/components/Services/Services";
import FinalCta from "@/components/FinalCta/FinalCta";
import Img from "../../../public/images/img7.png";

const FeaturesPage = () => {
  const fs = require("fs");
  const path = require("path");
  const matter = require("gray-matter");
  const blogsDirectory = path.join(process.cwd(), "blogs");
  const files = fs.readdirSync(blogsDirectory);
  const blogs = files.map((filename: any) => {
    const fileContent = fs.readFileSync(
      path.join(blogsDirectory, filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    <>
      <PageIntro
        heading='Features'
        copy="Discover the transformative features of CWA's direct booking websites. For administrators, our streamlined dashboard offers effortless management and valuable insights. Users enjoy a seamless booking experience with secure payments and real-time availability updates, ensuring your vacation rental stands out in the market."
        src={Img}
      />
      <Services />
      <AdminFeatures />
      <UserFeatures />
      <Faq />
      <BlogSection blogData={blogs} />
      <FinalCta />
    </>
  );
};
export default FeaturesPage;
