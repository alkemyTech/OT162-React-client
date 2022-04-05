import { useState, useEffect } from "react";
import "../HomeTitle.css";
import {GetTitle} from '../../Services/homeApiService';

const HomeTitle = () => {
  const [title, setTitle] = useState("Bienvenido a la ONG");

  useEffect(() => {
    GetTitle().then((a) => {
      setTitle(a.name);
    });
  }, [])

  return <h1>{title}</h1>;
};

export default HomeTitle;
