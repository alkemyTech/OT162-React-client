import React from 'react';
import { Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Header = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1920,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid 
        container 
        sx={{padding: 5, 
          justifyContent: 'space-between', 
          backgroundColor: {
            xs: '#fff', 
            sm: '#fff', 
            md: '#fff', 
            xs: '#fff', 
            xl: '#ff00008e'}}}>
        <Grid item 
          xs={12} 
          sm={6} 
          md={4} 
          sx={{ margin: 'auto', justifyContent: "center", alignItems: "center"}}>
          <img src='images/school-campaign/school-campaign-logo.png' height={150}/>
        </Grid>
        <Grid item 
          md={4} 
          sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center", alignItems: "center"}}>
          <h2>Juguetes por más sonrisas</h2>
        </Grid>
        <Grid item 
          sm={6} 
          md={4} 
          sx={{ display: {xs: "none", sm: "block"}, justifyContent: "center", alignItems: "center" }}>
          <img src='images/school-campaign/LOGO-SOMOS-MAS.png'/>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
 
export default Header;