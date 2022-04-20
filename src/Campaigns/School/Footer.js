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
import Loading from "../../Components/Utilities/Loading";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles(footerStyle);
export default function Footer() {
  const classes = useStyles();

  const [organization, setOrganization] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  console.log(matches);

  const navegationItems = [
    {
      name: "Juguetes",
      src: "/toys-campaign",
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
    Get("organization", 1).then((res) => {
      setOrganization(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Card
        className={classes.root}
        style={{
          background: "#1cabe2",
          // minHeight: "130px",
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
            alignItems={matches ? "flex-start" : "center"}
          >
            <Grid item xs={6} xl={3}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item xs={12} md={3}>
                  <img
                    src={logoONG}
                    alt={organization.name}
                    // class="responsive"
                    style={{ width: "auto" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={9}
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  <Typography
                    className={classes.textoInf}
                    style={{
                      fontWeight: "bold",
                      // padding: "10px",
                      fontSize: "17px",
                    }}
                  >
                    <a
                      href={"/"}
                      rel="noreferrer"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {organization.name}
                    </a>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6} xl={6}>
              <Typography
                variant="h5"
                className={classes.textoInf}
                style={{
                  fontWeight: "bold",
                  padding: "10px",
                  fontSize: "17px",
                }}
              >
                Redes Sociales
              </Typography>
              {RedesSociales.map((element) => (
                <Typography variant="h6">
                  <a
                    href={element.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <Button
                      endIcon={element.icon}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {matches ? element.name : ""}
                    </Button>
                  </a>
                </Typography>
              ))}
            </Grid>
            <Grid
              item
              xl={3}
              sx={{
                display: {
                  xl: "block",
                  lg: "none",
                  md: "none",
                  sm: "none",
                  xs: "none",
                },
              }}
            >
              <Typography
                variant="h5"
                className={classes.textoInf}
                style={{
                  fontWeight: "bold",
                  padding: "10px",
                  fontSize: "17px",
                }}
              >
                Otras Campañas
              </Typography>
              {navegationItems.map((element) => (
                <Typography variant="h6">
                  <Link to={element.src} className={classes.textoInf}>
                    {element.name}
                  </Link>
                </Typography>
              ))}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Loading open={isLoading} />
    </>
  );
}
