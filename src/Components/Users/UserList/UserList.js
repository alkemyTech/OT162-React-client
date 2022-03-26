import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { EditUser, DeleteUser, RedirectToCreate } from './ButtonActions';
import { columns } from './Columns';
import { UserInfoRow } from './Row';

const UserList = () => {
    return(
        <div>
            <h1>UserList</h1>
            <Button variant="contained" onClick={() => RedirectToCreate()}>Create new user</Button>
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