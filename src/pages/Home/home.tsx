import setBodyColor from "../../utils/setBodyColor";
import { COLOR_BASE } from "../../styles/Constants";
import OrgsCallout from "../../components/OrgsCallout/orgsCallOut";
import BannerCompress from "components/BannerCompress/Wrapper/bannerCompress";
import Button from "components/Button/button";
import Container from "components/Container/container";


const HomePage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerCompress />
      <Container>
        <Button buttonTo="/practice_areas" buttonText="What we do" />
      </Container>
      <OrgsCallout />
    </>
  );
};

export default HomePage;
