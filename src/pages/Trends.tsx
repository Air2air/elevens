import Spacer from "components/Spacer/spacer";
import TrendsSummary from "components/Trends/trendsSummary";
import TrendsList from "components/Trends/trendsList";
import Metatags from "components/Helmet/metatags";

const TrendsPage = () => {
  return (
    <>
      {/* <Metatags jsonFile="/data/trendsPage.json" /> */}
      <Spacer height={140} backgroundColor={1} />
      <TrendsSummary jsonFile="/data/trendsContent.json" />
      <TrendsList jsonFile="/data/trendsPage.json" />
    </>
  );
};

export default TrendsPage;
