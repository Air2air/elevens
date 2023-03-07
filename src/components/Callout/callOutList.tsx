import Callout from "./callOut";
import { FetchData } from "fetch/fetch";
import { CalloutSkeleton } from "./calloutComponents";

const CalloutList = ({ jsonFile }) => {
  const { data, loading, error } = FetchData({
    file: jsonFile,
  });
  if (loading) {
    return <CalloutSkeleton />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {data.content && data.content.length > 0 ? (
        data.content.map((props, index) => {
          return <Callout {...props} key={index} />;
        })
      ) : (
        <div style={{ color: "white" }}>
          Data Fetch error in CalloutList component
        </div>
      )}
    </>
  );
};

export default CalloutList;
