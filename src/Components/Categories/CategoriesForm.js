import React, { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CKEditor from "ckeditor4-react";
import { Formik } from "formik";
import { Box, Button, CircularProgress } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import {
  putCategory,
  postCategory,
  getCategoriesById,
} from "../../Services/categoriesApiService";

import "../FormStyles.css";
import { confirmAlert, errorAlert } from "../../features/alerts/alerts";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const CategoriesForm = () => {
  const [image, setImage] = useState("");
  const { id } = useParams();
  let navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    image: "",
    id: "",
  });

  useEffect(() => {
    if (id) {
      getCategoriesById(id).then(async (response) => {
        await setInitialValues({ ...response.data.data });
        let blob = await fetch(response.data.data.image).then((r) => r.blob());

        getBase64(blob).then((data) => {
          setInitialValues({
            ...initialValues,
            ...response.data.data,
            image: data,
          });
        });
        setImage(response.data.data.image);
      });
    }
  }, []);

  const handleChange = (e) => {
    if (e?.target?.name === "name") {
      setInitialValues({ ...initialValues, name: e.target.value });
    }
    if (e?.target?.name === "image") {
      let reader = new FileReader();
      let file = e.target.files[0];
      if (file) {
        let imageFile = e.target.files[0];
        getBase64(imageFile).then((data) => {
          setInitialValues({ ...initialValues, image: data });
          setImage(data);
        });
      }
      reader.addEventListener(
        "load",
        () => {
          setInitialValues({ ...initialValues, image: reader.result });
        },
        false
      );
    }
    if (e?.editor?.name === "description") {
      setInitialValues({ ...initialValues, description: e.editor.getData() });
    }
  };

  const handleSubmit = (e) => {
    if (id) {
      putCategory(id, initialValues)
        .then(() => {
          confirmAlert("Operacion exitosa", "Categoria editada", "OK");
        })
        .catch((error) => errorAlert("Error", error.message, "Continuar"))
        .finally(navigate("/backoffice/categories"));
    } else {
      postCategory(initialValues);
      confirmAlert("Operacion exitosa", "Categoria creada", "OK");
    }
  };

  console.log(initialValues);

  return (
    <Fragment>
      <h1>Crear o editar una categoría</h1>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Nombre es requerido";
          } else if (values.name.length < 4) {
            errors.name = "El nombre debe tener al menos 4 caracteres";
          }
          if (!values.description) {
            errors.description = "Descripción requerida";
          }
          if (!values.image) {
            errors.image = "Imagen requerida";
          }

          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="form-container" onSubmit={handleSubmit}>
            <input
              className="input-field"
              type="text"
              name="name"
              onChange={handleChange}
              value={initialValues.name}
              placeholder="Name"
            />
            {errors.name && touched.name && errors.name}

            <CKEditor
              initData={initialValues.description}
              data={initialValues.description}
              id="description"
              name="description"
              onChange={handleChange}
            />
            {errors.description && touched.description && errors.description}

            <div className="image-controls">
              {!image && <span className="image-msg">Nada Subido Aún!</span>}
              <Button
                variant="contained"
                id="image"
                component="label"
                className="image-edit-btn"
                startIcon={image ? <EditIcon /> : <PhotoCameraIcon />}
              >
                <input
                  className="input-field"
                  value={undefined}
                  type="file"
                  id="image"
                  accept=".jpg, .png"
                  name="image"
                  onChange={handleChange}
                  hidden
                ></input>
              </Button>
              {image && <img src={image} alt="" />}
            </div>
            {errors.image && touched.image && errors.image}

            <button
              className="submit-btn"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </Fragment>
  );
};

export default CategoriesForm;
