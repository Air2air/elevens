import RowButton from "components/Button/rowButton";
import BannerVideo from "components/Banner/bannerVideo";
import Spacer from "components/Spacer/spacer";
import CalloutList from "components/Callout/callOutList";
import MarketsChart from "components/Chart/Markets/chartMarkets";
import Heading from "components/Heading/heading";
import Metatags from "components/Helmet/metatags";

const pageData = "/data/marketsPage.json";

const MarketsPage = () => {
  return (
    <>
      <Metatags jsonFile={pageData} />
      <BannerVideo
        pageVideo={784844948}
        overlayOpacity={0.4}
        overlayColor={1}
      />
      <Heading jsonFile={pageData} />
      <MarketsChart jsonFile={pageData} />
      <RowButton buttonTo="/vision" buttonText="Vision" backgroundColor={1} />
      <Spacer height={40} backgroundColor={1} />
      <CalloutList jsonFile={pageData} />
    </>
  );
};

export default MarketsPage;
