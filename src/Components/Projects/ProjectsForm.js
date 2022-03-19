import { Container } from "@mui/material";
import { useState } from "react";
import "../FormStyles.css";

const ProjectsForm = ({ project }) => {
  const [initialValues, setInitialValues] = useState({
    title: project ? project.title : "",
    description: project ? project.description : "",
    due_date: project ? project.due_date : "", // Tiene que ser un Date
    image: project ? project.image : "",
  });

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setInitialValues({ ...initialValues, title: e.target.value });
    }
    if (e.target.name === "description") {
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
        },
        false
      );
    }
    if (e.target.name === "due_date") {
      setInitialValues({ ...initialValues, due_date: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(initialValues);
  };

  return (
    <Container maxWidth="lg" component="main">
      <h1>{project ? "Edit your project!" : "Create a new project!"}</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={initialValues.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="description"
          value={initialValues.description}
          onChange={handleChange}
          placeholder="Write some description"
        />
        <input
          type="date"
          name="due_date"
          value={initialValues.due_date}
          onChange={handleChange}
        />
        <input
          type="file"
          name="image"
          value={undefined}
          onChange={handleChange}
        />
        <button className="submit-btn" type="submit">
          Send
        </button>
      </form>
    </Container>
  );
};

export default ProjectsForm;
