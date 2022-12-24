import ChartMarkets from "components/Chart/Markets/chartMarkets";
import Spacer from "components/Spacer/spacer";
import RowButton from "components/Button/rowButton";
import { COLOR_BASE } from "constants/index";
import BannerVideo from "components/BannerVideo/videoBanner";

const MarketsPage = () => {
  return (
    <>
      <BannerVideo
        text="markets"
        pageVideo={766731362}
        overlayOpacity={0.1}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      <ChartMarkets backgroundColor={1} />
      <RowButton buttonTo="/vision" buttonText="Vision" />
      <Spacer height={60} />
    </>
  );
};

export default MarketsPage;
