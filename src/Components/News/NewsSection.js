import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import "./NewsSection.css";
import Card from "../Cards/Card";
import { Grid } from "@mui/material";
import axios from "axios";
import { errorAlert } from "../../features/alerts/alerts";
import Loading from "../Utilities/Loading";

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
      {isLoading && <Loading />}
      {!isLoading && (
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
      )}
    </div>
  );
};

export default NewsSection;
