import React, { Fragment, useEffect } from "react";

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

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategoriesSlice, deleteCategorySlice } from "../../features/categories/categoriesSlice";

function createData(id, name, createdAt) {
  return { id, name, createdAt };
}

const CategoriesTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.list);

  useEffect(() => {
    dispatch(getCategoriesSlice());
  }, [dispatch]);

  const deleteHandler = (id) => {
    dispatch(deleteCategorySlice(id));
  };

  const editHandler = (id) => {
    navigate("/create-category");
    //Go to the Category Form, it is in /create-category. By now the only way to edit a category
  };

  return (
    <Fragment>
      <Button
        variant="contained"
        sx={{ margin: 2 }}
        href="/backoffice/Categorias/create"
      >
        Go to Backoffice
      </Button>
      <TableContainer component={Paper} sx={{ minWidth: 650, maxWidth: 1000 }}>
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
                <TableCell align="center">{category.createdAt}</TableCell>
                <TableCell align="center">
                  <Link
                    component="button"
                    onClick={() => deleteHandler(category.id)}
                  >
                    <DeleteIcon />
                  </Link>
                </TableCell>
                <TableCell align="center">
                  <Link
                    component="button"
                    onClick={() => editHandler(category.id)}
                  >
                    <EditIcon />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default CategoriesTable;
