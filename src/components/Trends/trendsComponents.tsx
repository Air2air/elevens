import {
  BREAKPOINT,
  COLOR_TEXT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
  FONT_DEFAULT_DESKTOP,
  FONT_DEFAULT_MOBILE,
  FONT_FAMILY_HEADING,
} from "styles/Constants";
import styled from "styled-components";
import Container from "components/Container/container";

export const TrendsInner = styled.div`
  margin: 0 auto;
  @media (min-width: ${BREAKPOINT}px) {
    padding: 50px 0;
    /* width: ${CONTENT_WIDTH_DESKTOP}; */
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding: 30px 0;
    /* width: ${CONTENT_WIDTH_MOBILE}; */
  }
  /* background: red;; */
`;

const headerHeight = 90;
const chartMargin = 30;

export const TrendsHeader = styled.div`
  height: ${headerHeight}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${chartMargin}px;
  width: 100%;
  /* background: red; */
`;

export const TrendsCategory = styled.div`
  text-align: left;
  @media (min-width: ${BREAKPOINT}px) {
    font-family: ${FONT_FAMILY_HEADING};
    font-size: 1.7em;
    line-height: 2em;
  }
  @media (max-width: ${BREAKPOINT}px) {
    font-family: ${FONT_FAMILY_HEADING};
    font-size: 1.7em;
    line-height: 2em;
  }
  color: ${COLOR_TEXT};
`;

export const TrendsLabel = styled.div`
  height: ${headerHeight}px;
  text-align: right;
  opacity: 0.5;
  color: ${COLOR_TEXT};
`;

export const TrendsSource = styled.div`
  text-align: right;
  opacity: 0.5;
  color: ${COLOR_TEXT};
  font-size: 0.9em;
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
  color: ${COLOR_TEXT};
  /* background: gold; */
`;

export const TrendsSkeleton = (props) => (
  <Container {...props}>
    <div style={{ height: props.height }} />
  </Container>
);
