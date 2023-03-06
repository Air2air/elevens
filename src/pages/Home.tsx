import RowButton from "components/Button/rowButton";
import BannerVideo from "components/Banner/bannerVideo";
import Spacer from "components/Spacer/spacer";
import HomeChart from "components/Chart/Home/chartHome";
import Heading from "components/Heading/heading";
import Metatags from "components/Helmet/metatags";
import OrgsCallout from "components/OrgsCallout/orgsCallOut";

const HomePage = () => {
  return (
    <>
      <Metatags jsonFile="/data/homePage.json" />
      <BannerVideo
        pageVideo={776443340}
        overlayOpacity={0.1}
        overlayColor={1}
      />
      <Heading jsonFile="/data/homePage.json" />
      <HomeChart jsonFile="/data/homePage.json" />
      <RowButton
        buttonTo="/whatwedo"
        buttonText="What we do"
        backgroundColor={2}
      />
      <Spacer height={40} backgroundColor={2} />
      <OrgsCallout jsonFile="/data/orgsContent.json" />
    </>
  );
};

export default HomePage;
