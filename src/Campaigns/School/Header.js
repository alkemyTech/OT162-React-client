import React from 'react';
import { Card, Grid } from '@mui/material';
import logoONG from "../../assets/img/logo-somos-mas.png";
import campaignLogo from "../../assets/img/logo-school-campaign.png";
import "../../styles/CampaingHeader.css";

const campaingSlogan = "Juntos en la vuelta al cole, somos más!"

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
          <h2 id="slogan">{campaingSlogan}</h2>
          <img id="ongLogo" src={logoONG}/>
        </Grid>
      </Card>
    </div>
  );
}
 
export default Header;