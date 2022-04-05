import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import HomeTitle from "./HomeTitle";
import NewsList from "./NewsList";
import {GetSlides, GetNews} from "../../Services/homeApiService";

const Home = () => {
  const [slides, setSlides] = useState([]);
  const [news, setNews] = useState([]);
  useEffect(() => {
    GetSlides().then((res) => {
      setSlides(res);
    });
    GetNews().then((res) => {
      setNews(res);
    })
  }, []);

  return (
    <div>
      <HomeTitle />
      <Carousel slides={slides} background={"#90a4ae"} />
      {/* background is Carousel's backgroundColor  */}
      <NewsList news={news} />
    </div>
  );
};

export default Home;
