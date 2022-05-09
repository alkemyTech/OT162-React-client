import React, { useState } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";

import "../FormStyles.css";
import { Post } from "../../Services/privateApiService";
import { confirmAlert, errorAlert } from "../../features/alerts/alerts";
import { addNewContact } from "../../Services/contactApiServices";

const ContactForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  //I did it with useState because in the future we will need setInitialValues for submitting//

  const handleSubmit = (values) => {
     
      setInitialValues({
        ...initialValues,
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
      });    
      addNewContact(initialValues)
        .then(() => confirmAlert("Contact created", "", "Ok"))
        .catch(() =>
          errorAlert("Error", "An error occurred while creating the contact.")
        );   
  };

  console.log(initialValues);

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Nombre es requerido";
        }
        if (!values.email) {
          errors.email = "Email requerido";
        } else if (!values.email.includes("@")) {
          errors.email = "El email no es válido";
        }
        if (values.phone.length < 8) {
          errors.phone = "Al menos debe tener 8 numeros";
        }
        if (isNaN(values.phone)) {
          errors.phone = "Solo debe contener números";
        }
        if (!values.message) {
          errors.message = "Mensaje requerido";
        }
        
        return errors;
      }}
      onSubmit={(values)=> handleSubmit(values)}
    >
      {({ errors, touched, handleChange, isSubmitting , values, e}) => (
        <div>
          <Form className="form-container" data-testid="testForm">
            <h2>Formulario de contacto</h2>
            <label htmlFor="name">Nombre</label>
            <Field
              className="input-field"
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Nombre"
              value={values.name}
              id="name"
            />
            <ErrorMessage
                  name="name"
                  component={() => (
                    <div className="nameError">{errors.name}</div>
                  )}
                />           
            <label htmlFor="email">Email</label>
            <Field
              className="input-field"
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              value={values.email}
             
            ></Field>
            <ErrorMessage
                  name="email"
                  component={() => (
                    <div className="emailError">{errors.email}</div>
                  )}
                />      
            <label htmlFor="phone">Teléfono</label>
            <Field
              className="input-field"
              type="tel"
              id="phone"
              name="phone"
              onChange={handleChange}
              placeholder="Teléfono"
              value={values.phone}
            ></Field>
            <ErrorMessage
                  name="phone"
                  component={() => (
                    <div className="phoneError">{errors.phone}</div>
                  )}
                />                 
            <label htmlFor="message">Mensaje</label>
            <Field
              className="input-field"
              type="message"
              id="message"
              name="message"
              onChange={handleChange}
              placeholder="Escribe tu mensaje..."
              value={values.message}
            ></Field>
            <ErrorMessage
                  name="message"
                  component={() => (
                    <div className="messageError">{errors.message}</div>
                  )}
                />            

            <button
              className="submit-btn"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ContactForm;
