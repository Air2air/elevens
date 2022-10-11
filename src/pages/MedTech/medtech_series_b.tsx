import { Link } from "react-router-dom";
const title = `MedTech Series B Stage`;
const subtitle = `Subtitle about MedTech`;
const text = `Mission statement Mission statement Mission statement Mission statement
        Mission statement Mission statement Mission statement Mission statement`;
const MedTechSeriesBPage = ({ nextPath, nextName }) => {
  return (
    <>
<div className="wrapper">
<div className="content">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{text}</p>
      </div>
<Link className="btn" to={nextPath}>
        {nextName}
      </Link>
</div>
    </>
  );
};
export default MedTechSeriesBPage;
