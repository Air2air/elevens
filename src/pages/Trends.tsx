import Spacer from "components/Spacer/spacer";
import TrendsList from "components/Trends/trendsList";

const TrendsPage = () => {
  return (
    <>
      <Spacer height={140} backgroundColor={1} />
      <TrendsList jsonFile="/data/trendsContent.json" />
    </>
  );
};

export default TrendsPage;
