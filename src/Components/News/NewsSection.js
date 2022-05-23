import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import "./NewsSection.css";
import { Container, Grid, TextField, Box } from "@mui/material";
import axios from "axios";
import { errorAlert } from "../../features/alerts/alerts";
import Loading from "../Utilities/Loading";
import LastEvent from "./LastEvent";
import NewsCards from "./NewsCards";
import { Navigate } from "react-router-dom";

const NewsSection = () => {
  // Se que no esta bien esto pero es para facilitar el testing y no implementarlo por completo
  ///////////////////////////////////////////////////////////////////////////////////////////////
  if (localStorage.getItem("token") === null) {
    return <Navigate to="/login" />;
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      <div>
        <Title
          title="Novedades"
          text={"Enterate de todas las novedades!"}
          img={"./images/novedadesBackground.jpg"}
        />

        <NewsCards />
      </div>

      <LastEvent />
    </div>
  );
};

export default NewsSection;

// https://site.groupe-psa.com/content/uploads/sites/3/2016/12/white-background-2.jpg
