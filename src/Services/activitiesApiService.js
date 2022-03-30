import {Put,Post,Patch,Delete} from './privateApiService';


const updateActivity = (url_api_base, activity_endpoint, initialValues) => {
    let route = url_api_base + activity_endpoint 
    let id = initialValues.id;
    return Put(route, id, initialValues)
}

export {updateActivity};