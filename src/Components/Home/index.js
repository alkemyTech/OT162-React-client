import axios from "axios";
import React, { useEffect, useState } from "react";
import rutas from "../../config/rutas";
import Carousel from "./Carousel";

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
      <Carousel slides={slides} background={"#90a4ae"} />{/* background is Carousel's backgroundColor  */}
    </div>
  );
};

export default Home;
