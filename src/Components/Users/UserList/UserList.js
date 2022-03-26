import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DeleteButton, EditButton } from './Buttons';

const UserList = () => {
    return(
        <div>
            <h1>UserList</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>User name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Acions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>User Example</TableCell>
                            <TableCell>User@example.com</TableCell>
                            <TableCell>
                                <EditButton/>
                                <DeleteButton/>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
         </div>
    )
}

export default UserList;