import { Delete, Get, Post } from "./privateApiService";

const slidesUrl = `${process.env.REACT_APP_SLIDES_ROUTE}`;

const getSlideList = () => Get(slidesUrl);

const getSlide = (id) => Get(slidesUrl, id);

const postSlide = (slide) => Post(slidesUrl, slide);

const deleteSlide = (id) => Delete(slidesUrl, id);

export { getSlideList, getSlide, postSlide, deleteSlide };
