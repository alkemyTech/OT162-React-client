import React, { useState } from 'react';
import CKEditor from 'ckeditor4-react';
import Input from '@mui/material/Input'
import { imageFormats } from '../../features/SlidesForm/imageFormats';
import '../FormStyles.css';
import PostSlide from '../../features/SlidesForm/slidePost';

function getBase64(file){
    return new Promise((resolve, reject) =>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    })
}

const SlidesForm = () => {
    const [initialValues, setInitialValues] = useState({
        id: 0,
        name: '',
        description: '',
        image: '',
        order:'',
        user_id: 0,
        created_at: '',
        updated_at: '',
        deleted_at: '',
    });

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        }
        if(e.target.name === 'image'){
            let imageFile = e.target.files[0];
            getBase64(imageFile).then(
                data => setInitialValues({...initialValues, image: data})
            )
        }
    }

    const handleEditorChange = (e) => {
        setInitialValues({...initialValues, description: e.editor.getData()})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        PostSlide(initialValues)
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Slide Title"></input>
            <CKEditor 
                name="description" 
                value={initialValues.description} 
                onChange={handleEditorChange}
                /> 
            <Input 
                name='image' 
                type="file" 
                inputProps={imageFormats}
                onChange={handleChange}/>
            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}
 
export default SlidesForm;