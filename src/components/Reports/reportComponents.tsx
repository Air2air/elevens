import {
  BREAKPOINT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
  FONT_DEFAULT_DESKTOP,
  FONT_DEFAULT_MOBILE,
  FONT_SUBHEAD_DESKTOP,
  FONT_SUBHEAD_MOBILE,
} from "styles/Constants";
import styled from "styled-components";
import Container from "components/Container/container";

export const ReportInner = styled.div`
  margin: 0 auto;
  @media (min-width: ${BREAKPOINT}px) {
    padding: 30px 0;
    /* width: ${CONTENT_WIDTH_DESKTOP}; */
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding: 10px 0;
    /* width: ${CONTENT_WIDTH_MOBILE}; */
  }
  /* background: red;; */
`;

const headerHeight = 40;
const chartMargin = 30;

export const ReportHeader = styled.div`
  height: ${headerHeight}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${chartMargin}px;
  width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_SUBHEAD_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_SUBHEAD_MOBILE};
  }
  /* background: red; */
`;

export const ReportCategory = styled.div`
  height: ${headerHeight}px;
  text-align: left;
`;

export const ReportSubCategory = styled.div`
  height: ${headerHeight}px;
  text-align: right;
`;

export const ReportDescription = styled.div`
  height: auto;
  text-align: left;
  margin-top: ${chartMargin}px;
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_DEFAULT_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_DEFAULT_MOBILE};
  }
  /* background: gold; */
`;

export const ReportSkeleton = (props) => (
  <Container {...props}>
    <div style={{ height: props.height }} />
  </Container>
);
