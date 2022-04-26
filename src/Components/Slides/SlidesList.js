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
  TextField,
} from "@mui/material";
import axios from "axios";
import { Field } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { confirmAlert, errorAlert } from "../../features/alerts/alerts";
import { getSlides, getSlidesSearch } from "../../features/slide/slideSlice";
import NavbarBackoffice from "../Backoffice/NavbarBackoffice";
import Loading from "../Utilities/Loading";

const slideURL = process.env.REACT_APP_SLIDES_ROUTE;

const SlidesList = () => {
  const dispatch = useDispatch();
  const slides = useSelector((state) => state.slide.list);
  const loading = useSelector((state) => state.slide.status);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.length > 2) {
      dispatch(getSlidesSearch(search));
    } else {
      dispatch(getSlides());
    }
  }, [dispatch, search]);

  const editSlide = (id) => navigate(`/backoffice/edit-slide/${id}`);
  const deleteSlide = (id) => {
    swal({
      title: "¿Está seguro que quiere eliminar el slide?",
      text: "Este cambio es irreversible.",
      buttons: ["No", "Si"],
      dangerMode: "true",
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`${slideURL}/${id}`)
          .then(() => {
            confirmAlert("Slide eliminado", "", "Continuar");
            dispatch(getSlides());
          })
          .catch((err) => {
            errorAlert(
              "Error",
              "Un error ha ocurrido al intentar eliminar el slide."
            );
            console.log(err);
          });
      }
    });
  };

  return (
    <div>
      <div>
        <NavbarBackoffice />
      </div>
      <div>
        <Container maxWidth="lg">
          <TextField
            label="Buscar..."
            id="standard-size-small"
            size="small"
            variant="standard"
            sx={{ float: "left", my: "2rem" }}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            component={Link}
            to="/backoffice/create-slide"
            variant="contained"
            sx={{ float: "right", my: "2rem" }}
          >
            Crear un nuevo slider
          </Button>
          <TableContainer component={Paper} elevation={3}>
            <Table sx={{ minWidth: 768 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Orden</TableCell>
                  <TableCell align="center">Nombre</TableCell>
                  <TableCell align="center">Descripción</TableCell>
                  <TableCell align="center">Imagen</TableCell>
                  <TableCell align="center">Acciones</TableCell>
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
                    <TableCell align="center">
                      <span
                        dangerouslySetInnerHTML={{ __html: slide.description }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <img
                        src={slide.image}
                        alt={slide.name}
                        style={{
                          maxWidth: "300px",
                          maxHeight: "150px",
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Stack direction="row" spacing={2}>
                        <Button
                          variant="outlined"
                          onClick={() => editSlide(slide.id)}
                        >
                          EDITAR
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => deleteSlide(slide.id)}
                        >
                          ELIMINAR
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Loading open={loading === "loading"}/>
        </Container>
      </div>
    </div>
  );
};

export default SlidesList;
