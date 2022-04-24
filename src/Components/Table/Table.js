import { useEffect } from "react";
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
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BasicTable() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.news.data);
  let navigate = useNavigate();
  const handleEdit = (id) => navigate(`/backoffice/news/edit/${id}`);

  const handleDelete = (id) => {
    dispatch(deleteAsyncNewsThunk(id));
    dispatch(getAsyncNewsThunk());
  };

  useEffect(() => {
    dispatch(getAsyncNewsThunk());
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="center">Imagen</TableCell>
            <TableCell align="center">Creado el</TableCell>
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data[0] !== undefined &&
            data.map((row) => (
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
                <TableCell align="center">
                  {new Date(row.created_at).toLocaleString()}
                </TableCell>
                <TableCell align="center">
                  <Stack direction="row" spacing={3} justifyContent="center">
                    <Button
                      variant="contained"
                      onClick={() => handleEdit(row.id)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => handleDelete(row.id)}
                    >
                      Eliminar
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
