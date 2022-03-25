import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Skeleton from "@mui/lab/Skeleton";
import activitiesTableStyle from "../../assets/styles/activitiesTableStyle";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import WarningIcon from "@mui/icons-material/Warning";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import rutas from "../../config/rutas";

const useStyles = makeStyles(activitiesTableStyle);

const ActivitiesListBackoffice = () => {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [modalConfirmation, setModalConfirmation] = useState(false);
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
    axios
      .delete(`${rutas.GET_ACTIVITY_URL}/${activity}`)
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
    setModalConfirmation(false);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justifyContent="center" alignItems="flex-end">
        <Grid item xs={12} md={11.5} lg={10}>
          <Paper style={{ zIndex: "1", position: "relative" }}>
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
                                  startIcon={<EditIcon />}
                                >
                                  Editar
                                </Button>
                                <Button
                                  id={row.id}
                                  variant="contained"
                                  onClick={() => handleConfirmDelete(row.id)}
                                  startIcon={<DeleteIcon />}
                                  color={"error"}
                                >
                                  {"Eliminar"}
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
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Modal
            open={modalConfirmation}
            onClose={() => {
              setModalConfirmation(false);
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{
              padding: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
            }}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Paper
              variant="outlined"
              style={{
                position: "absolute",
                maxWidth: 400,
                padding: "20px",
                backgroundColor: "#e0e0e0",
              }}
            >
              <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={4}>
                  <Icon
                    component={WarningIcon}
                    style={{ fontSize: 100 }}
                    color="warning"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom align="center" variant="h4">
                    Confirmar eliminar Actividad.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom align="center" variant="body1">
                    ¿Estas seguro de querer eliminar esta actividad de la ONG?
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button
                    fullWidth={true}
                    size="medium"
                    variant="contained"
                    color="error"
                    onClick={() => {
                      setModalConfirmation(false);
                    }}
                  >
                    Cancelar
                  </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button
                    fullWidth={true}
                    size="medium"
                    variant="contained"
                    color="success"
                    onClick={handleDelete}
                  >
                    Confirmar
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Modal>
        </Grid>
      </Grid>
    </div>
  );
};

export default ActivitiesListBackoffice;
