import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import HomeTitle from "./HomeTitle";
import NewsList from "./NewsList";
import {GetSlides} from "../../Services/homeApiService";

const Home = () => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    GetSlides().then((res) => {
      setSlides(res);
    });
  }, []);

  return (
    <div>
      <HomeTitle />
      <Carousel slides={slides} background={"#90a4ae"} />
      {/* background is Carousel's backgroundColor  */}
      <NewsList />
    </div>
  );
};

export default Home;
