import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import {
  getAsyncNewsThunk,
  deleteAsyncNewsThunk,
} from "../../features/news/newsSlice";

export default function BasicTable() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.news.data);

  useEffect(() => {
    dispatch(getAsyncNewsThunk());
    console.log(data);
  }, [dispatch]);

  // const eliminar = (row) => {
  //   setRows(rows.filter(x => x.id !== row.id));
  // }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Created at</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">
                <img src={row.image} style={{ maxHeight: 60 }}></img>
              </TableCell>
              <TableCell align="center">{row.created_at}</TableCell>
              <TableCell align="right">
                <button>Editar</button>
              </TableCell>
              <TableCell align="right">
                <button onClick={dispatch(deleteAsyncNewsThunk)}>
                  Eliminar
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
