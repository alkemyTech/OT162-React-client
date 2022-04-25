import {Get, Post} from './publicApiService';
import axios from 'axios';


const PostSliders = async (values) => {
    await axios.get(values.photo1, {responseType: 'arraybuffer'})
    .then(response => {
        Post('slides', {
            "name": values.photoName1,
            "description": "string",
            "image": "data:image/jpeg;base64," + Buffer.from(response.data, 'binary').toString('base64'),
        });
    });
    await axios.get(values.photo2, {responseType: 'arraybuffer'})
    .then(response => {
        Post('slides', {
            "name": values.photoName2,
            "description": "string",
            "image": "data:image/jpeg;base64," + Buffer.from(response.data, 'binary').toString('base64'),
        });
    });
    await axios.get(values.photo3, {responseType: 'arraybuffer'})
    .then(response => {
        Post('slides', {
            "name": values.photoName3,
            "description": "string",
            "image": "data:image/jpeg;base64," + Buffer.from(response.data, 'binary').toString('base64'),
        });
    });
}

const GetTitle = () => {
    return Get("organization");
}

const GetSlides = () => {
    return Get("slides");
}

const GetNews = (limit="") => {
    return Get(`news?limit=${limit}`);
}

export {PostSliders, GetTitle, GetSlides, GetNews};