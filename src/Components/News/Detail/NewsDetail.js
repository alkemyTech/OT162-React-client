import React, { useEffect, useState, useRef } from "react";
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

  const myRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    }, {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.25, 0.5, 0.75, 1]
    });
    observer.observe(myRef.current);
  }, []);

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
      <div ref={myRef}>
        {isVisible && <Comments/>}
      </div>
    </div>
  );
};

export default NewsDetail;
