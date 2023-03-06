import { ChartSkeleton } from "components/Chart/chartComponents";
import { FetchData } from "fetch/fetch";
// import { TrendsProps } from "./interface";
import TrendsItem from "./trendsItem";

const TrendsList = ({ jsonFile }) => {
  const { data, loading, error } = FetchData({
    file: jsonFile,
  });
  if (loading) {
    return <ChartSkeleton />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data); // Check if data is being received as expected
  console.log(data.content); // Check if data.content exists
  
  return (
    <>
      {data && data.content && data.content.length > 0 ? (
        data.content.map((props, index) => {
          return <TrendsItem {...props} key={index} />;
        })
      ) : (
        <div style={{ color: "white" }}>Data Fetch error in TrendsList component</div>
      )}
    </>
  );
  
};

export default TrendsList;