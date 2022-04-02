import React, { useState } from "react";
import "../FormStyles.css";

const RegisterForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setInitialValues({ ...initialValues, name: e.target.value });
    }
    if (e.target.name === "lastName") {
      setInitialValues({ ...initialValues, lastName: e.target.value });
    }
    if (e.target.name === "email") {
      setInitialValues({ ...initialValues, email: e.target.value });
    }
    if (e.target.name === "password") {
      setInitialValues({ ...initialValues, password: e.target.value });
    }
    if (e.target.name === "confirmPassword") {
      setInitialValues({ ...initialValues, confirmPassword: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (initialValues) {
      const { password, confirmPassword } = initialValues;
      const specialCaracRegex = /\W/i;
      const numbersRegex = /[0-9]/;
      const errors = {};

      if (password !== confirmPassword) {
        errors.password = "las contraseñas deben ser iguales";
      }

      if (
        !password.length >= 6 ||
        !specialCaracRegex.test(password) ||
        !numbersRegex.test(password)
      ) {
        errors.password =
          "las contraseñas deben ser de al menos 6 caracteres y contener al menos 1 simbolo, 1 letra y 1 numero";
      }

      Object.values(initialValues).map((value) => {
        if (value === "" || undefined || null) {
          return (errors.form = "todos los campos son obligatorios");
        } else {
          return errors;
        }
      });
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
        required
      ></input>
      <input
        className="input-field"
        type="text"
        name="lastName"
        value={initialValues.lastName}
        onChange={handleChange}
        placeholder="Enter last name"
        required
      ></input>
      <input
        className="input-field"
        type="text"
        name="email"
        value={initialValues.email}
        onChange={handleChange}
        placeholder="Enter email"
        required
      ></input>
      <input
        className="input-field"
        type="text"
        name="password"
        value={initialValues.password}
        onChange={handleChange}
        placeholder="Enter password"
        required
      ></input>
      <input
        className="input-field"
        type="text"
        name="confirmPassword"
        value={initialValues.confirmPassword}
        onChange={handleChange}
        placeholder="Repeat password"
        required
      ></input>
      <button className="submit-btn" type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
