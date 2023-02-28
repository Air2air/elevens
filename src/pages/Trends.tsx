import Spacer from "components/Spacer/spacer";
import TrendsSummary from "components/Trends/trendsSummary";
import TrendsList from "components/Trends/trendsList";


const TrendsPage = () => {
  return (
    <>
      <Spacer height={140} backgroundColor={1} />
      <TrendsSummary jsonFile="/data/trendsContent.json" />
      <TrendsList jsonFile="/data/trendsContent.json" />
    </>
  );
};

export default TrendsPage;
