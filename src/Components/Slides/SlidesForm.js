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
        if(e.target.name === 'description'){
            setInitialValues({...initialValues, description: e.target.value})
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(initialValues);
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Slide Title"></input>
            {/* <input className="input-field" type="text" name="description" value={initialValues.description} onChange={handleChange} placeholder="Write the description"></input>           */}
            <CKEditor 
                className="input-field" 
                name="description" 
                value={initialValues.description} 
                data="Write the description"
                // onBeforeLoad={CKEditor =>{ console.log(CKEditor)}}
                onChange={handleChange}
                // onFocus={(data) =>console.log(data)}
                // onSubmit={(data) => console.log(data)}
                />  
            <input className="input-filed" type="file" name="image"/>
            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}
 
export default SlidesForm;