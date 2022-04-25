import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { columns } from "./Columns";
import { UserInfoRow } from "./Row";
import { Link } from "react-router-dom";
import "../../../styles/usersTable.css";
import { useSelector, useDispatch } from "react-redux";
import {
  populateUsersList,
  removeUserById,
  selectUsersList,
  selectUsersState,
} from "../../../features/users/usersSlice";
import { errorAlert } from "../../../features/alerts/alerts";
import Loading from "../../Utilities/Loading";
import { useState, useEffect } from "react";
import PersistentSideBar from "../../../features/backoffice/sideBar";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const usersList = useSelector(selectUsersList);
  const usersStatus = useSelector(selectUsersState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (usersStatus === "idle") dispatch(populateUsersList());
    if (usersStatus === "loading") setLoading(true);
    else setLoading(false);
    if (usersStatus === "error") {
      setError(true);
      errorAlert(
        "Error",
        "An error has occurred while getting users list.",
        "Ok"
      );
    }
  }, [usersStatus, dispatch]);

  const deleteUser = (id) => {
    // Aca lo dejo dentro de una funcion para que luego agreguen alguna advertencia
    // visual o cartel de confirmacion
    dispatch(removeUserById(id));
  };

  const editUser = (user) => {
    // console.log(user.id)
    navigate(`/backoffice/edit-user/${user.id}`)
  }

  return (
    <div>
      <div>
        <PersistentSideBar/>
      </div>
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
            {loading && (
              <tr>
                <td colSpan="4">
                  <Loading open />
                </td>
              </tr>
            )}
            {!loading &&
              !error &&
              usersList.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Button variant="contained" onClick={() => editUser(user)}>
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserList;
