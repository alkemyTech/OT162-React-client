import React from "react";
import Header from "./Header";
import CampaignSlider from "../../Components/Utilities/CampaignSlider";
import ToysContent from '../Toys/ToysContent'

import Footer from "./Footer";

const ToysCampaign = () => {
  const images = [
    {
      label: "Play Time!",
      imgPath: "./images/Juguetes1.png",
    },
    {
      label: "Wanna Play?",
      imgPath: "./images/Juguetes2.jpg",
    },
    {
      label: "The same pic lol",
      imgPath: "./images/Juguetes2.jpg",
    },
  ];
  return (
    <>
      <Header />
      <CampaignSlider images={images} intervalInSec={5} showStepDots />
      <ToysContent /> 
      <Footer />
    </>
  );
};

export default ToysCampaign;
