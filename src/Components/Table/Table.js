import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GetNews } from "../../Services/newsApiService";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncNewsSlice } from "../../features/news/newsSlice";

export default function BasicTable() {
  const dispatch = useDispatch();
  const fetchedNews = useSelector;

  const [news, setNews] = useState([]);
  const [rows, setRows] = useState([
    createData(1, "Frozen yoghurt", 159, 6.0),
    createData(2, "Ice cream sandwich", 237, 9.0),
    createData(3, "Eclair", 262, 16.0),
    createData(4, "Cupcake", 305, 3.7),
    createData(5, "Gingerbread", 356, 16.0),
  ]);
  function createData(id, name, image, createdAt, carbs, protein) {
    return { id, name, image, createdAt, carbs, protein };
  }
  useEffect(() => {
    dispatch(getAsyncNewsSlice);
  }, []);

  console.log(news);

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
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.image}</TableCell>
              <TableCell align="center">{row.createdAt}</TableCell>
              <TableCell align="right">
                <button>Editar</button>
              </TableCell>
              <TableCell align="right">
                <button>Eliminar</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
