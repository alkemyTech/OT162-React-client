import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

export default function BasicTable() {
  const [rows, setRows] = useState([
    createData(1,'Frozen yoghurt', 159, 6.0),
    createData(2,'Ice cream sandwich', 237, 9.0),
    createData(3,'Eclair', 262, 16.0),
    createData(4,'Cupcake', 305, 3.7),
    createData(5,'Gingerbread', 356, 16.0),
  ]);
  function createData(id, name, image, createdAt, carbs, protein) {
    return {id,  name, image, createdAt, carbs, protein };
  } 
  
  const eliminar = (row) => {
    setRows(rows.filter(x => x.id !== row.id));
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Created at</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.image}</TableCell>
              <TableCell align="right">{row.createdAt}</TableCell>
              <TableCell align="right"><button onClick={() => eliminar()}>Editar</button></TableCell>
              <TableCell align="right"><button onClick={() => eliminar(row)}>Eliminar</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

