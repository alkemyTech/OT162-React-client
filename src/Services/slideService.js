import axios from "axios";

<<<<<<< HEAD
const slidesUrl = process.env.REACT_APP_SLIDES_ROUTE
=======
const slidesUrl = `${process.env.REACT_APP_SLIDES_ROUTE}`;
>>>>>>> a6a124cc5a9cc5e14916891d16f730f6a9d7963c

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
