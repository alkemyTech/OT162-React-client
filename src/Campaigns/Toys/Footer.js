import React from "react";
import NewsletterForm from "../../features/newsletter/subscribeNewsletterForm";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div>
      <img src="/images/LogoToysCampaign.png" alt="logo" />

      <TwitterIcon color="" />
      <InstagramIcon />
      <FacebookRoundedIcon />

      <NewsletterForm />
    </div>
  );
};

export default Footer;
