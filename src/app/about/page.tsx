import PageIntro from "@/components/PageIntro/PageIntro";
import BlogSection from "@/components/BlogSection/BlogSection";
import Faq from "@/components/Faq/Faq";
import Values from "@/components/Values/Values";
import TechStack from "@/components/TechStack/TechStack";
import FinalCta from "@/components/FinalCta/FinalCta";
import Img from "../../../public/images/img20.jpg";
import Vision from "@/components/Vision/Vision";
import Mission from "@/components/Mission/Mission";
import FinalCTA2 from "@/components/FinalCTA2/FinalCTA2";

const AboutPage = () => {
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
        heading='About'
        copy="We're on a mission to redefine the vacation rental experience by empowering property owners to seize control of their bookings. Discover the narrative behind our commitment to personalized, direct booking websites and join us in transforming the way you connect with your guests."
        src={Img}
      />
      <Values />
      <Mission />
      <Vision />
      <TechStack />
      <Faq />
      <BlogSection blogData={blogs} />
      <FinalCTA2 />
      <FinalCta />
    </>
  );
};
export default AboutPage;
