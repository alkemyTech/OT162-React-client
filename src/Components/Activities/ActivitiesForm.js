import React, { useState } from "react";
import "../FormStyles.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import DescriptionField from "./DescriptionField";
import axios from "axios";

const acceptedImageFormats = ["image/jpeg", "image/png"];
const url_api_base = "https://ongapi.alkemy.org/api";
const activity_endpoint = "/activities";

const ActivitiesForm = ({ activity }) => {
  const [initialValues, setInitialValues] = useState({
    name: activity ? activity.name : "",
    description: activity ? activity.description : "",
    image: activity ? activity.image : "",
  });
  const [image, setImage] = useState(activity ? activity.image : "");

  const handleChange = (e) => {
    if (e?.target?.name === "name") {
      setInitialValues({ ...initialValues, name: e.target.value });
    }
    if (e?.editor?.name === "description") {
      setInitialValues({ ...initialValues, description: e.editor.getData() });
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
          setImage(reader.result);
        },
        false
      );
    }
  };

  const handleSubmit = () => {
    if (activity) {
      axios
        .patch(
          `${url_api_base}${activity_endpoint}/${activity.id}`,
          initialValues
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    } else {
      axios
        .post(`${url_api_base}${activity_endpoint}`, initialValues)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  };

  return (
    <Formik
      enableReinitialize
      validateOnChange
      initialValues={initialValues}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Campo requerido";
        }
        if (!values.description) {
          errors.description = "Campo requerido";
        }
        if (!initialValues.image) {
          errors.image = "Campo Requerido";
        }
        if (
          !initialValues.image.includes(acceptedImageFormats[0]) &&
          !initialValues.image.includes(acceptedImageFormats[1])
        ) {
          errors.image = "Formato no aceptado";
        }
        return errors;
      }}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form className="form-container">
          <Field
            className="input-field"
            type="text"
            name="name"
            placeholder="Activity Title"
            onChange={handleChange}
            required
          />
          <ErrorMessage name="name" />
          <Field
            component={DescriptionField}
            className="input-field"
            type="text"
            name="description"
            placeholder="Write some activity description"
            onChange={handleChange}
          />
          <ErrorMessage name="description" />
          <Field
            className="input-field"
            type="file"
            accept=".jpg,.png"
            name="image"
            value={undefined}
            onChange={handleChange}
          />
          <ErrorMessage name="image" />
          {image && !props.errors.image && <img src={image} />}
          <button
            type="submit"
            className="submit-btn"
            disabled={Object.keys(props.errors).length !== 0}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ActivitiesForm;
