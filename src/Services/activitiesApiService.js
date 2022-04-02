import {Put, Post, Patch, Delete} from './privateApiService';


const updateActivity = (url, initialValues) => {    
    let id = initialValues.id;
    return Put(url, id, initialValues)
}

const createActivity = (url, initialValues) => {   
    return Post(url, initialValues)
}

const deleteActivity = (url, activity) => {
    return Delete(url, activity)
}

export {updateActivity, createActivity, deleteActivity};