import React, { useState } from 'react';
import CKEditor from 'ckeditor4-react';
import '../FormStyles.css';

const SlidesForm = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        description: ''
    });

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } 
    }

    const handleEditor = (e) => {
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
                data="Write the description"
                onChange={handleEditor}
                />  
            <input className="input-filed" type="file" name="image"/>
            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}
 
export default SlidesForm;