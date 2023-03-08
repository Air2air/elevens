import Spacer from "components/Spacer/spacer";
import ReportList from "components/Reports/reportList";


const pageData = "/data/fda/endpoints.json";

const ReportsPage = () => {
  return (
    <>
      <Spacer height={140} backgroundColor={1} />
      <ReportList jsonFile={pageData} />
    </>
  );
};

export default ReportsPage;
