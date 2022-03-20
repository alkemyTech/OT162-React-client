import React, { useState } from 'react';
import CKEditor from 'ckeditor4-react';
import Input from '@mui/material/Input';
import '../FormStyles.css';

const SlidesForm = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        description: '',
        order:'',
        image: ''
    });

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        }
        if(e.target.name === 'image'){
            setInitialValues({...initialValues, image: e.target.value})
        }
    }

    const handleEditorChange = (e) => {
        setInitialValues({...initialValues, description: e.editor.getData()})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(initialValues);
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Slide Title"></input>
            <CKEditor 
                name="description" 
                value={initialValues.description} 
                onChange={handleEditorChange}
                /> 
            <Input name='image' type="file" accept="image/*" onChange={handleChange}/>
            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}
 
export default SlidesForm;