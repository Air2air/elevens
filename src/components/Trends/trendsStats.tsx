import styled from "styled-components";
import { COLOR_TEXT } from "styles/Colors";
import { FONT_FAMILY_CONDENSED, FONT_FAMILY_DEFAULT } from "styles/Text";

const TrendsStats = (props) => {
  return (
    <>
      <StatsWrap>
        <TrendsCap>
          <Legend>Market</Legend>
          <Value>{props.cap}<span>b</span></Value>
        </TrendsCap>
        <TrendsCagr>
          <Legend>CAGR</Legend>
          <Value>{props.cagr}<span>%</span></Value>
        </TrendsCagr>
      </StatsWrap>
    </>
  );
};

export default TrendsStats;

const headerHeight = 90;

const StatsWrap = styled.div`
  height: ${headerHeight}px;
  width: 34%;
  display: flex;
`;

const TrendsCap = styled.div`
  display: flex;
  flex-direction: column;
  height: ${headerHeight}px;
  /* flex-grow: 1; */
  width:50%;
  text-align: center;
  margin-right: 12px;
  background: hsla(0, 0%, 1%, 0.2);
`;

const TrendsCagr = styled.div`
  display: flex;
  flex-direction: column;
  height: ${headerHeight}px;
  width:50%;
  text-align: center;
  background: hsla(0, 0%, 100%, 0.2);
  /* background: gold; */
`;


const Legend = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 45%;
  /* flex-grow: 1; */
  text-align: center;
  font-family: ${FONT_FAMILY_CONDENSED};
  text-transform: uppercase;
  font-size: .9em;
  opacity:.7;
  color:${COLOR_TEXT};
  /* background: blue; */
`;

const Value = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 55%;
  /* flex-grow: 1; */
  text-align: center;
  font-family: ${FONT_FAMILY_DEFAULT};
  font-weight: 500;
  text-transform: uppercase;
  font-size: 2em;
  color:${COLOR_TEXT};
  span {
    opacity:.6;
    padding-left: 5px;
    font-size: 0.6em;
    line-height: 2em;
  }
`;
