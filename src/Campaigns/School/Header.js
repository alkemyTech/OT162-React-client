import React from 'react';
import { Grid } from '@mui/material';

const Header = () => {
  return (
    <Grid container sx={{padding: 5, justifyContent: 'space-between'}}>
      <Grid item xs={12} sm={6} md={4} sx={{ margin: 'auto', justifyContent: "center", alignItems: "center"}}>
        <img src='images/school-campaign/school-campaign-logo.png' height={150}/>
      </Grid>
      <Grid item md={4} sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center", alignItems: "center"}}>
        <h2>Juguetes por más sonrisas</h2>
      </Grid>
      <Grid item sm={6} md={4} sx={{ display: {xs: "none", sm: "block"}, justifyContent: "center", alignItems: "center" }}>
        <img src='images/school-campaign/LOGO-SOMOS-MAS.png'/>
      </Grid>
    </Grid>
  );
}
 
export default Header;