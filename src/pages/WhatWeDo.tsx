import RowButton from "components/Button/rowButton";
import { BannerVideo } from "components/Banner/bannerVideo";
import Spacer from "components/Spacer/spacer";
import CalloutList from "components/Callout/callOutList";
import WhatWeDoChart from "components/Chart/Vision/WhatWeDo/chartWhatWeDo";
import Heading from "components/Heading/heading";
import Metatags from "components/Helmet/metatags";

const pageData = "/data/whatwedoPage.json";

const WhatWeDoPage = () => {
  return (
    <>
      <Metatags jsonFile={pageData} />
      <BannerVideo
        pageVideo={776449715}
        overlayOpacity={0.7}
        overlayColor={1}
      />
      <Heading jsonFile={pageData} />
      <WhatWeDoChart jsonFile={pageData} />
      <RowButton
        buttonTo="/casestudies"
        buttonText="Case Studies"
        backgroundColor={3}
      />
      <Spacer height={40} backgroundColor={3} />
      <CalloutList jsonFile={pageData} />
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
