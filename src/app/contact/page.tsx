import FinalCta from "@/components/FinalCta/FinalCta";
import Faq from "@/components/Faq/Faq";
import PageIntro from "@/components/PageIntro/PageIntro";
import Img from "../../../public/images/img16.jpg";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import BlogSection from "@/components/BlogSection/BlogSection";
import FinalCTA2 from "@/components/FinalCTA2/FinalCTA2";

const ContactPage = () => {
  const fs = require("fs");
  const path = require("path");
  const matter = require("gray-matter");

  // Determine the correct path to the 'blogs' directory
  const blogsDirectory = path.join(process.cwd(), "blogs");

  // Use readdirSync to list files in the 'blogs' directory
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
        heading='Contact'
        copy='Whether you&#39;re a prospective client or have questions about
                our services, reaching out is simple and quick. We&#39;re ready
                to assist you to ensuring a seamless and personalized experience
                as you take the next step in transforming your vacation rental
                business.'
        src={Img}
      />
      <ContactInfo />
      <Faq />
      <BlogSection blogData={blogs} />
      <FinalCTA2 />
      <FinalCta />
    </>
  );
};
export default ContactPage;
