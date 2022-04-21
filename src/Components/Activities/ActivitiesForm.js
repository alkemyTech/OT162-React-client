import { useState } from "react";
import "../FormStyles.css";
import { Form, Formik } from "formik";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormHelperText,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { confirmAlert, errorAlert } from "../../features/alerts/alerts";
import {
  createActivity,
  updateActivity,
} from "../../Services/activitiesApiService";
// import DescriptionField from "./DescriptionField";


const acceptedImageFormats = ["image/jpeg", "image/png"];

const ActivitiesForm = ({ activity }) => {
  const [initialValues, setInitialValues] = useState({
    id: activity ? activity.id : "",
    name: activity ? activity.name : "",
    description: activity ? activity.description : "",
    image: activity ? activity.image : "",
  });
  const [image, setImage] = useState(activity ? activity.image : "");
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    if (activity) {
      updateActivity(
        `${process.env.REACT_APP_API_URL_BASE}${process.env.REACT_APP_ACTIVITY_ROUTE}/${initialValues.id}`,
        initialValues
      )
        .then(() => confirmAlert("Excelente", "Actividad actualizada", "Exit"))
        .catch((error) => {
          errorAlert(
            "Error",
            "Hubo un problema al actualizar la actividad",
            "Exit"
          );
          console.log(error);
        })
        .finally(() => setLoading(false));
    } else {
      // Si bien el ticket dice hacer el post al endpoint activities/create
      // lo hago a activities directamente ya que en los doc de la api dice eso
      createActivity(
        `${process.env.REACT_APP_API_URL_BASE}${process.env.REACT_APP_ACTIVITY_ROUTE}`,
        initialValues
      )
        .then(() => confirmAlert("Excelente", "Actividad creada", "Exit"))
        .catch((error) => {
          errorAlert("Error", "Hubo un problema al crear la actividad", "Exit");
          console.log(error);
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <Formik
      enableReinitialize
      validateOnChange={true}
      initialValues={initialValues}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Campo requerido";
        }
        if (!values.image) {
          errors.image = "Imagen Requerida";
        } else {
          if (
            !values.image.includes(acceptedImageFormats[0]) &&
            !values.image.includes(acceptedImageFormats[1]) &&
            values.image !== ""
          ) {
            errors.image = "Formato no aceptado";
          }
        }
        return errors;
      }}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Container maxWidth="lg" component="main">
          <h1>{activity ? "Edit your activity!" : "Create a new activity!"}</h1>
          <Form className="form-container">
            <div className="image-controls">
              {!image && (
                <span className="image-msg">Nothing Uploaded Yet!</span>
              )}
              <Button
                variant="contained"
                id="image"
                component="label"
                className="image-edit-btn"
                startIcon={image ? <EditIcon /> : <PhotoCameraIcon />}
              >
                {image ? "Edit Image" : "Upload Image*"}
                <input
                  type="file"
                  accept=".jpg,.png"
                  name="image"
                  value={undefined}
                  onChange={handleChange}
                  hidden
                />
              </Button>
              {image && !props.errors.image && <img src={image} alt="" />}
            </div>
            <FormHelperText error children={props.errors.image} />
            <TextField
              id="outlined-helperText"
              label="Activity Title"
              type="text"
              name="name"
              placeholder="Activity Title"
              value={props.values.name}
              onChange={handleChange}
              onBlur={props.handleBlur}
              helperText={props.errors.name}
              error={!!props.errors.name}
              required
            />
            {/* <Field
              component={DescriptionField}
              className="input-field"
              type="text"
              name="description"
              placeholder="Write some activity description"
              onChange={handleChange}
            /> */}
            <Box sx={{ m: 1, position: "relative" }}>
              <Button
                sx={{
                  display: "block",
                  margin: "0 auto",
                  width: "clamp(85px, 100%, 300px)",
                }}
                type="submit"
                variant="contained"
                disabled={
                  loading ? loading : Object.keys(props.errors).length !== 0
                }
                onClick={props.handleBlur}
              >
                Submit
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}
            </Box>
          </Form>
        </Container>
      )}
    </Formik>
  );
};

export default ActivitiesForm;
