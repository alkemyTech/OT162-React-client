import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { ErrorMessage, Formik } from "formik";
import "../FormStyles.css";
const UserForm = ({ user }) => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    roleId: "",
    profilePhoto: "",
    password: "",
  });
  const [imageFile, setImageFile] = useState({});

  useEffect(() => {
    if (user) {
      setInitialValues(user);
    }
  }, [user]);

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleChange = async (e) => {
    switch (e.target.name) {
      case "name":
        setInitialValues({ ...initialValues, name: e.target.value });
        break;
      case "email":
        setInitialValues({ ...initialValues, email: e.target.value });
        break;
      case "password":
        setInitialValues({ ...initialValues, password: e.target.value });
        break;
      default:
        break;
    }
    if (e.target.files) {
      const file = e.target.files[0];
      const profilePhoto64 = await convertBase64(file);
      setImageFile(file);
      setInitialValues({ ...initialValues, profilePhoto: profilePhoto64 });
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();

    if (user) {
      axios
        .put(`https://ongapi.alkemy.org/docs/users/${user.id}`, {
          id: user.id,
          name: initialValues.name,
          email: initialValues.email,
          password: initialValues.password,
          role_id: initialValues.roleId,
          profile_image: initialValues.profilePhoto,
        })
        .then((resp) => {
          console.log(resp);
        })
        .catch((resp) => {
          console.log(resp);
        });
    } else {
      axios
        .post(`https://ongapi.alkemy.org/docs/users`, {
          name: initialValues.name,
          email: initialValues.email,
          password: initialValues.password,
          role_id: initialValues.roleId,
          profile_image: initialValues.profilePhoto,
        })
        .then((resp) => {
          console.log(resp);
        })
        .catch((resp) => {
          console.log(resp);
        });
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={() => {
          const { name, email, profilePhoto, roleId, password } = initialValues;
          const emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+/i;
          const imageRegex = /[/].?[jpg?].?[png]/i;
          const errors = {};
          if (!name) {
            errors.name = "Campo obligatorio";
          } else if (!name.length >= 4) {
            errors.name = "El nombre debe tener al menos 4 caracteres.";
          } else if (!email) {
            errors.email = "Campo obligatorio";
          } else if (!emailRegex.test(email)) {
            errors.email = "Email incorrecto.";
          } else if (!profilePhoto) {
            errors.profilePhoto = "Debe cargar una imagen, formato JPG o PNG";
          } else if (profilePhoto && !imageRegex.test(imageFile.type)) {
            errors.profilePhoto = "El formato de la imagen debe ser JPG o PNG";
          } else if (roleId !== "1" && roleId !== "2") {
            errors.roleId = "Debe elegir un rol de usuario.";
          } else if (!password) {
            errors.password = "Campo obligatorio";
          } else if (!password.length >= 8) {
            errors.password = "La contraseña debe tener al menos 8 caracteres.";
          }
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
              value={initialValues.name || ""}
              onChange={handleChange}
              placeholder="Name"
            ></input>
            <ErrorMessage
              name="name"
              component="div"
              className="invalid-feedback"
            />
            <input
              className="input-field"
              type="text"
              name="email"
              value={initialValues.email || ""}
              onChange={handleChange}
              placeholder="Email"
            ></input>
            <ErrorMessage
              name="email"
              component="div"
              className="invalid-feedback"
            />
            <input
              className="input-field"
              type="file"
              name="profilePhoto"
              onChange={handleChange}
            />
            <ErrorMessage
              name="profilePhoto"
              component="div"
              className="invalid-feedback"
            />
            <input
              className="input-field"
              type="text"
              name="password"
              value={initialValues.password || ""}
              onChange={handleChange}
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="invalid-feedback"
            />
            <select
              className="input-field"
              value={initialValues.roleId || ""}
              onChange={(e) =>
                setInitialValues({ ...initialValues, roleId: e.target.value })
              }
            >
              <option value="" disabled>
                Select the role
              </option>
              <option value="1">Administrador</option>
              <option value="2">Regular</option>
            </select>
            <ErrorMessage
              name="roleId"
              component="div"
              className="invalid-feedback"
            />
            <button className="submit-btn" type="submit">
              Send
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;

UserForm.propTypes = {
  user: PropTypes.object,
};

UserForm.defaultProps = {
  user: {},
};
