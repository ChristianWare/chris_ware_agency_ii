import { Metadata } from "next";
import AboutSection from "@/components/AboutSection/AboutSection";
import BlogSection from "@/components/BlogSection/BlogSection";
import Faq from "@/components/Faq/Faq";
import FinalCta from "@/components/FinalCta/FinalCta";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Benefits from "@/components/PageSections/Benefits/Benefits";
import Portfolio from "@/components/Portfolio/Portfolio";
import PreHero from "@/components/PreHero/PreHero";
import Pricing from "@/components/Pricing/Pricing";
import Services from "@/components/Services/Services";

export const metadata: Metadata = {
  title:
    "The Chris Ware Agency: Empower Your Vacation Rental Business with Exclusive Direct Booking Websites",
  description:
    "Unlock the full potential of your vacation rental with The Chris Ware Agency – Your trusted partner for bespoke direct booking websites. Elevate your business beyond Airbnb!",
};

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
        <Benefits />
        <AboutSection />
        <Services />
        <HowItWorks />
        <Pricing />
        <Portfolio />
        <Faq />
        <BlogSection blogData={blogs} />
        <FinalCta />
    </div>
  );
};
export default HomePage;
