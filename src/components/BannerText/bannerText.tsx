import {
  BREAKPOINT,
  COLOR_TEXT,
  TEXT_OPACITY,
} from "styles/Constants";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Typewriter from "typewriter-effect";
import { FC } from "react";

type BannerTextProps = {
  text?: string;
  typing: boolean;
};

export const BannerText: FC<BannerTextProps> = ({ text, typing }) => (
  <AnimationOnScroll animateIn="animate__fadeIn" delay={400}>
    <TypeWriterWrapper>
      {typing ? (
        <>
          <Typewriter
            options={{
              autoStart: true,
              delay: 10,
              cursor: "",
              strings: text,
              skipAddStyles: true,
              devMode: false,
              deleteSpeed: 1000000,
            }}
          />
        </>
      ) : (
        { text }
      )}
    </TypeWriterWrapper>
  </AnimationOnScroll>
);

const TypeWriterWrapper = styled.div`
  .Typewriter__wrapper {
    color: ${COLOR_TEXT};
    font-family: "Roboto", sans-serif;
    height: auto;
    text-align: left;
    opacity: ${TEXT_OPACITY};
    text-shadow: 0 0 3px #000;
    @media (min-width: ${BREAKPOINT}px) {
      font-size: 1.5em;
      line-height: 1.4em;
    }
    @media (max-width: ${BREAKPOINT}px) {
      font-size: 1.2em;
      font-weight: 400;
      line-height: 1.5em;
    }
  }
`;
