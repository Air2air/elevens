import RowButton from "components/Button/rowButton";
import CalloutList from "components/Callout/callOutList";
import Spacer from "components/Spacer/spacer";

import TimeSeriesChart from "components/VX/recharts";

const ReportsPage = () => {
  return (
    <>

      <TimeSeriesChart />
      <RowButton buttonTo="/vision" buttonText="Vision" backgroundColor={1} />
      <Spacer height={40} backgroundColor={1} />
      <CalloutList jsonFile="/data/marketsContent.json" />
    </>
  );
};

export default ReportsPage;
