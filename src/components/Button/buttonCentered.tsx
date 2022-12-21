import {
  BREAKPOINT,
  BUTTON_COLOR_RED,
  BUTTON_COLOR_GRAY,
  BUTTON_COLOR_HOVER_RED,
  BUTTON_COLOR_HOVER_GRAY,
  BUTTON_HEIGHT,
  BUTTON_TEXT_COLOR,
} from "styles/Constants";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import { AnimationOnScroll } from "react-animation-on-scroll";

export const ButtonCentered = (props: {
  buttonTo: any;
  buttonText: string;
  buttonColor?: string;
}) => {
  return (
    <>
      <Link to={props.buttonTo}>
        <ButtonDesktop buttonColor={props.buttonColor}>
          <span>{props.buttonText}</span>
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </ButtonDesktop>
        <ButtonMobile buttonColor={props.buttonColor}>
          <span>{props.buttonText}</span>
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </ButtonMobile>
      </Link>
    </>
  );
};

const buttonWidthDesktop = "250px";
const buttonWidthMobile = "250px";

const ButtonDesktop = styled.div<{ buttonColor?: string }>`
  height: ${BUTTON_HEIGHT + 20}px;
  font-size: 1.3em;
  font-weight: 500;
  font-family: "Roboto Condensed", sans-serif;
  color: ${BUTTON_TEXT_COLOR};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  span {
    margin-right: 10px;
  }
  background: ${(props: { buttonColor?: string }) =>
    props.buttonColor === "gray" ? BUTTON_COLOR_GRAY : BUTTON_COLOR_RED};
  &:hover {
    background: ${(props: { buttonColor?: string }) =>
      props.buttonColor === "gray"
        ? BUTTON_COLOR_HOVER_GRAY
        : BUTTON_COLOR_HOVER_RED};
  }
  min-width: ${buttonWidthDesktop};
  @media (min-width: ${BREAKPOINT}px) {
    display: inline-flex;
  }
  @media (max-width: ${BREAKPOINT}px) {
    display: none;
  }
`;

const ButtonMobile = styled.div`
  height: ${BUTTON_HEIGHT}px;
  font-size: 1.3em;
  font-weight: 500;
  font-family: "Roboto Condensed", sans-serif;
  color: ${BUTTON_TEXT_COLOR};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  span {
    margin-right: 10px;
  }
  background: ${(props: { buttonColor?: string }) =>
    props.buttonColor === "gray" ? BUTTON_COLOR_GRAY : BUTTON_COLOR_RED};
  &:hover {
    background: ${(props: { buttonColor?: string }) =>
      props.buttonColor === "gray"
        ? BUTTON_COLOR_HOVER_GRAY
        : BUTTON_COLOR_HOVER_RED};
  }
  width: ${buttonWidthMobile};
  @media (min-width: ${BREAKPOINT}px) {
    display: none;
  }
  @media (max-width: ${BREAKPOINT}px) {
    display: inline-flex;
  }
`;

export default ButtonCentered;
