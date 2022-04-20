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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { errorAlert } from "../../features/alerts/alerts";
import { getSlides } from "../../features/slide/slideSlice";
import PersistentSideBar from "../../features/backoffice/sideBar";

const slideURL = "https://ongapi.alkemy.org/api/slides";

const SlidesList = () => {
  const dispatch = useDispatch();
  const slides = useSelector((state) => state.slide.list);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSlides());
  }, [dispatch]);

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
    navigate('/backoffice/create-slide');
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
            errorAlert("Error", "An error has ocurred while trying to delete the slide");
            console.log(err);
          });
      }
    });
  };

  return (
    <div>
      <div>
        <PersistentSideBar/>
      </div>
      <div>
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
                {slides.map((slide) => (
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
                      <img src={slide.image} alt={slide.name} height="300"/>
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
      </div>
    </div>
  );
};

export default SlidesList;
