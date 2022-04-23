import React, { useState } from "react";
import "../FormStyles.css";
import { ErrorMessage, Formik } from "formik";

const RegisterForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setInitialValues({ ...initialValues, name: e.target.value });
        break;
      case "lastName":
        setInitialValues({ ...initialValues, lastName: e.target.value });
        break;
      case "email":
        setInitialValues({ ...initialValues, email: e.target.value });
        break;
      case "password":
        setInitialValues({ ...initialValues, password: e.target.value });
        break;
      case "confirmPassword":
        setInitialValues({ ...initialValues, confirmPassword: e.target.value });
        break;
      default:
        break;
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "tokenValueExample");
  };

  return (
    <div>
      <h1>Registrate!</h1>
      {""}
      <Formik
        initialValues={initialValues}
        validate={() => {
          const { password, confirmPassword, name, email, lastName } =
            initialValues;
          const specialCaracRegex = /\W/i;
          const numbersRegex = /[0-9]/;
          const errors = {};

          if (!name) {
            errors.name = "Campo obligatorio";
          } else if (!lastName) {
            errors.lastName = "Campo obligatorio";
          } else if (!confirmPassword) {
            errors.confirmPassword = "Campo obligatorio";
          } else if (!email) {
            errors.email = "Campo obligatorio";
          } else if (!password) {
            errors.password = "Campo obligatorio";
          } else if (password !== confirmPassword) {
            errors.password = "las contraseñas deben ser iguales";
          } else if (
            !password.length >= 6 ||
            !specialCaracRegex.test(password) ||
            !numbersRegex.test(password)
          ) {
            errors.password =
              "Las contraseñas deben ser de al menos 6 caracteres y contener al menos 1 simbolo, 1 letra y 1 numero";
          }

          console.log(errors);
          return errors;
        }}
        onSubmit={handleEdit}
      >
        {({ handleSubmit }) => (
          <form className="form-container" onSubmit={handleSubmit}>
            <input
              className="input-field"
              type="text"
              name="name"
              value={initialValues.name}
              onChange={handleChange}
              placeholder="Enter name"
            ></input>
            <ErrorMessage
              name="name"
              component="div"
              className="invalid-feedback"
            />
            <input
              className="input-field"
              type="text"
              name="lastName"
              value={initialValues.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
            ></input>
            <ErrorMessage
              name="lastName"
              component="div"
              className="invalid-feedback"
            />
            <input
              className="input-field"
              type="text"
              name="email"
              value={initialValues.email}
              onChange={handleChange}
              placeholder="Enter email"
            ></input>
            <ErrorMessage
              name="email"
              component="div"
              className="invalid-feedback"
            />
            <input
              className="input-field"
              type="text"
              name="password"
              value={initialValues.password}
              onChange={handleChange}
              placeholder="Enter password"
            ></input>
            <ErrorMessage
              name="password"
              component="div"
              className="invalid-feedback"
            />
            <input
              className="input-field"
              type="text"
              name="confirmPassword"
              value={initialValues.confirmPassword}
              onChange={handleChange}
              placeholder="Repeat password"
            ></input>
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="invalid-feedback"
            />
            <button className="submit-btn" type="submit">
              Register
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
