import Container from "components/Container/container";
import { TitleCallout } from "components/Title/titleCallout";
import BarChart from "./bar";
import { ChartDescription, ChartInner } from "./chartComponents";
import AreaChart from "./area";

const ChartItem = (props) => {
  return (
    <>
      <Container {...props}>
        <ChartInner>
          <TitleCallout title={props.title} />
          <div style={{ width: "100%", height: props.height }}>
            {props.chartType === "bar" ? <BarChart {...props} /> : null}
            {props.chartType === "area" ? <AreaChart {...props} /> : null}
          </div>
          <ChartDescription>{props.description}</ChartDescription>
        </ChartInner>
      </Container>
    </>
  );
};

export default ChartItem;
