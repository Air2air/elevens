import { BREAKPOINT_PX } from "../../styles/Constants";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FC } from "react";

type TitleProps = {
  titleText?: any;
};

export const TitleCentered: FC<TitleProps> = ({ titleText }) => (
  <TitleContainer animateIn="animate__fadeIn" delay={400}>
    <TitleStyled>{titleText}</TitleStyled>
  </TitleContainer>
);

const TitleContainer = styled(AnimationOnScroll)`
  text-align: center;
  width: 100%;
`;

const TitleStyled = styled.h1`
  margin: 0 auto 10px auto;
  text-align: center;

  font-weight: 300;

  @media (min-width: ${BREAKPOINT_PX}) {
    font-size: 2.4em;
  }
  @media (max-width: ${BREAKPOINT_PX}) {
    font-size: 1.7em;
  }
`;
