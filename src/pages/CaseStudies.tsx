import BannerVideo from "components/Banner/bannerVideo";
import RowButton from "components/Button/rowButton";
import Spacer from "components/Spacer/spacer";
import CalloutList from "components/Callout/callOutList";
import Heading from "components/Heading/heading";
import Metatags from "components/Helmet/metatags";

const pageData = "/data/casestudiesPage.json";

const CaseStudiesPage = () => {
  return (
    <>
      <Metatags jsonFile={pageData} />
      <BannerVideo
        pageVideo={776446335}
        overlayOpacity={0.4}
        overlayColor={1}
      />
      <Heading jsonFile={pageData} />
      <Spacer height={40} backgroundColor={2} />
      <RowButton buttonTo="/markets" buttonText="Markets" backgroundColor={2} />
      <Spacer height={40} backgroundColor={2} />
      <CalloutList jsonFile={pageData} />
      <Spacer height={40} backgroundColor={2} />
      <RowButton buttonTo="/markets" buttonText="Markets" backgroundColor={2} />
      <Spacer height={40} backgroundColor={2} />
    </>
  );
};

export default CaseStudiesPage;
