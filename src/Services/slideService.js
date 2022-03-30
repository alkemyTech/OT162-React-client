import axios from "axios";
import { routes } from "../features/routes/constants";


const getSlideList = () => {
    axios.get(routes.baseURL)
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}

const getSlide = (id) => {
    axios.get(routes.baseURL + id)
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}

const postSlide = (slide) => {
    axios.post(routes.baseURL, slide)
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}

const deleteSlide = (id) => {
    axios.get(routes.baseURL + id)
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}

export { getSlideList, getSlide, postSlide, deleteSlide }