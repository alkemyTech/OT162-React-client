import React, { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CKEditor from "ckeditor4-react";
import { Formik } from "formik";
import {
  putCategory,
  postCategory,
  getCategoriesById,
} from "../../Services/categoriesApiService";

import "../FormStyles.css";
import { confirmAlert, errorAlert } from "../../features/alerts/alerts";

const CategoriesForm = () => {
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
      getCategoriesById(id).then((response) => {
        setInitialValues({ ...response.data.data, image: "" });
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
        reader.readAsDataURL(file);
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

            <input
              className="input-field"
              // value={}
              type="file"
              id="image"
              accept=".jpg, .png"
              name="image"
              onChange={handleChange}
            ></input>
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
