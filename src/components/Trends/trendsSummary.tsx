
import { ChartSkeleton } from "components/Chart/chartComponents";
import Container from "components/Container/container";
import { FetchData } from "fetch/fetch";
import { useState } from "react";
import { COLOR_CHART_BAR, COLOR_GREEN } from "styles/Colors";
import { ButtonDesktop } from "./chartButtons";
import ChartSummary from "./chartSummary";
import { TrendsInner, TrendsHeader } from "./trendsComponents";

const TrendsSummary = ({ jsonFile }) => {
  const [xAxisType, setXAxisType] = useState("cap_current");

  const handleCagrClick = () => {
    setXAxisType("cagr_current");
  };

  const handleCapClick = () => {
    setXAxisType("cap_current");
  };

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
            <div className="title">Healthcare Technology Sectors</div>
            <div>
            <ButtonDesktop
              onClick={handleCapClick}
              disabled={xAxisType === "cap_current"}
              buttonColor={COLOR_CHART_BAR}
            >
              Market Cap
            </ButtonDesktop>
            &nbsp;
            <ButtonDesktop
              onClick={handleCagrClick}
              disabled={xAxisType === "cagr_current"}
              buttonColor={COLOR_GREEN}
            >
              CAGR
            </ButtonDesktop></div>
          </TrendsHeader>
          <ChartSummary data={data} xAxisType={xAxisType} />
        </TrendsInner>
      </Container>
    </>
  );
};

export default TrendsSummary;
