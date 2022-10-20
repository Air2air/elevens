import Button from "../../components/Button/button";
import Chip from "../../components/Chip/chip";
const title = `BioTech PreSeed Stage`;
const subtitle = `optional Subtitle about BioTech`;
const text = `Mission statement Mission statement Mission statement Mission statement
        Mission statement Mission statement Mission statement Mission statement`;
const BioTechPreSeedPage = ({ nextPath, nextName, section }) => {
  return (
    <>
{section ? <Chip section={section} /> : ""}
<div className="wrapper">

<div className="content">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{text}</p>
      </div>

        <Button section={section} nextPath={nextPath} nextName={nextName} />      </div>
    </>
  );
};
export default BioTechPreSeedPage;
