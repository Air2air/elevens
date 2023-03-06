import RowButton from "components/Button/rowButton";
import { BannerVideo } from "components/Banner/bannerVideo";
import Spacer from "components/Spacer/spacer";
import CalloutList from "components/Callout/callOutList";
import WhatWeDoChart from "components/Chart/Vision/WhatWeDo/chartWhatWeDo";
import Heading from "components/Heading/heading";
import Metatags from "components/Helmet/metatags";

const WhatWeDoPage = () => {
  return (
    <>
      <Metatags jsonFile="/data/whatwedoPage.json" />
      <BannerVideo
        pageVideo={776449715}
        overlayOpacity={0.7}
        overlayColor={1}
      />
      <Heading jsonFile="/data/whatwedoPage.json" />
      <WhatWeDoChart jsonFile="/data/whatwedoPage.json" />
      <RowButton
        buttonTo="/casestudies"
        buttonText="Case Studies"
        backgroundColor={3}
      />
      <Spacer height={40} backgroundColor={3} />
      <CalloutList jsonFile="/data/whatwedoContent.json" />
      <Spacer height={40} backgroundColor={2} />
      <RowButton
        buttonTo="/casestudies"
        buttonText="Case Studies"
        backgroundColor={2}
      />
      <Spacer height={40} backgroundColor={2} />
    </>
  );
};

export default WhatWeDoPage;
