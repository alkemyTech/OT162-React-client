import React, { useEffect } from "react";
import footerStyle from "../../assets/styles/footerStyle";
import { makeStyles } from '@mui/styles';
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Get } from "../../Services/publicApiService";
import rutas from "../../config/rutas"


const useStyles = makeStyles(footerStyle);
export default function Footer() {
  const classes = useStyles();

  useEffect(() => {
Get(rutas.GET_SPECIFIC_ORGANIZATION,1).then(res => console.log(res))
  }, [])
  

  return (
    <Card
      className={classes.root}
      style={{
        background:
          "linear-gradient(0deg, rgba(93,131,174,1) 7%, rgba(191,205,219,1) 47%, rgba(208,212,239,1) 76%)",
        minHeight: "150px",
        marginTop: "20px",
        bottom: 0,
        position: "relative",
      }}
    >
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Grid item xs={12} md={3}>
            <img
              src={"logo"}
              alt="Nombre ONG"
              // class="responsive"
              style={{ width: "80%", marginTop: "20px" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.textoInf}>
              <a
                href={""}
                target="_blank"
                rel="noreferrer"
                style={{ color: "black", textDecoration: "none" }}
              >
                Items de navegacion
              </a>
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" className={classes.textoInf}>
              <a
                href={""}
                target="_blank"
                rel="noreferrer"
                style={{ color: "black", textDecoration: "none" }}
              >
                Redes Sociales
              </a>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}