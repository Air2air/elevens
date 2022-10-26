
import styled from "styled-components";

const ImageCallout = ({ pageImage, overlayOpacity, overlayColor, height }) => {


const backgroundImage = "url(/images/content/" + pageImage + ")"

  return (
    <>
      <ImageWrapper style={{ height: height, backgroundImage: backgroundImage}}>
      </ImageWrapper>
      <BannerImageOpacityOverlay
        overlayOpacity={overlayOpacity}
        overlayColor={overlayColor}
        height={height}
      />
    </>
  );
};

const BannerImageOpacityOverlay = ({ overlayOpacity, overlayColor, height }) => {
  return (
    <>
      <Overlay
        style={{
          opacity: overlayOpacity,
          background: overlayColor,
          height: height,
        }}
      />
    </>
  );
};

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  background-size:cover
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export default ImageCallout;