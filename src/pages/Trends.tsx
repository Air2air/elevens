import Spacer from "components/Spacer/spacer";
import TrendsSummary from "components/Trends/trendsSummary";
import TrendsList from "components/Trends/trendsList";
import Metatags from "components/Helmet/metatags";

const TrendsPage = () => {
  return (
    <>
      <Metatags
        title="Healthcare Tech Trends"
        quote="Elevens.ai healthcare tech sectors trends"
        description="Elevens.ai is a data-driven, AI-powered platform that helps you make better decisions about your business. We provide you with the tools to make better decisions, faster."
        image="/images/social/trends.webp"
      />
      <Spacer height={140} backgroundColor={1} />
      <TrendsSummary jsonFile="/data/trendsContent.json" />
      <TrendsList jsonFile="/data/trendsContent.json" />
    </>
  );
};

export default TrendsPage;
