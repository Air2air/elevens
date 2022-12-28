import { useQuery } from "react-query";
import BannerVideo from "components/BannerVideo/bannerVideo";
import { COLOR_BASE } from "constants/index";
import Callout from "components/Callout/callOut";
import ChartCaseStudies from "components/Chart/CaseStudies/chartCaseStudies";

const dataSource = "data/dataCaseStudies.json";

const fetchData = async () => {
  const res = await fetch(dataSource);
  return res.json();
};

const CaseStudiesPage = () => {
  const { data, status } = useQuery("users", fetchData);

  const loopEndTime = 14000;

  return (
    <>
      {status === "error" && (
        <p style={{ color: "red" }}>Error fetching data</p>
      )}
      {status === "loading" && (
        <BannerVideo
          text="casestudies"
          pageVideo={776446335}
          overlayOpacity={0.4}
          overlayColor={COLOR_BASE}
          typing
          loopEndTime={loopEndTime}
        />
      )}
      {status === "success" && (
        <>
          <BannerVideo
            text="casestudies"
            pageVideo={776446335}
            overlayOpacity={0.4}
            overlayColor={COLOR_BASE}
            typing
            loopEndTime={loopEndTime}
          />
          {data.map((props, index) => (
            <div key={index}>
              <ChartCaseStudies
                loopEndTime={loopEndTime}
                data={props.practiceArea}
                backgroundColor={2}
              />
              <Callout {...props} />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default CaseStudiesPage;