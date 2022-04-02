import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Title from "../../Title/Title";
import Alert from "@mui/material/Alert";

const NewsDetail = () => {
  let { id } = useParams();
  const [details, setDetails] = useState({
    message: "Cargando...",
    severity: "info",
  });

  useEffect(() => {
    axios
      .get("https://ongapi.alkemy.org/api/news/" + id)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        setDetails({ message: err.toString(), severity: "error" });
      });
  }, [id]);

  return (
    <div>
      {details.data ? (
        <div>
          <Title
            title={details.data.name}
            text={details.data.content}
            img={details.data.image}
          />
        </div>
      ) : (
        <Alert severity={details.severity}>{details.message}</Alert>
      )}
    </div>
  );
};

export default NewsDetail;
