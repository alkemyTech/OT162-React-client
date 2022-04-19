import React from "react";
import Header from "./Header";
import CampaignSlider from "../../Components/Utilities/CampaignSlider";
import Content from "./Content";
import Footer from "./Footer";
import NewsletterForm from "../../features/newsletter/subscribeNewsletterForm";

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
      <CampaignSlider images={images} intervalInSec={5} showStepDots />
      <Content />
      <NewsletterForm />
      <Footer />
    </>
  );
};

export default SchoolCampaign;
