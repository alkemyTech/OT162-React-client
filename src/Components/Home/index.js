import React, { useEffect, useState } from "react";
import Loading from "../Utilities/Loading";
import Carousel from "./Carousel";
import HomeTitle from "./HomeTitle";
import NewsList from "./NewsList";
import { errorAlert } from "../../features/alerts/alerts";
import Footer from "./Footer";
import { GetTitle, GetSlides, GetNews } from "../../Services/homeApiService";

const Home = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [title, setTitle] = useState("Bienvenido a la ONG");

  useEffect(() => {
    setLoading(true);
    GetSlides()
      .then((res) => {
        console.log(res);
        setSlides(res);
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
    GetTitle().then((res) => {
      setTitle(res.name);
    });
    GetNews(5).then((res) => {
      setNews(res);
    });
  }, []);

  return (
    <div>
      <HomeTitle title={title} />
      {loading ? (
        <Loading />
      ) : (
        <Carousel slides={slides} background={"#90a4ae"} />
      )}
      {/* background is Carousel's backgroundColor  */}
      <NewsList news={news} />
      <Footer />
    </div>
  );
};

export default Home;
