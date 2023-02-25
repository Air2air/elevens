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
import TrendsStats from "./trendsStats";

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
            <TrendsStats {...props} />
          </TrendsHeader><br />
          {props.chartData >= "" && <EChart {...props} />}
          
          <TrendsSource>{props.source}</TrendsSource>
          <br />
          <TrendsDescription>{descriptionParsed}</TrendsDescription>
        </TrendsInner>
      </Container>
    </>
  );
};

export default TrendsItem;
