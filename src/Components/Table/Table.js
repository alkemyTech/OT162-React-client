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
  searchAsyncNewsThunk,
} from "../../features/news/newsSlice";
import { Button, Input, Stack } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";

export default function BasicTable() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.news.data);
  let navigate = useNavigate();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch.length >= 3)
      dispatch(searchAsyncNewsThunk(debouncedSearch));
    else dispatch(getAsyncNewsThunk());
  }, [debouncedSearch, dispatch]);

  const handleEdit = (id) => navigate(`/backoffice/news/edit/${id}`);

  const handleDelete = (id) => {
    dispatch(deleteAsyncNewsThunk(id));
    dispatch(getAsyncNewsThunk());
  };

  useEffect(() => {
    dispatch(getAsyncNewsThunk());
  }, []);

  return (
    <>
      <Stack spacing={2} direction="column" maxWidth="250px" margin="0 auto">
        <Link to="/backoffice/news/create">
          <Button variant="contained" sx={{ my: 3 }}>
            Agregar Novedades
          </Button>
        </Link>
        <Input
          type="search"
          placeholder="Buscar novedad"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Stack>
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
            {data[0] !== undefined ? (
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
              ))
            ) : (
              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  colSpan={4}
                >
                  No se encontraron resultados
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
