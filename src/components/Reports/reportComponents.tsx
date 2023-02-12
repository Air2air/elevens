import {
  BREAKPOINT,
  COLOR_TEXT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
  FONT_DEFAULT_DESKTOP,
  FONT_DEFAULT_MOBILE,
  TEXT_OPACITY,
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

export const ReportDescription = styled.div`
  color: ${COLOR_TEXT};
  height: auto;
  text-align: left;
  opacity: ${TEXT_OPACITY};
  /* padding-bottom: 20px; */
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
