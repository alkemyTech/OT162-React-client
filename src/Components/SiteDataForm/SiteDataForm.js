import React, { useEffect, useState } from "react";
import axios from "axios";
import rutas from "../../config/rutas";
import "../FormStyles.css";
import { ErrorMessage, Formik } from "formik";
import CKEditor from "ckeditor4-react";
import { Fab, Grid, Icon, TextField } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useParams } from 'react-router-dom'

const SiteDataForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    logo: "",
    short_description: "",
    long_description: "",
    facebook_url: "",
    linkedin_url: "",
  });  

  const { id } = useParams()

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setInitialValues({ ...initialValues, name: e.target.value });
    }
    if (e.target.name === "short_description") {
      setInitialValues({ ...initialValues, short_description: e.target.value });
    }
    if (e.target.name === "long_description") {
      setInitialValues({ ...initialValues, long_description: e.target.value });
    }
    if (e.target.name === "logo") {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.addEventListener(
        "load",
        () => {
          setInitialValues({ ...initialValues, logo: reader.result });
        },
        false
      );
    }
    if (e.target.name === "facebook_url") {
      setInitialValues({ ...initialValues, facebook_url: e.target.value });
    }
    if (e.target.name === "linkedin_url") {
      setInitialValues({ ...initialValues, linkedin_url: e.target.value });
    }
  };

  const handleUpdate = () => {
    axios.put(`${rutas.GET_ORGANIZATION_URL}/1}`, initialValues, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "JWT fefege...",
        },
      })
    .then((response) => {
        console.log(response)
    })
    .catch((e) => {
        console.log("ERROR", e.message);
      });
  };

  useEffect(() => {
    axios
      .get(`${rutas.GET_ORGANIZATION_URL}`)
      .then((result) => {
        setInitialValues({
          name: result.data.data.name,
          logo: result.data.data.logo,
          short_description: result.data.data.short_description,
          long_description: result.data.data.long_description,
          facebook_url: result.data.data.facebook_url,
          linkedin_url: result.data.data.linkedin_url,
        });
        console.log(result)
      })
      .catch((e) => {
        console.log("ERROR", e.message);
      });
  }, []);

  return (
    <div>
      {" "}
      <Formik
        initialValues={initialValues}
        validate={() => {
          const errors = {};
          if (!initialValues.name) {
            errors.name = "Required";
          } else if (!/^.{4,}$/i.test(initialValues.name)) {
            errors.name = "Minimum length of 4 characters";
          }

          if (!initialValues.short_description) {
            errors.short_description = "Required";
          }
          if (!initialValues.long_description) {
            errors.long_description = "Required";
          }

          if (!initialValues.facebook_url) {
            errors.facebook_url = "Required";
          } else if (
            !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/i.test(
              initialValues.facebook_url
            )
          ) {
            errors.facebook_url = "Please enter a valid url format";
          }

          if (!initialValues.linkedin_url) {
            errors.linkedin_url = "Required";
          } else if (
            !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/i.test(
              initialValues.linkedin_url
            )
          ) {
            errors.linkedin_url = "Please enter a valid url format";
          }

          if (!initialValues.logo) {
            errors.logo = "Required";
          }

          return errors;
        }}
        onSubmit={handleUpdate}
      >
        {({ handleBlur, handleSubmit }) => (
          <form className="form-container" onSubmit={handleSubmit}>
            <label htmlFor="text">Name</label>
            <input
              className="input-field"
              type="text"
              name="name"
              placeholder="Please enter a name..."
              onChange={handleChange}
              onBlur={handleBlur}
              value={initialValues.name}
            />
            <ErrorMessage
              name="name"
              component="div"
              className="invalid-feedback"
              style={{ fontSize: "10px", color: "red" }}
            />
            <label htmlFor="text">Short Description</label>
            <CKEditor
              name="short_description"
              data={initialValues.short_description}
              onChange={(evt) => {
                setInitialValues({
                  ...initialValues,
                  short_description: evt.editor.getData(),
                });
              }}
              config={{
                height: "125px",
                extraPlugins: "justify,font,colorbutton",
                toolbarGroups: [
                  {
                    name: "document",
                    groups: ["mode", "document", "doctools"],
                  },
                  { name: "clipboard", groups: ["clipboard", "undo"] },
                  {
                    name: "editing",
                    groups: ["find", "selection", "spellchecker"],
                  },
                  { name: "forms" },
                  "/",
                  { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
                  {
                    name: "paragraph",
                    groups: ["list", "indent", "blocks", "align", "bidi"], // 'align' -> 'justify' plugin
                  },
                  { name: "links" },
                  { name: "insert" },
                  "/",
                  { name: "styles" }, // 'font and fontsize' -> 'font' plugin
                  { name: "colors" }, // 'colors' -> 'colorbutton' plugin
                  { name: "tools" },
                  { name: "others" },
                  { name: "about" },
                ],
              }}
            />
            <ErrorMessage
              name="short_description"
              component="div"
              className="invalid-feedback"
              style={{ fontSize: "10px", color: "red" }}
            />
            <label htmlFor="text">Long Description</label>
            <input
              className="input-field"
              type="text"
              name="long_description"
              placeholder="Please enter a name..."
              onChange={handleChange}
              onBlur={handleBlur}
              value={initialValues.long_description}
            />       
            <ErrorMessage
              name="long_description"
              component="div"
              className="invalid-feedback"
              style={{ fontSize: "10px", color: "red" }}
            />
            <label htmlFor="text">Logo</label>
            <Grid
              container
              spacing={3}
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item xs={12} md={7}>
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="logo"
                  value={initialValues.logo}
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <input
                  accept="image/png, image/jpg"
                  style={{ display: "none" }}
                  id="contained-button-file"
                  type="file"
                  name="logo"
                  onChange={handleChange}
                />
                <label htmlFor="contained-button-file">
                  <Fab
                    size="small"
                    component="span"
                    aria-label="add"
                    variant="extended"
                    color="primary"
                    style={{ padding: "15px" }}
                  >
                    <PhotoCamera />
                    Upload photo
                  </Fab>
                </label>
              </Grid>
            </Grid>
            <ErrorMessage
              name="logo"
              component="div"
              className="invalid-feedback"
              style={{ fontSize: "10px", color: "red" }}
            />
            <label htmlFor="text">Redes Sociales</label>
            <Grid
              container
              spacing={3}
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item xs={10} md={7}>
                <TextField
                  id="outlined"
                  name="facebook_url"
                  label="Facebook"
                  value={initialValues.facebook_url}
                  fullWidth={true}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={2} md={5}>
                <Icon
                  component={FacebookIcon}
                  style={{ fontSize: 50, color: "#3b5998" }}
                />
              </Grid>
            </Grid>
            <ErrorMessage
              name="facebook_url"
              component="div"
              className="invalid-feedback"
              style={{ fontSize: "10px", color: "red" }}
            />
            <Grid
              container
              spacing={3}
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item xs={10} md={7}>
                <TextField
                  id="outlined"
                  name="linkedin_url"
                  label="LinkedIn"
                  value={initialValues.linkedin_url}
                  fullWidth={true}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={2} md={5}>
                <Icon
                  component={LinkedInIcon}
                  style={{ fontSize: 50, color: "#0e76a8" }}
                />
              </Grid>
            </Grid>
            <ErrorMessage
              name="linkedin_url"
              component="div"
              className="invalid-feedback"
              style={{ fontSize: "10px", color: "red" }}
            />
            <button className="submit-btn" type="submit">
              Modificar Datos
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SiteDataForm;