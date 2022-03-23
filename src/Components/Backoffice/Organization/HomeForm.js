import React, {useState} from 'react';
import { Formik } from 'formik';

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
            console.log("Formulario enviado");
            setSubmittedForm(true);
            setTimeout(() => setSubmittedForm(false), 5000);
         }}>
            {( {values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="welcome">Texto de bienvenida</label>
                        <input 
                            type="text" 
                            id="welcome" 
                            name="welcome" 
                            placeholder="Texto de bienvenida" 
                            value={values.welcome}
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                        {touched.welcome && errors.welcome && <div>{errors.welcome}</div>}
                    </div>
                    <div>
                        <label htmlFor="photo1">First photo</label>
                        <input 
                            type="text" 
                            id="photo1" 
                            name="photo1" 
                            placeholder="Photo" 
                            value={values.photo}
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                        {touched.photo1 && errors.photo1 && <div>{errors.photo1}</div>}
                    </div>
                    <div>
                        <label htmlFor="photoName1">First photo name</label>
                        <input 
                            type="text" 
                            id="photoName1" 
                            name="photoName1" 
                            placeholder="Photo name" 
                            value={values.photo}
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                            {touched.photoName1 && errors.photoName1 && <div>{errors.photoName1}</div>}
                    </div>
                    <div>
                        <label htmlFor="photo2">Second photo</label>
                        <input 
                            type="text" 
                            id="photo2" 
                            name="photo2" 
                            placeholder="Photo" 
                            value={values.photo}
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                            {touched.photo2 && errors.photo2 && <div>{errors.photo2}</div>}
                    </div>
                    <div>
                        <label htmlFor="photoName2">Second photo name</label>
                        <input 
                            type="text" 
                            id="photoName2" 
                            name="photoName2" 
                            placeholder="Photo name" 
                            value={values.photo}
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                            {touched.photoName2 && errors.photoName2 && <div>{errors.photoName2}</div>}
                    </div>
                    <div>
                        <label htmlFor="photo3">Third photo</label>
                        <input 
                            type="text" 
                            id="photo3" 
                            name="photo3" 
                            placeholder="Photo" 
                            value={values.photo}
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                            {touched.photo3 && errors.photo3 && <div>{errors.photo3}</div>}
                    </div>
                    <div>
                        <label htmlFor="photoName3">Third photo name</label>
                        <input 
                            type="text" 
                            id="photoName3" 
                            name="photoName3" 
                            placeholder="Photo name" 
                            value={values.photo}
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                            {touched.photoName3 && errors.photoName3 && <div>{errors.photoName3}</div>}
                    </div>
                    <button type="submit">Enviar</button>
                    {submittedForm && <p>Formulario enviado con exito</p>}
                </form>
            )}
        </Formik>
    </div>
  );
};

export default HomeForm;