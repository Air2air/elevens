import { FetchData } from "fetch/fetch";
import { ChartSkeleton } from "./chartComponents";
import ChartItem from "./chartItem";

const ChartList = ({ jsonFile }) => {
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
          return <ChartItem {...props} key={index} />;
        })
      ) : (
        <div style={{ color: "white" }}>Data Fetch error in Page component</div>
      )}
    </>
  );
};

export default ChartList;
