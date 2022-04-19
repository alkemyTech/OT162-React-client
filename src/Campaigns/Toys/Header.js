import React from 'react';
import { Card, Grid } from '@mui/material';
import logoONG from "../../assets/img/logo-somos-mas.png";
import campaignLogo from "../../assets/img/logo-toys-campaign.png";

const imageStyle = {
  width: '150px',
}

const campaingSlogan = "Slogan de campaña"

const Header = () => {
  return (
    <div>
      <Card>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start">
          <img src={campaignLogo} style={imageStyle}/>
          <img src={logoONG} style={imageStyle}/>
          <h2>{campaingSlogan}</h2>
        </Grid>
      </Card>
    </div>
  );
}
 
export default Header;