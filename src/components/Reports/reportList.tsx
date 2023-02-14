import { ChartSkeleton } from "components/Chart/chartComponents";
import { FetchData } from "fetch/fetch";
import { ReportProps } from "./interface";
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
        data.map((props: ReportProps, index) => {
          return <ReportItem {...props} key={index} />;
        })
      ) : (
        <div style={{ color: "white" }}>Data Fetch error in Page component</div>
      )}
    </>
  );
};

export default ReportList;
