import AboutSection from "@/components/AboutSection/AboutSection";
import BlogSection from "@/components/BlogSection/BlogSection";
import ContactForm from "@/components/ContactForm/ContactForm";
import Faq from "@/components/Faq/Faq";
import FinalCta from "@/components/FinalCta/FinalCta";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Benefits from "@/components/PageSections/Benefits/Benefits";
import Portfolio from "@/components/Portfolio/Portfolio";
import PreHero from "@/components/PreHero/PreHero";
import Pricing from "@/components/Pricing/Pricing";
import Services from "@/components/Services/Services";

const HomePage = () => {
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
    <div>
      <Hero />
      <PreHero />
      <AboutSection />
      <Services />
      <Benefits />
      <HowItWorks />
      <Pricing />
      {/* <Portfolio /> */}
      <Faq />
      <BlogSection blogData={blogs} />
      <FinalCta />
    </div>
  );
};
export default HomePage;
