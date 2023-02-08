import Container from "components/Container/container";
import { TitleCallout } from "components/Title/titleCallout";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { ChartInner } from "./chartComponents";
import TimeSeriesChart from "./recharts";


const ChartItem = (props) => {


  return (
    <>
      <Container {...props}>
        <ChartInner>
          <TitleCallout title={props.title} />
          <AnimationOnScroll animateIn="animate__fadeIn" delay={0} offset={60}>
          <TimeSeriesChart {...props} />
          </AnimationOnScroll>
        </ChartInner>
      </Container>
    </>
  );
};

export default ChartItem;
