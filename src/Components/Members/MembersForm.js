import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../FormStyles.css";
import { ErrorMessage, Formik } from "formik";
import CKEditor from "ckeditor4-react";
import { Button, Fab, Grid, Icon, TextField } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  getMemberById,
  updateMember,
  addNewMember,
} from "../../Services/membersApiService";
import { errorAlert, confirmAlert } from "../../features/alerts/alerts";
import { useNavigate } from "react-router-dom";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const MembersForm = () => {
  let navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    name: "",
    image: "",
    description: "",
    facebookUrl: "",
    linkedinUrl: "",
  });

  const { id } = useParams();

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setInitialValues({ ...initialValues, name: e.target.value });
    }
    if (e.target.name === "image") {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.addEventListener(
        "load",
        () => {
          setInitialValues({ ...initialValues, image: reader.result });
        },
        false
      );
    }
    if (e.target.name === "facebookUrl") {
      setInitialValues({ ...initialValues, facebookUrl: e.target.value });
    }
    if (e.target.name === "linkedinUrl") {
      setInitialValues({ ...initialValues, linkedinUrl: e.target.value });
    }
  };

  const handleEdit = () => {
    updateMember(id, initialValues)
      .then(() =>
        confirmAlert("Miembro actualizado correctamente", "", "Continuar")
      )
      .catch((error) => errorAlert("Error", error.message, "Continuar"))
      .finally(() => {
        navigate("/backoffice/members");
      });
  };
  const handleCreate = () => {
    addNewMember(initialValues)
      .then(() => confirmAlert("Miembro creado correctamente", "", "Continuar"))
      .catch((error) => errorAlert("Error", error.message, "Continuar"))
      .finally(() => {
        navigate("/backoffice/members");
      });
  };

  useEffect(() => {
    getMemberById(id)
      .then((result) => {
        fetch(result.data.data.image)
          .then((r) => r.blob())
          .then((blob) => {
            getBase64(blob).then((data) => {
              setInitialValues({
                name: result.data.data.name,
                image: data,
                description: result.data.data.description,
                facebookUrl: result.data.data.facebookUrl,
                linkedinUrl: result.data.data.linkedinUrl,
              });
            });
          });
      })
      .catch((e) => {
        console.log("ERROR", e.message);
        errorAlert(
          "Error",
          "Error al obtener información de miembros",
          "error"
        );
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
            errors.name = "Requerido";
          } else if (!/^.{4,}$/i.test(initialValues.name)) {
            errors.name = "Mínimo debe tener 4 caracteres";
          }

          if (!initialValues.description) {
            errors.description = "Requerido";
          }

          if (!initialValues.facebookUrl) {
            errors.facebookUrl = "Requerido";
          } else if (
            !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/i.test(
              initialValues.facebookUrl
            )
          ) {
            errors.facebookUrl = "Porfavor ingrese una url válida";
          }

          if (!initialValues.linkedinUrl) {
            errors.linkedinUrl = "Requerido";
          } else if (
            !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/i.test(
              initialValues.linkedinUrl
            )
          ) {
            errors.linkedinUrl = "Porfavor ingrese una url válida";
          }

          if (!initialValues.image) {
            errors.image = "Requerido";
          }

          return errors;
        }}
        onSubmit={id ? handleEdit : handleCreate}
      >
        {({ handleBlur, handleSubmit }) => (
          <form className="form-container" onSubmit={handleSubmit}>
            <label htmlFor="text">Nombre</label>
            <input
              className="input-field"
              type="text"
              name="name"
              placeholder="Porfavor ingrese un nombre..."
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
            <label htmlFor="text">Descripción</label>
            <CKEditor
              name="description"
              data={initialValues.description}
              onChange={(evt) => {
                setInitialValues({
                  ...initialValues,
                  description: evt.editor.getData(),
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
              name="description"
              component="div"
              className="invalid-feedback"
              style={{ fontSize: "10px", color: "red" }}
            />
            <label htmlFor="text">Imagen</label>
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
                  label="Image"
                  value={initialValues.image}
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <input
                  accept="image/png, image/jpg"
                  style={{ display: "none" }}
                  id="contained-button-file"
                  type="file"
                  name="image"
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
                    Subir Imagen
                  </Fab>
                </label>
              </Grid>
            </Grid>
            <ErrorMessage
              name="image"
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
                  name="facebookUrl"
                  label="Facebook"
                  value={initialValues.facebookUrl}
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
              name="facebookUrl"
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
                  name="linkedinUrl"
                  label="LinkedIn"
                  value={initialValues.linkedinUrl}
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
              name="linkedinUrl"
              component="div"
              className="invalid-feedback"
              style={{ fontSize: "10px", color: "red" }}
            />
            <Button type="submit" variant="contained">
              Enviar
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default MembersForm;
