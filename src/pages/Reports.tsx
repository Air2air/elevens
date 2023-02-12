import Spacer from "components/Spacer/spacer";
import ReportList from "components/Reports/reportList";
import ChartList from "components/Recharts/chartList";

const ReportsPage = () => {
  return (
    <>
      <Spacer height={140} backgroundColor={1} />
      <ChartList jsonFile="/data/reportsData.json" />
      <ReportList jsonFile="/data/fda/endpoints.json" />
    </>
  );
};

export default ReportsPage;
