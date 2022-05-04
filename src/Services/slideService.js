import { Delete, Get, Post, Put } from "./privateApiService";

const slidesUrl = `${process.env.REACT_APP_SLIDES_ROUTE}`;

const getSlideList = () => Get(slidesUrl);

const getSlideSearch = (search) => Get(`${slidesUrl}?search=${search}`);

const getSlide = (id) => Get(slidesUrl, id);

const postSlide = (slide) => Post(slidesUrl, slide);

const updateSlide = (id, slide) => Put(slidesUrl, id, slide);

const deleteSlide = (id) => Delete(slidesUrl, id);

export { getSlideList,getSlideSearch, getSlide, postSlide, deleteSlide, updateSlide };
