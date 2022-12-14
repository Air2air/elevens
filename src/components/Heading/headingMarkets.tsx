
import { useEffect, useState } from "react";
import { LoopEndTime } from "components/Chart/Markets/chartMarkets";
import Container from "components/Container/container";
import {
  Wrapper,
  TextSection,
  TitleHeading,
} from "./Components/headingComponents";
import { HeadingSubHead } from "components/Heading/Components/headingSubHead";

const HeadingMarkets = (props: { backgroundColor?: any }) => {
  const [textFasterOpacity, setTextFasterOpacity] = useState(0);
  const [textTimelineOpacity, setTextTimelineOpacity] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setTextFasterOpacity(0);
    setTextTimelineOpacity(0);

    const textFasterStart = setTimeout(() => {
      setTextFasterOpacity(1);
    }, 1000);

    const textFasterEnd = setTimeout(() => {
      setTextFasterOpacity(0);
    }, 5000);

    const textTimelineStart = setTimeout(() => {
      setTextTimelineOpacity(1);
    }, 6000);

    const textTimelineEnd = setTimeout(() => {
      setTextTimelineOpacity(0);
    }, 9000);


    const loopIsOver = setTimeout(() => {
      setCount(count + 1);
    }, LoopEndTime);

    return () => {
      clearTimeout(textFasterStart);
      clearTimeout(textFasterEnd);
      clearTimeout(textTimelineStart);
      clearTimeout(textTimelineEnd);
      clearTimeout(loopIsOver);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <>
      <Container backgroundColor={props.backgroundColor}>
        <Wrapper>
          <TextSection style={{ opacity: textFasterOpacity }}>
            <TitleHeading title="Healthcare AI Markets" />
            <HeadingSubHead text="Elevens supports Healthtech ventures from early private stages through initial public offering (IPO)..." />
          </TextSection>
          <TextSection style={{ opacity: textTimelineOpacity }}>
            <TitleHeading title="Healthcare AI Markets" />
            <HeadingSubHead text="...and assists public companies to identify innovative private sector partners" />
          </TextSection>
        </Wrapper>
      </Container>
    </>
  );
};


export default HeadingMarkets;
