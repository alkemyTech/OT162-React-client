import React, { useEffect, useState } from "react";
import footerStyle from "../../assets/styles/footerStyle";
import { makeStyles } from "@mui/styles";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Link as LinkM,
  Typography,
} from "@mui/material";
import { Get } from "../../Services/publicApiService";
import logoONG from "../../assets/img/logo-somos-mas.png";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

const useStyles = makeStyles(footerStyle);
export default function Footer() {
  const classes = useStyles();

  const [organization, setOrganization] = useState({});

  const navegationItems = [
    {
      name: "Sección de Novedades",
      src: "/Novedades",
    },
    {
      name: "Actividades realizadas",
      src: "/actividades",
    },
    {
      name: "Contactanos!",
      src: "/contacto",
    },
    {
      name: "Miembros de Somos Mas!",
      src: "/miembros",
    },
    {
      name: "Contribuye con tu donacion!",
      src: "/donar",
    },
  ];

  const RedesSociales = [
    {
      name: "Facebook",
      icon: <Facebook />,
      url: organization.facebook_url,
    },
    {
      name: "LinkedIn",
      icon: <LinkedIn />,
      url: organization.linkedin_url,
    },
    {
      name: "Instagram",
      icon: <Instagram />,
      url: organization.instagram_url,
    },
    {
      name: "Twitter",
      icon: <Twitter />,
      url: organization.twitter_url,
    },
  ];

  useEffect(() => {
    Get(`${process.env.REACT_APP_ORGANIZATION_ROUTE}`, 1).then((res) =>
      setOrganization(res)
    );
  }, []);

  console.log(organization);

  return (
    <Card
      className={classes.root}
      style={{
        background: "#1cabe2",
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
          <Grid item xs={12} md={3} style={{ marginTop: "20px" }}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item xs={12} md={5}>
                <img
                  src={logoONG}
                  alt={organization.name}
                  // class="responsive"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography
                  className={classes.textoInf}
                  style={{
                    fontWeight: "bold",
                    padding: "10px",
                    fontSize: "17px",
                  }}
                >
                  {organization.name}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              className={classes.textoInf}
              style={{ fontWeight: "bold", padding: "10px", fontSize: "17px" }}
            >
              Descrubre
            </Typography>
            {navegationItems.map((element) => (
              <Typography variant="h6">
                <Link to={element.src} className={classes.textoInf}>
                  {element.name}
                </Link>
              </Typography>
            ))}
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography
              variant="h5"
              className={classes.textoInf}
              style={{ fontWeight: "bold", padding: "10px", fontSize: "17px" }}
            >
              Redes Sociales
            </Typography>
            {RedesSociales.map((element) => (
              <Typography variant="h6">
                <Button
                  endIcon={element.icon}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <a
                    href={element.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {element.name}
                  </a>
                </Button>
              </Typography>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
