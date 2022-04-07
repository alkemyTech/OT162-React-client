import axios from "axios";
import React, { useEffect, useState } from "react";
import rutas from "../../config/rutas";
import Loading from "../Utilities/Loading";
import Carousel from "./Carousel";
import HomeTitle from "./HomeTitle";
import NewsList from "./NewsList";
import { errorAlert } from "../../features/alerts/alerts";

const Home = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(rutas.GET_SLIDES_URL)
      .then((res) => {
        console.log(res.data.data);
        setSlides(res.data.data);
      })
      .catch((err) => {
        errorAlert(
          "Error",
          "An error has occurred while getting data from server.",
          "Ok"
        );
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <HomeTitle />
      {loading ? (
        <Loading />
      ) : (
        <Carousel slides={slides} background={"#90a4ae"} />
      )}
      {/* background is Carousel's backgroundColor  */}
      <NewsList />
    </div>
  );
};

export default Home;
