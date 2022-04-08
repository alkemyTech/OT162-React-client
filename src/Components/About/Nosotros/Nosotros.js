import axios from "axios";
import { React, useEffect, useState } from "react";
import rutas from "../../../config/rutas";
import Title from "../../Title/Title";
import { errorAlert } from "../../../features/alerts/alerts";
import Loading from "../../Utilities/Loading";

const Nosotros = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${rutas.GET_SPECIFIC_ORGANIZATION_URL}`)
      .then((result) => {
        setTitle(result.data.data.name);
        setText(result.data.data.long_description);
        setImg(result.data.data.logo);
      })
      .then((result) => {
        console.log(result);
      })
      .catch((e) => {
        errorAlert(
          "Error",
          "An error has occurred while getting data from server.",
          "Ok"
        );
        console.log("ERROR", e.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? <Loading /> : <Title title={title} text={text} img={img} />}
    </div>
  );
};

export default Nosotros;
