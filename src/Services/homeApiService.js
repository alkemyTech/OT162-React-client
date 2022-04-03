import {Get, Post} from './publicApiService';
import axios from 'axios';

const PostSliders = (values) => {
    console.log(values);
    Post('slides', {
        "name": values.photoName1,
        "description": "string",
        "image": values.photo1,
    });
    Post('slides', {
        "name": values.photoName2,
        "description": "string",
        "image": values.photo2,
    });
    Post('slides', {
        "name": values.photoName3,
        "description": "string",
        "image": values.photo3,
    });
    console.log('Sending slides...');
}

export {PostSliders};