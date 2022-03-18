import React, { useState } from "react";
import "../FormStyles.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import DescriptionField from "./DescriptionField";

const acceptedImageFormats = ["jpg", "png"];

const ActivitiesForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    image: "",
  });
  const [image, setImage] = useState("");

  const handleChange = (e) => {
    if (e?.target?.name === "name") {
      setInitialValues({ ...initialValues, name: e.target.value });
    }
    if (e?.editor?.name === "description") {
      setInitialValues({ ...initialValues, description: e.editor.getData() });
    }
    if (e?.target?.name === "image") {
      setInitialValues({ ...initialValues, image: e.target.value });
      let reader = new FileReader();
      let file = e.target.files[0];
      if (file) {
        reader.readAsDataURL(file);
      }
      reader.addEventListener(
        "load",
        () => {
          setImage(reader.result);
        },
        false
      );
    }
  };

  const handleSubmit = () => {
    console.log("sub");
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
        if (
          !acceptedImageFormats.includes(initialValues.image.split(".").pop())
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
            // setFieldValue={props.setFieldValue}  Esto era para el metodo que no funciona
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
            required
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
