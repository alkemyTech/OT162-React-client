import React, { useState } from 'react';
import CKEditor from 'ckeditor4-react';
import Input from '@mui/material/Input'
import { imageFormats } from '../../features/SlidesForm/imageFormats';
import '../FormStyles.css';
import { postSlide } from '../../Services/slideService';

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
        postSlide(initialValues)
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h3>Slide Title</h3>
            <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Slide Title"></input>
            <h3>Descripción</h3>
            <CKEditor 
                name="description" 
                value={initialValues.description} 
                onChange={handleEditorChange}
                /> 
            <h3>Add image</h3>
            <p>(Only *.JPEG, *.JGP and *.PNG formats acceptted)</p>
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