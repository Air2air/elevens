// BUTTONS
export const BUTTON_HEIGHT = 40;
export const BUTTON_WIDTH_DESKTOP = "200px";

const buttonWidthDesktop = "150px";

export const BUTTON_TEXT_COLOR = "hsl(0, 0%, 90%)";
export const BUTTON_COLOR = "hsl(0, 86%, 36%)";
export const BUTTON_COLOR_HOVER = "hsl(0, 86%, 46%)";
// export const BUTTON_COLOR_GRAY =" hsl(0, 0%, 52%)";
export const BUTTON_COLOR_HOVER_GRAY = "rgba(50, 50, 50, 0.4)";

import styled from "styled-components";
import {
  COLOR_BASE_6,
  FONT_BUTTON_DESKTOP,
  // FONT_CONDENSED_DESKTOP,
} from "styles/Constants";

export const ButtonDesktop = styled.button<{ buttonColor?: string }>`
  ${FONT_BUTTON_DESKTOP};
  height: ${BUTTON_HEIGHT}px;
  color: ${BUTTON_TEXT_COLOR};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  span {
    margin-right: 10px;
  }
  background: ${(props: { buttonColor?: string }) =>
    props.buttonColor === "gray" ? BUTTON_COLOR_HOVER_GRAY : props.buttonColor};

  /* &:hover {
    background: ${(props: { buttonColor?: string }) =>
    props.buttonColor === "gray" ? BUTTON_COLOR_HOVER_GRAY : COLOR_BASE_6};
  } */
  min-width: ${buttonWidthDesktop};
`;
