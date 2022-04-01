import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import "./NewsSection.css";
import Card from "../Cards/Card";
import { Grid } from "@mui/material";
import axios from "axios";
import { errorAlert } from "../../features/alerts/alerts";

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

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://ongapi.alkemy.org/api/news")
      .then((res) => {
        setNews(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setNews({ message: err.toString(), severity: "error" });
        errorAlert(err, "Invalid request", "Exit");
        setIsLoading(false);
      });
  }, []);

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
        {news.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.name}
            description={item.content}
            placeholder={item.placeholder}
          />
        ))}
      </Grid>
    </div>
  );
};

export default NewsSection;
