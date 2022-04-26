import React, { useEffect, useState } from "react";
import CKEditor from "ckeditor4-react";
import axios from "axios";
import rutas from "../../config/rutas";
import { ErrorMessage, Formik } from "formik";
import "../../Components/FormStyles.css";
import { Button, Fab, Grid, TextField } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { confirmAlert, errorAlert } from "../../features/alerts/alerts";
import { useParams } from "react-router-dom";
import { getAsyncNewsByIdThunk } from "../../features/news/newsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PostNews, PutNews } from "../../Services/newsApiService";
import Loading from "../Utilities/Loading";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const NewsForm = () => {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState({
    name: "",
    content: "",
    image: "",
    category_id: "",
  });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const newsStatus = useSelector((state) => state.news.status);
  const news = useSelector((state) => state.news.data);
  let navigate = useNavigate();
  useEffect(() => {
    if (newsStatus === "idle" || news.length > 0) {
      if (id) {
        setLoading(true);
        dispatch(getAsyncNewsByIdThunk(id));
      }
    }
    if (newsStatus === "success") {
      fetch(news.image)
        .then((r) => r.blob())
        .then((blob) => {
          getBase64(blob).then((data) => {
            setInitialValues({
              ...initialValues,
              ...news,
              image: data,
            });
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
    if (newsStatus === "failed") {
      errorAlert("Error al obtener la noticia", "", "Ok");
      navigate("/backoffice/news");
    }
  }, [newsStatus, dispatch]);

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setInitialValues({ ...initialValues, name: e.target.value });
    }
    if (e.target.name === "image") {
      let imageFile = e.target.files[0];
      getBase64(imageFile).then((data) => {
        setInitialValues({ ...initialValues, image: data });
      });
    }
    if (e.target.name === "category") {
      setInitialValues({ ...initialValues, category_id: e.target.value });
    }
  };

  const handleUpdateNew = () => {
    PutNews(news.id, initialValues)
      .then(() => confirmAlert("Noticia actualizada", "", "Continuar"))
      .then(() => navigate("/backoffice/news"))
      .catch((error) => {
        console.log("ERROR: ", error);
        errorAlert("Error", "Error al actualizar noticia", "Continuar");
      });
  };

  const handleCreateNew = () => {
    PostNews(initialValues)
      .then(() => confirmAlert("Noticia creada", "", "Continuar"))
      .then(() => navigate("/backoffice/news"))
      .catch((error) => {
        console.log("ERROR: ", error);
        errorAlert("Error", "Error al crear noticia", "Continuar");
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
      {loading ? (
        <Loading open />
      ) : (
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
          onSubmit={news.id ? handleUpdateNew : handleCreateNew}
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
                    >
                      <PhotoCamera />
                      Subir Foto
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
              <label htmlFor="text">Categoria</label>
              <select
                className="select-field"
                name="category"
                onChange={handleChange}
                value={initialValues.category_id}
              >
                <option value="" disabled>
                  Seleccione una categoria
                </option>
                {categories.length > 0 &&
                  categories.map((cat) => {
                    return (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    );
                  })}
              </select>
              <ErrorMessage
                name="category_id"
                component="div"
                className="invalid-feedback"
                style={{ fontSize: "10px", color: "red" }}
              />
              <Button variant="contained" type="submit">
                Enviar
              </Button>
            </form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default NewsForm;
