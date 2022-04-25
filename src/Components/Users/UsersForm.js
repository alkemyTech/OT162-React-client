import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ErrorMessage, Formik } from "formik";
import "../FormStyles.css";
import Popup from "reactjs-popup";
import { Document } from "react-pdf";
import { Page, pdfjs,  } from "react-pdf";
import samplePdf from '../../assets/pdf/pdfPrueba.pdf'
import '../../assets/styles/Modal.css'
import swal from "sweetalert";
import { errorAlert } from "../../features/alerts/alerts";
import { useParams } from "react-router-dom";
import { getUserByID, putUsers, postUsers } from "../../Services/usersApiService";

const UserForm = ({ user }) => {
  const getId = useParams(user)
  const userToEditID = getId.id

  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    roleId: "",
    profile_image: null,
    password: "",
  });
  const [checked, setChecked] = useState(false)
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); 

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const [imageFile, setImageFile] = useState();

  const handleChecked = (e) =>{
     setChecked(e.target.checked);
  }
  useEffect(() => {
    if (userToEditID) {
      getUserByID(userToEditID)
        .then(async (response) =>{
          let userData = response.data.data
          setInitialValues(userData)
        })
    }
  }, [user]);

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onloadend = () => {
        const imageResult = fileReader.result;
        const imageBase64 = imageResult.split(',')[1];
        // const image64String = JSON.stringify(imageBase64)
        resolve(imageBase64)
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, [])
  

  const handleChange = async (e) => {
    switch (e.target.name) {
      case "name":
        setInitialValues({ ...initialValues, name: e.target.value });
        break;
      case "email":
        setInitialValues({ ...initialValues, email: e.target.value });
        break;
      case "password":
        setInitialValues({ ...initialValues, password: e.target.value });
        break;
      default:
        break;
    }
    if (e.target.files) {
      const file = e.target.files[0];
      const profilePhoto64 = await convertBase64(file);
      setImageFile(file);
      setInitialValues({ ...initialValues, profile_image: profilePhoto64 })
    }
  };

  const handleEdit = (e) => {
    if (!checked) return swal('Error', 'You must accept our terms and conditions', 'error')

    if (userToEditID !== undefined) {
      delete initialValues.profile_image
      console.log(initialValues);
      putUsers(userToEditID, initialValues)
        .then((resp) => {
          console.log(resp);
        })
        .catch((resp) => {
          console.log(resp);
          errorAlert("Error", "An error has occurred while updating the user", "error");
        });
      console.log(e)
    } else {
      postUsers(e)
        .then((resp) => {
          console.log(resp);
        })
        .catch((resp) => {
          console.log(resp);
          errorAlert("Error", "An error has occurred while creating the user", "error");
        });
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={() => {
          const { name, email, profile_image, roleId, password } = initialValues;
          const emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+/i;
          const imageRegex = /[/].?[jpg?].?[png]/i;
          const errors = {};
          if (!name) {
            errors.name = "Campo obligatorio";
          } else if (!name.length >= 4) {
            errors.name = "El nombre debe tener al menos 4 caracteres.";
          } else if (!email) {
            errors.email = "Campo obligatorio";
          } else if (!emailRegex.test(email)) {
            errors.email = "Email incorrecto.";
          } else if (!userToEditID) {
            if(!profile_image){
              errors.profile_image = "Debe cargar una imagen, formato JPG o PNG";
            }
          } else if (profile_image && !imageRegex.test(imageFile.type)) {
            errors.profile_image = "El formato de la imagen debe ser JPG o PNG";
          } else if (roleId !== "1" && roleId !== "2") {
            errors.roleId = "Debe elegir un rol de usuario.";
          } else if (!password) {
            errors.password = "Campo obligatorio";
          } else if (!password.length >= 8) {
            errors.password = "La contraseña debe tener al menos 8 caracteres.";
          } 
          return errors;
        }}
        onSubmit={() => handleEdit(initialValues)}
      >
        {({ handleSubmit }) => (
          <form className="form-container" onSubmit={handleSubmit}>
            <input
              className="input-field"
              type="text"
              name="name"
              value={initialValues.name || ""}
              onChange={handleChange}
              placeholder="Name"
            ></input>
            <ErrorMessage
              name="name"
              component="div"
              className="invalid-feedback"
            />
            <input
              className="input-field"
              type="text"
              name="email"
              value={initialValues.email || ""}
              onChange={handleChange}
              placeholder="Email"
            ></input>
            <ErrorMessage
              name="email"
              component="div"
              className="invalid-feedback"
            />
            <input
              className="input-field"
              type="file"
              name="profile_image"
              onChange={handleChange}
            />
            <ErrorMessage
              name="profile_image"
              component="div"
              className="invalid-feedback"
            />
            <input
              className="input-field"
              type="text"
              name="password"
              value={initialValues.password || ""}
              onChange={handleChange}
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="invalid-feedback"
            />
            <select
              className="input-field"
              value={initialValues.roleId || ""}
              onChange={(e) =>
                setInitialValues({ ...initialValues, roleId: e.target.value })
              }
            >
              <option value="" disabled>
                Select the role
              </option>
              <option value="1">Administrador</option>
              <option value="2">Regular</option>
            </select>
            <ErrorMessage
              name="roleId"
              component="div"
              className="invalid-feedback"
            />
               

            
            <label>
            <input type="checkbox" name="check" checked={checked}  
            onChange={handleChecked}
             />
              Acepto
              <Popup trigger={<button type= 'button'className="btn"> Terminos y condiciones</button>}  modal>
       
     {close => (
      <div className="full">

      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="Example__container">
        <div className="Example__container__document">
        <Document
        file={samplePdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="navigation">
        
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage} className="left">
          ←
        </button>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
          className="right"
        >
          →
        </button>
      </div>
          
        </div>
      </div>
               
            
             
    
        
      </div>
      </div>
    )}
  </Popup>
              </label>
              <ErrorMessage
              name="check"
              component="div"
              className="invalid-feedback"
            />
           
            <button disabled={!checked} className="submit-btn" type="submit">
              Enviar
            </button>
          </form>
        )}
      </Formik>
      

    </div>
  );
};

export default UserForm;

UserForm.propTypes = {
  user: PropTypes.object,
};

UserForm.defaultProps = {
  user: {},
};
