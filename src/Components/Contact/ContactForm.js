import React, { useState } from "react";
import { Formik } from "formik";

import "../FormStyles.css";

const ContactForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  //I did it with useState because in the future we will need setInitialValues for submitting//

  const handleSubmit = (e) => {
    e.preventDefault();
    setInitialValues({
      ...initialValues,
      name: e.currentTarget.name.value,
      email: e.currentTarget.email.value,
      phone: e.currentTarget.phone.value,
      message: e.currentTarget.message.value,
    });
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
    >
      {({ errors, touched, handleChange, isSubmitting }) => (
        <div>
          <form className="form-container" onSubmit={handleSubmit}>
            <h2>Formulario de contacto</h2>
            <input
              className="input-field"
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Nombre"
            />
            {errors.name && touched.name && errors.name}

            <input
              className="input-field"
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
            ></input>
            {errors.email && touched.email && errors.email}

            <input
              className="input-field"
              type="tel"
              id="phone"
              name="phone"
              onChange={handleChange}
              placeholder="Teléfono"
            ></input>
            {errors.phone && touched.phone && errors.phone}

            <input
              className="input-field"
              type="message"
              id="message"
              name="message"
              onChange={handleChange}
              placeholder="Escribe tu mensaje..."
            ></input>
            {errors.message && touched.message && errors.message}

            <button
              className="submit-btn"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default ContactForm;
