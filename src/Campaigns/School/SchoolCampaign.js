import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Content from "./Content";
import Footer from "./Footer";

const SchoolCampaign = () => {
  const images = [
    {
      label: "Back to School",
      imgPath: "./images/back2school.png",
    },
    {
      label: "Ready for school?",
      imgPath: "./images/school2.png",
    },
    {
      label: "The same pic lol",
      imgPath: "./images/school2.png",
    },
  ];
  return (
    <>
      <Header />
      <Slider images={images} intervalInSec={5} showStepDots />
      <Content />
      <Footer />
    </>
  );
};

export default SchoolCampaign;
