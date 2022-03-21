import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
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
  }, []);

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
    if (e.target.name === "name") {
      setInitialValues({ ...initialValues, name: e.target.value });
    }
    if (e.target.name === "email") {
      setInitialValues({ ...initialValues, email: e.target.value });
    }
    if (e.target.name === "password") {
      setInitialValues({ ...initialValues, password: e.target.value });
    }
    if (e.target.files) {
      const file = e.target.files[0];
      const profilePhoto64 = await convertBase64(file);
      setImageFile(file);
      setInitialValues({ ...initialValues, profilePhoto: profilePhoto64 });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, profilePhoto, roleId, password } = initialValues;
    const emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+/i;
    const imageRegex = /[/].?[jpg?].?[png]/i;
    const errors = {};
    if (!name || !name.length >= 4) {
      errors.name = "El nombre debe tener al menos 4 caracteres.";
    }
    if (!email) {
      errors.email = "Email obligatorio";
    }
    if (email && !emailRegex.test(email)) {
      errors.email = "Email incorrecto.";
    }
    if (!profilePhoto) {
      errors.profilePhoto = "Debe cargar una imagen, formato JPG o PNG";
    }
    if (profilePhoto && !imageRegex.test(imageFile.type)) {
      errors.profilePhoto = "El formato de la imagen debe ser JPG o PNG";
    }
    if (roleId !== "1" && roleId !== "2") {
      errors.roleId = "Debe elegir un rol de usuario.";
    }
    if (!password || !password.length >= 8) {
      errors.password = "La contraseña debe tener al menos 8 caracteres.";
    }
    if (user && Object.keys(errors).length === 0) {
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
    } else if (Object.keys(errors).length === 0) {
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
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        name="name"
        value={initialValues.name || ""}
        onChange={handleChange}
        placeholder="Name"
      ></input>
      <input
        className="input-field"
        type="text"
        name="email"
        value={initialValues.email || ""}
        onChange={handleChange}
        placeholder="Email"
      ></input>
      <input
        className="input-field"
        type="file"
        name="profilePhoto"
        onChange={handleChange}
      />
      <input
        className="input-field"
        type="text"
        name="password"
        value={initialValues.password}
        onChange={handleChange}
        placeholder="Password"
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

      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default UserForm;

UserForm.propTypes = {
  user: PropTypes.object,
};

UserForm.defaultProps = {
  user: {},
};
