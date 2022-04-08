import axios from "axios";

const slidesUrl = `${process.env.REACT_APP_SLIDES_ROUTE}`;

const getSlideList = () => {
  return axios.get(slidesUrl);
};

const getSlide = (id) => {
  axios
    .get(slidesUrl + id)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

const postSlide = (slide) => {
  axios
    .post(slidesUrl, slide)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

const deleteSlide = (id) => {
  axios
    .get(slidesUrl + id)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

export { getSlideList, getSlide, postSlide, deleteSlide };
