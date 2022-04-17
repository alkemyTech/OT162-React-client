import React, {useState} from 'react';
import { Formik } from 'formik';
import './HomeForm.css';
import {PostSliders} from '../../../Services/homeApiService';

const HomeForm = () => {
    const [submittedForm, setSubmittedForm] = useState(false);
  return (
    <div>
        <Formik
        initialValues={{
            welcome: "",
            photo1: "",
            photoName1: "",
            photo2: "",
            photoName2: "",
            photo3: "",
            photoName3: "",
        }}
        validate={(values) => {
            let errors = {};
            if (values.welcome.length < 20) {
                errors.welcome = 'Debe contener al menos 20 caracteres'
            }
            if(values.photo1.length < 1) {
                errors.photo1 = 'Este campo es obligatorio'
            } else if (!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/i.test(values.photo1)) {
                errors.photo1 = 'Debes introducir un link valido'
            }
            if(values.photoName1.length < 1) {
                errors.photoName1 = 'Este campo es obligatorio'
            }
            if(values.photo2.length < 1) {
                errors.photo2 = 'Este campo es obligatorio'
            } else if (!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/i.test(values.photo2)) {
                errors.photo2 = 'Debes introducir un link valido'
            }
            if(values.photoName2.length < 1) {
                errors.photoName2 = 'Este campo es obligatorio'
            }
            if(values.photo3.length < 1) {
                errors.photo3 = 'Este campo es obligatorio'
            } else if (!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/i.test(values.photo3)) {
                errors.photo3 = 'Debes introducir un link valido'
            }
            if(values.photoName3.length < 1) {
                errors.photoName3 = 'Este campo es obligatorio'
            }
            return errors;
        }}
        onSubmit={(values, {resetForm}) => {
            resetForm();
            PostSliders(values);
            setSubmittedForm(true);
            setTimeout(() => setSubmittedForm(false), 5000);
         }}>
            {( {values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
                <form onSubmit={handleSubmit} className="form-container">
                    <div className="section-box form-container">
                        <label htmlFor="welcome">Texto de bienvenida</label>
                        <input 
                            type="text" 
                            id="welcome" 
                            name="welcome" 
                            placeholder="Texto de bienvenida" 
                            value={values.welcome}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="input-field"/>
                        <div>{touched.welcome && errors.welcome && <div className="error-feedback">{errors.welcome}</div>}</div>
                    </div>
                    <div className="section-box form-container">
                        <label htmlFor="photo1">Foto 1</label>
                        <input 
                            type="text" 
                            id="photo1" 
                            name="photo1"
                            placeholder="Url de la foto (https://image.url)"
                            value={values.photo}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="input-field"/>
                        <div>{touched.photo1 && errors.photo1 && <div className="error-feedback">{errors.photo1}</div>}</div>
                        <input 
                            type="text" 
                            id="photoName1" 
                            name="photoName1" 
                            placeholder="Nombre de la foto" 
                            value={values.photo}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="input-field"/>
                        <div>{touched.photoName1 && errors.photoName1 && <div className="error-feedback">{errors.photoName1}</div>}</div>
                    </div>
                    <div className="section-box form-container">
                        <label htmlFor="photo2">Foto 2</label>
                        <input 
                            type="text" 
                            id="photo2" 
                            name="photo2" 
                            placeholder="Url de la foto (https://image.url)" 
                            value={values.photo}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="input-field"/>
                        <div>{touched.photo2 && errors.photo2 && <div className="error-feedback">{errors.photo2}</div>}</div>
                        <input 
                            type="text" 
                            id="photoName2" 
                            name="photoName2" 
                            placeholder="Nombre de la foto" 
                            value={values.photo}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="input-field"/>
                        <div>{touched.photoName2 && errors.photoName2 && <div className="error-feedback">{errors.photoName2}</div>}</div>
                    </div>
                    <div className="section-box form-container">
                        <label htmlFor="photo3">Foto 3</label>
                        <input 
                            type="text" 
                            id="photo3" 
                            name="photo3" 
                            placeholder="Url de la foto (https://image.url)" 
                            value={values.photo}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="input-field"/>
                        <div>{touched.photo3 && errors.photo3 && <div className="error-feedback">{errors.photo3}</div>}</div>
                        <input 
                            type="text" 
                            id="photoName3" 
                            name="photoName3" 
                            placeholder="Nombre de la foto" 
                            value={values.photo}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="input-field"/>
                        <div>{touched.photoName3 && errors.photoName3 && <div className="error-feedback">{errors.photoName3}</div>}</div>
                    </div>
                    <button type="submit" className="submit-btn">Enviar</button>
                    {submittedForm && <p className="success-feedback">Formulario enviado con exito</p>}
                </form>
            )}
        </Formik>
    </div>
  );
};

export default HomeForm;