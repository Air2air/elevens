import Callout from "components/Callout/callOut";
import BannerImage from "components/Banner/bannerImage";
import RowButton from "components/Button/rowButton";
import Spacer from "components/Spacer/spacer";
import Heading from "components/Heading/heading";
import Metatags from "components/Helmet/metatags";
import CalloutList from "components/Callout/callOutList";

const pageImage = "dartmouth.jpeg";
const pageData = "/data/historyPage.json";

const HistoryPage = () => {
  return (
    <>
      <Metatags jsonFile={pageData} />
      <BannerImage
        pageImage={pageImage}
        overlayOpacity={0.7}
        overlayColor={1}
      />
      <Heading jsonFile={pageData} />
      <Spacer height={40} backgroundColor={2} />
      <RowButton buttonTo="/about" buttonText="About" backgroundColor={2} />
      <Spacer height={40} backgroundColor={2} />
      <CalloutList jsonFile={pageData} />
      <Spacer height={40} backgroundColor={2} />
      <RowButton buttonTo="/about" buttonText="About" backgroundColor={2} />
      <Spacer height={40} backgroundColor={2} />
    </>
  );
};

export default HistoryPage;
