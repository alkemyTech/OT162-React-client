import { useState } from "react";
import "../HomeTitle.css";

const HomeTitle = () => {
  const [title, setTitle] = useState("Bienvenido a la ONG");
  return <h1>{title}</h1>;
};

export default HomeTitle;
