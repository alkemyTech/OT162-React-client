import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { EditUser, DeleteUser } from './ButtonActions';
import { columns } from './Columns';
import { UserInfoRow } from './Row';
import { Link } from 'react-router-dom';
import '../../../styles/usersTable.css';

const UserList = () => {
  
    return(
        <div>
            <h3>User's List</h3>
            <Button variant="contained">
                <Link to="/backoffice/users/create">Create</Link>
            </Button>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.name}>{column.name}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {UserInfoRow.map((user) =>(
                            <TableRow key={user.id}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>
                                    <Button variant="contained" onClick={() => EditUser(user)}>Edit</Button>
                                    <Button variant="contained" onClick={() => DeleteUser(user)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
         </div>
    )
}

export default UserList;