import CalloutList from "components/Callout/callOutList";
import Spacer from "components/Spacer/spacer";

import ChartList from "components/Recharts/chartList";

const ReportsPage = () => {
  return (
    <>
      <Spacer height={140} backgroundColor={1} />
      <ChartList jsonFile="/data/reportsChart.json" />
      <Spacer height={40} backgroundColor={1} />
      <CalloutList jsonFile="/data/marketsContent.json" />
    </>
  );
};

export default ReportsPage;
