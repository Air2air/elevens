import {
  BREAKPOINT,
  COLOR_TEXT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
  FONT_DEFAULT_DESKTOP,
  FONT_DEFAULT_MOBILE,
  FONT_SUBHEAD_DESKTOP,
  FONT_SUBHEAD_MOBILE,
} from "styles/Constants";
import styled from "styled-components";
import Container from "components/Container/container";

export const TrendsInner = styled.div`
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

export const TrendsHeader = styled.div`
  height: ${headerHeight}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${chartMargin}px;
  width: 100%;

  /* background: red; */
`;

export const TrendsCategory = styled.div`
  height: ${headerHeight}px;
  text-align: left;
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_SUBHEAD_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_SUBHEAD_MOBILE};
  }
  color:${COLOR_TEXT}
`;

export const TrendsSource = styled.div`
  height: ${headerHeight}px;
  text-align: right;
  color:${COLOR_TEXT}
`;

export const TrendsDescription = styled.div`
  height: auto;
  text-align: left;
  margin-top: ${chartMargin}px;
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_DEFAULT_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_DEFAULT_MOBILE};
  }
  color:${COLOR_TEXT}
  /* background: gold; */
`;

export const TrendsSkeleton = (props) => (
  <Container {...props}>
    <div style={{ height: props.height }} />
  </Container>
);
