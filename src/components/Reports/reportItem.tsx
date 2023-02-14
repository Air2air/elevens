import Container from "components/Container/container";
import EChart from "./echart";
import {
  ReportCategory,
  ReportDescription,
  ReportHeader,
  ReportInner,
  ReportSubCategory,
} from "./reportComponents";

const ReportItem = (props) => {
  const resultType =
    props.chartType !== "" ? <EChart {...props} /> : <div>Not a chart</div>;

  return (
    <>
      <Container {...props}>
        <ReportInner>
          <ReportHeader style={{ color: props.textColor }}>
            <ReportCategory>{props.category}</ReportCategory>
            <ReportSubCategory>{props.subcategory}</ReportSubCategory>
          </ReportHeader>
          {resultType}
          <ReportDescription style={{ color: props.textColor }}>
            {props.description}
          </ReportDescription>
        </ReportInner>
      </Container>
    </>
  );
};

export default ReportItem;
