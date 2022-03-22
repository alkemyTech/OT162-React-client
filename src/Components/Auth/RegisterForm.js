import React, { useState } from "react";
import "../FormStyles.css";
import swal from "sweetalert";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (initialValues) {
      const { password, confirmPassword } = initialValues;
      const specialCaracRegex = /\W/i;
      const numbersRegex = /[0-9]/;
      const errors = {};

      Object.values(initialValues).map((value) => {
        if (value === "" || undefined || null) {
          errors.form = "todos los campos son obligatorios";
          swal(errors.form, {
            button: "Cerrar",
          });
        }
        return errors;
      });

      if (!errors.form) {
        if (password !== confirmPassword) {
          errors.password = "las contraseñas deben ser iguales";
          swal(errors.password, {
            button: "Cerrar",
          });
        } else if (
          !password.length >= 6 ||
          !specialCaracRegex.test(password) ||
          !numbersRegex.test(password)
        ) {
          errors.password =
            "Las contraseñas deben ser de al menos 6 caracteres y contener al menos 1 simbolo, 1 letra y 1 numero";
          swal(errors.password, {
            button: "Cerrar",
          });
        }
      }
    }

    localStorage.setItem("token", "tokenValueExample");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        name="name"
        value={initialValues.name}
        onChange={handleChange}
        placeholder="Enter name"
      ></input>
      <input
        className="input-field"
        type="text"
        name="lastName"
        value={initialValues.lastName}
        onChange={handleChange}
        placeholder="Enter last name"
      ></input>
      <input
        className="input-field"
        type="text"
        name="email"
        value={initialValues.email}
        onChange={handleChange}
        placeholder="Enter email"
      ></input>
      <input
        className="input-field"
        type="text"
        name="password"
        value={initialValues.password}
        onChange={handleChange}
        placeholder="Enter password"
      ></input>
      <input
        className="input-field"
        type="text"
        name="confirmPassword"
        value={initialValues.confirmPassword}
        onChange={handleChange}
        placeholder="Repeat password"
      ></input>
      <button className="submit-btn" type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
