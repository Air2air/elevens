import BannerVideo from "components/Banner/bannerVideo";
import RowButton from "components/Button/rowButton";
import Spacer from "components/Spacer/spacer";
import CalloutList from "components/Callout/callOutList";
import VisionChart from "components/Chart/Vision/chartVision";
import Heading from "components/Heading/heading";
import Metatags from "components/Helmet/metatags";

const pageData = "/data/visionPage.json";

const VisionPage = () => {
  return (
    <>
      <Metatags jsonFile={pageData} />
      <BannerVideo
        pageVideo={776451115}
        overlayOpacity={0.1}
        overlayColor={1}
      />
      <Heading jsonFile={pageData} />
      <VisionChart jsonFile={pageData} />
      <RowButton buttonTo="/history" buttonText="History" backgroundColor={3} />
      <Spacer height={40} backgroundColor={3} />
      <CalloutList jsonFile={pageData} />
      <Spacer height={40} backgroundColor={3} />
      <RowButton buttonTo="/history" buttonText="History" backgroundColor={3} />
      <Spacer height={40} backgroundColor={3} />
    </>
  );
};

export default VisionPage;
