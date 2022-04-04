import React from "react";
import Title from "../Title/Title";
import "./NewsSection.css";
import Card from "../Cards/Card";
import { Grid } from "@mui/material";

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
  {
    image:
      "https://st3.depositphotos.com/5080845/15395/i/1600/depositphotos_153952346-stock-photo-aquarium-yawning-gold-fish.jpg",
    title: "Third card component",
    description: "Alguna descripción 3",
    placeholder: "Algún placeholder 3",
  },
  {
    image:
      "https://st3.depositphotos.com/5080845/15395/i/1600/depositphotos_153952346-stock-photo-aquarium-yawning-gold-fish.jpg",
    title: "Fourth card component",
    description: "Alguna descripción 4",
    placeholder: "Algún placeholder 4",
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
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ margin: 3 }}
      >
        {CARD_DUMMY_DATA.map((card) => (
          <Card
            image={card.image}
            title={card.title}
            description={card.description}
            placeholder={card.placeholder}
          />
        ))}
      </Grid>
    </div>
  );
};

export default newsSection;
