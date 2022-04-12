import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Title from "../../Title/Title";
import Loading from "../../Utilities/Loading";
import { errorAlert } from "../../../features/alerts/alerts";
import Comments from '../../Comments/Comments';

const NewsDetail = () => {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState({
    message: "Cargando...",
    severity: "info",
  });

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://ongapi.alkemy.org/api/news/" + id)
      .then((res) => {
        setDetails(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setDetails({ message: err.toString(), severity: "error" });
        errorAlert(err, "ID invalido", "Exit");
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div>
      <div>
      {isLoading && <Loading />}
      {details.data && (
        <div>
          <Title
            title={details.data.name}
            text={details.data.content}
            img={details.data.image}
          />
        </div>
      )}
      </div>
      <Comments/>
    </div>
  );
};

export default NewsDetail;
