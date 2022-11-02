import {
  BREAKPOINT_PX,
  CALLOUT_HEIGHT_PX,
  COLOR_TEXT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
  TEXT_OPACITY,
} from "../../styles/Constants";
import styled from "styled-components";
import Button from "../Button/button";
import { AnimationOnScroll } from "react-animation-on-scroll";
import parse from "html-react-parser";
import { TitleCallout } from "../Title/titleCallout";

interface ITextSectionProps {
  calloutTitle: string;
  calloutText: string;
  calloutVideo?: string;
  backgroundColor: string;
  buttonText: string;
  buttonTo: string;
}

export const Callout = (props: ITextSectionProps) => {
  const { calloutTitle, calloutText, backgroundColor, buttonText, buttonTo } =
    props;

  const calloutTitleParsed = parse(calloutTitle);
  const calloutTextParsed = parse(calloutText);

  return (
    <>
      <CalloutContainer
        style={{ background: backgroundColor && backgroundColor }}
      >
        <TextSection>
          <TitleCallout titleText={calloutTitleParsed} />

          <AnimationOnScroll
            animateIn="animate__fadeIn"
            delay={200}
            offset={60}
          >
            <CalloutParagraph>{calloutTextParsed}</CalloutParagraph>
          </AnimationOnScroll>

          {buttonText ? <Button to={buttonTo} text={buttonText} /> : ""}
        </TextSection>
      </CalloutContainer>
    </>
  );
};

const CalloutContainer = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  align-items: center;
  height: auto;
  min-height: ${CALLOUT_HEIGHT_PX};
`;

const TextSection = styled.div`
  margin: 0 auto;
  z-index: +1;
  height: auto;
  text-align: left;
  @media (min-width: ${BREAKPOINT_PX}) {
    padding: 70px 0;
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    padding: 40px 0;
    width: ${CONTENT_WIDTH_MOBILE};
  }
`;

const CalloutParagraph = styled.div`
  color: ${COLOR_TEXT};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  height: auto;
  text-align: left;
  opacity: ${TEXT_OPACITY};
  padding-bottom: 20px;
  @media (min-width: ${BREAKPOINT_PX}) {
    font-size: 1.3em;
    line-height: 1.7em;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    font-size: 1.1em;
    line-height: 1.7em;
  }
`;

export default Callout;
