import { Form, Formik } from "formik";
import { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormHelperText,
  TextField,
} from "@mui/material";
import "../FormStyles.css";
import Edit from "@mui/icons-material/Edit";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import moment from "moment";
import axios from "axios";
import swal from "sweetalert";

const acceptedImageFormats = ["image/jpeg", "image/png"];
const url_api_base = "https://ongapi.alkemy.org/api";
const projects_endpoint = "/projects";

const ProjectsForm = ({ project }) => {
  const [initialValues, setInitialValues] = useState({
    id: project ? project.id : "",
    title: project ? project.title : "",
    description: project ? project.description : "",
    due_date: project ? project.due_date : null,
    image: project ? project.image : "",
  });

  const [image, setImage] = useState(project ? project.image : "");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target?.name === "title") {
      setInitialValues({ ...initialValues, title: e.target.value });
    }
    if (e.target?.name === "description") {
      setInitialValues({ ...initialValues, description: e.target.value });
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
    if (project) {
      axios
        .put(
          `${url_api_base}${projects_endpoint}/${initialValues.id}`,
          initialValues
        )
        .then(() => {
          swal({
            title: "Project updated",
            icon: "success",
          });
        })
        .catch((error) => {
          swal({
            title: "Error",
            text: "An error has occurred while updating the project",
            icon: "error",
          });
          console.log(error);
        })
        .finally(() => setLoading(false));
    } else {
      axios
        .post(`${url_api_base}${projects_endpoint}`, initialValues)
        .then(() =>
          swal({
            title: "Project created",
            icon: "success",
          })
        )
        .catch((error) => {
          swal({
            title: "Error",
            text: "An error has occurred while creating the project",
            icon: "error",
          });
          console.log(error);
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = "Campo requerido";
        }
        if (!values.description) {
          errors.description = "Campo desc requerido";
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
          <h1>{project ? "Edit your project!" : "Create a new project!"}</h1>
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
                startIcon={image ? <Edit /> : <PhotoCamera />}
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
              id="title"
              label="Title"
              type="text"
              name="title"
              placeholder="Title"
              value={props.values.title}
              onChange={handleChange}
              helperText={props.errors.title}
              error={!!props.errors.title}
              required
            />
            <TextField
              id="description"
              label="Description"
              type="text"
              name="description"
              placeholder="Write some description"
              value={props.values.description}
              onChange={handleChange}
              helperText={props.errors.description}
              error={!!props.errors.description}
              required
            />

            <LocalizationProvider dateAdapter={DateAdapter}>
              <DatePicker
                label="DD/MM/YYYY"
                value={props.values.due_date}
                onChange={(newDate) => {
                  setInitialValues({
                    ...initialValues,
                    due_date: moment(newDate).format("YYYY-MM-DD"),
                  });
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

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
                Send
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

export default ProjectsForm;
