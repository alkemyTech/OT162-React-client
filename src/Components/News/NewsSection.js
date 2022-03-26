import React from "react";
import Title from "../Title/Title";

const CARD_COMPONENT = [
  "First card component",
  "second card component",
  "third card component",
];
const newsSection = () => {
  return (
    <div>
      <Title
        title="Novedades"
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        }
        img={
          "https://site.groupe-psa.com/content/uploads/sites/3/2016/12/white-background-2.jpg"
        }
      />
      {CARD_COMPONENT.map((card) => (
        <div>{card}</div>
      ))}
    </div>
  );
};

export default newsSection;
