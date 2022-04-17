import React, { Fragment, useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/es";

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
import { Grid } from "@mui/material";

import { useNavigate } from "react-router-dom";
import {
  deleteCategory,
  getCategories,
} from "../../Services/categoriesApiService";
import { infoAlert } from "../../features/alerts/alerts";

const CategoriesTable = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      console.log(res);
      setCategories(res.data.data);
    });
  }, []);

  const deleteHandler = (id) => {
    deleteCategory(id).then(() => {
      infoAlert("Listo!", "Categoria eliminada", "OK");
      getCategories().then((res) => {
        console.log(res);
        setCategories(res.data.data);
      });
    });
  };
  const editHandler = (id) => {
    navigate("/create-category");
    //Go to the Category Form, it is in /create-category. By now the only way to edit a category
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Button variant="contained" sx={{ margin: 2 }} href="/backoffice">
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
                <TableCell align="center">
                  {moment(category.created_at).calendar()}
                </TableCell>
                <TableCell align="center">
                  <Button onClick={() => deleteHandler(category.id)}>
                    <DeleteIcon />
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button
                    onClick={() => {
                      editHandler(category.id);
                    }}
                  >
                    <EditIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default CategoriesTable;
