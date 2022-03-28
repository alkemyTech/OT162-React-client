import React from "react";
import Title from "../Title/Title";
import "./NewsSection.css";
// import Card from "../Cards/Cars.js"; //add Card component when it's merged

const CARD_DUMMY_DATA = [
  {
    image:
      "https://st3.depositphotos.com/5080845/15395/i/1600/depositphotos_153952346-stock-photo-aquarium-yawning-gold-fish.jpg",
    title: "First card component",
    description: "Alguna descripción",
    placeholder: "Algúnplaceholder",
  },
  {
    image:
      "https://st3.depositphotos.com/5080845/15395/i/1600/depositphotos_153952346-stock-photo-aquarium-yawning-gold-fish.jpg",
    title: "Second card component",
    description: "Alguna descripción 2",
    placeholder: "Algún placeholder 2",
  },
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
      <div className="cardsContainer">
        {CARD_DUMMY_DATA.map((card) => (
          <div>{card.title}</div> //Change the div component to the Card component and pass the props
          // <Card
          //   image={card.image}
          //   title={card.title}
          //   description={card.description}
          //   placeholder={card.placeholder}
          // />
        ))}
      </div>
    </div>
  );
};

export default newsSection;
