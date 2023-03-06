import { useEffect, useState } from "react";
import {
  HeadingContainer,
  TitleContainer,
  TitleText,
  SubheadContainer,
  SubheadText,
} from "./headingComponents";

interface Heading {
  id: number;
  title: string;
  subhead: string;
}
const Heading = ({ jsonFile }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    fetch(jsonFile)
      .then((res) => res.json())
      .then((data) => setHeadings(data.headings))
      .catch((error) =>
        console.error("Error fetching data from JSON file:", error)
      );
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 6000);
    return () => clearInterval(intervalId);
  }, [headings]);

  return (
    <>
      {headings.map((heading, index) => (
        <HeadingContainer
          key={heading.id}
          style={{
            display: index === currentIndex ? "block" : "none",
          }}
        >
          <TitleContainer>
            <TitleText className="animate__animated animate__fadeInDown">
              {heading.title}
            </TitleText>
          </TitleContainer>
          <SubheadContainer>
            <SubheadText className="animate__animated animate__fadeInUp animate__delay-1s">
              {heading.subhead}
            </SubheadText>
          </SubheadContainer>
        </HeadingContainer>
      ))}
    </>
  );
};


export default Heading;
