import Spacer from "components/Spacer/spacer";
import ReportList from "components/Reports/reportList";

const ReportsPage = () => {
  return (
    <>
      <Spacer height={140} backgroundColor={1} />
      <ReportList jsonFile="/data/fda/endpoints.json" />
    </>
  );
};

export default ReportsPage;
