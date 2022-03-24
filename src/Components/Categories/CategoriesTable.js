import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function createData(name, createdAt) {
  return { name, createdAt };
}

const rows = [
  createData("Category 1", "10 Marzo 2021"),
  createData("Category 2", "10 Abril 2021"),
];

const categoryTable = (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Nombre</TableCell>
          <TableCell align="center">Fecha de creación</TableCell>
          <TableCell align="center">Eliminar</TableCell>
          <TableCell align="center">Editar</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="center">{row.createdAt}</TableCell>
            <TableCell align="center">
              <DeleteIcon />
            </TableCell>
            <TableCell align="center">
              <EditIcon />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

const CategoriesTable = () => {
  return categoryTable;
};

export default CategoriesTable;

// Al ingresar a la ruta /backoffice/categories, mostrará el listado de Categorías para el usuario administrador
// en una tabla. El mismo tendrá datos mockeados para representar los datos, que posteriormente se obtendrán
// desde el endpoint de listado de Categorías. La tabla mostrará los campos name y createdAt, y las acciones para eliminar y editar.
// En la sección superior, mostrará un componente <Link> que redirigirá a la ruta /backoffice/Categorías/create.
