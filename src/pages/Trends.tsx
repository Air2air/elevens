import Spacer from "components/Spacer/spacer";
import TrendsSummary from "components/Trends/trendsSummary";
import TrendsList from "components/Trends/trendsList";
import Metatags from "components/Helmet/metatags";

const pageData = "/data/trendsPage.json";

const TrendsPage = () => {
  return (
    <>
      <Metatags jsonFile={pageData} />
      <Spacer height={140} backgroundColor={1} />
      <TrendsSummary  jsonFile={pageData}/>
      <TrendsList jsonFile={pageData} />
    </>
  );
};

export default TrendsPage;
