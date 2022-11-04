import setBodyColor from "../utils/setBodyColor";
import BannerVideo from "../components/BannerVideo/bannerVideo";
// import About from "../components/About/about";
import {
  COLOR_BASE,
  COLOR_BASE_1,
  COLOR_BASE_2,
} from "../styles/Constants";
import { Callout } from "../components/Callout/callOut";
import Advisors from "../components/Advisors/advisors";

const pageVideo = 766647825;

const AboutPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="About Elevens"
        pageDescription="If you know healthcare AI, then you already know some Elevens"
        pageVideo={pageVideo}
        overlayOpacity={0.2}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      <Callout
        calloutTitle=""
        calloutText="<p>Eleven was created when some of the foremost AI and medical minds on the planet came together to accelerate breakthrough ventures in health-tech, med-tech, bio-tech, and pharma-tech. These experts (Elevens) are the leaders in AI technologies and business in medicine, healthcare, bioscience, and pharmaceutical science, and all share a mission to deliver today's most fundamental healthcare <b>AI advancements</b>.</p><p>Our advisors are healthcare and clinical machine learning leaders from top academic medical centers, venture capital, large technology companies, and successful digital health startups.</p>"
        backgroundColor={COLOR_BASE_1}
        buttonText=""
        buttonTo=""
      />

      <Advisors advisorsTitle="Advisory Board" backgroundColor={COLOR_BASE_2} />
    </>
  );
};

export default AboutPage;
