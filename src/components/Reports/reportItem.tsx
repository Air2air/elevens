import Container from "components/Container/container";
import TimeSeriesChart from "components/Recharts/timeSeries";
import { TitleCallout } from "components/Title/titleCallout";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { ReportDescription, ReportInner } from "./reportComponents";

// detect if props.parameters includes "count"
const ReportItem = (props) => {

  const resultType = props.resultLimit.includes("count") ? (
    <TimeSeriesChart
      baseUrl={props.baseUrl}
      parameters={props.parameters}
      resultLimit={props.resultLimit}
      textColor={props.textColor}
      chartColor={props.chartColor}
    />
  ) : (
    <div>TODO: add other result types</div>
  );

  return (
    <>
      <Container {...props}>
        <ReportInner>
          <AnimationOnScroll animateIn="animate__fadeIn" delay={0} offset={60}>
            <TitleCallout title={props.subcategory} />
            {resultType}
            <ReportDescription>{props.description}</ReportDescription>
          </AnimationOnScroll>
        </ReportInner>
      </Container>
    </>
  );
};

export default ReportItem;
