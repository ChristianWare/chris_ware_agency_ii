import Img from "../../../public/images/img2.png";
import PageIntro from "@/components/PageIntro/PageIntro";

const AboutPage = () => {
  return (
    <PageIntro
      heading='About the'
      highlight='Chris Ware Agency'
      copy='I’m Chris Ware, the owner and creative force behind The Chris Ware Agency. My journey in the world of web development began during my college years, where I discovered my passion for crafting digital experiences. Over the past decade and a half, I’ve honed my skills and transformed that passion into a thriving career.'
      src={Img}
    />
  );
};
export default AboutPage;
