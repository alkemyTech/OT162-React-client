import React, { useEffect, useState } from "react";
import CKEditor from "ckeditor4-react";
import axios from "axios";
import rutas from "../../config/rutas";
import { ErrorMessage, Formik } from "formik";
import "../../Components/FormStyles.css";
import {
  Backdrop,
  Button,
  Fab,
  Grid,
  Icon,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { PhotoCamera } from "@mui/icons-material";

const NewsForm = (props) => {
  const { news } = props;

  const [initialValues, setInitialValues] = useState(
    news
      ? {
          name: news.name,
          content: news.content,
          image: news.image,
          category_id: news.category_id,
        }
      : {
          name: "",
          content: "",
          image: "",
          category_id: "",
        }
  );
  const [modalConfirmation, setModalConfirmation] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    if (e.target.name === "title") {
      console.log("asd");
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
    if (e.target.name === "category") {
      setInitialValues({ ...initialValues, category_id: e.target.value });
    }
  };

  const handleUpdateNew = () => {
    let dataNew = {};
    if (news.image === initialValues.image) {
      Object.keys(initialValues).forEach((value) => {
        if (value !== "image") {
          dataNew[value] = initialValues[value];
        }
      });
    }
    axios
      .put(`${rutas.NEWS_URL}/${news.id}`, dataNew, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "JWT fefege...",
        },
      })
      .then(function (response) {
        setModalConfirmation(true);
      })
      .catch(function (error) {
        console.log("ERROR: ", error);
      });
  };

  const handleCreateNew = () => {
    axios
      .post(rutas.NEWS_URL, initialValues, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "JWT fefege...",
        },
      })
      .then(function (response) {
        setModalConfirmation(true);
      })
      .catch(function (error) {
        console.log("ERROR: ", error);
      });
    setInitialValues({
      name: "",
      content: "",
      image: "",
      category_id: "",
    });
  };

  useEffect(() => {
    axios
      .get(rutas.GET_CATEGORIES_URL)
      .then((result) => {
        setCategories(result.data.data);
      })
      .catch((e) => {
        console.log("ERROR", e.message);
      });
  }, []);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={() => {
          const errors = {};
          if (!initialValues.name) {
            errors.title = "Required";
          } else if (!/^.{4,}$/i.test(initialValues.name)) {
            errors.title = "Minimum length of 4 characters";
          }
          if (!initialValues.content) {
            errors.content = "Required";
          }

          if (!initialValues.category_id) {
            errors.category_id = "Required";
          }

          if (!initialValues.image) {
            errors.image = "Required";
          }

          return errors;
        }}
        onSubmit={news ? handleUpdateNew : handleCreateNew}
      >
        {({ handleBlur, handleSubmit }) => (
          <form className="form-container" onSubmit={handleSubmit}>
            <label htmlFor="text">Titulo</label>
            <input
              className="input-field"
              type="text"
              name="title"
              placeholder="Please enter a title..."
              onChange={handleChange}
              onBlur={handleBlur}
              value={initialValues.name}
            />
            <ErrorMessage
              name="title"
              component="div"
              className="invalid-feedback"
              style={{ fontSize: "10px", color: "red" }}
            />
            <label htmlFor="text">Contenido</label>
            <CKEditor
              name="content"
              data={initialValues.content}
              onChange={(evt) => {
                setInitialValues({
                  ...initialValues,
                  content: evt.editor.getData(),
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
              name="content"
              component="div"
              className="invalid-feedback"
              style={{ fontSize: "10px", color: "red" }}
            />
            <label htmlFor="text">Image</label>
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
                  accept="image/*"
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
                    fullWidth={true}
                  >
                    <PhotoCamera />
                    Upload photo
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
            <label htmlFor="text">Category</label>
            <select
              className="select-field"
              name="category"
              onChange={handleChange}
              value={initialValues.category_id}
            >
              <option value="" disabled>
                Select category
              </option>
              {categories.length > 0 &&
                categories.map((cat) => {
                  return <option value={cat.id}>{cat.name}</option>;
                })}
            </select>
            <ErrorMessage
              name="category_id"
              component="div"
              className="invalid-feedback"
              style={{ fontSize: "10px", color: "red" }}
            />
            <button className="submit-btn" type="submit">
              Send
            </button>
          </form>
        )}
      </Formik>
      <Modal
        open={modalConfirmation}
        onClose={() => setModalConfirmation(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Paper
          variant="outlined"
          style={{
            position: "absolute",
            maxWidth: 400,
            padding: "20px",
            backgroundColor: "#e0e0e0",
          }}
        >
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={4}>
              <Icon
                component={CheckIcon}
                style={{ fontSize: 100, color: "#61b146" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography gutterBottom align="center" variant="h4">
                Operación Exitosa
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography gutterBottom align="center" variant="body1">
                La novedad fue
                {news ? " actualizada con éxito." : " creada con éxito."}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                fullWidth={true}
                size="medium"
                variant="contained"
                onClick={() => setModalConfirmation(false)}
                style={{ background: "#61b146" }}
              >
                Aceptar
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  );
};

export default NewsForm;
