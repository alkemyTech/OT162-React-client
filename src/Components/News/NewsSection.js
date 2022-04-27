import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import "./NewsSection.css";
import Card from "../Cards/Card";
import { Container, Grid, TextField, Box } from "@mui/material";
import axios from "axios";
import { errorAlert } from "../../features/alerts/alerts";
import Loading from "../Utilities/Loading";
import LastEvent from "./LastEvent";

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newsSearch, setNewsSearch] = useState("");
  const baseRoute = process.env.REACT_APP_NEWS_ROUTE;

  useEffect(() => {
    setIsLoading(true);
    if (newsSearch.length <= 2) {
      axios
        .get(baseRoute)
        .then((res) => {
          setNews(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setNews({ message: err.toString(), severity: "error" });
          errorAlert(err, "Invalid request", "Exit");
          setIsLoading(false);
        });
    } else {
      axios
        .get(`${baseRoute}? search=${newsSearch}`)
        .then((res) => {
          setNews(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setNews({ message: err.toString(), severity: "error" });
          errorAlert(err, "Invalid request", "Exit");
          setIsLoading(false);
        });
    }
  }, [newsSearch]);

  console.log(newsSearch);
  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading && (
        <div>
          <Title
            title="Novedades"
            text={"Enterate de todas las novedades!"}
            img={"./images/novedadesBackground.jpg"}
          />
          <Container>
            <Box>
              <TextField
                helperText="Min 3 caracteres"
                label="Buscar novedades"
                variant="filled"
                onChange={(e) => {
                  setNewsSearch(e.target.value);
                }}
                value={newsSearch}
              />
            </Box>
            {news.length == 0 && <p>No se encontraron novedades</p>}
            <Grid
              container
              justifyContent="space-evenly"
              alignItems="stretch"
              sx={{
                margin: 3,
                gap: "2em 0",
                maxWidth: 1400,
                margin: "0 auto",
                padding: "0 2em",
              }}
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
          </Container>
        </div>
      )}
      <LastEvent />
    </div>
  );
};

export default NewsSection;

// https://site.groupe-psa.com/content/uploads/sites/3/2016/12/white-background-2.jpg
