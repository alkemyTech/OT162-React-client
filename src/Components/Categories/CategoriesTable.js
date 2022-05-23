import React, { useEffect } from "react";
import moment from "moment";
import "moment/locale/es";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getCategoriesSlice,
  deleteCategorySlice,
} from "../../features/categories/categoriesSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import swal from "sweetalert";
//import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { infoAlert } from "../../features/alerts/alerts";
import NavbarBackoffice from '../Backoffice/NavbarBackoffice';
import CategoriesSearch from './CategoriesSearch';

const CategoriesTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.list);

  useEffect(() => {
    dispatch(getCategoriesSlice());
  }, [dispatch]);

  const deleteHandler = (id) => {
    swal({
      title: "¿Estás seguro que quieres eliminar esta categoría?",
      text: "Esta acción no se puede revertir.",
      buttons: ["No", "Si"],
      dangerMode: "true",
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteCategorySlice(id));
        infoAlert("Listo!", "Categoria eliminada", "OK");
      }
    });
  };

  const editHandler = (id) => {
    navigate(`/backoffice/categories/edit/${id}`);
  };

  return (
    <div>
      <div>
        <NavbarBackoffice/>
      </div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Button
          variant="contained"
          sx={{ margin: 4 }}
          href="/backoffice/categories/create"
        >
          Create category
        </Button>
        <CategoriesSearch/>
        <TableContainer
          component={Paper}
          sx={{
            minWidth: 650,
            maxWidth: 1000,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Created at</TableCell>
                <TableCell align="center">Delete</TableCell>
                <TableCell align="center">Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.name}>
                  <TableCell component="th" scope="row">
                    {category.name}
                  </TableCell>
                  <TableCell align="center">
                    {moment(category.created_at).calendar()}
                  </TableCell>
                  <TableCell align="center">
                    <Button onClick={() => deleteHandler(category.id)}>
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Link to="/create-category">
                      <Button onClick={() => editHandler(category.id)}>
                        <EditIcon />
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
};

export default CategoriesTable;
