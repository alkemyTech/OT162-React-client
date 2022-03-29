import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },  
  {
    field: 'image',
    headerName: 'Image',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

export default function DataGridDemo() {
    const [rows, setRows] = useState([
        { id: 1, name: 'Snow', image: 35 },
        { id: 2, name: 'Lannister',  image: 42 },
        { id: 3, name: 'Lannister',  image: 45 },
        { id: 4, name: 'Stark',  image: 16 },
        { id: 5, name: 'Targaryen',  image: null },
        { id: 6, name: 'Melisandre',  image: 150 },
        { id: 7, name: 'Clifford',  image: 44 },
        { id: 8, name: 'Frances',  image: 36 },
        { id: 9, name: 'Roxie',  image: 65 },
    ])
    
    const eliminar = (row) => {
        setRows(rows.filter(x => x.id !== row.id));
      }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(row) => row.id}
      />
    </div>
  );
}