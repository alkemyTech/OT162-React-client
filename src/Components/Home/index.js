import axios from "axios";
import React, { useEffect, useState } from "react";
import rutas from "../../config/rutas";
import Carousel from "./Carousel";
import HomeTitle from "./HomeTitle";
import NewsList from "./NewsList";
const Home = () => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    axios
      .get(rutas.GET_SLIDES_URL)
      .then((res) => {
        console.log(res.data.data);
        setSlides(res.data.data);
      })
      .catch((err) => {
        console.log(err);
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
