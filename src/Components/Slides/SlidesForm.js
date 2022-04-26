import "../FormStyles.css";
import { useState, useEffect } from "react";
import CKEditor from "ckeditor4-react";
import Input from "@mui/material/Input";
import { imageFormats } from "../../features/SlidesForm/imageFormats";
import "../FormStyles.css";
import { getSlide, postSlide, updateSlide } from "../../Services/slideService";
import { useParams } from "react-router-dom";
import { Box, Button, CircularProgress } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { confirmAlert, errorAlert } from "../../features/alerts/alerts";
import { useNavigate } from "react-router-dom";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const SlidesForm = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [initialValues, setInitialValues] = useState({
    id: "",
    name: "",
    description: "",
    image: "",
    order: "",
    user_id: 0,
    created_at: "",
    updated_at: "",
    deleted_at: "",
  });
  const [image, setImage] = useState("");

  useEffect(() => {
    if (id) {
      setLoadingData(true);
      getSlide(id)
        .then(async (response) => {
          let blob = await fetch(response.data.data.image).then((r) =>
            r.blob()
          );
          getBase64(blob).then((data) => {
            setInitialValues({
              ...initialValues,
              ...response.data.data,
              image: data,
            });
          });
          setImage(response.data.data.image);
        })
        .finally(() => setLoadingData(false));
    }
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setInitialValues({ ...initialValues, name: e.target.value });
    }
    if (e.target.name === "image") {
      let imageFile = e.target.files[0];
      getBase64(imageFile).then((data) => {
        setInitialValues({ ...initialValues, image: data });
        setImage(data);
      });
    }
  };

  const handleEditorChange = (e) => {
    setInitialValues({ ...initialValues, description: e.editor.getData() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (id) {
      updateSlide(id, initialValues)
        .then(() =>
          confirmAlert("Slide actualizado correctamente", "", "Continuar")
        )
        .catch((error) => errorAlert("Error", error.message, "Continuar"))
        .finally(() => {
          setLoading(false);
          navigate("/backoffice/slides");
        });
    } else {
      postSlide(initialValues)
        .then(() => confirmAlert("Slide creado correctamente", "", "Continuar"))
        .catch((error) => errorAlert("Error", error.message, "Continuar"))
        .finally(() => {
          setLoading(false);
          navigate("/backoffice/slides");
        });
    }
  };

  return (
    <>
      {loadingData ? (
        <CircularProgress
          size={50}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ) : (
        <form className="form-container" onSubmit={handleSubmit}>
          <h3>Título del Slide</h3>
          <input
            className="input-field"
            type="text"
            name="name"
            value={initialValues.name}
            onChange={handleChange}
            placeholder="Slide Title"
          ></input>
          <h3>Descripción</h3>
          <CKEditor
            name="description"
            data={initialValues.description}
            onChange={handleEditorChange}
          />
          <h3>Agregar imagen</h3>
          <p>(Solo formatos *.JPEG, *.JGP y *.PNG)</p>
          <div className="image-controls">
            {!image && <span className="image-msg">Nada Subido Aún!</span>}
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
            {image && <img src={image} alt="" />}
          </div>
          <Box sx={{ m: 1, position: "relative" }}>
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                display: "block",
                margin: "0 auto",
                width: "clamp(85px, 100%, 300px)",
              }}
            >
              {id ? "Editar" : "Crear"}
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
        </form>
      )}
    </>
  );
};

export default SlidesForm;
