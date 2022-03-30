import {
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
  Stack,
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const slideURL = "https://ongapi.alkemy.org/api/slide";

const SlidesList = () => {
  const slidesMock = [
    {
      id: 1,
      name: "Titulo de prueba",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at pretium ligula. Vivamus egestas erat at sem interdum porttitor. Aliquam ut purus tortor. Nulla ut.",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAG1BMVEXMzMyWlpacnJy+vr6jo6PFxcW3t7eqqqqxsbHbm8QuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAiklEQVRYhe3QMQ6EIBAF0C+GSInF9mYTs+1ewRsQbmBlayysKefYO2asXbbYxvxHQj6ECQMAEREREf2NQ/fCtp5Zky6vtRMkSJEzhyISynWJnzH6Z8oQlzS7lEc/fLmmQUSvc16OrCPqRl1JePxQYo1ZSWVj9nxrrOb5esw+eXdvzTWfTERERHRXH4tWFZGswQ2yAAAAAElFTkSuQmCC",
    },
    {
      id: 2,
      name: "Titulo de prueba",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at pretium ligula. Vivamus egestas erat at sem interdum porttitor. Aliquam ut purus tortor. Nulla ut.",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAG1BMVEXMzMyWlpacnJy+vr6jo6PFxcW3t7eqqqqxsbHbm8QuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAiklEQVRYhe3QMQ6EIBAF0C+GSInF9mYTs+1ewRsQbmBlayysKefYO2asXbbYxvxHQj6ECQMAEREREf2NQ/fCtp5Zky6vtRMkSJEzhyISynWJnzH6Z8oQlzS7lEc/fLmmQUSvc16OrCPqRl1JePxQYo1ZSWVj9nxrrOb5esw+eXdvzTWfTERERHRXH4tWFZGswQ2yAAAAAElFTkSuQmCC",
    },
    {
      id: 3,
      name: "Titulo de prueba",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at pretium ligula. Vivamus egestas erat at sem interdum porttitor. Aliquam ut purus tortor. Nulla ut.",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAG1BMVEXMzMyWlpacnJy+vr6jo6PFxcW3t7eqqqqxsbHbm8QuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAiklEQVRYhe3QMQ6EIBAF0C+GSInF9mYTs+1ewRsQbmBlayysKefYO2asXbbYxvxHQj6ECQMAEREREf2NQ/fCtp5Zky6vtRMkSJEzhyISynWJnzH6Z8oQlzS7lEc/fLmmQUSvc16OrCPqRl1JePxQYo1ZSWVj9nxrrOb5esw+eXdvzTWfTERERHRXH4tWFZGswQ2yAAAAAElFTkSuQmCC",
    },
  ];

  const editSlide = (id) => {
    console.log(id);
    // navigate(`/slides/edit/${id}`)
  };
  const deleteSlide = (id) => {
    swal({
      title: "Are you sure you want to delete the slide?",
      text: "This change cannot be reverted.",
      buttons: ["No", "Yes"],
      dangerMode: "true",
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`${slideURL}/${id}`)
          .then(() => swal({ title: "Slide deleted", icon: "success" }))
          .catch((err) => {
            swal({
              title: "Error",
              text: "An error has ocurred while trying to delete teh slide",
              icon: "error",
            });
            console.log(err);
          });
      }
    });
  };

  return (
    <Container maxWidth="lg">
      <Button
        component={Link}
        to="/backoffice/create-slide"
        variant="contained"
        sx={{ float: "right", marginBottom: "2rem" }}
      >
        Create a new slide
      </Button>
      <TableContainer component={Paper} elevation={3}>
        <Table sx={{ minWidth: 768 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slidesMock.map((slide) => (
              <TableRow
                key={slide.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {slide.id}
                </TableCell>
                <TableCell align="center">{slide.name}</TableCell>
                <TableCell align="center">{slide.description}</TableCell>
                <TableCell align="center">
                  <img src={slide.image} alt={slide.name} />
                </TableCell>
                <TableCell align="center">
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="outlined"
                      onClick={() => editSlide(slide.id)}
                    >
                      EDIT
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => deleteSlide(slide.id)}
                    >
                      DELETE
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default SlidesList;