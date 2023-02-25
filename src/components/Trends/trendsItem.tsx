import Container from "components/Container/container";
import EChart from "./echart";
import {
  TrendsCategory,
  TrendsDescription,
  TrendsHeader,
  TrendsInner,
  TrendsSource,
} from "./trendsComponents";
import parse from "html-react-parser";

const TrendsItem = (props) => {
  const descriptionParsed = props.description
    ? parse(props.description)
    : "Data fetch error in Text";

  return (
    <>
      <Container {...props}>
        <TrendsInner>
          <TrendsHeader>
            <TrendsCategory>{props.title}</TrendsCategory>
            <TrendsSource></TrendsSource>
          </TrendsHeader>
          {props.chartData >= "" && <EChart {...props} />}
          <TrendsSource>{props.source}</TrendsSource>
          <TrendsDescription>{descriptionParsed}</TrendsDescription>
        </TrendsInner>
      </Container>
    </>
  );
};

export default TrendsItem;
