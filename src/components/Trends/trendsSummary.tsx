import { ChartSkeleton } from "components/Chart/chartComponents";
import Container from "components/Container/container";
import { FetchData } from "fetch/fetch";
import ChartSummary from "./chartSummary";
import {
  TrendsInner,
  TrendsHeader,
} from "./trendsComponents";

const TrendsSummary = ({ jsonFile }) => {
  const { data, loading, error } = FetchData({
    file: jsonFile,
  });
  if (loading) {
    return <ChartSkeleton />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Container backgroundColor={0}>
        <TrendsInner>
          <TrendsHeader>
            <div className="title">Healthcare Technology Trends</div>
          </TrendsHeader>
          <ChartSummary data={data}  />
        </TrendsInner>
      </Container>
    </>
  );
};

export default TrendsSummary;
