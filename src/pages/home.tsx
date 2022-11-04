import setBodyColor from "../utils/setBodyColor";
import Callout from "../components/Callout/callOut";
import BannerVideo from "../components/BannerVideo/bannerVideo";
import { COLOR_BASE, COLOR_BASE_1 } from "../styles/Constants";

const pageVideo = 765122469;

const HomePage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="Drive Health AI portfolio success."
        pageDescription="Derisk your health AI investments with over 100 years of combined expertise"
        pageVideo={pageVideo}
        overlayOpacity={0}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      <Callout
        calloutTitle="We know what you need."
        calloutText="The most <b>experienced</b> healthcare and clinical machine learning and business leaders from leading academic medical centers, venture capital, large technology companies, and successful digital health startups."
        backgroundColor={COLOR_BASE_1}
        buttonText="What we do"
        buttonTo="/what_we_do"
      />
    </>
  );
};

export default HomePage;
