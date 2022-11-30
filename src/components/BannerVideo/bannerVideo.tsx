import {
  BANNER_HEIGHT_DESKTOP,
  BANNER_HEIGHT_MOBILE,
  BANNER_PADDING_TOP_DESKTOP,
  BANNER_PADDING_TOP_MOBILE,
  BANNER_CONTENT_HEIGHT_DESKTOP,
  BANNER_CONTENT_HEIGHT_MOBILE,
  BREAKPOINT,
  CONTENT_WIDTH_DESKTOP,
  CONTENT_WIDTH_MOBILE,
} from "styles/Constants";
import styled from "styled-components";
import VideoCallout from "./../VideoCallout/videoCallout";
import parse from "html-react-parser";
import { BannerText } from "./../BannerText/bannerText";
import { TitleBanner } from "./../Title/titleBanner";
import { BannerVideoProps } from "api/interfaces";

export const BannerVideo = (props: BannerVideoProps) => {
  const titleParsed = parse(props.title);

  return (
    <>
      <BannerVideoWrapper>
        {props.pageVideo ? (
          <VideoCallout
            pageVideo={props.pageVideo}
            overlayOpacity={props.overlayOpacity}
            overlayColor={props.overlayColor}
            loadingImage={props.loadingImage}
          />
        ) : (
          ""
        )}
        <TextWrapper>
          <TitleBanner title={titleParsed} color={props.color} />
          <BannerText typing={props.typing} text={props.text} />
        </TextWrapper>
      </BannerVideoWrapper>
    </>
  );
};



const BannerVideoWrapper = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  @media (min-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_DESKTOP}px;
  }
  @media (max-width: ${BREAKPOINT}px) {
    height: ${BANNER_HEIGHT_MOBILE}px;
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  z-index: +1;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${BREAKPOINT}px) {
    top: ${BANNER_PADDING_TOP_DESKTOP}px;
    height: ${BANNER_CONTENT_HEIGHT_DESKTOP}px;
    width: ${CONTENT_WIDTH_DESKTOP};
  }
  @media (max-width: ${BREAKPOINT}px) {
    top: ${BANNER_PADDING_TOP_MOBILE}px;
    height: ${BANNER_CONTENT_HEIGHT_MOBILE}px;
    width: ${CONTENT_WIDTH_MOBILE};
  }
  /* background: gold; */
`;

export default BannerVideo;
