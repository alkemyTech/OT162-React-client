import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import HomeTitle from "./HomeTitle";
import NewsList from "./NewsList";
import {GetTitle, GetSlides, GetNews} from "../../Services/homeApiService";

const Home = () => {
  const [slides, setSlides] = useState([]);
  const [news, setNews] = useState([]);
  const [title, setTitle] = useState("Bienvenido a la ONG");

  useEffect(() => {
    GetTitle().then((res) => {
      setTitle(res.name);
    });
    GetSlides().then((res) => {
      setSlides(res);
    });
    GetNews().then((res) => {
      setNews(res);
    })
  }, []);

  return (
    <div>
      <HomeTitle title={title} />
      <Carousel slides={slides} background={"#90a4ae"} />
      {/* background is Carousel's backgroundColor  */}
      <NewsList news={news} />
    </div>
  );
};

export default Home;
