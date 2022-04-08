import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Skeleton from "@mui/lab/Skeleton";
import activitiesTableStyle from "../../assets/styles/activitiesTableStyle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import rutas from "../../config/rutas";
import PopUpWarning from "../Popups/PopUpWarning";
import PopUpOpDone from "../Popups/PopUpOpDone";
import Loading from "../Utilities/Loading";
import { Backdrop } from "@mui/material";
import {errorAlert} from '../../features/alerts/alerts';

const useStyles = makeStyles(activitiesTableStyle);

const ActivitiesListBackoffice = () => {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [modalConfirmation, setModalConfirmation] = useState(false);
  const [modalOperation, setModalOperation] = useState([false, ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [activity, setActivity] = useState(false);

  const rows = [
    {
      id: 1,
      name: "Titulo de prueba",
      image: "http://ongapi.alkemy.org/storage/Fxrssbkor4.jpeg",
      createdAt: "2022-03-04T16:47:37.000000Z",
    },
    {
      id: 2,
      name: "Titulo de prueba",
      image: "http://ongapi.alkemy.org/storage/Fxrssbkor4.jpeg",
      createdAt: "2022-03-04T16:47:37.000000Z",
    },
    {
      id: 3,
      name: "Titulo de prueba",
      image: "http://ongapi.alkemy.org/storage/Fxrssbkor4.jpeg",
      createdAt: "2022-03-04T16:47:37.000000Z",
    },
    {
      id: 4,
      name: "Titulo de prueba",
      image: "http://ongapi.alkemy.org/storage/Fxrssbkor4.jpeg",
      createdAt: "2022-03-04T16:47:37.000000Z",
    },
    {
      id: 5,
      name: "Titulo de prueba",
      image: "http://ongapi.alkemy.org/storage/Fxrssbkor4.jpeg",
      createdAt: "2022-03-04T16:47:37.000000Z",
    },
    {
      id: 6,
      name: "Titulo de prueba",
      image: "http://ongapi.alkemy.org/storage/Fxrssbkor4.jpeg",
      createdAt: "2022-03-04T16:47:37.000000Z",
    },
    {
      id: 7,
      name: "Titulo de prueba",
      image: "http://ongapi.alkemy.org/storage/Fxrssbkor4.jpeg",
      createdAt: "2022-03-04T16:47:37.000000Z",
    },
  ];

  const columns = [
    {
      id: "name",
      minWidth: 245,
      label: "Nombre",
      dataKey: "Nombre",
    },
    {
      id: "image",
      minWidth: 240,
      label: "Imagen",
      dataKey: "Imagen",
    },
    {
      id: "createdAt",
      minWidth: 245,
      label: "Fecha Creacion",
      dataKey: "Fecha Creacion",
    },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleConfirmDelete = (id) => {
    setModalConfirmation(true);
    setActivity(id);
  };

  const handleDelete = () => {
    setModalConfirmation(false);
    setIsLoading(true);
    axios
      .delete(`${rutas.GET_ACTIVITY_URL}/${activity}`)
      .then(() => {
        setModalOperation([true, "succes"]);
        setIsLoading(false);
      })
      .catch((e) => {
        setModalOperation([true, "error"]);
        setIsLoading(false);
        errorAlert("Error", "Error al eliminar la actividad", "error");
      });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justifyContent="center" alignItems="flex-end">
        <Grid item xs={12} md={11.5} lg={11}>
          <Button
            variant="outlined"
            to="/backoffice/activities/create"
            component={RouterLink}
            className={classes.buttonAdd}
            startIcon={<AddIcon />}
          >
            Crear Nueva Actividad
          </Button>
        </Grid>
        <Grid item xs={12} md={11.5} lg={11}>
          <Paper spacing={3} style={{ zIndex: "1", position: "relative" }}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column, index) => (
                      <TableCell
                        className={classes.header}
                        key={index}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                    <TableCell
                      className={classes.header}
                      key={columns.length}
                      style={{ minWidth: 245 }}
                    >
                      Acciones
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.length > 0 ? (
                    rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={index}
                          >
                            {columns.map((column, index) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={index} align={column.align}>
                                  {column.id === "image" ? (
                                    <Box
                                      component="img"
                                      sx={{
                                        height: "100px",
                                        width: "100px",
                                      }}
                                      src={value}
                                    />
                                  ) : column.id === "createdAt" ? (
                                    value.slice(0, -17)
                                  ) : (
                                    value
                                  )}
                                </TableCell>
                              );
                            })}
                            <TableCell key={columns.length}>
                              <Grid
                                spacing={1}
                                container
                                direction="row"
                                justifyContent="space-around"
                                alignItems="center"
                              >
                                <Button
                                  variant="contained"
                                  to={`/backoffice/activities/edit/${row.id}`}
                                  component={RouterLink}
                                  className={classes.button}
                                  startIcon={<EditIcon />}
                                >
                                  Editar
                                </Button>
                                <Button
                                  id={row.id}
                                  variant="contained"
                                  onClick={() => handleConfirmDelete(row.id)}
                                  className={classes.button}
                                  startIcon={<DeleteIcon />}
                                  color={"error"}
                                >
                                  "Eliminar"
                                </Button>
                              </Grid>
                            </TableCell>
                          </TableRow>
                        );
                      })
                  ) : (
                    <>
                      {[0, 1, 2, 3, 4].map((i) => (
                        <TableRow key={i}>
                          <TableCell colSpan={6}>
                            <Skeleton height={20} animation="wave" />
                          </TableCell>
                        </TableRow>
                      ))}
                    </>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <Backdrop className={classes.backdrop} open={isLoading}>
              <Loading />
            </Backdrop>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <PopUpWarning
            open={modalConfirmation}
            setOpen={setModalConfirmation}
            title="Confirmar eliminar Actividad"
            text="¿Estas seguro de querer eliminar esta actividad de la ONG?"
            handleConfirm={handleDelete}
          />
        </Grid>
        <Grid item xs={12}>
          <PopUpOpDone
            open={modalOperation[0]}
            result={modalOperation[1]}
            setOpen={setModalOperation}
            text={
              modalOperation[1] === "success"
                ? "La Actividad fue eliminada con exito"
                : "La Actividad no pudo ser eliminada."
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ActivitiesListBackoffice;
