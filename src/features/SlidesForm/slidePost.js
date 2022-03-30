import axios from "axios";
import { routes } from '../routes/constants'

function PostSlide(slide){
    return axios.post(routes.SlideCreate, slide).then(function(response){
        console.log(response);
    })
}

export default PostSlide