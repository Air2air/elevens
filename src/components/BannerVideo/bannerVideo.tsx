import {
  COLOR_TEXT,
  CONTENT_WIDTH, 
  TEXT_OPACITY,
} from "../../styles/Constants";
import styled from "styled-components";
import VideoCallout from "../VideoCallout/videoCallout";
import TypeWriterEffect from "react-typewriter-effect";
import { AnimationOnScroll } from "react-animation-on-scroll";
import parse from "html-react-parser";

// const myRef = document.querySelector(".scrollable-div");

export const BannerVideo = ({
  pageTitle,
  pageDescription,
  pageVideo,
  overlayOpacity,
  overlayColor,
  textColor,
  typing,
  height,
}) => {

  const pageTitleParsed = parse(pageTitle);
  const pageDescriptionParsed = parse(pageDescription);

  return (
    <>
      <BannerVideoWrapper style={{ height: height }}>
        {pageVideo ? (
          <VideoCallout
            pageVideo={pageVideo}
            overlayOpacity={overlayOpacity}
            overlayColor={overlayColor}
            height={height}
          />
        ) : (
          ""
        )}
        <TextWrapper>
          <AnimationOnScroll animateIn="animate__fadeIn" delay={400}>
            <PageTitle style={{ color: textColor && textColor }}>
              {pageTitleParsed}
            </PageTitle>
            {typing ? (
              <TypeWriterParagraph
                textStyle={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 300,
                  fontSize: "1.5em",
                  lineHeight: "1.5em",
                  color: COLOR_TEXT,
                  opacity: TEXT_OPACITY,
                }}
                startDelay={1000}
                cursorColor={COLOR_TEXT}
                text={pageDescription}
                typeSpeed={1}
              />
            ) : (
              <PageDescription>{pageDescriptionParsed}</PageDescription>
            )}
          </AnimationOnScroll>
        </TextWrapper>
      </BannerVideoWrapper>
    </>
  );
};

const BannerVideoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
`;

const TextWrapper = styled.div`
  margin: 80px auto 0 auto;
  z-index: +1;
  height: auto;
  width: ${CONTENT_WIDTH};
  text-align: left;
`;

const PageTitle = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 100;
  font-size: 2.7em;
  margin-bottom: 0.8em;
  height: auto;
  text-align: left;
`;

const PageDescription = styled.div`
  color: ${COLOR_TEXT};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.5em;
  line-height: 1.3em;
  height: auto;
  text-align: left;
  opacity: ${TEXT_OPACITY};
`;

const TypeWriterParagraph = styled(TypeWriterEffect)`
  color: ${COLOR_TEXT};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.5em;
  line-height: 1.3em;
  height: auto;
  text-align: left;
  opacity: ${TEXT_OPACITY};
`;

export default BannerVideo;
