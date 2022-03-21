import { PhotoCamera } from '@mui/icons-material';
import { Button, CircularProgress, Grid, TextField } from '@mui/material';
import axios from 'axios';
import CKEditor  from 'ckeditor4-react';
import { ErrorMessage, Formik } from 'formik';
import React, { useState } from 'react';
import swal from 'sweetalert';
import { baseUrl } from '../../config/config';
import '../FormStyles.css';

const TestimonialForm = ({testimonial}) => {
   
    const [initialValues, setInitialValues] = useState(testimonial ? {name: testimonial.name, description: testimonial.description, img: testimonial.img,
    id: testimonial.id} : {
        name: '',
        description: '',
        img: ''
    });
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } if(e.target.name === 'description'){
            setInitialValues({...initialValues, description: e.target.value})
        }
        if (e.target.name === "img") {
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.addEventListener(
              "load",
              () => {
                setInitialValues({ ...initialValues, img: reader.result });
              },
              false
            );
          }
    }



    const handleUpdate = () => {
        let data = {};
        if (testimonial.img === initialValues.img) {
          Object.keys(initialValues).forEach((value) => {
            if (value !== "img") {
              data[value] = initialValues[value];
            }
          });
        }
        setLoading(true);
        axios
          .put(`${baseUrl}/testimonial/${testimonial.id}`, data, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": "JWT...",
            },
          })
          .then(()=>{
            swal('Success', 'Testimonial updated succesfully', 'success')
            setLoading(false)
          })
          .catch(()=>{
            swal('Error', 'Oops! something went wrong', 'error')
            setLoading(false)
          });
    }
    const handleCreate = ()=>{
        setLoading(true)
         axios
         .post(`${baseUrl}/testimonial/create`, initialValues, {
           headers: {
            "Content-Type": "application/json",
             "Authorization": "JWT...",
           },
         })
       .then(()=>{
         swal('Success', 'Testimonial created succesfully', 'success')
         setLoading(false)
       })
         .catch(()=>{
           swal('Error', 'Oops! something went wrong', 'error')
           setLoading(false)
         });
       setInitialValues({
         name: "",
         description: "",
         img: "",
         id: "",
       });
    };
    return (
        <div>
      { loading ? <div className="container"> <CircularProgress /> </div>    :(<Formik
        initialValues={initialValues}
        validate={() => {
          const errors = {};
          if (!initialValues.name) {
            errors.name = "This field is required";
          } else if (!/^.{4,}$/i.test(initialValues.name)) {
            errors.name = "It should have at least 4 characters";
          }
          if (!initialValues.description) {
            errors.description = "This field is required";
          }

          if (!initialValues.img) {
            errors.img = "This field is required";
          }

          return errors;
        }}
        onSubmit={testimonial ? handleUpdate : handleCreate}
      >
        {({ handleBlur, handleSubmit }) => (
          <form className="form-container" onSubmit={handleSubmit}>
            <label htmlFor="text">Name</label>
            <input
              className="input-field"
              type="text"
              name="name"
              placeholder="Please enter a title..."
              onChange={handleChange}
              onBlur={handleBlur}
              value={initialValues.name}
            />
            <ErrorMessage
              name="name"
              component="div"
              className="error"
             
            />
            <label htmlFor="text">Description</label>
            <CKEditor
              name="description"
              data={initialValues.description}
              onChange={(evt) => {
                setInitialValues({
                  ...initialValues,
                  description: evt.editor.getData(),
                });
              }}
             
            />
            <ErrorMessage
              name="description"
              component="div"
              className="error"
             
            />
          
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
                  value={initialValues.img}
                  
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="contained-button-file"
                  type="file"
                  name="img"
                  onChange={handleChange}
                />
                <label htmlFor="contained-button-file">
                  <Button
                    size="small"
                    component="span"
                    aria-label="add"
                    variant="contained"
                    color="primary"
                    style={{ padding: "15px" }}
                    
                  >
                    <PhotoCamera style={{ paddingRight: "8px" }} />
                    Upload 
                  </Button>
                </label>
              </Grid>
            </Grid>
            <ErrorMessage
              name="img"
              component="div"
              className="error"
             
            />
            <button className="submit-btn" type="submit">Send</button>
           
          </form>
        )}
      </Formik>)}
      </div>
    );
}
 
export default TestimonialForm;