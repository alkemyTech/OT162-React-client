import React from 'react';
import { Card, Grid } from '@mui/material';
import logoONG from "../../assets/img/logo-somos-mas.png";
import campaignLogo from "../../assets/img/logo-toys-campaign.png";
import "../../styles/ToysCampaingHeader.css"

const campaingSlogan = "Slogan de campaña"

const Header = () => {
  return (
    <div>
      <Card>
        <Grid
          className="CampaingHeader"
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start">
          <img id="campaingLogo" src={campaignLogo}/>
          <img id="ongLogo" src={logoONG}/>
          <h2 id="slogan">{campaingSlogan}</h2>
        </Grid>
      </Card>
    </div>
  );
}
 
export default Header;