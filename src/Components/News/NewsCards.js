import React, { useState, useEffect, Fragment } from "react";
import "./NewsSection.css";
import Card from "../Cards/Card";
import axios from "axios";
import { errorAlert } from "../../features/alerts/alerts";
import Loading from "../Utilities/Loading";
import { Box } from "@mui/system";
import { TextField, Grid } from "@mui/material";

const NewsCards = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newsSearch, setNewsSearch] = useState("");
  const baseRoute = process.env.REACT_APP_NEWS_ROUTE;

  // aplicar debounce!!!

  useEffect(() => {
    if (newsSearch.length == 0) {
      setIsLoading(true);
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
      setIsLoading(true);
      const delayDebounceFn = setTimeout(() => {
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
      }, 3000);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [newsSearch]);

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1, alignContent: "center" }}>
        <TextField
          helperText="Min 3 caracteres"
          label="Buscar novedades"
          variant="filled"
          onChange={(e) => {
            setNewsSearch(e.target.value);
          }}
          value={newsSearch}
        />
        <Grid container spacing={2}>
          {news.length == 0 && <p>No se encontraron novedades</p>}
          {isLoading && <Loading />}

          {news.map((item, index) => (
            <Grid
              key={index}
              item
              justifyContent="space-evenly"
              alignItems="stretch"
              xs={4}
              md={4}
              sx={{
                margin: 3,
                gap: "2em 0",
                maxWidth: 1400,
                margin: "0 auto",
                padding: "0 2em",
              }}
            >
              <Card
                key={item.id}
                image={item.image}
                title={item.name}
                description={item.content}
                placeholder={item.placeholder}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fragment>
  );
};

export default NewsCards;
