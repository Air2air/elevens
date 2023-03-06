import RowButton from "components/Button/rowButton";
import BannerVideo from "components/Banner/bannerVideo";
import Spacer from "components/Spacer/spacer";
import CalloutList from "components/Callout/callOutList";
import MarketsChart from "components/Chart/Markets/chartMarkets";
import Heading from "components/Heading/heading";

const MarketsPage = () => {
  return (
    <>
      <BannerVideo
        pageVideo={784844948}
        overlayOpacity={0.4}
        overlayColor={1}
      />
      <Heading jsonFile="/data/marketsPage.json" />
      <MarketsChart jsonFile="/data/marketsPage.json" />
      <RowButton buttonTo="/vision" buttonText="Vision" backgroundColor={1} />
      <Spacer height={40} backgroundColor={1} />
      <CalloutList jsonFile="/data/marketsContent.json" />
    </>
  );
};

export default MarketsPage;
