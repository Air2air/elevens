import BannerVideo from "components/Banner/bannerVideo";
import Map from "components/Map/map";
import { RowButton } from "components/Button/rowButton";
import Spacer from "components/Spacer/spacer";
import TeamList from "components/Team/team";
import Heading from "components/Heading/heading";
import Metatags from "components/Helmet/metatags";

const pageData = "/data/aboutPage.json";

const AboutPage = () => {
  return (
    <>
      <Metatags jsonFile={pageData} />
      <BannerVideo pageVideo={776449715} overlayOpacity={0.7} />
      <Heading jsonFile={pageData} />
      <Map title="Elevens Worldwide" backgroundColor={2} />
      <TeamList jsonFile="/data/teamContent.json" />
      <Spacer height={40} backgroundColor={2} />
      <RowButton buttonTo="/contact" buttonText="Contact" backgroundColor={2} />
      <Spacer height={40} backgroundColor={2} />
    </>
  );
};

export default AboutPage;
