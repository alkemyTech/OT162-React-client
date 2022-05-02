import { useState, useEffect } from "react";
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
import DescriptionField from "./DescriptionField";
import { useDispatch, useSelector } from "react-redux";
import {
  selectActivities,
  getActivitiesStatus,
  getActivitiesError,
  postActivities,
  updateActivities,
} from "../../features/activities/activitiesSlice";
import { unwrapResult } from "@reduxjs/toolkit";

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
  const [method, setMethod] = useState(activity ? "PUT" : "POST");

  const dispatch = useDispatch();
  const activities = useSelector(selectActivities);
  const activitiesStatus = useSelector(getActivitiesStatus);
  const activitiesError = useSelector(getActivitiesError);
  // console.log(activity);

  useEffect(() => {
    activitiesStatus === "idle" && setLoading(false);
    activitiesStatus === "loading" && setLoading(true);
    if(activitiesStatus === "failed" ){
      if(method === "POST"){
        errorAlert("Error", "Error al crear actividad", "Ok") 
        setLoading(false)
      }
      if(method === "PUT"){
        errorAlert("Error", "Error al actualizar actividad", "Ok") 
        setLoading(false)
      }      
    } 
    if(activitiesStatus === "succeeded" ){
      if(method === "POST"){
        confirmAlert("Excelente", "Actividad creada", "Ok");
        setLoading(false)
      }
      if(method === "PUT"){
        confirmAlert("Excelente", "Actividad actualizada", "Ok");
        setLoading(false)
      }      
    }    
    console.log(activitiesStatus)
    
  }, [activitiesStatus, activitiesError, activities, method]);

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
      dispatch(updateActivities(initialValues))      
    } else {     
      dispatch(postActivities(initialValues))       
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
          <h1>{activity ? "Editar actividad" : "Crear una nueva actividad"}</h1>
          <Form className="form-container">
            <div className="image-controls">
              {!image && <span className="image-msg">Nada subido aún!</span>}
              <Button
                variant="contained"
                id="image"
                component="label"
                className="image-edit-btn"
                startIcon={image ? <EditIcon /> : <PhotoCameraIcon />}
              >
                {image ? "Editar Imagen" : "Subir Imagen*"}
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
              label="Titulo de la actividad"
              type="text"
              name="name"
              placeholder="Titulo de la actividad"
              value={props.values.name}
              onChange={handleChange}
              onBlur={props.handleBlur}
              helperText={props.errors.name}
              error={!!props.errors.name}
              required
            />
            <DescriptionField
              className="input-field"
              name="description"
              onChange={handleChange}
              data={initialValues.description}
            />
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
                Enviar
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

              // .then(() => confirmAlert("Excelente", "Actividad actualizada", "Exit"))
              // .catch((error) => {
              //   errorAlert(
              //     "Error",
              //     "Hubo un problema al actualizar la actividad",
              //     "Exit"
              //   );
              //   console.log(error);
              // })
              // .finally(() => setLoading(false));