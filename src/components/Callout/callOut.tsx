import {
  BREAKPOINT_PX,
  CALLOUT_HEIGHT_PX,
  COLOR_BASE_1,
  COLOR_BASE_2,
  COLOR_BASE_3,
  COLOR_BASE_4,
  COLOR_BASE_5,
  COLOR_BASE_6,
  COLOR_TEXT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
  TEXT_OPACITY,
} from "../../styles/Constants";
import styled from "styled-components";
import Button from "../Button/button";
import { AnimationOnScroll } from "react-animation-on-scroll";
import parse from "html-react-parser";
import { TitleCallOut } from "../Title/titleCallOut";
import { ICallOutProps } from "../../api/interfaces";

export const CallOut = (props) => {
  const textParsed = parse(props.text);

  const assignBackgroundColor = (props: ICallOutProps) => {
    if (props.backgroundColor === 1) {
      return COLOR_BASE_1;
    } else if (props.backgroundColor === 2) {
      return COLOR_BASE_2;
    } else if (props.backgroundColor === 3) {
      return COLOR_BASE_3;
    } else if (props.backgroundColor === 4) {
      return COLOR_BASE_4;
    } else if (props.backgroundColor === 5) {
      return COLOR_BASE_5;
    } else {
      return COLOR_BASE_6;
    }
  };

  return (
    <>
      <CallOutContainer style={{ background: assignBackgroundColor(props) }}>
        <TextSection>
          <TitleCallOut title={props.title} />

          <AnimationOnScroll
            animateIn="animate__fadeIn"
            delay={200}
            offset={60}
          >
            <CallOutParagraph>{textParsed}</CallOutParagraph>
          </AnimationOnScroll>

          {props.buttonText ? (
            <Button to={props.buttonTo} text={props.buttonText} />
          ) : (
            ""
          )}
        </TextSection>
      </CallOutContainer>
    </>
  );
};

const CallOutContainer = styled.div`
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

const CallOutParagraph = styled.div`
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

export default CallOut;
