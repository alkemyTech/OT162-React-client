import React, { useEffect, useState } from "react";
// import { CKEditor } from "ckeditor4-react";
import axios from "axios";
import { ErrorMessage, Formik } from "formik";
import "../../Components/FormStyles.css";

const NewsForm = ( ) => {
  // const [initialValues, setInitialValues] = useState({
  //   title: "",
  //   content: "",
  //   category: "",
  // });
  
  const [categories, setCategories] = useState([]);

  // const handleChange = (e) => {
  //   if (e.target.name === "title") {
  //     setInitialValues({ ...initialValues, title: e.target.value });
  //   }
  //   if (e.target.name === "content") {
  //     setInitialValues({ ...initialValues, content: e.target.value });
  //   }
  //   if (e.target.name === "category") {
  //     setInitialValues({ ...initialValues, category: e.target.value });
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(initialValues);
  // };

  useEffect(() => {
    axios
      .get("https://ongapi.alkemy.org/api/categories")
      .then((result) => {
        setCategories(result.data.data);
      })
      .catch((e) => {
        console.log("ERROR", e.message);
      });
  }, []);

  return (
    <div>
      {/* <CKEditor
        initData={<p>Hello from CKEditor 4!</p>}
        onInstanceReady={() => {
          alert("Editor is ready!");
        }}
      /> */}
      {/* <CKEditor4
      config={{
        extraPlugins: "justify,font,colorbutton",
        toolbarGroups: [
          { name: "document", groups: ["mode", "document", "doctools"] },
          { name: "clipboard", groups: ["clipboard", "undo"] },
          { name: "editing", groups: ["find", "selection", "spellchecker"] },
          { name: "forms" },
          "/",
          { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
          {
            name: "paragraph",
            groups: ["list", "indent", "blocks", "align", "bidi"] // 'align' -> 'justify' plugin
          },
          { name: "links" },
          { name: "insert" },
          "/",
          { name: "styles" }, // 'font and fontsize' -> 'font' plugin
          { name: "colors" }, // 'colors' -> 'colorbutton' plugin
          { name: "tools" },
          { name: "others" },
          { name: "about" }
        ]
      }}
    /> */}
      <Formik
        initialValues={{ title: "", content: "", image:"",category: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = "Required";
          } else if (!/^.{4,}$/i.test(values.title)) {
            errors.title = "Minimum length of 4 characters";
          }
          if (!values.content) {
            errors.content = "Required";
          }

          if (!values.category) {
            errors.category = "Required";
          }

          if (!values.image) {
            errors.image = "Required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form className="form-container" onSubmit={handleSubmit}>
            <label htmlFor="text">Titulo</label>
            <input
              className="input-field"
              type="text"
              name="title"
              placeholder="Please enter a title..."
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <ErrorMessage
              name="title"
              component="div"
              className="invalid-feedback"
              style={{ fontSize: "10px", color: "red" }}
            />
            <label htmlFor="text">Contenido</label>
            <input
              className="input-field"
              type="text"
              name="content"
              placeholder="Please enter a content..."
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
            />
            <ErrorMessage
              name="content"
              component="div"
              className="invalid-feedback"
              style={{ fontSize: "10px", color: "red" }}
            />
            <label htmlFor="text">Image</label>
            <input accept="image" type="file" name="image" />
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
              value={values.category}
            >
              <option value="" disabled>
                Select category
              </option>
              {categories.length > 0 &&
                categories.map((cat, index) => {
                  return <option value={cat.index}>{cat.name}</option>;
                })}
            </select>
            <ErrorMessage
              name="category"
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
    </div>
  );
};

export default NewsForm;
