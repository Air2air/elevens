import Callout from "./callOut";
import { FetchData } from "fetch/fetch";
import {
  CallOutInner,
  CalloutParagraph,
  CalloutSkeleton,
} from "./calloutComponents";
import Container from "components/Container/container";
import { TitleCallout } from "components/Title/titleCallout";
import { AnimationOnScroll } from "react-animation-on-scroll";
import parse from "html-react-parser";

const CalloutList = ({ jsonFile }) => {
  const { data, loading, error } = FetchData({
    file: jsonFile,
  });
  if (loading) {
    return <CalloutSkeleton />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {data.page && data.page.length > 0 ? (
        data.page.map((props, index) => {
          return (
              <Container {...props} key={index}>
                <CallOutInner>
                  <TitleCallout title={props.title} />
                  <AnimationOnScroll
                    animateIn="animate__fadeIn"
                    delay={0}
                    offset={60}
                  >
                    <CalloutParagraph>
                      {parse(props.description)}
                    </CalloutParagraph>
                  </AnimationOnScroll>
                </CallOutInner>
              </Container>
          );
        })
      ) : (
        <div style={{ color: "white" }}>
          Data Fetch error in CalloutList component
        </div>
      )}
    </>
  );
};

export default CalloutList;
