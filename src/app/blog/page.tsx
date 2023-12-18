import PageIntro from "@/components/PageIntro/PageIntro";
import BlogSection from "@/components/BlogSection/BlogSection";
import FinalCta from "@/components/FinalCta/FinalCta";
import Img from "../../../public/images/img17.jpg";
import FinalCTA2 from "@/components/FinalCTA2/FinalCTA2";

const BlogPage = () => {
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
        heading='Blog'
        copy="We're on a mission to redefine the vacation rental experience by empowering property owners to seize control of their bookings. Discover the narrative behind our commitment to personalized, direct booking websites and join us in transforming the way you connect with your guests."
        src={Img}
      />
      <BlogSection blogData={blogs} />
      <FinalCTA2 />
      <FinalCta />
    </>
  );
};
export default BlogPage;
