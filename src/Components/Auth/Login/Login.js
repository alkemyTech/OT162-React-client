import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { useState, useEffect } from "react";

const Login = () => {
  const [login, setLogin] = useState(false);
  const [invalidPass, setInvalidPass] = useState(false);
  const [mensajeError, setMensajeError] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (invalidPass) {
      setMensajeError("Email o Password inválidos");
    }
  }, [invalidPass]);

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(inputs) => {
          let errores = {};
          if (!inputs.email) {
            errores.email = "Por favor, ingrese un email";
          } else {
            if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputs.email)
            ) {
              errores.email = "Formato de mail inválido";
            }
          }
          if (!inputs.password) {
            errores.password = "Por favor, ingrese una password";
          } else {
            if (invalidPass) {
              errores.password = mensajeError;
            }
            if (inputs.password.length < 6) {
              errores.password = "La password debe tener al menos 6 caracteres";
            }
            if (
              !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/.test(inputs.password)
            ) {
              errores.password = "La contraseña debe tener al menos un número, una letra, un símbolo";
            }
          }
          return errores;
        }}
        onSubmit={(inputs) => {
          let userInfo = {
            email: inputs.email,
            password: inputs.password,
          };
          try {
            fetch("http://localhost:3003/api/user/login", {
              method: "POST",
              redirect: "follow",
              //   mode: "cors", // no-cors, *cors, same-origin
              cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
              //   credentials: "same-origin", // include, *same-origin, omit
              headers: {
                "Content-Type": "application/json",
                "Acces-Control-Allow-Origin": "*",
              },
              body: JSON.stringify(userInfo),
            })
              .then((response) => response.json())
              .then((res) => {
                if (res.success) {
                  console.log("Bienvenido", userInfo.email);
                  setInvalidPass(false);
                  setLogin(true);
                  setName(userInfo.name);
                }
                if (res.error) {
                  console.log("Contraseña invalida");
                  setInvalidPass(true);
                }
              })
              .catch((error) => {
                console.log(error);
                console.log("Usuario inexistente");
              });
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {(formikProps) =>
          !login && (
            <Form className="Login">
              <div className="Login__inputs">
                <h2>INICIAR SESIÓN</h2>
                <span>Bienvenido, nos alegra que hayas vuelto!</span>
                <label>Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Ingresa tu email"
                ></Field>
                <ErrorMessage
                  name="email"
                  component={() => (
                    <div className="emailError">{formikProps.errors.email}</div>
                  )}
                />
                <label>Contraseña</label>
                <Field type="password" name="password"></Field>
                <span>¿Olvidaste tu contraseña?</span>
                <ErrorMessage
                  name="password"
                  component={() => (
                    <div className="passwordError">
                      {formikProps.errors.password}
                    </div>
                  )}
                />
                <div className="Login__form--bottom">
                  <Link to="/">CANCELAR</Link>
                  <button type="submit">INICIAR SESIÓN</button>
                </div>
                <span>
                  ¿No tienes una cuenta?{" "}
                  <Link to="/registro">Ingresa aquí</Link>
                </span>
              </div>
            </Form>
          )
        }
      </Formik>
      {login && (
        <div className="login__success">
          <div className="login__success--inner">
            <h3 className="successfulSend">¡Bienvenido {name}!</h3>
            <Link to="/">
              <button className="ingresar">Ingresar al sitio</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
