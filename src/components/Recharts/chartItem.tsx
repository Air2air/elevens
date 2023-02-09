import Container from "components/Container/container";
import { TitleCallout } from "components/Title/titleCallout";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { ChartDescription, ChartInner } from "./chartComponents";
import TimeSeriesChart from "./timeSeries";

const ChartItem = (props) => {
  return (
    <>
      <Container {...props}>
        <ChartInner>
          <TitleCallout title={props.title} />
          <AnimationOnScroll animateIn="animate__fadeIn" delay={0} offset={60}>
            <div style={{ width: "100%", height: props.height }}>
              <TimeSeriesChart {...props} />
            </div>
            <ChartDescription>{props.description}</ChartDescription>
          </AnimationOnScroll>
        </ChartInner>
      </Container>
    </>
  );
};

export default ChartItem;
