import { ChartSkeleton } from "components/Recharts/chartComponents";
import { FetchData } from "fetch/fetch";
import ReportItem from "./reportItem";

const ReportList = ({ jsonFile }) => {
  const { data, loading, error } = FetchData({
    file: jsonFile,
  });
  if (loading) {
    return <ChartSkeleton />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <>
      {data && data.length > 0 ? (
        data.map((props, index) => {
          return <ReportItem {...props} key={index} />;
        })
      ) : (
        <div style={{ color: "white" }}>Data Fetch error in Page component</div>
      )}
    </>
  );
};

export default ReportList;
